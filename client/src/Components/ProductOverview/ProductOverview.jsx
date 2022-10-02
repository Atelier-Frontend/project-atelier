import React from 'react';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},

    }
  }

  componentDidMount() {
    var currentProduct = this.props.products[0];
    this.setState({ product: currentProduct });
  }

  render() {
    return (<div>
      <h4>Product Overview</h4>
    </div>)
  }
};

export default ProductOverview