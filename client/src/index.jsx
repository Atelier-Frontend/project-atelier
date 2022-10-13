import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import ProductOverview from './Components/ProductOverview/ProductOverview.jsx';
import Your from './Components/Related/Your.jsx';
import Related from './Components/Related/Related.jsx';
import QnA from './Components/QnA/QnA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      fav: []
    }
    this.update = this.update.bind(this);
    this.fav = this.fav.bind(this);
  }

  componentDidMount() {
    if(JSON.stringify(this.state.products) === '{}') {
    axios.get('/products')
      .then((response) => {
        this.setState({ products: response.data[0] })
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      console.log(this);
      this.update(this.products.id);
    }
  }


  update (state_id) {

    axios.get('/products/product_id', {params: {id: state_id}})
      .then((response)=> {
        console.log(response.data)
        this.setState({products: response.data})
      })

  }

  fav (obj) {
    console.log("working")
    var ans = this.state.fav;
    ans.push(obj)
    this.setState({
      fav: ans
    })
  }

  render () {
    console.log(this.state.fav)
    return (<div>
      <h1>Project Atelier</h1>
      {Object.keys(this.state.products).length > 0 &&
        <ProductOverview products={this.state.products} />}
      {Object.keys(this.state.products).length > 0 &&
      <Related products={this.state.products} update={this.update} fun={this.fav}/>}
      {Object.keys(this.state.products).length > 0 &&
      <Your products={this.state.fav} />}
      {Object.keys(this.state.products).length > 0 &&
        <QnA products={this.state.products} />}
    </div>)
  }
}

  ReactDOM.render(<App />, document.getElementById('app'));
