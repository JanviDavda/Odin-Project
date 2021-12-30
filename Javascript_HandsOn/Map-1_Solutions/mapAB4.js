function mapAB4(someMap){
  if(someMap.has("a") && someMap.has("b")){
    len_1 = someMap.get("a").length;
    len_2 = someMap.get("b").length;
    if(len_1 == len_2){
      someMap.set("a","");
      someMap.set("b","");
    }
    else{
      if(len_1 > len_2){
        someMap.set("c",someMap.get("a"));
      }else{
        someMap.set("c",someMap.get("b"));
      }
    }
  }
  return someMap;
}