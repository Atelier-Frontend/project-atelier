import React from "react";
import { useState, useEffect } from "react";

export default function RatingsChart(props) {
  let total =  props.chart.reduce((a, b) => Number(a) + Number(b), 0)
  return(<>
    {
      props.chart.map((rating, index) => {
        return(
          <div className="rating-bar" key={index}>
            <p style={{textDecorationLine:"underline"}}>{`${5 - index}stars `}</p>
            <div className="rating-bar-bars">
              <div className="rating-barBkg" >{rating}</div>
              <div className="rating-barBkg-green" style={{ '--rating_percent': rating/total}}/>
            </div>
          </div>
        )
      })
    }
  </>)
}