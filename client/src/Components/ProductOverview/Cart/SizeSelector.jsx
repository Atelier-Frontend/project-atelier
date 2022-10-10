import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleSizes: []
    }
    this.handleChange.bind(this);
  }

  componentDidMount() {
    var skus = this.props.styles[0].skus;
    var sizeArray = [];
    
    for (var key in skus) {
      if (skus[key].quantity > 0) {
        sizeArray.push(skus[key].size)
      }
    }
    this.setState({ styleSizes: sizeArray });
  }

  handleChange(event) {
    this.setState({selectValue: event.target.value});
  }

  render() {
    return (<div>
      <label>
        Size:
        <select name='sizes'>
          {this.state.styleSizes.map((size, index) => (
            <option key={index}>{size}</option>
          ))}
        </select>
      </label>
    </div>)
  }
}

export default SizeSelector;