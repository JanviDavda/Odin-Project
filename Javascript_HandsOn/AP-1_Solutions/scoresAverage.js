function scoresAverage(scores){
  n = scores.length/2;
  let avg_1 = scoreSum(scores.slice(0,n))/n;
  let avg_2 = scoreSum(scores.slice(n))/n;
  return Math.max(avg_1,avg_2);
}
function scoreSum(scores){
  if(scores.length==0){
    return 0;
  }
  return scores[0]+scoreSum(scores.slice(1));
}