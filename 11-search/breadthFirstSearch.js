const BinarySearchTree = require("../7-trees/binarySearchTree");

//       9
//   4      20
//1    6  15  170


var bst = new BinarySearchTree();

bst.insert(9);
bst.insert(4);
bst.insert(1);
bst.insert(6);
bst.insert(20);
bst.insert(15);
bst.insert(170);

console.log(bst.breadthFirstSearch());