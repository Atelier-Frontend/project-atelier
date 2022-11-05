import React from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { AiOutlineExpand } from 'react-icons/ai';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { BsFillCircleFill } from 'react-icons/bs';
import circle from './white-circle.png';
import clicked from '../Clicked.js';

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
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      length: this.props.selectedStyle.photos.length,
      stylePhotos: this.props.selectedStyle.photos,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle !== prevProps.selectedStyle) { 
      this.setState({ 
        stylePhotos: this.props.selectedStyle.photos,
        length: this.props.selectedStyle.photos.length,
        current: 0,
        expand: false
      });
    };

    if (this.props.expand !== prevProps.expand) {
      this.setState({ expand: this.props.expand });
    };
  }

  nextImage(event) {
    clicked('product-overview', event.target.className.baseVal);
    if (this.state.current >= 3 & this.state.expand) {
      document.getElementById('sidebar').scrollLeft += 32;
    } else if (this.state.current >= 3) {
      document.getElementById('sidebar').scrollTop += 90;
    };
    if (this.state.current === this.state.stylePhotos.length - 1) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    };
  }

  prevImage(event) {
    clicked('product-overview', event.target.className.baseVal);
    if (this.state.current < 7 & this.state.expand) {
      document.getElementById('sidebar').scrollLeft -= 32;
    } else if (this.state.current < 7) {
      document.getElementById('sidebar').scrollTop -= 90;
    };
    if (this.state.current === 0) {
      this.setState({ current: this.state.stylePhotos.length - 1 });
    } else {
      this.setState({ current: this.state.current - 1 });
    };
  }

  expandImage(event) {
    event.preventDefault();
    clicked('product-overview', event.target.className.baseVal);
    this.props.hideProductInfo();
  }

  onClick(event) {
    event.preventDefault();
    clicked('product-overview', event.target.className);
    this.setState({ current: Number(event.target.id) });
  }

  render() {
    return (
      <div className='image-gallery'>
        <AiOutlineExpand 
          className={this.state.expand ? 'ex-button' : 'expand-button'} 
          onClick={this.expandImage} />
        {this.state.current !== 0 && (
          <FiArrowLeft 
            className={this.state.expand ? 'ex-left-arrow' : 'left-arrow'} 
            onClick={this.prevImage} />)}
        {this.state.current < this.state.length - 1 && (
          <FiArrowRight 
            className={this.state.expand ? 'ex-right-arrow' : 'right-arrow'} 
            onClick={this.nextImage} />)}
        {this.state.stylePhotos.map((style, index) => (
          <div className={index === this.state.current ? 'slide-active' : 'slide'} key={index}>
            {index === this.state.current && (
              <img 
                className={this.state.expand ? 'expand-image' : 'main-image'} 
                alt='image in carousel'
                draggable='false' 
                key={index}
                fetchpriority='high' 
                src={style.url} 
                onClick={this.expandImage} />)}
          </div>))}
        <div className={this.state.expand ? 'product-hidden' : 'sidebar-arrows'}>
          {this.state.current !== 0 && (
            <IoIosArrowUp
              className='up-arrow' 
              onClick={this.prevImage} />)}
          {this.state.current < this.state.length - 1 && (
            <IoIosArrowDown
              className='down-arrow'
              onClick={this.nextImage} />)}
        </div>  
        <div className={this.state.expand ? 'transform-images' : 'sidebar-gallery'} id='sidebar'>
            {this.state.stylePhotos.map((style, index) => (
              <div className='slide'key={index}>
                {this.state.expand && 
                  <img
                    className={index === this.state.current ? 'transform-image-highlight' : 'transformed-image'}
                    alt='white circle icon'
                    draggable='false'
                    id={index}
                    src={circle}
                    onClick={this.onClick} />}
                {this.state.expand === false &&
                  <img 
                    className={index === this.state.current ? 'sidebar-highlight' : 'sidebar-image'} 
                    alt='image in side carousel'
                    draggable='false'
                    id={index}
                    src={style.thumbnail_url}
                    onClick={this.onClick} />}
              </div>))}
        </div> 
      </div>)}
};

export default ImageGallery;