function changeXY(str){
  if(str==""){
    return "";
  }
  if(str[0]=='x'){
    return "y"+ changeXY(str.slice(1));
  }
  return str[0] + changeXY(str.slice(1));
}