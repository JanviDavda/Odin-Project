function wordsCount(words, len){
  if(words.length == 0){
    return 0;
  }
  if(words[0].length == len){
    return 1 + wordsCount(words.slice(1), len);
  }
  return wordsCount(words.slice(1), len);
}