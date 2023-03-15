// class minHeap{
//     constructor(){
//         this.heap = []
//     }

//     insert(value){
//         this.heap.push(value);
//         this.bubbleup(this.heap.length - 1)
//     }

//     bubbleup(index){
//         const element = this.heap[index]
//         while(index > 0){
//             const parentIndex = Math.floor((index-1)/2)
//             const parent = this.heap[parentIndex]
//             if(element > parent){
//                 break;
//             }
//             this.heap[parentIndex] = element
//             this.heap[index] = parent
//             index = parentIndex ;
//         }
//     }

//     extractMin(){
//         const min = this.heap[0]
//         const end = this.heap.pop();
//         if(this.heap.length > 0){
//             this.heap[0] = end;
//             this.bubbledown(0) 
//         }
//         return min;
//     }

//     bubbledown(index){
//         const length = this.heap.length;
//         const element = this.heap[index]
//         while(true){
//             const leftChildIndex = 2 * index + 1;
//             const rightChildIndex = 2 * index + 2;
//             let leftChild,rightChild;
//             let swap = null;
//             if(leftChildIndex < length){
//                 leftChild = this.heap[leftChildIndex];
//                 if(leftChild < element){
//                     swap = leftChildIndex
//                 }
//             }

//             if(rightChildIndex < length){
//                 rightChild = this.heap[rightChildIndex]
//                 if(
//                     (swap === null && rightChild < element) ||
//                     (swap !== null && rightChild < leftChild)
//                 ){
//                     swap = leftChildIndex
//                 }
//             }

//             if(swap === null){
//                 break;
//             }
//             this.heap[index] = this.heap[swap]
//             this.heap[swap] = element;
//             index = swap
//         }
//     }
// }


class minHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value);
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
        const end = this.heap.pop()
        if(this.heap.length > 0){
            this.heap[0] = end
            this.bubbledown(0)
        }
        return min;
    }

    bubbledown(index){
        const length = this.heap.length
        const element = this.heap[index]
        while(true){
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild,rightChild;
            let swap = null;
            if(leftChildIndex < length){
                leftChild = this.heap[leftChildIndex]
                if(leftChild < element){
                   
                }
                
            }
        }

    }
}
