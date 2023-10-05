//ask to enter their names
process.stdout.write("Enter your name: ");

//read user input
process.stdin.on("data", function (inputFromUser) {
  //convert user input from buffer to string
  let name = inputFromUser.toString().trim();

//repeat 5 times
//create iterator variable
let i = 0
while (i < 8) {

//print given names
process.stdout.write ("\n" + name);
//increment iterator variable

i++;

}

//end
process.exit();
})

