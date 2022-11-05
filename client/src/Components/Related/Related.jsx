import React from 'react';
import Cards from './Cards.jsx';
import axios from 'axios';
import clicked from '../Clicked.js'
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

  nextImages(number) {
    console.log(number);
    document.getElementsByClassName('test')[0].scrollLeft += number
;}





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
      <FaAngleLeft className='left-arrows' onClick={(e)=>{clicked("Related", e.target.classname); return this.nextImages(-180)}}/><ul className='test'>{this.state.product}</ul><FaAngleRight className='right-arrows' onClick={(e)=>{clicked("Related", e.target.classname); return this.nextImages(180)}}/>
      </section>
    </div>)
  }
};

export default Related;