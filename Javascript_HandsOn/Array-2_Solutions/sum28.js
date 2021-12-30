function sum28(nums){
  let sum = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i]==2) sum += 2;
  }
  if(sum==8) return true;
  else return false;
}