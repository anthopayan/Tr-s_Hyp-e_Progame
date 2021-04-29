/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: coral;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Webpack_72H/./src/sass/style.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Webpack_72H/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nconst Home = (argument = \"\") => {\n    \n  };\n\n\n\n//# sourceURL=webpack://Webpack_72H/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\nconst PageDetail = (argument) => {\n  const preparePage = () => {\n    let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n\n    const fetchGame = (url, argument) => {\n      let finalURL = url + argument + \"?key=\" + \"c46c17fdf4224f7dae096c7c0f744534\";\nconsole.log(argument);\n      fetch(`${finalURL}`)\n        .then((response) => response.json())\n        .then((response) => {\n          let { genres, stores, rating, ratings_count, publishers, tags, platforms, developers, name, released, description, website } = response;\n\n          let articleDOM = document.querySelector(\".page-detail .article\");\n          articleDOM.querySelector(\"h1.title\").innerHTML = name;\n          articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n          articleDOM.querySelector(\"p.description\").innerHTML = description;\n          articleDOM.querySelector(\"a.site\").innerHTML = website;\n          articleDOM.querySelector(\"p.rating\").innerHTML = rating;\n          articleDOM.querySelector(\"p.ratings_count\").innerHTML = ratings_count;\n          \n          articleDOM.querySelector(\"a.site\").href = website;\n          var listpublisher = [];\n          publishers.forEach((publisher) => {\n            listpublisher.push(publisher.name);\n          });\n          articleDOM.querySelector(\"p.publishers\").innerHTML = listpublisher.join(', ');\n          var listtag = [];\n          tags.forEach((tag) => {\n            listtag.push(tag.name);\n          });\n          articleDOM.querySelector(\"p.tags\").innerHTML = listtag.join(', ');\n          var listgenre = [];\n          genres.forEach((genre) => {\n            listgenre.push(genre.name);\n          });\n          articleDOM.querySelector(\"p.genres\").innerHTML = listgenre.join(', ');\n          var listdeveloper = [];\n          developers.forEach((developer) => {\n            listdeveloper.push(developer.name);\n          });\n          articleDOM.querySelector(\"p.developers\").innerHTML = listdeveloper.join(', ');\n          var listplatform = [];\n          platforms.forEach((platform) => {\n            listplatform.push(platform.platform.name);\n          });\n          articleDOM.querySelector(\"p.platforms\").innerHTML = listplatform.join(', ');\n          var liststore = [];\n          stores.forEach((store) => {\n            liststore.push(`http://www.${store.store.domain}`);\n          });\n          articleDOM.querySelector(\"a.stores\").innerHTML = liststore.join(', ');\n        });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"page-detail\">\n        <div class=\"article\">\n          <h1 class=\"title\"></h1>\n          <p class=\"release-date\">Release date : <span></span></p>\n          <p class=\"description\"></p>\n          <p class=\"publishers\"></p>\n          <p class=\"tags\"></p>\n          <p class=\"genres\"></p>\n          <p class=\"developers\"></p>\n          <p class=\"platforms\"></p>\n          <p class=\"rating\"></p>\n          <p class=\"ratings_count\"></p>\n          <a class=\"site\"></a>\n          <a class=\"stores\" ></a>\n        </div>\n      </section>\n    `;\n\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://Webpack_72H/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\nvar searchbtn = document.getElementById('searchbtn');\nvar searchuser = \"\";\n\ndocument.getElementById('searchbtn').addEventListener('click', () => {\n  console.log(\"click\")\n  var searchuser = document.getElementById('searchuser');\n  argument = searchuser.value; \n  PageList(argument);\n});\n\n\nconst PageList = (argument) => {\n  \n    const preparePage = () => {\n      let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n      let articles = \"\";\n      let btn = \"\";\n   \n\n     \n      \n      const fetchList = (url, argument, count) => {\n        let finalURL = url;\n        if (argument) {\n          \n          finalURL = url + \"&search=\" + argument;\n        }\n       \n\n\n        \n        fetch(`${finalURL}`)\n          .then((response) => response.json())\n          .then((response) => {\n            response.results.forEach((article) => {\n              articles += `\n                    <div class=\"cardGame\">\n                      <h1>${article.name}</h1>\n                      <h2>${article.released}</h2>\n                      <a href = \"#pagedetail/${article.id}\">${article.id}</a>\n                    </div>\n                  `;\n            });\n            if (count < 0);{\n            btn += `\n            <div>\n            <button id=\"showmore\">Show more</button>\n            </div>\n          `\n       \n        }\n \n\n            document.querySelector(\".page-list .articles\").innerHTML = articles;\n            document.getElementById(`showmore`).innerHTML = btn;\n          });\n      };\n \n      fetchList(\"https://api.rawg.io/api/games?key=\" + \"c46c17fdf4224f7dae096c7c0f744534\", cleanedArgument);\n    };\n    \n\n  \n    const render = () => {\n      pageContent.innerHTML = `\n        <section class=\"page-list\">\n          <div class=\"articles\">...loading</div>\n        </section>\n      `\n  \n\n    \n      preparePage();\n    };\n  \n    render();\n  };\n  \n\n  \n\n//# sourceURL=webpack://Webpack_72H/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.js */ \"./src/js/Home.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes.js */ \"./src/js/routes.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\nlet pageArgument;\n\n\n\n\n\n\n\n\n\nconst setRoute = () => {\n  let path = window.location.hash.substring(1).split(\"/\");\n\n  pageArgument = path[1] || \"\";\n\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes_js__WEBPACK_IMPORTED_MODULE_2__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", () => setRoute());\nwindow.addEventListener(\"DOMContentLoaded\", () => setRoute());\n\n//# sourceURL=webpack://Webpack_72H/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\n\n\n\n\nconst routes = {\n    \"\": _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home,\n    \"pagelist\": _PageList_js__WEBPACK_IMPORTED_MODULE_2__.PageList,\n    \"pagedetail\": _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__.PageDetail,\n  };\n\n\n\n//# sourceURL=webpack://Webpack_72H/./src/js/routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;