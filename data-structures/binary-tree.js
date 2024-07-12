class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (node.left === null) {
      node.left = newNode
    } else if (node.right === null) {
      node.right = newNode
    } else {
      // If both left and right children are already present, recursively insert into the left child.
      this.insertNode(node.left, newNode)
    }
  }

  traverseInOrder() {
    this.inOrderTraversal(this.root)
  }

  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left)
      console.log(node.value)
      this.inOrderTraversal(node.right)
    }
  }
}
// Example usage
const binaryTree = new BinaryTree()
binaryTree.insert(1)
binaryTree.insert(2)
binaryTree.insert(3)
binaryTree.insert(4)
binaryTree.insert(5)
binaryTree.insert(6)
binaryTree.insert(7)
binaryTree.insert(8)
binaryTree.traverseInOrder()
console.log(binaryTree.root)

/**
  1
  |\
  2 3
  |\
  4 5
  |\
  6 7
  |
  8
 */
