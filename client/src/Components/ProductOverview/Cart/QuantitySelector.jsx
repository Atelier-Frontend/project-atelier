import React from 'react';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: []
    }
    this.handeChange = this.handleChange.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
  }

  componentDidMount() {
    this.setQuantity();
  }

  componentDidUpdate(prevProps) {
    if (this.props.quantity !== prevProps.quantity) {
      this.setQuantity();
    };
  }

  handleChange(event) {
    this.setState({selectValue: event.target.value});
  }

  setQuantity() {
    if (this.props.quantity <= 15) {
      this.setState({ quantity: this.props.quantity });
    } else {
      this.setState({ quantity: 15});
    }
  }

  render() {
    return (<div className='quantity'>
      <label>
        Quantity:
        <select name='quantity'>
          {[...Array(this.state.quantity)].map((e, i) => (
            <option key={i}>{i + 1}</option>
          ))}          
        </select>
      </label>
    </div>)
  }
};

export default QuantitySelector;