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

class BST<T> {
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
}

var nums = new BST<number>()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
console.log('Inorder traversal: ')

nums.inOrder(nums.root)

console.log(nums.getMin())
console.log(nums.getMax())
