import React from "react";
import { useState, useEffect } from "react";

export default function ReviewBody(props) {

  return(<>
    <div className="review-body">
      <p>{props.body}</p>
    </div>
  </>)
}