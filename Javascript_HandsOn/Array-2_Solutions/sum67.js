function sum67(nums){
  let sum = 0;
  let flag = false;
  for(let i=0; i<nums.length; i++){
    if(flag){
      if(nums[i]==7) flag = false;
    }else{
      if(nums[i]==6) flag = true;
      else sum += nums[i];
    }
  }
  return sum;
}