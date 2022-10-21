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

export default function IndividualReview() {

return(<>
<div className="Individul-Review-Header">
  <IndividualStars />
  <div className="User-Date">
    <User />
    <Date />
  </div>
</div>
<ReviewBody />
<IndividualRecommend />
<SellerResponse />
<div className="Helpfulness-Report">
  <Helpfulness />
  <Report />
</div>
</>)
}