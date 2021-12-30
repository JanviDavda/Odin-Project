function doubleX(str){
  n = str.length;
  for (let i = 0; i < n-1; i++) {
    if(str[i]=='x'){
      if(str[i+1]=='x'){
        return true;
      }else{
      return false
      }
    }
  }
  return false;
}