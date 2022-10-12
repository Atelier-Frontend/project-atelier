import React from 'react';
import axios from 'axios';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (<div className="addQuestion">
      <button className="addQuestionBT">{'ADD A QUESTION +'}</button>
    </div>)
  }
};

export default AddQuestion;