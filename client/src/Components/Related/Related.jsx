import React from 'react';
import Cards from './Cards.jsx';
import axios from 'axios';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      count: 0,
      current: 0
    }
    this.list = this.list.bind(this)
    this.nextImages = this.nextImages.bind(this);
    this.prevImages = this.prevImages.bind(this);
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

  nextImages() {
    if (this.state.current >= 3) {
      document.getElementById('test').scrollLeft += 90;
    }

    if (this.state.current === this.state.count) {
      return
    } else {
      this.setState({ current: this.state.current + 1 });
    };
  }

  prevImages() {
    if (this.state.current < 7) {
      document.getElementById('test').scrollLeft -= 90;
    }

    if (this.state.current === 0) {
      return
    } else {
      this.setState({ current: this.state.current - 1 });
    };
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
       this.setState({
        product:lists,
        count: this.state.count+1,
        current: this.state.count
      });
      })

  }

  render() {
    return (<div>
      <h4 data-testid="custom-element">Related</h4><section>
      <FaAngleLeft className='left-arrows' onClick={this.state.prevImages}/><ul className='test'>{this.state.product}</ul><FaAngleRight className='right-arrows' onClick={this.state.nextImages}/>
      </section>
    </div>)
  }
};

export default Related;