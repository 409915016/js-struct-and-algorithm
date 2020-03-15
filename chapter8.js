import BinarySearchTree from "./src/binary_search_tree"
import AVLTree from "./src/avl_tree"

let tree = new BinarySearchTree()

function printNode(value){
    console.log(value)
}

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode(value){
    console.log(value);
}

// console.log('********* in-order transverse ***********');
// tree.inOrderTraverse(printNode);

// console.log('********* pre-order transverse ***********');
// tree.preOrderTraverse(printNode);

// console.log('********* post-order transverse ***********');
// tree.postOrderTraverse(printNode);


// console.log('********* max and min ***********');
// console.log(tree.max());
// console.log(tree.min());
// console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
// console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');
//
// console.log('********* remove 6 ***********');
// tree.remove(6);
// tree.inOrderTraverse(printNode);
//
// console.log('********* remove 5 ***********');
// tree.remove(5);
// tree.inOrderTraverse(printNode);
//
// console.log('********* remove 15 ***********');
// tree.remove(15);
// tree.inOrderTraverse(printNode);



let avlTree = new AVLTree()

avlTree.insert(1);
avlTree.insert(2);
avlTree.insert(3);
avlTree.insert(4);
avlTree.insert(5);
avlTree.insert(6);
avlTree.insert(7);
avlTree.insert(14);
avlTree.insert(15);
avlTree.insert(13);
avlTree.insert(12);
avlTree.insert(11);

// //RR rotation
// avlTree.insert(50);
// avlTree.insert(30);
// avlTree.insert(70);
// avlTree.insert(60);
// avlTree.insert(80);
// avlTree.insert(90);
//
// //LL rotation
// avlTree.insert(50);
// avlTree.insert(30);
// avlTree.insert(70);
// avlTree.insert(10);
// avlTree.insert(40);
// avlTree.insert(5);
//
// //LR rotation
// avlTree.insert(50);
// avlTree.insert(30);
// avlTree.insert(70);
// avlTree.insert(40);
// avlTree.insert(10);
// avlTree.insert(35);
//
// //RL rotation
// avlTree.insert(70);
// avlTree.insert(50);
// avlTree.insert(80);
// avlTree.insert(72);
// avlTree.insert(90);
// avlTree.insert(75);

console.log('********* raw data structure ***********');
console.log(avlTree.getRoot());

avlTree.remove(12);
avlTree.remove(15);
avlTree.remove(11);
avlTree.remove(14);
avlTree.remove(13);
avlTree.remove(7);
avlTree.remove(6);
avlTree.remove(2);
avlTree.remove(4);

console.log(avlTree.getRoot());