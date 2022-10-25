import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleSizes: [],
      selectValue: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.selectSize(event.target.value);
  }

  render() {
    return (<div className='size-select'>
        {this.props.quantity > 0 &&
          <select 
            className='size-dropdown' 
            defaultValue={'DEFAULT'} 
            onChange={this.handleChange}
            id='select-size' >
            <option value='DEFAULT' disabled>Select Size</option>
            {this.props.sizes.map((size, index) => (
              <option key={index} value={index}>{size}</option>
            ))}
          </select>}
        {this.props.quantity === 0 && 
          <span>OUT OF STOCK</span>}  
    </div>)
  }
};

export default SizeSelector;