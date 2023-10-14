//You have an array with the following items: 'apple', 'orange', 'banana', 'kiwi'.

//Write code for a function that prints out the element from the array from the given index.

/*
let array = ['apple', 'orange', 'banana', 'kiwi'];
function getItem(index){
  // firstly, let's check that index is withing the range of the array
  if (index >= 0 && index < array.length) {
    return array[index];
  } else {
    return null// if index is out rage 
  }
    
}
console.log(getItem(3));
!!!!!!НА СЛУЧАЙ ЕСЛИ НАДО ЕЩЕ УСЛОВИЕ ЧТО ВВЕЛИ ХЕРНЮ */

let array = ['apple', 'orange', 'banana', 'kiwi'];
function getItem(index){
  //задаем условия! что если
  if (index >= 0 && index < array.length)
  {
    console.log(array[index]); /// чо так можно было???
  }

}

getItem(3);


