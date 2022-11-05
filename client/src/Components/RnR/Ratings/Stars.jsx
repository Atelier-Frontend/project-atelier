import React from "react";
import star from "../pic/perfect_star.png";
import star_dark from "../pic/perfect_star_dark.png";

export default function Stars(props) {

  return(<div className="overall-rating-stars-container">
    <div className="overall-rating-stars-image" >
        <img src={props.darkTheme?star_dark:star} alt='a star' className='stars-image' draggable="false" />
        <img src={props.darkTheme?star_dark:star} alt='a star' className='stars-image' draggable="false" />
        <img src={props.darkTheme?star_dark:star} alt='a star' className='stars-image' draggable="false" />
        <img src={props.darkTheme?star_dark:star} alt='a star' className='stars-image' draggable="false" />
        <img src={props.darkTheme?star_dark:star} alt='a star' className='stars-image' draggable="false" />
    </div>
    <div className="overall-rating-stars-color" style={{ '--overall_star_percent': props.score/5}}/>
  </div>)
}
