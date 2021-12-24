function inOrder(a, b, c, bOk){
  if(b<c){
    if(bOk || a<b){
      return true;
    }
    return false;
  }
  return false;
}