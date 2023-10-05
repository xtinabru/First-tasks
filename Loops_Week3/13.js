function calendar(firstWeekDay, month, numberOfDays) {
 
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  if (firstWeekDay < 1 || firstWeekDay > 7) {
    firstWeekDay = 1; 
  }

  let daysInCurrentWeek = 0;

  for (let day = 1; day <= numberOfDays; day++) {
    if (daysInCurrentWeek === 7) {
      console.log();
      daysInCurrentWeek = 0;
    }

    const dayOfWeek = daysOfWeek[(firstWeekDay - 1) % 7];

    process.stdout.write(dayOfWeek + " " + day + "." + month + ". ");

    daysInCurrentWeek++;

    firstWeekDay++;

    if (firstWeekDay > 7) {
      firstWeekDay = 1;
    }
  }
  console.log(); 
}