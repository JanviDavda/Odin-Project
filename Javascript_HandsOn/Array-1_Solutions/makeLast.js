function makeLast(nums){
  let n = nums.length;
  let array = new Array((n*2)-1).fill(0);
  array.push(nums[n-1]);
  return array;
}