const MinHeap = require("../7-trees/minHeap");

function heapSort(arr) {

    let sortedArray = [];
    let heap = new MinHeap();

    arr.forEach(element => heap.insert(element));

    while(!heap.isEmpty()){

        sortedArray.push(heap.extractMin());

    }

    return sortedArray;

}

module.exports = heapSort;