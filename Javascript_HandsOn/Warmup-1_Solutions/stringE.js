function stringE(str){
  let rep=0;
  for(let i=0; i < str.length; i++) {
    if(str[i]=='e'){
      rep += 1;
    }
  }
  if(rep>=1 && rep<=3){
      return true;
  }
  else{
    return false;
  }
}