//Write function censorA() that replaces all occurrences of the letter a with an asterisk and then returns the censored string.

function censorA(inputString){
  let letterToFind = "a";
  let replacement = "*";
// тут важно то что gi - игнорирование регистра
  if (inputString.includes(letterToFind, 'gi')){

    // обязательно учитывать синтаксис .replace
    let modifiedString = inputString.replace( new RegExp(letterToFind,'gi'),replacement);
    return modifiedString; 
  } else {
    return inputString
  }
}


console.log(censorA("Meija"));
console.log(censorA("AaAaAa"));
console.log(censorA("JavaScript is fun"));