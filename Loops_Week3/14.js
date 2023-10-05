function calendar(firstWeekDay, month, numberOfDays) {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let day = 1;

  for (let weekDay = firstWeekDay - 1; day <= numberOfDays; weekDay = (weekDay + 1) % 7) {
    const dayOfWeek = daysOfWeek[weekDay];
    process.stdout.write(dayOfWeek + " " + day + "." + month + ". ");

      if (weekDay === 6) {
        ; // 
      }

    day++;
  }
}


printCalendar(2, 9, 30);