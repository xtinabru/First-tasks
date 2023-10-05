function calculate(number1, number2, calculation) {
  let result;

  if (calculation === '+') { 
    result = number1 + number2;
  } else if (calculation === '-') {
    result = number1 - number2;
  } else if (calculation === '*') { 
    result = number1 * number2;
  } else if (calculation === '/') {
    result = number1 / number2; 
  }
  console.log("Your results: " + result + "\n");
}

calculate(1, 1, '+');
calculate(10, 1, '-');
calculate(10, 0, '*');
calculate(10, 5, '/');

/*switch (calculation) {
  case '+':
    result = number1 + number2;
    break;
  case '-':
    result = number1 - number2;
    break;
  case '*':
    result = number1 * number2;
    break;
  case '/':
    result = number1 / number2;
    break;
  default:
    break;
} */

