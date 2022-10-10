import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Cart from './Cart/AddToCart.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      styles: []
    }
  }

  componentDidMount() {
    var currentProduct = this.props.products;
    this.setState({product: this.props.products});

    axios.get('/products/product_id/styles', {
      params: {id: this.props.products.id}
    })
    .then((response) => {
      this.setState({ styles: response.data.results})
    })
  }

  render() {
    console.log('render', this.state)
    return (<div>
      {Object.keys(this.state.product).length > 0 &&
        <ProductInfo product={this.state.product} />
      }
      {this.state.styles.length > 0 && 
        <Cart styles={this.state.styles} />
      }
    </div>)
  }
};

export default ProductOverview;