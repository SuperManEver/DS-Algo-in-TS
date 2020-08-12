import { Deque, isPalindrome } from './deque'

test('front enque', () => {
  const q = new Deque()

  q.enqueue('milk')
  q.enqueue('bread')

  q.frontQueue('eggs')

  expect(q.toString()).toEqual('eggs, milk, bread')
})

test('is "racecar" is palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true)
})

test('is "hello" is not palindrome', () => {
  expect(isPalindrome('hello')).toBe(false)
})

test('is "rotator" is palindrome', () => {
  expect(isPalindrome('rotator')).toBe(true)
})
