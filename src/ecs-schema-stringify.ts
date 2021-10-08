import fastJsonStringify, { Schema } from 'fast-json-stringify'

const types: {
  string: Partial<Schema>
  number: Partial<Schema>
  dynamicObject: Partial<Schema>
} = {
  string: { type: 'string' },
  number: { type: 'number' },
  dynamicObject: {
    type: 'object',
    additionalProperties: true,
  },
}

export const stringify = fastJsonStringify({
  type: 'object',
  properties: {
    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-base.html */
    '@timestamp': types.string,
    labels: types.dynamicObject,
    message: types.string,
    tags: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-log.html */
    log: {
      type: 'object',
      properties: {
        level: types.string,
      },
    },
    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-ecs.html */
    ecs: {
      type: 'object',
      properties: {
        version: types.string,
      },
    },
    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-tracing.html */
    trace: {
      type: 'object',
      properties: {
        id: types.string,
      },
    },
    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-http.html */
    http: {
      type: 'object',
      properties: {
        version: types.string,
        request: {
          type: 'object',
          properties: {
            id: types.string,
            method: types.string,
            headers: types.dynamicObject,
            mime_type: types.string,
            body: {
              type: 'object',
              properties: {
                bytes: types.number,
                content: types.dynamicObject,
              },
            },
          },
        },
        response: {
          type: 'object',
          properties: {
            status_code: types.number,
            mime_type: types.string,
            body: {
              type: 'object',
              properties: {
                bytes: types.number,
                content: types.dynamicObject,
              },
            },
          },
        },
      },
    },
    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-user_agent.html */
    user_agent: {
      type: 'object',
      properties: {
        original: types.string,
      },
    },
    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-error.html */
    error: {
      type: 'object',
      properties: {
        id: types.string,
        code: types.string,
        type: types.string,
        message: types.string,
        stack_trace: types.string,
      },
    },
  },
})
