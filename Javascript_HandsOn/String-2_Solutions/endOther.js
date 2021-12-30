function endOther(a, b){
  a = a.toLowerCase();
  b = b.toLowerCase();
  return (b==a.slice(-b.length) || a==b.slice(-a.length));
}