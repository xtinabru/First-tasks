process.stdout.write("Enter a number:\n");

let secretNumber;

process.stdin.on("data", function(inputFromUser) {
  inputFromUser = parseInt(inputFromUser.toString().trim());

  secretNumber = inputFromUser + 1;

  if (inputFromUser === secretNumber + 1) {
    process.stdout.write("Congratulations! Secret number is " + secretNumber);
  } else {
    process.stdout.write("Unfortunately, you lose. Secret number is " + secretNumber);
  }

  process.exit();
});