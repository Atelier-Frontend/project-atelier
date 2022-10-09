import React from 'react';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    console.log('star', this.props)
  }

  render() {
    return (<div>
      <h4>Star Rating</h4>
    </div>)
  }
};

export default StarRating;