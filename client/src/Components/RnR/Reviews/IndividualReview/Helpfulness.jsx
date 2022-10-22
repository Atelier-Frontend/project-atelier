import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Helpfulness(props) {

  const [voted, setVoted] = useState(false)

  function voteReview(e) {
    if (voted === true) {
      (alert("You have voted this review."))
    } else {
      setVoted(true);
      console.log(props)
      axios.put('/reviews/:review_id/helpful', {review_id: e.target.id})
      .then(() => {
        console.log('Review voted')
      })
      .catch((err) => {
        console.log('failed')
      })
    }
  }

  return(<>
    <div>
      <button onClick={voteReview}>{`Helpful? Yes(${props.vote}) |`}</button>
    </div>
  </>)
}