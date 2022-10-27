import React from "react";

export default function Recommend(props) {

  return(<>
    <p className="recommended-percentage">
      {`${props.recommended}% of reviews recommend this product`}
    </p>
  </>)
}