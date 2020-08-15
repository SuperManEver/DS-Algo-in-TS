import { LinkedList, Node } from './list'

let l = new LinkedList<string>()

beforeEach(() => {
  l.append('hello')
  l.append('world')
  l.append('wassaby')
})

afterEach(() => {
  l = new LinkedList<string>()
})

test('append', () => {
  expect(l.toString()).toBe('hello, world, wassaby')
})

test('find', () => {
  const res = l.find('world')

  expect(res).toBeInstanceOf(Node)
  expect(res).not.toBeNull()
  expect(res && res.value).toBe('world')
})
