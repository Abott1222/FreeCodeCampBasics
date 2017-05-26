function findLongestWord(str) {
  var space = ' ';
  str.split(space);
  var high = 2;
  for (var i= 0; i < str.length; i++) {
    if (high < str[i]) {
      high = str[i];
    }
  }
return high.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
