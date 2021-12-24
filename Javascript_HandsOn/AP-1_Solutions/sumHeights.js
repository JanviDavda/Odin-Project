function sumHeights(heights, start, end){
  if(start>=end){
    return 0;
  }
  let diff = Math.abs(heights[start]-heights[start+1]);
  return diff+sumHeights(heights, start+1, end);
}