import { Stack } from './index'

export function isParenthBalanced(exp: string): boolean {
  const stack = new Stack()

  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(' || exp[i] === ')') {
      stack.push(exp[i])
    }
  }

  return stack.length % 2 === 0
}
