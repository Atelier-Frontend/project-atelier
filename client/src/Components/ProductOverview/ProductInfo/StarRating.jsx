import React from 'react';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (<div className='star-rating'>
      <div className='stars'>Star Rating: FILL IN</div>
      <div className='stars'>Read all reviews</div>
    </div>)
  }
};

export default StarRating;