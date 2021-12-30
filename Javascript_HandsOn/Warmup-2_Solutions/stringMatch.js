function stringMatch(a, b){
  n = Math.min(a.length,b.length);
  let count = 0;
  for(let i=0; i<n-1; i++){
    if(a.slice(i,i+2)==b.slice(i,i+2)){
      count++;
    }
  }
  return count;
}