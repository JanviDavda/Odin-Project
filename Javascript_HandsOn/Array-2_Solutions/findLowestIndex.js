function findLowestIndex(nums){
  lowest = 0;
  for(let i=1; i<nums.length; i++){
    if(nums[lowest]>nums[i]){
      lowest = i;
    }
  }
  return lowest;
}