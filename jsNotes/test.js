function reverseString(str) {
  var newStr = "";
  
  for(var i=str.length-1; i>=0; i--) {
    newStr += str[i];
  }
  
  return newStr;
}

console.log(reverseString("hello"));

function largestOfFour(arr) {
  var maxArray = [];
  var max = 0;
  for (var i=0; i<arr.length; i++) {
    for (var x=0; x< arr[i].length; x++) {
      max = 0;
      if(arr[i][x] > max) max = arr[i][x];
      if (i == arr[i].length-1) maxArray.push(max);
    }
  }
  return maxArray;
}

var x = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(x);
