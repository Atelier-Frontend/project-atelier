import React from "react";
import { useState, useEffect } from "react";
import Score from "./Score.jsx";
import Stars from "./Stars.jsx";
import Recommend from "./Recommend.jsx";
import RatingsChart from "./RatingsChart.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";

export default function Ratings() {

return(<>
<div className="Ratings-Sider">
  <div className="Score-Star">
    <Score />
    <Stars />
  </div>
  <Recommend />
  <RatingsChart />
  <RatingsBreakdown />
</div>
</>)
}