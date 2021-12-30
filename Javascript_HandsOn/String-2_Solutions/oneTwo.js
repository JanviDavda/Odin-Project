function oneTwo(str){
  let res ="";
  let i=0;
  len = str.length - (str.length%3);
  for(i=0; i<len; i+=3){
    res += str.slice(i+1,i+3)+str[i];
  }
  return res;
}