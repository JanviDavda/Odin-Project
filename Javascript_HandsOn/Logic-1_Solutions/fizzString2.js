function fizzString2(n){
  if(n%3==0 && n%5==0){
    return "FizzBuzz!";
  }
  else if(n%3==0){
    return "Fizz!";
  }
  else if(n%5==0){
    return "Buzz!";
  }
  return n.toString()+"!";
}