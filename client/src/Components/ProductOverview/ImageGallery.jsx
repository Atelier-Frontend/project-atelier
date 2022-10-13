import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    }
  }

  render() {
    return (<div className='image-gallery'>
      <div className='style-sidebar'>
        {/* {this.props.styles.map((style, index) => (
          <img className='style-sidebar-image' key={index} src={style.photos[0].url} />
        ))} */}
      </div>
      <div>
        <img src={this.props.image} style={{width: '100px', height: '100px'}}/>
      </div>
    </div>)
  }
};

export default ImageGallery;