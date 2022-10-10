import React from 'react';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: []
    }
    this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.quantity <= 15) {
      this.setState({ quantity: this.props.quantity });
    } else {
      this.setState({ quantity: 15});
    }
  }

  handleChange(event) {
    this.setState({selectValue: event.target.value});
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
}

export default QuantitySelector;