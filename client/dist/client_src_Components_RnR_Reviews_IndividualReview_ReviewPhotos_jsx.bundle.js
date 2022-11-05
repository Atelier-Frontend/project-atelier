"use strict";
(self["webpackChunkproject_atelier"] = self["webpackChunkproject_atelier"] || []).push([["client_src_Components_RnR_Reviews_IndividualReview_ReviewPhotos_jsx"],{

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
    onClick: props.zoomOutImage,
    loading: "lazy",
    fetchpriority: "low"
  }));
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
      draggable: "false",
      loading: "lazy",
      fetchpriority: "low"
    });
  }), enlarged ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FullSizePhoto_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    zoomOutImage: zoomOutImage,
    imageURL: imageURL
  }) : null);
}

/***/ })

}]);
//# sourceMappingURL=client_src_Components_RnR_Reviews_IndividualReview_ReviewPhotos_jsx.bundle.js.map