import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Helpfulness(props) {

  const [voted, setVoted] = useState(false)

  function voteReview(e) {
    if (voted === true) {
      (alert("You have voted this review."))
    } else {
      setVoted(true);
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
    <div className="Review-Helpful">
      <p style={{marginRight:"3px"}}>Helpful?</p>
      <p onClick={voteReview}
         className="Review-Helpful-Vote"
         style={{textDecorationLine: 'underline'}}
         id={props.review.review_id}>Yes</p>
      <p>{`(${props.vote})`}</p>
      <p style={{marginLeft:"5px", marginRight:"0px"}}> | </p>
    </div>
  </>)
}