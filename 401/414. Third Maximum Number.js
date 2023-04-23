// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

// Example 1:
// Input: [3, 2, 1]

// Output: 1

// Explanation: The third maximum is 1.
// Example 2:
// Input: [1, 2]

// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: [2, 2, 3, 1]

// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.


// beat 73.74%
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max = nums[0],mid = Number.MIN_SAFE_INTEGER,third = Number.MIN_SAFE_INTEGER;
  for(let i = 1;i< nums.length;i++){
          if(nums[i] === max || nums[i] === mid){
              
          }else if(nums[i]>third){
              if(nums[i]<mid){
                  third = nums[i]
              }else if(nums[i]<max){
                  third = mid;
                  mid = nums[i];
              }else{
                  third = mid;
                  mid = max;
                  max = nums[i]
              }
          }
  }
  return third !== Number.MIN_SAFE_INTEGER ? third: max;
};


// beat 100%
// 精简一点代码

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max = nums[0],mid = Number.MIN_SAFE_INTEGER,third = Number.MIN_SAFE_INTEGER;
  for(let i = 1;i< nums.length;i++){
      if(nums[i] !== max && nums[i] !== mid && nums[i]>third){
          if(nums[i]<mid){
              third = nums[i]
          }else if(nums[i]<max){
              third = mid;
              mid = nums[i];
          }else{
              third = mid;
              mid = max;
              max = nums[i]
          }
      }
  }
  return third !== Number.MIN_SAFE_INTEGER ? third: max;
};

// beat 100%
// 代码简单一点；

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let v = [nums[0],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]
  for(let i = 1;i< nums.length;i++){
      if(!v.includes(nums[i]) && nums[i]>v[2]){
          if(nums[i]<v[1]){
              v = [v[0],v[1],nums[i]];
          }else if(nums[i]<v[0]){
              v = [v[0],nums[i],v[1]];
          }else{
              v = [nums[i],v[0],v[1]];
          }
      }
  }
  return v[2] !== Number.MIN_SAFE_INTEGER ? v[2]: v[0];
};