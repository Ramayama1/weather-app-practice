import React from "react";

function FormattedDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  let newDate = new Date(props.date * 1000);
  let day = days[newDate.getDay()];
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let amPm = "AM";

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours > 12) {
    hours = hours - 12;
    amPm = "PM";
  } else if (hours === 12) {
    amPm = "PM";
  } else {
    amPm = "AM";
  }

  return (
    <span className="FormattedDate">
      {day} {hours}:{minutes} {amPm}
    </span>
  );
}

export default FormattedDate;
