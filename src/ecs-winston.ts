import { Request, Response } from 'express'
import merge from 'lodash.merge'
import unset from 'lodash.unset'
import * as winston from 'winston'

import { stringify } from './ecs-schema-stringify'
import { ECSWinston } from './interfaces/ecs-winston.interface'
import { ECS } from './interfaces/ecs.interface'

const { combine, timestamp, printf } = winston.format

type GetHttpRequestDataParams = {
  req: Request | undefined
  res: Response | undefined
  requestId: string | null
}

type GetMetadataParams = {
  config: ECSWinston.Config | undefined
  message: ECSWinston.Log.Metadata
  rest: ECSWinston.Log.Metadata
}

type GetECSLogParsedParams = {
  config: ECSWinston.Config
  level: string
  message: string | ECSWinston.Log.Metadata
  timestamp: string
  rest: any
}

export function getHttpRequestData({
  req,
  res,
  requestId,
}: GetHttpRequestDataParams): {
  http: ECS.Log.HttpFields
  user_agent: ECS.Log.UserAgentFields
} {
  if (!req || !res) return null

  const { httpVersion, method, headers, body } = req

  const request = {
    id: requestId,
    method,
    headers,
    body: {
      bytes: Number(req.get('content-length')),
      content: body,
    },
    mime_type: req.get('content-type'),
  }

  const response = {
    status_code: res.statusCode,
    mime_type: res.get('content-type'),
    body: {
      bytes: Number(res.get('content-length')),
      content: res.locals.body,
    },
  }

  const user_agent = {
    original: req.get('user-agent'),
  }

  const http = {
    version: httpVersion,
    request,
    response,
  }

  return {
    http,
    user_agent,
  }
}

export function getMetadata({ rest, config, message }: GetMetadataParams) {
  const exclude = {
    config: config?.exclude || [],
    message: message.exclude || rest.exclude || [],
  }

  return {
    req: message.req || rest.req,
    res: message.res || rest.res,
    ecs: message.ecs || rest.ecs,
    error: message.error || rest.error || null,
    exclude: [...exclude.config, ...exclude.message],
  }
}

export function getErrorData(error: any) {
  if (!error || !(error instanceof Error)) return undefined

  return {
    type:
      Object.prototype.toString.call(error.constructor) === '[object Function]'
        ? error.constructor.name
        : error.name,
    message: error.message,
    stack_trace: error.stack,
  }
}

export function getECSLogParsed({
  config,
  level,
  message,
  timestamp,
  rest,
}: GetECSLogParsedParams): string {
  const { req, res, ecs, exclude, error } = getMetadata({
    rest: rest as ECSWinston.Log.Metadata,
    config,
    message: message as unknown as ECSWinston.Log.Metadata,
  })

  const messageIsString = typeof message === 'string'

  const traceId = config?.setTraceId?.() || null

  const httpRequestData = getHttpRequestData({
    req,
    res,
    requestId: traceId,
  })

  let ecsLogData: ECS.Log.RootFields = {
    '@timestamp': timestamp,
    log: { level: String(level) },
    message: messageIsString ? message : null,
    ecs: {
      version: '1.12.0',
    },
    ...(httpRequestData ? httpRequestData : {}),
    ...(traceId
      ? {
          trace: {
            id: traceId,
          },
        }
      : {}),
  }

  ecsLogData.error = getErrorData(error)

  if (ecs) ecsLogData = merge(ecsLogData, ecs)

  // Excluding properties by paths in "exclude" option
  exclude.forEach((path = '') => {
    const splittedPath = path.split('.')

    unset(ecsLogData, splittedPath)
  })

  return stringify(ecsLogData)
}

export const ecsWinstonFormat = (config?: ECSWinston.Config) =>
  combine(
    timestamp(),
    printf(({ level, message, timestamp, ...rest }) =>
      getECSLogParsed({
        config,
        level,
        message,
        timestamp,
        rest,
      })
    )
  )
