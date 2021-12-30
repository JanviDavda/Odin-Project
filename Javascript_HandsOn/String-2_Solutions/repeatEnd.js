function repeatEnd(str, n){
  res = str.slice(-n);
  op = "";
  for(let i=0; i<n; i++){
    op += res;
  }
  return op;
}