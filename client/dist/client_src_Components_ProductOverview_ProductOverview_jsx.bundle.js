"use strict";
(self["webpackChunkproject_atelier"] = self["webpackChunkproject_atelier"] || []).push([["client_src_Components_ProductOverview_ProductOverview_jsx"],{

/***/ "./client/src/Components/ProductOverview/Cart/AddToCart.jsx":
/*!******************************************************************!*\
  !*** ./client/src/Components/ProductOverview/Cart/AddToCart.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QuantitySelector_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuantitySelector.jsx */ "./client/src/Components/ProductOverview/Cart/QuantitySelector.jsx");
/* harmony import */ var _SizeSelector_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SizeSelector.jsx */ "./client/src/Components/ProductOverview/Cart/SizeSelector.jsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");







class Cart extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      sizes: [],
      quantity: [],
      selectedSize: 0,
      reset: false
    };
    this.getQuantity = this.getQuantity.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.sendCart = this.sendCart.bind(this);
    this.favorite = this.favorite.bind(this);
  }

  componentDidMount() {
    this.getQuantity();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle !== prevProps.selectedStyle) {
      this.getQuantity();
    }

    ;
  }

  selectSize(size) {
    this.setState({
      selectedSize: size
    });
  }

  getQuantity() {
    var skus = this.props.styles[0].skus;
    var sizeArray = [];
    var quantityArray = [];

    for (var key in skus) {
      if (skus[key].quantity > 0) {
        sizeArray.push(skus[key].size);
        quantityArray.push(skus[key].quantity);
      }
    }

    ;
    this.setState({
      sizes: sizeArray,
      quantity: quantityArray
    });
  }

  sendCart() {
    if (document.getElementById('quantity-selector') === null) {
      document.getElementById('select-size').click();
      alert('Please select a size');
      return;
      ;
    }

    var size = document.getElementById('select-size');
    var chosenSize = size.options[size.selectedIndex].text;
    var chosenQuantity = document.getElementById('quantity-selector').value;
    var chosenProduct = document.getElementById('product-name').innerHTML;
    var chosenStyle = document.getElementById('style-name').innerHTML;
    alert(`You have added the following item to your bag: \n 
          Product: ${chosenProduct} \n
          Style: ${chosenStyle} \n
          Size: ${chosenSize} \n
          Quantity: ${chosenQuantity}`);
  }

  favorite(event) {
    event.preventDefault();
    this.props.favorite(this.props.product);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "product-btn-grp"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "selectors"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "size-selector"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SizeSelector_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sizes: this.state.sizes,
      quantity: this.state.quantity[0],
      selectSize: this.selectSize,
      styles: this.props.styles,
      reset: this.props.reset
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "quant-selector"
    }, this.state.quantity.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QuantitySelector_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      quantity: this.state.quantity,
      size: this.state.selectedSize,
      styles: this.props.styles
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "buy-buttons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "add-cart",
      onClick: this.sendCart
    }, "Add to Bag", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsPlusLg, {
      className: "bag-icon"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "add-to-style",
      "aria-label": "Add to Style",
      onClick: this.favorite
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaHeart, {
      className: "heart-icon"
    }))));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./client/src/Components/ProductOverview/Cart/QuantitySelector.jsx":
/*!*************************************************************************!*\
  !*** ./client/src/Components/ProductOverview/Cart/QuantitySelector.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



class QuantitySelector extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: [],
      disabled: true
    };
    this.handeChange = this.handleChange.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.enableDropDown = this.enableDropDown.bind(this);
  }

  componentDidMount() {
    this.setQuantity();
  }

  componentDidUpdate(prevProps) {
    if (this.props.quantity !== prevProps.quantity) {
      this.setQuantity();
    }

    ;

    if (this.props.size !== prevProps.size) {
      this.enableDropDown();
      this.setQuantity();
    }

    ;

    if (this.props.styles !== prevProps.styles) {
      this.setState({
        disabled: true
      });
    }

    ;
  }

  handleChange(event) {
    this.setState({
      selectValue: event.target.value
    });
  }

  setQuantity() {
    if (this.props.quantity[this.props.size] <= 15) {
      this.setState({
        quantity: this.props.quantity[this.props.size]
      });
    } else {
      this.setState({
        quantity: 15
      });
    }
  }

  enableDropDown() {
    this.setState({
      disabled: false
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "quantity"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, this.state.disabled === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      className: "quantity-dropdown",
      disabled: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      className: "quantity-option"
    }, "--")), this.state.disabled === false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      className: "quantity-dropdown",
      id: "quantity-selector"
    }, [...Array(this.state.quantity)].map((e, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      className: "quantity-option",
      key: i
    }, i + 1)))));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuantitySelector);

/***/ }),

