import React from 'react';
import axios from 'axios';
import '../../../dist/styles.css';

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 2
    }
  }

  componentDidMount(props) {
    this.hahaha(this.props.question)
  }

  moreAnswersHandler(e) {
    (this.state[e.target.id]) ? (
      this.setState({
        [e.target.id]: false,
        a: 2
      })
    ) : (
      this.setState({
        [e.target.id]: true,
        a: Object.keys(this.props.question.answers).length
      })
    )
  }

  hahaha(questionObj) {
    this.setState({
      [questionObj.question_id]: false
    })
  }


  render() {
    let answers = this.props.question.answers;
    return(<div className="answer">
      <p className="letterA">{'A: '}</p>
      {Object.keys(answers).length <= 2 ? (
        <span>
          {Object.values(answers).map((answer) => (
            <span key={answer.id}>
              <p className="answerBody">{answer.body}</p>
            </span>
          ))}
        </span>
      ) : (
        <div>
          {Object.values(answers).slice(0,this.state.a).map((answer) => (
            <span key={answer.id}>
              <p className="answerBody">{answer.body}</p>
            </span>
          ))}
        </div>
      )}
      {(Object.keys(answers).length > 2) ? (
        (this.state[this.props.question.question_id] === false) ? (
          <span id={this.props.question.question_id}
                onClick={this.moreAnswersHandler.bind(this)}
                className="foldAnswers">
            {'LOAD MORE ANSWERS'}
          </span>
        ) : <span id={this.props.question.question_id}
                  onClick={this.moreAnswersHandler.bind(this)}
                  className="foldAnswers">
                    {'FOLD ANSWERS'}
            </span>) : ''}
    </div>)
  }
};

export default AnswersList;