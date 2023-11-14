const arr = [1, [2, 3, [4, [5]]], 6, [7, [8]]];

function getSimpleArray(arr) {

    let simpleArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === 'number') {

            simpleArray.push(arr[i]);

        } else {

            simpleArray = [...simpleArray, ...getSimpleArray(arr[i])];

        }

    }

    return simpleArray;

}

function flatten(arr) {


    // get the simple array
    getSimpleArray(arr);

    // to do: apply some sort algorithm and return it
    
}

