/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

    Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

    Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
Note:
    You may assume that nums' length ≥ k-1 and k ≥ 1.
*/

/**
 * Runtime: 392 ms, faster than 27.04% of JavaScript online submissions for Kth Largest Element in a Stream.
 * Memory Usage: 65.3 MB, less than 25.00% of JavaScript online submissions for Kth Largest Element in a Stream.
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function (k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => a - b).slice(-k);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if(this.nums.length >= this.k && val <= this.nums[0]){
        return this.nums[0]
    }
    for(let i = 0; i< this.nums.length; i++){
        if(this.nums[i] >= val) {
            this.nums.splice(i,0,val)
            this.nums =  this.nums.slice(-this.k);
            return this.nums[0]
        }
    }
    this.nums.push(val);
    this.nums =  this.nums.slice(-this.k);
    return this.nums[0]

};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
