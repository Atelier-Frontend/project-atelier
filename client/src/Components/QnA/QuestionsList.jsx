import React from 'react';
import axios from 'axios';
import '../../../dist/styles.css';
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
            <span className="question">
              <p className="questionBody">{`Q: ${question.question_body}`}</p>
              <p className="helpful"> Helpful? </p>
              <p className="Yes"> Yes </p>
              <p className="helpfulness"
                  >
                  {`(${question.question_helpfulness})`}
              </p>
              <p className="divider"> | </p>
              <p className="addAnswer"> Add Answer </p>
            </span>
            <AnswersList question={question}/>
          </div>)
        }))
      }
    }
  }
};

export default QuestionsList;