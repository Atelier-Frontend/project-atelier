"use strict";
(self["webpackChunkproject_atelier"] = self["webpackChunkproject_atelier"] || []).push([["client_src_Components_RnR_RnR_jsx"],{

/***/ "./client/src/Components/RnR/Ratings/Ratings.jsx":
/*!*******************************************************!*\
  !*** ./client/src/Components/RnR/Ratings/Ratings.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ratings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Score_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Score.jsx */ "./client/src/Components/RnR/Ratings/Score.jsx");
/* harmony import */ var _Stars_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stars.jsx */ "./client/src/Components/RnR/Ratings/Stars.jsx");
/* harmony import */ var _Recommend_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Recommend.jsx */ "./client/src/Components/RnR/Ratings/Recommend.jsx");
/* harmony import */ var _RatingsChart_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RatingsChart.jsx */ "./client/src/Components/RnR/Ratings/RatingsChart.jsx");
/* harmony import */ var _RatingsBreakdown_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RatingsBreakdown.jsx */ "./client/src/Components/RnR/Ratings/RatingsBreakdown.jsx");






function Ratings(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Ratings-Sider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Score-Star"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Score_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    score: props.score
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Stars_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    score: props.score,
    darkTheme: props.darkTheme
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Recommend_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    recommended: props.recommended
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RatingsChart_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    chart: props.chart
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RatingsBreakdown_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    characteristics: props.ratings.characteristics
  })));
}

/***/ }),

/***/ "./client/src/Components/RnR/Ratings/RatingsBreakdown.jsx":
/*!****************************************************************!*\
  !*** ./client/src/Components/RnR/Ratings/RatingsBreakdown.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RatingsBreakdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ScaleBar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScaleBar.jsx */ "./client/src/Components/RnR/Ratings/ScaleBar.jsx");


