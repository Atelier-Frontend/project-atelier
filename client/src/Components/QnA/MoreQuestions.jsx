import React from 'react';
import axios from 'axios';

class MoreQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (<div>
      <button>{'MORE ANSWERED QUESTIONS'}</button>
    </div>)
  }
};

export default MoreQuestions;