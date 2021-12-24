function lastTwo(str){
  n =str.length
  if(n<2){
    return str;
  }
  return str.slice(0,n-2)+str[n-1]+str[n-2];
}