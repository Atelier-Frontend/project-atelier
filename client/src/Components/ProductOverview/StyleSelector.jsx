import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.selectImage(event.target.id);
  }

  render() {
    return (<div>
      <div>Style > {this.props.selectedStyle.name}</div>
      <div className='style-gallery'>
        {this.props.styles.map((style, index) => (
          <img className='style-image' key={index} id={style.name} src={style.photos[0].thumbnail_url} onClick={this.onClick} />
        ))}
      </div>
    </div>)
  }
};

export default StyleSelector;