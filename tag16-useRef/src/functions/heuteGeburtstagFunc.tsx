export default function checkBirthdayBoolean(dateString: string): boolean {
  const dateToday = new Date();
  const inputDate = new Date(dateString);
  return (
    dateToday.getDate() === inputDate.getDate() &&
    dateToday.getMonth() === inputDate.getMonth()
  ); /* { return true
  } else {
    return false} */
}
