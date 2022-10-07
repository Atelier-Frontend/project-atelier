import React from 'react';
import axios from 'axios';

class MoreQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  moreQuestions() {
    this.props.questionClickHandler()
  }


  render() {
    return (<div>
      {(this.props.moreQuestionsClicked === false) ?
        (<button onClick={this.moreQuestions.bind(this)}>
          {'MORE ANSWERED QUESTIONS'}
        </button>) : (<button onClick={this.moreQuestions.bind(this)}>
          {'LESS ANSWERED QUESTIONS'}
        </button>)
      }
    </div>)
  }
};

export default MoreQuestions;