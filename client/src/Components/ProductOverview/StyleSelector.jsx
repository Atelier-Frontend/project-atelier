import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      name: ''
    }
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      name: this.props.selectedStyle.name.toUpperCase(), 
      item: this.props.styles[0].name
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle.name !== prevProps.selectedStyle.name) {
      this.setState({ name: this.props.selectedStyle.name.toUpperCase()});
    }
    if (this.props.styles !== prevProps.styles) {
      this.setState({ item: this.props.styles[0].name});
    }
  }

  onClick(event) {
    event.preventDefault();
    this.setState({ item: event.target.id });
    this.props.selectImage(event.target.id);
    return false;
  }

  render() {
    return (<div className='style-container'>
      <span className='style-info'>STYLE ></span>
      <span className='style-name'>{this.state.name}</span>
      <div className='style-gallery'>
        {this.props.styles.map((style, index) => (
            <img 
              className={this.state.item === style.name ? 'selected' : 'style-image'} 
              alt='image in style gallery' 
              key={index} id={style.name} 
              src={style.photos[0].thumbnail_url} onClick={this.onClick} />))}
      </div>
    </div>)
  }
};

export default StyleSelector;