/*
Given a n-ary tree, find its maximum depth.

    The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

    For example, given a 3-ary tree:






    We should return its max depth, which is 3.
Note:

    The depth of the tree is at most 1000.
The total number of nodes is at most 5000.
*/


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * Runtime: 604 ms, faster than 46.65% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 * Memory Usage: 83.8 MB, less than 6.38% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) return 0;
    let maxDep = 0;

    const getNextChild = (nowChilds) => {
        if(nowChilds.length === 0) return;
        let nextChilds = []
        for(let i = 0; i< nowChilds.length; i++){
            if(nowChilds[i]){
                nextChilds = nextChilds.concat(nowChilds[i].children)
            }
        }
        maxDep +=  1;
        return getNextChild(nextChilds)
    };

    getNextChild([root])

    return maxDep;

};




/**
 * Runtime: 616 ms, faster than 34.38% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 * Memory Usage: 83.9 MB, less than 6.38% of JavaScript online submissions for Maximum Depth of N-ary Tree.
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDep = 0;
    if(root === null) return maxDep;
    let childs = [root];
    while(childs.length > 0){
        let nextChilds = [];
        for(let i = 0; i< childs.length; i++){
            if(childs[i]){
                nextChilds = nextChilds.concat(childs[i].children)
            }
        }
        maxDep +=  1;
        childs = nextChilds;
    }


    return maxDep;

};