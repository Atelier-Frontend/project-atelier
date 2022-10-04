import React from 'react';
import axios from 'axios';

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: []
    }
  }

  render() {
    return (<div>
      <h4>Questions {'&'} Answers</h4>
    </div>)
  }
};

export default QnA;