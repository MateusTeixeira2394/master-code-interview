class MinHeap {
    constructor() {
      this._heap = [];
    }
  
    // Get the index of the parent of the node at index i
    _parentIndex(i) {
      return Math.floor((i - 1) / 2);
    }
  
    // Get the index of the left child of the node at index i
    _leftChildIndex(i) {
      return 2 * i + 1;
    }
  
    // Get the index of the right child of the node at index i
    _rightChildIndex(i) {
      return 2 * i + 2;
    }
  
    // Insert a value into the heap and maintain the heap property
    insert(value) {
      this._heap.push(value);
      this._bubbleUp(this._heap.length - 1);
    }
  
    _bubbleUp(index) {
      while (index > 0) {
        const parentIdx = this._parentIndex(index);
        if (this._heap[parentIdx] <= this._heap[index]) {
          break;
        }
        // Swap the parent and child if the heap property is violated
        [this._heap[parentIdx], this._heap[index]] = [this._heap[index], this._heap[parentIdx]];
        index = parentIdx;
      }
    }
  
    // Remove and return the minimum value from the heap
    extractMin() {
      if (this._isEmpty()) {
        return null;
      }
      if (this._heap.length === 1) {
        return this._heap.pop();
      }
  
      const minValue = this._heap[0];
      this._heap[0] = this._heap.pop();
      this._sinkDown(0);
      return minValue;
    }
  
    _sinkDown(index) {
      const leftIdx = this._leftChildIndex(index);
      const rightIdx = this._rightChildIndex(index);
      let smallest = index;
  
      if (leftIdx < this._heap.length && this._heap[leftIdx] < this._heap[smallest]) {
        smallest = leftIdx;
      }
  
      if (rightIdx < this._heap.length && this._heap[rightIdx] < this._heap[smallest]) {
        smallest = rightIdx;
      }
  
      if (smallest !== index) {
        [this._heap[smallest], this._heap[index]] = [this._heap[index], this._heap[smallest]];
        this._sinkDown(smallest);
      }
    }
  
    // Get the minimum value in the heap without removing it
    peek() {
      return this._isEmpty() ? null : this._heap[0];
    }
  
    // Check if the heap is empty
    _isEmpty() {
      return this._heap.length === 0;
    }
  
    // Get the size of the heap
    size() {
      return this._heap.length;
    }
  }