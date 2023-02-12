/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */


/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function (node) {
    if (!node) return null
    const q = [node]
    const set = {
        [node.val]: {
            Node: new Node(node.val, []),
            isDone: false,
        },
    }
    if (node.neighbors.length == 0) {
        return set[node.val].Node
    }
    while (q.length > 0) {
        const v = q.shift()
        if (set[v.val] && set[v.val].isDone) {
            continue
        }
        if (!set[v.val]) {
            set[v.val] = {
                Node: new Node(v.val, []),
                isDone: false,
            }
        }
        for (let i = 0; i < v.neighbors.length; i++) {
            if (!set[v.neighbors[i].val]) {
                set[v.neighbors[i].val] = {
                    Node: new Node(v.neighbors[i].val, []),
                    isDone: false,
                }
            }
            if (!set[v.neighbors[i].val].isDone) {
                q.push(v.neighbors[i])
            }
            set[v.val].Node.neighbors.push(set[v.neighbors[i].val].Node)
        }
        set[v.val].isDone = true
    }
    return set[node.val].Node
}
