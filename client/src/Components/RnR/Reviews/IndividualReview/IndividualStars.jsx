import React from "react";
import { useState, useEffect } from "react";
import yellowStar from "../../pic/single-star.png"

export default function IndividualStars(props) {

  let array = [];
  for(let i = 0; i < props.star; i++) {
    array.push(0)
  }
  return(<div style={{width:"100px"}}>
    {array.map((element, index) => {
      return <img src={yellowStar} style={{width:"20px", height:"20px"}} key={index} />
    })}
  </div>)
}