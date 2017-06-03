function getIndexToIns(arr, num) {
  // note sort by default is only alphabetical. 
  // need to tell the sort function whether the a>b(+ number) a=b(0) or a<b(negative number). the sign is the only import part of return val
  arr.sort( (a,b) => {return a-b;});
  var i = 0;
  if (arr.length > 0) {
  while(i < arr.length) {
    if(arr[i] >= num) {
      return i;
    } 
    i += 1;
  }
    /* we got here if num is larger than all numbers in array */
  } else return 0;
  
  return arr.length;
}

getIndexToIns([40, 60], 50);


function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  //Problem is to check if firstWords contains ALL letters of secondWord
  //so we will delete letters of secondWord as we check them
  var countOfSecondWord = 0;
  while(secondWord.length > 0) {
    console.log("Second word is " + secondWord);
    console.log("First word is " + firstWord);
    console.log("letter being examined is " + secondWord[0]);
    console.log("attempting to find index of letter" + secondWord.indexOf(secondWord[0]));
    if(firstWord.indexOf(secondWord[0]) > -1) {
       console.log("(inside1)Second word is " + secondWord);

       /* 
       no easy way that I can find to splice string(only slice which would be messy)
       secondWord = secondWord.splice(secondWord.indexOf(firstWord), 1);
       */
       var secondWordArray = [...secondWord];
       secondWordArray.splice(0, 1);
       /*
       NOTE: toString only pretty prints array, it does not cast itself into a string
       secondWord = secondWordArray.toString();
       */
       secondWord = secondWordArray.join("");
       console.log("(inside2)Second word is " + secondWord);
     } else return false;
    countOfSecondWord += 1;
  }
  
  return true;
}

var a = mutation(["Alien", "line"]);
console.log(a);
