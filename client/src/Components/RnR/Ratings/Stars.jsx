import React from "react";
import star from "../pic/perfect_star.png";

export default function Stars(props) {

  return(<div className="overall-rating-stars-container">
    <div className="overall-rating-stars-image" >
        <img src={star} style={{height:"20px", width:"20px"}}/>
        <img src={star} style={{height:"20px", width:"20px"}}/>
        <img src={star} style={{height:"20px", width:"20px"}}/>
        <img src={star} style={{height:"20px", width:"20px"}}/>
        <img src={star} style={{height:"20px", width:"20px"}}/>
    </div>
    <div className="overall-rating-stars-color" style={{ '--overall_star_percent': props.score/5}}/>
  </div>)
}