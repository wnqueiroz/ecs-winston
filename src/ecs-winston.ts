import { Request, Response } from 'express'
import fastJsonStringify from 'fast-json-stringify'
import merge from 'lodash.merge'
import unset from 'lodash.unset'
import qs from 'qs'
import * as winston from 'winston'

import { ecsSchema } from './ecs-schema'
import { ECSWinston } from './interfaces/ecs-winston.interface'
import { ECS } from './interfaces/ecs.interface'

const { combine, timestamp, printf } = winston.format

export const stringify = fastJsonStringify(ecsSchema)

type GetHttpRequestDataParams = {
  req?: Request | undefined
  res?: Response | undefined
  requestId?: string | null
}

export type GetHttpRequestDataReturn = {
  http: ECS.Http
  user_agent: ECS.Useragent
  url: ECS.Url
} | null

type GetMetadataParams = {
  config?: ECSWinston.Config
  message?: ECSWinston.Log.Metadata
  rest?: ECSWinston.Log.Metadata
}

type GetECSLogParsedParams = {
  config?: ECSWinston.Config
  level: string
  message: string | ECSWinston.Log.Metadata
  timestamp: string
  rest: any
}

export function getHttpRequestData({
  req,
  res,
  requestId,
}: GetHttpRequestDataParams): GetHttpRequestDataReturn {
  if (!req || !res) return null

  const { httpVersion, method, body, hostname, url, query, protocol } = req

  const request: ECS.Request = {
    id: requestId || undefined,
    method,
    body: {
      bytes: Number(req.get('content-length')),
      content: body,
    },
    mime_type: req.get('content-type'),
  }

  const response: ECS.Response = {
    status_code: res.statusCode,
    mime_type: res.get('content-type'),
    body: {
      bytes: Number(res.get('content-length')),
      content: res.locals.body,
    },
  }

  const user_agent: ECS.Useragent = {
    original: req.get('user-agent'),
  }

  const http = {
    version: httpVersion,
    request,
    response,
  }

  const ecsUrl: ECS.Url = {}

  if (hostname) {
    const [host, port] = hostname.split(':')

    ecsUrl.domain = host
    ecsUrl.port = Number(port)
  }

  const hasQuery = url.indexOf('?')

  if (hasQuery) ecsUrl.query = qs.stringify(query)

  return {
    http,
    user_agent,
    url: {
      domain: ecsUrl.domain || undefined,
      path: req.route.path,
      port: ecsUrl.port || undefined,
      query: ecsUrl.query || undefined,
      scheme: ['http', 'https'].includes(protocol) ? protocol : undefined,
    },
  }
}

export function getMetadata({
  config,
  rest = {},
  message = {},
}: GetMetadataParams) {
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

  let ecsLogData: ECS.Root = {
    '@timestamp': timestamp,
    log: { level: String(level) },
    message: messageIsString ? message : '',
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
