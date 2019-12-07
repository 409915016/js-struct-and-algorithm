let Node = function (element){
    this.element = element
    this.next = null
    this.prev = null
}

class DoublyLinkedList {
    constructor() {
        this.length = 0
        this.head = null,
        this.tail = null
    }
    append(element) {
        let node = new Node(element),
            current

        if(this.head === null){
            this.head = node
        } else {
            current = this.head

            while(current.next){
                current = current.next
            }

            current.next = node
        }

        this.length ++
    }
    removeAt(position) {

        if(position > -1 && position < this.length){

            let current = this.head,
            previous,
            index = 0

            if(position === 0) {
                if(this.length === 1){
                    this.tail = null
                } else {
                    this.head.prev = null
                }
                this.head = current.next
            } else if(position === this.length - 1){
                current = this.tail
                this.tail = current.prev
                this.tail.next = null
            } else {

                while(index ++ < position) {
                    previous = current
                    current = current.next
                }

                previous.next = current.next
                current.next.prev = previous
            }

            this.length --

            return current.element
        } else {
            return null
        }
    }

    insert(position, element) {

        if(position > -1 && position < this.length){ 
            
            let node = new Node(element),
            current = this.head,
            previous,
            index = 0

            if(position === 0) {
                if(!this.head){
                    this.head = node,
                    this.tail = node
                } else {
                    node.next = current
                    current.prev = node
                    this.head = node
                }
              
            } else if (position === this.length){
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            } else {
                while(index ++ < position){
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node

                current.prev = node
                node.prev = previous
            }

            this.length ++
            return true
        } else {
            return false
        }

    }

    toString(){
        let current = this.head,
        string = ''

        while(current){
            string += current.element + (current.next ? 'n': '')
            current = current.next
        }
        return string
    }
    
    indexOf(element){
        let current = this.head,
        index = 0

        while(current){
            if(element === current.element){
                return index
            }
            index++
            current = current.next
        }

        return -1
    }

    remove(element){
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

    isEmpty(){
        return this.length === 0
    }
    size(){
        return this.length
    }
    getHead(){
        return this.head
    }

}


export default DoublyLinkedList