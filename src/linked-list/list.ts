export class Node<T> {
  value: T | null
  next: Node<T> | null

  constructor(val?: T) {
    this.value = val || null
    this.next = null
  }
}

export class LinkedList<T> {
  head = new Node<T>()

  find(val: T): Node<T> | null {
    let curr: Node<T> | null = this.head

    while (curr && curr.value !== val) {
      curr = curr.next
    }

    return curr
  }

  append(val: T): void {
    if (this.head.value === null) {
      this.head = new Node<T>(val)
      return
    }

    let curr = this.head

    while (curr.next !== null) {
      curr = curr.next
    }

    curr.next = new Node<T>(val)
  }

  toString() {
    let result = ''
    let curr = this.head

    while (curr.next !== null) {
      result += curr.value ? curr.value + ', ' : ''
      curr = curr.next
    }

    if (curr.value) {
      result += curr.value
    }

    return result
  }

  //   insert(val: T): void {}

  //   remove(val: T): Node<T> {}

  //   toString(): string {}
}
