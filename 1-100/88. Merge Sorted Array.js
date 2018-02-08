// 


// beat 85.56%
var merge = function(nums1, m, nums2, n) {
  if(n === 0) return;
  let i=m-1;
  while(i>=0){
      nums1[i+n] = nums1[i];
      i--;
  }
  i = n;
  let j = 0;
  let x = m+n;
  let s = 0;
  while(i<x && j<n){
      if(nums1[i]>nums2[j]){
          nums1[s] = nums2[j];
          j++;
      } else {
          nums1[s] = nums1[i];
          nums1[i] = 0;
          i++;
      }
      s++;
  }
  
  while(j<n){
      nums1[s] = nums2[j];
      j++;
      s++;
  }
  
};

//beat 52.71%
var merge = function(nums1, m, nums2, n) {
  let index = m + n - 1;
  m--;n--;
  while(n >= 0 && m>=0){
      if( nums1[m] > nums2[n] ){
          nums1[index--] = nums1[m--];
      }else{
          nums1[index--] = nums2[n--];
      }
  }
  while(n>=0){
      nums1[index--] = nums2[n--];
  }
};