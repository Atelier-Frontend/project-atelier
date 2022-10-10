import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div>
      <h4>Style > {this.props.styles[0].name}</h4>
      <div className='image-gallery'>
        {this.props.styles.map((style, index) => (
          <img className='style-image' key={index} src={style.photos[0].thumbnail_url} style={{width: '100px', height: '200px'}}/>
        ))}
      </div>
    </div>)
  }
};

export default StyleSelector;