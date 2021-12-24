function pairStar(str){
  if(str.length==0 || str.length==1){
    return str;
  }
  if(str[0]==str[1]){
    return str[0]+"*"+pairStar(str.slice(1));
  }
  return str[0]+pairStar(str.slice(1));
}