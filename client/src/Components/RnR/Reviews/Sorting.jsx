import React from "react";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown.jsx";

export default function Sorting(props) {

  return(<>
    <div className="Sorting-Bar">
      <p>{`${props.result.length} reviews, sorted by  ▾`}</p>
      <Dropdown />
    </div>
  </>)
}