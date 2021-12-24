function scoreUp(key, answers){
  let score = 0;
  if(key.length==0){
    return 0;
  }
  if(key[0]==answers[0]){
    score = 4;
  }
  else if(answers[0]=="?"){
    score = 0;
  }else{
    score = -1;
  }
  return score + scoreUp(key.slice(1), answers.slice(1));  
}