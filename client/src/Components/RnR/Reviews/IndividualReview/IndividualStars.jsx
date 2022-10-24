import React from "react";
import { useState, useEffect } from "react";
import yellowStar from "../../pic/single-star.png"

export default function IndividualStars(props) {

  let array = [];
  for(let i = 0; i < props.star; i++) {
    array.push(0)
  }
  return(<div style={{width:"100px"}}>
  {console.log(array.length, array)}
    {array.map((element) => {
      {console.log("here!")}
      return <img src={yellowStar} style={{width:"20px", height:"20px"}}/>
    })}
  </div>)
}