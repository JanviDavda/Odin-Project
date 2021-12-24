function rotateLeft3(nums){
  temp = nums[0];
  nums = nums.slice(1,3);
  nums.push(temp);
  return nums;
}