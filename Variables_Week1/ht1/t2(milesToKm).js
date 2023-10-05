// ask for distance in miles
process.stdout.write("Enter a distance in miles:\n");

//read user input
process.stdin.on("data",function(inputFromUser){

 //save given input in a variable
 let givenInput = Number(inputFromUser.toString().trim());

 //convert the distance to km
 let distanceInKm = (givenInput * 1609).toFixed(3);
 // print out the distance in miles (user input)
 process.stdout.write("\n\n" + givenInput  + " miles is: \n");
 // print out the distance in km
 process.stdout.write("\n" + distanceInKm  + " km \n");
 //end programm
 process.exit();});