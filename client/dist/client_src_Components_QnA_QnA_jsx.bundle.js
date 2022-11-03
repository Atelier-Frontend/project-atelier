"use strict";
(self["webpackChunkproject_atelier"] = self["webpackChunkproject_atelier"] || []).push([["client_src_Components_QnA_QnA_jsx"],{

/***/ "./client/src/Components/QnA/AddQuestion.jsx":
/*!***************************************************!*\
  !*** ./client/src/Components/QnA/AddQuestion.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModalQuestion_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalQuestion.jsx */ "./client/src/Components/QnA/ModalQuestion.jsx");




class AddQuestion extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
    this.props.getQList(this.props.product.id);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "addQuestion"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "addQuestionBT",
      onClick: this.showModal.bind(this)
    }, 'ADD A QUESTION +'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.state.showModal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ModalQuestion_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      product: this.props.product,
      closeModal: this.closeModal.bind(this)
    }) : null));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddQuestion);

/***/ }),

/***/ "./client/src/Components/QnA/AnswerPhotos.jsx":
/*!****************************************************!*\
  !*** ./client/src/Components/QnA/AnswerPhotos.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FullSizeAnswerPhoto_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FullSizeAnswerPhoto.jsx */ "./client/src/Components/QnA/FullSizeAnswerPhoto.jsx");




class AnswerPhotos extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props), this.state = {
      enlarged: false,
      imageURL: ""
    };
  }

  zoomInImage(e) {
    this.setState({
      imageURL: e.target.src,
      enlarged: true
    });
  }

  zoomOutImage() {
    this.setState({
      enlarged: false
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.props.photos.map(photo => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: photo.url,
        alt: "photo",
        key: photo.url,
        className: "thumbnail-photo",
        style: {
          width: "60px",
          height: "60px",
          marginBottom: "1rem"
        },
        onClick: this.zoomInImage.bind(this)
      });
    }), this.state.enlarged ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FullSizeAnswerPhoto_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      zoomOutImage: this.zoomOutImage.bind(this),
      imageURL: this.state.imageURL
    }) : null);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerPhotos);

/***/ }),

/***/ "./client/src/Components/QnA/AnswersList.jsx":
/*!***************************************************!*\
  !*** ./client/src/Components/QnA/AnswersList.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IndividualAnswer_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndividualAnswer.jsx */ "./client/src/Components/QnA/IndividualAnswer.jsx");




