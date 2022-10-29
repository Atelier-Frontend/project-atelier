import React from 'react';
import Cards from './Cards.jsx';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

class Your extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],

    }
    this.list = this.list.bind(this);
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
      <h4>Your</h4><section>
      <FaAngleLeft className='left-arrows' /><ul className='test'>{this.state.product}
      </ul>
      <FaAngleRight className='right-arrows' />

      </section>
    </div>)
  } else {
  return (
    <div><h4>Your</h4>
    <div>Loading...</div>
    </div>
  )
}
  }
};

export default Your;