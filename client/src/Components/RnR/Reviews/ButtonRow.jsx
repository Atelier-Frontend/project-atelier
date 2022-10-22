import React from "react";
import { useState, useEffect } from "react";
import MoreReviews from "./MoreReviews.jsx";
import AddReview from "./AddReview.jsx";

export default function ButtonRow(props) {

return(<>
<div className="Review-Button-Row">
  {props.result.length > 2 ? <MoreReviews /> : null}
  <AddReview />
</div>
</>)
}