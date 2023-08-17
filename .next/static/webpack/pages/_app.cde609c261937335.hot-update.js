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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/avatar.png */ \"./public/images/avatar.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const [typedText, setTypedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [additionalTypedText, setAdditionalTypedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // New state for additional text\n    const targetText = \"Xiao Zhong\";\n    const additionalText = \"Software, Hardware\";\n    const typeSpeed = 100; // Speed in milliseconds per character\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex < targetText.length) {\n                setTypedText(targetText.substring(0, currentIndex + 1));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, typeSpeed);\n        return ()=>clearInterval(interval);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex < additionalText.length) {\n                setAdditionalTypedText(additionalText.substring(0, currentIndex + 1));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, typeSpeed);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _public_images_avatar_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Xiao Zhong\",\n                width: 100,\n                height: 100\n            }, void 0, false, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/comps/Header.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h4\",\n                children: typedText\n            }, void 0, false, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/comps/Header.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h6\",\n                children: additionalTypedText\n            }, void 0, false, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/comps/Header.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/comps/Header.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"o34DQtjAM4SsnVwOb7PIU5XWuAU=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSDtBQUNqQjtBQUNrQjtBQUVsQyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1MscUJBQXFCQyx1QkFBdUIsR0FBR1YsK0NBQVFBLENBQUMsS0FBSyxnQ0FBZ0M7SUFDcEcsTUFBTVcsYUFBYTtJQUNuQixNQUFNQyxpQkFBaUI7SUFDdkIsTUFBTUMsWUFBWSxLQUFLLHNDQUFzQztJQUU3RFosZ0RBQVNBLENBQUM7UUFDUixJQUFJYSxlQUFlO1FBRW5CLE1BQU1DLFdBQVdDLFlBQVk7WUFDM0IsSUFBSUYsZUFBZUgsV0FBV00sTUFBTSxFQUFFO2dCQUNwQ1QsYUFBYUcsV0FBV08sU0FBUyxDQUFDLEdBQUdKLGVBQWU7Z0JBQ3BEQTtZQUNGLE9BQU87Z0JBQ0xLLGNBQWNKO1lBQ2hCO1FBQ0YsR0FBR0Y7UUFFSCxPQUFPLElBQU1NLGNBQWNKO0lBQzdCLEdBQUcsRUFBRTtJQUVMZCxnREFBU0EsQ0FBQztRQUNSLElBQUlhLGVBQWU7UUFFbkIsTUFBTUMsV0FBV0MsWUFBWTtZQUMzQixJQUFJRixlQUFlRixlQUFlSyxNQUFNLEVBQUU7Z0JBQ3hDUCx1QkFBdUJFLGVBQWVNLFNBQVMsQ0FBQyxHQUFHSixlQUFlO2dCQUNsRUE7WUFDRixPQUFPO2dCQUNMSyxjQUFjSjtZQUNoQjtRQUNGLEdBQUdGO1FBRUgsT0FBTyxJQUFNTSxjQUFjSjtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2IsOENBQUdBOzswQkFDRiw4REFBQ0UsbURBQUtBO2dCQUFDZ0IsS0FBS2YsaUVBQU1BO2dCQUFFZ0IsS0FBSTtnQkFBYUMsT0FBTztnQkFBS0MsUUFBUTs7Ozs7OzBCQUN6RCw4REFBQ3BCLHFEQUFVQTtnQkFBQ3FCLFNBQVE7MEJBQU1qQjs7Ozs7OzBCQUMxQiw4REFBQ0oscURBQVVBO2dCQUFDcUIsU0FBUTswQkFBTWY7Ozs7Ozs7Ozs7OztBQUdoQztHQTVDd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBzL0hlYWRlci5qcz9iN2NkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYXZhdGFyIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL2F2YXRhci5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbdHlwZWRUZXh0LCBzZXRUeXBlZFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthZGRpdGlvbmFsVHlwZWRUZXh0LCBzZXRBZGRpdGlvbmFsVHlwZWRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBOZXcgc3RhdGUgZm9yIGFkZGl0aW9uYWwgdGV4dFxuICBjb25zdCB0YXJnZXRUZXh0ID0gXCJYaWFvIFpob25nXCI7XG4gIGNvbnN0IGFkZGl0aW9uYWxUZXh0ID0gXCJTb2Z0d2FyZSwgSGFyZHdhcmVcIjtcbiAgY29uc3QgdHlwZVNwZWVkID0gMTAwOyAvLyBTcGVlZCBpbiBtaWxsaXNlY29uZHMgcGVyIGNoYXJhY3RlclxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50SW5kZXggPCB0YXJnZXRUZXh0Lmxlbmd0aCkge1xuICAgICAgICBzZXRUeXBlZFRleHQodGFyZ2V0VGV4dC5zdWJzdHJpbmcoMCwgY3VycmVudEluZGV4ICsgMSkpO1xuICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0sIHR5cGVTcGVlZCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgYWRkaXRpb25hbFRleHQubGVuZ3RoKSB7XG4gICAgICAgIHNldEFkZGl0aW9uYWxUeXBlZFRleHQoYWRkaXRpb25hbFRleHQuc3Vic3RyaW5nKDAsIGN1cnJlbnRJbmRleCArIDEpKTtcbiAgICAgICAgY3VycmVudEluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cbiAgICB9LCB0eXBlU3BlZWQpO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEltYWdlIHNyYz17YXZhdGFyfSBhbHQ9XCJYaWFvIFpob25nXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57dHlwZWRUZXh0fTwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPnthZGRpdGlvbmFsVHlwZWRUZXh0fTwvVHlwb2dyYXBoeT5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiVHlwb2dyYXBoeSIsIkltYWdlIiwiYXZhdGFyIiwiSGVhZGVyIiwidHlwZWRUZXh0Iiwic2V0VHlwZWRUZXh0IiwiYWRkaXRpb25hbFR5cGVkVGV4dCIsInNldEFkZGl0aW9uYWxUeXBlZFRleHQiLCJ0YXJnZXRUZXh0IiwiYWRkaXRpb25hbFRleHQiLCJ0eXBlU3BlZWQiLCJjdXJyZW50SW5kZXgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY2xlYXJJbnRlcnZhbCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/Header.js\n"));

/***/ })

});