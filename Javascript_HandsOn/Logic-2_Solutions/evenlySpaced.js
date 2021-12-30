function evenlySpaced(a, b, c){
  small = Math.min(a,b,c);
  large = Math.max(a,b,c);
  medium = a+b+c-small-large;
  if(large-medium == medium-small) return true;
  return false;
}