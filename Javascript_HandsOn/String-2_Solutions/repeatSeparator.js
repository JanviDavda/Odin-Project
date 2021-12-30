function repeatSeparator(word, sep, count){
  res ="";
  let i=0;
  for(i=0; i<count-1; i++){
    res += word + sep;
  }
  if(i==count-1){
    res += word;
  }
  return res;
}