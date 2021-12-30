function doubleChar(str){
  res = "";
  for(let i=0; i<str.length; i++){
    res += str[i];
    res += str[i];
  }
  return res;
}