function maxTriple(nums){
  n = nums.length;
  return Math.max(nums[0],nums[(n-1)/2],nums[n-1]);
}