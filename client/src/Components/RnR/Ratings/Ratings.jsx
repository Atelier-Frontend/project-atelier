import React from "react";
import { useState, useEffect } from "react";
import Score from "./Score.jsx";
import Stars from "./Stars.jsx";
import Recommend from "./Recommend.jsx";
import RatingsChart from "./RatingsChart.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";

export default function Ratings(props) {

  // let [score, setScore] = useState(0);

  // useEffect(() => {
  //   getAverage(props.ratings.ratings)
  // }, [props])

  // function getAverage(ratings) {
  //   var avgRating = props.getAverage(ratings);
  //   setScore = (avgRating)
  // }

return(<>
<div className="Ratings-Sider">
  <div className="Score-Star">
    <Score score={props.score}/>
    <Stars />
  </div>
  <Recommend recommended={props.recommended} />
  <RatingsChart chart={props.chart} />
  <RatingsBreakdown characteristics={props.ratings.characteristics} />
</div>
</>)
}