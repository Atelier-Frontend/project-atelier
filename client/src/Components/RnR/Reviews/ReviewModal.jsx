import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ImageModal from "./ImageModal.jsx";

export default function ReviewModal(props) {

  const [star, setStar] = useState(0);
  const [radio, setRadio] = useState("Yes");
  const [summary, setSummary] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [images, setImages] = useState([]);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  let stars = [1, 2, 3, 4, 5]
  let meaning = ["", "Poor", "Fair", "Average", "Good", "Great"]
  let radioOptions = ["Yes", "No"]

  function onChangeStar(e) {
    setStar(Number(e.target.id))
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
    if (star > 0 && reviewBody.length >= 50 &&
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
        rating: star,
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
            {stars.map((element) => {
              return <div>
                <input type="checkbox"
                       checked={(element<=star)}
                       onChange={onChangeStar}
                       id={element}/>
              </div>
            })}
            <p className="star-checker-meaning">{meaning[star]}</p>
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
        <label className="review-body">
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
          <span style={{ fontSize:"small", marginTop:"-1em" }}>
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
              Please fill in all required of the fields
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