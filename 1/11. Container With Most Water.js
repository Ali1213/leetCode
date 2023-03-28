// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// beat 49.08%
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;let r = height.length-1;
    let contain = 0;
    while(l<r){
        if(height[l]>height[r]){
            contain = Math.max(contain, height[r] * (r-l))
            r--;
        }else{
            contain = Math.max(contain, height[l] * (r-l))
            l++;
        }
    }
    return contain;
};


// beat 80.07%  根据测试结果做了一次诡异的优化
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;let r = height.length-1;
    let contain = 0;
    while(l<r){
        if(height[l]<height[r]){
            contain = Math.max(contain, height[l] * (r-l))
            l++;
        }else{
            contain = Math.max(contain, height[r] * (r-l))
            r--;
        }
    }
    return contain;
};