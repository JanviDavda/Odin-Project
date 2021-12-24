function swapEnds(nums){
  let n = nums.length;
  let temp = nums[0];
  nums[0] = nums[n-1];
  nums[n-1] = temp;
  return nums;
}