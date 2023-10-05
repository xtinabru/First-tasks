//Write code for a function that gets the highest and lowest of item values in a given array and prints them out.

//"[highest] is highest and [lowest] is lowest."


function highestAndLowest(array) {
  let highest = -Infinity;
  let lowest = Infinity;

  //start loop
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > highest){
      highest = numbers [i];// the highest
    }
    if (numbers[i] < lowest) {
      lowest = numbers [i] // the lowest
    }
  }
  //print
  console.log(highest + " is highest and " + lowest + " is lowest");
}
let numbers = [109,445,15,5,1456,142,4774];
highestAndLowest(numbers);