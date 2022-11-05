import React from 'react';
import axios from 'axios';


class ModalQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidEmail: true,
      isValidInput: true,
      YourQuestion: '',
      name: '',
      email: '',
      product_id: this.props.product.id
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValidInput() {
    if (this.state.YourQuestion.length > 0 &&
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
      axios.post('/qa/questions', {
        body: this.state.YourQuestion,
        name: this.state.name,
        email: this.state.email,
        product_id: this.props.product.id
      }).then(() => {
          alert('You\'ve added a new question!')
          this.props.closeModal();
        })
        .catch((err) => {
          console.log('failed')
        })
    }
  }

  render() {
    return (<div className="form-container">
      <form react mailto='' className="question-form" >
        <div className="form-wrapper">
          <p className="formTitle">Ask Your Question</p>
          <p className="formSubtitle">{`About the ${this.props.product.name}`}</p>
          <label>Your Question</label>
          <textarea type="text" placeholder={"Type your question here..."}
                    name={"YourQuestion"} maxLength={"1000"} rows={"5"}
                    style={{ marginBottom: '2rem' }}
                    onChange={this.onChange.bind(this)} required />
          <label>What is your nickname?</label>
          <input type={"text"} placeholder="Example: jackson11!" name={"name"}
                 maxLength={"60"} style={{ marginBottom: '2rem' }}
                 onChange={this.onChange.bind(this)} required />
                 <p style={{ marginTop:'-1.5rem', fontSize: 12, fontWeight: "normal", fontStyle: "italic", marginBottom: "2rem" }}
                 >For privacy reasons, do not use your full name or email address</p>
          <label>Your email</label>
          <input type={"text"} placeholder="Example: jackson11@email.com" name={"email"}
                 maxLength={"60"}
                 onChange={this.onChange.bind(this)} required />
                 <p style={{ marginTop:'0.5rem', fontSize: 12, fontWeight: "normal", fontStyle: "italic" }}
                 >For authentication reasons, you will not be emailed</p>
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

export default ModalQuestion;