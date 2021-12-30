function blackjack(a, b){
  return 21-a>=0? (21-b>=0? (21-a>21-b?b:a) :a) : (21-b>=0?b:0);
}