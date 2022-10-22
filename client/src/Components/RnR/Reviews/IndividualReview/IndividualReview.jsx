import React from "react";
import { useState, useEffect } from "react";
import IndividualStars from "./IndividualStars.jsx";
import User from "./User.jsx";
import Date from "./Date.jsx";
import ReviewBody from "./ReviewBody.jsx";
import IndividualRecommend from "./IndividualRecommend.jsx";
import SellerResponse from "./SellerResponse.jsx";
import Helpfulness from "./Helpfulness.jsx";
import Report from "./Report.jsx";
import ReviewSummary from "./ReviewSummary.jsx";

export default function IndividualReview(props) {

  return(<>
    <div className="Individul-Review-Header">
      <IndividualStars star={props.review.rating}/>
      <div className="User-Date">
        <User user={props.review.reviewer_name} />
        <Date date={props.review.date} />
      </div>
    </div>
    <ReviewSummary summary={props.review.summary} />
    <ReviewBody body={props.review.body} />
    {props.review.recommend && <IndividualRecommend />}
    {props.review.response && <SellerResponse />}
    <div className="Helpfulness-Report">
      <Helpfulness vote={props.review.helpfulness}
                   review={props.review} />
      <Report review={props.review} />
    </div>
    <p>---------------------------------------------------------------------------</p>
  </>)
}