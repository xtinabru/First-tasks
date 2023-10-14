/*
Create a program that has a method sum(firstNumber,
secondNumber) that returns the sum of the numbers passed to
the method as input parameters. Call this method, save the return value in a variable and print it out. Do
this three times with different variable values. 

*/

//функцию
function sumOfNumbers(firstNumber, secondNumber){
  //возвращаем сумму числе как инпут параметры
  return firstNumber + secondNumber;
}

// return сохраняем в переменной resul
let result =  sumOfNumbers(1, 1);
process.stdout.write("\nFirst sum is: " + result);

result = sumOfNumbers(10, 13);
process.stdout.write("\nSecond sum is: " + result);

result = sumOfNumbers(0.789, -11);
process.stdout.write("\n Third sum is: " + result);








