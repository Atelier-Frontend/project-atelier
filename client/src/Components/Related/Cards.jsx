import React from 'react';
import axios from 'axios';
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},

    }
    this.info = this.info.bind(this);
  }
componentDidMount () {
  this.info();
}
  info () {
    axios.get('/products/product_id', {params: {id: this.props.item}})
      .then((data) => {
        var test = data.data
        this.setState({product: data.data})
      })
  }

  render() {
    return (
      <aside className={this.props.class}>
  <img
    src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png"
    width="384"
    height="192"
    alt="header image"
  /><div>
  <small>{this.state.product.category}
  </small>
  <h3>{this.state.product.name}</h3>
  <small>{this.state.product.default_price}</small>
  <p>stars
  </p>
  <div class='large-font text-center top-20'>
  <ion-icon name="heart">
    <div id='red-bg'></div>
  </ion-icon>
</div>
  </div>
</aside>)
  }
};

export default Cards;