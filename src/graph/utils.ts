import Node from './node'

export function nodeToPath<T>(node: Node<T>): T[] {
  const path: T[] = [node.state]

  /**
   * work backwards from end to front
   */

  while (node.parent) {
    node = node.parent
    path.push(node.state)
  }

  path.reverse()
  return path
}
