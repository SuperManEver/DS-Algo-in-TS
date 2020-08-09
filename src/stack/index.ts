export class Stack<T> {
  private dataStore: T[] = []
  private top: number = 0

  push(val: T): void {
    this.dataStore[this.top++] = val
  }
  pop(): T {
    return this.dataStore[--this.top]
  }

  peek(): T {
    return this.dataStore[this.top - 1]
  }

  clear(): void {
    this.dataStore = []
    this.top = 0
  }

  get length(): number {
    return this.top
  }

  get empty(): boolean {
    return false
  }
}
