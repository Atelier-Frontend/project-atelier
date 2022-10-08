import React from 'react';
import StarRating from './StarRating.jsx';
import Price from './Price.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div>
      <StarRating />
      <h4>Product Category</h4>
      <h4>Product Title</h4>
      <Price />
      <h4>Product Overview Text</h4>
    </div>)
  }
};

export default ProductInfo;