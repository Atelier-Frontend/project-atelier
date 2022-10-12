import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div className='image-gallery'>
      <div className='style-sidebar'>
        {this.props.styles.map((style, index) => (
          <img className='style-sidebar-image' key={index} src={style.photos[0].url} />
        ))}
      </div>
      <div>
        <img src={this.props.styles[0].photos[0].url} style={{width: '80%', height: '80%'}}/>
      </div>
    </div>)
  }
};

export default ImageGallery;