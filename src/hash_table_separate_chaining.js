import LinkedList from "./linked_list"

let loseloseHashCode = (key) => {
    var hash = 0
    for (let i = 0; i < key.length; i++){
       hash += key.charCodeAt(i) 
    }
    return hash % 37
}

let ValuePiar = function(key, value) {
    this.key = key
    this.value = value

    this.toString = () => {
        return `[${this.key} - ${this.value}]`
    }
}

class HashTableSeparateChaining {
    constructor() {
       this.table = []
    }
    put(key, value){        
        let position = loseloseHashCode(key)

        if(this.table[position] == undefined){
            this.table[position] = new LinkedList()
        }
        this.table[position].append(new ValuePiar(key, value))
    }
    get(key){
        let position = loseloseHashCode(key)

        if(this.table[position] !== undefined){

            let current = this.table[position].getHead()

            while(current.next){
                if(current.element.key === key){
                    return current.element.value 
                }
                current = current.next
            }

            if(current.element.key === key){
                return current.element.value
            }
        }

        return undefined
    }
    remove(key){
        let position = loseloseHashCode(key)

        if(this.table !== undefined){

            let current = this.table[position].getHead()
            while(current.next){
                if(current.element.key === key){
                    this.table[position].remove(current.element)
                    if(this.table[position].isEmpty()){
                        this.table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }

            if(current.element.key === key){
                this.table[position].remove(current.element)
                if(this.table[position].isEmpty()){
                    this.table[position] = undefined
                }
                return true
            }
        }
        
        return false
    }
    print(){
        for(let i = 0; i< this.table.length; i++){
            if(this.table[i] !== undefined){
                console.log(i + ": " + this.table[i])
            }
        }
    }
}

export default HashTableSeparateChaining //hash_table_separate_chaining