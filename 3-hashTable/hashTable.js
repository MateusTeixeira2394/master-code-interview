class MyHashTable {

    constructor(size) {

        // The array of addresses. Each one is a chunk to store data.
        // This implementation assumes that the Array data structure has already been developed.
        // How more is the size, faster is this data structure to store or retrieve data. 
        // However, it takes more more memory complexity.
        this.data = new Array(size);

    }

    _hash(key) {

        let hash = 0;
        let str = key.toString();
        
        for (let i = 0; i < str.length; i++) {            
            hash = (hash + str.charCodeAt(i) * (i + 1)) % this.data.length;            
        }

        return hash;

    }

    set(key, value){

        let address = this._hash(key);

        if(!this.data[address]){
            this.data[address] = [];
        }

        let newStorage = [key.toString(), value];

        this.data[address].push(newStorage);
        return newStorage;

    }

    get(key){

        let address = this._hash(key);

        let bucket = this.data[address];

        if(!bucket || bucket.length == 0) return null;

        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] === key){
                return bucket[i][1];
            }
        }

        return null;

    }

    keys(){

        let keys = [];

        for(let i = 0; i < this.data.length; i++){

            let bucket = this.data[i];

            if(bucket){

                for(let j = 0; j < bucket.length; j++){
                    keys.push(bucket[j][0]);
                }

            }

        }

        return keys;

    }

}