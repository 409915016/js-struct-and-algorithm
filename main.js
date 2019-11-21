//import Stack from "./src/stack"
import Queue from "./src/queue"
import PriorityQueue from "./src/priority_queue"

//十进制转二进制
function divideBy2(decNumber) {

    var remStack = new Stack(),
    rem,
    binarySting = ''

    while(decNumber > 0){
        rem = Math.floor(decNumber % 2)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / 2)
    }

    while (!remStack.isEmpty()){
        binarySting += remStack.pop().toString()
    }

    return binarySting
}

//十进制转二进制
// console.log(divideBy2(233))
// console.log(divideBy2(10))
// console.log(divideBy2(1000))


//十进制转任何进制
function baseConverter(decNumber, base){
    var remStack = new Stack(),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF'

    while(decNumber > 0){
        rem = Math.floor(decNumber % base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }

    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()]
    }

    return baseString

}

//十进制转任何进制
// console.log(baseConverter(100345, 2))
// console.log(baseConverter(100345, 8))
// console.log(baseConverter(100345, 16))



// let queue = new Queue()
// queue.enqueue("John")
// queue.enqueue("Jack")
// queue.enqueue("Camlia")
// queue.print();

// console.log(queue.size())
// console.log(queue.isEmpty())


// queue.dequeue()
// queue.dequeue()
// queue.print()

//优先队列
let priorityQueue = new PriorityQueue()
// priorityQueue.enqueue("John",  2)
// priorityQueue.enqueue("Jack",  1)
// priorityQueue.enqueue("Camila",  1)
// priorityQueue.print();
//优先队列