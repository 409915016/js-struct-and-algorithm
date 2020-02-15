let Node = function (key){
    this.left = null
    this.key = key
    this.right = null
}

let inOrderTraverseNode = function(node, callback){
    if(node !== null){
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        inOrderTraverseNode(node.right, callback)
    }
}

let minNode = function(node){
    if(node){
        while(node && node.left !== null){
            node = node.left
        }
        return node.key
    }
    return null
}

let maxNode = function(node){
    if(node){
        while(node && node.right !== null){
            node = node.right
        }
        return node.key
    }
    return null
}

let searchNode = function(node, key){
    if(node === null){
        return false
    }
    if(key < node.key){
        return searchNode(node.left, key)
    } else if(key > node.key) {
        return searchNode(node.right, key)
    } else {
        return true
    }
}

let preOrderTraverseNode = function(node, callback){
    if(node !== null){
        callback(node.key)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
    }
}

let postOrderTraverseNode = function(node, callback){
    if(node !== null){
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
    }
}

let findMinNode = function(node){
    while(node && node.left !== null){
        node = node.left
    }
    return node
}

let parentNode
let nodeToBeDeleted

let removeNode = function(node, key){
    if(node === null){
        return null
    }
    parentNode = node

    if(key < node.key){
        node.left = removeNode(node.left, key)
    } else {
        nodeToBeDeleted = node
        node.right = removeNode(node.right, key)
    }

    if(node === parentNode) { //remove node
        if (nodeToBeDeleted !== null && key === nodeToBeDeleted.key) {
            if (nodeToBeDeleted === parentNode) {
                node = node.left;
            } else {
                var tmp = nodeToBeDeleted.key;
                nodeToBeDeleted.key = parentNode.key;
                parentNode.key = tmp;
                node = node.right;
            }
        }
    } else { //do balancing

        if (node.left === undefined) node.left = null;
        if (node.right === undefined) node.right = null;

        if ((heightNode(node.left) - heightNode(node.right)) === 2) {
            if (key < node.left.key) {
                node = rotationLR(node);
            } else {
                node = rotationLL(node);
            }
        }

        if ((heightNode(node.right) - heightNode(node.left)) === 2) {
            if (key > node.right.key) {
                node = rotationRL(node);
            } else {
                node = rotationRR(node);
            }
        }
    }

    return node
}

const heightNode = (node) => { // return height of node
    if(node === null){
        return -1
    } else {
        return Math.max(heightNode(node.left), heightNode(node.right)) + 1
    }
}

const rotationRR = (node) => {
    const tmp = node.right
    node.right = tmp.left
    tmp.left = node
    return tmp
}

const rotationLL = (node) =>{
    const tmp = node.left
    node.left = tmp.right
    tmp.right = node
    return tmp
}

const rotationLR = (node) =>{
    node.left = rotationRR(node.left)
    return rotationLL(node)
}

const rotationRL = (node) =>{
    node.right = rotationLL(node.right)
    return rotationRR(node)
}

class BinarySearchTree {
    constructor(key) {
        this.left = null
        this.key = key
        this.right = null

        this.root = null
    }
    getRoot(){
        return this.root
    }
    insert(key){
        this.root = this.insertNode(this.root, key)
    }
    insertNode(node, newNode){

        if (node === null) {
            node = new Node(newNode);
        } else if (newNode < node.key){

            node.left = this.insertNode(node.left, newNode)
            if(node.left !== null) {

                if( (heightNode(node.left)) - (heightNode(node.right)) > 1 ){

                    if(newNode < node.left.key) {
                        node = rotationLL(node)
                    } else {
                        node = rotationLR(node)
                    }
                }

            }
        } else if (newNode > node.key) {
            node.right = this.insertNode(node.right, newNode)
            if(node.right !== null) {

                if( (heightNode(node.right)) - (heightNode(node.left)) > 1 ){
                    if(newNode > node.right.key) {
                        node = rotationRR(node)
                    } else {
                        node = rotationRL(node)
                    }
                }

            }
        }

        return node
    }
    
    remove(key){
        nodeToBeDeleted = parentNode = null
        this.root = removeNode(this.root, key)
    }

    min(){
        return minNode(this.root)
    }
    max(){
        return maxNode(this.root)
    }
    search(key){
        return searchNode(this.root, key)
    }
    inOrderTraverse(callback){
        inOrderTraverseNode(this.root, callback)
    }
    preOrderTraverse(callback){
        preOrderTraverseNode(this.root, callback)
    }
    postOrderTraverse(callback){
        postOrderTraverseNode(this.root, callback)
    }
}

export default BinarySearchTree