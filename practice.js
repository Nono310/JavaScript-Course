let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
     count--;
     break;
  }
    if (count > 0) {
        console.log(`${count} Bet`)
      return count + " Bet"
    } else {
        console.log(`${count} Hold`)
      return count + " Hold"
    }
  // Only change code above this line
}

cc(9); cc(10); cc('Q'); cc('K'); cc('A');
