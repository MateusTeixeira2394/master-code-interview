class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value) {

        let newNode = new Node(value);

        if (!this.root) {

            this.root = newNode;

        } else {

            var currentNode = this.root;

            while (currentNode) {

                // Left
                if (value <= currentNode.value) {

                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return newNode;
                    }

                    currentNode = currentNode.left;

                } else {
                    // Right

                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return newNode;
                    }

                    currentNode = currentNode.right;

                }

            }

        }

    }

    lookup(value) {

        if (!this.root) return null;

        let currentNode = this.root;

        while (currentNode) {

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }

            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }

            else if (value === currentNode.value) {
                return currentNode;
            }

        }

        return null;

    }

    // This is the one of the most complexes algorithms due to there are 16 possibilities,
    // because the method has to check if the unwanted node:
    // - Has parent;
    // - Has came from left side;
    // - Has left child
    // - Has right child
    // 4 ^ 2 = 16 possibilities
    remove(value) {

        if (!this.root) return null;

        let currentNode = this.root;

        let parentNode = null;

        while (currentNode) {

            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }

            else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }

            else if (value === currentNode.value) {

                if (parentNode) {
                    return this._removeNodeWithParent(currentNode, parentNode);
                }

                else {
                    return this._removeNodeWithNoParent(currentNode);
                }

            }

        }

        return null;

    }

    _removeNodeWithParent(unwantedNode, parentNode) {

        // it checks which side the unwanted node came from
        let cameFromRight = unwantedNode.value > parentNode.value;

        // if it came from right side
        if (cameFromRight) {

            // This is a leaf node
            if (!unwantedNode.left && !unwantedNode.right) {
                parentNode.right = null;
                return unwantedNode;
            }

            if (unwantedNode.left && unwantedNode.right) {

                parentNode.right = unwantedNode.right;

                let leftSubTree = unwantedNode.left;
                let currentNode = unwantedNode.right;

                // find the left leaf
                while (currentNode.left) {
                    currentNode = currentNode.left;
                }

                currentNode.left = leftSubTree;

                unwantedNode.left = null;
                unwantedNode.right = null;
                return unwantedNode;

            }

            if (unwantedNode.left) {
                parentNode.right = unwantedNode.left;
                unwantedNode.left = null;
                return unwantedNode;
            }

            if (unwantedNode.right) {
                parentNode.right = unwantedNode.right;
                unwantedNode.right = null;
                return unwantedNode;
            }

            // Or if it came from left
        } else {

            // This is a leaf node
            if (!unwantedNode.left && !unwantedNode.right) {
                parentNode.left = null;
                return unwantedNode;
            }

            if (unwantedNode.left && unwantedNode.right) {

                parentNode.left = unwantedNode.right;

                let leftSubTree = unwantedNode.left;
                let currentNode = unwantedNode.right;

                while (currentNode.left) {
                    currentNode = currentNode.left;
                }

                currentNode.left = leftSubTree;

                unwantedNode.left = null;
                unwantedNode.right = null;

                return unwantedNode;

            }

            if (unwantedNode.left) {
                parentNode.left = unwantedNode.left;
                unwantedNode.left = null;
                return unwantedNode;
            }

            if (unwantedNode.right) {
                parentNode.left = unwantedNode.right;
                unwantedNode.right = null;
                return unwantedNode;
            }

        }

    }

    _removeNodeWithNoParent(unwantedNode) {

        if (!unwantedNode.left && !unwantedNode.right) {
            this.root = null;
            return unwantedNode;
        }

        if (unwantedNode.left && unwantedNode.right) {

            this.root = unwantedNode.right;

            let leftSubTree = unwantedNode.left;
            let rightSubTree = unwantedNode.right;

            let currentNode = rightSubTree;

            while (currentNode.left) {
                currentNode = currentNode.left;
            }

            currentNode.left = leftSubTree;

            unwantedNode.left = null;
            unwantedNode.right = null;

            return unwantedNode;

        }

        if (unwantedNode.left) {
            this.root = unwantedNode.left;
            unwantedNode.left = null;
            return unwantedNode;
        }

        if (unwantedNode.right) {
            this.root = unwantedNode.right;
            unwantedNode.right = null;
            return unwantedNode;
        }


    }

}

//       9
//   4      20
//1    6  15  170


var bst = new BinarySearchTree();

bst.insert(50);
bst.insert(40);
bst.insert(74);
bst.insert(25);
bst.insert(45);
bst.insert(56);
bst.insert(95);
bst.insert(5);
bst.insert(30);
bst.insert(43);
bst.insert(48);
bst.insert(52);
bst.insert(65);
bst.insert(87);
bst.insert(100);


console.log(bst.remove(50));

console.log(JSON.stringify(bst));

// console.log(bst.lookup(11));