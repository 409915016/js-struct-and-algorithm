let Stack = (function () { 
    const items = new WeakMap()

    class Stack {
        constructor() {
            items.set(this, [])
        }
        push(element) {
            let s = items.get(this)
            s.push(element)
        }
        pop(){
            let s = items.get(this)
            let r = s.pop()
            return r
        }
        peek(){
            let s = items.get(this)
            return s[s.length - 1]
        }
        isEmpty(){
            let s = items.get(this)
            return s.length == 0
        }
        size() {
            let s = items.get(this)
            return s.length
        }
        clear() {
            itmes.set(this, [])
        }
        print(){
            console.log(items.toString())
        }
    }

    return Stack
})();

export default Stack