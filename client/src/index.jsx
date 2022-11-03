import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
const ProductOverview = lazy(()=>import('./Components/ProductOverview/ProductOverview.jsx'));
const Your = lazy (()=> import('./Components/Related/Your.jsx'));
const Related = lazy(()=>import('./Components/Related/Related.jsx'));
const QnA = lazy(()=>import('./Components/QnA/QnA.jsx'));
const RnR = lazy(()=>import('./Components/RnR/RnR.jsx'));
const light= lazy(()=>import('./Components/RnR/pic/light.png'));
const dark= lazy(()=>import('./Components/RnR/pic/dark.png'));
const renderLoader = ()=> <p>Loading</p>;

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

  themeSwitch() {
    this.setState({darkTheme: !this.state.darkTheme})
  }

  render () {
    return (<Suspense fallback={renderLoader()}><div className={this.state.darkTheme?"dark-theme":"light-theme"}>
      <h1 className='project-title'><div className='title'>Atelier</div></h1>
      <img className="theme-toggle"
           src={this.state.darkTheme?light:dark}
           onClick={this.themeSwitch.bind(this)}
           draggable="false" />
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
    </div></Suspense>)
  }
}

ReactDOM.render(<App />, document.getElementById('app') || document.createElement('div'));

export default App;


