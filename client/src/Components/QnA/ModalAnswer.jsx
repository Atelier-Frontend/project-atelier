import React from 'react';
import axios from 'axios';


class ModalAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidEmail: true,
      YourAnswer: '',
      name: '',
      email: '',
      photos: []
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  submitForm() {
    if (!this.isValidEmail(this.state.email)) {
      this.setState({
        isValidEmail: false
      });
    } else {
      axios.post('/qa/questions/:question_id/answers',
      {question_id: this.props.currentQ.split('@@@$$$@@@')[0],
        body: {body: this.state.YourAnswer,
              name: this.state.name,
              email: this.state.email,
              photos: this.state.photos}})
        .then(() => {
          this.props.closeModal();
          alert('Answer added! Refresh the page to see it!')
        })
        .catch((err) => {
          console.log('failed')
        })
    }
  }

  render() {
    return (<div className="form-container">
      <form react mailto='' className="answer-form" >
        <div className="form-wrapper">
          <p className="formTitle">Submit your Answer</p>
          <p className="formSubtitle">{`${this.props.product.name}: ${this.props.currentQ.split('@@@$$$@@@')[1]}`}</p>
          <label>Your Answer</label>
          <textarea type="text" placeholder={"Type your answer here..."}
                    name={"YourAnswer"} maxLength={"1000"} rows={"7"}
                    style={{ marginBottom: '1rem' }}
                    onChange={this.onChange.bind(this)} required />
          <label>What is your nickname?</label>
          <input type={"text"} placeholder="Example: jack543!" name={"name"}
                 maxLength={"60"} style={{ marginBottom: '1rem' }}
                 onChange={this.onChange.bind(this)} required />
          <label>Your email</label>
          <input type={"text"} placeholder="Example: jack@email.com" name={"email"}
                 maxLength={"60"}
                 onChange={this.onChange.bind(this)} required />
          {(!this.state.isValidEmail)?
            <p className="emailValidation">Email is invalid!</p> : ""
          }
          <div className="formBTN-wrapper">
            <button type="button" onClick={this.submitForm.bind(this)} className={"submitAnswerBTN"}>Submit</button>
            <button onClick={this.props.closeModal.bind(this)} className={"cancelAnswerBTN"}>Close</button>
          </div>
        </div>
      </form>
    </div>
   )
  }
}

export default ModalAnswer;