class AnswersList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 2,
      answers: [],
      question_id: this.props.question.question_id
    };
  }

  componentDidMount(props) {
    this.moreQuestionsState(this.props.question);
    this.getAnswersList(this.props.question.question_id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.question.answers !== prevProps.question.answers) {
      this.getAnswersList(this.state.question_id);
    }
  }

  getAnswersList(question_id) {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/qa/questions/:question_id/answers`, {
      params: {
        question_id
      }
    }).then(response => {
      this.setState({
        answers: response.data.results
      });
    }).catch(err => {
      console.log('failed to get answers list');
    });
  }

  moreAnswersHandler(e) {
    this.state[e.target.id] ? this.setState({
      [e.target.id]: false,
      a: 2
    }) : this.setState({
      [e.target.id]: true,
      a: this.state.answers.length
    });
  }

  moreQuestionsState(questionObj) {
    this.setState({
      [questionObj.question_id]: false
    });
  }

  sortAnswers(a, b) {
    return a.helpfulness < b.helpfulness ? 1 : -1;
  }

  sortSeller(arr) {
    let arr1 = [];
    let arr2 = [];
    arr.map(e => {
      e.answerer_name === 'Seller' ? arr1.push(e) : arr2.push(e);
    });
    return arr1.concat(arr2);
  }

  render() {
    let answers = this.state.answers;
    answers = this.sortSeller(answers.sort(this.sortAnswers));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "scrollableAnswersList"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "answer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "letterA"
    }, 'A: '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IndividualAnswer_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      answers: answers,
      a: this.state.a,
      question_id: this.state.question_id,
      getAnswersList: this.getAnswersList.bind(this)
    })), answers.length > 2 ? this.state[this.props.question.question_id] === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      id: this.props.question.question_id,
      onClick: this.moreAnswersHandler.bind(this),
      className: "foldAnswers"
    }, 'ᐯ LOAD MORE ANSWERS') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      id: this.props.question.question_id,
      onClick: this.moreAnswersHandler.bind(this),
      className: "foldAnswers"
    }, 'ᐱ COLLAPSE ANSWERS') : '');
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswersList);

/***/ }),

/***/ "./client/src/Components/QnA/FullSizeAnswerPhoto.jsx":
/*!***********************************************************!*\
  !*** ./client/src/Components/QnA/FullSizeAnswerPhoto.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


class FullSizeAnswerPhoto extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "full-size-image-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "full-size-image",
      src: this.props.imageURL,
      onClick: this.props.zoomOutImage.bind(this)
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullSizeAnswerPhoto);

/***/ }),

/***/ "./client/src/Components/QnA/ImageHandler.jsx":
/*!****************************************************!*\
  !*** ./client/src/Components/QnA/ImageHandler.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



class ImageHandler extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async handleFileRead(e) {
    if (e.target.files.length !== 0) {
      const file = event.target.files[0];
      const base64 = await this.convertBase64(file);
      await this.getPublicURL(base64);
    }
  }

  convertBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = error => {
        reject(error);
      };
    });
  }

  getPublicURL(b64) {
    axios__WEBPACK_IMPORTED_MODULE_1___default().post(`/image/upload`, {
      body: b64.split('base64,')[1]
    }).then(response => {
      this.props.addImageUrl(response.data.url);
    }).catch(err => {
      console.log('failed');
    });
  } //###this function can make a better looking button###
  // uploadImage() {
  //   document.getElementById('selectFile').click()
  // }


  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", {
      className: "answer-form-image-button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      id: "selectFile",
      type: "file",
      accept: "image/*",
      onChange: this.handleFileRead.bind(this)
    }), this.props.len === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, `You have select ${this.props.len} image(s)`)));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageHandler);

/***/ }),

/***/ "./client/src/Components/QnA/IndividualAnswer.jsx":
/*!********************************************************!*\
  !*** ./client/src/Components/QnA/IndividualAnswer.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnswerPhotos_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnswerPhotos.jsx */ "./client/src/Components/QnA/AnswerPhotos.jsx");




class IndividualAnswer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props), this.state = {
      AVoted: [],
      reported: []
    };
  }

  timeFormatting(date) {
    return new Date(date).toDateString().slice(4, 10) + ", " + new Date(date).toDateString().slice(11);
  }

  answerHelpfulness(e) {
    if (this.state.AVoted.includes(e.target.id)) {
      alert("You have voted for this answer!");
    } else {
      this.setState({
        AVoted: [...this.state.AVoted, e.target.id]
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default().put('/qa/answers/:answer_id/helpful', {
        answer_id: e.target.id
      }).then(() => {
        this.props.getAnswersList(this.props.question_id);
      }).catch(err => {
        console.log('failed');
      });
    }
  }

  reportAnswer(e) {
    if (this.state.reported.includes(e.target.id)) {
      alert("You have reported this answer.");
    } else {
      this.setState({
        reported: [...this.state.reported, e.target.id]
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default().put('/qa/answers/:answer_id/report', {
        answer_id: e.target.id
      }).then(() => {
        console.log('Answer reported');
      }).catch(err => {
        console.log('failed');
      });
    }
  }

  render() {
    let answers = this.props.answers;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "individual-answer"
    }, answers.slice(0, this.props.a).map(answer => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: answer.answer_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "answerBody"
    }, answer.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, answer.photos.length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AnswerPhotos_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      photos: answer.photos
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "container2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "Auser"
    }, `by ${answer.answerer_name}`), answer.answerer_name === 'Seller' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "Aseller"
    }, '- Seller') : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, ","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "Adate"
    }, `${this.timeFormatting(answer.date)}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "Adivider"
    }, " | "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "Ahelpful"
    }, " Helpful? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "AYes",
      id: answer.answer_id,
      onClick: this.answerHelpfulness.bind(this)
    }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "Ahelpfulness"
    }, `(${answer.helpfulness})`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "Adivider"
    }, " | "), this.state.reported.includes(JSON.stringify(answer.answer_id)) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "reported"
    }, " Reported ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "report",
      id: answer.answer_id,
      onClick: this.reportAnswer.bind(this)
    }, "Report")))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndividualAnswer);

