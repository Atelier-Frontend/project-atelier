import React from "react";
import { useState } from "react";
import axios from "axios";
// import loadable from '@loadable/component';
// const ImageModal = loadable(() => import('./ImageModal.jsx'));
import ImageModal from "./ImageModal.jsx";
import star0 from "../pic/form-star-0.png";
import star1 from "../pic/single-star.png";

export default function ReviewModal(props) {

  const [radio, setRadio] = useState("Yes");
  const [summary, setSummary] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [images, setImages] = useState([]);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [state, setState] = useState({
    overall: [[0, 0, 0, 0, 0], 0],
    size: [[0, 0, 0, 0, 0], 0],
    width: [[0, 0, 0, 0, 0], 0],
    comfort: [[0, 0, 0, 0, 0], 0],
    quality: [[0, 0, 0, 0, 0], 0],
    length: [[0, 0, 0, 0, 0], 0],
    fit:[ [0, 0, 0, 0, 0], 0],
  });

  let stars = [1, 2, 3, 4, 5]
  let radioOptions = ["Yes", "No"]
  let starsObj = {
    overall: ["", "Poor", "Fair", "Average", "Good", "Great"],
    size: ["", "A size too small", "½ a size too small", "Perfect", "½ a size too big", "A size too wide"],
    width: ["", "Too narrow", "Slightly narrow", "Perfect", "Slightly wide", "Too wide"],
    comfort: ["", "Uncomfortable", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"],
    quality: ["", "Poor", "Below average", "What I expected", "Pretty great", "Perfect"],
    length: ["", "Runs Short", "Runs slightly short", "Perfect", "Runs slightly long", "Runs long"],
    fit: ["", "Runs tight", "Runs slightly tight", "Perfect", "Runs slightly long", "Runs long"]
  }

  function starChecker(e) {
    let index = e.currentTarget.id.slice(0,1);
    let item = e.currentTarget.id.slice(1);
    index ==  "0" ? setState(el=> ({...el, [item]: [ [1, 0, 0, 0, 0], 1]})) : null;
    index ==  "1" ? setState(el=> ({...el, [item]: [ [1, 1, 0, 0, 0], 2]})) : null ;
    index ==  "2" ? setState(el=> ({...el, [item]: [ [1, 1, 1, 0, 0], 3]})) : null;
    index ==  "3" ? setState(el=> ({...el, [item]: [ [1, 1, 1, 1, 0], 4]})) : null;
    index ==  "4" ? setState(el=> ({...el, [item]: [ [1, 1, 1, 1, 1], 5]})) : null;
  }

  function onChangeRadio(e) {
    setRadio(e.target.id)
  }

  function onChangeText(e) {
    if (e.target.name === "formSummary") {
      setSummary(e.target.value)
    } else if (e.target.name === "formReviewBody") {
      setReviewBody(e.target.value)
    } else if (e.target.name === "formNickname") {
      setNickname(e.target.value)
    } else if (e.target.name === "formEmail") {
      setEmail(e.target.value)
    } else {
      console.log('err')
    }
  }

  function addImage(url) {
    setImages(image => [...image, url]);
  }

  function inputValidation() {
    if (state.overall[1] > 0 && reviewBody.length >= 50 &&
        nickname.length > 0 && email.length > 0) {
      return true;
    }
    return false;
  };

  function emailValidation(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function reviewSubmit() {
    if(!inputValidation()) {
      setIsValidInput(false);
    } else if (!emailValidation(email)) {
      setIsValidEmail(false);
      setIsValidInput(true);
    } else {
      setIsValidEmail(true);
      setIsValidInput(true);
      axios.post('/reviews', {
        product_id: props.product.id,
        rating: state.overall[1],
        summary: summary,
        body: reviewBody,
        recommend: (radio === "Yes"),
        name: nickname,
        email: email,
        photos: images,
        characteristics: {}  //Needs to be added to review form
      })
        .then(() => {
          props.closeModal();
          alert("You've added a review!!")
        })
        .catch((err) => {
          console.log('failed')
        })
    }
  }

  return (<div className="review-form-container">
    <form react mailto='' className="review-form" >
      <div className="review-form-content">
        <p className="review-form-title">Write Your Review</p>
        <p className="review-form-subtitle">{`About the ${props.product.name}`}</p>
        <label className="star-checker">
          Overall rating(*required)
          <div className="star-checker-graph">
            {Object.keys(starsObj).map((key) => {
              return (<div className="characteristic">
              <p>{key}</p>
              <span className="clickable-stars">
                {stars.map((e, i) => {

                  return <img onClick={starChecker}
                           src={state[key][0][Number(i)]=='1'? star1 : star0}
                           id={i+key}
                           draggable="false"
                      />
                })}
              </span>
              <p className="star-checker-meaning">{starsObj[key][state[key][1]]}</p>
              </div>)
            })}
          </div>
        </label>
        <label className="recommend-checker">
          Do you recommend this product?
          <div className="radio-checker-graph">
          {radioOptions.map((element) => {
            return <div>
              <input type="radio"
                     checked={(element===radio)}
                     onChange={onChangeRadio}
                     id={element}
              />
              <p style={{ marginTop: '0rem' }}>{element}</p>
            </div>
            })
          }
          </div>
        </label>
        <label className="review-summary">
          Review summary
          <textarea type="text"
                    placeholder={"Example: Best purchase ever!"}
                    className="form-review-summary"
                    maxLength={"60"}  rows={"2"}
                    style={{ width:"70%" }}
                    onChange={onChangeText}
                    name="formSummary"
                    required />
        </label>
        <label className="form-review-body-container">
          Review body(*required)
          <textarea type="text"
                    placeholder={"Why did you like the product or not?"}
                    className="form-review-body"
                    maxLength={"1000"}
                    rows={"5"}
                    style={{ width:"70%" }}
                    onChange={onChangeText}
                    name="formReviewBody"
                    required />
          <span style={{ fontSize:"small", marginTop:"-1em", marginBottom:"20px" }}>
          {(reviewBody.length < 50)
          ? <p>{`Minimum required characters left: ${50-(reviewBody.length)}`}</p>
          : <p>Minimum reached</p>}
          </span>
        </label>
        <label className="image-button"
               style={{ marginTop:"-3em" }}>
          <ImageModal addImage={addImage}
                      images={images}/>
        </label>
        <label className="review-form-nickname">
          What is your nickname?(*required)
          <input  type={"text"}
                  placeholder="Example: jackson11!"
                  maxLength={"60"}
                  style={{ width:"50%" }}
                  onChange={onChangeText}
                  name="formNickname"
                  required />
          <p style={{ fontSize:"small", marginTop:"-0.1em" }}>
            For privacy reasons, do not use your full name or email address
          </p>
        </label>
        <label className="review-form-email"
               style={{ marginBottom:"3em" }}>
          Your email(*required)
          <input type={"text"}
                placeholder="Example: jackson11@email.com"
                maxLength={"60"}
                onChange={onChangeText}
                name="formEmail"
                style={{ width:"50%" }}
                required />
          {(!isValidInput) ?
            <p className="inputValidation">
              Please fill in all required of the fields(minimum review characters: 50)
            </p> : ""
          }
          {(!isValidEmail)?
            <p className="emailValidation">Email is invalid!</p> : ""
          }
        </label>
        <div className="formBTN-wrapper">
          <button type="button"
                  className={"submit-review-button"}
                  onClick={reviewSubmit} >Submit</button>
          <button className={"cancel-review-button"}
                  onClick={props.closeModal} >Close</button>
        </div>
      </div>
    </form>
  </div>
  )
}