import React from "react";
import { useState, useEffect } from "react";

export default function RatingsChart(props) {
  let total =  props.chart.reduce((a, b) => Number(a) + Number(b), 0)
  return(<>
    {
      props.chart.map((rating) => {
        return(
          <div className="rating-bar" key={Math.random() + rating}>
            <p>{`${5 - props.chart.indexOf(rating)} stars: `}</p>
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