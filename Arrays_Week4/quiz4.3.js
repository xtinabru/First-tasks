//Write code for a function that prints out items of an array from the last to the first, each followed by a space.

function printReversedArray(array) {
 //  don't need to start from  =  array = [];
  //into string firstly!
 // только для букв .split а для чисел .map
 const reversedString = array.map(String).reverse().join(" ");
//print
console.log(reversedString);

}

const array = ['a', '1', 'c'];
printReversedArray(array);

