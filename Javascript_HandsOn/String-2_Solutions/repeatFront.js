function repeatFront(str, n){
  res = "";
  for(let i=n; i>0; i--){
    res += str.slice(0,i);
  }
  return res;
}