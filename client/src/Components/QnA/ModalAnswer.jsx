import React from 'react';
import axios from 'axios';
import ImageHandler from "./ImageHandler.jsx";

class ModalAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidInput: true,
      isValidEmail: true,
      YourAnswer: '',
      name: '',
      email: '',
      photos: []
    }
  }

  addImageUrl(photoURL) {
    this.setState({photos: [...this.state.photos, photoURL]});
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValidInput() {
    if (this.state.YourAnswer.length > 0 &&
        this.state.name.length > 0 &&
        this.state.email.length > 0) {
      return true;
    }
    return false;
  };

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  submitForm() {
    if(!this.isValidInput()) {
      this.setState({
        isValidInput: false
      })
    } else if (!this.isValidEmail(this.state.email)) {
      this.setState({
        isValidEmail: false,
        isValidInput: true
      });
    } else {
      this.setState({
        isValidEmail: true,
        isValidInput: true
      });
      axios.post('/qa/questions/:question_id/answers',
      {question_id: this.props.currentQ.split('@@@$$$@@@')[0],
        body: {body: this.state.YourAnswer,
              name: this.state.name,
              email: this.state.email,
              photos: this.state.photos}})
        .then(() => {
          this.props.closeModal();
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
          <ImageHandler addImageUrl={this.addImageUrl.bind(this)}
                        len={this.state.photos.length}/>
          <label>What is your nickname?</label>
          <input type={"text"} placeholder="Example: jack543!" name={"name"}
                 maxLength={"60"} style={{ marginBottom: '1rem' }}
                 onChange={this.onChange.bind(this)} required />
          <label>Your email</label>
          <input type={"text"} placeholder="Example: jack@email.com" name={"email"}
                 maxLength={"60"}
                 onChange={this.onChange.bind(this)} required />
          {(!this.state.isValidInput)?
            <p className="inputValidation">Please fill in all of the fields</p> : ""
          }
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