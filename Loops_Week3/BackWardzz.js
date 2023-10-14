// Create a program that asks the user for a string and then
//prints it out from the last letter to the first. Use a for loop.

// Prompt user to give the size
process.stdout.write("Please enter a stringe: ");
// Read in input
process.stdin.on("data", function(inputFromUser){
    let string = inputFromUser.toString().trim();
    //print backwards

    process.stdout.write(" The word backwards is: ")

    
    for(let i = inputFromUser.length; i >= 0; i--) {
      //print out current string
      process.stdout.write(string.charAt(i));
    }
    process.stdout.write("\n");
    process.exit();
   
    })
        


  