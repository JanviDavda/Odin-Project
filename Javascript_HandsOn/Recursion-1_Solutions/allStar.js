function allStar(str){
  if(str.length==0 ||str.length==1){
    return str;
  }
  return str[0]+"*"+allStar(str.slice(1));
}