import React from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { AiOutlineExpand } from 'react-icons/ai';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      current: 0,
      stylePhotos: [],
      expand: false
    }

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.expandImage = this.expandImage.bind(this);
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
        current: 0,
        expand: false
      })
    };
  }

  nextImage() {
    if (this.state.current === this.state.stylePhotos.length - 1) {
      this.setState({ current: 0, expand: false });
    } else {
      this.setState({ current: this.state.current + 1, expand: false });
    };
  }

  prevImage() {
    if (this.state.current === 0) {
      this.setState({ current: this.state.stylePhotos.length - 1, expand: false });
    } else {
      this.setState({ current: this.state.current - 1, expand: false });
    };
  }

  expandImage() {
    if (this.state.expand === false) {
      this.setState({ expand: true });
    };
    if (this.state.expand === true) {
      this.setState({ expand: false });
    };
  }

  render() {
    console.log(this.state.expand)
    return (
      <div className='image-gallery'>
        <AiOutlineExpand className={this.state.expand ? 'ex-button' : 'expand-button'} onClick={this.expandImage}/>
        {this.state.current !== 0 && (
          <FiArrowLeft className={this.state.expand ? 'ex-left-arrow' : 'left-arrow'} onClick={this.prevImage}/>)}
        {this.state.current < this.state.length - 1 && (
          <FiArrowRight className={this.state.expand ? 'ex-right-arrow' : 'right-arrow'} onClick={this.nextImage}/>)}
        {this.state.stylePhotos.map((style, index) => (
          <div className={index === this.state.current ? 'slide-active' : 'slide'} key={index}>
            {index === this.state.current && (
              <img className={this.state.expand ? 'expand-image' : 'main-image'} alt='image in carousel' key={index} src={style.url} />)}
          </div>))}
      </div>)}
};

export default ImageGallery;