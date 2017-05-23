function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i =0; i > arr.length-1 ; i++){
    for(var j =0; j > arr.length-1 ; j++){
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code

var array = [[1],[2],[3]]
console.log(multiplyAll(array));