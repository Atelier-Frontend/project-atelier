import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: ''
    } 
  }

  componentDidMount() {
    console.log(this.props.selectedStyle)
    if (this.props.selectedStyle.sale_price === null) {
      this.setState({ price: this.props.selectedStyle.original_price });
    } else {
      this.setState({ price: this.props.selectedStyle.sale_price });
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.selectedStyle !== prevProps.selectedStyle) {
  //     this.setState
  //   }
  // }

  render() {
    //console.log(this.state.price)
    return (<div>
      <h4>Price: ${this.state.price}</h4>
    </div>)
  }
};

export default Price;