function getFirstRepetition(arr) {

    const map = {};

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];

        if (map[current]) {
            return current;
        } else {
            map[current] = true;
        }

    }

    return undefined;

}

var arr = [2, 3, 4, 5, 3, 2];

console.log(getFirstRepetition(arr));