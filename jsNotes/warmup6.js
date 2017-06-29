function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  let length = arr.length;
  
  for(var i=0; i<length; i++) {
      if(!arr[i].includes(elem)) {
        newArr.push(arr[i]);
  	   }
  // change code above this line
  return newArr;
  }
 }

// change code here to test different cases:
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

function difference(arr1, arr2) {
  var temp = [];
  for (const elem of arr1) {
    if (arr2.indexOf(elem) === -1 ) {
    	temp.push(elem);
    	console.log("appended");
    }
    console.log("elem at difference is " + elem);
    console.log("new array at difference is " + temp);
  }
  return temp;
}

function diffArray(arr1, arr2) {
  return difference(arr1,arr2).concat(difference(arr2,arr1));
  // Same, same; but different.

}
console.log("diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])");
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));