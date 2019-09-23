//value is not stored in a variable
var firstFriend = prompt("Enter the name of your first of three friends.");
//decapitalized prompt, added variable
var secondFriend = prompt("Enter the name of your second of three friends.");
//added variable
var thirdFriend = prompt("Enter the name of your third of three friends.");
//must be a number prompt, needs to be stored in variable
var best = Number(prompt("Enter a 1 if your first person was your best friend, a 2 for the second, and a 3 for the third"))
//Needs brackets, as it's array
var friendNames = [];
//variables not defined, so I defined them and stored the values in them. Positions are wrong, need to start at 0
friendNames[0] = firstFriend
friendNames[1] = secondFriend
friendNames[2] = thirdFriend
//var "best" not defined
let bestFriend = friendNames[best - 1]

//need squiggly brackets, changed from .firstChar() to .charAt(0)
if (bestFriend.charAt(0) == "A") {
   alert("Your best friends' name starts with A.")
   //need squiggly brackets, changed from .firstChar() to .charAt(0), need 2 equal signs before "B"
} else if (bestFriend.charAt(0) == "B") {
   alert("Your best friends' name starts with B.")
   //more squigglies
} else {
   alert("Your name starts with something other than A or B.")
   //closing squiggly
  }
  


