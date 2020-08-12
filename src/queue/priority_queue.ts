import { Queue } from './queue'

class Patient {
  name: string
  priority: number

  constructor(name: string, priority: number) {
    this.name = name
    this.priority = priority
  }
}

class PriorityQueue<T extends Patient> extends Queue<T> {
  public dequeue(): T | undefined {
    let top: T | undefined = this.dataStore[0]
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i].priority > top.priority) {
        top = this.dataStore[i]
      }
    }
    return top
  }
}

export { Patient, PriorityQueue }
