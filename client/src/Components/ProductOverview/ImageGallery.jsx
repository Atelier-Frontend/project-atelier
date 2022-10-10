import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div>
      <img src={this.props.style.photos[0].url} style={{width: '500px', height: '700px'}}/>
    </div>)
  }
};

export default ImageGallery;