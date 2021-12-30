function loneSum(a, b, c){
  let sum = 0;
  if(a==b && b==c) return 0;
  if(a==b) return c;
  if(a==c) return b;
  if(b==c) return a;
  if(!(a==b || b==c || a==c)) return a+b+c;
}