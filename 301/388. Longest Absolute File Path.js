


/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    const store = new Map()
    store.set(0,0)
    let max = 0
    input.split('\n').forEach(item => {
        const level = item.lastIndexOf('\t') + 1;
        const name = item.substring(level)
        if(name.includes(".")){
            max = Math.max(max, store.get(level) + name.length)
        } else {
            store.set(level + 1, store.get(level) + name.length + 1)
        }
    })
    return max
};