import React from 'react';
import axios from 'axios';

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreAnswersClicked: false,
      answers: []
    }
  }

  render() {
    console.log(Object.values(this.props.question?.answers))
    return(<div>{'ssssss'}</div>)
  }
};

export default AnswersList;