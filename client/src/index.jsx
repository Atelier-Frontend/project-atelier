import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import ProductOverview from './Components/ProductOverview/ProductOverview.jsx';
import Your from './Components/Related/Your.jsx';
import Related from './Components/Related/Related.jsx';
import QnA from './Components/QnA/QnA.jsx';
import RnR from './Components/RnR/RnR.jsx';
import light from './Components/RnR/pic/light.png';
import dark from './Components/RnR/pic/dark.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      fav: [],
      darkTheme: false
    }
    this.update = this.update.bind(this);
    this.fav = this.fav.bind(this);
  }

  componentDidMount() {
    // if(JSON.stringify(this.state.products) === '{}') {
    axios.get('/products')
      .then((response) => {
        this.update(response.data[2]);
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

  themeSwitch() {
    this.setState({darkTheme: !this.state.darkTheme})
  }

  render () {
    return (<div className={this.state.darkTheme?"dark-theme":"light-theme"}>
      <h1 className='project-title'>
        <div className='title'>ATELIER</div>
      </h1>
      <div className='under-header'>
        <div className='sale-message-wrapper'>
          <h2 className='sale-message'><em>site-wide announcement message!</em> -- sale / discount offer -- <u>new product highlight</u></h2>
          <div className='light-switch-label'>Light / Dark</div>
        </div>
        <div className='theme-switch-wrapper'>
          <label className='theme-switch' htmlFor='checkbox'>
              <input type='checkbox' id='checkbox' onClick={this.themeSwitch.bind(this)} />
              <div className='slider round'></div>
          </label>
        </div>
      </div>
      {Object.keys(this.state.products).length > 0 &&
        <ProductOverview
          products={this.state.products}
          update={this.update}
          favorite={this.fav}
          darkTheme={this.state.darkTheme}/>}
      {Object.keys(this.state.products).length > 0 &&
        <Related products={this.state.products} update={this.update} fun={this.fav} darkTheme={this.state.darkTheme}/>}
      {Object.keys(this.state.products).length > 0 &&
        <Your products={this.state.fav} darkTheme={this.state.darkTheme} />}
      {Object.keys(this.state.products).length > 0 &&
        <QnA products={this.state.products} />}
      {Object.keys(this.state.products).length > 0 &&
        <RnR products={this.state.products} darkTheme={this.state.darkTheme}/>}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app') || document.createElement('div'));

export default App;


