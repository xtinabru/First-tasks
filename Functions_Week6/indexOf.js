//Write function getImportantInformation() that takes a string, finds word **IMPORTANT in it, takes the substring starting with **IMPORTANT till it reaches **.
function getImportantInformation(str) {
  let key = "IMPORTANT"
  let start = str.indexOf(key);
  let end = str.indexOf("*", start + 1);
  return str.slice(start + key.length, end).trim();
}

console.log(getImportantInformation("Lorem ipsum **IMPORTANT This is the important message* dolor sit amet")); 
console.log(getImportantInformation("Lorem ipsum **IMPORTANT Mind the gap* dolor sit amet"));


