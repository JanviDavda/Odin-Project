function roundSum(a, b, c){
  a = round10(a);
  b = round10(b);
  c = round10(c);
  return a+b+c;
}

function round10(n){
  return Math.round(n / 10) * 10;
}