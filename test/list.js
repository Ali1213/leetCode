const assert = require('assert')

function List(val) {
    this.val = val
    this.next = null
}

const arrToList = (arr) => {
    if (!Array.isArray(arr)) throw Error('must be array')
    if (arr.length === 0) return null
    const head = new List(arr[0])
    let now = head
    for (let i = 1; i < arr.length; i++) {
        now.next = new List(arr[i])
        now = now.next
    }
    return head
}

const listToArr = (list) => {
    let rList = list
    const result = []
    while (rList) {
        result.push(rList.val)
        rList = rList.next
    }
    return result
}

function diffTreeResultTreeTestSingle(args, testfunc) {
    assert.deepEqual(listToArr(testfunc(...args.params.map((item) => arrToList(item)))), args.result)
}

function testListResultList(testType, testfunc) {
    testType.forEach((args, index) => {
        try {
            diffTreeResultTreeTestSingle(args, testfunc)
        } catch (e) {
            console.log(`${index} occur error`)
            throw e
        }
    })
}

module.exports = {
    testListResultList,
}
