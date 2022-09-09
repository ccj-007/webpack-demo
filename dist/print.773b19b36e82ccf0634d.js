"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["component"] = factory();
	else
		root["component"] = factory();
})(self, () => {
return (self["webpackChunkcomponent"] = self["webpackChunkcomponent"] || []).push([["print"],{

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cube": () => (/* binding */ cube),
/* harmony export */   "square": () => (/* binding */ square)
/* harmony export */ });
/*#__PURE__*/
function square(x) {
  return x * x;
}
/*#__PURE__*/

function cube(x) {
  return x * x * x;
}

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./src/math.js");
/* provided dependency */ var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
// import _ from 'lodash'

function printMe() {
  console.log(_.join(['Another', 'module', 'loaded!'], ' '));
  console.log("Math reuslt", /*#__PURE__*/(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.cube)(5));
  alert('I get called from print.js!2222');
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/print.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuNzczYjE5YjM2ZTgyY2NmMDYzNGQuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFDTyxTQUFTQSxNQUFULENBQWlCQyxDQUFqQixFQUFvQjtFQUN6QixPQUFPQSxDQUFDLEdBQUdBLENBQVg7QUFDRDtBQUNEOztBQUNPLFNBQVNDLElBQVQsQ0FBZUQsQ0FBZixFQUFrQjtFQUN2QixPQUFPQSxDQUFDLEdBQUdBLENBQUosR0FBUUEsQ0FBZjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDUEQ7QUFDQTtBQUVlLFNBQVNFLE9BQVQsR0FBb0I7RUFDakNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxDQUFDLENBQUNDLElBQUYsQ0FBTyxDQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFNBQXRCLENBQVAsRUFBeUMsR0FBekMsQ0FBWjtFQUNBSCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCLGFBQWNILDhDQUFJLENBQUMsQ0FBRCxDQUE3QztFQUVBTSxLQUFLLENBQUMsaUNBQUQsQ0FBTDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcG9uZW50L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jb21wb25lbnQvLi9zcmMvbWF0aC5qcyIsIndlYnBhY2s6Ly9jb21wb25lbnQvLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY29tcG9uZW50XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNvbXBvbmVudFwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvKiNfX1BVUkVfXyovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmUgKHgpIHtcclxuICByZXR1cm4geCAqIHg7XHJcbn1cclxuLyojX19QVVJFX18qL1xyXG5leHBvcnQgZnVuY3Rpb24gY3ViZSAoeCkge1xyXG4gIHJldHVybiB4ICogeCAqIHg7XHJcbn0iLCIvLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IGN1YmUgfSBmcm9tICcuL21hdGguanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lICgpIHtcclxuICBjb25zb2xlLmxvZyhfLmpvaW4oWydBbm90aGVyJywgJ21vZHVsZScsICdsb2FkZWQhJ10sICcgJykpO1xyXG4gIGNvbnNvbGUubG9nKFwiTWF0aCByZXVzbHRcIiwgLyojX19QVVJFX18qLyBjdWJlKDUpKTtcclxuXHJcbiAgYWxlcnQoJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzITIyMjInKTtcclxufSJdLCJuYW1lcyI6WyJzcXVhcmUiLCJ4IiwiY3ViZSIsInByaW50TWUiLCJjb25zb2xlIiwibG9nIiwiXyIsImpvaW4iLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=