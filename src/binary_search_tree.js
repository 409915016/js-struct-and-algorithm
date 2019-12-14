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

let removeNode = function(node, key){
    if(node === null){
        return null
    }
    if(key < node.key){
        node.left = removeNode(node.left, key)
        return node
    } else if (key > node.key){
        node.right = removeNode(node.right, key)
        return node
    } else {

        if(node.left === null && node.right === null){
            node = null
            return node
        }

        if(node.left === null){
            node = node.right
            return node
        } else if(node.right === null){
            node = node.left
            return node
        }

        var aux = findMinNode(node.right)
        node.key = aux.key
        node.right = removeNode(node.right, aux.key)
        return node
    }
}

class BinarySearchTree {
    constructor(key) {
        this.left = null
        this.key = key
        this.right = null

        this.root = null
    }
    insert(key){
        var newNode = new BinarySearchTree(key)

        if(this.root === null){
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)        
        }

    }
    insertNode(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null) {
                node.left = newNode
            }else{
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null) {
                node.right = newNode
            }else{
                this.insertNode(node.right, newNode)
            }
        }
    }
    
    remove(key){
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