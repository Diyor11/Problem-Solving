const Queue = require('../data-structures/queue')
const DGraph = require('../data-structures/graph-directed')

const graph = new DGraph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')

graph.addConnection('A', 'B')
graph.addConnection('A', 'C')
graph.addConnection('C', 'D')
graph.addConnection('D', 'E')
graph.addConnection('C', 'E')

function bfs(graph, startNode, targetNode) {
  const visited = new Set() // Set to keep track of visited nodes
  const queue = new Queue() // Queue to store nodes to visit
  const parentMap = {};
  queue.enqueue(startNode)
  visited.add(startNode)

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue()

    if (currentNode === targetNode) {
      console.log(visited)
      return reconstructPath(parentMap, startNode, targetNode)
    }

    for (const neighbor of graph.adjacencyList[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor)
        visited.add(neighbor)
        parentMap[neighbor] = currentNode
      }
    }
  }
  console.log(visited)
  return false
}

function reconstructPath(parentMap, startNode, targetNode) {
  const path = [targetNode];
  let current = targetNode;

  while (current !== startNode) {
    current = parentMap[current];
    path.unshift(current);
  }

  return path;
}

console.log(bfs(graph, 'A', 'E'))
