import React from 'react';
import Cards from './Cards.jsx';
import axios from 'axios';

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



  list () {
    axios.get(`/products/product_id/related`, {params: {id: this.props.products.id}})
      .then((data) => {
        var lists = [];
        var i = 0;
        while (i < data.data.length) {
          console.log(data);
          var elm = <Cards key={data.data[i]} item={data.data[i]} class='Related' update={this.props.update} fun={this.props.fun}/>
          lists.push(elm)
          i+=1;
        }
       this.setState({product:lists});
      })

  }

  render() {
    return (<div>
      <h4>Related</h4><section>
      <ul className='test'>{this.state.product}</ul>
      </section>
    </div>)
  }
};

export default Related;