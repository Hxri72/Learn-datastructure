// function heapSort(arr){

//     for(let i= Math.floor(arr.length/2)-1;i>=0;i--){
//         heapify(arr,i,arr.length)
//     }

//     for(let i = arr.length - 1; i > 0 ;i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]];
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

//     if(largest != i){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapify(arr,largest,n)
//     }


// }

// let arr = [2,98,45,-34,67,82]
// console.log(heapSort(arr))

const arr = [2,-3,5,67,34]

function heapSort(arr){

    for(let i= Math.floor(arr.length/2)-1;i>=0;i--){
        heapify(arr,i,arr.length)
    }

    for(let i= arr.length-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,0,i)
    }

    return arr
}

function heapify(arr,i,n){

    let largest = i;
    let left = 2 * i + 1
    let right = 2 * i + 2

    if(left < n && arr[left] > arr[largest]){
        largest = left
    }

    if(right < n && arr[right] > arr[largest] && arr[right] > arr[left]){
        largest = right
    }

    if(largest !== i){

        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapify(arr,largest,n)
    }
}

console.log(heapSort(arr))