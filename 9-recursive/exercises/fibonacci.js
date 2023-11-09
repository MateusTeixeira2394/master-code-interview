function fibonacciRecursive(number) {

    if (number === 0) return 0;

    if (number === 1) return 1;

    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);

}

function fibonacciInteractive(number) {

    let arr = [0, 1];

    for (let i = 2; i <= number; i++) {

        arr.push(arr[i - 2] + arr[i - 1]);

    }

    return arr[number];

}







