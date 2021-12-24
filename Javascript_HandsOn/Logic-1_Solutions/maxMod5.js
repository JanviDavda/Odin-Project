function maxMod5(a, b){
  if(a==b){
    return 0;
  }
  res = Math.max(a,b)
  if(a%5==b%5){
    return a+b-res;
  }
  return res;
}