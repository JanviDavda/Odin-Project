function double23(nums){
  n = nums.length;
  if(n==2 && nums[0]==nums[1] && (nums[0]==2 || nums[0]==3)){
    return true;
  }
  return false;
}