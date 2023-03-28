// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

// beat 9.15%
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.v = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.v.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.v.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.v[this.v.length-1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  if(this.v.length<0)return null;
  let min = this.v[0];
  for(let v of this.v){
      if(min>v) min = v;
  }
  return min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/



// beat 23.2%
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.length = 0;
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this[this.length] = x;
  ++this.length;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  --this.length;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this[this.length-1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  if(this.length<0)return null;
  let min = this[0];
  for(let i=1;i<this.length;i++){
      if(this[i]<min) min = this[i];
  }
  return min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/


//beat 100%
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.length = 0;
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this[this.length] = x;
  if(this.length === 0 || this.min && x<this.min){
      this.min = x;
  }
  ++this.length;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if(this[--this.length] === this.min) this.min = null;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this[this.length-1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  if(this.length === 0) return null;
  return this.min === null ? this._getMin() : this.min;
};
MinStack.prototype._getMin = function() {
      this.min = this[0];
      for(let i=1;i<this.length;i++){
          if(this[i]<this.min) this.min = this[i];
      }
      return this.min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/