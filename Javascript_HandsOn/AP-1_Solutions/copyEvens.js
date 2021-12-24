function copyEvens(nums, count){
  if(count==0){
    return [];
  }
  if(nums[0]%2==0){
    return [nums[0]].concat(copyEvens(nums.slice(1), count-1));
  }
  return copyEvens(nums.slice(1), count);
}