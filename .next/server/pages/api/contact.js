"use strict";
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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(api)/./nodemailer.js":
/*!***********************!*\
  !*** ./nodemailer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mailOptions: () => (/* binding */ mailOptions),\n/* harmony export */   transporter: () => (/* binding */ transporter)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nconst email = process.env.EMAIL;\nconst pass = process.env.EMAIL_PASS;\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    service: \"gmail\",\n    auth: {\n        user: email,\n        pass\n    }\n});\n//sending myself email to know what's the content instead of let other people send from theirs\nconst mailOptions = {\n    from: email,\n    to: email\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlbWFpbGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0M7QUFFcEMsTUFBTUMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxLQUFLO0FBQy9CLE1BQU1DLE9BQU9ILFFBQVFDLEdBQUcsQ0FBQ0csVUFBVTtBQUU1QixNQUFNQyxjQUFjUCxpRUFBMEIsQ0FBQztJQUNwRFMsU0FBUztJQUNUQyxNQUFNO1FBQ0pDLE1BQU1WO1FBQ05JO0lBQ0Y7QUFDRixHQUFHO0FBRUgsOEZBQThGO0FBQ3ZGLE1BQU1PLGNBQWM7SUFDekJDLE1BQU1aO0lBQ05hLElBQUliO0FBQ04sRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUvLi9ub2RlbWFpbGVyLmpzP2MwZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcblxuY29uc3QgZW1haWwgPSBwcm9jZXNzLmVudi5FTUFJTDtcbmNvbnN0IHBhc3MgPSBwcm9jZXNzLmVudi5FTUFJTF9QQVNTO1xuXG5leHBvcnQgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gIHNlcnZpY2U6IFwiZ21haWxcIixcbiAgYXV0aDoge1xuICAgIHVzZXI6IGVtYWlsLFxuICAgIHBhc3MsXG4gIH0sXG59KTtcblxuLy9zZW5kaW5nIG15c2VsZiBlbWFpbCB0byBrbm93IHdoYXQncyB0aGUgY29udGVudCBpbnN0ZWFkIG9mIGxldCBvdGhlciBwZW9wbGUgc2VuZCBmcm9tIHRoZWlyc1xuZXhwb3J0IGNvbnN0IG1haWxPcHRpb25zID0ge1xuICBmcm9tOiBlbWFpbCxcbiAgdG86IGVtYWlsLFxufTtcbiJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwiZW1haWwiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUwiLCJwYXNzIiwiRU1BSUxfUEFTUyIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./nodemailer.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/contact.js":
