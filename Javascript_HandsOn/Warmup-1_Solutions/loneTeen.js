function loneTeen(a, b){
  let op_a= 0
  let op_b = 0
  if(a<=19 && a>=13){
    op_a = 1;
  }
  if(b<=19 && b>=13){
    op_b = 1;
  }
  return (op_a ^ op_b)?true:false;
  /*if(op_a ^ op_b){
    return true;
  }else{
    return false
  }*/
}