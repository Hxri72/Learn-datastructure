// class Graph{
//     constructor(){
//         this.vertices = []
//         this.edges = new Map()
//     }

//     addVertex(vertex){
//         this.vertices.push(vertex)
//         this.edges.set(vertex,[])
//     }

//     addEdge(vertex1,vertex2){
//         this.edges.get(vertex1).push(vertex2)
//         this.edges.get(vertex2).push(vertex1)
//     }

//     printGraph() {
//         const vertices = this.edges.keys();
//         for (const vertex of vertices) {
//           const edges = this.edges.get(vertex);
//           const edgeList = edges.join(', ');
//           console.log(`${vertex} -> ${edgeList}`);
//         }
//     }

//     deleteVertex(vertex) {
//         // Remove the vertex from the Map object
//         this.edges.delete(vertex);
      
//         // Remove any edges that involve the vertex
//         for (const [key, edges] of this.edges) {
//           const index = edges.indexOf(vertex);
//           if (index !== -1) {
//             edges.splice(index, 1);
//           }
//         }
//     }  
    
//     bfs(startVertex) {
//       const visited = new Map();
//       const queue = [];
  
//       visited.set(startVertex,true);
//       queue.push(startVertex);
  
//       while (queue.length !== 0) {
//         const vertex = queue.shift();
//         console.log(vertex);
  
//         const neighbors = this.edges.get(vertex);
//         for (let neighbor of neighbors) {
//           if (!visited.get(neighbor)) {
//             visited.set(neighbor, true);
//             queue.push(neighbor);
//           }
//         }
//       }
//     }

//     dfs(startVertex) {
//       const visited = new Map();
//       this._dfsRecursive(startVertex, visited);
//     }
  
//     _dfsRecursive(vertex, visited) {
//       visited.set(vertex, true);
//       console.log(vertex);
  
//       const neighbors = this.edges.get(vertex);
//       for (let neighbor of neighbors) {
//         if (!visited.get(neighbor)) {
//           this._dfsRecursive(neighbor, visited);
//         }
//       }
//     }
      
// }

// const g = new Graph();

// g.addVertex('A');
// g.addVertex('B');
// g.addVertex('C');
// g.addVertex('D')
// g.addEdge('A','B');
// g.addEdge('B','C');
// g.addEdge('A','D')


// g.bfs('A')

// g.printGraph();


class Graph{
  constructor(){
    this.vertices = []
    this.edges = new Map()
  }

  addVertex(vertex){
    this.vertices.push(vertex)
    this.edges.set(vertex,[])
  }

  addEdges(vertex1,vertex2){
    this.edges.get(vertex1).push(vertex2)
    this.edges.get(vertex2).push(vertex1)
  }

  printGraph(){
    const vertices = this.edges.keys()
    for(let vertex of vertices){
      const edges = this.edges.get(vertex)
      const edgeList = edges.join(',')
      console.log(`${vertex} => ${edgeList}`)
    }
  }

  deleteVertex(vertex){
    this.edges.delete(vertex)
    for(const [keys,edges] of this.edges){
      const index = edges.indexOf(vertex)
      if(index !== -1){
        edges.splice(index,1)
      }
    }
  }

  bfs(startVertex){
    const visited = new Map()
    const queue = []

    visited.set(startVertex,true)
    queue.push(startVertex)

    while(queue.length !== 0){
      const vertex = queue.shift()
      console.log(vertex)

      const neighbors = this.edges.get(vertex)
      for(let neighbor of neighbors){
        if(!visited.get(neighbor)){
          visited.set(neighbor,true)
          queue.push(neighbor)
        }
      }
    }
  }

  dfs(startVertex){
    const visited = new Map()

    const edges = this.edges

    function dfsHelper(vertex,){
      visited.set(vertex,true)
      console.log(vertex)

      const neighbors = edges.get(vertex)
      for(let neighbor of neighbors){
        if(!visited.get(neighbor)){
          visited.set(neighbor,true)
          dfsHelper(neighbor)
        }
      }
    }
    dfsHelper(startVertex)
  }
}

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')

g.addEdges('A','C')
g.addEdges('B','D')
g.addEdges('A','B')
g.addEdges('D','E')

g.bfs('B')
console.log('------------')
g.dfs('B')

g.printGraph()