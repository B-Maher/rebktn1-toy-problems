/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  let hours = time[0] + time[1];
  let minutes = time[3] + time[4];
  let sufix = time.slice(5);
  if (time.length === 4 || time.length === 6) {
    hours = time[0];
    minutes = time[2] + time[3];
    sufix = time.slice(4);
  }

  if ((sufix === "am" || !sufix) && hours !== "12") {
    return `${hours}:${minutes}`;
  } else if (sufix === "pm" && hours !== "12") {
    let newHours = parseInt(hours) + 12;
    return `${newHours}:${minutes}`;
  } else if (hours === "12" && sufix === "pm") {
    return `${hours}:${minutes}`;
  }
  return `00:${minutes}`;
}
