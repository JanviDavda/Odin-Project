function arrayFront9(nums){
  n = Math.min(4,nums.length);
  for(let i=0; i<n; i++){
    if(nums[i]==9){
      return true;
    }
  }
  return false;
  
}