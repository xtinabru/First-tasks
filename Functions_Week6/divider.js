// Write function divide(divident, divider) that takes two numbers as input parameters, the divident and divider, performs the division and returns the result with two decimals. If inputs are invalid, return text "Invalid input".

function divide(divident, divider){
  if (divider === 0){
    return "Invalid input"
  }
  let division = divident / divider;

  if (division >= 1){
    return division.toFixed(2);
  } else {
    return "Infinity";
    
  }
    
}


console.log(divide(8, 5));
///1.60
console.log(divide(4, 3));
///1.33
console.log(divide(4, 0));
///Infinity