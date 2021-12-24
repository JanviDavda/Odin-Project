function countX(str){
  if(str==""){
    return 0;
  }
  if(str[0]=='x'){
    return 1 + countX(str.slice(1));
  }
  return countX(str.slice(1));
}