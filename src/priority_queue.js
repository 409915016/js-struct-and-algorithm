let PriorityQueue = (function(){

    const items = new WeakMap()

    function QueueElement(element, priority){
        this.element = element
        this.priority = priority
    }

    class PriorityQueue {
        constructor(){
            items.set(this, [])
        }
    
        enqueue(element, priority){
            let queueElement = new QueueElement(element, priority)

            let added = false
            
            let q = items.get(this)
            for(let i = 0;i < q.length; i++){
                if(queueElement.priority < q[i].priority){
                    q.splice(i, 0, queueElement)
                    added = true
                    break
                }
                
            }

            if(!added){
                q.push(queueElement)
            }
        }
        dequeue(element){
            let q = items.get(this)
            let r = q.shift()
            return r
        }
        front(){
            let q = items.get(this)
            return q[0]
        }
        isEmpty(){
            let q = items.get(this)
            return q.length == 0
        }
        size(){
            let q = items.get(this)
            return q.length
        }
        print(){
            let q = items.get(this)
            for(let i = 0;i < q.length; i++){
                console.log(`${q[i].element} - ${q[i].priority}`)
            }
            
        }
    }

    return PriorityQueue
})()

export default PriorityQueue