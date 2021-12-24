function max1020(a, b){
  if(a>9 && a<21){
    if(b>9 && b<21){
      if(a>b){
        return a;
      }else{
        return b;
      }
    }else{
      return a;
    }
  }
  else if(b>9 && b<21){
    return b;
  }
  else{
    return 0;
  }
}