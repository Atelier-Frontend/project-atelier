import React from "react";
import { useState, useEffect } from "react";

export default function Dropdown(props) {

  const [display,setDisplay] = useState('relevant')

  useEffect(() => {
    setDisplay('relevant')
  }, [props.product_id])

  function handleClick(e) {
    setDisplay(e.target.value);
    props.dropdownHandler(e.target.value)
  }

  let options = ["relevant", "helpful", "newest"]
  return (<div>
    <select onChange={handleClick}
            className="review-dropdown-menu" >
      {options.map((n) => {
        return (<option value={n}
                        selected={n===display}
                        key={n}>{n}
                </option>);
      })}
    </select>
  </div>
  )
}