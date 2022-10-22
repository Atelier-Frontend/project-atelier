import React from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { AiOutlineExpand } from 'react-icons/ai';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      current: 0,
      stylePhotos: []
    }

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      length: this.props.selectedStyle.photos.length,
      stylePhotos: this.props.selectedStyle.photos
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props.selectedStyle !== prevProps.selectedStyle) { 
      this.setState({ 
        stylePhotos: this.props.selectedStyle.photos,
        length: this.props.selectedStyle.photos.length,
        current: 0
      })
    };
  }

  nextImage() {
    if (this.state.current === this.state.stylePhotos.length - 1) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    };
  }

  prevImage() {
    if (this.state.current === 0) {
      this.setState({ current: this.state.stylePhotos.length - 1 });
    } else {
      this.setState({ current: this.state.current - 1 });
    };
  }

  render() {
    return (
      <div className='image-gallery'>
        <AiOutlineExpand className='expand-button' />
        {this.state.current !== 0 && (
          <FiArrowLeft className='left-arrow' onClick={this.prevImage}/>)}
        {this.state.current < this.state.length - 1 && (
          <FiArrowRight className='right-arrow' onClick={this.nextImage}/>)}
        {this.state.stylePhotos.map((style, index) => (
          <div className={index === this.state.current ? 'slide-active' : 'slide'} key={index}>
            {index === this.state.current && (
              <img className='main-image' alt='image in carousel' key={index} src={style.url} />)}
          </div>))}
      </div>)}
};

export default ImageGallery;