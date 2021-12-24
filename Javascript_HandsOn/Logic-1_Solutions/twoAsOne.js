function twoAsOne(a, b, c){
  a = a>0?a:-a;
  b = b>0?b:-b;
  c = c>0?c:-c;
  m = Math.max(a,b,c);
  if(a+b==m || b+c==m || a+c==m){
    return true;
  }else{
    return false;
  }
}