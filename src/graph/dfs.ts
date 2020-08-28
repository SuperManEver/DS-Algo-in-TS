import { Stack } from '../stack'
import Node from './node'

function dfs<T>(
  initial: T,
  goalTest: (node: T) => boolean,
  successors: (node: T) => T[]
): Node<T> | void {
  /**
   * frontier is where we've yet to go
   */
  const frontier: Stack<Node<T>> = new Stack()
  frontier.push(new Node<T>(initial, undefined))

  const explored = new Set<T>()
  explored.add(initial)

  /**
   *  keep going while there is more to explore
   */
  while (!frontier.empty) {
    const currentNode = frontier.pop()
    const currentState: T = currentNode.state

    /**
     * if we found the goal, we're done
     */
    if (goalTest(currentState)) {
      return currentNode
    }

    const children = successors(currentState)

    for (let i = 0; i < children.length; i++) {
      const child = children[i]

      if (explored.has(child)) {
        continue
      }

      explored.add(child)
      frontier.push(new Node<T>(child, currentNode))
    }
  }

  return undefined
}

export default dfs
