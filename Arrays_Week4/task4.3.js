//Create a program that asks user for number and calculates the average for them. Numbers will be asked till the user enters a letter. Hint! You can check whether a value is numeric with isNaN().

//create an array to store user's input
let givenNumbers = [];
let sum = 0; //sum of all numbers
let average = 0; //average of all numbers

let numberFromKeyboard = 0; //number from keyboard


//ask to enter numbers
process.stdout.write("This program calculates the average of numbers.\n Please, start entering numbers.\n The program will stop when you enter a letter.\n\n");


//read user input
process.stdin.on("data", function(inputFromUser) {
  let numberFromKeyboard = Number(inputFromUser);

  //the push() method adds new items to the end of an array, and returns the new length.
  givenNumbers.push(numberFromKeyboard);

  //if number is not a number
  if (isNaN(numberFromKeyboard)) {
    //print out the average of all numbers
    process.stdout.write("\nAverage of all numbers: " + average + "\n");
    //end programm  
    process.exit();
  } else {
    //calculate sum of all numbers
    sum += numberFromKeyboard;
    //calculate average of all numbers
    average = sum / givenNumbers.length;
    //we are not done yet. Ask for more numbers.
    process.stdout.write(givenNumbers.length + " numbers have been entered. Enter more numbers.\n");
   
  }
});