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
      products: {}
    }
  }

  componentDidMount() {
    axios.get('/products')
      .then((response) => {
        this.setState({ products: response.data[3] })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render () {
    return (<div>
      <h1>Project Atelier</h1>
      {Object.keys(this.state.products).length > 0 &&
        <ProductOverview products={this.state.products} />}
      {Object.keys(this.state.products).length > 0 &&
        <QnA products={this.state.products} />}
      {Object.keys(this.state.products).length > 0 &&
      <Related products={this.state.products} />}
      {Object.keys(this.state.products).length > 0 &&
      <Your products={this.state.products} />}
    </div>)
  }
}

  ReactDOM.render(<App />, document.getElementById('app'));
