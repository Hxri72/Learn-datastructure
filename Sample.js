class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
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
        const newNode = new Node (value)

        if(bst.isEmpty()){
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
            
                if(root.right=== null){
                    root.right = newNode
                }else{
                    this.insertNode(root.right,newNode)
                }
            
        }
    }

    

}


const bst = new BinarySearchTree()

console.log('Tree is Empty?',bst.isEmpty())

