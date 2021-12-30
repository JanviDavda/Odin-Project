function prefixAgain(str, n){
  rep = str.slice(0,n);
  for(let i=n; i <=(str.length-n); i++){
    if(rep == str.slice(i,i+n)){
       return true;
    }
  }
  return false;
}