/***/ }),

/***/ "./client/src/Components/QnA/ModalAnswer.jsx":
/*!***************************************************!*\
  !*** ./client/src/Components/QnA/ModalAnswer.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageHandler_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageHandler.jsx */ "./client/src/Components/QnA/ImageHandler.jsx");




class ModalAnswer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidInput: true,
      isValidEmail: true,
      YourAnswer: '',
      name: '',
      email: '',
      photos: []
    };
  }

  addImageUrl(photoURL) {
    this.setState({
      photos: [...this.state.photos, photoURL]
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValidInput() {
    if (this.state.YourAnswer.length > 0 && this.state.name.length > 0 && this.state.email.length > 0) {
      return true;
    }

    return false;
  }

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  submitForm() {
    if (!this.isValidInput()) {
      this.setState({
        isValidInput: false
      });
    } else if (!this.isValidEmail(this.state.email)) {
      this.setState({
        isValidEmail: false,
        isValidInput: true
      });
    } else {
      this.setState({
        isValidEmail: true,
        isValidInput: true
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/qa/questions/:question_id/answers', {
        question_id: this.props.currentQ.split('@@@$$$@@@')[0],
        body: {
          body: this.state.YourAnswer,
          name: this.state.name,
          email: this.state.email,
          photos: this.state.photos
        }
      }).then(() => {
        this.props.closeModal();
      }).catch(err => {
        console.log('failed');
      });
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
      react: true,
      mailto: "",
      className: "answer-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "formTitle"
    }, "Submit your Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "formSubtitle"
    }, `${this.props.product.name}: ${this.props.currentQ.split('@@@$$$@@@')[1]}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Your Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
      type: "text",
      placeholder: "Type your answer here...",
      name: "YourAnswer",
      maxLength: "1000",
      rows: "7",
      style: {
        marginBottom: '2rem'
      },
      onChange: this.onChange.bind(this),
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageHandler_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      addImageUrl: this.addImageUrl.bind(this),
      len: this.state.photos.length
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "What is your nickname?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      placeholder: "Example: jack543!",
      name: "name",
      maxLength: "60",
      style: {
        marginBottom: '2rem'
      },
      onChange: this.onChange.bind(this),
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Your email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      placeholder: "Example: jack@email.com",
      name: "email",
      maxLength: "60",
      onChange: this.onChange.bind(this),
      required: true
    }), !this.state.isValidInput ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "inputValidation"
    }, "Please fill in all of the fields") : "", !this.state.isValidEmail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "emailValidation"
    }, "Email is invalid!") : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "formBTN-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      onClick: this.submitForm.bind(this),
      className: "submitAnswerBTN"
    }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this.props.closeModal.bind(this),
      className: "cancelAnswerBTN"
    }, "Close")))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalAnswer);

/***/ }),

/***/ "./client/src/Components/QnA/ModalQuestion.jsx":
/*!*****************************************************!*\
  !*** ./client/src/Components/QnA/ModalQuestion.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



class ModalQuestion extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidEmail: true,
      isValidInput: true,
      YourQuestion: '',
      name: '',
      email: '',
      product_id: this.props.product.id
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValidInput() {
    if (this.state.YourQuestion.length > 0 && this.state.name.length > 0 && this.state.email.length > 0) {
      return true;
    }

    return false;
  }

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  submitForm() {
    if (!this.isValidInput()) {
      this.setState({
        isValidInput: false
      });
    } else if (!this.isValidEmail(this.state.email)) {
      this.setState({
        isValidEmail: false,
        isValidInput: true
      });
    } else {
      this.setState({
        isValidEmail: true,
        isValidInput: true
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/qa/questions', {
        body: this.state.YourQuestion,
        name: this.state.name,
        email: this.state.email,
        product_id: this.props.product.id
      }).then(() => {
        alert('You\'ve added a new question!');
        this.props.closeModal();
      }).catch(err => {
        console.log('failed');
      });
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
      react: true,
      mailto: "",
      className: "question-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "formTitle"
    }, "Ask Your Question"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "formSubtitle"
    }, `About the ${this.props.product.name}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Your Question"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
      type: "text",
      placeholder: "Type your question here...",
      name: "YourQuestion",
      maxLength: "1000",
      rows: "5",
      style: {
        marginBottom: '2rem'
      },
      onChange: this.onChange.bind(this),
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "What is your nickname?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      placeholder: "Example: jackson11!",
      name: "name",
      maxLength: "60",
      style: {
        marginBottom: '2rem'
      },
      onChange: this.onChange.bind(this),
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        marginTop: '-1.5rem',
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "italic",
        marginBottom: "2rem"
      }
    }, "For privacy reasons, do not use your full name or email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Your email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      placeholder: "Why did you like the product or not?",
      name: "email",
      maxLength: "60",
      onChange: this.onChange.bind(this),
      required: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        marginTop: '0.5rem',
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "italic"
      }
    }, "For authentication reasons, you will not be emailed"), !this.state.isValidInput ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "inputValidation"
    }, "Please fill in all of the fields") : "", !this.state.isValidEmail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "emailValidation"
    }, "Email is invalid!") : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "formBTN-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      onClick: this.submitForm.bind(this),
      className: "submitAnswerBTN"
    }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this.props.closeModal.bind(this),
      className: "cancelAnswerBTN"
    }, "Close")))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalQuestion);

