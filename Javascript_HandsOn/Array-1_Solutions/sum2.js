function sum2(nums){
  let sum = 0;
  let n = nums.length;
  if(n>=2){
    sum = nums[0]+nums[1];
  }
  if(n==1){
    sum = nums[0];
  }
  return sum;
}