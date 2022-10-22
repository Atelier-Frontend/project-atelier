import React from "react";
import { useState, useEffect } from "react";

export default function SellerResponse(props) {

  return(<>
    <div>
      <span>{props.response}</span>
    </div>
  </>)
}