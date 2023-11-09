function reverseStringInteractive(str){

    let stack = [];
    let response = "";

    for(let i = 0; i < str.length; i++){

        stack.push(str[i]);

    }

    while(stack.length > 0){
        response = response + stack.pop();
    }

    return response;

}

function reverseStringRecursive(str){

    if(str.length == 1){
        return str;
    }

    return reverseStringRecursive(str.substring(1)) + str[0];

}
