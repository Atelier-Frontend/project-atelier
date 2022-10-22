import React from "react";
import { useState, useEffect } from "react";

export default function MoreReviews(props) {

  function reviewsClickHandler() {
    props.moreReviewsClickHandler()
  }

  return(<>
    {(props.moreclicked === false)
      ? <button onClick={reviewsClickHandler} >MORE REVIEWS</button>
      : <button onClick={reviewsClickHandler} >COLLAPSE REVIEWS</button>
    }
  </>)
}