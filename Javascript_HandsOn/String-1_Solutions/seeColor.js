function seeColor(str){
  if(str.slice(0,3)=="red"){
    return "red";
  }
  else if(str.slice(0,4)=="blue"){
    return "blue";
  }
  else{
    return "";
  }
}