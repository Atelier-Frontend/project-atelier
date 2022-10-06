import React from 'react';
import Cards from './Cards.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},

    }
    this.list = this.list.bind(this)
  }

  list () {
    var lists = [];
    var i = 0;
    while (i < 15) {
      var elm = <Cards item={this.props} class='Related'/>
      lists.push(elm)
      i+=1;
    }
    return lists;

  }

  render() {
    return (<div>
      <h4>Related</h4><section>
      <ul class='test'>{this.list()}</ul>
      </section>
    </div>)
  }
};

export default Related;