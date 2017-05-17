var count = 0;

function cc(card) {
  // Only change code below this line
    if(card in [2,3,4,5,6]) count+=1;
    else if (card in [7,8,9]) count+=0;
    else count-=1;
    console.log("Count is: " + count);
    console.log("Card is :" + card);	
    
    answer = "";
    if (count >0) {
      answer+= count;
      answer += " ";
      answer += "Bet";
    } else {
      answer+= count;
      answer += " ";
      answer += "Hold";
    }
  return answer;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
