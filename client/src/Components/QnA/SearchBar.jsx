import React from 'react';
import axios from 'axios';
// import icon from "./Pics/magnifying-glass.png";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }

  questionSearch (e) {
    this.setState({
      term: e.target.value
    })
    if(e.target.value.length >= 3) {
      this.props.filterQuestions(e.target.value)
    } else {
      this.props.getQList()
    }
  }

  render() {
    return (<div className="answer-search-field">
      <input placeholder={"Have a question? Search for answers…"}
             style={{width: "50vw", height: "3vh"}}
             onChange={this.questionSearch.bind(this)} />
      <button className="search-button">
        {/* <img src={icon}></img> */}
      </button>
    </div>)
  }
};

export default SearchBar;