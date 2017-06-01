var array = [5,6,7];

array.push(8,9);
/* now 5,6,7,8,9 */

array.unshift(1,2,3,4);


/* now [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] */
console.log(array);


var x = array.reduce( (current, next) => {
	/* rolling sum, incremenents current by next until next is empty */
	return current+next;
});

var y = array.filter( (val) => {
	return val > 5;
});

console.log(x);
console.log(y);

/* starting at index 0, delete 1 item and replace it with 100 */
array.splice(0,1, 100);
/* [ 100, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */
console.log(array);



array.splice(array.length-4,2);
console.log(array);
/* so will delete 1 and then replace it with last param, then will delete again but not replace it because it has no more params
console.log(array); */	


function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));


function quickCheck(arr, elem) {
  // change code below this line
  if (arr.indexOf(element) >-1) return true;
  else return false;
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
