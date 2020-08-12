import { Stack } from './index'

const OPERATORS = ['+', '-', '*', '/']

const isDigit = new RegExp(/\d+/)

export function infix2postfix(exp: string): string {
  const operators = new Stack<string>()
  const operands = new Stack<string>()

  for (let i = 0; i < exp.length; i++) {
    if (OPERATORS.includes(exp[i])) {
      operators.push(exp[i])
    } else if (isDigit.test(exp[i])) {
      operands.push(exp[i])
    }
  }

  let result: string = ''

  while (!operators.empty) {
    const currentOp = operators.pop()

    const last = operands.pop()
    const first = operands.pop()

    result += `${first} ${last} ${currentOp}`
  }

  return result
}
