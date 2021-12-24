function scoresSpecial(a, b){
  let a_score = calculateSpecialScore(a);
  let b_score = calculateSpecialScore(b);
  return a_score+b_score;
}
function calculateSpecialScore(array){
  if(array.length==0){
    return 0;
  }
  if(array[0]%10==0){
    return Math.max(array[0],calculateSpecialScore(array.slice(1)));
  }
  return calculateSpecialScore(array.slice(1));
}