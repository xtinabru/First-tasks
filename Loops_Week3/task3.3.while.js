//enter a string
process.stdout.write("Enter your string: ");
//read or listen input
process.stdin.on("data", function (inputFromUser) {

  //save input in a variable
  let givenString = inputFromUser.toString().trim();

//loop throug string

let i = 0;
do {
// print out current character
process.stdout.write(i + 1 +" .character is " + givenString.charAt(i) +"\n");
i++
} while (i < givenString.length)

process.exit ();

});