function frontBack(str){
  if(str.length<2){
    return str
  }
  return str.slice(-1)+str.slice(1,str.length-1)+str[0]
}