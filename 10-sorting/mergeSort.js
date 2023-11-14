function mergeTwoSortedList(arr1, arr2) {

    let sortedArray = [];
    let idx1 = 0;
    let idx2 = 0;

    while (idx1 < arr1.length && idx2 < arr2.length) {

        if (arr1[idx1] < arr2[idx2]) {
            sortedArray.push(arr1[idx1]);
            idx1++;
        } else {
            sortedArray.push(arr2[idx2]);
            idx2++;
        }

    }

    if (idx1 >= arr1.length) {
        sortedArray = [...sortedArray, ...arr2.slice(idx2)];
    } else {
        sortedArray = [...sortedArray, ...arr1.slice(idx1)];
    }

    return sortedArray;

}

function mergeSort(arr) {

    if (arr.length === 1) return arr;

    let middleIndex = Math.floor(arr.length / 2);

    let leftArr = arr.slice(0, middleIndex);
    let rightArr = arr.slice(middleIndex);

    return mergeTwoSortedList(mergeSort(leftArr), mergeSort(rightArr));

}
