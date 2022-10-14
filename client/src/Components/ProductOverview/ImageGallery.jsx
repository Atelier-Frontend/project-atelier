import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: this.props.styles.length,
      current: this.props.styles.indexOf(this.props.selectedStyle)
    }

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  componentDidUpdate() {
    
  }

  nextImage() {
    if (this.state.current === this.props.styles.length - 1) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    };
  }

  prevImage() {
    if (this.state.current === 0) {
      this.setState({ current: this.props.styles.length - 1 });
    } else {
      this.setState({ current: this.state.current - 1 });
    };
  }

  render() {
    console.log(this.props.styles.indexOf(this.props.selectedStyle))
    return (
      <div className='image-gallery'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={this.prevImage}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={this.nextImage}/>
        {this.props.styles.map((style, index) => (
            <div className={index === this.state.current ? 'slide-active' : 'slide'} key={index}>
              {index === this.state.current && (
                <img className='main-image'key={index} src={style.photos[0].url} />)}
            </div>
        ))}
      </div>)
  }
};

export default ImageGallery;