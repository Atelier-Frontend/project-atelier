import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: ''
    }
    this.checkSale = this.checkSale.bind(this); 
  }

  componentDidMount() {
    this.checkSale();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle !== prevProps.selectedStyle) {
      this.checkSale();
    }
  }

  checkSale() {
    if (this.props.selectedStyle.sale_price === null) {
      this.setState({ price: this.props.selectedStyle.original_price });
    } else {
      this.setState({ price: this.props.selectedStyle.sale_price });
    }
  }

  render() {
    return (<div>
      <h4>Price: ${this.state.price}</h4>
    </div>)
  }
};

export default Price;