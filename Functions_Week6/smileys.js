/*
Create a program that has the following functionality: */

//1. Ask the user for a string//
process.stdout.write("\n Please, enter a string: ");

//and store it in a variable.
process.stdin.on("data",function(inputFromUser){
  //сохраняем инпут в строке и убираем пробелы
  let userInput = inputFromUser.toString().trim();

  //вводим функцию для замены
  let newString  = replaceSmileys(userInput);
process.stdout.write("\n Replaced text: " + newString + "\n")

// новая строчка и новая функция
newString = replaceSmileysWithReplacer(userInput, "*");
process.stdout.write("\n Replaced text (*): " + newString + "\n\n\n");
//закрываем процесс
process.exit();

})

//ф-ция замена
function replaceSmileys(text) {
  let newString = text.replace(":)","*smiling*");
  newString = newString.replace(":(", "*sad*");
  newString = newString.replace(";)", "*winkwink*");
  newString = newString.replace("<3", "*love*");
  return newString;
}
function replaceSmileysWithReplacer (text, replacer) {
  let regexp = /([:|;]+[)|(])|<3/g
  return  text.replace(regexp, replacer);
}








