//Looping Solution
/*function scores100(scores){
  for(let i=0; i<scores.length-1; i++){
    if(scores[i]==100 && scores[i+1]==100){
      return true;
    }
  }
  return false;
}*/
//Recrssion Solution
function scores100(scores){
  let n = scores.length;
  if(n==0 || n==1){
    return false;
  }
  if(scores[0]==100 && scores[1]==100){
    return true;
  }
  return scores100(scores.slice(1));
}