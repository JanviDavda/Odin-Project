function powerN(base, n){
  if(base==0 || base==1){
    return base;
  }
  if(n==0){
    return 1;
  }
  return base * powerN(base, n-1);
}