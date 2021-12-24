function unlucky1(nums){
  n = nums.length;
  if((nums[0]==1 && nums[1]==3)|| (nums[1]==1 && nums[2]==3) ||(nums[n-2]==1 && nums[n-1]==3)){
    return true;
  }
  return false;
}