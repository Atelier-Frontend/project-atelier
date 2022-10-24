import React from 'react';
import axios from "axios";
import FullSizeAnswerPhoto from "./FullSizeAnswerPhoto.jsx";

class AnswerPhotos extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      enlarged: false,
      imageURL: ""
    }
  }

  zoomInImage(e) {
    this.setState({
      imageURL: e.target.src,
      enlarged: true
    })
  }

  zoomOutImage() {
    this.setState({
      enlarged: false
    })
  }

  render() {
    return(<span>
      {this.props.photos.map((photo) => {
        return <img src={photo.url}
                    alt="photo"
                    key={photo.url}
                    className="thumbnail-photo"
                    style={{width:"60px", height:"60px", marginBottom:"1rem"}}
                    onClick={this.zoomInImage.bind(this)}
               />
       })
      }
      {this.state.enlarged
        ? <FullSizeAnswerPhoto zoomOutImage={this.zoomOutImage.bind(this)}
                               imageURL={this.state.imageURL} />
        : null }
    </span>)
  }
}

export default AnswerPhotos;



