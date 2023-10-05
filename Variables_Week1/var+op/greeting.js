/* Create a code to ask for user's name 
and print out a greeting.
*/
// ask user's name
process.stdout.write("What is your name?\n")
// read user input
process.stdin.on("data", function(inputFromUser){
  // save user input to a variable
  let name = inputFromUser.toString().trim();
  // print out a greeting with user's name
  process.stdout.write("Hello " + name + "!\n");
  // end programm
process.exit();
})