/***/ }),

/***/ "./client/src/Components/QnA/MoreQuestions.jsx":
/*!*****************************************************!*\
  !*** ./client/src/Components/QnA/MoreQuestions.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



class MoreQuestions extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  moreQuestions() {
    this.props.questionClickHandler();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "foldQuestions"
    }, this.props.moreQuestionsClicked === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "foldQuestionsBT",
      onClick: this.moreQuestions.bind(this)
    }, 'MORE ANSWERED QUESTIONS') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "foldQuestionsBT",
      onClick: this.moreQuestions.bind(this)
    }, 'LESS ANSWERED QUESTIONS'));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreQuestions);

/***/ }),

/***/ "./client/src/Components/QnA/QnA.jsx":
/*!*******************************************!*\
  !*** ./client/src/Components/QnA/QnA.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar.jsx */ "./client/src/Components/QnA/SearchBar.jsx");
/* harmony import */ var _QuestionsList_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuestionsList.jsx */ "./client/src/Components/QnA/QuestionsList.jsx");
/* harmony import */ var _MoreQuestions_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MoreQuestions.jsx */ "./client/src/Components/QnA/MoreQuestions.jsx");
/* harmony import */ var _AddQuestion_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddQuestion.jsx */ "./client/src/Components/QnA/AddQuestion.jsx");







class QnA extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      initQuestions: [],
      answers: [],
      moreQuestionsClicked: false,
      term: ""
    };
  }

  componentDidMount(props) {
    this.getQuestionsList(this.props.products.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.products.id !== prevProps.products.id) {
      this.getQuestionsList(this.props.products.id);
    }
  }

  getQuestionsList(product_id) {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/qa/questions', {
      params: {
        product_id: product_id
      }
    }).then(response => {
      this.setState({
        questions: response.data.results,
        initQuestions: response.data.results,
        term: ""
      });
    }).catch(err => {
      console.log('failed to get questions list');
    });
  }

  questionClickHandler() {
    this.state.moreQuestionsClicked === false ? this.setState({
      moreQuestionsClicked: true
    }) : this.setState({
      moreQuestionsClicked: false
    });
  }

  filterQuestions(term) {
    let questions = this.state.initQuestions;
    let filteredQuestions = questions.filter(q => {
      return q.question_body.includes(term);
    });
    this.setState({
      questions: filteredQuestions,
      term: term
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: "widget-title"
    }, 'Questions & Answers'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchBar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      filterQuestions: this.filterQuestions.bind(this),
      getQList: this.getQuestionsList.bind(this),
      product: this.props.products
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QuestionsList_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      questions: this.state.questions,
      product: this.props.products,
      moreQuestionsClicked: this.state.moreQuestionsClicked,
      getQList: this.getQuestionsList.bind(this),
      term: this.state.term
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "containerRow"
    }, this.state.questions.length > 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MoreQuestions_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      moreQuestionsClicked: this.state.moreQuestionsClicked,
      questionClickHandler: this.questionClickHandler.bind(this)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddQuestion_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      product: this.props.products,
      getQList: this.getQuestionsList.bind(this)
    })));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QnA);

