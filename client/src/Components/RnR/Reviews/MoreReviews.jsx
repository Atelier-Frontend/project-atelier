import React from "react";

export default function MoreReviews(props) {

  function reviewsClickHandler() {
    props.moreReviewsClickHandler()
  }

  return(<>
    {(props.moreclicked === false)
      ? <button onClick={reviewsClickHandler} className="more-reviews-btn">MORE REVIEWS</button>
      : <button onClick={reviewsClickHandler} className="more-reviews-btn">COLLAPSE REVIEWS</button>
    }
  </>)
}