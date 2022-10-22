import React from "react";
import { useState, useEffect } from "react";

export default function Date(props) {

  // const [readableDate, setReadableDate] = useState('')

  // useEffect((props) => {
  //   let d = timeFormatting(props.date);
  //   setReadableDate(d)
  // }, props)

  function timeFormatting(date) {
    return (new Date(date).toDateString().slice(4,10) +
    ", " + new Date(date).toDateString().slice(11))
  }

return(<>
<div>
  <p>{props.date.slice(0, 10)}</p>
</div>
</>)
}