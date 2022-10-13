import React from 'react';
import axios from 'axios';
import IndividualAnswer from './IndividualAnswer.jsx';

class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 2,
      answers: [],
      question_id: this.props.question.question_id
    }
  }

  componentDidMount(props) {
    this.moreQuestionsState(this.props.question)
    this.getAnswersList(this.props.question.question_id)
  }

  getAnswersList(question_id) {
    axios.get(`/qa/questions/:question_id/answers`, {params: {question_id}})
      .then((response) => {
        this.setState({
          answers: response.data.results
        })
      })
      .catch((err) => {
        console.log('failed to get answers list')
      })
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
        a: this.state.answers.length
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
    let answers = this.state.answers;
    answers = this.sortSeller(answers.sort(this.sortAnswers))
    return(<div>
      <div className="answer">
        <p className="letterA">{'A: '}</p>
        <IndividualAnswer answers={answers} a={this.state.a}
                          question_id={this.state.question_id}
                          getAnswersList={this.getAnswersList.bind(this)}/>
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