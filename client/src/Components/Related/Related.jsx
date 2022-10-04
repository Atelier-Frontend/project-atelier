import React from 'react';
import Cards from './Cards.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},

    }
  }

  render() {
    return (<div>
      <h4>Related</h4>
      <Cards />
    </div>)
  }
};

export default Related;