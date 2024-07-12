class Node {
  constructor(value, color = "RED") {
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    this.insertNode(newNode);
    this.fixViolations(newNode);
  }

  insertNode(node) {
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent = null;

      while (current !== null) {
        parent = current;

        if (node.value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      node.parent = parent;

      if (node.value < parent.value) {
        parent.left = node;
      } else {
        parent.right = node;
      }
    }
  }

  fixViolations(node) {
    while (
      node !== this.root &&
      node.color === "RED" &&
      node.parent.color === "RED"
    ) {
      if (node.parent === node.parent.parent.left) {
        const uncle = node.parent.parent.right;

        if (uncle && uncle.color === "RED") {
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }

          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this.rotateRight(node.parent.parent);
        }
      } else {
        const uncle = node.parent.parent.left;

        if (uncle && uncle.color === "RED") {
          node.parent.color = "BLACK";
          uncle.color = "BLACK";
          node.parent.parent.color = "RED";
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }

          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this.rotateLeft(node.parent.parent);
        }
      }
    }

    this.root.color = "BLACK";
  }

  rotateLeft(node) {
    const rightChild = node.right;

    node.right = rightChild.left;
    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;
    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  rotateRight(node) {
    const leftChild = node.left;

    node.left = leftChild.right;
    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;
    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  // Inorder traversal (for demonstration purposes)
  inorderTraversal(node = this.root) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(`Value: ${node.value}, Color: ${node.color}`);
      this.inorderTraversal(node.right);
    }
  }
}

// Example usage
const redBlackTree = new RedBlackTree();
redBlackTree.insert(7);
redBlackTree.insert(3);
redBlackTree.insert(18);
redBlackTree.insert(10);
redBlackTree.insert(22);
redBlackTree.insert(8);
redBlackTree.insert(11);
redBlackTree.insert(26);
redBlackTree.insert(2);
redBlackTree.insert(6);
redBlackTree.insert(13);

console.log("Inorder Traversal:");
redBlackTree.inorderTraversal();