import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Ratings from "./Ratings/Ratings.jsx";
import Reviews from "./Reviews/Reviews.jsx";

export default function RnR() {

return(<>
<h4>Ratings & Reviews</h4>
<div className="Ratings-Reviews">
  <Ratings />
  <Reviews />
</div>
</>)
}