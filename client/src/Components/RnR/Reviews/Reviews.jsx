import React from "react";
import { useState, useEffect } from "react";
import Sorting from "./Sorting.jsx";
import ReviewsList from "./ReviewsList.jsx";
import ButtonRow from "./ButtonRow.jsx";

export default function Reviews(props) {

return(<>
<div>
  <Sorting product_id={props.product_id}
           result={props.result}
           dropdownHandler={props.dropdownHandler}
           />
  <ReviewsList result={props.result}
               moreReviewsClickHandler={props.moreReviewsClickHandler}
               reviewsCount={props.reviewsCount}
               moreclicked={props.moreclicked} />
  <ButtonRow result={props.result}
             moreReviewsClickHandler={props.moreReviewsClickHandler}
             reviewsCount={props.reviewsCount}
             moreclicked={props.moreclicked} />
</div>
</>)
}