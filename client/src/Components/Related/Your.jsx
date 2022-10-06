import React from 'react';
import Cards from './Cards.jsx';

class Your extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},

    }
  }

  render() {
    return (<div>
      <h4>Your</h4><section>
        <ul class='test'>
      <Cards class='your'/>
      </ul>
      </section>
    </div>)
  }
};

export default Your;