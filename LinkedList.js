// let arr = [3,4,5,6,7]
// console.log(arr)
// let n = arr.length


// class linkedList {
//     constructor(head=null,tail=null){
//         this.head=head
//         this.tail=tail
        
//         this.display = function display(){
//             if(head == null){
//                 console.log('Linked list is Empty')
//                 return;
//             }
        
//             let temp = head
//             while(temp != null){
//                 console.log(temp.data)
//                 temp = temp.next  
//             }
        
//             if(tail == null){
//                 console.log('linked List Ended')
//             }
        
            
//         }

//         this.addNode = function addNode(data){

//             let newNode = new Node(data)
        
//             if(head == null){
        
//                 head = newNode
        
//             }else {
        
//                 tail.next = newNode
//             }
        
//             tail = newNode
//             console.log('new Node added')
//         }

//         this.deleteNode = function deleteNode(data){
//             let temp = head , prev = null;

//             if(temp!=null && temp.data == data){
//                 head = temp.next
//                 return;
//             }

//             while(temp!=null && temp.data != data){
//                 prev = temp
//                 temp = temp.next
//             }

//             if(temp == null){
//                 console.log('There is no data for deletion')
//                 return
//             }

//             if(temp == tail){
//                 tail = prev
//                 tail.next = null
//                 return
//             }

//             prev.next = temp.next 

//         }
//         this.arrToList = function arrToList(arr,n){

//             for(let i=0;i<n;i++){
//                 this.addNode(arr[i])
//             }
//         }
//     }

    

    
// }

// class Node {

//     constructor(data){
       
//         this.data = data
//         this.next = null
//     }
        
// }


// let list = new linkedList()

// list.display()

// list.arrToList(arr,n);

// list.display()



// console.log(list.head.data)




//-----------------------------------------------

// 2Q

// class linkedList {
//     constructor(head = null,tail = null){
//         this.head = head
//         this.tail = tail

//         this.addToBegin = function addToBegin(data){

//             let temp = head

//             let newNode = new Node(data)

//             if(head != null){

//                 head = newNode

//                 head.next = temp

//             }else{

//                 console.log('Linked list is Empty')

//             }

//         }

//         this.addToEnd = function addToEnd(data){

//             let newNode = new Node(data)

//             let temp = tail

//             if(tail != null){

//                 tail = newNode

//                 temp.next = tail

//                 tail.next = null

//             }
//         }

//         this.addNode = function addNode(data){

//         let newNode = new Node(data)
                    
//             if(head == null){
                    
//                 head = newNode
                    
//             }else {
                    
//                 tail.next = newNode
//             }
                    
//             tail = newNode
//             console.log('new Node added')
//         }

//             this.display = function display(){
//             if(head == null){
//                 console.log('Linked list is Empty')
//                 return;
//             }
        
//             let temp = head
//             while(temp != null){
//                 console.log(temp.data)
//                 temp = temp.next  
//             }
        
//             if(tail == null){
//                 console.log('linked List Ended')
//             }
        
            
//         }
//     }
// }

// class Node {
//     constructor(data){

//         this.data = data
//         this.next = null
//     }
// }

// let list = new linkedList()

// list.addNode(12)
// list.addNode(45)
// list.addNode(33)

// list.addToBegin(23)

// list.addToEnd(100)

// list.display()

//--------------------------------------------------------------

//3Q


// class linkedList{
//     constructor(head=null,tail=null){
//         this.head = head
//         this.tail = tail

//         this.addNode = function addNode (data){
//             let newNode = new Node(data)

//             if(head == null){
//                 head = newNode
//             }else{
//                 tail.next = newNode
//             }

//             tail = newNode
//         }


//         this.deleteNode = function deleteNode(data){
//             let temp = head , prev = null;

//             if(temp!=null && temp.data == data){
//                 head = temp.next
//                 return;
//             }

//             while(temp!=null && temp.data != data){
//                 prev = temp
//                 temp = temp.next
//             }

//             if(temp == null){
//                 console.log('There is no data for deletion')
//                 return
//             }

//             if(temp == tail){
//                 tail = prev
//                 tail.next = null
//                 return
//             }

//             prev.next = temp.next 

//         }

//         this.display = function display(){
//             if(head == null){
//                 console.log('Linked list is Empty')
//                 return;
//             }
        
//             let temp = head
//             while(temp != null){
//                 console.log(temp.data)
//                 temp = temp.next  
//             }
        
//             if(tail == null){
//                 console.log('linked List Ended')
//             }
        
            
//         }
//     }


// }

// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }


// let list = new linkedList()

// list.addNode(23)
// list.addNode(56)
// list.addNode(87)

// list.deleteNode(56)

// list.display()

//---------------------------------------------

// class linkedList{
//     constructor(head = null,tail = null){
//         this.head = head 
//         this.tail = tail

