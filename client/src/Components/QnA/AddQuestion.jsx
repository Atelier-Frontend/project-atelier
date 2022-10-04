import React from 'react';
import axios from 'axios';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (<div>
      <button>{'ADD A QUESTION +'}</button>
    </div>)
  }
};

export default AddQuestion;