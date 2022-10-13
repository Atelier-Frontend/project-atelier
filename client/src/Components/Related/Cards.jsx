import React from 'react';
import axios from 'axios';
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      styles: ''

    }
    this.info = this.info.bind(this);
  }
componentDidMount () {
  this.info();
}
  info () {
    console.log(this.props.item)
    axios.get('/products/product_id', {params: {id: this.props.item}})
      .then((data) => {
        var test = data.data
        axios.get('/products/product_id/styles', {
          params: {id: this.props.item}
        })
        .then((testing) => {
          this.setState({ product: test, styles: testing.data.results[0].photos[0].thumbnail_url})
        })
      })
      .catch((err)=> {
        console.log(err);
      })
  }

  render() {
    console.log(this.props,' testing');
    // if (JSON.stringify(this.state.product) === '{}') {
    //   var update = console.log
    // } else {
    //   var update = this.props.update
    // }
    return (
      <aside className={this.props.class} onClick={()=> this.props.update(this.state.product.id)}>
  <img
    src={this.state.styles}
    width="384"
    height="192"
    alt="header image"
  />
  <div>
  <small>{this.state.product.category}
  </small>
  <h3>{this.state.product.name}</h3>
  <small>{this.state.product.default_price}</small>
  <p>stars
  </p>
 <button onClick={()=>{this.props.fun(this.state.product)}}> <div class='large-font text-center top-20'>
  <ion-icon name="heart" >
    <div id='red-bg'></div>
  </ion-icon>
</div></button>
  </div>
</aside>)
  }
};

export default Cards;