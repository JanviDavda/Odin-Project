function countHi(str){
  if(str.length<2){
    return 0;
  }
  if(str.slice(0,2)=="hi"){
    return 1+countHi(str.slice(2));
  }
  return countHi(str.slice(1));
}