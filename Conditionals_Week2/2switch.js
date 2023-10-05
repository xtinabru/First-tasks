// ask the user to input a number
process.stdout.write("Enter a number:")
//create an event listener for user input
process.stdin.on("data", function( inputFromUser) {
  // read the user input into a variable
  let number = inputFromUser;
  //print out your number
  console.log("You entered: " + number);
 // check if number is 0
 if (number == 0) {
  //print out "you entered zero"
  process.stdout.write("You entered zero");
 } else {
  //if it is not 0
//print out " you entered something else"
process.stdout.write("You enetered something else")
 }
 //Exit the program
 process.exit();

})
