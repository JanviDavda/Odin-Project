function nTwice(str, n){
  if(n==0){
    return ""
  }
  return str.slice(0,n)+str.slice(-n)
}