function centeredAverage(nums){
  let low = 0;
  let high = 0;
  let sum = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[low]>nums[i]){
      low = i;
    }
    if(nums[high]<nums[i]){
      high = i;
    }
    sum += nums[i];
  }
  sum = sum - (nums[low] + nums[high]);
  return sum/(nums.length-2);
}