/***/ "./client/src/Components/ProductOverview/Cart/SizeSelector.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/Components/ProductOverview/Cart/SizeSelector.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


class SizeSelector extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleSizes: [],
      selected: 'DEFAULT',
      styleChange: false,
      quantity: undefined
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      quantity: this.props.quantity
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.styles !== prevProps.styles) {
      this.setState({
        quantity: this.props.quantity,
        selected: 'DEFAULT',
        styleChange: true
      });
    }

    ;

    if (this.props.quantity !== prevProps.quantity) {
      this.setState({
        quantity: this.props.quantity,
        selected: 'DEFAULT',
        styleChange: true
      });
    }

    ;
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      selected: event.target.value
    });
    this.props.selectSize(event.target.value);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "size-select"
    }, (this.state.quantity > 0 || this.state.selected === 'DEFAULT') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      className: "size-dropdown",
      defaultValue: 'DEFAULT',
      onChange: this.handleChange,
      id: "select-size"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "DEFAULT",
      disabled: true,
      selected: this.state.selected === 'DEFAULT'
    }, "Select Size"), this.props.sizes.map((size, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: index,
      value: index
    }, size))), this.props.quantity === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "OUT OF STOCK"));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SizeSelector);

/***/ }),

/***/ "./client/src/Components/ProductOverview/ImageGallery.jsx":
/*!****************************************************************!*\
  !*** ./client/src/Components/ProductOverview/ImageGallery.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _white_circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white-circle.png */ "./client/src/Components/ProductOverview/white-circle.png");







class ImageGallery extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      current: 0,
      stylePhotos: [],
      expand: false
    };
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.expandImage = this.expandImage.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      length: this.props.selectedStyle.photos.length,
      stylePhotos: this.props.selectedStyle.photos
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle !== prevProps.selectedStyle) {
      this.setState({
        stylePhotos: this.props.selectedStyle.photos,
        length: this.props.selectedStyle.photos.length,
        current: 0,
        expand: false
      });
    }

    ;

    if (this.props.expand !== prevProps.expand) {
      this.setState({
        expand: this.props.expand
      });
    }

    ;
  }

  nextImage() {
    if (this.state.current >= 3 & this.state.expand) {
      document.getElementById('sidebar').scrollLeft += 32;
    } else if (this.state.current >= 3) {
      document.getElementById('sidebar').scrollTop += 90;
    }

    ;

    if (this.state.current === this.state.stylePhotos.length - 1) {
      this.setState({
        current: 0
      });
    } else {
      this.setState({
        current: this.state.current + 1
      });
    }

    ;
  }

  prevImage() {
    if (this.state.current < 7 & this.state.expand) {
      document.getElementById('sidebar').scrollLeft -= 32;
    } else if (this.state.current < 7) {
      document.getElementById('sidebar').scrollTop -= 90;
    }

    ;

    if (this.state.current === 0) {
      this.setState({
        current: this.state.stylePhotos.length - 1
      });
    } else {
      this.setState({
        current: this.state.current - 1
      });
    }

    ;
  }

  expandImage(event) {
    event.preventDefault();
    this.props.hideProductInfo();
  }

  onClick(event) {
    event.preventDefault();
    this.setState({
      current: Number(event.target.id)
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "image-gallery"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineExpand, {
      className: this.state.expand ? 'ex-button' : 'expand-button',
      onClick: this.expandImage
    }), this.state.current !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiArrowLeft, {
      className: this.state.expand ? 'ex-left-arrow' : 'left-arrow',
      onClick: this.prevImage
    }), this.state.current < this.state.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiArrowRight, {
      className: this.state.expand ? 'ex-right-arrow' : 'right-arrow',
      onClick: this.nextImage
    }), this.state.stylePhotos.map((style, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: index === this.state.current ? 'slide-active' : 'slide',
      key: index
    }, index === this.state.current && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: this.state.expand ? 'expand-image' : 'main-image',
      alt: "image in carousel",
      draggable: "false",
      key: index,
      fetchpriority: "high",
      src: style.url,
      onClick: this.expandImage
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: this.state.expand ? 'product-hidden' : 'sidebar-arrows'
    }, this.state.current !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoIosArrowUp, {
      className: "up-arrow",
      onClick: this.prevImage
    }), this.state.current < this.state.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoIosArrowDown, {
      className: "down-arrow",
      onClick: this.nextImage
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: this.state.expand ? 'transform-images' : 'sidebar-gallery',
      id: "sidebar"
    }, this.state.stylePhotos.map((style, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "slide",
      key: index
    }, this.state.expand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: index === this.state.current ? 'transform-image-highlight' : 'transformed-image',
      alt: "white circle icon",
      draggable: "false",
      id: index,
      src: _white_circle_png__WEBPACK_IMPORTED_MODULE_1__["default"],
      onClick: this.onClick
    }), this.state.expand === false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: index === this.state.current ? 'sidebar-highlight' : 'sidebar-image',
      alt: "image in side carousel",
      draggable: "false",
      id: index,
      src: style.thumbnail_url,
      onClick: this.onClick
    })))));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageGallery);

