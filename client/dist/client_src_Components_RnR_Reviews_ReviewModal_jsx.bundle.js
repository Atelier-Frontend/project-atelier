"use strict";
(self["webpackChunkproject_atelier"] = self["webpackChunkproject_atelier"] || []).push([["client_src_Components_RnR_Reviews_ReviewModal_jsx"],{

/***/ "./client/src/Components/RnR/Reviews/ReviewModal.jsx":
/*!***********************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/ReviewModal.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _pic_form_star_0_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pic/form-star-0.png */ "./client/src/Components/RnR/pic/form-star-0.png");
/* harmony import */ var _pic_single_star_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pic/single-star.png */ "./client/src/Components/RnR/pic/single-star.png");




const ImageModal = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/*! import() */ "client_src_Components_RnR_Reviews_ImageModal_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./ImageModal.jsx */ "./client/src/Components/RnR/Reviews/ImageModal.jsx"))); // import ImageModal from "./ImageModal.jsx";



function ReviewModal(props) {
  const [radio, setRadio] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Yes");
  const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [reviewBody, setReviewBody] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [nickname, setNickname] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isValidInput, setIsValidInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isValidEmail, setIsValidEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    overall: [[0, 0, 0, 0, 0], 0],
    size: [[0, 0, 0, 0, 0], 0],
    width: [[0, 0, 0, 0, 0], 0],
    comfort: [[0, 0, 0, 0, 0], 0],
    quality: [[0, 0, 0, 0, 0], 0],
    length: [[0, 0, 0, 0, 0], 0],
    fit: [[0, 0, 0, 0, 0], 0]
  });
  let stars = [1, 2, 3, 4, 5];
  let radioOptions = ["Yes", "No"];
  let starsObj = {
    overall: ["", "Poor", "Fair", "Average", "Good", "Great"],
    size: ["", "A size too small", "½ a size too small", "Perfect", "½ a size too big", "A size too wide"],
    width: ["", "Too narrow", "Slightly narrow", "Perfect", "Slightly wide", "Too wide"],
    comfort: ["", "Uncomfortable", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"],
    quality: ["", "Poor", "Below average", "What I expected", "Pretty great", "Perfect"],
    length: ["", "Runs Short", "Runs slightly short", "Perfect", "Runs slightly long", "Runs long"],
    fit: ["", "Runs tight", "Runs slightly tight", "Perfect", "Runs slightly long", "Runs long"]
  };

  function starChecker(e) {
    let index = e.currentTarget.id.slice(0, 1);
    let item = e.currentTarget.id.slice(1);
    index == "0" ? setState(el => ({ ...el,
      [item]: [[1, 0, 0, 0, 0], 1]
    })) : null;
    index == "1" ? setState(el => ({ ...el,
      [item]: [[1, 1, 0, 0, 0], 2]
    })) : null;
    index == "2" ? setState(el => ({ ...el,
      [item]: [[1, 1, 1, 0, 0], 3]
    })) : null;
    index == "3" ? setState(el => ({ ...el,
      [item]: [[1, 1, 1, 1, 0], 4]
    })) : null;
    index == "4" ? setState(el => ({ ...el,
      [item]: [[1, 1, 1, 1, 1], 5]
    })) : null;
  }

  function onChangeRadio(e) {
    setRadio(e.target.id);
  }

  function onChangeText(e) {
    if (e.target.name === "formSummary") {
      setSummary(e.target.value);
    } else if (e.target.name === "formReviewBody") {
      setReviewBody(e.target.value);
    } else if (e.target.name === "formNickname") {
      setNickname(e.target.value);
    } else if (e.target.name === "formEmail") {
      setEmail(e.target.value);
    } else {
      console.log('err');
    }
  }

  function addImage(url) {
    setImages(image => [...image, url]);
  }

  function inputValidation() {
    if (state.overall[1] > 0 && reviewBody.length >= 50 && nickname.length > 0 && email.length > 0) {
      return true;
    }

    return false;
  }

  ;

  function emailValidation(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function reviewSubmit() {
    if (!inputValidation()) {
      setIsValidInput(false);
    } else if (!emailValidation(email)) {
      setIsValidEmail(false);
      setIsValidInput(true);
    } else {
      setIsValidEmail(true);
      setIsValidInput(true);
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/reviews', {
        product_id: props.product.id,
        rating: state.overall[1],
        summary: summary,
        body: reviewBody,
        recommend: radio === "Yes",
        name: nickname,
        email: email,
        photos: images,
        characteristics: {} //Needs to be added to review form

      }).then(() => {
        props.closeModal();
        alert("You've added a review!!");
      }).catch(err => {
        console.log('failed');
      });
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-form-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    react: true,
    mailto: "",
    className: "review-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-form-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "review-form-title"
  }, "Write Your Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "review-form-subtitle"
  }, `About the ${props.product.name}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "star-checker"
  }, "Overall rating(*required)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "star-checker-graph"
  }, Object.keys(starsObj).map(key => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "characteristic"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "clickable-stars"
    }, stars.map((e, i) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        onClick: starChecker,
        src: state[key][0][Number(i)] == '1' ? _pic_single_star_png__WEBPACK_IMPORTED_MODULE_4__["default"] : _pic_form_star_0_png__WEBPACK_IMPORTED_MODULE_3__["default"],
        id: i + key,
        draggable: "false"
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "star-checker-meaning"
    }, starsObj[key][state[key][1]]));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "recommend-checker"
  }, "Do you recommend this product?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "radio-checker-graph"
  }, radioOptions.map(element => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      checked: element === radio,
      onChange: onChangeRadio,
      id: element
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        marginTop: '0rem'
      }
    }, element));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "review-summary"
  }, "Review summary", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    type: "text",
    placeholder: "Example: Best purchase ever!",
    className: "form-review-summary",
    maxLength: "60",
    rows: "2",
    style: {
      width: "70%"
    },
    onChange: onChangeText,
    name: "formSummary",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "form-review-body-container"
  }, "Review body(*required)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    type: "text",
    placeholder: "Why did you like the product or not?",
    className: "form-review-body",
    maxLength: "1000",
    rows: "5",
    style: {
      width: "70%"
    },
    onChange: onChangeText,
    name: "formReviewBody",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontSize: "small",
      marginTop: "-1em",
      marginBottom: "20px"
    }
  }, reviewBody.length < 50 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, `Minimum required characters left: ${50 - reviewBody.length}`) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Minimum reached"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "image-button",
    style: {
      marginTop: "-3em"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImageModal, {
    addImage: addImage,
    images: images
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "review-form-nickname"
  }, "What is your nickname?(*required)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    placeholder: "Example: jackson11!",
    maxLength: "60",
    style: {
      width: "50%"
    },
    onChange: onChangeText,
    name: "formNickname",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      fontSize: "small",
      marginTop: "-0.1em"
    }
  }, "For privacy reasons, do not use your full name or email address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "review-form-email",
    style: {
      marginBottom: "3em"
    }
  }, "Your email(*required)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    placeholder: "Example: jackson11@email.com",
    maxLength: "60",
    onChange: onChangeText,
    name: "formEmail",
    style: {
      width: "50%"
    },
    required: true
  }), !isValidInput ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "inputValidation"
  }, "Please fill in all required of the fields(minimum review characters: 50)") : "", !isValidEmail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "emailValidation"
  }, "Email is invalid!") : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "formBTN-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "submit-review-button",
    onClick: reviewSubmit
  }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "cancel-review-button",
    onClick: props.closeModal
  }, "Close")))));
}

/***/ }),

/***/ "./client/src/Components/RnR/pic/form-star-0.png":
/*!*******************************************************!*\
  !*** ./client/src/Components/RnR/pic/form-star-0.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "06922fab83f821d5146840f951d5a57b.png");

/***/ })

}]);
//# sourceMappingURL=client_src_Components_RnR_Reviews_ReviewModal_jsx.bundle.js.map