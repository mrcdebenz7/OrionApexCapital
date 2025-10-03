/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CookieConsent.js":
/*!*************************************!*\
  !*** ./components/CookieConsent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CookieConsent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction CookieConsent() {\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) return;\n        const v = localStorage.getItem(\"consent_analytics\");\n        if (!v) setVisible(true);\n    }, []);\n    if (!visible) return null;\n    const accept = ()=>{\n        localStorage.setItem(\"consent_analytics\", \"granted\");\n        setVisible(false);\n    };\n    const decline = ()=>{\n        localStorage.setItem(\"consent_analytics\", \"denied\");\n        setVisible(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        role: \"dialog\",\n        \"aria-live\": \"polite\",\n        className: \"fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-xl w-[92%]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card bg-navy-900/90 backdrop-blur border-white/20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm text-slate-200\",\n                    children: \"We use minimal analytics to improve the site. Consent is optional.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\danme\\\\GitHub Repos\\\\OrionApexCapital\\\\components\\\\CookieConsent.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-3 flex gap-3 justify-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: decline,\n                            className: \"btn btn-secondary text-sm\",\n                            children: \"Decline\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\danme\\\\GitHub Repos\\\\OrionApexCapital\\\\components\\\\CookieConsent.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: accept,\n                            className: \"btn btn-primary text-sm\",\n                            children: \"Accept\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\danme\\\\GitHub Repos\\\\OrionApexCapital\\\\components\\\\CookieConsent.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\danme\\\\GitHub Repos\\\\OrionApexCapital\\\\components\\\\CookieConsent.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\danme\\\\GitHub Repos\\\\OrionApexCapital\\\\components\\\\CookieConsent.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\danme\\\\GitHub Repos\\\\OrionApexCapital\\\\components\\\\CookieConsent.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvb2tpZUNvbnNlbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTdCLFNBQVNFO0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJLElBQWtCLEVBQWE7UUFDbkMsTUFBTUssSUFBSUMsYUFBYUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQ0YsR0FBR0QsV0FBVztJQUNyQixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNELFNBQVMsT0FBTztJQUVyQixNQUFNSyxTQUFTO1FBQ2JGLGFBQWFHLE9BQU8sQ0FBQyxxQkFBcUI7UUFDMUNMLFdBQVc7SUFDYjtJQUNBLE1BQU1NLFVBQVU7UUFDZEosYUFBYUcsT0FBTyxDQUFDLHFCQUFxQjtRQUMxQ0wsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLE1BQUs7UUFBU0MsYUFBVTtRQUFTQyxXQUFVO2tCQUM5Qyw0RUFBQ0g7WUFBSUcsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFFRCxXQUFVOzhCQUF5Qjs7Ozs7OzhCQUd0Qyw4REFBQ0g7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBT0MsU0FBU1A7NEJBQVNJLFdBQVU7c0NBQTRCOzs7Ozs7c0NBQ2hFLDhEQUFDRTs0QkFBT0MsU0FBU1Q7NEJBQVFNLFdBQVU7c0NBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RSIsInNvdXJjZXMiOlsid2VicGFjazovL29yaW9uLWFwZXgtY2FwaXRhbC8uL2NvbXBvbmVudHMvQ29va2llQ29uc2VudC5qcz81YTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb29raWVDb25zZW50KCkge1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG4gICAgY29uc3QgdiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25zZW50X2FuYWx5dGljcycpO1xyXG4gICAgaWYgKCF2KSBzZXRWaXNpYmxlKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCF2aXNpYmxlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgYWNjZXB0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnNlbnRfYW5hbHl0aWNzJywgJ2dyYW50ZWQnKTtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgZGVjbGluZSA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb25zZW50X2FuYWx5dGljcycsICdkZW5pZWQnKTtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHotNTAgbWF4LXcteGwgdy1bOTIlXVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctbmF2eS05MDAvOTAgYmFja2Ryb3AtYmx1ciBib3JkZXItd2hpdGUvMjBcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICBXZSB1c2UgbWluaW1hbCBhbmFseXRpY3MgdG8gaW1wcm92ZSB0aGUgc2l0ZS4gQ29uc2VudCBpcyBvcHRpb25hbC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGZsZXggZ2FwLTMganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVjbGluZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgdGV4dC1zbVwiPkRlY2xpbmU8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWNjZXB0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgdGV4dC1zbVwiPkFjY2VwdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb29raWVDb25zZW50IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ2IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFjY2VwdCIsInNldEl0ZW0iLCJkZWNsaW5lIiwiZGl2Iiwicm9sZSIsImFyaWEtbGl2ZSIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CookieConsent.js\n");

/***/ }),

