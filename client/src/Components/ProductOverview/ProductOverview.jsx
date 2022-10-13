import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Cart from './Cart/AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';

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

  componentDidUpdate(prevProps) {
    if(this.props.products.id !== prevProps.products.id)
    {
      var currentProduct = this.props.products;
      this.setState({product: this.props.products});

      axios.get('/products/product_id/styles', {
        params: {id: this.props.products.id}
      })
      .then((response) => {
        this.setState({ styles: response.data.results})
      })
    }
  }

  render() {
    return (<div className='productOverview'>
      {this.state.styles.length > 0 &&
        <ImageGallery style={this.state.styles[0]} />
      }
      {Object.keys(this.state.product).length > 0 &&
        <ProductInfo product={this.state.product} />
      }
      {this.state.styles.length > 0 &&
        <StyleSelector styles={this.state.styles} />
      }
      {this.state.styles.length > 0 &&
        <Cart styles={this.state.styles} />
      }
    </div>)
  }
};

export default ProductOverview;