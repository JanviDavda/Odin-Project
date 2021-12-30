function last2(str){
  if(str.length<3){
    return 0;
  }
  let sub = str.slice(-2);
  let count = -1;
  for(let i=0; i<str.length-1;i++){
    if(str.slice(i,i+2)==sub){
      count ++;
    }
  }
  return count;
}