//Create a 5x5 Battleship game using a multidimensional array. Use asterisks to mark the ships. Ask the user for coordinates to shoot and give feedback to the user whether they hit a ship or not. Keep asking for as long as there are ships left. Keep count of how many shots the player needed.

/*Ship matrix

*     A B C D E 
*  1. _ _ _ _ *
*  2. _ _ _ _ *
*  3. _ _ _ _ *
*  4. _ _ _ _ *
*  5. _ _ _ _ _
*/

const BOARD_SIZE = 5;
let board = [];

for (i = 0; i < BOARD_SIZE; i++);{
for (let j = 0; j < BOARD_SIZE; j++);{
board[i] = new Array(''); // let's initialise everything empty
}
}
//let's set the ship
board[0,4] = "*";
board[1,4] = "*";
board[2,4] = "*";
board[3,4] = "*";

let numbersOfShip = 4;
let x,y //variables for coordinates
let bodyCount //variable for sunk ship

let shots = 0;

//ask user to enter coordinate
process.stdout.write("\n\nEnter x and y coordinates separated by space:")

//read input
process.stdin.on("data", function(inputFromUser){
  let userInput = inputFromUser.toString().trim().split(" ");
  let x = Number(userInput[0]);
  let y = Number(userInput[1]);

//check whether the shot is withing the range
if (x > BOARD_SIZE - 1 || y > BOARD_SIZE -1){
  process.stdout.write("Input out of range. Please enter valid coordinates");
} else {
  if (board[x,y] == "*") {
    process.stdout.write ("You hit a ship!!!\n");
    board[x,y] = " "; //hit - > let's set this empty
    bodyCount++ //let's increase the number of ship hit
  } else {
    process.stdout.write("MISS!!!\n");
  }
  shots++// let's increse the number of shots
}
if (bodyCount < numbersOfShip) { //loop for as long as there are  ships to sink
  process.stdout.write("Enter x and y  coordinates separated by space:");
} else {
  process.stdout.write("All ships sunk! You need " + shots + "shots.\n\n\n")
  process.exit;
}

})
