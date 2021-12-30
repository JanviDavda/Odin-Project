function noTeenSum(a, b, c){
  a = fixTeen(a);
  b = fixTeen(b);
  c = fixTeen(c)
  return a+b+c;
}
function fixTeen(n){
  if(n>=13 && n<=19) {
    if(n==15 || n==16){
      return n;
    }
    return 0;
  }
  else{
    return n;
  }
}