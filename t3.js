// ask for distance in meters
process.stdout.write("Enter a distance in meters:\n");

//read user input
process.stdin.on("data",function(inputFromUser){

 //save given input in a variable
 let givenInput = Number(inputFromUser.toString().trim());

 //convert the distance to km
 let distanceInKm = (givenInput /1000).toFixed(3);
 // print out the distance in metres (user input)
 process.stdout.write("\n\n" + givenInput  + " meters is: \n");
 // print out the distance in km
 process.stdout.write("\n" + distanceInKm  + " km \n");

 //convert the distance to miles
 let distanceInMiles = (givenInput /1609).toFixed(3);
  // print out the distance in miles
  process.stdout.write("\n" + distanceInMiles  + " miles \n");

  //convert the distance to yards
  let distanceInYards = (givenInput * 1.094).toFixed(3);
  // print out the distance in yards
  process.stdout.write("\n" + distanceInYards + " yards \n");

  //convert the distance to feet
  let distanceInFeet = (givenInput * 3.281).toFixed(3);
  // print out the distance in yards
  process.stdout.write("\n" + distanceInFeet + " feet\n");

  //convert the distance to inches
  let distanceInInches = (givenInput / 39.37).toFixed(3);
  // print out the distance in yards
  process.stdout.write("\n" + distanceInInches + " inches\n");

//convert the distance to light years
let distanceInLightYears = (givenInput / 9.461e+15).toFixed(3);
// print out the distance in light years
process.stdout.write("\n" + distanceInLightYears + " light years\n");

 //end programm
process.exit();});

