/*
Create a program that calculates the circumference of a circle when radius is given (circumference = 2 * π *
radius). Call this method three times with different parameters and print out the results.
*/
function circumferenceOfACircle(radius) {
  return 2 * Math.PI * radius;
}
//выводитм результат того что вернули функ.
let result = circumferenceOfACircle(5);
// ответ
process.stdout.write("\n Circumference of a circle with a radius 5 is: " + result);

result = circumferenceOfACircle(15);
process.stdout.write("\n Circumference of a circle with a radius 15 is: " + result);

result = circumferenceOfACircle(50);
process.stdout.write("\n Circumference of a circle with a radius 50 is: " + result);

