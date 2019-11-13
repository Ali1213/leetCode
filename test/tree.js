const assert = require('assert');

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function arrToTree(arr) {
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
}

function diffTreeTestSingle(args, testfunc) {
    assert.deepEqual(testfunc(...args.params.map((item) => arrToTree(item))), args.result);
}

function diffTreeTest(testType, testfunc) {
    testType.forEach((args, index) => {
        try {
            diffTreeTestSingle(args, testfunc);
        } catch (e) {
            console.log(`${index} occur error`);
            throw e;
        }
    });
}


module.exports = {
    diffTreeTest,
};
