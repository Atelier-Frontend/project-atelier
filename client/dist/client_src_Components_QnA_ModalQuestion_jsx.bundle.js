"use strict";
(self["webpackChunkproject_atelier"] = self["webpackChunkproject_atelier"] || []).push([["client_src_Components_QnA_ModalQuestion_jsx"],{

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

/***/ })

}]);
//# sourceMappingURL=client_src_Components_QnA_ModalQuestion_jsx.bundle.js.map