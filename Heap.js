// class minHeap{
//     constructor(){
//         this.heap = []
//     }

//     insert(value){
//         this.heap.push(value);
//         this.bubbleUp(this.heap.length - 1)
//     }

//     bubbleUp(index){
//         const element = this.heap[index]
//         while(index > 0 ){
//             const parentIndex = Math.floor((index-1)/2)
//             const parent = this.heap[parentIndex]
//             if(element >= parent){
//                 break;
//             }
//             this.heap[parentIndex] = element;
//             this.heap[index] = parent;
//             index = parentIndex ;
//         }
//     }

//     extractMin(){
//         const min = this.heap[0]
//         const end = this.heap.pop();
//         if(this.heap.length>0){
//             this.heap[0] = end
//             this.bubbledown(0);
//         }
//         return min;
//     }

//     bubbledown(index){
//         const length = this.heap.length
//         const element = this.heap[index]

//         while(true){
//             const leftIndex = 2 * index + 1
//             const rightIndex = 2 * index + 2
//             let leftnum , rightnum;
//             let swap = null;
//             if(leftIndex<length){   
//                 leftnum = this.heap[leftIndex]
//                 if(leftnum < element){
//                     swap = leftIndex
//                 }

//             }

//             if(rightIndex<length){
//                 rightnum = this.heap[rightIndex]
//                 if(
//                     (swap === null && rightIndex <element) ||
//                     (swap!==null && rightIndex < leftIndex)
//                 ){
//                     swap = rightIndex
//                 }
//             }

//             if(swap === null){
//                 break;
//             }

//             this.heap[index] = this.heap [swap]
//             this.heap[swap] = element;
//             index = swap
//         }
//     }

//     display(){
//         console.log(this.heap)
//     }
// }

// const heap = new minHeap()

// heap.insert(3)
// heap.insert(5)
// heap.insert(76)
// heap.insert(45)
// heap.insert(4)
// heap.insert(34)
// heap.insert(9)
// heap.insert(7)
// heap.insert(6)

// heap.extractMin()

// console.log(heap.extractMin())

// heap.display()



class minHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.bubbleup(this.heap.length - 1)
    }

    bubbleup(index){
        const element = this.heap[index]
        while(index > 0){
            const parentIndex = Math.floor((index-1)/2)
            const parent = this.heap[parentIndex]
            if(element > parent){
                break;
            }
            this.heap[parentIndex] = element;
            this.heap[index] = parent
            index = parentIndex
        }
    }

    extractMin(){
        const min = this.heap[0];
        const end = this.heap.pop();
        if(this.heap.length > 0){
            this.heap[0] = end
            this.bubbleDown(0)
        }
        return min;
    }

    bubbleDown(index){
        const length = this.heap.length
        const element = this.heap[index]
        while(true){
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let leftchild, rightchild;
            let swap = null;
            if(leftIndex < length){
                leftchild = this.heap[leftIndex]
                if(leftchild < element){
                    swap = leftIndex;
                }
            }

            if(rightIndex < length){
                rightchild = this.heap[rightIndex]
                if(
                    (swap===null && rightchild <element) ||
                    (swap!==null && rightchild < leftchild)
                ){
                    swap = rightIndex;
                }
            }

            if(swap === null){
                break;
            }

            this.heap[index] = this.heap[swap]
            this.heap[swap] = element;
            index = swap;
        }

        
    }

    display(){
        console.log(this.heap)
    }
}


const heap = new minHeap();

heap.insert(99)
heap.insert(54)
heap.insert(3)
heap.insert(7)
heap.insert(77)
heap.insert(35)
heap.insert(78)

console.log(heap.extractMin())

heap.display()

class Heap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.bubbleup(this.heap.length - 1)
    }

    bubbleup(index){
        const element = this.heap[index]
        if(index > 0){
            const parentIndex = Math.floor((index-1)/2)
            const parent = this.heap[parentIndex]
           if( element > parent){
            
           }
        }

    }
}
