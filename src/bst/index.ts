class Node<T> {
  data: T
  left: Node<T> | null = null
  right: Node<T> | null = null

  constructor(val: T, left: Node<T> | null, right: Node<T> | null) {
    this.data = val
    this.left = left
    this.right = right
  }

  show(): T | null {
    return this.data
  }
}

export class BST<T> {
  root: Node<T> | null = null

  insert(val: T): void {
    const node = new Node(val, null, null)

    if (this.root === null) {
      this.root = node
    } else {
      let current: Node<T> | null = this.root
      let parent: Node<T>

      while (true) {
        parent = current

        if (val < current.data) {
          current = current.left

          if (current === null) {
            parent.left = node
            break
          }
        } else {
          current = current.right

          if (current === null) {
            parent.right = node
            break
          }
        }
      }
    }
  }

  inOrder(node: Node<T> | null) {
    if (!(node == null)) {
      this.inOrder(node.left)
      console.log(node.show() + ' ')
      this.inOrder(node.right)
    }
  }

  preOrder(node: Node<T> | null) {
    if (!(node == null)) {
      console.log(node.show() + ' ')
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  postOrder(node: Node<T> | null): void {
    if (!(node == null)) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.show() + ' ')
    }
  }

  getMin(): T | null {
    let current = this.root

    while (current && !(current.left === null)) {
      current = current.left
    }

    return current ? current.data : null
  }

  getMax(): T | null {
    let current = this.root

    while (current && !(current.right === null)) {
      current = current.right
    }

    return current ? current.data : null
  }

  getSmallest(node: Node<T>): Node<T> | null {
    let root = node
    let current: Node<T> | null = root

    while (current && !(current.left === null)) {
      current = current.left
    }

    return current
  }

  find(val: T): Node<T> | null {
    var current = this.root

    while (current && current.data !== val) {
      if (val < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current == null) {
        return null
      }
    }
    return current
  }

  remove(val: T) {
    if (this.root) {
      this.root = this.removeNode(this.root, val)
    }
  }

  removeNode(node: Node<T>, data: T): Node<T> | null {
    if (node == null) {
      return null
    }

    if (data === node.data) {
      /**
       *
       * 1 case: leaf node
       *
       */
      if (node.left === null && node.right === null) {
        return null
      }

      /**
       *
       * 2 case: when node has only one child
       *
       */
      if (node.left === null) {
        return node.right
      }

      if (node.right === null) {
        return node.left
      }

      /**
       * 3 case: when node has 2 children
       */

      let tempNode = this.getSmallest(node.right)
      if (tempNode) {
        node.data = tempNode.data
        node.right = this.removeNode(node.right, tempNode.data)

        return node
      }
    } else if (data < node.data && node.left) {
      node.left = this.removeNode(node.left, data)
    } else if (node.right) {
      node.right = this.removeNode(node.right, data)
      return node
    }

    return node
  }
}

var bst = new BST<number>()
bst.insert(23)
bst.insert(45)
bst.insert(16)
bst.insert(37)
bst.insert(3)
bst.insert(99)
bst.insert(22)

bst.inOrder(bst.root)

bst.remove(16)

console.log(
  '---------------------------------------------------------------------'
)

bst.inOrder(bst.root)
