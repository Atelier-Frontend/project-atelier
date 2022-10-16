import React from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx';
import Price from './Price.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      category: '',
      price: '',
      text: ''
    }
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.product.id !== prevProps.product.id) {
      this.getProducts();
    };
  }

  getProducts() {
    axios.get('/products/product_id', {
      params: {id: this.props.product.id}
    })
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          category: response.data.category,
          price: response.data.default_price,
          text: response.data.description
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (<div className='product-info'>
        {this.state.id > 0 &&
        <div className='product-info'><StarRating className='product-info' id={this.state.id}/></div>}
        <div className='product-info'>Category: {this.state.category}</div>
        <div className='product-info'>Name: {this.state.name}</div>
        {Object.keys(this.props.selectedStyle).length > 0 &&
        <div className='product-info'><Price  selectedStyle={this.props.selectedStyle} /></div>}
        <div className='product-info'>Overview Text: {this.state.text}</div>
    </div>)
  }
};

export default ProductInfo;