/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Mon = "monday",
  Tues = "tuesday",
  Wed = "wednesday",
  Thurs = "thursday",
  Fri = "friday",
  Sat = "saturday",
  Sun = "sunday",
}

function isWeekend(day: Day): boolean {
  if (day === Day.Sat || day === Day.Sun) {
    return true;
  }
  return false;
}
