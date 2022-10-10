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
    console.log(this.props)
  }
  handleChange(event) {
    this.setState({selectValue: event.target.value});
  }

  render() {
    console.log(this.props)
    return (<div>
      <label>
        Size:
        <select name='sizes'>
          {this.props.sizes.map((size, index) => (
            <option key={index}>{size}</option>
          ))}
        </select>
      </label>
    </div>)
  }
}

export default SizeSelector;