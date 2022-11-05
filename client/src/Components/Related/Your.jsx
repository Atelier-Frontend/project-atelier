import React from 'react';
import Cards from './Cards.jsx';
import clicked from '../Clicked.js';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

class Your extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],

    }
    this.list = this.list.bind(this);
    this.nextImages2 = this.nextImages2.bind(this)
  }
  componentDidMount () {
    this.list();

  }
  componentDidUpdate (prevProps) {
    if(this.state.product.length < prevProps.products.length)
    {
      this.list();
    }
  }
  nextImages2(number) {
    console.log("other");
    document.getElementsByClassName('test2')[0].scrollLeft += number
;}

  list () {
        var lists = [];
        var i = 0;
        while (i < this.props.products.length) {
          var elm = <Cards key={this.props.products[i].id} item={this.props.products[i].id} class='your' update={()=>{}} fun={()=>{}}/>
          lists.push(elm)
          i+=1;
        }
       this.setState({product:lists});

  }

  render() {
    if(this.props.products.length > 0) {
    return (<div>
      <h4 data-testid="custom-element">Your</h4><section>
      <FaAngleLeft className='left-arrows' onClick={(e)=>{clicked("Related", e.target.classname); this.nextImages2(-180)}}/><ul className='test2'>{this.state.product}</ul><FaAngleRight className='right-arrows' onClick={(e)=>{clicked("Related", e.target.classname); this.nextImages2(180)}}/>

      </section>
    </div>)
  } else {
  return (
    <div><h2>Your</h2>
    <div>Loading...</div>
    </div>
  )
}
  }
};

export default Your;