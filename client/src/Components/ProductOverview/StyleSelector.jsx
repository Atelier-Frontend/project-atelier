import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.setState({ clicked: true });
    this.props.selectImage(event.target.id);
    return false;
  }

  render() {
    return (<div>
      <div className='style-info'>Style > {this.props.selectedStyle.name}</div>
      <div className='style-gallery'>
        {this.props.styles.map((style, index) => (
            <img className='style-image' alt='image in style gallery' key={index} id={style.name} src={style.photos[0].thumbnail_url} onClick={this.onClick} />
        ))}
      </div>
    </div>)
  }
};

export default StyleSelector;