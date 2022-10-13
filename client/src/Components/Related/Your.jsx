import React from 'react';
import Cards from './Cards.jsx';

class Your extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},

    }
    this.list = this.list.bind(this);
  }
  componentDidMount () {
    if(this.props.length > 0) {
        this.list();
    }
  }


  list () {
    axios.get(`/products/product_id/related`, {params: {id: this.props.products.id}})
      .then((data) => {
        var lists = [];
        var i = 0;
        while (i < data.data.length) {
          var elm = <Cards key={data.data[i]} item={data.data[i]} class='your' />
          lists.push(elm)
          i+=1;
        }
       this.setState({product:lists});
      })

  }

  render() {
    if(this.props.length > 0) {
    return (<div>
      <h4>Your</h4><section>
        <ul className='test'>
      <Cards class='your'/>
      </ul>
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