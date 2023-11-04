// The exercise was to build a stack using only stack
class MyQueue {

    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }

    _fillStack2(){

        while(this.stack1.length > 0){

            this.stack2.push(this.stack1.pop());

        }

    }

    _fillStack1(){

        while(this.stack2.length > 0){

            this.stack1.push(this.stack2.pop());

        }

    }

    enqueue(data){

        if(this.stack1.length === 0){

            this.stack1.push(data);

        } else {

            this._fillStack2();

            this.stack1.push(data);

            this._fillStack1();

        }

        return this.stack1.length;

    }

    dequeue(){

        return this.stack1.pop();

    }

    size(){
        return this.stack1.length;
    }

}