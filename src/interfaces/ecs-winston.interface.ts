import { Request, Response } from 'express'

import { ECS } from './ecs.interface'

export namespace ECSWinston {
  export interface Config {
    /**
     * The return of this function will be defined in the fields "http.request.id" (when using req: Express and res: Express) and "trace.id".
     */
    setTraceId?: () => string | null
    /**
     * Defines the list of fields that should be excluded from all logs. E.g: ["http.request.id", "http.request.body.content"].
     */
    exclude?: string[]
  }

  export namespace Log {
    export interface Metadata {
      /**
       * Defines the log in ECS format. If the defined log matches a property used in conversions it will be displayed instead.
       */
      ecs?: ECS.Fields | undefined
      /**
       * Defines the list of fields that should only be excluded from that log. E.g: ["http.request.id", "http.request.body.content"].
       */
      exclude?: string[]
      /**
       * Defines an error to be transpiled in the log. E.g.: error: new Error("foo").
       */
      error?: any

      req?: Request
      res?: Response
    }
  }
}
