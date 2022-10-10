import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div>
      <h4>Style > Selected Style:</h4>
      <div>
        {this.props.styles.map((style, index) => (
          <li key={index}>{style.name}</li>
        ))}
      </div>
    </div>)
  }
};

export default StyleSelector;