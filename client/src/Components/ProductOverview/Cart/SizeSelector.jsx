import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleSizes: [],
      selected: 'DEFAULT',
      styleChange: false,
      quantity: undefined,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ quantity: this.props.quantity });
  }

  componentDidUpdate(prevProps) {
    if (this.props.styles !== prevProps.styles) {
      this.setState({ 
        quantity: this.props.quantity,
        selected: 'DEFAULT'
      });
    }
    if (this.props.quantity !== prevProps.quantity) {
      this.setState({ 
        quantity: this.props.quantity,
        selected: 'DEFAULT'
      });
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ selected: event.target.value });
    this.props.selectSize(event.target.value);
  }

  render() {
    console.log(this.state.selected)
    return (<div className='size'>
      <label> Size:
        {this.state.quantity > 0 &&
          <select name='sizes' defaultValue={'DEFAULT'} onChange={this.handleChange.bind(this)} >
            <option value={'DEFAULT'} disabled selected={this.state.selected === 'DEFAULT'}>Select Size</option>
            {this.props.sizes.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </select>}
        {this.state.quantity === 0 && 
          <span>OUT OF STOCK</span>
        }  
      </label>
    </div>)
  }
};

export default SizeSelector;