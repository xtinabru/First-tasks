//Create a program that asks the user for a string and then
//prints it out so that all odd characters are in uppercase
//and all even characters are in lower case. Use a for loop.

// Prompt user to give the size
process.stdout.write("Please enter a string: ");
// Read in input
process.stdin.on("data", function(inputFromUser){
    let enteredString = inputFromUser.toString().trim();
    //print mixed

    process.stdout.write(" The word in mixed case is: ")

    for(let i = 0; i <enteredString.length; i++) {
      if (i % 2) {
        //even
        process.stdout.write(enteredString.charAt(i).toLowerCase());
      } else {
        //odd
        process.stdout.write(enteredString.charAt(i).toUpperCase());
      }
    }
    process.stdout.write("\n");
    process.exit();
      
    })

   
   
  
