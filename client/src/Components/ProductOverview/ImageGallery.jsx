import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<div>
      <img src={this.props.style.photos[0].url} style={{width: '25%', height: '25%'}}/>
    </div>)
  }
};

export default ImageGallery;