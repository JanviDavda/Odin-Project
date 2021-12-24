//Looping Solution
/*function scoresClump(scores){
  for(let i=0; i<scores.length-2; i++){
    if(scores[i+1]-scores[i]<3 && scores[i+2]-scores[i+1]<3 && scores[i+2]-scores[i]<3){
      return true;
    }
  }
  return false;
}*/
//Recurssion Solution
function scoresClump(scores){
  if(scores.length<3){
    return false;
  }
  if(scores[1]-scores[0]<3 && scores[2]-scores[1]<3 && scores[2]-scores[0]<3){
    return true;
  }
  return scoresClump(scores.slice(1));
}