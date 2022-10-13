import React from "react";
import axios from "axios";

class IndividualAnswer extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      AVoted: []
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
          this.props.getAnswersList(this.props.question_id);
        })
        .catch((err) => {
          console.log('failed')
        })
    }
  }

  render() {
    let answers = this.props.answers;
    return(<span>
      {answers.slice(0, this.props.a).map((answer) => (
        <span key={answer.answer_id}>
          <p className="answerBody">{answer.body}</p>
          <span className="container2">
            <p className="Auser">{`by ${answer.answerer_name}`}</p>
            {(answer.answerer_name==='Seller') ?
              <p className="Aseller">{'- Seller,'}</p> : <p>,</p>}
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
            <p className="report"> Report </p>
          </span>
        </span>
      ))}
    </span>)
  }
}

export default IndividualAnswer;