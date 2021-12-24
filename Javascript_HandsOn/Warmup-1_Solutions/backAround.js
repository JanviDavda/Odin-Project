function backAround(str){
  let res = "";
  res = str.slice(-1)+str+str.slice(-1)
  return res
}