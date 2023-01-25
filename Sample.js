let arr = [2,4,34,98,56]

// for(let i=0;i<arr.length;i++){
//     let minIndex = i
//     for(j=i+1;j<arr.length;j++){
//         if(arr[j]>arr[minIndex]){
//             minIndex = j
//         }
//     }

//     if(minIndex!==i){
//         let temp = arr[i]
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//     }
// }

for(i=1;i<arr.length;i++){
    let temp = arr[i]
    let j = i-1
    while(j>=0 && arr[j]>temp){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = temp
}

console.log(arr)