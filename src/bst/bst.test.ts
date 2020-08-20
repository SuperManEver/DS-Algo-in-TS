import { BST } from './index'

let bst: BST<number>

beforeEach(() => {
  bst = new BST<number>()

  bst.insert(23)
  bst.insert(45)
  bst.insert(16)
  bst.insert(37)
  bst.insert(3)
  bst.insert(99)
  bst.insert(22)
})

test('find smallest in subtree', () => {
  if (!bst) {
    return
  }

  const node = bst.find(23)

  if (node) {
    const sNode = bst.getSmallest(node)

    expect(sNode).not.toBeNull()
    expect(sNode && sNode.data).toBe(3)
  }
})