//         this.addNode = function addNode(data){
//             let newNode = new Node(data)

//             if(head == null){
//                 head = newNode
//             }else{
//                 tail.next = newNode
//                 newNode.prev = tail
//             }
//             tail = newNode
//         }

//         this.display = function display(){
//             if(head == null){
//                 console.log("linked List is Empty")
//             }

//             let temp = head

//             while(temp !=null){
//                 console.log(temp.data)
//                 temp = temp.next
//             }

//             if(tail.next == null){
//                 console.log('linked list is Ended')
//             }
//         }

//         this.insertAfter = function insertAfter(nextTo,data){

//             let newNode = new Node(data)
//             let temp = head

//             if(temp == null){
//                 console.log('There is no data')
//                 return
//             }

//             while(temp!=null && temp.data!=nextTo){
//                 temp = temp.next
//             }

//             if(temp == tail){
//                 tail.next = newNode
//                 tail = newNode
//                 return
//             }
//             newNode.next = temp.next
//             temp.next = newNode

//         }

//         this.insertBefore = function insertBefore(prevTo,data){
//             let newNode = new Node (data)
//             let temp = head , dataPrev = null
//             if(temp == null){
//                 console.log('There is no Data')
//                 return;
//             }

//             while(temp!=null && temp.data!=prevTo){
//                 dataPrev = temp
//                 temp = temp.next
//             }

//             if(temp == tail){
//                 tail.prev = newNode
//             }
            
//             dataPrev.next = newNode
//             newNode.prev = dataPrev
//             newNode.next = temp
//             temp.prev = newNode
          
//         }

//     }
// }

// class Node {
    
//     constructor(data){
//         this.data = data
//         this.prev = null
//         this.next = null
        
        
//     }
// }

// let list = new linkedList()

// list.addNode(56)
// list.addNode(87)
// list.addNode(34)

// list.insertBefore(87,99)

// list.display()


//------------------------------------------------

//Odd Number

// class linkedList {

//     constructor(head = null, tail = null){
//         this.head = head
//         this.tail = tail

//         this.addNode = function addNode(data) {
//             let newNode = new Node (data)
//             let temp = head
//             if(temp == null){
//                 head = newNode;
//             }else{
//                 tail.next=newNode
//             }
//             tail = newNode
            
//         }

//         this.display = function display(){
//             let temp = head
//             if(temp== null){
//                 console.log('Linked list is empty')
//             }

//             while(temp!=null){
//                 console.log(temp.data)
//                 temp = temp.next
                
//             }


//         }

//         this.isOdd = function isOdd(){

//             if(head==null){
//                 'Linked list is empty'
//             }

//             let temp = head

//             while(temp!=null ){
//                 if(temp.data%2!== 0){
//                     console.log(temp.data)
//                 }
//                 temp = temp.next

//             }
//         }
//     }
// }

// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// let list = new linkedList()

// list.addNode(56)
// list.addNode(67)
// list.addNode(99)

// list.isOdd()

//---------------------------------------

//Sorting

// class linkedList{


//     constructor(head = null, tail= null){
//         this.head = head 
//         this.tail = tail

//         this.addNode = function addNode(data){z
//             let newNode = new Node(data)
//             let temp = head
//             if(temp == null){
//                 head = newNode
//             }else{
//                 tail.next = newNode
//             }
//             tail = newNode
//         }

//         this.display = function display(data){
//             let temp = head

//             if(temp==null){
//                 console.log('linked list is empty')
//                 return
//             }

//             while(temp!=null){
//                 console.log(temp.data)
//                 temp = temp.next
//             }

//         }

//         this.sortedlist = function sortedlist(){
//             let current = head,min=null,max=null
//             while(current!=null){
//                 let index = current.next
//                 while(index!=null){
//                     if(current.data > index.data){
//                         let temp = current.data
//                         current.data = index.data
//                         index.data = temp
//                     }
//                     index = index.next
//                 }
//                 current = current.next
//             }

//             if(current == tail){
//                 'Linked list is Ended'
//             }
//         }

//         this.sum = function sum(){
//             let temp = head
//             let sum = 0
//             while(temp!=null){
                
//                 sum = sum + temp.data
//                 temp = temp.next
//             }
//            console.log(sum);
            
//         }

//     }
// }

// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// let list = new linkedList()

// list.addNode(67)
// list.addNode(45)
// list.addNode(12)
// list.addNode(56)

// list.sortedlist()

// list.sum()


// class linkedList{
//     constructor(head=null,tail=null){
//         this.head = head
//         this.tail = tail

//     }

//     addNode(data){

//         let newNode = new Node(data)
//         let temp = head

//         if(temp == null){
//             head = newNode
//         }else{
//             head = newNode
//             newNode.next = temp
//         }
//         this.tail = newNode
//     }
// }

// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
