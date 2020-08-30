import { Queue } from './queue'
import Node from '../graph/node'

class Patient {
  name: string
  priority: number

  constructor(name: string, priority: number) {
    this.name = name
    this.priority = priority
  }
}

interface Comparable<T> {
  lowerThan(other: T): boolean
}

class PriorityQueue<T extends Comparable<T>> extends Queue<T> {
  public dequeue(): T | undefined {
    let top: T | undefined = this.dataStore[0]
    for (let i = 0; i < this.dataStore.length; i++) {
      if (top.lowerThan(this.dataStore[i])) {
        top = this.dataStore[i]
      }
    }
    return top
  }
}

export { Patient, PriorityQueue }
