class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(data) {
    const newNode = new Node(data)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(currentNode, newNode) {
    // Choose a side (left or right) to insert based on your criteria
    // Here, we'll continue to insert left if there's space, otherwise right.
    if (currentNode !== null) {
      if (currentNode.left === null) {
        currentNode.left = newNode
      } else {
        this.insertNode(currentNode.right, newNode)
      }
    } else {
      // Handle the case of an empty tree (no root node)
      console.error('Tree is empty, cannot insert.')
    }
  }
}
const tree = new BinaryTree()

tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)
tree.insert(6)
tree.insert(7)
tree.insert(8)
console.log(tree)
