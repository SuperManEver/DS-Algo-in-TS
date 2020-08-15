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

  insert(newElement: T, val: T): void {
    const newNode = new Node<T>(newElement)

    const node = this.find(val)

    if (node) {
      newNode.next = node.next
      node.next = newNode
    }
  }

  findPrevious(item: T): Node<T> | null {
    let currNode = this.head

    while (!(currNode.next == null) && currNode.next.value !== item) {
      currNode = currNode.next
    }
    return currNode
  }

  remove(val: T): Node<T> | null {
    let before: Node<T> | null = this.head
    let curr: Node<T> | null = this.head

    while (curr && curr.value !== val) {
      before = curr
      curr = curr.next
    }

    before.next = curr && curr.next

    return curr
  }

  remove2(val: T): Node<T> | null {
    const prev = this.findPrevious(val)

    const toDeleteNode = this.find(val)

    if (prev && toDeleteNode) {
      prev.next = toDeleteNode.next
    }

    return toDeleteNode
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
}
