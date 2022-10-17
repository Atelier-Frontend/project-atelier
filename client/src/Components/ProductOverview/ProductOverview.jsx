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
      imageStyle: '',
      sizeReset: false
    }
    this.selectImage = this.selectImage.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    this.getStyles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      this.getStyles();
    }
  }

  getStyles() {
    var currentProduct = this.props.products;
    this.setState({product: this.props.products});

    axios.get('/products/product_id/styles', {
      params: {id: this.props.products.id}
    })
    .then((response) => {
      this.setState({ 
        styles: response.data.results,
        selectedStyle: response.data.results[0],
        imageStyle: response.data.results[0].photos[0].url
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  selectImage(style) {
    var selectStyle = this.state.styles.filter((currentStyle) => {
      return currentStyle.name === style;
    });

    this.setState({ 
      imageStyle: selectStyle[0].photos[0].url,
      selectedStyle: selectStyle[0],
      sizeReset: true
    });
  }

  render() {
    return (<div className='product-overview'>
      {this.state.styles.length > 0 &&
        <ImageGallery styles={this.state.styles} selectedStyle={this.state.selectedStyle} image={this.state.imageStyle} />}  
      {Object.keys(this.state.product).length > 0 &&
        <ProductInfo product={this.state.product} selectedStyle={this.state.selectedStyle} styleName={this.state.selectedStyle.name}/>}
      {this.state.styles.length > 0 && 
        <StyleSelector styles={this.state.styles} selectedStyle={this.state.selectedStyle} selectImage={this.selectImage} />}
      {this.state.styles.length > 0 && 
        <Cart styles={this.state.styles} selectedStyle={this.state.selectedStyle} reset={this.state.sizeReset}/>} 
    </div>)
  }
};

export default ProductOverview;