/*!**********************************!*\
  !*** ./src/pages/api/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../nodemailer */ \"(api)/./nodemailer.js\");\n\n\nconst CONTACT_MESSAGE_FIELDS = {\n    name: \"Name\",\n    email: \"Email\",\n    message: \"Message\"\n};\nconst generateEmailContent = (data)=>{\n    const stringData = Object.entries(data).reduce((str, [key, val])=>str += `${CONTACT_MESSAGE_FIELDS[key]}: \\n${val} \\n \\n`, \"\");\n    const htmlData = Object.entries(data).reduce((str, [key, val])=>{\n        return str += `<h3 class=\"form-heading\" align=\"left\">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class=\"form-answer\" align=\"left\">${val}</p>`;\n    }, \"\");\n    return {\n        text: stringData,\n        html: `<!DOCTYPE html><html> <head> <title></title> <meta charset=\"utf-8\"/> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/> <style type=\"text/css\"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*=\"margin: 16px 0;\"]{margin: 0 !important;}</style> </head> <body style=\"margin: 0 !important; padding: 0 !important; background: #fff\"> <div style=\" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; \" ></div><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\"> <tr> <td bgcolor=\"#ffffff\" align=\"center\" style=\"padding: 10px 15px 30px 15px\" class=\"section-padding\" > <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 500px\" class=\"responsive-table\" > <tr> <td> <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"> <tr> <td> <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" > <tr> <td style=\" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; \" class=\"padding message-content\" > <h2>New Contact Message</h2> <div class=\"form-container\">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`\n    };\n};\nconst handler = async (req, res)=>{\n    //console is here to check if it works\n    console.log(req.body);\n    if (req.method === \"POST\") {\n        const data = req.body;\n        if (!data || !data.name || !data.email || !data.message) {\n            return res.status(400).send({\n                message: \"Bad request\"\n            });\n        }\n        try {\n            await _nodemailer__WEBPACK_IMPORTED_MODULE_1__.transporter.sendMail({\n                ..._nodemailer__WEBPACK_IMPORTED_MODULE_1__.mailOptions,\n                ...generateEmailContent(data),\n                subject: data.subject\n            });\n            return res.status(200).json({\n                success: true\n            });\n        } catch (err) {\n            console.log(err);\n            return res.status(400).json({\n                message: err.message\n            });\n        }\n    }\n    return res.status(400).json({\n        message: \"Bad request\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvbnRhY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QztBQUNzQjtBQUUvRCxNQUFNRyx5QkFBeUI7SUFDN0JDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxTQUFTO0FBQ1g7QUFFQSxNQUFNQyx1QkFBdUIsQ0FBQ0M7SUFDNUIsTUFBTUMsYUFBYUMsT0FBT0MsT0FBTyxDQUFDSCxNQUFNSSxNQUFNLENBQzVDLENBQUNDLEtBQUssQ0FBQ0MsS0FBS0MsSUFBSSxHQUNiRixPQUFPLENBQUMsRUFBRVYsc0JBQXNCLENBQUNXLElBQUksQ0FBQyxJQUFJLEVBQUVDLElBQUksTUFBTSxDQUFDLEVBQzFEO0lBRUYsTUFBTUMsV0FBV04sT0FBT0MsT0FBTyxDQUFDSCxNQUFNSSxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLQyxJQUFJO1FBQzNELE9BQVFGLE9BQU8sQ0FBQyxzQ0FBc0MsRUFBRVYsc0JBQXNCLENBQUNXLElBQUksQ0FBQyx5Q0FBeUMsRUFBRUMsSUFBSSxJQUFJLENBQUM7SUFDMUksR0FBRztJQUVILE9BQU87UUFDTEUsTUFBTVI7UUFDTlMsTUFBTSxDQUFDLDZnRUFBNmdFLEVBQUVGLFNBQVMsZ0dBQWdHLENBQUM7SUFDbG9FO0FBQ0Y7QUFFQSxNQUFNRyxVQUFVLE9BQU9DLEtBQUtDO0lBQzFCLHNDQUFzQztJQUN0Q0MsUUFBUUMsR0FBRyxDQUFDSCxJQUFJSSxJQUFJO0lBQ3BCLElBQUlKLElBQUlLLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU1qQixPQUFPWSxJQUFJSSxJQUFJO1FBQ3JCLElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ0EsS0FBS0osSUFBSSxJQUFJLENBQUNJLEtBQUtILEtBQUssSUFBSSxDQUFDRyxLQUFLRixPQUFPLEVBQUU7WUFDdkQsT0FBT2UsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRXJCLFNBQVM7WUFBYztRQUN2RDtRQUVBLElBQUk7WUFDRixNQUFNSixvREFBV0EsQ0FBQzBCLFFBQVEsQ0FBQztnQkFDekIsR0FBRzNCLG9EQUFXO2dCQUNkLEdBQUdNLHFCQUFxQkMsS0FBSztnQkFDN0JxQixTQUFTckIsS0FBS3FCLE9BQU87WUFLdkI7WUFFQSxPQUFPUixJQUFJSyxNQUFNLENBQUMsS0FBS0ksSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQUs7UUFDOUMsRUFBRSxPQUFPQyxLQUFLO1lBQ1pWLFFBQVFDLEdBQUcsQ0FBQ1M7WUFDWixPQUFPWCxJQUFJSyxNQUFNLENBQUMsS0FBS0ksSUFBSSxDQUFDO2dCQUFFeEIsU0FBUzBCLElBQUkxQixPQUFPO1lBQUM7UUFDckQ7SUFDRjtJQUNBLE9BQU9lLElBQUlLLE1BQU0sQ0FBQyxLQUFLSSxJQUFJLENBQUM7UUFBRXhCLFNBQVM7SUFBYztBQUN2RDtBQUNBLGlFQUFlYSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS8uL3NyYy9wYWdlcy9hcGkvY29udGFjdC5qcz9iY2I3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFJhbmRvbVZhbHVlcyB9IGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCB7IG1haWxPcHRpb25zLCB0cmFuc3BvcnRlciB9IGZyb20gXCIuLi8uLi8uLi9ub2RlbWFpbGVyXCI7XG5cbmNvbnN0IENPTlRBQ1RfTUVTU0FHRV9GSUVMRFMgPSB7XG4gIG5hbWU6IFwiTmFtZVwiLFxuICBlbWFpbDogXCJFbWFpbFwiLFxuICBtZXNzYWdlOiBcIk1lc3NhZ2VcIixcbn07XG5cbmNvbnN0IGdlbmVyYXRlRW1haWxDb250ZW50ID0gKGRhdGEpID0+IHtcbiAgY29uc3Qgc3RyaW5nRGF0YSA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLnJlZHVjZShcbiAgICAoc3RyLCBba2V5LCB2YWxdKSA9PlxuICAgICAgKHN0ciArPSBgJHtDT05UQUNUX01FU1NBR0VfRklFTERTW2tleV19OiBcXG4ke3ZhbH0gXFxuIFxcbmApLFxuICAgIFwiXCJcbiAgKTtcbiAgY29uc3QgaHRtbERhdGEgPSBPYmplY3QuZW50cmllcyhkYXRhKS5yZWR1Y2UoKHN0ciwgW2tleSwgdmFsXSkgPT4ge1xuICAgIHJldHVybiAoc3RyICs9IGA8aDMgY2xhc3M9XCJmb3JtLWhlYWRpbmdcIiBhbGlnbj1cImxlZnRcIj4ke0NPTlRBQ1RfTUVTU0FHRV9GSUVMRFNba2V5XX08L2gzPjxwIGNsYXNzPVwiZm9ybS1hbnN3ZXJcIiBhbGlnbj1cImxlZnRcIj4ke3ZhbH08L3A+YCk7XG4gIH0sIFwiXCIpO1xuXG4gIHJldHVybiB7XG4gICAgdGV4dDogc3RyaW5nRGF0YSxcbiAgICBodG1sOiBgPCFET0NUWVBFIGh0bWw+PGh0bWw+IDxoZWFkPiA8dGl0bGU+PC90aXRsZT4gPG1ldGEgY2hhcnNldD1cInV0Zi04XCIvPiA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+IDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiLz4gPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPiBib2R5LCB0YWJsZSwgdGQsIGF7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTt9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O31ib2R5e2hlaWdodDogMTAwJSAhaW1wb3J0YW50OyBtYXJnaW46IDAgIWltcG9ydGFudDsgcGFkZGluZzogMCAhaW1wb3J0YW50OyB3aWR0aDogMTAwJSAhaW1wb3J0YW50O31AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjVweCl7LndyYXBwZXJ7d2lkdGg6IDEwMCUgIWltcG9ydGFudDsgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7fS5yZXNwb25zaXZlLXRhYmxle3dpZHRoOiAxMDAlICFpbXBvcnRhbnQ7fS5wYWRkaW5ne3BhZGRpbmc6IDEwcHggNSUgMTVweCA1JSAhaW1wb3J0YW50O30uc2VjdGlvbi1wYWRkaW5ne3BhZGRpbmc6IDAgMTVweCA1MHB4IDE1cHggIWltcG9ydGFudDt9fS5mb3JtLWNvbnRhaW5lcnttYXJnaW4tYm90dG9tOiAyNHB4OyBwYWRkaW5nOiAyMHB4OyBib3JkZXI6IDFweCBkYXNoZWQgI2NjYzt9LmZvcm0taGVhZGluZ3tjb2xvcjogIzJhMmEyYTsgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogNDAwOyB0ZXh0LWFsaWduOiBsZWZ0OyBsaW5lLWhlaWdodDogMjBweDsgZm9udC1zaXplOiAxOHB4OyBtYXJnaW46IDAgMCA4cHg7IHBhZGRpbmc6IDA7fS5mb3JtLWFuc3dlcntjb2xvcjogIzJhMmEyYTsgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogMzAwOyB0ZXh0LWFsaWduOiBsZWZ0OyBsaW5lLWhlaWdodDogMjBweDsgZm9udC1zaXplOiAxNnB4OyBtYXJnaW46IDAgMCAyNHB4OyBwYWRkaW5nOiAwO31kaXZbc3R5bGUqPVwibWFyZ2luOiAxNnB4IDA7XCJde21hcmdpbjogMCAhaW1wb3J0YW50O308L3N0eWxlPiA8L2hlYWQ+IDxib2R5IHN0eWxlPVwibWFyZ2luOiAwICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDAgIWltcG9ydGFudDsgYmFja2dyb3VuZDogI2ZmZlwiPiA8ZGl2IHN0eWxlPVwiIGRpc3BsYXk6IG5vbmU7IGZvbnQtc2l6ZTogMXB4OyBjb2xvcjogI2ZlZmVmZTsgbGluZS1oZWlnaHQ6IDFweDsgIG1heC1oZWlnaHQ6IDBweDsgbWF4LXdpZHRoOiAwcHg7IG9wYWNpdHk6IDA7IG92ZXJmbG93OiBoaWRkZW47IFwiID48L2Rpdj48dGFibGUgYm9yZGVyPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIHdpZHRoPVwiMTAwJVwiPiA8dHI+IDx0ZCBiZ2NvbG9yPVwiI2ZmZmZmZlwiIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9XCJwYWRkaW5nOiAxMHB4IDE1cHggMzBweCAxNXB4XCIgY2xhc3M9XCJzZWN0aW9uLXBhZGRpbmdcIiA+IDx0YWJsZSBib3JkZXI9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgd2lkdGg9XCIxMDAlXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDUwMHB4XCIgY2xhc3M9XCJyZXNwb25zaXZlLXRhYmxlXCIgPiA8dHI+IDx0ZD4gPHRhYmxlIHdpZHRoPVwiMTAwJVwiIGJvcmRlcj1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIj4gPHRyPiA8dGQ+IDx0YWJsZSB3aWR0aD1cIjEwMCVcIiBib3JkZXI9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgPiA8dHI+IDx0ZCBzdHlsZT1cIiBwYWRkaW5nOiAwIDAgMCAwOyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAyNXB4OyBjb2xvcjogIzIzMjMyMzsgXCIgY2xhc3M9XCJwYWRkaW5nIG1lc3NhZ2UtY29udGVudFwiID4gPGgyPk5ldyBDb250YWN0IE1lc3NhZ2U8L2gyPiA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj4ke2h0bWxEYXRhfTwvZGl2PjwvdGQ+PC90cj48L3RhYmxlPiA8L3RkPjwvdHI+PC90YWJsZT4gPC90ZD48L3RyPjwvdGFibGU+IDwvdGQ+PC90cj48L3RhYmxlPiA8L2JvZHk+PC9odG1sPmAsXG4gIH07XG59O1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIC8vY29uc29sZSBpcyBoZXJlIHRvIGNoZWNrIGlmIGl0IHdvcmtzXG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgIGlmICghZGF0YSB8fCAhZGF0YS5uYW1lIHx8ICFkYXRhLmVtYWlsIHx8ICFkYXRhLm1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiQmFkIHJlcXVlc3RcIiB9KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xuICAgICAgICAuLi5tYWlsT3B0aW9ucyxcbiAgICAgICAgLi4uZ2VuZXJhdGVFbWFpbENvbnRlbnQoZGF0YSksXG4gICAgICAgIHN1YmplY3Q6IGRhdGEuc3ViamVjdCxcblxuICAgICAgICAvL1RvIHRlc3QgaWYgaXQgd29yayB0aGF0J3MgdGhlIHRlc3QgZmVhdHVyZVxuICAgICAgICAvLyB0ZXh0OiBcIlRoaXMgaXMgYSB0ZXN0IHN0cmluZ1wiLFxuICAgICAgICAvLyBodG1sOiBcIjxoMT5UZXN0IFRpdGxlPC9oMT48cD5Tb21lIGJvZHkgdGV4dDwvcD5cIixcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIkJhZCByZXF1ZXN0XCIgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJnZXRSYW5kb21WYWx1ZXMiLCJtYWlsT3B0aW9ucyIsInRyYW5zcG9ydGVyIiwiQ09OVEFDVF9NRVNTQUdFX0ZJRUxEUyIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJnZW5lcmF0ZUVtYWlsQ29udGVudCIsImRhdGEiLCJzdHJpbmdEYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsInN0ciIsImtleSIsInZhbCIsImh0bWxEYXRhIiwidGV4dCIsImh0bWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwic2VuZE1haWwiLCJzdWJqZWN0IiwianNvbiIsInN1Y2Nlc3MiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/contact.js"));
module.exports = __webpack_exports__;

})();