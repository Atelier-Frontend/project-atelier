import React from 'react';

class FullSizeAnswerPhoto extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(<div className="full-size-image-container">
      <img className="full-size-image"
           alt="large-img"
           src={this.props.imageURL}
           onClick={this.props.zoomOutImage.bind(this)}
      />
    </div>)
  }


}

export default FullSizeAnswerPhoto;



