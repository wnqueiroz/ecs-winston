export namespace ECS {
  export namespace Log {
    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-http.html */
    export interface HttpFields {
      request?: {
        id?: string
        method?: string
        headers?: Record<string, unknown>
        mime_type?: string
        body?: {
          bytes?: number
          content?: Record<string, unknown>
        }
      }
      response?: {
        status_code?: number
        mime_type?: string
        body?: {
          bytes?: number
          content?: Record<string, unknown>
        }
      }
    }

    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-base.html */
    export interface BaseFields {
      '@timestamp': string
      labels?: Record<string, string>
      message?: string
      tags?: string[]
    }

    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-error.html */
    export interface ErrorFields {
      code?: string
      id?: string
      message?: string
      stack_trace?: string
      type?: string
    }

    // TODO: complete the fields
    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-log.html */
    export interface LogFields {
      level?: string
    }

    // TODO: complete the fields
    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-tracing.html */
    export interface TracingFields {
      id?: string
    }

    /** @see https://www.elastic.co/guide/en/ecs/1.12/ecs-user_agent.html */
    export interface UserAgentFields {
      original?: string
    }

    type FilteredBaseFields = Omit<BaseFields, '@timestamp'>

    /**
     * See the ECS Field Reference:
     * @see https://www.elastic.co/guide/en/ecs/1.12/ecs-field-reference.html
     */
    export interface Fields extends FilteredBaseFields {
      log?: LogFields
      trace?: TracingFields
      http?: HttpFields
      user_agent?: UserAgentFields
      error?: ErrorFields
    }

    export type RootFields = BaseFields &
      Fields & {
        ecs: {
          version: string
        }
      }
  }
}
