function alarmClock(day, vacation){
  let late = "10:00";
  let early = "7:00";
  if(vacation){
    late = "off";
    early = "10:00";
  }
  if(day==0 || day==6){
    return late;
  }else{
    return early;
  }
}