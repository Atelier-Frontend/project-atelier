import React from 'react';
import axios from 'axios';
import icon from "./Pics/magnifying-glass.png";

class AnswersSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (<div className="answer-search-field">
      <input placeholder={"Have a question? Search for answers…"}
             style={{width: "50vw", height: "3vh"}}/>
      <button className="search-button">
        <img src={icon}></img>
      </button>
    </div>)
  }
};

export default AnswersSearch;