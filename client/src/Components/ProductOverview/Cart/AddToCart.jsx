import React from 'react';
import axios from 'axios';
import QuantitySelector from './QuantitySelector.jsx';
import SizeSelector from './SizeSelector.jsx';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: []
    }
  }

  render() {
    return (<div>
      <SizeSelector styles={this.props.styles} />
      {/* <QuantitySelector /> */}
      <button>Add to Cart</button>
    </div>)
  }
};

export default Cart;