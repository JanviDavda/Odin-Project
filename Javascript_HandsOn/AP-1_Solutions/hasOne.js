//Looping Solution
/*function hasOne(n){
  while(n){
    if(n%10==1){
      return true;
    }
    n = Math.floor(n/10);
  }
  return false;
}*/
//Recurssion Solution
function hasOne(n){
  if(n==0){
    return false;
  }
  if(n%10==1){
    return true;
  }
  return hasOne(Math.floor(n/10));
}