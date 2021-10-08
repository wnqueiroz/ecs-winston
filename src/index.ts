import { ECSWinston } from './interfaces/ecs-winston.interface'
import { ECS } from './interfaces/ecs.interface'

/**
 * See the ECS Field Reference:
 * @see https://www.elastic.co/guide/en/ecs/1.12/ecs-field-reference.html.
 */
export type ECSLog = ECS.Log.Fields
/**
 * Metadata of the logs that will be displayed.
 */
export type LogMetadata = ECSWinston.Log.Metadata

export { ecsWinstonFormat } from './ecs-winston'
