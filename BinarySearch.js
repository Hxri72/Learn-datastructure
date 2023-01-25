// class binarySearch{
//     binaryIter(array, target){
//         let start = 0
//         let end=arr.length-1;
//         while(start<=end){
//             let mid = Math.floor(start + (end-start)/2)
//             if(arr[mid]==target){
//                 return console.log(mid);
//             }
//             else if (arr[mid] > target){
//                 end = mid - 1
//             }else if(arr[mid] < target){
//                 start = mid + 1
//             }
//         }
//         return console.log(-1);
//     }
// }

// let arr = [2,3,4,5,6,7]

// let b = new binarySearch()

// b.binaryIter(arr,8)


// Linear Search

// let findNum=(arr,target)=>{

//     for(i=0;i<arr.length;i++){
//         if(arr[i]==target){
//             return console.log('The position of the value is '+i)
//         }
//     }

//     return console.log(-1)

// }

// let arr = [2,3,4,5,6,7,8]

// findNum(arr,7)


let findNum = (arr,target)=>{
    let start = 0;
    let end = arr.length - 1
    
    while(start <= end){
        let mid = Math.floor(start+(end-start)/2)
        
        if(arr[mid]==target){
            return console.log(mid)
        }else if(arr[mid]< target){
            start  = mid + 1
        }else{
            end = mid - 1
        }

    } 

    return console.log(-1)

}

let arr = [8,7,6,4]

findNum(arr,7)