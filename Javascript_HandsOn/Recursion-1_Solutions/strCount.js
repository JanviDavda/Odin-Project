function strCount(str, sub){
  let n = sub.length;
  if(str.length<n){
    return 0;
  }
  if(str.slice(0,n)==sub){
    return 1+strCount(str.slice(n), sub);
  }
  return strCount(str.slice(1), sub);
}