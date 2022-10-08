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


  render() {
    let answers = this.props.question.answers;
    console.log('>>>', answers)
    return(<div>
      <div className="answer">
        <p className="letterA">{'A: '}</p>
        {Object.keys(answers).length <= 2 ? (
          <span>
            {Object.values(answers).map((answer) => (
              <span key={answer.id}>
                <p className="answerBody">{answer.body}</p>
                <span className="container2">
                  <p className="Auser">{`by ${answer.answerer_name}`}</p>
                  {(answer.answerer_name==='Seller') ?
                    <p className="Aseller">{'- Seller,'}</p> : <p>,</p>}
                  <p className="Adate">
                    {`${new Date(answer.date).toDateString().slice(4).replace(' 2022', ', 2022')}`}
                  </p>
                  <p className="Adivider"> | </p>
                  <p className="Ahelpful"> Helpful? </p>
                  <p className="AYes"> Yes </p>
                  <p className="Ahelpfulness">
                    {`(${answer.helpfulness})`}
                  </p>
                  <p className="Adivider"> | </p>
                  <p className="report"> Report </p>
                </span>
              </span>
            ))}
          </span>
        ) : (
          <div>
            {Object.values(answers).slice(0,this.state.a).map((answer) => (
              <span key={answer.id}>
                <p className="answerBody">{answer.body}</p>
                <span className="container2">
                  <p className="Auser">{`by ${answer.answerer_name}`}</p>
                  {(answer.answerer_name==='Seller') ?
                    <p className="Aseller">{'- Seller,'}</p> : <p>,</p>}
                   <p className="Adate">
                    {`${new Date(answer.date).toDateString().slice(4).replace(' 2022', ', 2022')}`}
                  </p>
                  <p className="Adivider"> | </p>
                  <p className="Ahelpful"> Helpful? </p>
                  <p className="AYes"> Yes </p>
                  <p className="Ahelpfulness">
                    {`(${answer.helpfulness})`}
                  </p>
                  <p className="Adivider"> | </p>
                  <p className="report"> Report </p>
                </span>
              </span>
            ))}
          </div>
        )}
      </div>
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
            </span>
      ) : ''}
    </div>)
  }
};

export default AnswersList;