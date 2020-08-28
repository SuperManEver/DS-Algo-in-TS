import Edge from './edge'

class Graph<T> {
  private vertices: T[]
  private edges: Edge[][] = []

  constructor(vertices: T[] = []) {
    this.vertices = vertices
    vertices.forEach(() => {
      this.edges.push([])
    })
  }

  /**
   * Add a vertex to the graph and return its index
   */
  addVertex(vertex: T): number {
    this.vertices.push(vertex)
    this.edges.push([])

    return this.vertexCount - 1
  }

  /**
   * This is an undirected graph,
   * so we always add edges in both directions
   */
  addEdge(edge: Edge): void {
    this.edges[edge.from].push(edge)
    this.edges[edge.to].push(edge.reversed())
  }

  /**
   * Add an edge using vertex indices (convenience method)
   */
  addEdgeByIndices(from: number, to: number): void {
    const edge = new Edge(from, to)
    this.addEdge(edge)
  }

  /**
   * Add an edge by looking up vertex indices (convenience method)
   */
  addEdgeByVertices(first: T, second: T): void {
    const from: number = this.vertices.indexOf(first)
    const to: number = this.vertices.indexOf(second)

    this.addEdgeByIndices(from, to)
  }

  /**
   * Find the vertex at a specific index
   */
  vertexAt(index: number): T {
    return this.vertices[index]
  }

  /**
   * Find the index of a vertex in the graph
   */
  indexOf(vertex: T): number {
    return this.vertices.indexOf(vertex)
  }

  /**
   * Find the vertices that a vertex at some index is connected to
   */
  neighborsForIndex(idx: number): T[] {
    return this.edges[idx].map((edge) => this.vertexAt(edge.to))
  }

  /**
   * Lookup a vertice's index and find its neighbors (convenience method)
   */
  neighborsForVertex = (vertex: T): T[] => {
    return this.neighborsForIndex(this.indexOf(vertex))
  }

  /**
   * Return all of the edges associated with a vertex at some index
   */
  edgesForIndex(idx: number): Edge[] {
    return this.edges[idx]
  }

  /**
   * Lookup the index of a vertex and return its edges (convenience method)
   */
  edgesForVertex(vertex: T): Edge[] {
    return this.edgesForIndex(this.indexOf(vertex))
  }

  toString = (): string => {
    let desc = ''

    for (let i = 0; i < this.vertexCount; i++) {
      desc += `${this.vertexAt(i)} -> ${this.neighborsForIndex(i)}\n`
    }

    return desc
  }

  get vertexCount(): number {
    return this.vertices.length
  }

  get edgeCount(): number {
    return this.edges.map((edge) => edge.length).reduce((acc, e) => acc + e, 0)
  }
}

export default Graph
