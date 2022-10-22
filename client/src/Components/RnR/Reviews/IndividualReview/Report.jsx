import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Report(props) {

  const [reported, setReported] = useState(false)

  function reportReview(e) {
    if (reported === true) {
      (alert("You have reported this review."))
    } else {
      setReported(true);
      console.log(props)
      axios.put('/reviews/:review_id/report', {review_id: e.target.id})
      .then(() => {
        console.log('Review reported')
      })
      .catch((err) => {
        console.log('failed')
      })
    }
  }

  return(<>
    {reported
    ? <p onClick={reportReview}>Reported</p>
    : <p onClick={reportReview}
         style={{textDecorationLine: 'underline'}}
    >Report</p>}
  </>)
}