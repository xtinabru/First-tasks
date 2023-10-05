// Write code for a function that checks whether given number is odd or even and prints out "[number] is even" or "[number] is odd"

//In this task you can assume input to be of correct data type (numeric) and error handling is not necessary. //

function oddOrEven(number) {
  let result;
  if (number % 2 === 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }
 
}

  

var number = 6;
oddOrEven(number);