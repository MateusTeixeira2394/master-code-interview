class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// This is a stack implementation using linked list data structure as a solution
class Stack {

    constructor(data) {
        if (data) {
            let newNode = new Node(data);
            this.top = newNode;
            this.bottom = newNode;
            this.length = 1;
        } else {
            this.top = null;
            this.bottom = null;
            this.length = 0;
        }
    }

    peek() {
        if (this.length > 0) {
            return this.top.data;
        } else {
            return null;
        }
    }

    push(data) {

        let newNode = new Node(data);

        if (this.length > 0) {
            const tempNode = this.top;
            this.top = newNode;
            this.top.next = tempNode;
        } else {
            this.top = newNode;
            this.bottom = newNode;
        }

        this.length++;
        return this.length;
    }

    pop() {

        if(this.length === 0) return null;

        if(this.length === 1){
            this.bottom = null;
        }

        const tempNode = this.top;
        this.top = this.top.next;
        tempNode.next = null;
        this.length--;

        return tempNode.data;
    }

    printStack() {
        let print = "";
        let currentNode = this.top;
        while (currentNode) {
            print = print + currentNode.data + "\n⬇\n";
            currentNode = currentNode.next;
        }
        console.log(print + "null");
    }


}