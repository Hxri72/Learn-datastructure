// function quickSort(arr){
//     if(arr.length < 2){
//         return arr;
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr = [7,-8,45,23,99,56]
// console.log(quickSort(arr))

// console.log(heapSort(arr))


// function heapSort(arr){

//     for(let i= Math.floor(arr.length/2)-1;i>=0;i--){
//         heapify(arr,i,arr.length)
//     }

//     for(let i= arr.length -1;i>0;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]
//         heapify(arr,0,i)
//     }

//     return arr
// }


// function heapify(arr,i,n){

//     let largest = i;
//     let left = 2 * i + 1
//     let right = 2 * i + 2

//     if(left < n && arr[left] > arr[largest]){
//         largest = left
//     }

//     if(right < n && arr[right] > arr[largest] && arr[left] < arr[right]){
//         largest = right
//     }

//     if(largest !== i){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapify(arr,largest,n)
//     }
// }

// console.log(mergeSort(arr))

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
    
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)

//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] <= rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }

//     return [...sortedArr,...leftArr,...rightArr]
// }


// function heapSort(arr){

//     for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
//         heapify(arr,i,arr.length)
//     }

//     for(let i= arr.length-1;i>0;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]
//         heapify(arr,0,i)
//     }

//     return arr
// }


// function heapify(arr,i,n){

// }

// const arr = [2,-3,45,23,8,6]

// function heapSort(arr){

//     for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
//         heapify(arr,i,arr.length)
//     }

//     for(let i=arr.length-1;i>0;i--){

//         [arr[0],arr[i]] = [arr[i],arr[0]]
//         heapify(arr,0,i)
//     }

//     return arr
// }

// function heapify(arr,i,n){

//     let largest = i
//     let left = 2 * i + 1
//     let right = 2 * i + 2

//     if(left < n && arr[left] > arr[largest]){
//         largest = left
//     }

//     if(right < n && arr[right] > arr[largest] && arr[right] > arr[left]){
//         largest = right
//     }

//     if(largest !==i){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapify(arr,largest,n)
//     }

// }

// console.log(heapSort(arr))


// const arr = [2,65,34,22,-6,-56]

// function mergeSort(arr){

//     if(arr.length < 2){
//         return arr;
//     }

//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)

//     return merge(mergeSort(leftArr),mergeSort(rightArr))
    
// }

// function merge(leftArr,rightArr){
//     let sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] <= rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }

//     return [...sortedArr,...leftArr,...rightArr]
// }

// console.log(mergeSort(arr))

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort(arr))

// function heapSort(arr){

//     for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
//         heapify(arr,i,arr.length)
//     }

//     for(let i=arr.length-1;i>0;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]
//         heapify(arr,0,i)
//     }

//     return arr
// }


// function heapify(arr,i,n){

//     let largest = i
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if(left < n && arr[left] > arr[largest]){
//         largest = left
//     }

//     if(right < n && arr[right] > arr[largest] && arr[right] > arr[left]){
//         largest = right
//     }

//     if(largest !== i){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapify(arr,largest,n)
//     }
// }

// console.log(heapSort(arr))

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr;
//     }

//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)

//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] <= rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }

//     return [...sortedArr,...leftArr,...rightArr]
// }
// console.log(mergeSort(arr))

const arr = [2,4,67,54,-5]

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }

    let pivot = arr[arr.length -1]
    let left = []
    let right = []

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.sllice(mid)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(leftArr,rightArr){
    let sortedArr = []

    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            
        }
    }
}

function heapSort(arr){

    for(let i = Math.floor(arr.length/2)-1;i>=0;i--){
        heapify(arr,i,arr.length)
    }

    for(let i= arr.length-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,0,i)
    }

    return arr
}   