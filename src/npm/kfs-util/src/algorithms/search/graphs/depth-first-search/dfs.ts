import { UndirectedGraph } from '../../../../data-structures';

type Graph = UndirectedGraph<any>;

/**
 * Traverses the graph using depth-first search
 * @param {Graph} graph graph data structure
 * @param {any} start starting node
 * @returns {any[]} path traversed
 * @complexity TODO
 */
export default function DFS(graph: Graph, start: any) {
    const visited: Map<any, boolean> = new Map();
    const traversed = [];
    const { adjacencyList } = graph;

    // recursively executes a depth-first search
    (function _dfs(current: any) {
        visited.set(current, true);
        traversed.push(current);

        const adjacent = adjacencyList.get(current) || [];

        // loop through edges and visit adjacent nodes
        for (const key in adjacent) {
            if (key) {
                const node = adjacent[key];
                if (!visited.get(node)) {
                    _dfs(node);
                }
            }
        }
    })(start);
    return traversed;
}
