//Create a function findHighestGrade(grades) that takes an array as a parameter and returns the highest value in the array.

function findHighestGrade(grades){
  let highestGrade = grades[0];
  for (let i = 1; i < grades.length; i++){
    if (grades[i] > highestGrade) {
      highestGrade = grades[i];
    }
  }
  return highestGrade;
}






array = [1, 6, 2, 90, 1400];
console.log(findHighestGrade(array));
//90
array = [12, -6, -2, -90, -4];
console.log(findHighestGrade(array));
//-1
