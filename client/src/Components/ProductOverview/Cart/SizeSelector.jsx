import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleSizes: [],
      selectValue: 0,
      styleChange: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.styles !== prevProps.styles) {
      this.setState({ styleChange: true });
    }
    if (this.props.reset !== prevProps.reset) {
      this.setState({ styleChange: true });
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.props.selectSize(event.target.value);
  }

  render() {
    return (<div className='size'>
      <label>
        Size:
        {/* {this.state.styleChange === true &&
          <select name='sizes' defaultValue={'DEFAULT'} onChange={this.handleChange} >
            <option value='DEFAULT' disabled>Select Size</option>
            {this.props.sizes.map((size, index) => (
              <option key={index} value={index}>{size}</option>
            ))}
          </select>} */}
        {this.props.quantity > 0 &&
          <select name='sizes' defaultValue={'DEFAULT'} onChange={this.handleChange} >
            <option value='DEFAULT' disabled>Select Size</option>
            {this.props.sizes.map((size, index) => (
              <option key={index} value={index}>{size}</option>
            ))}
          </select>}
        {this.props.quantity === 0 && 
          <span>OUT OF STOCK</span>
        }  
      </label>
    </div>)
  }
};

export default SizeSelector;