"use strict";
(self["webpackChunkproject_atelier"] = self["webpackChunkproject_atelier"] || []).push([["client_src_Components_RnR_Reviews_ImageModal_jsx"],{

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
}

/***/ })

}]);
//# sourceMappingURL=client_src_Components_RnR_Reviews_ImageModal_jsx.bundle.js.map