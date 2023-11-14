// Summary: Each interaction will select the smallest number and swap with the current index
// until scan all the array

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let smallerNumberIndex = getSmallerNumberIndex(i, arr);
        swap(smallerNumberIndex, i, arr);

    }

}

function getSmallerNumberIndex(firstIndex, arr) {

    let smallerNumberIndex = firstIndex;

    for (let i = firstIndex; i < arr.length; i++) {

        if (arr[i] < arr[smallerNumberIndex]) {
            smallerNumberIndex = i;
        }

    }

    return smallerNumberIndex;

}

function swap(idx1, idx2, arr) {

    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

}