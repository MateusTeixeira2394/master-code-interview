function fibonacciMemoized() {

    let cache = {};
    
    return function (n) {

        if (n in cache) return cache[n];

        if (n < 2) {
            cache[n] = n;
            return cache[n];
        }

        cache[n] = fastFibonacci(n - 2) + fastFibonacci(n - 1);
    
        return cache[n];
    }

}

let fastFibonacci = fibonacciMemoized();

console.log(fastFibonacci(8));