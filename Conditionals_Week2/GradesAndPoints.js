function grade(points) {
  let result;

  if (points >= 51) {
    result = "5";
  } else if (points >= 41 && points <= 50) {
    result = "4";
  } else if (points >= 31 && points <= 40) {
    result = "3";
  } else if (points >= 21 && points <= 30) {
    result = "2";
  } else if (points >= 11 && points <= 20) {
    result = "1";
  } else if (points >= 0 && points <= 10) {
    result = "Fail";
  } else {
    result = "Invalid Input";
  }

  console.log(result);
  return result;
}











var points = 45; 
var grade = grade(points);
console.log("Points: " + points + ", Grade: " + grade);