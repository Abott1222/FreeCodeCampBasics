
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
  for(var i=0; i<contacts.length; i++) {
    if(contacts[i].firstName === name) {
      if(contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      }
      else  {
        return "No such property";
      }
    } else  {
      if(i>contacts.length-2)
      return "No such contact";
      console.log(i + " " + contacts.length);
    }
  }
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Kristian", "lastName"));

