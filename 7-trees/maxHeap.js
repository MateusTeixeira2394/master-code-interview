class MaxHeap {

    constructor() {
        this._heap = [];
    }

    _getParentIndex(childIndex) {

        return Math.floor((childIndex - 1) / 2);

    }

    _getLeftChildIndex(parentIndex) {

        return parentIndex * 2 + 1;

    }

    _getRightChildIndex(parentIndex) {

        return parentIndex * 2 + 2;

    }

    _getGreaterChildIndex(parentIndex) {

        let leftChildIndex = this._getLeftChildIndex(parentIndex);
        let rightChildIndex = this._getRightChildIndex(parentIndex);

        // Return the same parent index if it doesn't have any children
        if (leftChildIndex >= this._heap && rightChildIndex >= this._heap.length) return parentIndex;

        // If there isn't right child, it returns the left child index
        if (rightChildIndex >= this._heap.length) return leftChildIndex;

        return this._heap[leftChildIndex] > this._heap[rightChildIndex] ? leftChildIndex : rightChildIndex;

    }

    _swap(position1, position2) {

        let temp = this._heap[position1];
        this._heap[position1] = this._heap[position2];
        this._heap[position2] = temp;

    }

    _bubbleUp(current) {

        let parent = this._getParentIndex(current);

        if (this._heap[current] > this._heap[parent]) {

            this._swap(current, parent);
            this._bubbleUp(parent);
        }

    }

    _sinkDown(currentIndex) {

        let greaterChildIndex = this._getGreaterChildIndex(currentIndex);

        if (this._heap[greaterChildIndex] > this._heap[currentIndex]) {

            this._swap(greaterChildIndex, currentIndex);
            this._sinkDown(greaterChildIndex);

        }

    }

    _isEmpty() {
        return this._heap.length === 0;
    }

    insert(value) {

        this._heap.push(value);
        this._bubbleUp(this._heap.length - 1);

    }

    // Just see the maximum value
    peek() {

        return this._isEmpty ? null : this._heap[0];

    }

    // Remove and get the maximum value
    extractMax() {

        this._swap(0, this._heap.length - 1);
        let unwantedNode = this._heap.pop();

        this._sinkDown(0);

        return unwantedNode;

    }

}