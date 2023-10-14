//Create a program with an 100 item array that is initialized with random numbers of range 0-1000.//• To create random numbers you can use Math.random () function.

let numbers = [];
//we write that we want to have 100 random numbers
process.stdout.write("Random numbers: ");

for (let i = 0; i < 100; i++){
  let randomNumber = Math.floor(Math.random() * 1000);
numbers.push(randomNumber);
process.stdout.write(randomNumber + " ");
}


//2. Find the largest value in the array using a loop and print it out.

let largestNumber = numbers[0];
for (let i = 1; i < numbers.length; i++){
  if (numbers[i] > largestNumber){
    largestNumber = numbers[i];
  }
}
process.stdout.write("\nThe largest number is: " + largestNumber + "\n");

//3. Find the smallest value in the array using a loop and print it out. 
let smallestNumber = numbers[0];
for (let i =1; i < numbers.length; i++){
  if (numbers[i] < smallestNumber){
    smallestNumber = numbers[i];
  }
}
process.stdout.write("The smallest number is: " + smallestNumber + "\n");
process.exit();



