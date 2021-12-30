function stringSplosion(str){
  let res = "";
  for(i=0;i<str.length;i++){
    res += str.slice(0,i);
  }
  return res;
}