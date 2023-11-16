function binarySearch(sortedArray, wantedValue) {

    if (sortedArray.length === 0) return null;

    let pivot = Math.floor(sortedArray.length / 2);

    if (wantedValue === sortedArray[pivot]) return sortedArray[pivot];

    if (wantedValue > sortedArray[pivot]) {

        return binarySearch(sortedArray.slice(pivot + 1), wantedValue);

    } else {

        return binarySearch(sortedArray.slice(0, pivot), wantedValue);

    }

}



