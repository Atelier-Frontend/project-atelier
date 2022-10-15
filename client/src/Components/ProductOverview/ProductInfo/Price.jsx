import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      original: '',
      onSale: false
    }
    this.checkSale = this.checkSale.bind(this); 
  }

  componentDidMount() {
    this.checkSale();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle !== prevProps.selectedStyle) {
      this.checkSale();
    };
  }

  checkSale() {
    if (this.props.selectedStyle.sale_price === null) {
      this.setState({ price: this.props.selectedStyle.original_price, onSale: false });
    } else {
      this.setState({ 
        price: this.props.selectedStyle.sale_price,
        original: this.props.selectedStyle.original_price,
        onSale: true 
      });
    }
  }

  render() {
    return (<div>
      {this.state.onSale === true && (
        <div>
          <h4>Price: ${this.state.price}</h4>
          <span><s>${this.state.original}</s></span>
        </div>)}
      {this.state.onSale === false && (
        <h4>Price: ${this.state.price}</h4>
      )}
    </div>)
  }
};

export default Price;