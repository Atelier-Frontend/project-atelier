import React from 'react';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityLeft: []
    }
    this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectValue: event.target.value});
  }

  render() {
    return (<div>
      <label>
        Quantity:
        <select name='quantity'>
          {[...Array(this.props.quantity[0])].map((e, i) => (
            <option key={i}>{i}</option>
          ))}          
        </select>
      </label>
    </div>)
  }
}

export default QuantitySelector;