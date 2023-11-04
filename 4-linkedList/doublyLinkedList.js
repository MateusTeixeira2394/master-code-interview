var Node = require("./node");

class DoublyLinkedList {


    constructor(value) {
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    _switchValues(node1, node2) {

        let tempValue = node1.value;
        node1.value = node2.value;
        node2.value = tempValue;

    }

    append(value) {

        var newNode = new Node(value);

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

        return this.length;

    }

    prepend(value) {

        var newNode = new Node(value);

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this.length;

    }

    insert(position, value) {

        if (position >= this.length) {
            return this.append(value);
        }

        if (position === 0) {
            return this.prepend(value);
        }

        let newNode = new Node(value);

        let wantedNode = this.findNode(position);
        let prevNode = wantedNode.prev;

        prevNode.next = newNode;
        newNode.prev = prevNode;

        wantedNode.prev = newNode;
        newNode.next = wantedNode;

        this.length++;

        return this.length;

    }

    remove(position) {

        if (position >= this.length) return -1;

        let unwantedNode = this.findNode(position);
        let prevNode = unwantedNode.prev;
        let nextNode = unwantedNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        unwantedNode.next = null;
        unwantedNode.prev = null;

    }

    findNode(position) {

        if (position >= this.length) return null;

        let index = 0;
        let currentNode = this.head;

        while (position !== index) {
            currentNode = currentNode.next;
            index++;
        }

        return currentNode;

    }

    printList() {

        let print = "<--> ";

        let currentNode = this.head;

        while (currentNode) {
            print = print + currentNode.value + " <--> ";
            currentNode = currentNode.next;
        }

        console.log(print + "");

    }

    reverse() {

        let headNode = this.head;
        let tailNode = this.tail;
        let headCounter = 0;
        let tailCounter = this.length - 1;

        while (tailCounter > headCounter){

            this._switchValues(headNode, tailNode);
            headNode = headNode.next;
            tailNode = tailNode.prev;
            headCounter++;
            tailCounter--;

        }

    }

}