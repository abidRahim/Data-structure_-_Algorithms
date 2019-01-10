/*
STACK
Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.

1. Implement Stack Data Structure using string data type
Operations you need to add are
  isEmpty() - returns true if the storage is empty
  push(value) - add a new value and returns the size of the storage
  pop() - remove one element and returns the deleted element
  peek() - displays the last pushed element in the storage
  size() - the size of the storage
*/

// String Implementation
class Stack {
  constructor() {
    this._storage = "";
  }
  isEmpty() {
    return (this._storage.length == 0) ? true : false;    
  }
  push(value) {
    this._storage += "/" + value;
    let count = 0;
    for(let i = 0; i < this._storage.length; i++) {
      if(this._storage[i] === "/")
      count++;
    }
    return count;
  }
  pop() {
    const deleted =  this._storage.slice(this._storage.lastIndexOf("/") + 1);
    this._storage = this._storage.slice(0, this._storage.lastIndexOf("/"));
    return deleted;
  }
  peek() {
    return this._storage.slice(this._storage.lastIndexOf("/") + 1);
  }
  size() {
    let count = 0;
    for(let i = 0; i < this._storage.length; i++) {
      if(this._storage[i] === "/")
      count++;
    }
    return count;
  }
}

// Object Implementation
class Stack {
  constructor() {
    this._storage = {};
    this.count = 0;
  }
  isEmpty() {
    return (Object.keys(this._storage).length === 0) ? true : false ;
    // or 
    // return this.count === 0 ? true: false;
  }
  push(value) {
    this._storage[this.count] = value;
    return ++this.count;
  }
  pop() {
    const deleted = this._storage[this.count - 1];
    delete this._storage[this.count - 1];
    this.count--;
    return deleted;
  }
  peek() {
    return this._storage[this.count - 1] ? this._storage[this.count - 1] : "null";
  }
  size() {
    return this.count;
  }
}

// 2. Implement every method given above using the 'object' data type.
// Additionals:
// Modify your stack to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached"

// Make a method named 'contains' which will return true if any of the value matches the value of object.
// stack.contains('hello') - true or false

// Use This For Testing

class Stack {
  constructor(maxCapacity) {
    this.maxCapacity = maxCapacity;
    this._storage = {};
    this.count = 0;
  }
  isEmpty() {
    return (Object.keys(this._storage).length === 0) ? true : false ;
    // or 
    // return this.count === 0 ? true: false;
  }
  push(value) {
    if (this.count < this.maxCapacity) {
      this._storage[this.count] = value;
      return ++this.count;
    } else {
      return "Max capacity already reached";
    }
  }
  pop() {
    const deleted = this._storage[this.count - 1];
    delete this._storage[this.count - 1];
    this.count--;
    return deleted;
  }
  peek() {
    return this._storage[this.count - 1] ? this._storage[this.count - 1] : "null";
  }
  size() {
    return this.count;
  }
  contains(item) {
    for(let key in this._storage) {
      if (this._storage[key] == item)
      return true;
    }
    return false;
  }
}

// var myStack = new Stack(3);
// console.log(myStack.isEmpty()) // true
// console.log(myStack.push('a'), 'should be 1');
// console.log(myStack.push('b'), 'should be 2');
// console.log(myStack.push('c'), 'should be 3');
// console.log(myStack.push('d'), 'Max capacity already reached');
// console.log(myStack.pop(), 'should be c');
// console.log(myStack.size(), 'should be 2');
// console.log(myStack.peek(), 'should be b');
// console.log(myStack.size(), 'should be 2');