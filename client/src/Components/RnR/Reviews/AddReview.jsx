import React from "react";
import { useState, useEffect } from "react";
import ReviewModal from "./ReviewModal.jsx";

export default function AddReview(props) {

  const [showReviewModal, setShowReviewModal] = useState(false);

  useEffect((props) => {
    setShowReviewModal(!true)
  }, [props])

  function addReview(e) {
    setShowReviewModal(true)
  }

  return(<>
    <button onClick={addReview} >ADD A REVIEW +</button>
    {showReviewModal === true
     ? <ReviewModal product_id={props.product_id} /> : null}
  </>)
}