function RatingsBreakdown(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.characteristics && Object.keys(props.characteristics).map(c => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: props.characteristics[c].id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontSize: "medium",
        marginTop: "30px",
        marginBottom: "5px"
      }
    }, `${c}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScaleBar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      characteristic: [c, props.characteristics[c]]
    }));
  }));
}

/***/ }),

/***/ "./client/src/Components/RnR/Ratings/RatingsChart.jsx":
/*!************************************************************!*\
  !*** ./client/src/Components/RnR/Ratings/RatingsChart.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RatingsChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function RatingsChart(props) {
  let total = props.chart.reduce((a, b) => Number(a) + Number(b), 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.chart.map((rating, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "rating-bar",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        textDecorationLine: "underline"
      }
    }, `${5 - index}stars `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "rating-bar-bars"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "rating-barBkg"
<<<<<<< HEAD
    }, `${(100 * (rating / total)).toFixed(0)}%`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
=======
    }, `${100 * (rating / total).toFixed(2)}%`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
>>>>>>> RelatedStars
      className: "rating-barBkg-green",
      style: {
        '--rating_percent': rating / total
      }
    })));
  }));
}

/***/ }),

/***/ "./client/src/Components/RnR/Ratings/Recommend.jsx":
/*!*********************************************************!*\
  !*** ./client/src/Components/RnR/Ratings/Recommend.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Recommend)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Recommend(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "recommended-percentage"
  }, `${props.recommended}% of reviews recommend this product`));
}

/***/ }),

/***/ "./client/src/Components/RnR/Ratings/ScaleBar.jsx":
/*!********************************************************!*\
  !*** ./client/src/Components/RnR/Ratings/ScaleBar.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScaleBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ScaleBar(props) {
  let cha = props.characteristic;
  let percentage = props.characteristic[1].value / 5;

  if (cha[0] === "Size") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "scaleBar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barBkg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barDescription"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Too small"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Perfect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Too large")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "score-pointer",
      style: {
        '--percent': percentage
      }
    }, "\u25B2"));
  } else if (cha[0] === "Fit") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barBkg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barDescription"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Too small"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Perfect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Too large")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "score-pointer",
      style: {
        '--percent': percentage
      }
    }, "\u25B2"));
  } else if (cha[0] === "Quality") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barBkg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barDescription"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Poor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Great")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "score-pointer",
      style: {
        '--percent': percentage
      }
    }, "\u25B2"));
  } else if (cha[0] === "Comfort") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barBkg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barDescription"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Poor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Great")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "score-pointer",
      style: {
        '--percent': percentage
      }
    }, "\u25B2"));
  } else if (cha[0] === "Length") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barBkg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barDescription"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Too small"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Perfect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Too large")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "score-pointer",
      style: {
        '--percent': percentage
      }
    }, "\u25B2"));
  } else if (cha[0] === "Width") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barBkg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barDescription"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Too narrow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Perfect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Too wide")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "score-pointer",
      style: {
        '--percent': percentage
      }
    }, "\u25B2"));
  } else {
    return null;
  }
}

/***/ }),

/***/ "./client/src/Components/RnR/Ratings/Score.jsx":
/*!*****************************************************!*\
  !*** ./client/src/Components/RnR/Ratings/Score.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Score)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Score(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, props.score));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/AddReview.jsx":
/*!*********************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/AddReview.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddReview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ReviewModal_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewModal.jsx */ "./client/src/Components/RnR/Reviews/ReviewModal.jsx");



function AddReview(props) {
  const [showReviewModal, setShowReviewModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(props => {
    setShowReviewModal(!true);
  }, [props]);

  function addReview() {
    setShowReviewModal(true);
  }

  function closeModal() {
    setShowReviewModal(false);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: addReview,
    className: "add-review-btn"
  }, "ADD A REVIEW +"), showReviewModal === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewModal_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    product: props.product,
    closeModal: closeModal
  }) : null);
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/ButtonRow.jsx":
/*!*********************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/ButtonRow.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _MoreReviews_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoreReviews.jsx */ "./client/src/Components/RnR/Reviews/MoreReviews.jsx");
/* harmony import */ var _AddReview_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddReview.jsx */ "./client/src/Components/RnR/Reviews/AddReview.jsx");



function ButtonRow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Review-Button-Row"
  }, props.result.length > 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MoreReviews_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    moreReviewsClickHandler: props.moreReviewsClickHandler,
    reviewsCount: props.reviewsCount,
    moreclicked: props.moreclicked
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddReview_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product: props.product
  })));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/Dropdown.jsx":
/*!********************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/Dropdown.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Dropdown(props) {
  const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('relevant');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setDisplay('relevant');
  }, [props.product_id]);

  function handleClick(e) {
    setDisplay(e.target.value);
    props.dropdownHandler(e.target.value);
  }

  let options = ["relevant", "helpful", "newest"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    onChange: handleClick,
    className: "review-dropdown-menu"
  }, options.map(n => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: n,
      selected: n === display,
      key: n
    }, n);
  })));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/ImageModal.jsx":
/*!**********************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/ImageModal.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function ImageModal(props) {
  async function handleImageUpload(e) {
    if (e.target.files.length !== 0) {
      const file = event.target.files[0];
      const base64 = await convertBase64(file);
      await getPublicURL(base64);
    }
  }

  function convertBase64(file) {
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

  function getPublicURL(b64) {
    axios__WEBPACK_IMPORTED_MODULE_1___default().post(`/image/upload`, {
      body: b64.split('base64,')[1]
    }).then(response => {
      props.addImage(response.data.url);
    }).catch(err => {
      console.log('failed');
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.images.length >= 5 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "selectFile",
    type: "file",
    accept: "image/*",
    onChange: handleImageUpload
<<<<<<< HEAD
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.images.map(img => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: img,
      alt: "photo",
      key: img,
      className: "form-thumbnail-photo",
      loading: "lazy"
    });
  })), props.images.length === 5 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "form-image-validation"
  }, "You have reached your image upload limit") : null));
=======
  }), props.images.len === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      fontSize: "small",
      marginTop: "-0em"
    }
  }, `You have select ${props.images.length} image(s)`)));
>>>>>>> RelatedStars
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/Date.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/Date.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Date(props) {
  function timeFormatting(date) {
    const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[Number(date.slice(5, 7))] + " " + date.slice(8, 10) + ", " + date.slice(0, 4);
  }

  let formattedDate = timeFormatting(props.date);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, formattedDate));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/FullSizePhoto.jsx":
/*!******************************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/FullSizePhoto.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FullSizePhoto)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function FullSizePhoto(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "full-size-image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "full-size-image",
    src: props.imageURL,
<<<<<<< HEAD
    onClick: props.zoomOutImage,
    loading: "lazy",
    fetchpriority: "low"
=======
    onClick: props.zoomOutImage
>>>>>>> RelatedStars
  }));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/Helpfulness.jsx":
/*!****************************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/Helpfulness.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helpfulness)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



function Helpfulness(props) {
  const [voted, setVoted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function voteReview(e) {
    if (voted === true) {
      alert("You have voted this review.");
    } else {
      setVoted(true);
      axios__WEBPACK_IMPORTED_MODULE_1___default().put('/reviews/:review_id/helpful', {
        review_id: e.target.id
      }).then(() => {
<<<<<<< HEAD
        props.getReviews();
=======
        console.log('Review voted');
>>>>>>> RelatedStars
      }).catch(err => {
        console.log('failed');
      });
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Review-Helpful"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      marginRight: "3px"
    }
  }, "Helpful?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    onClick: voteReview,
    className: "Review-Helpful-Vote",
    style: {
      textDecorationLine: 'underline'
    },
    id: props.review.review_id
  }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, `(${props.vote})`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      marginLeft: "5px",
      marginRight: "0px"
    }
  }, " | ")));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/IndividualRecommend.jsx":
/*!************************************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/IndividualRecommend.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndividualRecommend)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function IndividualRecommend() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, `✅ | recommend this product`)));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/IndividualReview.jsx":
/*!*********************************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/IndividualReview.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndividualReview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _IndividualStars_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndividualStars.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/IndividualStars.jsx");
/* harmony import */ var _User_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/User.jsx");
/* harmony import */ var _Date_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Date.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/Date.jsx");
/* harmony import */ var _ReviewBody_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReviewBody.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/ReviewBody.jsx");
/* harmony import */ var _IndividualRecommend_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IndividualRecommend.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/IndividualRecommend.jsx");
/* harmony import */ var _SellerResponse_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SellerResponse.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/SellerResponse.jsx");
/* harmony import */ var _Helpfulness_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Helpfulness.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/Helpfulness.jsx");
/* harmony import */ var _Report_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Report.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/Report.jsx");
/* harmony import */ var _ReviewSummary_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReviewSummary.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/ReviewSummary.jsx");
/* harmony import */ var _ReviewPhotos_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ReviewPhotos.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/ReviewPhotos.jsx");











function IndividualReview(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "individul-review-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Individul-Review-Header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IndividualStars_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    star: props.review.rating
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "User-Date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_User_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: props.review.reviewer_name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Date_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: props.review.date
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewSummary_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    summary: props.review.summary
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewBody_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
<<<<<<< HEAD
    body: props.review.body,
    term: props.term
=======
    body: props.review.body
>>>>>>> RelatedStars
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewPhotos_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
    photos: props.review.photos
  }), props.review.recommend && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IndividualRecommend_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null), props.review.response && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SellerResponse_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Helpfulness-Report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Helpfulness_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    vote: props.review.helpfulness,
<<<<<<< HEAD
    review: props.review,
    getReviews: props.getReviews
=======
    review: props.review
>>>>>>> RelatedStars
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Report_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    review: props.review
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    style: {
      color: "grey",
      backgroundColor: "grey",
      height: "0.5px",
<<<<<<< HEAD
      width: "99%",
      textAlign: "left",
      marginLeft: "0px"
=======
      width: "620px",
      textAlign: "left"
>>>>>>> RelatedStars
    }
  }));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/IndividualStars.jsx":
/*!********************************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/IndividualStars.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndividualStars)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _pic_single_star_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pic/single-star.png */ "./client/src/Components/RnR/pic/single-star.png");


function IndividualStars(props) {
  let array = [];

  for (let i = 0; i < props.star; i++) {
    array.push(0);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: "100px"
    }
  }, array.map((element, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: _pic_single_star_png__WEBPACK_IMPORTED_MODULE_1__["default"],
      style: {
        width: "20px",
        height: "20px",
        marginTop: "15px"
      },
      alt: "individual review star",
      key: index,
      draggable: "false"
    });
  }));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/Report.jsx":
/*!***********************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/Report.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Report)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



function Report(props) {
  const [reported, setReported] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function reportReview(e) {
    if (reported === true) {
      alert("You have reported this review.");
    } else {
      setReported(true);
      axios__WEBPACK_IMPORTED_MODULE_1___default().put('/reviews/:review_id/report', {
        review_id: e.target.id
      }).then(() => {
        console.log('Review reported');
      }).catch(err => {
        console.log('failed');
      });
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Review-Report"
  }, reported ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    onClick: reportReview
  }, "Reported") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    onClick: reportReview,
    style: {
      textDecorationLine: 'underline'
    },
    id: props.review.review_id
  }, "Report"));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/ReviewBody.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/ReviewBody.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewBody)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ReviewBody(props) {
<<<<<<< HEAD
  function textHighlight(value, keyWord) {
    if (value.indexOf(keyWord) !== -1 && keyWord !== '') {
      return value.replace(keyWord, `<font color="aero">${keyWord}</font>`);
    }

    return value;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: textHighlight(props.body, props.term)
    }
  })));
=======
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.body)));
>>>>>>> RelatedStars
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/ReviewPhotos.jsx":
/*!*****************************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/ReviewPhotos.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewPhotos)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FullSizePhoto_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullSizePhoto.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/FullSizePhoto.jsx");



function ReviewPhotos(props) {
  const [enlarged, setEnlarged] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [imageURL, setImageURL] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  function zoomInImage(e) {
    setImageURL(e.target.src);
    setEnlarged(true);
  }

  function zoomOutImage() {
    setEnlarged(false);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.photos.map(photo => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: photo.url,
      alt: "photo",
      key: photo.url,
      className: "thumbnail-photo",
      style: {
        width: "60px",
        height: "60px",
        objectFit: "cover"
      },
      onClick: zoomInImage,
<<<<<<< HEAD
      draggable: "false",
      loading: "lazy",
      fetchpriority: "low"
=======
      draggable: "false"
>>>>>>> RelatedStars
    });
  }), enlarged ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FullSizePhoto_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    zoomOutImage: zoomOutImage,
    imageURL: imageURL
  }) : null);
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/ReviewSummary.jsx":
/*!******************************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/ReviewSummary.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewSummary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ReviewSummary(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, props.summary)));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/SellerResponse.jsx":
/*!*******************************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/SellerResponse.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SellerResponse)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function SellerResponse(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, props.response)));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/IndividualReview/User.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/IndividualReview/User.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function User(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      marginRight: "3px"
    }
  }, `by ${props.user}  | `)));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/MoreReviews.jsx":
/*!***********************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/MoreReviews.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoreReviews)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function MoreReviews(props) {
  function reviewsClickHandler() {
    props.moreReviewsClickHandler();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.moreclicked === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: reviewsClickHandler,
    className: "more-reviews-btn"
  }, "MORE REVIEWS") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: reviewsClickHandler,
    className: "more-reviews-btn"
  }, "COLLAPSE REVIEWS"));
}

/***/ }),

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
/* harmony import */ var _ImageModal_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageModal.jsx */ "./client/src/Components/RnR/Reviews/ImageModal.jsx");
/* harmony import */ var _pic_form_star_0_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pic/form-star-0.png */ "./client/src/Components/RnR/pic/form-star-0.png");
/* harmony import */ var _pic_single_star_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pic/single-star.png */ "./client/src/Components/RnR/pic/single-star.png");






function ReviewModal(props) {
<<<<<<< HEAD
=======
  const [star, setStar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
>>>>>>> RelatedStars
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
<<<<<<< HEAD
    if (state.overall[1] > 0 && reviewBody.length >= 50 && nickname.length > 0 && email.length > 0) {
=======
    if (star > 0 && reviewBody.length >= 50 && nickname.length > 0 && email.length > 0) {
>>>>>>> RelatedStars
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
<<<<<<< HEAD
        rating: state.overall[1],
=======
        rating: star,
>>>>>>> RelatedStars
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageModal_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
<<<<<<< HEAD
  }, "Please fill in all required of the fields(minimum review characters: 50)") : "", !isValidEmail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
=======
  }, "Please fill in all required of the fields") : "", !isValidEmail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
>>>>>>> RelatedStars
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

/***/ "./client/src/Components/RnR/Reviews/Reviews.jsx":
/*!*******************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/Reviews.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reviews)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SearchingBar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchingBar.jsx */ "./client/src/Components/RnR/Reviews/SearchingBar.jsx");
/* harmony import */ var _Sorting_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sorting.jsx */ "./client/src/Components/RnR/Reviews/Sorting.jsx");
/* harmony import */ var _ReviewsList_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewsList.jsx */ "./client/src/Components/RnR/Reviews/ReviewsList.jsx");
/* harmony import */ var _ButtonRow_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonRow.jsx */ "./client/src/Components/RnR/Reviews/ButtonRow.jsx");





function Reviews(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchingBar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    filterReviews: props.filterReviews
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Sorting_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product_id: props.product.id,
    result: props.result,
    dropdownHandler: props.dropdownHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewsList_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    result: props.result,
    moreReviewsClickHandler: props.moreReviewsClickHandler,
    reviewsCount: props.reviewsCount,
<<<<<<< HEAD
    moreclicked: props.moreclicked,
    getReviews: props.getReviews,
    term: props.term
=======
    moreclicked: props.moreclicked
>>>>>>> RelatedStars
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ButtonRow_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    result: props.result,
    moreReviewsClickHandler: props.moreReviewsClickHandler,
    reviewsCount: props.reviewsCount,
    moreclicked: props.moreclicked,
    product: props.product
  })));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/ReviewsList.jsx":
/*!***********************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/ReviewsList.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewsList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _IndividualReview_IndividualReview_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndividualReview/IndividualReview.jsx */ "./client/src/Components/RnR/Reviews/IndividualReview/IndividualReview.jsx");


function ReviewsList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Reviews-List"
  }, props.result.slice(0, props.reviewsCount).map(review => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IndividualReview_IndividualReview_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: review.review_id,
<<<<<<< HEAD
    review: review,
    getReviews: props.getReviews,
    term: props.term
=======
    review: review
>>>>>>> RelatedStars
  }))));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/SearchingBar.jsx":
/*!************************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/SearchingBar.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchingBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _QnA_Pics_magnifying_glass_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../QnA/Pics/magnifying-glass.png */ "./client/src/Components/QnA/Pics/magnifying-glass.png");



function SearchingBar(props) {
  const [term, setTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  function reviewSearch(e) {
    setTerm(e.target.value);

    if (e.target.value.length >= 3) {
      props.filterReviews(e.target.value);
    } else {
      props.filterReviews("");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "reviews-search-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    placeholder: "Search customer reviews here…",
    style: {
      width: "50vw",
      height: "3vh"
    },
    onChange: reviewSearch,
    className: "search-input"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _QnA_Pics_magnifying_glass_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "search"
  }));
}

/***/ }),

/***/ "./client/src/Components/RnR/Reviews/Sorting.jsx":
/*!*******************************************************!*\
  !*** ./client/src/Components/RnR/Reviews/Sorting.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sorting)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Dropdown_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.jsx */ "./client/src/Components/RnR/Reviews/Dropdown.jsx");


function Sorting(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Sorting-Bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, `${props.result.length} reviews, sorted by  `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Dropdown_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    product_id: props.product_id,
    dropdownHandler: props.dropdownHandler
  })));
}

/***/ }),

/***/ "./client/src/Components/RnR/RnR.jsx":
/*!*******************************************!*\
  !*** ./client/src/Components/RnR/RnR.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RnR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Ratings_Ratings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ratings/Ratings.jsx */ "./client/src/Components/RnR/Ratings/Ratings.jsx");
/* harmony import */ var _Reviews_Reviews_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reviews/Reviews.jsx */ "./client/src/Components/RnR/Reviews/Reviews.jsx");





function RnR(props) {
  const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [ratings, setRatings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [recommended, setRecommended] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [chart, setChart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [reviewsCount, setReviewsCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  const [moreclicked, setMoreclicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [sortingKeyword, setSortingKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("relevant");
<<<<<<< HEAD
  const [term, setTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
=======
>>>>>>> RelatedStars
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getReviews(props);
    getRatings(props);
    setSortingKeyword("relevant");
  }, [props]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ratings.recommended && getRecommended(ratings.recommended);
    ratings.ratings && ratingsChart(ratings.ratings);
  }, [ratings]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getReviews(props);
  }, [sortingKeyword]);

  function dropdownHandler(k) {
    setSortingKeyword(k);
  }

  function getReviews() {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/reviews', {
      params: {
        id: props.products.id,
        sort: sortingKeyword
      }
    }).then(response => {
      setReviews(response.data);
      setResult(response.data.results);
    }).catch(err => {
      console.log(err);
    });
  }

  function getRatings(props) {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/reviews/meta', {
      params: {
        id: props.products.id
      }
    }).then(response => {
      setRatings(response.data);
      return getAverage(response.data.ratings);
    }).catch(err => {
      console.log(err);
    }).then(avg => {
      setScore(avg);
    });
  }

  function filterReviews(term) {
    let filteredReviews = reviews.results.filter(r => {
      return r.body.includes(term);
    });
    setResult(filteredReviews);
<<<<<<< HEAD
    setTerm(term);
=======
>>>>>>> RelatedStars
  }

  function getAverage(ratings) {
    var s = 0;
    var responses = 0;
    var average;

    for (var key in ratings) {
      s += ratings[key] * key;
      responses += Number(ratings[key]);
    }

    average = s / responses;
    return (Math.round(average * 4) / 4).toFixed(2);
  }

  function getRecommended(r) {
    var t = Number(r['true']);
    var f = Number(r['false']);
    var total = t + f;
    setRecommended(Math.floor(100 * t / total));
  }

  function ratingsChart(r) {
    var obj = {};

    for (let i = 1; i < 6; i++) {
      if (r[i] === undefined) {
        obj[i] = 0;
      } else {
        obj[i] = r[i];
      }
    }

    var ratingsArr = Object.values(obj).sort((a, b) => b - a);
    setChart(ratingsArr);
  }

  function sortByHelpfulness(a, b) {
    return a.helpfulness < b.helpfulness ? 1 : -1;
  }

  function sortByDate(a, b) {
    return a.date < b.date ? 1 : -1;
  }

  function sortByDefault(a, b) {
    var result = 0;
    result = a.date < b.date ? 1 : -1;
    result = a.helpfulness < b.helpfulness ? 1 : -1;
    return result;
  }

  function moreReviewsClickHandler() {
    if (moreclicked === false) {
      setMoreclicked(true);
      setReviewsCount(result.length);
    } else {
      setMoreclicked(false);
      setReviewsCount(2);
    }
  }

<<<<<<< HEAD
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "widget-title",
    id: "ratings-reviews"
=======
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "widget-title"
>>>>>>> RelatedStars
  }, "Ratings & Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Ratings-Reviews"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Ratings_Ratings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ratings: ratings,
    score: score,
    recommended: recommended,
    chart: chart,
    darkTheme: props.darkTheme
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Reviews_Reviews_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    reviews: reviews,
    result: result,
    dropdownHandler: dropdownHandler,
    product: props.products,
    moreReviewsClickHandler: moreReviewsClickHandler,
    reviewsCount: reviewsCount,
    moreclicked: moreclicked,
<<<<<<< HEAD
    filterReviews: filterReviews,
    getReviews: getReviews,
    term: term
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "back-to-top",
    onClick: scrollToTop
  }, "\u21E7 Back to top")));
=======
    filterReviews: filterReviews
  })));
>>>>>>> RelatedStars
}

/***/ }),

/***/ "./client/src/Components/QnA/Pics/magnifying-glass.png":
/*!*************************************************************!*\
  !*** ./client/src/Components/QnA/Pics/magnifying-glass.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cd344381db7c0ecbfcff7af0b5f26f42.png");

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

/***/ }),

/***/ "./client/src/Components/RnR/pic/single-star.png":
/*!*******************************************************!*\
  !*** ./client/src/Components/RnR/pic/single-star.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b88b68c36df3e076c81001ea1d473c99.png");

/***/ })

}]);
//# sourceMappingURL=client_src_Components_RnR_RnR_jsx.bundle.js.map