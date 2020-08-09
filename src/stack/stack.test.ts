import { Stack } from './index'

describe('Stack', () => {
  describe('push', () => {
    it('should contains correct "peek" and "top" values', () => {
      const stack = new Stack()

      stack.push('fitness')
      stack.push('breakfast')

      expect(stack.length).toBe(2)
      expect(stack.peek()).toBe('breakfast')
    })
  })

  describe('pop', () => {
    it('should contains correct "peek" and "top" values', () => {
      const stack = new Stack()

      stack.push('fitness')
      stack.push('breakfast')

      const result = stack.pop()

      expect(result).toBe('breakfast')

      expect(stack.length).toBe(1)
      expect(stack.peek()).toBe('fitness')
    })
  })

  describe('clear', () => {
    it('should has correct length', () => {
      const stack = new Stack()

      stack.push('fitness')
      stack.push('breakfast')

      expect(stack.length).toBe(2)

      stack.clear()

      expect(stack.length).toBe(0)
    })
  })
})
