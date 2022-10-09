import React from 'react';
import ProductInfo from './productInfo/ProductInfo.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    console.log('props', this.props.products)
    var currentProduct = this.props.products;
    this.setState({product: this.props.products});
  }

  render() {
    return (<div>
      {Object.keys(this.state.product).length > 0 &&
        <ProductInfo product={this.state.product} />
      }
      
    </div>)
  }
};

export default ProductOverview;