function lessBy10(a, b, c){
  mi = Math.min(a,b,c);
  mx = Math.max(a,b,c);
  if(mx-mi >=10){
    return true;
  }
  return false;
}