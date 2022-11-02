import React from "react";

export default function ReviewBody(props) {

  function textHighlight(value, keyWord) {
    if (value.indexOf(keyWord) !== -1 && keyWord !== '') {
      return value.replace(keyWord, `<font color="aero">${keyWord}</font>`)
    }
      return value;
  }

  return(<>
    <div className="review-body">
      <p dangerouslySetInnerHTML={{__html: textHighlight(props.body, props.term)}} />
    </div>
  </>)
}