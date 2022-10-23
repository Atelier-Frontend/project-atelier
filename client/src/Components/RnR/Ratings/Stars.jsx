import React from "react";
import { useState, useEffect } from "react";
import stars from "../pic/five-stars2.png";

export default function Stars(props) {

return(<>
    {/* <div className="rating-score" style={{ '--score_percent': props.score/5}}>11</div> */}
    <img src={stars} className="rating-stars-image" />
</>)
}