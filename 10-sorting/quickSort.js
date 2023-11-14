// It will choose the last element as a pivot and it will insert the greater values into
// the right array and the smaller ones into the left. After that, in a recursive way,
// it will call the quick sort again in both sides.

function quickSort(arr) {

    if (arr.length <= 1) return arr;

    let leftArr = [];
    let rightArr = [];
    let pivot = arr.pop();

    arr.forEach(currentValue => currentValue > pivot ? rightArr.push(currentValue) : leftArr.push(currentValue));

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];

}