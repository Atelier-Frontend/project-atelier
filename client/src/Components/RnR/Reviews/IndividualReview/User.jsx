import React from "react";

export default function User(props) {

return(<>
    <div>
      <p style={{marginRight:"3px"}}>{`by ${props.user}  | `}</p>
    </div>
  </>)
}