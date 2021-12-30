function findTheMedian(nums){
  len = nums.length;
  if(len%2==0){
    return ((nums[len/2] + nums[(len/2)-1])/2);
  }else{
    return nums[(len-1)/2];
  }
}