import React from "react";
import { useState, useEffect } from "react";

export default function Dropdown(props) {

  const [display,setDisplay] = useState('relevance')

  useEffect(() => {
    setDisplay('relevance')
  }, [props.product_id])

  function handleClick(e) {
    props.dropdownHandler(e.target.value)
    setDisplay(e.target.value)
  }

  let options = ["relevance", "helpfulness", "date"]
  return (<>
    <select onChange={handleClick}>
      {options.map((n) => {
        return (<option value={n} selected={n===display} key={n}>{n}</option>);
      })}
    </select>
  </>
  )
}