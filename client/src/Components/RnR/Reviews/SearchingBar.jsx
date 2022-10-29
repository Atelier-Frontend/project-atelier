import React from "react";
import { useState, useEffect } from "react";
import icon from "../../QnA/Pics/magnifying-glass.png";

export default function SearchingBar(props) {

  const [term, setTerm] = useState("")

  function reviewSearch(e) {
    setTerm(e.target.value)
    if(e.target.value.length >= 3) {
      props.filterReviews(e.target.value)
    } else {
      props.filterReviews("")
    }
  }

  return (<div className="reviews-search-bar">
      <input placeholder={"Search customer reviews here…"}
             style={{ width: "50vw", height: "3vh"}}
             onChange={reviewSearch}
             className="search-input" />

        <img src={icon} alt="search"></img>

    </div>)
}