// function quickSort(arr){

//     if(arr.length < 2){
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [ ...quickSort(left) , pivot , ...quickSort(right) ]

// }

// let arr = [2,-1,6,87,99,34,-13]
// console.log(quickSort(arr))


const arr = [2,98,56,77,-3,54]

function quickSort(arr){

    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
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

console.log(quickSort(arr)) 