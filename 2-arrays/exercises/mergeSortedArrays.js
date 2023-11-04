function mergeSortedArrays(arr1, arr2) {

    let index1 = 0;
    let index2 = 0;
    let mergedArr = [];

    if (!arr1 || !arr2) return [];

    if (arr1.length === 0) return arr2;

    if (arr2.length === 0) return arr1;

    while (index1 < arr1.length && index2 < arr2.length) {

        if (arr1[index1] < arr2[index2]) {
            mergedArr.push(arr1[index1]);
            index1++;

        } else {

            mergedArr.push(arr2[index2]);
            index2++;

        }

    }

    if (index1 === arr1.length) {
        mergedArr = [...mergedArr, ...arr2.slice(index2)];
    } else {
        mergedArr = [...mergedArr, ...arr1.slice(index1)];
    }

    return mergedArr;

}