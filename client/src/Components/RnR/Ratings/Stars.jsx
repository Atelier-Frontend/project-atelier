import React from "react";
<<<<<<< HEAD
import { useState, useEffect } from "react";
var stars = "../pic/five-stars2.png";
=======
import star from "../pic/perfect_star.png";
import star_dark from "../pic/perfect_star_dark.png";
>>>>>>> ea9223c158625cc662d2fb56a1d2608294fce491

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