/***/ }),

/***/ "./client/src/Components/ProductOverview/ProductInfo/Price.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/Components/ProductOverview/ProductInfo/Price.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


class Price extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      original: '',
      onSale: false
    };
    this.checkSale = this.checkSale.bind(this);
  }

  componentDidMount() {
    this.checkSale();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle !== prevProps.selectedStyle) {
      this.checkSale();
    }

    ;
  }

  checkSale() {
    if (this.props.selectedStyle.sale_price === null) {
      this.setState({
        price: this.props.selectedStyle.original_price,
        onSale: false
      });
    } else {
      this.setState({
        price: this.props.selectedStyle.sale_price,
        original: this.props.selectedStyle.original_price,
        onSale: true
      });
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "price-container"
    }, this.state.onSale === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "price",
      style: {
        color: 'red',
        fontWeight: 'bold',
        marginRight: '10px',
        fontFamily: 'Arimo'
      }
    }, "$", this.state.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "discount-price"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("s", null, "$", this.state.original))), this.state.onSale === false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "price"
    }, "$", this.state.price)));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);

/***/ }),

/***/ "./client/src/Components/ProductOverview/ProductInfo/ProductInfo.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/Components/ProductOverview/ProductInfo/ProductInfo.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StarRating_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StarRating.jsx */ "./client/src/Components/ProductOverview/ProductInfo/StarRating.jsx");
/* harmony import */ var _Price_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Price.jsx */ "./client/src/Components/ProductOverview/ProductInfo/Price.jsx");





class ProductInfo extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      category: '',
      price: '',
      text: ''
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.product.id !== prevProps.product.id) {
      this.getProducts();
    }

    if (this.props.expanded !== prevProps.expanded) {
      this.setState({
        expandedStatus: this.props.expanded
      });
    }
  }

  getProducts() {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/products/product_id', {
      params: {
        id: this.props.product.id
      }
    }).then(response => {
      this.setState({
        id: response.data.id,
        name: response.data.name,
        category: response.data.category.toUpperCase(),
        price: response.data.default_price,
        text: response.data.description
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "product-info"
    }, this.state.id > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: this.props.theme ? 'dark-star-rating' : 'star-rating'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StarRating_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "product-info",
      id: this.state.id,
      darkTheme: this.props.theme
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "category"
    }, this.state.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "product-name",
      id: "product-name"
    }, this.state.name), Object.keys(this.props.selectedStyle).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "product-price"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Price_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      selectedStyle: this.props.selectedStyle
    })));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInfo);

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

/***/ "./client/src/Components/ProductOverview/ProductOverview.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/Components/ProductOverview/ProductOverview.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductInfo_ProductInfo_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductInfo/ProductInfo.jsx */ "./client/src/Components/ProductOverview/ProductInfo/ProductInfo.jsx");
/* harmony import */ var _Cart_AddToCart_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cart/AddToCart.jsx */ "./client/src/Components/ProductOverview/Cart/AddToCart.jsx");
/* harmony import */ var _StyleSelector_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyleSelector.jsx */ "./client/src/Components/ProductOverview/StyleSelector.jsx");
/* harmony import */ var _ImageGallery_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageGallery.jsx */ "./client/src/Components/ProductOverview/ImageGallery.jsx");
/* harmony import */ var _ProductSummary_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductSummary.jsx */ "./client/src/Components/ProductOverview/ProductSummary.jsx");








