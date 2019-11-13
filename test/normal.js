
const assert = require('assert');


function normal(args, testfunc) {
    assert.deepEqual(testfunc(...args.params), args.result);
}
function normalTest(testType, testfunc) {
    testType.forEach((args, index) => {
        try {
            normal(args, testfunc);
        } catch (e) {
            console.log(`${index} occur error`);
            throw e;
        }
    });
}


module.exports = {
    normalTest,
};
