function squirrelPlay(temp, isSummer){
  let upper_limit = 90;
  if(isSummer){
    upper_limit = 100;
  }
  if(temp>=60 && temp<=upper_limit){
    return true;
  }
  return false;
}