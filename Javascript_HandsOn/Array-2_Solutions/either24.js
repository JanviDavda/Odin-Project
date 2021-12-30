function either24(nums){
  let twos = 0;
  let fours = 0;
  for(let i=0; i<nums.length-1; i++){
    if(nums[i]==2 && nums[i+1]==2) twos += 1;
    if(nums[i]==4 && nums[i+1]==4) fours += 1;
    if(twos>0 && fours>0) return false;
  }
  return (twos>0 || fours>0);
}