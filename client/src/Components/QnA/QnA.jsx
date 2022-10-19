import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import QuestionsList from './QuestionsList.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      initQuestions: [],
      answers: [],
      moreQuestionsClicked: false,
      term: ""
    }
  }

  componentDidMount(props) {
    this.getQuestionsList(this.props.products.id)
  }

  componentDidUpdate(prevProps) {
    if(this.props.products.id !== prevProps.products.id)
    {
      this.getQuestionsList(this.props.products.id);
    }
  }

  getQuestionsList(product_id) {
    axios.get('/qa/questions', {params: {product_id: product_id}})
      .then((response) => {
        this.setState({
          questions: response.data.results,
          initQuestions: response.data.results,
          term: ""
        })
      })
      .catch((err) => {
        console.log('failed to get questions list')
      })
  }

  // getAnswersList(question_id) {
  //   axios.get(`/qa/questions/:question_id/answers`, {params: {question_id}})
  //     .then((response) => {
  //       this.setState({
  //         answers: response.data.results
  //       })
  //     })
  //     .catch((err) => {
  //       console.log('failed to get answers list')
  //     })
  // }

  questionClickHandler() {
    (this.state.moreQuestionsClicked === false) ? this.setState({
      moreQuestionsClicked: true
    }) : this.setState({
      moreQuestionsClicked: false
    })
  }

  filterQuestions(term) {
    let questions = this.state.initQuestions;
    let filteredQuestions = questions.filter((q) => {
      return q.question_body.includes(term)
    });
    this.setState({
      questions: filteredQuestions,
      term: term
    })
  }

  render() {
    return (<div>
      <h4>{'Questions & Answers'}</h4>
      <SearchBar filterQuestions={this.filterQuestions.bind(this)}
                 getQList={this.getQuestionsList.bind(this)}
                 product={this.props.products} />
      <QuestionsList
        questions={this.state.questions}
        product={this.props.products}
        moreQuestionsClicked={this.state.moreQuestionsClicked}
        getQList={this.getQuestionsList.bind(this)}
        term={this.state.term} />
      <div className="containerRow">
        {(this.state.questions.length > 2) &&
        <MoreQuestions  moreQuestionsClicked={this.state.moreQuestionsClicked}
          questionClickHandler={this.questionClickHandler.bind(this)}/>}
        <AddQuestion product={this.props.products}
                     getQList={this.getQuestionsList.bind(this)} />
      </div>
    </div>)
  }
};

export default QnA;