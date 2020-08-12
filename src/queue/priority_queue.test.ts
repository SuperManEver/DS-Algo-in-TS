import { Patient, PriorityQueue } from './priority_queue'

test('test priority queue', () => {
  const p1 = new Patient('Andrew', 3)
  const p2 = new Patient('Roman', 1)
  const p3 = new Patient('Ivan', 5)

  const q = new PriorityQueue<Patient>()

  q.enqueue(p2)
  q.enqueue(p1)
  q.enqueue(p3)

  expect(q.dequeue()).toEqual(p3)
})
