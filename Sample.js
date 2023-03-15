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
}

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex