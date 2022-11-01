import React from "react";
import IndividualReview from "./IndividualReview/IndividualReview.jsx"

export default function ReviewsList(props) {

  return(<>
    <div className="Reviews-List">
      {
        props.result.slice(0,props.reviewsCount).map((review) => (
          <IndividualReview key={review.review_id}
                            review={review}
                            getReviews={props.getReviews} />
        ))
      }
    </div>
  </>)
}