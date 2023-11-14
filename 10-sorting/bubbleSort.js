// Summary: Each interaction will bubble the greatest number up
// throughout the array

function bubbleSort(arr) {

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {

            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr);
            }

        }
    }


}

function swap(index1, index2, arr) {

    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

}