function matchUp(a, b){
  if(a.length==0){
    return 0;
  }
  if(a[0]-b[0]<=2 && a[0]!=b[0] && a[0]%2==0 && b[0]%2==0){
    return 1 + matchUp(a.slice(1), b.slice(1));
  }
  return matchUp(a.slice(1), b.slice(1));
}