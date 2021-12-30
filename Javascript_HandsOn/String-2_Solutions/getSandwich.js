function getSandwich(str){
  res = "";
  start = -1;
  end = -1
  for(i=0; i<=str.length-5; i++){
    if(str.slice(i,i+5)=="bread"){
      if(start>=0){
        end = i;
        i = i+4;
      }
      else{
        start = i;
        i = i+4;
      }
    }
  }
  if(start<0 || end<0){
    return "";
  }
  return str.slice(start+5,end);
  //return start;
}