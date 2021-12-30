function sum13(nums){
  let sum = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i]==13){
      i += 1;
    }else{
      sum += nums[i];
    }
  }
  return sum;
}