import React from 'react';
import axios from 'axios';

class ImageHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  async handleFileRead(e) {
    if(e.target.files.length !== 0) {
      const file = event.target.files[0];
      const base64 = await this.convertBase64(file);
      await this.getPublicURL(base64);
    }
  }

  convertBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  getPublicURL(b64) {
    axios.post(`/image/upload`, {body: b64.split('base64,')[1]})
      .then((response) => {
        this.props.addImageUrl(response.data.url);
      })
      .catch((err) => {
        console.log('failed')
      })
  }

  //###this function can make a better looking button###
  // uploadImage() {
  //   document.getElementById('selectFile').click()
  // }

  render() {
    return(<>
    <center>
    {/* <button style={{backgroundColor: "white"}}
            onClick={this.uploadImage.bind(this)}>
    <i>Image Upload</i>
    </button> */}
    <input id="selectFile" type="file" accept="image/*"
           onChange={this.handleFileRead.bind(this)}></input>
    { (this.props.len === 0) ? null :
      <p>{`You have select ${this.props.len} image(s)`}</p>
    }

    </center>
    </>)
  }


}

export default ImageHandler;