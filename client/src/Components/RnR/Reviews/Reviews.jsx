import React from "react";
import { useState, useEffect } from "react";
import Sorting from "./Sorting.jsx";
import ReviewsList from "./ReviewsList.jsx";
import ButtonRow from "./ButtonRow.jsx";

export default function Reviews() {

return(<>
<div>
  <Sorting />
  <ReviewsList />
  <ButtonRow />
</div>
</>)
}