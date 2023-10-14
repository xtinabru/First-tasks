//Create a simple program in which the user is asked to give two numbers and then your program prints out which one of them is largest.//

//ask to enter numbers
process.stdout.write("Please enter two numbers separated by spaces: ");

// Read user input 
process.stdin.on("data", function(inputFromUser) {
    //create a variable to store user input
    let userInput = inputFromUser.toString().trim();
    // split user's input into 2 numbers
    let numbers = userInput.split(" ");
    //check which one is largest
    if ( numbers[0] > numbers[1] ) {
      //print out the largest number
      process.stdout.write(" The largest number is " + numbers[0] + "\n");
    } else {
      //print out the largest number
      process.stdout.write(" The largest number is " + numbers[1] + "\n");
    }
    //end programm
    process.exit();
  });
