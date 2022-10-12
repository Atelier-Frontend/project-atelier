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
    return (<div className="foldQuestions">
      {(this.props.moreQuestionsClicked === false) ?
        (<button className="foldQuestionsBT" onClick={this.moreQuestions.bind(this)}>
          {'MORE ANSWERED QUESTIONS'}
        </button>) : (<button className="foldQuestionsBT" onClick={this.moreQuestions.bind(this)}>
          {'LESS ANSWERED QUESTIONS'}
        </button>)
      }
    </div>)
  }
};

export default MoreQuestions;