function inOrderEqual(a, b, c, equalOk){
  if(equalOk && a<=b && b<=c){
    return true;
  }
  else if(a<b && b<c){
    return true;
  }
  return false;
}