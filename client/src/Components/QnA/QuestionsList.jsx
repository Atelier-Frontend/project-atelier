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

  sortQuestions(a, b) {
    return ( a.question_helpfulness < b.question_helpfulness ) ? 1 : -1;
  }

  render() {
    let questions = this.props.questions;
    questions.sort(this.sortQuestions);
    let q = (this.props.moreQuestionsClicked === false) ? 2 : this.props.questions.length;
    console.log(questions)
    {
      if (questions.length === 0) {
        return ''
      } else {
        return (questions.slice(0, q).map((question)=>{
          return(<div key={question.question_id}>
            <span className="question">
              <p className="questionBody">{`Q: ${question.question_body}`}</p>
              <span className="container1">
                <p className="helpful"> Helpful? </p>
                <p className="Yes"> Yes </p>
                <p className="helpfulness"
                    >
                    {`(${question.question_helpfulness})`}
                </p>
                <p className="divider"> | </p>
                <p className="addAnswer"> Add Answer </p>
              </span>
            </span>
            <AnswersList question={question}/>
          </div>)
        }))
      }
    }
  }
};

export default QuestionsList;