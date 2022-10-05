import React from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreQuestionsClicked: false,
      moreAnswersClicked: false,
      questions: []
    }
  }

  moreAnswersHandler() {
    (this.state.moreAnswersClicked) ? (
      this.setState({
        moreAnswersClicked: false
      })
    ) : (
      this.setState({
        moreAnswersClicked: true
      })
    )
  }

  render() {
    let questions = this.props.questions;
    let q = (this.state.moreQuestionsClicked === false) ? 2 : this.props.questions.length;
    {
      if (questions.length === 0) {
        return ('')
      } else {
          for (let i = 0; i < q; i++) {
            let a = (this.state.moreAnswersClicked === false) ? 2 : questions[i].answers.length;
            return(<div key={questions[i].question_id}>
              <span>
                <h3>{`Q: ${questions[i].question_body}`}</h3>
                <h3>{'A: '}</h3>
                {questions[i].answers.length <= 2 ? (
                  <div>
                    {questions[i].answers.map((answer) => (
                      <div key={answer.answer_id}>
                        <span>{answer.body}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {Object.values(questions[i].answers).slice(0,a).map((answer) => (
                      <div key={answer.answer_id}>
                        <span>{answer.body}</span>
                      </div>
                    ))}
                  </div>
                )}
                {(this.state.moreAnswersClicked === false) ? (
                  <span onClick={this.moreAnswersHandler.bind(this)}>{'LOAD MORE ANSWERS'}</span>
                  ) : <span onClick={this.moreAnswersHandler.bind(this)}>{'FOLD ANSWERS'}</span>}
              </span>
            </div>)
          }
      }
    }
  }
};

export default QuestionsList;