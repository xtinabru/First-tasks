/* Create a simple program with the following functionality */

const { exit } = require("process");

//1. Ask for user to input a number
process.stdout.write("Enter a number:\n");

//read user input and save it into variable
process.stdin.on("data", function(inputFromUser){
  let givenInput = Number(inputFromUser.toString().trim());
  
  //2. Define a secret number
  let secretNumber  = 5;
  
  //3. Perform and print out basic calculations for that number with  the secret  number
  let sum = secretNumber + Number(givenInput)//calculate Sum
   //print out Sum
   process.stdout.write(secretNumber + " + " + givenInput + " = " + sum +".\n");

  //calculate difference
  let difference = secretNumber - Number(givenInput)
 // print out difference
 process.stdout.write(secretNumber + " - " + givenInput + " = " + difference + "\n")
   
 //calculate product
 let product = secretNumber * Number(givenInput)
 //print out product
 process.stdout.write(secretNumber + " * " + givenInput + " = " + product + "\n")

  // calculate quotient
  let quotient = secretNumber / Number(givenInput)
 //print out quotient
 process.stdout.write(secretNumber + " / " + givenInput + " = " + quotient +"\n")

 // calculate remainder
 let remainder = secretNumber % Number(givenInput)
  //print out remainder
  process.stdout.write(secretNumber + " % " + givenInput + " = " + remainder + "\n")

   // calculate increment
   
  //print out increment

   //calculate decrement
  //print out decrement

 //end programm //
})





 
 