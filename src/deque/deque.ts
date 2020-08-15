import { Queue } from '../queue/queue'

class Deque<T> extends Queue<T> {
  frontQueue(val: T): void {
    this.dataStore.unshift(val)
  }
}

function isPalindrome(str: string): boolean {
  const q1 = new Deque()
  const q2 = new Deque()

  for (let i = 0; i < str.length; i++) {
    q1.enqueue(str[i])
    q2.frontQueue(str[i])
  }

  while (!q1.empty && !q2.empty) {
    if (q1.dequeue() === q2.dequeue()) {
      continue
    } else {
      return false
    }
  }

  return true
}

export { Deque, isPalindrome }
