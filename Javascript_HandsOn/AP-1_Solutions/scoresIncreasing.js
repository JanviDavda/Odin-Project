function scoresIncreasing(scores){
  n = scores.length;
  if(n==0 || n==1){
    return true;
  }
  if(scores[1]>=scores[0]){
    return scoresIncreasing(scores.slice(1));
  }
  return false;
}