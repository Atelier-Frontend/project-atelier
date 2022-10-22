import React from "react";
import { useState, useEffect } from "react";

export default function Helpfulness(props) {

return(<>
<div>
  <p>{`Helpful? Yes(${props.vote}) |`}</p>
</div>
</>)
}