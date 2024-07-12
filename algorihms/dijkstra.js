const PriorityQueue = require("../data-structures/priority-queue");

function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const pq = new PriorityQueue();

  // Initialize distances with infinity
  for (const node in graph) {
    distances[node] = Infinity;
  }

  distances[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const { element: current } = pq.dequeue();

    if (visited.has(current)) {
      continue;
    }

    visited.add(current);

    for (const neighbor in graph[current]) {
      const distance = distances[current] + graph[current][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        pq.enqueue(neighbor, distance);
      }
    }
  }

  return distances;
}

const graph = {
  A: { B: 4, D: 1 },
  B: { A: 4, C: 2, D: 5 },
  C: { B: 2, E: 3 },
  D: { A: 1, B: 5, E: 1 },
  E: { C: 3, D: 1 }
};

const distances = dijkstra(graph, 'A');
console.log(distances);