// Write code for a function that gets an average of item values in a given array and prints it out.

function average(array) {
// cначала нам нужно посчитать сумму с помощью .reduce (ВАЖНО! у каждого метода есть АРГУМЕНТЫ см.в док.)
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// ищем среднее значение
const average = sum / array.length;

// выводим среднее в консоль
console.log(average);
}

const numbers = [1, 2, 3, 4, 5];
average(numbers);