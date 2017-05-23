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
  var max = -999999;
  for (var i=0; i<arr.length; i++) {
    max = 0;
    for (var x=0; x< arr[i].length; x++) {
      if(arr[i][x] > max) max = arr[i][x];
      if (x == arr[i].length-1)  {
        maxArray.push(max);
        console.log(max);
      }
    }
  }
  return maxArray;
}

var x = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

console.log(x);
