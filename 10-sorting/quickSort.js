function quickSort(array) {

    let arr = array;

    if (arr.length <= 1) return arr;

    if (arr.length == 2) {

        if (arr[0] > arr[1]) {
            swap(arr, 0, 1);
        }

        return arr;

    }

    let pivotIdx = arr.length - 1;
    let currentIdx = 0;

    while (arr[currentIdx] > arr[pivotIdx] || currentIdx < pivotIdx) {

        if (arr[currentIdx] > arr[pivotIdx]) {

            shift(arr, currentIdx, pivotIdx);
            pivotIdx--;

        } else {

            currentIdx++;

        }

    }

    return [...quickSort(arr.slice(0, pivotIdx)), arr[pivotIdx], ...quickSort(arr.slice(pivotIdx + 1))];    

}

function shift(arr, currentIdx, pivotIdx) {

    if (pivotIdx - 1 === currentIdx) {
        swap(arr, currentIdx, pivotIdx);
    } else {
        swap(arr, pivotIdx, pivotIdx - 1);
        swap(arr, pivotIdx, currentIdx);
    }

}

function swap(arr, idx1, idx2) {

    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

}

module.exports = quickSort;