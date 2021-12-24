function wordsFront(words, n){
  return words.slice(0,n);
}
//Recurssion Solution
/*function wordsFront(words, n){
  if(n==0){
    return [];
  }
  return [words[0]].concat(wordsFront(words.slice(1), n-1));
}*/