//ask to enter a number//
process.stdout.write("Enter a number:\n");

//create an event listener for user input//
process.stdin.on("data", function(inputFromUser) {
  //read the user input
 let number  = inputFromUser.toString().trim();

 //print out the number
 console.log("You entered " + number);

//check if number is 0
 switch (number) {
  case "0":
  process.stdout.write("You entered zero ");
  break;

default:
  process.stdout.write("You printed something else");
}

process.exit();
});