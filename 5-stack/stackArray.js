// This is a stack implementation using Array data structure as a solution.
// Take into account that the Array has already implemented.
class Stack {

    constructor(data){

        this.stack = new Array();

        if(data){
            this.stack.push(data);
        }

    }

    push(data){
        return this.stack.push(data);        
    }

    pop(){
        return this.stack.pop()
    }

    peek(){

        if(this.stack.length === 0) return null;

        return this.stack[this.stack.length - 1];

    }

}