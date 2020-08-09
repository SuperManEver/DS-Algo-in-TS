import { Stack } from './index'

export function isPalindrome(word: string): boolean {
  const stack = new Stack()

  word.split('').forEach((ch) => {
    stack.push(ch)
  })

  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] === stack.pop()) {
      continue
    } else {
      return false
    }
  }

  return true
}
