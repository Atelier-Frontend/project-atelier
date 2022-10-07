import React from 'react';
import axios from 'axios';
import AnswersSearch from './AnswersSearch.jsx';
import QuestionsList from './QuestionsList.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: [],
      moreQuestionsClicked: false
    }
  }

  componentDidMount(props) {
    this.getQuestionsList(props)
    this.getAnswersList(642681)
  }

  getQuestionsList(props) {
    axios.get('/qa/questions', {params: {product_id: this.props.products.id}})
      .then((response) => {
        this.setState({
          questions: response.data.results
        })
      })
      .catch((err) => {
        console.log('failed to get questions list')
      })
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

  questionClickHandler() {
    (this.state.moreQuestionsClicked === false) ? this.setState({
      moreQuestionsClicked: true
    }) : this.setState({
      moreQuestionsClicked: false
    })
  }

  render() {
    console.log(this.state)
    return (<div>
      <h4>Questions {'&'} Answers</h4>
      <AnswersSearch />
      <QuestionsList questions={this.state.questions}
        moreQuestionsClicked={this.state.moreQuestionsClicked} />
      {(this.state.questions.length > 2) &&
      <MoreQuestions  moreQuestionsClicked={this.state.moreQuestionsClicked}
        questionClickHandler={this.questionClickHandler.bind(this)}/>}
      <AddQuestion />
    </div>)
  }
};

export default QnA;