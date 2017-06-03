function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var arr =arr.sort();
  var i = 0;
  while(i < arr.length) {
  	console.log("num is " + num);
  	console.log("num in array is " + arr[i]);
  	console.log("i is " + i);
    if(arr[i] >= num) {
      console.log(arr[i] >= num);
      return i;
    } 
    i += 1;
  }
}

getIndexToIns([5, 3, 20, 3], 5)


var array = [5,6,7,100, 200];
var array =array.sort( (a,b) => {
  	return a-b;
});
console.log(array);
