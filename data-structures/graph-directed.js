class Graph {
  constructor() {
    this.adjacencyList = {} 
  }

  /* 
    {
      a: ['b'],
      b: []
    }
  */
  addNode(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = []
    }
  }

  addConnection(node1, node2) {
    if (this.adjacencyList[node1] && this.adjacencyList[node2]) {
      this.adjacencyList[node1].push(node2)
    }
  }

  removeNode(node) {
    if (this.adjacencyList[node]) {
      while (this.adjacencyList[node].length) {
        const adjacentnode = this.adjacencyList[node].pop()
        this.removeConnection(node, adjacentnode)
      }
      delete this.adjacencyList[node]
    }
  }

  removeConnection(node1, node2) {
    if (this.adjacencyList[node1]) {
      this.adjacencyList[node1] = this.adjacencyList[node1].filter(
        (v) => v !== node2
      )
    }
  }
}

const graph = new Graph()

graph.addNode('A')
graph.addNode('B')
graph.addConnection("A", "B")
graph.removeNode("B")

// console.log(graph.adjacencyList);

// bfs(startnode) {
//   const visited = {};
//   const result = [];
//   const queue = [];

//   visited[startnode] = true;
//   queue.push(startnode);

//   while (queue.length > 0) {
//     const currentnode = queue.shift();
//     result.push(currentnode);

//     for (const neighbor of this.adjacencyList[currentnode]) {
//       if (!visited[neighbor]) {
//         visited[neighbor] = true;
//         queue.push(neighbor);
//       }
//     }
//   }

//   return result;
// }


module.exports = Graph