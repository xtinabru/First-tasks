function printCalendar(firstWeekDay, month, numberOfDays) {
  // all days of week in massiv
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // check the meaning firstWeekDay 
  if (firstWeekDay < 1 || firstWeekDay > 7) {
    firstWeekDay = 1; // first day of the week is Monday
  }

  // quntity of days in a week
  let daysInCurrentWeek = 0;

  // iterating the days od a month
  for (let day = 1; day <= numberOfDays; day++) {
    // if a new week, new line
    if (daysInCurrentWeek === 7) {
      console.log();
      daysInCurrentWeek = 0;
    }

    // count the day of the week for current date 
    const dayOfWeek = daysOfWeek[(firstWeekDay - 1) % 7];

    // print out the date and the title of the day of the week 
    process.stdout.write(dayOfWeek + " " + day + "." + month + ". ");

    // increase ??days in current week 
    daysInCurrentWeek++;

    // go to the next day of the week 
    firstWeekDay++;

    // if the 1st day of the week >7 , return t the begining of the week (monday) 
    if (firstWeekDay > 7) {
      firstWeekDay = 1;
    }
  }
  console.log(); // finish last line
}


printCalendar(1, 9, 30);