import React from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  render() {
    let questions = this.props.questions;
    let q = (this.props.moreQuestionsClicked === false) ? 2 : this.props.questions.length;
    {
      if (questions.length === 0) {
        return ''
      } else {
        return (questions.slice(0, q).map((question)=>{
          return(<div key={question.question_id}>
            <span>
              <h3>{`Q: ${question.question_body}`}</h3>
              <AnswersList question={question}/>
            </span>
          </div>)
        }))
      }
    }
  }
};

export default QuestionsList;