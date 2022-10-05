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
      {/* only show up when questions are over two */}
      <button>{'MORE ANSWERED QUESTIONS'}</button>
    </div>)
  }
};

export default MoreQuestions;