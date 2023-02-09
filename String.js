
// function change(string,key){
//     let newKey = key % 26
//     let char = []

//     for(let i=0;i<string.length;i++){

//         let letterPosition = string.charCodeAt(i) + newKey

//         if(letterPosition <= 122){
//             char[i] =  letterPosition
//         }else{
//             char[i] = 96 + letterPosition % 122
//         }
        
//     }
    // console.log(char)
    // let nums = String(char)
    // console.log(nums)

    // for(let i=0;i <nums.length ;i++){
    //     console.log(parseInt(nums[i]));
    // }
//     let name= ""
//     for(let i=0;i<char.length;i++){
//         let text = String.fromCharCode(char[i])
//         name+=text    }
//     console.log(name);
// }

// change('Hari',2)

//--------------------------------------------------------


//Palindrome or not


// function palindromeValidate(str){

//     let length = str.length
//     let flag = 0
//     for(let i=0;i<length/2 ; i++){
        
//         if(str[i]!==str[length-1-i]){
//             flag = 1
//         }
//     }

//     if(flag==0){
//         console.log('String is Palindrome')
//     }else{
//         console.log('String is not Palindrome');
//     }
    
// }

// palindromeValidate('malayalam')

//--------------------------------------------------------

//Reversing the string

// let onename = "hari"

// let arr = onename.split("")

// let length = arr.length

// for(let i=0;i<arr.length/2;i++){
//     let temp = arr[i]
//     arr[i] = arr[length-1]
//     arr[length-1] = temp
    
//     length = length-1
// }
// let game = ''
// for(let i=0;i<arr.length;i++){
    
//     game = game + arr[i]
// }
// console.log(game)


// let Name = 'madhu'

// let arr = Name.split("")

// let length = arr.length

// for(let i=0;i<arr.length/2;i++){
//         let temp = arr[i]
//         arr[i] = arr[length-1]
//         arr[length-1] = temp

//        length = length-1
// }

// console.log(arr)

// let newName = ''

// for(let i=0;i<arr.length;i++){
//     newName = newName + arr[i]
// }

// console.log(newName)


// function palindromeValidate(str) {

//     let length = str.length
//     let flag=0
//     for(let i=0;i<length/2;i++){
//         if(str[i]!==str[length-1-i]){
//             flag=1
//         }
//     }

//     if(flag===0){
//         console.log('String is Palindrome');
//     }else{
//         console.log('not Palindrome')
//     }

// }

// palindromeValidate('malayalam')