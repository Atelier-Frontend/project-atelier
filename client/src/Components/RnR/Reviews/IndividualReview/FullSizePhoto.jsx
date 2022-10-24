import React from "react";

export default function FullSizePhoto(props) {

  return(<div className="full-size-image-container">
    <img className="full-size-image"
         src={props.imageURL}
         onClick={props.zoomOutImage}
    />
  </div>)
}