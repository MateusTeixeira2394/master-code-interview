function containsCommonItems(arr1, arr2) {

    const hash1 = {};
    const hash2 = {};

    var index1 = 0;
    var index2 = 0;

    while(index1 < arr1.length-1 || index2 < arr2.length-1){

        const currentValue1 = arr1[index1];
        const currentValue2 = arr2[index2];

        if(currentValue1 == currentValue2){
            return true;
        }

        if(hash2[currentValue1] || hash1[currentValue2]){
            return true;
        }

        if(index1 < arr1.length-1){
            hash1[currentValue1] = true;
            index1++;
        }

        if(index2 < arr2.length-1){
            hash2[currentValue2] = true;
            index2++;
        }

    }

    return false;

}

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "w", "k"];

const result = containsCommonItems(arr1, arr2);

console.log(result);