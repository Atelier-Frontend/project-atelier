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

  componentDidMount(props) {
    this.getQuestionsList(props)
    this.getAnswersList(642681)
  }

  getQuestionsList(props) {
    axios.get('/qa/questions', {params: {product_id: this.props.products[0].id}})
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