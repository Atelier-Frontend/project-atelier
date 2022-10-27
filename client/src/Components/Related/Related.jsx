import React from 'react';
import Cards from './Cards.jsx';
import axios from 'axios';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    }
    this.list = this.list.bind(this)
  }

  componentDidMount () {
    this.list();
  }


    componentDidUpdate (prevProps) {
    if(this.props.products.id !== prevProps.products.id)
    {
      this.list();
    }
  }




  list () {
    axios.get(`/products/product_id/related`, {params: {id: this.props.products.id}})
      .then((data) => {
        var lists = [];
        var i = 0;
        while (i < data.data.length) {
          var elm = <Cards key={data.data[i]} item={data.data[i]} class='Related' update={this.props.update} fun={this.props.fun}/>
          lists.push(elm)
          i+=1;
        }
       this.setState({product:lists});
      })

  }

  render() {
    return (<div>
      <h2 data-testid="custom-element">Related</h2><section>
      <FaAngleLeft className='left-arrows' /><ul className='test'>{this.state.product}</ul><FaAngleRight className='right-arrows' />
      </section>
    </div>)
  }
};

export default Related;