/***/ }),

/***/ "./client/src/Components/QnA/QuestionsList.jsx":
/*!*****************************************************!*\
  !*** ./client/src/Components/QnA/QuestionsList.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnswersList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnswersList.jsx */ "./client/src/Components/QnA/AnswersList.jsx");
/* harmony import */ var _ModalAnswer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalAnswer.jsx */ "./client/src/Components/QnA/ModalAnswer.jsx");





class QuestionsList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentQ: '',
      QVoted: []
    };
  }

  sortQuestions(a, b) {
    return a.question_helpfulness < b.question_helpfulness ? 1 : -1;
  }

  sortQuestions2(a, b) {
    return a.question_id < b.question_id ? 1 : -1;
  }

  questionHelpfulness(e) {
    if (this.state.QVoted.includes(e.target.id)) {
      alert("You have voted for this question!");
    } else {
      this.setState({
        QVoted: [...this.state.QVoted, e.target.id]
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default().put('/qa/questions/:question_id/helpful', {
        question_id: e.target.id
      }).then(() => {
        this.props.getQList(this.props.product.id);
      }).catch(err => {
        console.log('failed');
      });
    }
  }

  showModal(e) {
    this.setState({
      showModal: true,
      currentQ: e.target.id
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
    this.props.getQList(this.props.product.id);
  }

  textHighlight(value, keyWord) {
    if (value.indexOf(keyWord) !== -1 && keyWord !== '') {
      return value.replace(keyWord, `<font color="aero">${keyWord}</font>`);
    }

    return value;
  }

  render() {
    let questions = this.props.questions;
    questions.sort(this.sortQuestions2);
    questions.sort(this.sortQuestions);
    let q = this.props.moreQuestionsClicked === false ? 2 : this.props.questions.length;
    {
      if (questions.length === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, " ");
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "scrollableQuestionsList"
        }, questions.slice(0, q).map(question => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            key: question.question_id
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: "question"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
            className: "letterQ"
          }, "Q: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
            className: "questionBody",
            dangerouslySetInnerHTML: {
              __html: this.textHighlight(question.question_body, this.props.term)
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: "container1"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
            className: "helpful"
          }, " Helpful? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
            className: "Yes",
            id: question.question_id,
            onClick: this.questionHelpfulness.bind(this)
          }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
            className: "helpfulness"
          }, `(${question.question_helpfulness})`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
            className: "divider"
          }, " | "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
            className: "addAnswer",
            id: `${question.question_id}@@@$$$@@@${question.question_body}`,
            onClick: this.showModal.bind(this)
          }, "Add Answer"), this.state.showModal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ModalAnswer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            product: this.props.product,
            currentQ: this.state.currentQ,
            closeModal: this.closeModal.bind(this)
          }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AnswersList_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            question: question
          }));
        }));
      }
    }
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionsList);

/***/ }),

/***/ "./client/src/Components/QnA/SearchBar.jsx":
/*!*************************************************!*\
  !*** ./client/src/Components/QnA/SearchBar.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // import icon from "./Pics/magnifying-glass.png";

class SearchBar extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  questionSearch(e) {
    this.setState({
      term: e.target.value
    });

    if (e.target.value.length >= 3) {
      this.props.filterQuestions(e.target.value);
    } else {
      this.props.filterQuestions("");
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "answer-search-field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      placeholder: "Have a question? Search for answers…",
      style: {
        width: "50vw",
        height: "3vh"
      },
      onChange: this.questionSearch.bind(this),
      className: "search-input"
    }));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ })

}]);
//# sourceMappingURL=client_src_Components_QnA_QnA_jsx.bundle.js.map