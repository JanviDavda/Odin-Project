function noX(str){
  if(str==""){
    return "";
  }
  if(str[0]=='x'){
    return noX(str.slice(1));
  }
  return str[0]+noX(str.slice(1));
}