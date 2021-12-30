function topping2(someMap){
  if(someMap.has("spinach")) someMap.set("spinach","nuts");
  if(someMap.has("ice cream")) someMap.set("yogurt",someMap.get("ice cream"));
  return someMap;
}