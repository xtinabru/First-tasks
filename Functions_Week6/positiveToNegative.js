//Write a function positiveToNegative(number) that takes a number as an input parameter and if it is positive, converts it to a negative and returns the value.
function positiveToNegative(number){
  if (number > 0){
    return number * -1;
  } else if (number === 0){
    return -0;
  }
  return number;
}

console.log(positiveToNegative(4));
//-4
console.log(positiveToNegative(4456));
//-4456
console.log(positiveToNegative(-4));

console.log(positiveToNegative(-0));