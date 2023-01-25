class Stack {
    constructor(top = null){
        this.top = top
    }

    push(data){
        let newNode = new Node(data)
        if(this.top == null){
            this.top = newNode
            
        }else{
            newNode.next = this.top
            this.top = newNode
        }
    }

    pop(data){
        let temp = this.top

        if(temp==null){
            console.log('Stack is empty')
            return;
        }else{
            this.top = this.top.next
        }

    }

    append(){
        let temp = this.top
        let arr = ''
        while(temp!=null){
            arr = arr + temp.data+' '
            temp= temp.next
            
        }

        console.log(arr)
        
    }

    display(){
        let temp = this.top

        if(temp == null){
            console.log('Empty')
            return;
        }
        while(temp!==null){
            console.log(temp.data)
            temp = temp.next
        }
        
    }
}

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let stack = new Stack()

stack.push('A')
stack.push('+')
stack.push('B')
stack.push('*')
stack.push('C')
stack.push('+')
stack.push('D')


// stack.pop()  

stack.append()

// class queue {
//     constructor(front = null,rear = null){
//         this.front = front
//         this.rear = rear
//     }

//     enqueue(data){
//         let newNode = new Node(data)

//         if(this.rear == null){
//             this.front = this.rear = newNode
//             return;
//         }

//         this.rear.next = newNode
//         this.rear = newNode
//     }

//     dequeue(data){
//         if(this.front==null){
//             console.log('Empty')
//             return;
//         }

//         this.front = this.front.next

//         if(this.front == null){
//             this.rear= null
//         }
//     }

//     display(){
//         let temp = this.front

//         if(temp==null){
//             console.log('queue is empty')
//             return;
//         }

//         while(temp!==null){
//             console.log(temp.data)
//             temp = temp.next
//         } 
//     }
// }

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// let queuee = new queue()

// queuee.enqueue(34)
// queuee.enqueue(76)
// queuee.enqueue(40)

// queuee.display()

// console.log('-----------------')

// queuee.dequeue(40)

// queuee.display()



// class Queue {
//     constructor(front = null, rear = null){
//         this.front = front
//         this.rear = rear
//     }

//     enqueue(data){
//         let newNode = new Node(data)

//         if(this.rear==null){
//             this.front = this.rear = newNode
//         }else{
//             this.rear.next = newNode
//             this.rear = newNode
//         }
//     }

//     dequeue(){
//         if(this.front==null){
//             console.log('queue is empty')
//             return;
//         }

//         this.front = this.front.next
//     }

//     display(){
//         if(this.rear==null){
//             console.log('queue is empty')
//             return;
//         }

//         while(this.front!==null){
//             console.log(this.front.data)
//             this.front = this.front.next
//         }
//     }
// }

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// let queue = new Queue()

// queue.enqueue(2)
// queue.enqueue(6)

// queue.dequeue()

// queue.display()