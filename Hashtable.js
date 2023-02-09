// class Hashtable {
//     constructor(length){
//         this.table = new Array(length)
//         this.length = length
//     }

//     hash(key){
//         let hash = 0
//         for(let i=0;i<key.length;i++){
//             hash += key.charCodeAt(i)
//         }
//         return hash % this.length
//     }

//     set(key,value){
//         let index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key) {
//         let index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key) {
//         let index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//     }

// }
// }

// const table = new Hashtable(50)

// table.set("name", "Hari")
// table.set("age",34)

// console.log(table.get("name"));

// table.remove("age")

// table.display()

// class hashTable {
//     constructor(length){
//         this.table = new Array (length)
//         this.length = length
//     }

//     hash(key){
//         let hash = 0
//         for(let i=0;i<key.length;i++){
//             hash += key.charCodeAt(i)
//         }
//         return hash % this.length
//     }

//     set(key,value){
//         let index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         let index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key)

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table = new hashTable(50)

// table.set("name","hari")

// console.log(table.get("name"))

// table.display()


// class hashTable {
//     constructor(length){
//         this.table = new Array(length)
//         this.length = length
//     }

//     hash(key){
//         let hash = 0 ;
//         for(let i=0;i<key.length;i++){
//             hash += key.charCodeAt(i)
//         }
//         return hash % this.length
//     }

//     set(key,value){
//         let index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         let index = this.hash(key)
//         return this.table[index]
//     }

//     palindromeValidate(key){
//         let index = this.hash(key)
//         let string = this.table[index]

        
//     }

//     display(){

//         for(let i=0;i<this.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// let table = new hashTable(50)

// table.set("name","hari")

// table.display()


let noname = 'hari'

let arr = noname.split("")

let length = arr.length

let flag=0;
for(let i=0;i<arr.length/2;i++){
    if(arr[i]!==arr[length-1-i]){
        flag=1;
    }
}

if(flag===0){
    console.log('Palindrome');
}else{
    console.log('Not Palindrome');
}