import React from "react";

export default function Date(props) {

  function timeFormatting(date) {
    const monthNames = ["", "January", "February", "March",
    "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];
    return (monthNames[Number(date.slice(5,7))] + " " + date.slice(8, 10) +
    ", " + date.slice(0, 4))
  }

  let formattedDate = timeFormatting(props.date);


  return(<>
    <p>{formattedDate}</p>
  </>)
}