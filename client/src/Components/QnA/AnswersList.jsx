import React from 'react';
import axios from 'axios';
import IndividualAnswer from './IndividualAnswer.jsx';

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 2
    }
  }

  componentDidMount(props) {
    this.moreQuestionsState(this.props.question)
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

  moreQuestionsState(questionObj) {
    this.setState({
      [questionObj.question_id]: false
    })
  }

  sortAnswers(a, b) {
   return ( a.helpfulness < b.helpfulness ) ? 1 : -1;
  }

  sortSeller(arr) {
    let arr1 = [];
    let arr2 = [];
    arr.map((e) => {
      (e.answerer_name==='Seller') ? arr1.push(e) : arr2.push(e)
    })
    return arr1.concat(arr2)
   }

  render() {
    let answers = Object.values(this.props.question.answers);
    answers = this.sortSeller(answers.sort(this.sortAnswers))
    return(<div>
      <div className="answer">
        <p className="letterA">{'A: '}</p>
        <IndividualAnswer answers={answers} a={this.state.a}/>
      </div>
      {(answers.length > 2) ? (
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
            </span>
      ) : ''}
    </div>)
  }
};

export default AnswersList;