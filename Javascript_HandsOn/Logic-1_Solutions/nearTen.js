function nearTen(num){
  if(num%10<=2 || (10-num%10)<=2){
    return true;
  }
  return false;
}