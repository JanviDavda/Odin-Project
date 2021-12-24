function front11(a, b){
  a_len = a.length;
  b_len = b.length;
  if(a_len==0 && b_len==0) return [];
  if(a_len==0) return [b[0]];
  if(b_len==0) return [a[0]];
  return [a[0]].concat(b[0]);
}