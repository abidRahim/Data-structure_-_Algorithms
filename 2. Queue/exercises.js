/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.

1. Implement Queue Data Structure using String
  Operations you need to add are
    * enqueue(value) - add a new value and returns the size of the storage
    * isEmpty() - returns true if the storage is empty
    * dequeue() - remove one element and returns the deleted element
    * peek() - displays the latest element in the storage
    * size() - the size of the storage
*/

// String implementation
class Queue {
  constructor() {
    this._storage = ""; // String Implementation
    this.count = 0;
  }
  isEmpty() {
    return this._storage.length === 0 ? true : false;
  }
  enqueue(value) {
    this._storage +=  "/" + value;
    return ++this.count;
  }
  dequeue() {
    const dequed = this._storage.slice(0, this._storage.indexOf("/"))
    this._storage = this._storage.slice(this._storage.indexOf("/") + 1);
    this.count--;
    return dequed;
  }
  peek() {
    return this._storage.slice(this._storage.lastIndexOf("/") + 1);
  }
  size() {
    return this.count;
  }
}

// Object Implementation
class Queue {
  constructor() {
    this._storage = {}; // Object Implementation
    this.startIndex = 0;
    this.count = 0;
  }
  isEmpty() {
    return (this.count - this.startIndex) === 0 ? true : false;
  }
  enqueue(value) {
    this._storage[this.count] = value;
    return ++this.count;
  }
  dequeue() {
    if (this.count - this.startIndex > 0) {
      const dequeued = this._storage[this.startIndex];
      delete this._storage[this.startIndex]
      this.startIndex++;
      return dequeued;
    } else 
    return "Queue is empty";
  }
  peek() {
    return this._storage[this.count - 1];
  }
  size() {
    return (this.count - this.startIndex);
  }
}

/*
Implement all above methods using Object data type
  Additionals:
    1. Modify your queue to take max capacity as a parameter and once you exceed the size it should
    print message "Max capacity already reached"
    2. Make a method named 'contains' which will return true if any of the value matches the value of object.
    queue.contains('hello') - true or false
    3. Write a method named sort() which sorts by value
*/

class Queue {
  constructor(maxCapacity) {
    this._storage = {}; // Object Implementation
    this.startIndex = 0;
    this.count = 0;
    this.maxCapacity = maxCapacity;
  }
  isEmpty() {
    return (this.count - this.startIndex) === 0 ? true : false;
  }
  enqueue(value) {
    if (this.count < this.maxCapacity) {
      this._storage[this.count] = value;
      return ++this.count;
    } else
    return "Max capacity already reached";
  }
  dequeue() {
    if (this.count - this.startIndex > 0) {
      const dequeued = this._storage[this.startIndex];
      delete this._storage[this.startIndex]
      this.startIndex++;
      return dequeued;
    } else 
    return "Queue is empty";
  }
  peek() {
    return this._storage[this.count - 1];
  }
  size() {
    return (this.count - this.startIndex);
  }
}

// Use for testing
// var myQueue = new Queue(3);
// console.log(myQueue.enqueue('a'), 'should be 1');
// console.log(myQueue.enqueue('b'), 'should be 2');
// console.log(myQueue.enqueue('c'), 'should be 3');
// console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
// console.log(myQueue.dequeue(), 'should be a');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.peek(), 'should be b');
// console.log(myQueue.count(), 'should be 2');
// console.log(myQueue.contains('b'), 'should be true');
// console.log(myQueue.contains('d'), 'should be false');
// console.log(myQueue._storage, myQueue._head);
// console.log(myQueue.until('b'), 'should be 1');
// console.log(myQueue.until('c'), 'should be 2');
// console.log(myQueue.until('d'), 'should be null');
