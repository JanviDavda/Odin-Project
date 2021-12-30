function countHi(str){
  if(str.length <=1) return 0;
  if(str[0]=="h" && str[1]=="i"){
    return 1+countHi(str.slice(2))
  }
  return 0+countHi(str.slice(1))
}