import React from "react";
import { useState, useEffect } from "react";

export default function Dropdown(props) {

  const [display,setDisplay] = useState('relevance')

  function handleClick() {

  }

  return (
    <div>
      <p>{display}</p>
    </div>
  )
}