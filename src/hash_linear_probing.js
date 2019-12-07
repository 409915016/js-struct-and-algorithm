let djb2HashCode = (key) => {
    let hash = 5381
    for (let i = 0; i < key.length; i++){
       hash = hash *33 + key.charCodeAt(i) 
    }
    return hash % 1013
}

let ValuePiar = function(key, value) {
    this.key = key
    this.value = value

    this.toString = () => {
        return `[${this.key} - ${this.value}]`
    }
}

class HashLinearProbing {
    constructor() {
       this.table = []
    }
    put(key, value){        
        let position = djb2HashCode(key)

        if(this.table[position] == undefined){
            this.table[position] = new ValuePiar(key, value)
        } else {
            let index = ++position
            while(this.table[position] != undefined){
                index++
            }
            this.table[index] = new ValuePiar(key, value)
        }
    
    }
    get(key){
        let position = djb2HashCode(key)

        if(this.table[position] !== undefined){

            if(this.table[position].key === key){
                return this.table[position].value
            } else {
                let index = ++position
                while (this.table[index] === undefined 
                || this.table[index].key !== key){
                    index++
                }
                if(this.table[index].key === key){
                    return this.table[index].value
                }
            }

        }

        return undefined
    }
    remove(key){
        let position = djb2HashCode(key)

        if(this.table[position] !== undefined){

            if(this.table[position].key === key){
                this.table[position].value = undefined
                return true
            } else {
                let index = ++position
                while (this.table[index] === undefined 
                || this.table[index].key !== key){
                    index++
                }
                if(this.table[index].key === key){
                    this.table[position].value = undefined
                    return true
                }
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

export default HashLinearProbing; //hash_linear_probing