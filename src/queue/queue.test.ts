import { Queue } from './queue'

test('should be empty initially', () => {
  const q = new Queue<string>()

  expect(q.empty).toBe(true)
})

test('after enqueue should contains correct values', () => {
  const q = new Queue<string>()

  q.enqueue('milk')
  q.enqueue('bread')

  expect(q.empty).toBeFalsy
  expect(q.toString()).toBe('milk, bread')
})

test('after dequeue should contains correct values', () => {
  const q = new Queue<string>()

  q.enqueue('milk')
  q.enqueue('bread')

  expect(q.dequeue()).toBe('milk')
  expect(q.toString()).toBe('bread')
})

test('front', () => {
  const q = new Queue<string>()

  q.enqueue('milk')
  q.enqueue('bread')

  expect(q.front()).toBe('milk')
})

test('back', () => {
  const q = new Queue<string>()

  q.enqueue('milk')
  q.enqueue('bread')

  expect(q.back()).toBe('bread')
})
