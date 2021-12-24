function array6(nums, i){
  let n = nums.length;
  if(n==0 ||n-i==0){
    return false;
  }
  if(nums[i]==6){
    return true;
  }
  return array6(nums, i+1);
}