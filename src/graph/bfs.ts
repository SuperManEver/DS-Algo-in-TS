import Node from './node'
import { Queue } from '../queue/queue'

function bfs<T>(
  initial: T,
  goalTest: (node: T) => boolean,
  successors: (node: T) => T[]
): Node<T> | undefined {
  /**
   * frontier is where we've yet to go
   */
  const frontier: Queue<Node<T>> = new Queue()
  frontier.enqueue(new Node(initial, undefined))

  /**
   * explored is where we've been
   */
  const explored: Set<T> = new Set<T>()
  explored.add(initial)

  /**
   * keep going while there is more to explore
   */
  while (!frontier.empty) {
    const currentNode: Node<T> | undefined = frontier.dequeue()

    if (!currentNode) {
      continue
    }

    const currentState: T = currentNode.state

    /**
     * if we found the goal, we're done
     */
    if (goalTest(currentState)) {
      return currentNode
    }

    const children = successors(currentState)

    /**
     * check where we can go next and haven't explored
     */
    for (let i = 0; i < children.length; i++) {
      const child = children[i]

      if (explored.has(child)) {
        continue
      }

      explored.add(child)
      frontier.enqueue(new Node<T>(child, currentNode))
    }
  }

  return undefined
}

export default bfs
