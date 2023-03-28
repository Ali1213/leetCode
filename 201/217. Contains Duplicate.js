// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// beat 100%
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let store = new Set();
  for(let num of nums){
      if(store.has(num)){
          return true;
      }else{
          store.add(num);
      }
  }
  return false;
};