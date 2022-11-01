import React from 'react';
import axios from 'axios';
import clicked from '../Clicked.js';
import StarRating from '../ProductOverview/ProductInfo/StarRating.jsx';
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
componentDidUpdate(prevProps) {
  if(this.props.item !== prevProps.item)
  {
    this.info();
  }
}
  info () {
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

    // if (JSON.stringify(this.state.product) === '{}') {
    //   var update = console.log
    // } else {
    //   var update = this.props.update
    // }
    return (
      <aside className={this.props.class} >
        <div onClick={()=> {
          clicked(this.props.class, 'cards');
          this.props.update(this.state.product)}}>
  <img
    src={this.state.styles}
    width="384"
    height="192"
    alt="header image"
  />
  <div>
  <small>{this.state.product.category}
  </small>
  <div>{this.state.product.name}</div>
  <small>{this.state.product.default_price}</small>
  </div>
  </div>
 <button onClick={()=>{this.props.fun(this.state.product)}}> <div className='large-font text-center top-20'>
  <ion-icon name="heart" >
    <div id='red-bg'></div>
  </ion-icon>
</div></button><div className='RelatedStars'>
<div className={this.props.theme ? 'dark-star-rating' : 'star-rating'}>
  <StarRating id={this.props.item}/>
  </div>
  </div>
</aside>)
  }
};

export default Cards;