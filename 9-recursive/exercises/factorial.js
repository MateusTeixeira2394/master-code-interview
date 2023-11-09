function findFactorialRecursive(number){

    if(number === 0) return 0;

    if(number === 1) return 1;

    return number * findFactorialRecursive(number - 1);

}

function findFactorialInteractive(number){

    if(number === 0) return 0;

    let acc = 1;

    for(let i = 2; i <= number; i++){

        acc = acc * i;  

    }

    return acc;

}