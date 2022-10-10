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
  }

  componentDidMount() {
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
      })
  }

  render() {
    return (<div>
        {this.state.id > 0 &&
        <StarRating id={this.state.id}/>}
        <h4>Category: {this.state.category}</h4>
        <h4>Name: {this.state.name}</h4>
        <h4>Price: ${this.state.price}</h4>
        <h4>Overview: {this.state.text}</h4>
    </div>)
  }
};

export default ProductInfo;