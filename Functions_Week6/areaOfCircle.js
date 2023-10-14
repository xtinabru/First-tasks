// Write function areaOfACircle(radius) that takes the radius of a circle and calculates the circle area and returns it with two decimals. If input is invalid, return "Invalid input".
//

function areaOfACircle (radius){
  if (typeof radius !== "number" || radius <= 0){
    return "Invalid input"
  }
  const pi = Math.PI;
  let areaOfSquare = pi * Math.pow(radius,2);
  return areaOfSquare.toFixed(2);
}


console.log(areaOfACircle(5));
//78.54
console.log(areaOfACircle(50));
//7853.98
console.log(areaOfACircle(12));
//452.39

console.log(areaOfACircle(-12));
//Invalid input

console.log(areaOfACircle("jkl"));
//Invalid input