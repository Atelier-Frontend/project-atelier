import React from 'react';
import ProductInfo from './productInfo/ProductInfo.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},

    }
  }

  componentDidMount() {
    var currentProduct = this.props.products[0];
    this.setState({ product: currentProduct });
  }

  render() {
    return (<div>
      <ProductInfo />
    </div>)
  }
};

export default ProductOverview;