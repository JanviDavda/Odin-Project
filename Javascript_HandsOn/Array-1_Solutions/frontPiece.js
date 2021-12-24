function frontPiece(nums){
  n = nums.length;
  if(n<=2){
    return nums;
  }
  return nums.slice(0,2);
}