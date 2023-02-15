// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor() {
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value < root.value){
//             if(root.left===null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value===value){
//                 return true
//             }else if(root.value<value){
//                 return this.search(root.right,value)
//             }else if(root.value>value){
//                 return this.search(root.left,value)
//             }
//         }
//     }

//     preorder(root){
//         if(root){
//             console.log(root.value)
//             this.preorder(root.left)
//             this.preorder(root.right)
//         }
//     }

//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value)
//             this.inorder(root.right)
//         }
//     }

//     postorder(root){
//         if(root){
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.value)
//         }
//     }
// }


// const bst = new BinarySearchTree()

// console.log('Tree is empty?',bst.isEmpty())

// bst.insert(10)
// bst.insert(8)
// bst.insert(15)
// bst.insert(20)
// bst.insert(5)
// bst.insert(3)
// bst.insert(7)
// bst.insert(9)

// // console.log(bst.search(bst.root,10))
// // console.log(bst.search(bst.root,16))

// bst.postorder(bst.root)


class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
}

const bst = new BinarySearchTree()

console.log('Root is empty?',bst.isEmpty())

bst.insert(10)
bst.insert(15)
bst.insert(8)
bst.insert(7)
bst.insert(9)

bst.inorder(bst.root)