function in1To10(n, outsideMode){
  if(n>=1 && n<=10){
    if(outsideMode){
      return (n==1 || n==10)?true:false;
    }else{
      return true;
    }
  }
  if(outsideMode){
      return (n<=1 || n>=10)?true:false;
  }
  return false;
}