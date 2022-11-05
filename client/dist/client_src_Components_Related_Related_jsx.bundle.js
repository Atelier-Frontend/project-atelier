"use strict";
(self["webpackChunkproject_atelier"] = self["webpackChunkproject_atelier"] || []).push([["client_src_Components_Related_Related_jsx"],{

/***/ "./client/src/Components/Clicked.js":
/*!******************************************!*\
  !*** ./client/src/Components/Clicked.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



function clicked(comp, el) {
  var test = {
    widget: comp,
    element: el,
    time: JSON.stringify(Date.now())
  }; // axios.post('/interactions', test)
  // .then((response)=> {
  //   console.log(response, ' Response');
  // })
  // .catch((err)=> {
  //   console.log(err);
  // })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clicked);

/***/ }),

/***/ "./client/src/Components/ProductOverview/ProductInfo/StarRating.jsx":
/*!**************************************************************************!*\
  !*** ./client/src/Components/ProductOverview/ProductInfo/StarRating.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RnR_Ratings_Stars_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RnR/Ratings/Stars.jsx */ "./client/src/Components/RnR/Ratings/Stars.jsx");





class StarRating extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 5,
      rating: 0
    };
    this.getRatings = this.getRatings.bind(this);
    this.getAverage = this.getAverage.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  componentDidMount() {
    this.getRatings();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getRatings();
    }
  }

  getRatings() {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/reviews/meta', {
      params: {
        id: this.props.id
      }
    }).then(response => {
      var averageRating = this.getAverage(response.data.ratings);
      this.setState({
        rating: averageRating
      });
    }).catch(err => {
      console.log(err);
    });
  }

  getAverage(ratings) {
    var score = 0;
    var responses = 0;
    var average;

    for (var key in ratings) {
      score += ratings[key] * key;
      responses += Number(ratings[key]);
    }

    average = score / responses;
    return (Math.round(average * 4) / 4).toFixed(2);
  }

  scroll() {}

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "star-rating"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "stars"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RnR_Ratings_Stars_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      score: this.state.rating,
      darkTheme: this.props.darkTheme
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "reviews-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "http://localhost:3000",
      className: "stars"
    }, "Read all reviews")));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);

/***/ }),

/***/ "./client/src/Components/Related/Cards.jsx":
/*!*************************************************!*\
  !*** ./client/src/Components/Related/Cards.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Clicked_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Clicked.js */ "./client/src/Components/Clicked.js");
/* harmony import */ var _ProductOverview_ProductInfo_StarRating_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductOverview/ProductInfo/StarRating.jsx */ "./client/src/Components/ProductOverview/ProductInfo/StarRating.jsx");





class Cards extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      styles: ''
    };
    this.info = this.info.bind(this);
  }

  componentDidMount() {
    this.info();
  }

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.info();
    }
  }

  info() {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/products/product_id', {
      params: {
        id: this.props.item
      }
    }).then(data => {
      var test = data.data;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/products/product_id/styles', {
        params: {
          id: this.props.item
        }
      }).then(testing => {
        this.setState({
          product: test,
          styles: testing.data.results[0].photos[0].thumbnail_url
        });
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    // if (JSON.stringify(this.state.product) === '{}') {
    //   var update = console.log
    // } else {
    //   var update = this.props.update
    // }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside", {
      className: this.props.class
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      onClick: () => {
        (0,_Clicked_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props.class, 'cards');
        this.props.update(this.state.product);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: this.state.styles,
      width: "384",
      height: "192",
      alt: "header image"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, this.state.product.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.state.product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, this.state.product.default_price))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: () => {
        this.props.fun(this.state.product);
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "large-font text-center top-20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ion-icon", {
      name: "heart"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "red-bg"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "RelatedStars"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: this.props.theme ? 'dark-star-rating' : 'star-rating'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductOverview_ProductInfo_StarRating_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: this.props.item
    }))));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cards);

/***/ }),

/***/ "./client/src/Components/Related/Related.jsx":
/*!***************************************************!*\
  !*** ./client/src/Components/Related/Related.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Cards_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.jsx */ "./client/src/Components/Related/Cards.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");





class Related extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      count: 0,
      current: 0
    };
    this.list = this.list.bind(this);
    this.nextImages = this.nextImages.bind(this);
  }

  componentDidMount() {
    this.list();
  }

  componentDidUpdate(prevProps) {
    if (this.props.products.id !== prevProps.products.id) {
      this.list();
    }
  }

  nextImages(number) {
    document.getElementsByClassName('test')[0].scrollLeft += number;
  }

  list() {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get(`/products/product_id/related`, {
      params: {
        id: this.props.products.id
      }
    }).then(data => {
      var lists = [];
      var i = 0;

      while (i < data.data.length) {
        var elm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Cards_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: data.data[i],
          item: data.data[i],
          class: "Related",
          update: this.props.update,
          fun: this.props.fun
        });
        lists.push(elm);
        i += 1;
      }

      this.setState({
        product: lists,
        count: this.state.count + 1,
        current: this.state.count
      });
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
      "data-testid": "custom-element"
    }, "Related"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaAngleLeft, {
      className: "left-arrows",
      onClick: () => this.nextImages(-180)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "test"
    }, this.state.product), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaAngleRight, {
      className: "right-arrows",
      onClick: () => this.nextImages(180)
    })));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Related);

/***/ })

}]);
//# sourceMappingURL=client_src_Components_Related_Related_jsx.bundle.js.map