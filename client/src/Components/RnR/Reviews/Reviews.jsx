import React from "react";
import { useState, useEffect } from "react";
import Sorting from "./Sorting.jsx";
import ReviewsList from "./ReviewsList.jsx";
import ButtonRow from "./ButtonRow.jsx";

export default function Reviews(props) {

return(<>
<div>
  <Sorting result={props.result}/>
  <ReviewsList result={props.result} />
  <ButtonRow />
</div>
</>)
}