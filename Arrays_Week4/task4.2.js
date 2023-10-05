//Create a program that keeps asking the user to input numbers. These numbers are stored in an array. Keep asking till zero is entered. After that the numbers are printed out in a reverse order. Don’t use array methods for this but only simple loops.

//create an array to store user's input
let givenNumbers = [];

//ask to enter numbers  
process.stdout.write("This program reads numbers from the keyboard.\n After receiving a zero, it prints the numbers\n in reverse order. Please, start entering numbers.\n The program will stop when you enter a zero.\n\n");

process.stdout.write (givenNumbers.length + " numbers have been entered.\n");

// Read user input
process.stdin.on("data", function(inputFromUser) {
  let numberFromKeyboard = Number(inputFromUser);

  //the push() method adds new items to the end of an array, and returns the new length.
  givenNumbers.push(numberFromKeyboard);

//if number is zero 
if (numberFromKeyboard == 0) {
//print out the numbers in reverse order
process.stdout.write("\nNumbers in reverse order:\n");

//create a loop to go through the array in reverse order
for (let i = givenNumbers.length - 1; i >= 0; i--) {
  process.stdout.write(givenNumbers[i] + '\n');
}
//end programm  
process.exit();
} else {
  //we are not done yet. Ask for more numbers.
  process.stdout.write (givenNumbers.length + " numbers have been entered. Enter more numbers.\n");
}

});