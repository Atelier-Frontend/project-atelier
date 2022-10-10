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
      <div className='image-gallery'>
        {this.props.styles.map((style, index) => (
          <img className='style-image' key={index} src={style.photos[0].thumbnail_url} style={{width: '50px', height: '100px', objectFit: 'cover'}}/>
        ))}
      </div>
    </div>)
  }
};

export default StyleSelector;