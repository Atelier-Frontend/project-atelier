import React from "react";
import { useState, useEffect } from "react";

export default function ScaleBar(props) {

  let cha = props.characteristic;
  let percentage = props.characteristic[1].value/5;
  if(cha[0] === "Size") {
    return (<div className="scaleBar">
      <div className="barBkg"/>
      <div className="barDescription">
        <p>Too small</p>
        <p>Perfect</p>
        <p>Too large</p>
      </div>
      <p className="score-pointer" style={{ '--percent': percentage}}>▲</p>
    </div>
    )
  } else  if(cha[0] === "Fit") {
    return (<div>
      <div className="barBkg" />
      <div className="barDescription">
        <p>Too small</p>
        <p>Perfect</p>
        <p>Too large</p>
      </div>
      <p className="score-pointer" style={{ '--percent': percentage}}>▲</p>
    </div>
    )
  } else if(cha[0] === "Quality") {
    return (<div>
      <div className="barBkg" />
      <div className="barDescription">
        <p>Poor</p>
        <p>Great</p>
      </div>
      <p className="score-pointer" style={{ '--percent': percentage}}>▲</p>
    </div>
    )
  } else if(cha[0] === "Comfort") {
    return (<div>
      <div className="barBkg" />
      <div className="barDescription">
        <p>Poor</p>
        <p>Great</p>
      </div>
      <p className="score-pointer" style={{ '--percent': percentage}}>▲</p>
    </div>
    )
  } else if(cha[0] === "Length") {
    return (<div>
      <div className="barBkg"/>
      <div className="barDescription">
        <p>Too small</p>
        <p>Perfect</p>
        <p>Too large</p>
      </div>
      <p className="score-pointer" style={{ '--percent': percentage}}>▲</p>
    </div>
    )
  } else if(cha[0] === "Width") {
    return (<div>
      <div className="barBkg" />
      <div className="barDescription">
        <p>Too narrow</p>
        <p>Perfect</p>
        <p>Too wide</p>
      </div>
      <p className="score-pointer" style={{ '--percent': percentage}}>▲</p>
    </div>
    )
  } else {
    return null
  }

}
