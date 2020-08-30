import Node from './node'
import { PriorityQueue } from '../queue/priority_queue'

function astar<T extends string>(
  initial: T,
  goalTest: (node: T) => boolean,
  successors: (node: T) => T[],
  heuristic: (node: T) => number
): Node<T> | undefined {
  /**
   * frontier is where we've yet to go
   */
  const frontier = new PriorityQueue<Node<T>>()
  frontier.enqueue(new Node(initial, undefined, 0.0, heuristic(initial)))

  /**
   * explored is where we've been
   */
  const explored: { [key: string]: number } = { initial: 0.0 }

  while (!frontier.empty) {
    const currentNode = frontier.dequeue()

    if (!currentNode) {
      continue
    }

    const currentState = currentNode.state

    if (goalTest(currentState)) {
      return currentNode
    }

    const children = successors(currentState)

    for (let i = 0; i < children.length; i++) {
      const child = children[i]

      const newCost = currentNode.cost + 1

      if (!(child in explored) || explored[child] > newCost) {
        explored[child] = newCost

        frontier.enqueue(
          new Node(child, currentNode, newCost, heuristic(child))
        )
      }
    }
  }

  return undefined
}

export default astar
