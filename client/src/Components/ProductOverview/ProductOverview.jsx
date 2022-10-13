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
      styles: [],
      selectedStyle: {},
      imageStyle: ''
    }
    this.selectImage = this.selectImage.bind(this);
  }

  componentDidMount() {
    var currentProduct = this.props.products;
    this.setState({product: this.props.products});

    axios.get('/products/product_id/styles', {
      params: {id: this.props.products.id}
    })
    .then((response) => {
      this.setState({ 
        styles: response.data.results,
        selectedStyle: response.data.results[0]
      })
    })
  }

  selectImage(style) {
    var selectStyle = this.state.styles.filter((currentStyle) => {
      return currentStyle.name === style;
    });

    this.setState({ 
      imageStyle: selectStyle[0].photos[0].url,
      selectedStyle: selectStyle[0]
    })
  }

  render() {
    return (<div className='productOverview'>
      {this.state.styles.length > 0 &&
        <ImageGallery styles={this.state.styles} selectedStyle={this.state.selectedStyle}/>
      }
      {Object.keys(this.state.product).length > 0 &&
        <ProductInfo product={this.state.product} price={this.state.selectedStyle.original_price}/>
      }
      {this.state.styles.length > 0 && 
        <StyleSelector styles={this.state.styles} selectImage={this.selectImage}/>
      }
      {this.state.styles.length > 0 && 
        <Cart styles={this.state.styles} />
      }
    </div>)
  }
};

export default ProductOverview;