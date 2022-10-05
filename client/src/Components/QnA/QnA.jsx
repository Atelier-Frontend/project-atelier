import React from 'react';
import axios from 'axios';
import AnswersSearch from './AnswersSearch.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';

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
      <AnswersSearch />
      <MoreQuestions />
      <AddQuestion />
    </div>)
  }
};

export default QnA;