function atFirst(str){
  if(str.length==1){
    return str+"@";
  }
  if(str.length==0){
    return "@@";
  }
  return str.slice(0,2);
}