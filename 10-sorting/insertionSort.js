// Summary: Each interaction will insert the current value in a new sorted array

function insertionSort(arr) {

    if (arr.length === 0) return [];

    if (arr.length === 1) return arr;

    let sortedArray = [arr[0]];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < sortedArray[0]) {

            // insert the current value in the first position of the sorted array
            sortedArray.unshift(arr[i])

        }

        else if (arr[i] > sortedArray[sortedArray.length - 1]) {
            
            // insert the current value in the last position of the sorted array
            sortedArray.push(arr[i])

        }

        else {

            // otherwise, insert in the correct position
            for (let j = 1; j < sortedArray.length; j++) {

                if (arr[i] > sortedArray[j - 1] && arr[i] < sortedArray[j]){

                    sortedArray.splice(j, 0, arr[i]);
                    break;

                }

            }

        }



    }

    return sortedArray;

}