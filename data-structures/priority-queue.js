class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(element, priority) {
    const item = { element, priority };
    let isAdded = false;

    for (let i = 0; i < this.heap.length; i++) {
      if (item.priority < this.heap[i].priority) {
        this.heap.splice(i, 0, item);
        isAdded = true;
        break;
      }
    }

    if (!isAdded) {
      this.heap.push(item);
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.heap.shift();
    }
    return null;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

module.exports = PriorityQueue