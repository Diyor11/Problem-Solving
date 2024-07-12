class Node {
  // Each node has two properties, its value and a pointer that indicates the node that follows
  constructor(value){
      this.value = value
      this.next = null
  }
}

// We create a class for the stack
class Stack {
  // The stack has three properties, the first node, the last node and the stack size
  constructor(){
      this.first = null
      this.last = null
      this.size = 0
  }
  // The push method receives a value and adds it to the "top" of the stack
  push(val){
      var newNode = new Node(val)
      if(!this.first){
          this.first = newNode  // {value: "value1", next: null}
          this.last = newNode // {value: "value1", next: null}
      } else {
          var temp = this.first // {value: "value1", next: null}
          this.first = newNode // {value: "value2", next: null}
          this.first.next = temp // {value: "value1", next: null}
      }
      return ++this.size // 1 // 2
  }
  // The pop method eliminates the element at the "top" of the stack and returns its value
  pop(){
      if(!this.first) return null
      var temp = this.first
      if(this.first === this.last){
          this.last = null
      }
      this.first = this.first.next
      this.size--
      return temp.value
  }
}

const stck = new Stack

stck.push("value1")
stck.push("value2")
stck.push("value3")

console.log(stck.first);
