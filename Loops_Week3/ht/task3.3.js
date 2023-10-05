//Create a program with the following functionality:
//1. Ask the user to enter a string.
//2. Loop through the string and print out the string letter by letter saying “1.character is [first letter of given string.] 

//Hint! You might need the following String methods: charAt() and trim() and
//property length. Check them out in documentation.


//enter a string
process.stdout.write("Enter your string: ");
//read or listen input
process.stdin.on("data", function (inputFromUser) {

  //save input in a variable
  let givenString = inputFromUser.toString().trim();

//loop throug string
for (let i = 0; i < givenString.length; i++) {
// print out current character
process.stdout.write(i + 1 +" .character is " + givenString.charAt(i) +"\n");
}

});


