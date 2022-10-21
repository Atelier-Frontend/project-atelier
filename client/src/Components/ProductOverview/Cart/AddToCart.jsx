import React from 'react';
import axios from 'axios';
import QuantitySelector from './QuantitySelector.jsx';
import SizeSelector from './SizeSelector.jsx';
import { ImStarEmpty } from 'react-icons/im';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      sizes: [],
      quantity: [],
      selectedSize: 0,
      reset: false
    }

    this.getQuantity = this.getQuantity.bind(this);
    this.selectSize = this.selectSize.bind(this);
  }

  componentDidMount() {
    this.getQuantity();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle !== prevProps.selectedStyle) {
      this.getQuantity();
    };
  }

  selectSize(size) {
    this.setState({ selectedSize: size });
  }

  getQuantity() {
    var skus = this.props.styles[0].skus;
    var sizeArray = [];
    var quantityArray = [];

    for (var key in skus) {
      if (skus[key].quantity > 0) {
        sizeArray.push(skus[key].size);
        quantityArray.push(skus[key].quantity);
      }
    };

    this.setState({ 
      sizes: sizeArray, 
      quantity: quantityArray
    });
  }

  render() {
    return (<div className='product-btn-grp'>
      <div className='selectors'>
        <span className='size-selector'>
          <SizeSelector 
            sizes={this.state.sizes} 
            quantity={this.state.quantity[0]} 
            selectSize={this.selectSize} 
            styles={this.props.styles}
            reset={this.props.reset} />
          </span>
        <span className='quant-selector'>
          {this.state.quantity.length > 0 &&
            <QuantitySelector quantity={this.state.quantity} size={this.state.selectedSize}/>}
          </span>
      </div>
      <div className='buy-buttons'>
        <button className='add-cart'>Add to Bag</button>
        <button className='heart'><ImStarEmpty /></button> 
      </div>      
    </div>)
  }
};

export default Cart;