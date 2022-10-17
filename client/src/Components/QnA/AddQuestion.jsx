import React from 'react';
import axios from 'axios';
import ModalQuestion from './ModalQuestion.jsx';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true,
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    })
    this.props.getQList(this.props.product.id)
  }

  render() {
    return (<div className="addQuestion">
      <button className="addQuestionBT"
              onClick={this.showModal.bind(this)}>
        {'ADD A QUESTION +'}
      </button>
      <div>
        {(this.state.showModal) ?
        <ModalQuestion product={this.props.product}
                       closeModal={this.closeModal.bind(this)}
        /> : null}
      </div>
    </div>)
  }
};

export default AddQuestion;