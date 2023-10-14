//Write function getLongerString(string1, string2) that takes two strings as input parameters and return the longer one. If they are equally long, return the first one.

function getLongerString(string1, string2){

  let length1 = string1.length;
  let length2 = string2.length;

  if (length1 >= length2) {
    return string1; 
} else {
  return string2;
}
}

console.log(getLongerString("Foo", "Foobar"));
console.log(getLongerString("Hello", ""));
console.log(getLongerString("Hello", "James"));