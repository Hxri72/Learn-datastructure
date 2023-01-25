let arr = [1,2,3,5,89,22]

for (i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j]
            arr [j] = temp
        }
    }
}

console.log(arr)