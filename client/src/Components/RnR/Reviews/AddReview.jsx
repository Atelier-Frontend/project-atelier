import React from "react";
import { useState, useEffect } from "react";
import ReviewModal from "./ReviewModal.jsx";

export default function AddReview(props) {

  const [showReviewModal, setShowReviewModal] = useState(false);

  useEffect((props) => {
    setShowReviewModal(!true)
  }, [props])

  function addReview() {
    setShowReviewModal(true)
  }

  function closeModal() {
    setShowReviewModal(false)
  }

  return(<>
    <button onClick={addReview} className="add-review-btn">ADD A REVIEW +</button>
    {showReviewModal === true
     ? <ReviewModal product={props.product}
                    closeModal={closeModal} />
     : null}
  </>)
}