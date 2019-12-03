let Dictionary = (function () {

    class Dictionary {
        constructor() {
            this.items = {}
        }
        has(key) {
            return this.items.hasOwnProperty(key)
        }
        get(key) {
            return this.has(key) ? this.items[key] : undefined
        }
        set(key, value) {
            this.items[key] = value
        }
        values() {
            let values = []
            for (let k in this.items){
                if(this.has(k)){ values.push(this.items[k]) }
            }
            return values
        }
        delete(key) {
            if(this.has(key)) {
                delete this.items[key]
                return true
            }
            return false
        }
        keys() {
            return Object.keys(this.items)
        }
        getItems() {
            return this.items
        }
        clear() {
            this.items = {}
        }
        size() {
            return Object.keys(this.items).length
        }
    }

    return Dictionary
})()

export default Dictionary