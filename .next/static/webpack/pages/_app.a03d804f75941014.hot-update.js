"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./comps/Header.js":
/*!*************************!*\
  !*** ./comps/Header.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/avatar.png */ \"./public/images/avatar.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const [typedText, setTypedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const targetText = \"Xiao Zhong\";\n    const targetText1 = \"xxx , xxx , xxx\";\n    const typeSpeed = 100; // Speed in milliseconds per character\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex < targetText.length) {\n                setTypedText(targetText.substring(0, currentIndex + 1));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, typeSpeed);\n        return ()=>clearInterval(interval);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex < targetText1.length) {\n                setTypedText(targetText1.substring(0, currentIndex + 1));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, typeSpeed);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _public_images_avatar_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Xiao Zhong\",\n                width: 100,\n                height: 100\n            }, void 0, false, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/comps/Header.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h4\",\n                children: typedText\n            }, void 0, false, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/comps/Header.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/comps/Header.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"QLapb0/7ZMfR2gY7NxDvUvJJ0Dw=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSDtBQUNqQjtBQUNrQjtBQUVsQyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1TLGFBQWE7SUFDbkIsTUFBTUMsY0FBYztJQUNwQixNQUFNQyxZQUFZLEtBQUssc0NBQXNDO0lBRTdEVixnREFBU0EsQ0FBQztRQUNSLElBQUlXLGVBQWU7UUFFbkIsTUFBTUMsV0FBV0MsWUFBWTtZQUMzQixJQUFJRixlQUFlSCxXQUFXTSxNQUFNLEVBQUU7Z0JBQ3BDUCxhQUFhQyxXQUFXTyxTQUFTLENBQUMsR0FBR0osZUFBZTtnQkFDcERBO1lBQ0YsT0FBTztnQkFDTEssY0FBY0o7WUFDaEI7UUFDRixHQUFHRjtRQUVILE9BQU8sSUFBTU0sY0FBY0o7SUFDN0IsR0FBRyxFQUFFO0lBRUxaLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVcsZUFBZTtRQUVuQixNQUFNQyxXQUFXQyxZQUFZO1lBQzNCLElBQUlGLGVBQWVGLFlBQVlLLE1BQU0sRUFBRTtnQkFDckNQLGFBQWFFLFlBQVlNLFNBQVMsQ0FBQyxHQUFHSixlQUFlO2dCQUNyREE7WUFDRixPQUFPO2dCQUNMSyxjQUFjSjtZQUNoQjtRQUNGLEdBQUdGO1FBRUgsT0FBTyxJQUFNTSxjQUFjSjtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1gsOENBQUdBOzswQkFDRiw4REFBQ0UsbURBQUtBO2dCQUNKYyxLQUFLYixpRUFBTUE7Z0JBQ1hjLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Ozs7OzswQkFFViw4REFBQ2xCLHFEQUFVQTtnQkFBQ21CLFNBQVE7MEJBQU1mOzs7Ozs7Ozs7Ozs7QUFHaEM7R0EvQ3dCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9IZWFkZXIuanM/YjdjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGF2YXRhciBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9hdmF0YXIucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW3R5cGVkVGV4dCwgc2V0VHlwZWRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCB0YXJnZXRUZXh0ID0gXCJYaWFvIFpob25nXCI7XG4gIGNvbnN0IHRhcmdldFRleHQxID0gXCJ4eHggLCB4eHggLCB4eHhcIjtcbiAgY29uc3QgdHlwZVNwZWVkID0gMTAwOyAvLyBTcGVlZCBpbiBtaWxsaXNlY29uZHMgcGVyIGNoYXJhY3RlclxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPCB0YXJnZXRUZXh0Lmxlbmd0aCkge1xuICAgICAgICBzZXRUeXBlZFRleHQodGFyZ2V0VGV4dC5zdWJzdHJpbmcoMCwgY3VycmVudEluZGV4ICsgMSkpO1xuICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0sIHR5cGVTcGVlZCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgdGFyZ2V0VGV4dDEubGVuZ3RoKSB7XG4gICAgICAgIHNldFR5cGVkVGV4dCh0YXJnZXRUZXh0MS5zdWJzdHJpbmcoMCwgY3VycmVudEluZGV4ICsgMSkpO1xuICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0sIHR5cGVTcGVlZCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXthdmF0YXJ9IC8vIFBhdGggdG8gdGhlIGltYWdlIGluc2lkZSB0aGUgcHVibGljIGZvbGRlclxuICAgICAgICBhbHQ9XCJYaWFvIFpob25nXCJcbiAgICAgICAgd2lkdGg9ezEwMH0gLy8gU3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGltYWdlXG4gICAgICAgIGhlaWdodD17MTAwfSAvLyBTcGVjaWZ5IHRoZSBoZWlnaHQgb2YgdGhlIGltYWdlXG4gICAgICAvPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e3R5cGVkVGV4dH08L1R5cG9ncmFwaHk+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIlR5cG9ncmFwaHkiLCJJbWFnZSIsImF2YXRhciIsIkhlYWRlciIsInR5cGVkVGV4dCIsInNldFR5cGVkVGV4dCIsInRhcmdldFRleHQiLCJ0YXJnZXRUZXh0MSIsInR5cGVTcGVlZCIsImN1cnJlbnRJbmRleCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJjbGVhckludGVydmFsIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Header.js\n"));

/***/ })

});