class Queue<T> {
  dataStore: T[] = []

  public enqueue(val: T): void {
    this.dataStore.push(val)
  }

  public dequeue(): T | undefined {
    return this.dataStore.shift()
  }

  public back(): T {
    return this.dataStore[this.dataStore.length - 1]
  }

  public toString(): string {
    return this.dataStore.join(', ')
  }

  get empty(): boolean {
    return this.dataStore.length === 0
  }

  public front(): T | undefined {
    return this.dataStore[0]
  }
}

export { Queue }
