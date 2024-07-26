/**
 * Converts date to the format `HH:MM AM/PM`
 *
 * @param {Date} date
 * @return {string}
 */
export const formatDate = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const meridiem = hours > 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${meridiem}`;
};
