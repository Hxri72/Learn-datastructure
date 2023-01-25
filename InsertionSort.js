let arr = [78,45,99,6,2,69]

for(i=1;i<arr.length;i++){
    let temp = arr[i]
    let j = i-1;
    while(j>=0&&arr[j]>temp){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = temp
}
console.log(arr)