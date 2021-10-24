import { Request, Response } from 'express'

import {
  getErrorData,
  getHttpRequestData,
  GetHttpRequestDataReturn,
  getMetadata,
} from '../src/ecs-winston'
import { ECS } from '../src/interfaces/ecs.interface'
import { ECSWinston } from './interfaces/ecs-winston.interface'

describe('ecs-winston', () => {
  describe('getErrorData', () => {
    it('should return "undefined" when the error passed is not an error instance', () => {
      expect(getErrorData(null)).toBe(undefined)
      expect(getErrorData('lorem')).toBe(undefined)
      expect(getErrorData(1234)).toBe(undefined)
      expect(getErrorData([])).toBe(undefined)
    })

    it('should return the error data when the error passed is an error instance', () => {
      const error = new Error('lorem')

      expect(getErrorData(error)).toEqual({
        message: 'lorem',
        stack_trace: error.stack,
        type: 'Error',
      } as ECS.Error)
    })
  })

  describe('getHttpRequestData', () => {
    it('should return nul when the req or res is not passed', () => {
      expect(getHttpRequestData({ req: undefined, res: {} as Response })).toBe(
        null
      )
      expect(getHttpRequestData({ res: undefined, req: {} as Request })).toBe(
        null
      )
    })

    it('should return the HTTP Request log data when the req and res is defined', () => {
      const requestId = '6477529d-085c-488f-8fc3-9ec7efe47f39'
      const headersByKey: { [key: string]: any } = {
        'content-length': 1234,
        'content-type': 'application/json',
        'user-agent': 'Thunder Client',
      }
      const req = {
        get: jest.fn((header) => headersByKey[header]),
        hostname: 'localhost:3000',
        url: '/',
        query: { foo: 'bar' },
        protocol: 'https',
        route: { path: '/' },
        body: { foo: 'bar' },
        httpVersion: '1.1',
        method: 'GET',
      } as unknown as Request
      const res = {
        get: jest.fn((header) => headersByKey[header]),
        statusCode: 200,
        locals: { body: { foo: 'bar' } },
      } as unknown as Response

      const expectedResult: GetHttpRequestDataReturn = {
        http: {
          request: {
            body: {
              bytes: headersByKey['content-length'],
              content: req.body,
            },
            id: requestId,
            method: req.method,
            mime_type: headersByKey['content-type'],
          },
          response: {
            body: {
              bytes: headersByKey['content-length'],
              content: res.locals.body,
            },
            mime_type: headersByKey['content-type'],
            status_code: res.statusCode,
          },
          version: req.httpVersion,
        },
        url: {
          domain: 'localhost',
          path: '/',
          port: 3000,
          query: 'foo=bar',
          scheme: req.protocol,
        },
        user_agent: { original: headersByKey['user-agent'] },
      }

      expect(getHttpRequestData({ req, res, requestId })).toEqual(
        expectedResult
      )
    })
  })

  describe('getMetadata', () => {
    it('should return the metadata', () => {
      const config: ECSWinston.Config = {
        exclude: ['foo.bar'],
      }
      const message: ECSWinston.Log.Metadata = {
        ecs: { message: 'foo' },
        exclude: ['bar.foo'],
      }
      const rest: ECSWinston.Log.Metadata = {
        ecs: { message: 'foo' },
        exclude: ['bar.foo'],
      }

      expect(getMetadata({ config, message })).toEqual({
        ecs: message.ecs,
        error: null,
        exclude: [
          ...(config.exclude ? config.exclude : []),
          ...(message.exclude ? message.exclude : []),
        ],
        req: undefined,
        res: undefined,
      })

      expect(getMetadata({ config, rest })).toEqual({
        ecs: rest.ecs,
        error: null,
        exclude: [
          ...(config.exclude ? config.exclude : []),
          ...(rest.exclude ? rest.exclude : []),
        ],
        req: undefined,
        res: undefined,
      })
    })
  })
})
