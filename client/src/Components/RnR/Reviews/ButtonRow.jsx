import React from "react";
import { useState, useEffect } from "react";
import MoreReviews from "./MoreReviews.jsx";
import AddReview from "./AddReview.jsx";

export default function Sorting() {

return(<>
<div className="Review-Button-Row">
  <MoreReviews />
  <AddReview />
</div>
</>)
}