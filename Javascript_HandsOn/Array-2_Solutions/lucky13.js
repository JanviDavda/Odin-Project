function lucky13(nums){
  for(let i=0; i<nums.length; i++){
    if(nums[i]==1 || nums[i]==3) return false;
  }
  return true;
}