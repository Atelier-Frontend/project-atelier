import React from "react";
import star from "../pic/perfect_star.png";

export default function Stars(props) {

  return(<div className="overall-rating-stars-container">
    <div className="overall-rating-stars-image" >
        <img src={starrr} className='stars-image' />
        <img src={starrr} className='stars-image' />
        <img src={starrr} className='stars-image' />
        <img src={starrr} className='stars-image' />
        <img src={starrr} className='stars-image' />
    </div>
    <div className="overall-rating-stars-color" style={{ '--overall_star_percent': props.score/5}}/>
  </div>)
}