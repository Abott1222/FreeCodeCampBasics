function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  let length = arr.length;
  
  for(var i=0; i<length; i++) {
    for(var y=0; y<arr[i].length; y++) {
      if(!arr[i].includes(elem)) {
        newArr.push(arr);
      }
    }
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
