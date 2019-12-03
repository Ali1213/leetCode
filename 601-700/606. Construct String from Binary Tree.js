/*
You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

Example 1:
Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /
  4

Output: "1(2(4))(3)"

Explanation: Originallay it needs to be "1(2(4)())(3()())",
but you need to omit all the unnecessary empty parenthesis pairs.
And it will be "1(2(4))(3)".
Example 2:
Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \
      4

Output: "1(2()(4))(3)"

Explanation: Almost the same as the first example,
except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Runtime: 72 ms, faster than 46.94% of JavaScript online submissions for Construct String from Binary Tree.
 * Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Construct String from Binary Tree.
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = (t) => {
    const transTree = (root) => {
        if (root === null) return '';
        let s = '';
        s += root.val;
        const l = transTree(root.left);
        if (l !== '') {
            s += `(${l})`;
        }

        const r = transTree(root.right);

        if (r !== '') {
            if (l === '') s += '()';
            s += `(${r})`;
        }
        return s;
    };

    return transTree(t);
};
