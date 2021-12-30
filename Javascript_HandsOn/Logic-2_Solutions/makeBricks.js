function makeBricks(small, big, goal){
  if((small+big*5)<goal){
    return false;
  }
  for(let i=0; i<=big; i++){
      if(goal-i*5 <= small && goal-i*5 >= 0){
        return true;
      }
  }
  return false;
}