import React from "react";
import { useState, useEffect } from "react";

export default function RatingsChart(props) {

  return(<>
    {
      props.chart.map((rating) => {
        return(
          <div className="rating-bar" key={Math.random() + rating}>
            <p>{`${5 - props.chart.indexOf(rating)} stars: `}</p>
            <h3>{`=====${rating}=====`}</h3>
          </div>
        )
      })
    }
  </>)
}