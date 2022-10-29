import React from "react";
import axios from "axios";

export default function ImageModal(props) {

  async function handleImageUpload(e) {
    if(e.target.files.length !== 0) {
      const file = event.target.files[0];
      const base64 = await convertBase64(file);
      await getPublicURL(base64);
    }
  }

  function convertBase64(file) {
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

  function getPublicURL(b64) {
    axios.post(`/image/upload`, {body: b64.split('base64,')[1]})
      .then((response) => {
        props.addImage(response.data.url);
      })
      .catch((err) => {
        console.log('failed')
      })
  }

  return(<>
    <div>
      {props.images.length >= 5 ? null
      : <input id="selectFile" type="file" accept="image/*"
                onChange={handleImageUpload}></input>}
      { (props.images.len === 0) ? null :
        <p style={{ fontSize:"small", marginTop:"-0em" }}>
          {`You have select ${props.images.length} image(s)`}
        </p>
      }
    </div>
  </>)

}


