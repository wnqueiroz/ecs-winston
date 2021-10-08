import { getErrorData } from '../src/ecs-winston'
import { ECS } from '../src/interfaces/ecs.interface'

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
      } as ECS.Log.ErrorFields)
    })
  })
})
