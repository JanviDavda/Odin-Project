function plusOut(str, word){
  res =""
  for(let i=0; i<str.length; i++){
    if(str.slice(i,i+word.length) == word){
      res+=word;
      i+=word.length-1;
    }else{
      res += "+";
    }
  }
  return res;
}