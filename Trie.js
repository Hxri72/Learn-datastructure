// class TrieNode{
//     constructor(){
//         this.children = {};
//         this.isWordEnd = false;
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let node = this.root;
//         for(let i=0;i<word.length;i++){
//             const char = word[i]
//             if(!node.children[char]){
//                 node.children[char] = new TrieNode()
//             }
//             node = node.children[char]
//         }
//         node.isWordEnd = true

//     }

//     search(word){
//         let node = this.root
//         for(let i=0;i<word.length;i++){
//             const char = word[i]
//             if(!node.children[char]){
//                 return false;
//             }
//             node = node.children[char]
//         }
//         return node.isWordEnd;
//     }

//     startWith(prefix){
//         let node = this.root
//         for(let i=0;i<prefix.length;i++){
//             const char = prefix[i]
//             if(!node.children[char]){
//                 return false;
//             }
//             node = node.children[char]
//         }
//         return true;
//     }

    
// }

// const trie = new Trie()

// trie.insert('hari')
// trie.insert('manu')

// console.log(trie.search('manu'))
// console.log(trie.search('madhu'))

// console.log(trie.startWith('ma'))
// console.log(trie.startWith('ha'))


class TrieNode{
    constructor(){
        this.children = {}
        this.endoftheword = false;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let i=0;i< word.length;i++){
            const char = word[i]
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char]
        }
        node.endoftheword = true
    }

    search(word){
        let node = this.root
        for (let i=0;i<word.length;i++){
            const char = word[i]
            if(!node.children[char]){
                return false;
            }
            node = node.children[char]
        }   
        return node.endoftheword;
    }

    startWithword(prefix){
        let node = this.root
        for(let i=0;i< prefix.length;i++){
            const char = prefix[i]
            if(!node.children[char]){
                return false;
            }
            node = node.children[char]
        }
        return true;
    }
}

const trie = new Trie()

trie.insert('hari')
trie.insert('prasad')

console.log(trie.search('hari'))

console.log(trie.startWithword('ha'));

