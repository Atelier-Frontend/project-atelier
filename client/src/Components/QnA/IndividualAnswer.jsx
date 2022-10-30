import React from 'react';
import axios from "axios";
import AnswerPhotos from "./AnswerPhotos.jsx";

class IndividualAnswer extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      AVoted: [],
      reported: []
    }
  }

  timeFormatting(date) {
    return (new Date(date).toDateString().slice(4,10) +
    ", " + new Date(date).toDateString().slice(11))
  }

  answerHelpfulness(e) {
    if (this.state.AVoted.includes(e.target.id)) {
      (alert("You have voted for this answer!"))
    } else {
      this.setState({AVoted: [...this.state.AVoted, e.target.id]});
      axios.put('/qa/answers/:answer_id/helpful', {answer_id: e.target.id})
        .then(() => {
          this.props.getAnswersList(this.props.question_id)
        })
        .catch((err) => {
          console.log('failed')
        })
    }
  }

  reportAnswer(e) {
    if (this.state.reported.includes(e.target.id)) {
      (alert("You have reported this answer."))
    } else {
      this.setState({reported: [...this.state.reported, e.target.id]});
      axios.put('/qa/answers/:answer_id/report', {answer_id: e.target.id})
      .then(() => {
        console.log('Answer reported')
      })
      .catch((err) => {
        console.log('failed')
      })
    }
  }

  render() {
    let answers = this.props.answers;
    console.log(answers)
    return(<span className="individual-answer">
      {answers.slice(0, this.props.a).map((answer) => (
        <span key={answer.answer_id}>
          <p className="answerBody">{answer.body}</p>
          <div>
          {(answer.photos.length === 0) ? null :
           <AnswerPhotos photos={answer.photos} />}
          </div>
          <span className="container2">
            <p className="Auser">{`by ${answer.answerer_name}`}</p>
            {(answer.answerer_name==='Seller') ?
              <p className="Aseller">{'- Seller'}</p> : null}
            <p>,</p>
            <p className="Adate">
              {`${this.timeFormatting(answer.date)}`}
            </p>
            <p className="Adivider"> | </p>
            <p className="Ahelpful"> Helpful? </p>
            <p className="AYes"
               id={answer.answer_id}
               onClick={this.answerHelpfulness.bind(this)}>
              Yes
            </p>
            <p className="Ahelpfulness">
              {`(${answer.helpfulness})`}
            </p>
            <p className="Adivider"> | </p>
            {(this.state.reported.includes(JSON.stringify(answer.answer_id))) ?
            <p className="reported"> Reported </p>
            : <p className="report"
               id={answer.answer_id}
               onClick={this.reportAnswer.bind(this)}>
                Report
              </p>}
          </span>
        </span>
      ))}
    </span>)
  }
}

export default IndividualAnswer;