/***/ "./lib/analytics.js":
/*!**************************!*\
  !*** ./lib/analytics.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   track: () => (/* binding */ track)\n/* harmony export */ });\nfunction track(event, params = {}) {\n    if (true) return;\n    // Hook to GA4 or Plausible; defaults to console\n    if (window.gtag) {\n        window.gtag(\"event\", event, params);\n    } else {\n        console.debug(\"[analytics]\", event, params);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYW5hbHl0aWNzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxNQUFNQyxLQUFLLEVBQUVDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLElBQUksSUFBNkIsRUFBRTtJQUVuQyxnREFBZ0Q7SUFDaEQsSUFBSUMsT0FBT0MsSUFBSSxFQUFFO1FBQ2ZELE9BQU9DLElBQUksQ0FBQyxTQUFTSCxPQUFPQztJQUM5QixPQUFPO1FBQ0xHLFFBQVFDLEtBQUssQ0FBQyxlQUFlTCxPQUFPQztJQUN0QztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3Jpb24tYXBleC1jYXBpdGFsLy4vbGliL2FuYWx5dGljcy5qcz80Y2RiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0cmFjayhldmVudCwgcGFyYW1zID0ge30pIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xyXG5cclxuICAvLyBIb29rIHRvIEdBNCBvciBQbGF1c2libGU7IGRlZmF1bHRzIHRvIGNvbnNvbGVcclxuICBpZiAod2luZG93Lmd0YWcpIHtcclxuICAgIHdpbmRvdy5ndGFnKFwiZXZlbnRcIiwgZXZlbnQsIHBhcmFtcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJbYW5hbHl0aWNzXVwiLCBldmVudCwgcGFyYW1zKTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJ0cmFjayIsImV2ZW50IiwicGFyYW1zIiwid2luZG93IiwiZ3RhZyIsImNvbnNvbGUiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/analytics.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/analytics */ \"./lib/analytics.js\");\n/* harmony import */ var _components_CookieConsent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CookieConsent */ \"./components/CookieConsent.js\");\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const consent = localStorage.getItem(\"consent_analytics\");\n        if (consent === \"granted\") {\n            (0,_lib_analytics__WEBPACK_IMPORTED_MODULE_3__.track)(\"page_view\", {\n                path: window.location.pathname\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\danme\\\\GitHub Repos\\\\OrionApexCapital\\\\pages\\\\_app.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CookieConsent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\danme\\\\GitHub Repos\\\\OrionApexCapital\\\\pages\\\\_app.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDSTtBQUNNO0FBQ2U7QUFFeEMsU0FBU0csSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsREwsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxVQUFVQyxhQUFhQyxPQUFPLENBQUM7UUFDckMsSUFBSUYsWUFBWSxXQUFXO1lBQ3pCTCxxREFBS0EsQ0FBQyxhQUFhO2dCQUFFUSxNQUFNQyxPQUFPQyxRQUFRLENBQUNDLFFBQVE7WUFBQztRQUN0RDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFPOzswQkFDTCw4REFBQ1I7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ0gsaUVBQWFBOzs7Ozs7O0FBRWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3Jpb24tYXBleC1jYXBpdGFsLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRyYWNrIH0gZnJvbSBcIkAvbGliL2FuYWx5dGljc1wiO1xuaW1wb3J0IENvb2tpZUNvbnNlbnQgZnJvbSBcIkAvY29tcG9uZW50cy9Db29raWVDb25zZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbnNlbnRfYW5hbHl0aWNzJyk7XG4gICAgaWYgKGNvbnNlbnQgPT09ICdncmFudGVkJykge1xuICAgICAgdHJhY2soXCJwYWdlX3ZpZXdcIiwgeyBwYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDw+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDxDb29raWVDb25zZW50IC8+XG4gIDwvPjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ0cmFjayIsIkNvb2tpZUNvbnNlbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb25zZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhdGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();