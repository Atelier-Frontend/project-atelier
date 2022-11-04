import React, { lazy, Suspense } from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Cart from './Cart/AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductSummary from './ProductSummary.jsx';
import Features from './Features.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      styles: [],
      selectedStyle: {},
      imageStyle: '',
      sizeReset: false,
      expand: false
    }
    this.selectImage = this.selectImage.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.hideProductInfo = this.hideProductInfo.bind(this);
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

    this.setState({product: this.props.products, features: this.props.products.features});

    axios.get('/products/product_id/styles', {
      params: {id: this.props.products.id}
    })
    .then((response) => {
      this.setState({
        styles: response.data.results,
        selectedStyle: response.data.results[0],
        imageStyle: response.data.results[0].photos[0].url,
        selectedKey: 0,
        features: currentProduct.features 
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  selectImage(style, index) {
    var selectStyle = this.state.styles.filter((currentStyle) => {
      return currentStyle.name === style;
    });

    this.setState({
      imageStyle: selectStyle[0].photos[0].url,
      selectedStyle: selectStyle[0],
      selectedKey: index,
      sizeReset: true
    });
  }

  hideProductInfo() {
    if (this.state.expand === false) {
      this.setState({ expand: true });
    };
    if (this.state.expand === true) {
      this.setState({ expand: false });
    };
  }

  render() {
    return (
      <div className='product'>
        <div className='left-column'>
          {this.state.styles.length > 0 &&
            <ImageGallery 
              styles={this.state.styles} 
              selectedStyle={this.state.selectedStyle} 
              image={this.state.imageStyle} 
              expand={this.state.expand}
              hideProductInfo={this.hideProductInfo} 
              selectImage={this.selectImage} />}
          {Object.keys(this.state.product).length > 0 &&
            <ProductSummary 
              slogan={this.state.product.slogan}
              description={this.state.product.description}/>}     
        </div>
        <div className={this.state.expand ? 'product-hidden' : 'right-column'}>
          {Object.keys(this.state.product).length > 0 &&
            <ProductInfo 
              product={this.state.product} 
              selectedStyle={this.state.selectedStyle} 
              styleName={this.state.selectedStyle.name}
              expanded={this.state.expand}
              theme = {this.props.darkTheme} />}
          {this.state.styles.length > 0 &&
            <StyleSelector 
              styles={this.state.styles} 
              selectedStyle={this.state.selectedStyle} 
              selectImage={this.selectImage} />}
          {this.state.styles.length > 0 &&
            <Cart 
              product={this.state.product}
              styles={this.state.styles} 
              selectedStyle={this.state.selectedStyle} 
              reset={this.state.sizeReset}
              index={this.state.selectedKey} 
              favorite={this.props.favorite}/>}
          {this.state.features !== undefined && 
            <Features features={this.state.features}/>}      
        </div>    
      </div>
    )
  }
};

export default ProductOverview;