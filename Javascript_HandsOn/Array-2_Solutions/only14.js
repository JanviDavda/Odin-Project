function only14(nums){
  for(let i=0; i<nums.length; i++){
    if(nums[i]!=1 && nums[i]!=4) return false;
  }
  return true;
}