function has77(nums){
  let len = nums.length;
  for(let i=0; i<len-2; i++){
    if((nums[i]==7 && nums[i+1]==7)||(nums[i]==7 && nums[i+2]==7)) return true;
  }
  if(nums[len-2]==7 && nums[len-1]==7) return true;
  return false;
}