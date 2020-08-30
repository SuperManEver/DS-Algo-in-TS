import Graph from './graph'
import bfs from './bfs'
import { nodeToPath } from './utils'

const cityGraph: Graph<string> = new Graph([
  'Seattle',
  'San Francisco',
  'Los Angeles',
  'Riverside',
  'Phoenix',
  'Chicago',
  'Boston',
  'New York',
  'Atlanta',
  'Miami',
  'Dallas',
  'Houston',
  'Detroit',
  'Philadelphia',
  'Washington',
])
cityGraph.addEdgeByVertices('Seattle', 'Chicago')
cityGraph.addEdgeByVertices('Seattle', 'San Francisco')
cityGraph.addEdgeByVertices('San Francisco', 'Riverside')
cityGraph.addEdgeByVertices('San Francisco', 'Los Angeles')
cityGraph.addEdgeByVertices('Los Angeles', 'Riverside')
cityGraph.addEdgeByVertices('Los Angeles', 'Phoenix')
cityGraph.addEdgeByVertices('Riverside', 'Phoenix')
cityGraph.addEdgeByVertices('Riverside', 'Chicago')
cityGraph.addEdgeByVertices('Phoenix', 'Dallas')
cityGraph.addEdgeByVertices('Phoenix', 'Houston')
cityGraph.addEdgeByVertices('Dallas', 'Chicago')
cityGraph.addEdgeByVertices('Dallas', 'Atlanta')
cityGraph.addEdgeByVertices('Dallas', 'Houston')
cityGraph.addEdgeByVertices('Houston', 'Atlanta')
cityGraph.addEdgeByVertices('Houston', 'Miami')
cityGraph.addEdgeByVertices('Atlanta', 'Chicago')
cityGraph.addEdgeByVertices('Atlanta', 'Washington')
cityGraph.addEdgeByVertices('Atlanta', 'Miami')
cityGraph.addEdgeByVertices('Miami', 'Washington')
cityGraph.addEdgeByVertices('Chicago', 'Detroit')
cityGraph.addEdgeByVertices('Detroit', 'Boston')
cityGraph.addEdgeByVertices('Detroit', 'Washington')
cityGraph.addEdgeByVertices('Detroit', 'New York')
cityGraph.addEdgeByVertices('Boston', 'New York')
cityGraph.addEdgeByVertices('New York', 'Philadelphia')
cityGraph.addEdgeByVertices('Philadelphia', 'Washington')

console.log(cityGraph.toString())
console.log(cityGraph.neighborsForVertex('Dallas'))

console.log('-------------------------------------------')

const result = bfs<string>(
  'Seattle',
  (nodeName: string) => nodeName === 'Miami',
  cityGraph.neighborsForVertex
)

if (result) {
  const path = nodeToPath<string>(result)
  console.log('Path from Boston to Miami:')
  console.log(path)
} else {
  console.log('No solution found using depth-first search!')
}
