var Node = require("./node");

class SinglyLinkedList {

    constructor(value) {
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    append(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.length;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.length;
    }

    insert(position, value) {

        if (position < 0) return -1;

        if (position >= this.length) {
            return this.append(value);
        }

        if (position == 0) {
            return this.prepend(value);
        }

        let newNode = new Node(value);
        let previousNode = this.findNode(position - 1);

        if (!previousNode) return -1;

        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length++;

        return this.length;

    }

    remove(position) {

        if (position >= this.length || position < 0) return null;

        let previousNode = this.findNode(position - 1);
        let unwantedNode = previousNode.next;

        previousNode.next = unwantedNode.next;
        unwantedNode.next = null;

        this.length--;

        return this.length;

    }

    findNode(position) {

        if (position < 0) return null;

        let index = 0;
        let currentNode = this.head;

        while (position !== index) {

            currentNode = currentNode.next;

            if (!currentNode) return null;

            index++;

        }

        return currentNode;

    }

    printList() {

        let currentNode = this.head;
        let print = "";

        while (currentNode != null) {
            print = print + currentNode.value + " --> "
            currentNode = currentNode.next;
        }

        console.log(print);
    }

    reverse(){

        let first = this.head;
        let second = this.head.next;

        while(second){

            let temp = second.next;

            second.next = first;
            first = second;
            second = temp;

        }

        this.head.next = null;
        this.tail = this.head;
        this.head = first;

    }

}