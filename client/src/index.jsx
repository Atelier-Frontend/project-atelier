import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import ProductOverview from './Components/ProductOverview/ProductOverview.jsx';
import Your from './Components/Related/Your.jsx';
import Related from './Components/Related/Related.jsx';
import QnA from './Components/QnA/QnA.jsx';
import RnR from './Components/RnR/RnR.jsx';

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
    // if(JSON.stringify(this.state.products) === '{}') {
    axios.get('/products')
      .then((response) => {
        this.setState({ products: response.data[0] })
      })
      .catch((err) => {
        console.log(err)
      });
    // } else {
    //   console.log('not Working')
    //   this.update(this.products.id);
    // }
  }

  componentDidUpdate () {
  }


  update (state_id) {
    axios.get('/products/product_id', {params: {id: state_id.id}})
      .then((response)=> {
        let newproducts = response.data
        this.setState({products: newproducts})
      })
      .catch((err)=> {
        console.log(`${err}`)
      })
  }

  fav (obj) {
    for (var i of this.state.fav) {
      if(i.id=== obj.id) {
        return
      }
    }
    var ans = this.state.fav;
    ans.push(obj)
    this.setState({
      fav: ans
    })
  }

  render () {
    return (<div>
      <h1 className='project-title'><div className='title'>Atelier</div></h1>
      {Object.keys(this.state.products).length > 0 &&
        <ProductOverview products={this.state.products} update={this.update}/>}
      {Object.keys(this.state.products).length > 0 &&
        <Related products={this.state.products} update={this.update} fun={this.fav}/>}
      {Object.keys(this.state.products).length > 0 &&
        <Your products={this.state.fav} />}
      {Object.keys(this.state.products).length > 0 &&
        <QnA products={this.state.products} />}
      {Object.keys(this.state.products).length > 0 &&
        <RnR products={this.state.products} />}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app') || document.createElement('div'));

export default App;


