function wordEnds(str, word){
  res ="";
  for(let i=0; i<str.length; i++){
    if(str.slice(i,i+word.length)==word){
      if(i!=0){
        res += str[i-1];
      }
      if(i+word.length!=str.length){
        res += str[i+word.length];
      }
    }
  }
  return res;
}