class ProductOverview extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      styles: [],
      selectedStyle: {},
      imageStyle: '',
      sizeReset: false,
      expand: false
    };
    this.selectImage = this.selectImage.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.hideProductInfo = this.hideProductInfo.bind(this);
  }

  componentDidMount() {
    this.getStyles();
  }

  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      this.getStyles();
    }
  }

  getStyles() {
    var currentProduct = this.props.products;
    this.setState({
      product: this.props.products
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/products/product_id/styles', {
      params: {
        id: this.props.products.id
      }
    }).then(response => {
      this.setState({
        styles: response.data.results,
        selectedStyle: response.data.results[0],
        imageStyle: response.data.results[0].photos[0].url
      });
    }).catch(err => {
      console.log(err);
    });
  }

  selectImage(style) {
    var selectStyle = this.state.styles.filter(currentStyle => {
      return currentStyle.name === style;
    });
    this.setState({
      imageStyle: selectStyle[0].photos[0].url,
      selectedStyle: selectStyle[0],
      sizeReset: true
    });
  }

  hideProductInfo() {
    if (this.state.expand === false) {
      this.setState({
        expand: true
      });
    }

    ;

    if (this.state.expand === true) {
      this.setState({
        expand: false
      });
    }

    ;
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "product"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "left-column"
    }, this.state.styles.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageGallery_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      styles: this.state.styles,
      selectedStyle: this.state.selectedStyle,
      image: this.state.imageStyle,
      expand: this.state.expand,
      hideProductInfo: this.hideProductInfo,
      selectImage: this.selectImage
    }), Object.keys(this.state.product).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductSummary_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      slogan: this.state.product.slogan,
      description: this.state.product.description
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: this.state.expand ? 'product-hidden' : 'right-column'
    }, Object.keys(this.state.product).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductInfo_ProductInfo_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      product: this.state.product,
      selectedStyle: this.state.selectedStyle,
      styleName: this.state.selectedStyle.name,
      expanded: this.state.expand,
      theme: this.props.darkTheme
    }), this.state.styles.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StyleSelector_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      styles: this.state.styles,
      selectedStyle: this.state.selectedStyle,
      selectImage: this.selectImage
    }), this.state.styles.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Cart_AddToCart_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      product: this.state.product,
      styles: this.state.styles,
      selectedStyle: this.state.selectedStyle,
      reset: this.state.sizeReset,
      favorite: this.props.favorite
    })));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductOverview);

/***/ }),

/***/ "./client/src/Components/ProductOverview/ProductSummary.jsx":
/*!******************************************************************!*\
  !*** ./client/src/Components/ProductOverview/ProductSummary.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductSummary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ProductSummary(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "product-summary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slogan"
  }, props.slogan), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "prod-description"
  }, props.description));
}
;

/***/ }),

/***/ "./client/src/Components/ProductOverview/StyleSelector.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/Components/ProductOverview/StyleSelector.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");



class StyleSelector extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      name: ''
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.selectedStyle.name.toUpperCase(),
      item: this.props.styles[0].name
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle.name !== prevProps.selectedStyle.name) {
      this.setState({
        name: this.props.selectedStyle.name.toUpperCase()
      });
    }

    if (this.props.styles !== prevProps.styles) {
      this.setState({
        item: this.props.styles[0].name
      });
    }
  }

  onClick(event) {
    event.preventDefault();
    this.setState({
      item: event.target.id
    });
    this.props.selectImage(event.target.id);
    return false;
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "style-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "style-info"
    }, "STYLE >"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "style-name",
      id: "style-name"
    }, this.state.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "style-gallery"
    }, this.props.styles.map((style, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "style-container-row",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillCheckCircle, {
      className: this.state.item === style.name ? 'style-tag' : 'style-tag-hidden'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: this.state.item === style.name ? 'selected' : 'style-image',
      alt: "image in style gallery",
      draggable: "false",
      key: index,
      id: style.name,
      src: style.photos[0].thumbnail_url,
      onClick: this.onClick
    })))));
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleSelector);

/***/ }),

/***/ "./client/src/Components/ProductOverview/white-circle.png":
/*!****************************************************************!*\
  !*** ./client/src/Components/ProductOverview/white-circle.png ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e30e021130676bf05296df0b27df5146.png");

/***/ })

}]);
//# sourceMappingURL=client_src_Components_ProductOverview_ProductOverview_jsx.bundle.js.map