import React from "react";

class IndividualAnswer extends React.Component {
  constructor(props) {
    super(props)
  }

  timeFormatting(date) {
    return (new Date(date).toDateString().slice(4,10) +
    ", " + new Date(date).toDateString().slice(11))
  }

  render() {
    let answers = this.props.answers;
    return(<span>
      {answers.slice(0, this.props.a).map((answer) => (
        <span key={answer.id}>
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
            <p className="AYes"> Yes </p>
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