class Edge {
  from: number
  to: number

  constructor(f: number, t: number) {
    this.from = f
    this.to = t
  }

  reversed(): Edge {
    return new Edge(this.to, this.from)
  }

  toString(): string {
    return `${this.from} -> ${this.to}`
  }
}

export default Edge
