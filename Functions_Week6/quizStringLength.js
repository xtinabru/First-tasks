//Write a function getStringLength() that takes a string as an input parameter and returns the length of given string.

function getStringLength(inputString){
  // параметр функции собс-но строка
  //затем нужно использовать метод .length к этому параметру для того, чтобы получить данные о длине, и вводим переменную 
  let length = inputString.length;
  //затем возвращаем эту длин
  return length;
}

let length1 = getStringLength("Пример строки 1246");
console.log("Длина строки 1: " + length1);
