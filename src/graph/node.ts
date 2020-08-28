class Node<T> {
  state: T
  parent?: Node<T>
  cost: number
  heuristic: number

  constructor(
    state: T,
    parent?: Node<T>,
    cost: number = 0.0,
    heuristic: number = 0.0
  ) {
    this.state = state
    this.parent = parent
    this.cost = cost
    this.heuristic = heuristic
  }

  lowerThan(other: Node<T>): boolean {
    return this.cost + this.heuristic < other.cost + other.heuristic
  }
}

export default Node
