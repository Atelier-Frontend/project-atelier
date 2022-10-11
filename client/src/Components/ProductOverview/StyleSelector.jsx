import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div>
      <div>Style > {this.props.styles[0].name}</div>
      <div className='style-gallery'>
        {this.props.styles.map((style, index) => (
          <img className='style-image' key={index} src={style.photos[0].thumbnail_url} />
        ))}
      </div>
    </div>)
  }
};

export default StyleSelector;