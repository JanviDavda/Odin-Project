function no14(nums){
  ones = 0;
  fours = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i]==1) ones += 1;
    if(nums[i]==4) fours += 1;
    if(ones>0 && fours>0) return false;
    
  }
  return true;
}