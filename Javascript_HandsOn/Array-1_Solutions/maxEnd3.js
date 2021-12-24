function maxEnd3(nums){
  let n = nums.length;
  let m = Math.max(nums[0],nums[n-1]);
  for(let i=0; i<n; i++){
    nums[i] = m;
  }
  return nums;
}