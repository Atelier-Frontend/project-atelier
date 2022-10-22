import React from "react";
import { useState, useEffect } from "react";

export default function RatingsBreakdown(props) {

return(<>
{props.characteristics && Object.keys(props.characteristics).map((c) => {
  return (
    <div>
      <p>{`${c}`}</p>
      <p>{`====${props.characteristics[c].value}====`}</p>
    </div>
  )
})}
</>)
}