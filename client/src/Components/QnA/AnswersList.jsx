import React from 'react';
import axios from 'axios';

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
    console.log(this.state)
    let answers = this.props.question.answers;
    // let a = (this.state[this.props.question.question_id] === false) ? 2 : answers.length;
    return(<div>
      <h3>{'A: '}</h3>
      {answers.length <= 2 ? (
        <div>
          {answers.map((answer) => (
            <div key={answer.id}>
              <span>{answer.body}</span>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {Object.values(answers).slice(0,this.state.a).map((answer) => (
            <div key={answer.id}>
              <span>{answer.body}</span>
            </div>
          ))}
        </div>
      )}
      {(this.state[this.props.question.question_id] === false) ? (
        <span id={this.props.question.question_id} onClick={this.moreAnswersHandler.bind(this)}>{'LOAD MORE ANSWERS'}</span>
        ) : <span id={this.props.question.question_id} onClick={this.moreAnswersHandler.bind(this)}>{'FOLD ANSWERS'}</span>}
    </div>)
  }
};

export default AnswersList;