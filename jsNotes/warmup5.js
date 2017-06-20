//Write a function that will return the unaltered version of the second oldest stark
//return should be { name: 'Kit Harington', birthday: '12/26/1986' }
//To handle the dates why not checkout something like Date.parse, it's really great and might be a little quicker than split.  
//Date.parse will give you a long number for the date which represents the number of milliseconds since January 1, 1970, 00:00:00 UTC.  
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
//example....Date.parse('06/12/2017') will return 1497250800000 as a number.

var starks = [
  {name: "Kit Harington", birthday: "12/26/1986" },
  {name: "Art Parkinson", birthday: "10/19/2001"},
  {name: "Richard Madden", birthday: "06/18/1986"},
  {name: "Sophie Turner", birthday: "02/21/1996"},
  {name: "Maisie Williams", birthday: "04/15/1997"},
  {name: "Isaac Hempstead-Wright", birthday: "04/09/1999"}
  ]

function findSecondOldest(house){
  var sortedStarks = starks.sort(function(a,b) {
    return Date.parse(a.birthday) > Date.parse(b.birthday);
  });
  
  var sortedStarks2 = starks.sort(function(a,b) {
    return a.birthday.split("/")[2] > b.birthday.split("/")[2];
  });
  
  
  
  console.log(sortedStarks2);
  
}

findSecondOldest(starks)