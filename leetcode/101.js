function isSymmetric(root) {
  if (root === null) return true

  function isMirror(node1, node2) {
    if (node1 === null && node2 === null) return true
    if (node1 === null || node2 === null) return false
    if (node1?.val !== node2?.val) return false

    return (
      isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
    )
  }

  return isMirror(root.left, root.right)
}

/**
 ======== used bfs algorithm
function isSymmetric(root) {
  if (root === null) {
    return true;
  }

  let queue = [];
  queue.push(root.left);
  queue.push(root.right);

  while (queue.length > 0) {
    let node1 = queue.shift();
    let node2 = queue.shift();

    if (node1 === null && node2 === null) {
      continue;
    }
    if (node1 === null || node2 === null || node1.val !== node2.val) {
      return false;
    }

    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }

  return true;
}

 */
