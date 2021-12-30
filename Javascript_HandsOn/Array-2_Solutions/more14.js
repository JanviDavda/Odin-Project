function more14(nums){
  let ones = 0;
  let fours = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i]==1) ones += 1;
    if(nums[i]==4) fours += 1;
  }
  return (ones>fours);
}