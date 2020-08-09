import { isPalindrome } from './is_palindrome'

describe('isPalindrome', () => {
  it('"racecar" is palindrome', () => {
    expect(isPalindrome('racecar')).toBeTruthy()
  })

  it('"hello" is not palindrome', () => {
    expect(isPalindrome('hello')).toBeFalsy()
  })
})
