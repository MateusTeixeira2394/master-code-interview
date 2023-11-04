function reverseString(str) {

    if(!str || typeof str !== 'string') return "Your param must be a string";

    if(str.length < 2) return str;

    var length = str.length;
    var stack = [];

    for (let i = length-1; i >= 0; i--) {
        stack.push(str[i]);
    }
    
    return stack.join("");

}