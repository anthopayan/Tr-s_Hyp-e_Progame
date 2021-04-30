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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Webpack_72H/./src/sass/style.scss?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\nconst PageDetail = (argument) => {\n  const preparePage = () => {\n    let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n\n    const fetchGame = (url, argument) => {\n      let finalURL = url + argument + \"?key=\" + \"9a4495b9baa0491689031e64e55f52c9\";\nconsole.log(argument);\n      fetch(`${finalURL}`)\n        .then((response) => response.json())\n        .then((response) => {\n          let { genres, stores, rating, ratings_count, publishers, tags, platforms, developers, name, released, description, website } = response;\n\n          let articleDOM = document.querySelector(\".page-detail .article\");\n          articleDOM.querySelector(\"h1.title\").innerHTML = name;\n          articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n          articleDOM.querySelector(\"p.description\").innerHTML = description;\n          articleDOM.querySelector(\"a.site\").innerHTML = website;\n          articleDOM.querySelector(\"p.rating\").innerHTML = rating;\n          articleDOM.querySelector(\"p.ratings_count\").innerHTML = ratings_count;\n          \n          articleDOM.querySelector(\"a.site\").href = website;\n          var listpublisher = [];\n          publishers.forEach((publisher) => {\n            listpublisher.push(publisher.name);\n          });\n          articleDOM.querySelector(\"p.publishers\").innerHTML = listpublisher.join(', ');\n          var listtag = [];\n          tags.forEach((tag) => {\n            listtag.push(tag.name);\n          });\n          articleDOM.querySelector(\"p.tags\").innerHTML = listtag.join(', ');\n          var listgenre = [];\n          genres.forEach((genre) => {\n            listgenre.push(genre.name);\n          });\n          articleDOM.querySelector(\"p.genres\").innerHTML = listgenre.join(', ');\n          var listdeveloper = [];\n          developers.forEach((developer) => {\n            listdeveloper.push(developer.name);\n          });\n          articleDOM.querySelector(\"p.developers\").innerHTML = listdeveloper.join(', ');\n          var listplatform = [];\n          platforms.forEach((platform) => {\n            listplatform.push(platform.platform.name);\n          });\n          articleDOM.querySelector(\"p.platforms\").innerHTML = listplatform.join(', ');\n          articleDOM.querySelector(\"a.stores\").innerHTML = stores[0].store.name;\n          articleDOM.querySelector(\"a.stores\").href = `http://${stores[0].store.domain}`;\n        });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"page-detail\">\n        <div class=\"article\">\n          <h1 class=\"title\"></h1>\n          <p class=\"description\"></p>\n          <p>Release Date:</p>\n          <p class=\"release-date\">Release date : <span></span></p>\n          <p>Publisher:</p>\n          <p class=\"publishers\"></p>\n          <p>Tags:</p>\n          <p class=\"tags\"></p>\n          <p>Genre:</p>\n          <p class=\"genres\"></p>\n          <p>Developer:</p>\n          <p class=\"developers\"></p>\n          <p>Platforms:</p>\n          <p class=\"platforms\"></p>\n          <p>Moyenne:</p>\n          <p class=\"rating\"></p>\n          <p>Votes:</p>\n          <p class=\"ratings_count\"></p>\n          <p>Site:</p>\n          <a class=\"site\"></a>\n          <p>BUY:</p>\n          <a class=\"stores\" ></a>\n        </div>\n      </section>\n    `;\n\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://Webpack_72H/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\nvar searchbtn = document.getElementById('searchbtn');\nvar searchuser = \"\";\n\ndocument.getElementById('searchbtn').addEventListener('click', () => {\n  console.log(\"click\")\n  var searchuser = document.getElementById('searchuser');\n  var argument = searchuser.value; \n  PageList(argument);\n});\n\n\nconst PageList = (argument) => {\n  \n    const preparePage = () => {\n      let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n      let articles = \"\";\n      let btn = \"\";\n   \n\n     \n      \n      const fetchList = (url, argument, count) => {\n        let finalURL = url;\n        if (argument) {\n          \n          finalURL = url + \"&search=\" + argument;\n        }\n       \n\n\n        \n        fetch(`${finalURL}`)\n          .then((response) => response.json())\n          .then((response) => {\n            response.results.forEach((article) => {\n              articles += `\n                    <div class=\"cardGame\">\n                      <h1>${article.name}</h1>\n                      <h2>${article.released}</h2>\n                      <a href = \"#game/${article.slug}\">${article.id}</a>\n                    </div>\n                  `;\n            });\n            if (count < 0);{\n            btn += `\n            <div>\n            <button id=\"showmore\">Show more</button>\n            </div>\n          `\n       \n        }\n \n\n            document.querySelector(\".page-list .articles\").innerHTML = articles;\n            document.getElementById(`showmore`).innerHTML = btn;\n          });\n      };\n \n      fetchList(\"https://api.rawg.io/api/games?key=\" + \"9a4495b9baa0491689031e64e55f52c9\", cleanedArgument);\n    };\n    \n\n  \n    const render = () => {\n      pageContent.innerHTML = `\n        <section class=\"page-list\">\n          <div class=\"articles\">...loading</div>\n        </section>\n      `\n  \n\n    \n      preparePage();\n    };\n  \n    render();\n  };\n  \n\n  \n\n//# sourceURL=webpack://Webpack_72H/./src/js/PageList.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\n\n\n\n\nconst routes = {\n    \"\": _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home,\n    \"pagelist\": _PageList_js__WEBPACK_IMPORTED_MODULE_2__.PageList,\n    \"game\": _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__.PageDetail,\n  };\n\n\n\n//# sourceURL=webpack://Webpack_72H/./src/js/routes.js?");

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
/******/ 			// no module.id needed
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