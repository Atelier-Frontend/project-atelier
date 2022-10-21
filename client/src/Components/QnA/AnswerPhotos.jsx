import React from 'react';
import axios from "axios";

class AnswerPhotos extends React.Component {
  constructor(props) {
    super(props),
    this.state = {

    }
  }

  render() {
    return(<span className="answer-photos-container">
      {this.props.photos.map((photo) => {
        return <img src={photo.url} alt="photo"
               key={photo.url} className="answer-photo"/>
       })
      }
    </span>)
  }
}

export default AnswerPhotos;



