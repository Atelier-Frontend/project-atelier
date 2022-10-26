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
        selected: 'DEFAULT',
        styleChange: true
      });
    };
    if (this.props.quantity !== prevProps.quantity) {
      this.setState({ 
        quantity: this.props.quantity,
        selected: 'DEFAULT',
        styleChange: true
      });
    };
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ selected: event.target.value });
    this.props.selectSize(event.target.value);
  }

  render() {
    return (<div className='size-select'>
        {((this.state.quantity > 0) || (this.state.selected === 'DEFAULT')) &&
          <select 
            className='size-dropdown' 
            defaultValue={'DEFAULT'} 
            onChange={this.handleChange}
            id='select-size' >
            <option 
              value='DEFAULT' 
              disabled 
              selected={this.state.selected === 'DEFAULT'}>
                Select Size
              </option>
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