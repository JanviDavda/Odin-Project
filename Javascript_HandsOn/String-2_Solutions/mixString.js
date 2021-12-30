function mixString(a, b){
  len = Math.min(a.length, b.length);
  res = "";
  for(let i=0; i<len; i++){
    res += a[i]+b[i];
  }
  res += a.slice(i);
  res += b.slice(i);
  return res;
}