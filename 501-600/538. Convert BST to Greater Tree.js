/* Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const convertBST = (root) => {
    const content = [];
    let total = 0;

    const searchTree = (root) => {
        if (root === null) return;
        searchTree(root.right);
        total += root.val;
        content.push(total);
        searchTree(root.left);
    };

    searchTree(root);

    const setTree = (root) => {
        if (root === null) return;
        setTree(root.right);
        root.val = content.shift();
        setTree(root.left);
    };
    setTree(root);
    return root;
};
