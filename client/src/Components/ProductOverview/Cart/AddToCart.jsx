import React from 'react';
import axios from 'axios';
import QuantitySelector from './QuantitySelector.jsx';
import SizeSelector from './SizeSelector.jsx';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      sizes: [],
      quantity: []
    }
  }

  componentDidMount() {
    var skus = this.props.styles[0].skus;
    var sizeArray = [];
    var quanittyArray = [];

    for (var key in skus) {
      if (skus[key].quantity > 0) {
        sizeArray.push(skus[key].size);
        quanittyArray.push(skus[key].quantity);
      }
    }

    this.setState({ 
      sizes: sizeArray, 
      quantity: quanittyArray
    });
  }

  render() {
    return (<div className='selectors'>
        <SizeSelector sizes={this.state.sizes} quantity={this.state.quantity[0]} />
        {this.state.quantity.length > 0 &&
          <QuantitySelector quantity={this.state.quantity[0]} />}
        <button>Add to Cart</button>
    </div>)
  }
};

export default Cart;