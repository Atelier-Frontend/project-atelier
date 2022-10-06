import React from 'react';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},

    }
  }

  render() {
    return (
      <aside class={this.props.class}>
  <img
    src=""
    width="384"
    height="192"
    alt="header image"
  /><div> </div>
  <small>Catagory
  </small>
  <h3>title</h3>
  <small>Cost</small>
  <p>summary
  </p>
</aside>)
  }
};

export default Cards;