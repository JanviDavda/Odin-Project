function xyzThere(str){
  if(str.length < 3){
    return false;
  }
  if((str[0] != "." && str.slice(1,4)=="xyz")||(str.slice(0,3)=="xyz")){
    return true;
  }else{
    if(str[0]=="."){
      return xyzThere(str.slice(2));
    }else{
      return xyzThere(str.slice(1));
    }
}