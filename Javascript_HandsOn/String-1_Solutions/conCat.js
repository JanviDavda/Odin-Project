function conCat(a, b){
  if(a[a.length-1]==b[0]){
    return a+b.slice(1);
  }
  return a+b;
}