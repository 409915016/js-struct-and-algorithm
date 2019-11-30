//import Stack from "./src/stack"
import Queue from "./src/queue"
import PriorityQueue from "./src/priority_queue"
import LinkedList from "./src/linked_list"

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

//击鼓传花
function hotPotato(nameList, num){
    let queue = new Queue()

    for (let i = 0; i < nameList.length; i ++){
        queue.enqueue(nameList[i])
    }

    let eliminated = ''
    while (queue.size() > 1){
        for(let i = 0; i< num ; i++){
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(eliminated + '在击鼓传花游戏中被淘汰。')
    }

    return queue.dequeue()
}

// let names = ['John', 'Jack', 'Camia', 'Ingrid', 'Carl']
// let winner = hotPotato(names, 7)
// console.log(winner)
//击鼓传花

//单项链表
// let list = new LinkedList();
// list.append(15)
// console.log(list.toString())
// list.append(10)
// console.log(list.toString())
//单项链表



//集合
let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

//并集
let unionAb = new Set();
for (let x of setA) unionAb.add(x);
for (let x of setB) unionAb.add(x);
//console.log(unionAb)


//交集
let intersection = function (setA, setB) {
    let intersectionSet = new Set()

    for(let x of setA){
        if(setB.has(x)){
            intersectionSet.add(x)
        }
    }

    return intersectionSet
}
let intersectionAB = intersection(setA, setB);
//console.log(intersectionAB);


//差集
let difference = function (setA, setB) { 
    let differenceSet = new Set()

    for(let x of setA){
        if(!setB.has(x)){
            differenceSet.add(x)
        }
    }

    return differenceSet
}
let differenceAB = difference(setA, setB)
//console.log(differenceAB)


