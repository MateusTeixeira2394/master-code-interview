class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue {

    constructor(data){

        if(data){
            let newNode = new Node(data);
            this.first = newNode;
            this.last = newNode;
            this.length = 1;
        } else {
            this.first = null;
            this.last = null;
            this.length = 0;
        }

    }

    enqueue(data){

        let newNode = new Node(data);

        if(this.length > 0){            
            this.last.next = newNode;
            this.last = newNode;
        } else {
            this.first = newNode;
            this.last = newNode;
        }

        this.length++;

        return this.length;
    }

    dequeue(){

        if(this.length == 0) return null;

        if(this.length == 1) this.last = null;

        const tempNode = this.first;
        this.first = this.first.next;
        tempNode.next = null;
        this.length--;

        return tempNode;

    }

    peek(){
        return this.first;
    }

}

let q = new Queue();

q.enqueue("mateus");
q.enqueue("aline");
q.enqueue("yasmim");

q.dequeue();
q.dequeue();
q.dequeue();

console.log(q);