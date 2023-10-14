//Write function getLastFiveLetters() that takes one input parameter and returns last five letters of that string.
//
function getLastFiveLetters(inputString){
 if (inputString.length >= 5) {
  return inputString.slice (-5)
 } else {
  return inputString
 }
}




console.log(getLastFiveLetters("Foobar"));
console.log(getLastFiveLetters("This is my life"));
console.log(getLastFiveLetters("JavaScript is so much fun"));