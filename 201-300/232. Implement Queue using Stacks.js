/*
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
    Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
Notes:

    You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
    Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
    You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

*/


var MyStack = function () {
    this._ele = []
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this._ele.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this._ele.pop()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this._ele[this._ele.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this._ele.length === 0
};


/**
 * Runtime: 52 ms, faster than 68.66% of JavaScript online submissions for Implement Queue using Stacks.
 * Memory Usage: 33.9 MB, less than 33.33% of JavaScript online submissions for Implement Queue using Stacks.
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.len = 0;
    this.stack = new MyStack();
    this.tmp = null;
    this.tLen = 0;
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack.push(x);
    this.len += 1;
    this.tLen = 0;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.len === 0) return undefined;

    if (this.tLen !== 0) {
        this.len -= 1;
        this.tLen -= 1;
        return this.tmp.pop()
    } else {
        this.tmp = new MyStack()
    }
    let temp = new MyStack();

    let i = 0;
    while (i < this.len - 1) {
        let ele = this.stack.pop();
        temp.push(ele);
        this.tmp.push(ele);
        i++;
    }
    let r = this.stack.pop();

    while (!temp.empty()) {
        this.stack.push(temp.pop())
    }

    this.len -= 1;
    this.tLen = this.len;
    return r;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.len === 0) return undefined;

    if (this.tLen !== 0) {
        return this.tmp.top()
    } else {
        this.tmp = new MyStack()
    }
    let temp = new MyStack();

    let i = 0;
    while (i < this.len) {
        let ele = this.stack.pop();
        temp.push(ele);
        this.tmp.push(ele);
        i++;
    }

    while (!temp.empty()) {
        this.stack.push(temp.pop())
    }
    return this.tmp.top()

};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.len === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
