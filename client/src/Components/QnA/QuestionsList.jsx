import React from 'react';
import axios from 'axios';
import AnswersList from './AnswersList.jsx';
import ModalAnswer from './ModalAnswer.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentQ: '',
      QVoted: []
    }
  }

  sortQuestions(a, b) {
    return ( a.question_helpfulness < b.question_helpfulness ) ? 1 : -1;
  }

  sortQuestions2(a, b) {
    return ( a.question_id < b.question_id) ? 1 : -1;
  }

  questionHelpfulness(e) {
    if (this.state.QVoted.includes(e.target.id)) {
      (alert("You have voted for this question!"))
    } else {
      this.setState({QVoted: [...this.state.QVoted, e.target.id]});
      axios.put('/qa/questions/:question_id/helpful', {question_id: e.target.id})
        .then(() => {
          this.props.getQList(this.props.product.id)
        })
        .catch((err) => {
          console.log('failed')
        })
    }
  }

  showModal(e) {
    this.setState({
      showModal: true,
      currentQ: e.target.id
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    });
    this.props.getQList(this.props.product.id)
  }

  textHighlight(value, keyWord) {
    if (value.indexOf(keyWord) !== -1 && keyWord !== '') {
      return value.replace(keyWord, `<font color="aero">${keyWord}</font>`)
    }
      return value;
  }

  render() {
    let questions = this.props.questions;
    questions?.sort(this.sortQuestions2);
    questions?.sort(this.sortQuestions);
    let q = (this.props.moreQuestionsClicked === false) ? 2 : this.props.questions.length;
    {
      if (questions?.length === 0) {
        return <h3> </h3>
      } else {
        return <div className="scrollableQuestionsList">
          {(questions?.slice(0, q).map((question)=>{
            return(<div key={question.question_id}>
              <span className="question">
                <p className="letterQ">Q: </p>
                <p className="questionBody" dangerouslySetInnerHTML={{__html: this.textHighlight(question.question_body, this.props.term)}} />
                <span className="container1">
                  <p className="helpful"> Helpful? </p>
                  <p className="Yes"
                    id={question.question_id}
                    onClick={this.questionHelpfulness.bind(this)}>
                      Yes
                  </p>
                  <p className="helpfulness">
                      {`(${question.question_helpfulness})`}
                  </p>
                  <p className="divider"> | </p>
                  <p className="addAnswer"
                    id={`${question.question_id}@@@$$$@@@${question.question_body}`}
                    onClick={this.showModal.bind(this)}>
                      Add Answer
                  </p>
                  {(this.state.showModal) ?
                  <ModalAnswer product={this.props.product}
                          currentQ={this.state.currentQ}
                          closeModal={this.closeModal.bind(this)}
                  /> : null}
                </span>
              </span>
              <AnswersList question={question}/>
            </div>)
          }))}
        </div>
      }
    }
  }
};

export default QuestionsList;