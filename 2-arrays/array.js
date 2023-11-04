class MyArray {

    constructor() {

        // The array's length
        this.length = 0;

        // The hash map to store the array's data. Assuming that you have 
        // already implemented your own hash map
        this.map = {};
    }

    get(index) {
        return this.map[index];
    }

    push(data) {

        this.map[this.length] = data;
        this.length++;
        return this.length;

    }

    pop() {

        if (this.length == 0) return null;

        let lastItem = this.map[this.length - 1];
        delete this.map[this.length - 1];
        this.length--;

        return lastItem;

    }

    delete(index) {

        if (this.length == 0 || index >= this.length) return null;

        let deletedItem = this.map[index];

        this.shift(index);

        return deletedItem;

    }

    shift(index) {

        if (index >= this.length) return -1;

        for (let i = index; i < this.length - 1; i++) {
            this.map[i] = this.map[i + 1];
        }

        delete this.map[this.length - 1];

        this.length--;

        return this.length;

    }

    unshift(index, data) {

        if(index >= this.length) return this.push(data);

        this.length++;

        for (let i = this.length - 1; i > index; i--) {
            this.map[i] = this.map[i - 1];
        }

        this.map[index] = data;

        return this.length;

    }

}



