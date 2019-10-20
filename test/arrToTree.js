
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


const convertArrayToTree = (arr) => {
    if (!Array.isArray(arr)) throw Error('args must be an array');
    const n = 0;
    if (arr[n] === undefined) return null;
    const root = new TreeNode(arr[n]);
    const queue = [root];

    for (let i = 1; i < arr.length; i += 2) {
        const now = queue.shift();
        if (arr[i] !== null) {
            now.left = new TreeNode(arr[i]);
            queue.push(now.left);
        } else now.left = null;
        if (arr[i + 1] !== null) {
            now.right = new TreeNode(arr[i]);
            queue.push(now.right);
        } else now.right = null;
    }

    return root;
};


module.exports = {
    convertArrayToTree,
};
