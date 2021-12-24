function withoutX(str){
  if(str[0]=='x' && str[str.length-1]=='x'){
    return str.slice(1,str.length-1);
  }
  else if(str[0]=='x'){
    return str.slice(1);
  }
  else if(str[str.length-1]=='x'){
    return str.slice(0,str.length-1);
  }
  else{
    return str;
  }
}