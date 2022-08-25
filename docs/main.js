(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"blue h-48\">\n   <span [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">A snapshot of index.js is staged in the Index</span>\n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeAdd()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git add index.js\"</button>\n    <div class=\"pr-8\"></div>\n    <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n  <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n  <div class=\"pt-change\">index.html</div>\n    <div class=\"pt-4 \">index.js</div>\n    <div class=\"pull-up green\" [ngClass]=\"{'hide': hideMessage, 'show, move': !hideMessage}\">index.js</div>\n  <div class=\"pt-4 pb-change\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Index</div></div>\n    <div class=\"order-switch-0 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Repository</div></div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");



var AddComponent = /** @class */ (function () {
    function AddComponent() {
    }
    AddComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.showReset = false;
    };
    AddComponent.prototype.visualizeAdd = function () {
        this.hideMessage = false;
        this.showReset = true;
    };
    AddComponent.prototype.reset = function () {
        window.location.reload();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddComponent.prototype, "someData", void 0);
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fade, myTrigger, myTrigger2, fade2, ani3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myTrigger", function() { return myTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myTrigger2", function() { return myTrigger2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade2", function() { return fade2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ani3", function() { return ani3; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100)
    ])
]);
var myTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('myTrigger', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1.7)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '1'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translate(0px, 20px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms 0s ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeIn-slow', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '1'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translate(0px, 20px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms 0s ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeIn-slower', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '1'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translate(0px, 20px)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('4000ms 0s ease-in')
    ])
]);
var myTrigger2 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('myTrigger2', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1.7)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('large <=> small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms'))
]);
var fade2 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade2', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fadeIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '1',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: '0',
            transform: 'translateX(100px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('3000ms 0s ease-out')
    ])
]);
var ani3 = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('ani3', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('ani3', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '1',
        transform: 'translateX(120px)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(50000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: .5, offset: .3, transform: 'translateX(0px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: .4, transform: 'translateX(0px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: .5, transform: 'translateX(50px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: .6, transform: 'translateX(70px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: .7, transform: 'translateX(80px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: .8, transform: 'translateX(90px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: .9, transform: 'translateX(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 1, transform: 'translateX(120px)' }),
        ]))
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.visGitApp {\n    font-family: Arial, Helvetica, sans-serif !important;\n}\n\n\n.font-change-14-16 {\n    font-size: 1rem;\n}\n\n\n.w-40--reset {\n    width: 15.625rem;\n}\n\n\n.pl-change-status {\n    padding-left: 20rem;\n}\n\n\n.change-direction-stash {\n    flex-direction: column;\n}\n\n\n.pl-92-except-portrait{\n    padding-left: 1.875rem;\n}\n\n\n.pr-64-except-portrait {\n    padding-right: 0rem;\n}\n\n\n.pt-32-in-portrait {\n    padding-top: 2rem;\n}\n\n\n.image-size-icon {\n    width: 3.125rem;\n}\n\n\n.font-size-change {\n    font-size: 1.375rem;\n}\n\n\n.pl-change {\n    padding-left: 3.125rem;\n}\n\n\n.pb-change-16-32 {\n padding-bottom: 2rem;\n}\n\n\n.pchange-branch {\n    padding-top: .5rem;\n    padding-bottom: 1rem;\n}\n\n\n.h-change-28-48 {\n    height: 1.75rem;\n}\n\n\n.flex-direction-change {\n    flex-direction: row;\n}\n\n\n.font-size-12 {\n    font-size: .75rem;\n}\n\n\n.mat-fab .mat-button-wrapper {\n    line-height: .25rem !important;\n}\n\n\n.italics {\n    font-style: italic;\n}\n\n\n.font-size-24 {\n    font-size: 1.5rem;\n}\n\n\n.font-size-32 {\n    font-size: 2rem;\n}\n\n\n.font-size-48 {\n    font-size: 3rem;\n}\n\n\n.h-28 {\n    height: 1.25rem;\n}\n\n\n.h-38 {\n    height: 2.375rem;\n}\n\n\n.h-48 {\n    height: 3rem;\n}\n\n\n.h-58 {\n    height: 3.625rem;\n}\n\n\n.h-69 {\n    height: 4.3125rem;\n}\n\n\n.mr-2 {\n    margin-right: .125rem;\n}\n\n\n.mr-4 {\n    margin-right: .25rem;\n}\n\n\n.ml-2 {\n    margin-left: .125rem;\n}\n\n\n.ml-4 {\n    margin-left: .25rem;\n}\n\n\n.ml-6 {\n    margin-left: 0.375rem;\n}\n\n\n.ml-8 {\n    margin-left: .5rem;\n}\n\n\n.ml-switch--reset {\n    margin-left: 2.625rem;\n}\n\n\n.mt-2 {\n    margin-top: .125rem;\n}\n\n\n.mt-4 {\n    margin-top: .25rem;\n}\n\n\n.mt-8 {\n    margin-top: .5rem;\n}\n\n\n.pb-36 {\n    padding-bottom: 2.25rem;\n}\n\n\n.pb-48 {\n    padding-bottom: 3rem;\n}\n\n\n.pl-2 {\n    padding-left: .125rem;\n}\n\n\n.pl-4 {\n    padding-left: .25rem;\n}\n\n\n.pl-8 {\n    padding-left: .5rem;\n}\n\n\n.pl-16 {\n    padding-left: 1rem;\n}\n\n\n.pl-20 {\n    padding-left: 1.25rem;\n}\n\n\n.pl-24 {\n    padding-left: 1.5rem;\n}\n\n\n.pl-30 {\n    padding-left: 1.875rem;\n}\n\n\n.pl-32 {\n    padding-left: 2rem;\n}\n\n\n.pl-34 {\n    padding-left: 2.125rem;\n}\n\n\n.pl-36 {\n    padding-left: 2.25rem;\n}\n\n\n.pl-46 {\n    padding-left: 2.875rem;\n}\n\n\n.pl-48 {\n    padding-left: 3rem;\n}\n\n\n.pl-50 {\n    padding-left: 3.125rem;\n}\n\n\n.pl-100 {\n    padding-left: 6.25rem;\n}\n\n\n.pl-150 {\n    padding-left: 9.375rem;\n}\n\n\n.pl-200 {\n    padding-left: 12.5rem;\n}\n\n\n.pl-250 {\n    padding-left: 15.625rem;\n}\n\n\n.pl-64 {\n    padding-left: 4rem;\n}\n\n\n.pl-64--reset {\n    padding-left: 4rem;\n}\n\n\n.pl-92 {\n    padding-left: 5.75rem;\n}\n\n\n.pl-109 {\n    padding-left: 6.8125rem;\n}\n\n\n.pl-350 {\n    padding-left: 21.875rem;\n}\n\n\n.pl-500 {\n    padding-left: 31.25rem;\n}\n\n\n.pr-2 {\n    padding-right: .125rem;\n}\n\n\n.pr-4 {\n    padding-right: .25rem;\n}\n\n\n.pr-8 {\n    padding-right: .5rem;\n}\n\n\n.pr-16 {\n    padding-right: 1rem;\n}\n\n\n.pt-8{\n    padding-top: .5rem;\n}\n\n\n.pt-16{\n    padding-top: 1rem;\n}\n\n\n.pt-18{\n    padding-top: 1.125rem;\n}\n\n\n.pt-48{\n    padding-top: 3rem;\n}\n\n\n.pt-52{\n    padding-top: 3.25rem;\n}\n\n\n.pt-64{\n    padding-top: 4rem;\n}\n\n\n.pt-72{\n    padding-top: 4.5rem;\n}\n\n\n.pt-76{\n    padding-top: 4.75rem;\n}\n\n\n.regular, .normal {\n    font-weight: normal;\n}\n\n\n.bold {\n    font-weight: bold;;\n}\n\n\n.background-beige {\n    background-color: #beaf98;\n}\n\n\n.dot {\n    height: 1.5625rem;\n    width: 1.5625rem;\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n\n.red {\n    color: #CD5C5C;\n}\n\n\n.black {\n    color: black;\n}\n\n\n.green {\n    color: green;\n}\n\n\n.indianRed{\n    background-color: indianRed;\n}\n\n\n.seaGreen {\n    background-color: darkseagreen;\n}\n\n\n.lightCoral {\n    background-color: lightcoral;\n}\n\n\n.mediumPurple {\n    background-color: mediumpurple;\n}\n\n\n.background-red {\n    background-color: #CD5C5C;\n}\n\n\n.background-gray {\n    background-color: #BEBEBE;\n}\n\n\n.background-black {\n    background-color: #000000;\n}\n\n\n.gold {\n    background-color: gold;\n}\n\n\n.white {\n    color: white;\n}\n\n\n.w-100 {\n    width: 6.25rem;\n    min-width: 6.25rem;\n}\n\n\n.min-w-150 {\n    min-width: 9.375rem;\n}\n\n\n.min-w-150--reset {\n    min-width: 9.375rem;\n}\n\n\n.min-w-250 {\n    min-width: 15.625rem;\n}\n\n\n.min-w-350 {\n    min-width: 21.875rem;\n}\n\n\n.max-w-450 {\n    max-width: 28.125rem;\n}\n\n\n.max-w-600 {\n    max-width: 37.5rem;\n}\n\n\n.w-150 {\n    width: 9.375rem;\n}\n\n\n.w-250 {\n    width: 15.625rem;\n}\n\n\n.w-300 {\n    width: 18.75rem;\n}\n\n\n.w-350 {\n    width: 21.875rem;\n}\n\n\n.w-350--reset {\n    width: 21.875rem;\n}\n\n\n.w-450 {\n    width: 28.125rem;\n}\n\n\n.w-500 {\n    width: 31.25rem;\n}\n\n\n.w-600 {\n    width: 37.5rem;\n}\n\n\n.h-200 {\n    height: 12.5rem;\n}\n\n\n.text-align, .text-center {\n    text-align: center;\n}\n\n\n.text-left {\n    text-align: left;\n}\n\n\n.blue {\n    color: blue;\n}\n\n\n.khaki {\n    color: darkgreen;\n}\n\n\n.darkblue {\n    color: darkblue;\n}\n\n\n.limegreen {\n    color: #32CD32;\n}\n\n\n.darkred {\n    color: darkred;\n}\n\n\n.br-beige {\n    border-right: .125rem solid #beaf98;\n}\n\n\n.bl-beige {\n    border-left: .125rem solid #beaf98;\n}\n\n\n.bt-beige {\n    border-top: .125rem solid #beaf98;\n}\n\n\n.bb-beige {\n    border-bottom: .125rem solid #beaf98;\n}\n\n\n.rectangle {\n    width: 25rem;\n    height: .625rem;\n}\n\n\n.flex, .show{\n    display: flex;\n}\n\n\n.float {\n    float: right;\n}\n\n\n.pull-up{\n    margin-top: -1.25rem;\n}\n\n\n.pull-left{\n    margin-left: -7.5rem;\n}\n\n\n.pull-left-pull{\n    margin-left: -7.5rem;\n}\n\n\n.pull-left-24{\n    margin-left: -1.5rem !important;\n}\n\n\n/* .pull-left-24--reset{\n    margin-left: -1.5rem !important;\n} */\n\n\n.moveAndColor {\n    -webkit-animation: moveAndColor 1s linear;\n            animation: moveAndColor 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n@-webkit-keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(13.125rem);\n    }\n}\n\n\n@keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(13.125rem);\n    }\n}\n\n\n@-webkit-keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.1875rem);\n    }\n}\n\n\n@keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.1875rem);\n    }\n}\n\n\n@-webkit-keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(4.6875rem);\n    }\n}\n\n\n@keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(4.6875rem);\n    }\n}\n\n\n.show-fadeIn{\n    -webkit-animation: show-fadeIn 2s linear;\n            animation: show-fadeIn 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.show-slow-fadeIn{\n    -webkit-animation: show-slow-fadeIn 2s linear;\n            animation: show-slow-fadeIn 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.commit-fadeIn-1 {\n    -webkit-animation: commit-fadeIn-1 1s linear;\n            animation: commit-fadeIn-1 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.commit-fadeIn-2 {\n    -webkit-animation: commit-fadeIn-2 2s linear;\n            animation: commit-fadeIn-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.commit-fadeIn-3 {\n    -webkit-animation: commit-fadeIn-3 3s linear;\n            animation: commit-fadeIn-3 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move{\n    -webkit-animation: move 1s linear;\n            animation: move 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n\n}\n\n\n.move-image {\n    -webkit-animation: move-image 1s linear;\n            animation: move-image 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-left {\n    -webkit-animation: move-left .75s linear;\n            animation: move-left .75s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-left-from-working {\n    -webkit-animation: move-left-from-working 1s linear;\n            animation: move-left-from-working 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-left-from-index {\n    -webkit-animation: move-left-from-index 1s linear;\n            animation: move-left-from-index 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-left-from-index-2 {\n    -webkit-animation: move-left-from-index-2 1s linear;\n            animation: move-left-from-index-2 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-right {\n    -webkit-animation: move-right 1s linear;\n            animation: move-right 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-right-pull {\n    -webkit-animation: move-right-pull 1s linear;\n            animation: move-right-pull 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-right-merge {\n    -webkit-animation: move-right-merge 1s linear;\n            animation: move-right-merge 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-right-fetch {\n    -webkit-animation: move-right-fetch 1s linear;\n            animation: move-right-fetch 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-up {\n    -webkit-animation: move-up 1.3s linear;\n            animation: move-up 1.3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-up-pull {\n    -webkit-animation: move-up-pull 1.5s linear;\n            animation: move-up-pull 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-up--push {\n    -webkit-animation: move-up--push 1.5s linear;\n            animation: move-up--push 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-up-fast {\n    -webkit-animation: move-up-fast .5s linear;\n            animation: move-up-fast .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-down-fast {\n    -webkit-animation: move-down-fast 2s linear;\n            animation: move-down-fast 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-down-one {\n    -webkit-animation: move-down-one .5s linear;\n            animation: move-down-one .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-down-two {\n    -webkit-animation: move-down-two .5s linear;\n            animation: move-down-two .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n.move-down-three {\n    -webkit-animation: move-down-three .5s linear;\n            animation: move-down-three .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n\n/* \n.overwrite-index {\n    animation: overwrite-index 1s linear;\n    animation-fill-mode: forwards;\n}\n\n.overwrite-index1 {\n    animation: overwrite-index1 1.5s linear;\n    animation-fill-mode: forwards;\n}\n\n.overwrite-index2 {\n    animation: overwrite-index2 1.5s linear;\n    animation-fill-mode: forwards;\n}\n.overwrite-index3 {\n    animation: overwrite-index3 1.5s linear;\n    animation-fill-mode: forwards;\n} */\n\n\n/* \n.headColorGreen {\n    background-color: darkseagreen;\n    animation: moveToWorkingArea 1.5s linear;\n    animation-fill-mode: forwards;\n}\n\n\n.headColorRed {\n    background-color: indianred;\n    animation: moveToWorkingArea 2.5s linear;\n    animation-fill-mode: forwards;\n}\n\n.headColorPurple {\n    background-color: mediumpurple;\n    animation: moveToWorkingArea 2.5s linear;\n    animation-fill-mode: forwards;\n}\n\n.headColorGray {\n    background-color: #BEBEBE;\n    animation: moveToWorkingArea 2.5s linear;\n    animation-fill-mode: forwards;\n} */\n\n\n.hide{\n    display: none;\n}\n\n\nul {\n    list-style-type: none;\n    margin: 1.875rem 1.875rem 0 0;\n    padding: 0;\n}\n\n\nli {\n    padding: .9375rem;\n    width: 100%;\n    background: #f1f1f1;\n    margin-bottom: .125rem;\n    font-weight: bold;\n}\n\n\n.align-center {\n    align-items: center;\n}\n\n\n.align-left {\n    align-items: flex-start;\n}\n\n\n.align-right {\n    align-items: flex-end;\n}\n\n\n.justify-center {\n    justify-content: center;\n}\n\n\n.direction-column {\n    flex-direction: column;\n}\n\n\n.pb-8 {\n    padding-bottom: .5rem;\n}\n\n\n.pb-16 {\n    padding-bottom: 1rem;\n}\n\n\n.pb-24 {\n    padding-bottom: 1.5rem;\n}\n\n\n.pb-28 {\n    padding-bottom: 1.75rem;\n}\n\n\n.pb-32 {\n    padding-bottom: 2rem;\n}\n\n\n.pb-42 {\n    padding-bottom: 2.625rem;\n}\n\n\n.pt-32 {\n    padding-top: 2rem;\n}\n\n\n.pt-54 {\n    padding-top: 3.375rem;\n}\n\n\n.pt-64 {\n    padding-top: 4rem;\n}\n\n\n.pt-100 {\n    padding-top: 6.25rem;\n}\n\n\n.pt-4 {\n    padding-top: .25rem;\n}\n\n\n.pr-8{\n    padding-right: .5rem;\n}\n\n\n.pr-16 {\n    padding-right: 1rem;\n}\n\n\n.pr-24 {\n    padding-right: 1.5rem;\n}\n\n\n.pr-32 {\n    padding-right: 2rem;\n}\n\n\n.pr-48 {\n    padding-right: 3rem;\n}\n\n\n.pr-64 {\n    padding-right: 4rem;\n}\n\n\n.w-quarter {\n    width: 25%;\n}\n\n\n.w-half {\n    width: 50%;\n}\n\n\n.w-full {\n    width: 100%;\n}\n\n\n.order-1 {\n    order: 1;\n}\n\n\n/* \n@keyframes moveToWorkingArea {\n    0% {\n        opacity: 0;\n        transform: translateX(0);\n    }\n    60% {\n        opacity: 0.3;\n        transform: translateX(0rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(-9.5rem);\n    }\n}  */\n\n\n@-webkit-keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(8.75rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n\n@keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(8.75rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n\n@-webkit-keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n\n@keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n\n@-webkit-keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n\n@keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n\n@-webkit-keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n\n@keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n\n@-webkit-keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n\n@keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n\n/* desktop only css  */\n\n\n@media only screen and (min-device-width: 60rem) {\n    .font-size-change {\n        font-size: 2.25rem;\n    }\n    .flex-direction-change {\n        flex-direction: row;\n    }\n    .pull-up-image{\n        margin-top: -11.125rem;\n    }\n    .pv-change {\n        padding-bottom: 2rem;\n        padding-top: 2rem;\n    }\n    .image-size-icon {\n        width: 3.125rem;\n    }\n    .image-size {\n        width: 9.357rem;\n    }\n    .image-size--clone {\n        width: 9.357rem;\n    }\n\n    .image-size--fetch {\n        width: 9.357rem;\n    }\n    .pt-change {\n        padding-top: 2rem;\n    }\n    .pt-change--clone {\n        padding-top: 2rem;\n    }\n    .pt-change--commit {\n        padding-top: 2rem;\n    }\n    .pb-change {\n        padding-bottom: 2rem;\n    }\n\n    .index_commit {\n        padding-top: 3.25rem;\n    }\n    .order-switch-0 {\n        order: 2;\n    }\n\n    .order-switch-2 {\n        order: 0;\n    }\n\n    .order-switch-stash {\n        order: -1;\n    }\n    @-webkit-keyframes move {\n        0% {\n            transform: translateX(0);\n        }\n        50% {\n            transform: translateX(4.53125rem);\n        }\n        100% {\n            transform: translateX(9.875rem);\n        }\n    }\n    @keyframes move {\n        0% {\n            transform: translateX(0);\n        }\n        50% {\n            transform: translateX(4.53125rem);\n        }\n        100% {\n            transform: translateX(9.875rem);\n        }\n    } \n\n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    } \n\n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.4375rem);\n        }\n    } \n    @keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.4375rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 1.25rem);\n        }\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 1.25rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @-webkit-keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(17.8125rem);\n        }\n    } \n    @keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(17.8125rem);\n        }\n    } \n    @-webkit-keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n    @keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n\n    @-webkit-keyframes move-up--push {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @keyframes move-up--push {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-fast {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @keyframes move-up-fast {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-fast {\n        0% {\n            transform: translateY(0);\n        }\n        50% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(4.6875rem);\n        }\n    } \n\n    @keyframes move-down-fast {\n        0% {\n            transform: translateY(0);\n        }\n        50% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(4.6875rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    /* @keyframes overwrite-index {\n        0% {\n            transform: translate(0, 0);\n        }\n        50% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-15.0625rem, -.1875rem);\n        }\n    } \n    @keyframes overwrite-index1 {\n        0% {\n            transform: translate(0, 0);\n        }\n        50% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-4.81rem, -2.5rem);\n        }\n    } \n    @keyframes overwrite-index2 {\n        0% {\n            transform: translate(0, 0);\n        }\n        50% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-4.81rem, -5.1875rem);\n        }\n    } \n    @keyframes overwrite-index3 {\n        0% {\n            transform: translate(0, 0);\n        }\n        50% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-4.81rem, -.69rem);\n        }\n    }  */\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.53rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.06rem);\n            color: black;\n        }\n    }\n    @keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.53rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.06rem);\n            color: black;\n        }\n    } \n}\n\n\n/* mobile landscape css  */\n\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .hide-in-landscape{\n        display: none;\n    }\n\n    .pl-landscape-clone{\n        padding-left: 1.375rem;\n    }\n\n    .pl-change-status {\n        padding-left: 12.5rem;\n    }\n\n    .font-change-14-16 {\n        font-size: .875rem;\n    }\n\n    .change-direction-stash {\n        flex-direction: row;\n    }\n\n    .pull-up-in-push {\n        margin-top: -2.81rem;\n    }\n\n    .pt-32-in-portrait {\n        padding-top: 0rem;\n    }\n\n    .pv-change {\n        padding-bottom: .5rem;\n        padding-top: .5rem;\n    }\n    .pull-up-fetch {\n        margin-top: -4.375rem;\n    }\n\n    .pt-change-pull {\n        padding-top: .5rem;\n    }\n    .pt-change-pull-2 {\n        padding-top: 0rem;\n    }\n\n    .margin-in-landscape {\n        margin-top: -1.25rem;\n    }\n\n    .mt-change-pull-0 {\n        margin-top: -.625rem;\n    }\n\n    .mt-change-pull {\n        margin-top: -1.875rem;\n    }\n    .mt-change-pull-2 {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-2-mac {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-2-pc {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-4-mac {\n        margin-top: -1.75rem;\n    }\n    .mt-change-pull-4-pc {\n        margin-top: -1.75rem;\n    }\n\n    .mt-change-pull-5 {\n        margin-top: -1.25rem;\n    }\n    .mt-change-pull-6 {\n        margin-top: -1.25rem;\n    }\n\n    .pb-change-16-32 {\n        padding-bottom: 1rem;\n        margin-top: -.625rem;\n        }\n\n    .padding-landscape-commit-t{\n        padding-top: 2rem;\n    }\n    .padding-landscape-commit-b{\n        padding-bottom: .5rem;\n    }\n    .order-switch-0 {\n        order: 2;\n    }\n\n    .pt-change--clone {\n        padding-top: 1rem;\n    }\n    .pt-change--commit {\n        padding-top: 1rem;\n    }\n    .image-size {\n        width: 9.357rem;\n    }\n\n    .pull-up-image{\n        margin-top: -3.625rem;\n    }\n\n    .image-size--clone {\n        width: 3.125rem;\n    }\n\n    .image-size--fetch {\n        width: 3.125rem;\n        height: 3.125rem;\n    }\n\n    .flex-direction-change {\n        flex-direction: row;\n    }\n    .pl-change {\n        padding-left: 3.125rem;\n    }\n    .pchange-branch {\n        padding-top: 0rem;\n        padding-bottom: 0rem;\n        margin-top: -.625rem;\n    }\n\n    \n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    }\n\n    \n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    /* @keyframes overwrite-index {\n        0% {\n            transform: translate(0, 0);\n        }\n        50% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-4.81rem, -.1875rem);\n        }\n    } \n    @keyframes overwrite-index1 {\n        0% {\n            transform: translate(0, 0);\n        }\n        50% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-4.81rem, -2.5rem);\n        }\n    } \n    @keyframes overwrite-index2 {\n        0% {\n            transform: translate(0, 0);\n        }\n        50% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-4.81rem, -5.1875rem);\n        }\n    } \n    @keyframes overwrite-index3 {\n        0% {\n            transform: translate(0, 0);\n        }\n        50% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-4.81rem, -7.69rem);\n        }\n    }  */\n\n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.44rem);\n        }\n    }\n\n    @keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.44rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-17.94, 1.375rem);\n        }\n\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-17.94, 1.375rem);\n        }\n\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-7.19rem, -.1875rem);\n        }\n    } \n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-7.19rem, -.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n    @-webkit-keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n\n    @keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.25rem);\n        }\n    } \n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.25rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.84rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.69rem);\n            color: black;\n        }\n    } \n\n    @keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.84rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.69rem);\n            color: black;\n        }\n    } \n    @-webkit-keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        100% {\n            transform: translate(9.375rem, .3125rem)\n        }\n    } \n    @keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        100% {\n            transform: translate(9.375rem, .3125rem)\n        }\n    }\n    @-webkit-keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    }\n    @keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n}\n\n\n/* mobile portrait css */\n\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .image-size-icon {\n        width: 1.875rem;\n    }\n    .image-size {\n        width: 6.2rem;\n    }\n    .font-size-change {\n        font-size: 1.375rem;\n    }\n\n    .pv-change {\n        padding-bottom: 1rem;\n        padding-top: .5rem;\n    }\n    .pl-change {\n        padding-left: 0rem;\n    }\n    .change-direction {\n        flex-direction: column;\n    }\n    .change-direction-stash {\n        flex-direction: column;\n    }\n\n    .height-change {\n        min-height: 6rem\n    }\n\n    .pt-change {\n        padding-top: 1rem;\n    }\n    .pt-change--clone {\n        padding-top: 1rem;\n    }\n    .pt-change--commit {\n        padding-top: 1rem;\n    }\n\n    .pb-change {\n        padding-bottom: 1rem;\n    }\n\n    .bl-change {\n        border-left: .125rem solid #beaf98;\n    }\n\n    .index_commit {\n        padding-top: 1.875rem;\n    }\n\n    .order-switch-0 {\n        order: 0;\n    }\n    .order-switch-2 {\n        order: 2;\n    }\n\n    .order-switch-stash {\n        order: 3;\n    }\n    \n    \n    .flex-direction-change {\n        flex-direction: column;\n    }\n\n\n    /* .pull-left-24--reset {\n        animation: pull-left-24--reset 1s linear;\n        animation-fill-mode: forwards;\n    } */\n\n    .pl-64 {\n        padding-left: 0rem;\n    }\n\n    .w-350--reset {\n        width: 100%;\n    }\n\n    .min-w-150--reset {\n        min-width: 3.125rem;\n    }\n    .w-40--reset {\n        width: 40%;\n    }\n    .pl-92-except-portrait{\n        padding-left: 0rem;\n    }\n    .bl-stash {\n        border-left: .125rem solid #beaf98;\n    }\n    .font-change-14-16 {\n        font-size: .875rem;\n    }\n    \n\n    .pull-up-in-push-2 {\n        margin-top: 5rem;\n    }\n    \n\n    .pt-32-desktop-push {\n        padding-top: 2rem;\n    }\n    \n\n    .mt-in-portrait {\n        margin-top: -4.6875rem;\n    }\n\n    .mt-in-portrait-2 {\n        margin-top: -2.5rem;\n    }\n\n    .hide-in-portrait {\n        display: none;\n    }\n\n    .pt-32-in-portrait {\n        padding-top: 2rem;\n    }\n\n    \n    .pr-64-except-portrait {\n        padding-right: 0rem;\n    }\n    .h-change-28-48 {\n        height: 3rem;\n    }\n    .pull-up-image{\n        margin-top: -3.75rem;\n    }\n\n    .image-size--fetch {\n        width: 3.125rem;\n        height: 3.125rem;\n    }\n            \n    /* @keyframes pull-left-24--reset {\n        0% {\n            opacity: 0;\n        }\n        70% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n\n    }  */\n\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateY(0);\n            color: green;\n        }\n        50% {\n            transform: translateU(-3.125rem);\n            color: green;\n        }\n        100% {\n            transform: translateY(-6.5625rem);\n            color: black;\n        }\n    }\n\n    @keyframes moveAndColor {\n        0% {\n            transform: translateY(0);\n            color: green;\n        }\n        50% {\n            transform: translateU(-3.125rem);\n            color: green;\n        }\n        100% {\n            transform: translateY(-6.5625rem);\n            color: black;\n        }\n    } \n}\n\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait)  {\n \n    @-webkit-keyframes move-image {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform:  translateX(7.5rem);\n        }\n    }\n \n    @keyframes move-image {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform:  translateX(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes moveToWorkingArea {\n        0% {\n            opacity: 0;\n            transform: translateX(0);\n        }\n        70% {\n            opacity: 0.3;\n            transform: translateX(0rem);\n        }\n        100% {\n            opacity: 1;\n            transform: translateX(-4.68rem);\n        }\n    } \n\n    @keyframes moveToWorkingArea {\n        0% {\n            opacity: 0;\n            transform: translateX(0);\n        }\n        70% {\n            opacity: 0.3;\n            transform: translateX(0rem);\n        }\n        100% {\n            opacity: 1;\n            transform: translateX(-4.68rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    /* @keyframes overwrite-index {\n        0% {\n            opacity: 0;\n            transform: translate(0, 0);\n        }\n        70% {\n            opacity: 1;\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-9.125rem, -.0625rem);\n        }\n    } \n    @keyframes overwrite-index1 {\n        0% {\n            transform: translate(0, 0);\n        }\n        50% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-9.375rem, -2.5rem);\n        }\n    } \n    @keyframes overwrite-index2 {\n        0% {\n            transform: translate(0, 0);\n        }\n        50% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-9.1875rem, -5.1875rem);\n        }\n    } \n    @keyframes overwrite-index3 {\n        0% {\n            transform: translate(0, 0);\n        }\n        50% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-9.1875rem, -.69rem);\n        }\n    }  */\n\n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.94rem);\n        }\n    }\n\n    @keyframes move-left-from-working {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.94rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13.3125rem);\n        }\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13.3125rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13rem);\n        }\n    } \n\n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-7.19rem);\n        }\n    } \n\n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-7.19rem);\n        }\n    } \n\n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    } \n    @-webkit-keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n    @keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n\n\n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.0625rem);\n        }\n    } \n\n\n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.0625rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.125rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.125rem);\n        }\n    } \n\n    @-webkit-keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateY(-8.56rem);\n        }\n    } \n\n    @keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateY(-8.56rem);\n        }\n    } \n    @-webkit-keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        50% {\n            transform: translateY(-3.125rem);\n        }\n        100% {\n            transform: translateY(-6.75rem)\n        }\n    } \n    @keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        50% {\n            transform: translateY(-3.125rem);\n        }\n        100% {\n            transform: translateY(-6.75rem)\n        }\n    } \n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0RBQW9EO0FBQ3hEOzs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOzs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7OztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7OztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7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SSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGdDQUFnQztRQUNwQztJQUNKOztJQVZBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksZ0NBQWdDO1FBQ3BDO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7SUFDQTtRQUNJO1lBQ0k7UUFDSjtRQUNBO1lBQ0ksZ0NBQWdDO1FBQ3BDO1FBQ0E7WUFDSTtRQUNKO0lBQ0o7SUFWQTtRQUNJO1lBQ0k7UUFDSjtRQUNBO1lBQ0ksZ0NBQWdDO1FBQ3BDO1FBQ0E7WUFDSTtRQUNKO0lBQ0o7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnZpc0dpdEFwcCB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuXG4uZm9udC1jaGFuZ2UtMTQtMTYge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnctNDAtLXJlc2V0IHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xufVxuXG4ucGwtY2hhbmdlLXN0YXR1cyB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHJlbTtcbn1cblxuLmNoYW5nZS1kaXJlY3Rpb24tc3Rhc2gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wbC05Mi1leGNlcHQtcG9ydHJhaXR7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjg3NXJlbTtcbn1cblxuLnByLTY0LWV4Y2VwdC1wb3J0cmFpdCB7XG4gICAgcGFkZGluZy1yaWdodDogMHJlbTtcbn1cblxuLnB0LTMyLWluLXBvcnRyYWl0IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLmltYWdlLXNpemUtaWNvbiB7XG4gICAgd2lkdGg6IDMuMTI1cmVtO1xufVxuXG4uZm9udC1zaXplLWNoYW5nZSB7XG4gICAgZm9udC1zaXplOiAxLjM3NXJlbTtcbn1cblxuXG4ucGwtY2hhbmdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xufVxuXG4ucGItY2hhbmdlLTE2LTMyIHtcbiBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLnBjaGFuZ2UtYnJhbmNoIHtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG4uaC1jaGFuZ2UtMjgtNDgge1xuICAgIGhlaWdodDogMS43NXJlbTtcbn1cblxuLmZsZXgtZGlyZWN0aW9uLWNoYW5nZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mb250LXNpemUtMTIge1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xufVxuXG4ubWF0LWZhYiAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgICBsaW5lLWhlaWdodDogLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pdGFsaWNzIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5mb250LXNpemUtMjQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1zaXplLTMyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXNpemUtNDgge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi5oLTI4IHtcbiAgICBoZWlnaHQ6IDEuMjVyZW07XG59XG5cbi5oLTM4IHtcbiAgICBoZWlnaHQ6IDIuMzc1cmVtO1xufVxuXG4uaC00OCB7XG4gICAgaGVpZ2h0OiAzcmVtO1xufVxuLmgtNTgge1xuICAgIGhlaWdodDogMy42MjVyZW07XG59XG4uaC02OSB7XG4gICAgaGVpZ2h0OiA0LjMxMjVyZW07XG59XG4ubXItMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuMTI1cmVtO1xufVxuLm1yLTQge1xuICAgIG1hcmdpbi1yaWdodDogLjI1cmVtO1xufVxuLm1sLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAuMTI1cmVtO1xufVxuLm1sLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAuMjVyZW07XG59XG4ubWwtNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMzc1cmVtO1xufVxuLm1sLTgge1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbn1cbi5tbC1zd2l0Y2gtLXJlc2V0IHtcbiAgICBtYXJnaW4tbGVmdDogMi42MjVyZW07XG59XG4ubXQtMiB7XG4gICAgbWFyZ2luLXRvcDogLjEyNXJlbTtcbn1cbi5tdC00IHtcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XG59XG4ubXQtOCB7XG4gICAgbWFyZ2luLXRvcDogLjVyZW07XG59XG4ucGItMzYge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjI1cmVtO1xufVxuLnBiLTQ4IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cbi5wbC0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IC4xMjVyZW07XG59XG4ucGwtNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XG59XG4ucGwtOCB7XG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbn1cbi5wbC0xNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuLnBsLTIwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG59XG4ucGwtMjQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuLnBsLTMwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuODc1cmVtO1xufVxuLnBsLTMyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG4ucGwtMzQge1xuICAgIHBhZGRpbmctbGVmdDogMi4xMjVyZW07XG59XG4ucGwtMzYge1xuICAgIHBhZGRpbmctbGVmdDogMi4yNXJlbTtcbn1cbi5wbC00NiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjg3NXJlbTtcbn1cbi5wbC00OCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xufVxuLnBsLTUwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xufVxuLnBsLTEwMCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjI1cmVtO1xufVxuLnBsLTE1MCB7XG4gICAgcGFkZGluZy1sZWZ0OiA5LjM3NXJlbTtcbn1cbi5wbC0yMDAge1xuICAgIHBhZGRpbmctbGVmdDogMTIuNXJlbTtcbn1cbi5wbC0yNTAge1xuICAgIHBhZGRpbmctbGVmdDogMTUuNjI1cmVtO1xufVxuLnBsLTY0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG59XG4ucGwtNjQtLXJlc2V0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG59XG4ucGwtOTIge1xuICAgIHBhZGRpbmctbGVmdDogNS43NXJlbTtcbn1cbi5wbC0xMDkge1xuICAgIHBhZGRpbmctbGVmdDogNi44MTI1cmVtO1xufVxuLnBsLTM1MCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMS44NzVyZW07XG59XG4ucGwtNTAwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMxLjI1cmVtO1xufVxuLnByLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IC4xMjVyZW07XG59XG4ucHItNCB7XG4gICAgcGFkZGluZy1yaWdodDogLjI1cmVtO1xufVxuLnByLTgge1xuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xufVxuLnByLTE2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG4ucHQtOHtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG59XG4ucHQtMTZ7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5wdC0xOHtcbiAgICBwYWRkaW5nLXRvcDogMS4xMjVyZW07XG59XG4ucHQtNDh7XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG59XG5cbi5wdC01MntcbiAgICBwYWRkaW5nLXRvcDogMy4yNXJlbTtcbn1cblxuLnB0LTY0e1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xufVxuLnB0LTcye1xuICAgIHBhZGRpbmctdG9wOiA0LjVyZW07XG59XG4ucHQtNzZ7XG4gICAgcGFkZGluZy10b3A6IDQuNzVyZW07XG59XG5cbi5yZWd1bGFyLCAubm9ybWFsIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7O1xufVxuLmJhY2tncm91bmQtYmVpZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWFmOTg7XG59XG5cbi5kb3Qge1xuICAgIGhlaWdodDogMS41NjI1cmVtO1xuICAgIHdpZHRoOiAxLjU2MjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4ucmVkIHtcbiAgICBjb2xvcjogI0NENUM1Qztcbn1cblxuLmJsYWNrIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uaW5kaWFuUmVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlhblJlZDtcbn1cblxuLnNlYUdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XG59XG4ubGlnaHRDb3JhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbn1cbi5tZWRpdW1QdXJwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXB1cnBsZTtcbn1cblxuLmJhY2tncm91bmQtcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0Q1QzVDO1xufVxuLmJhY2tncm91bmQtZ3JheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JFQkVCRTtcbn1cbi5iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuLmdvbGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG59XG5cblxuLndoaXRlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udy0xMDAge1xuICAgIHdpZHRoOiA2LjI1cmVtO1xuICAgIG1pbi13aWR0aDogNi4yNXJlbTtcbn1cblxuLm1pbi13LTE1MCB7XG4gICAgbWluLXdpZHRoOiA5LjM3NXJlbTtcbn1cbi5taW4tdy0xNTAtLXJlc2V0IHtcbiAgICBtaW4td2lkdGg6IDkuMzc1cmVtO1xufVxuLm1pbi13LTI1MCB7XG4gICAgbWluLXdpZHRoOiAxNS42MjVyZW07XG59XG4ubWluLXctMzUwIHtcbiAgICBtaW4td2lkdGg6IDIxLjg3NXJlbTtcbn1cblxuLm1heC13LTQ1MCB7XG4gICAgbWF4LXdpZHRoOiAyOC4xMjVyZW07XG59XG4ubWF4LXctNjAwIHtcbiAgICBtYXgtd2lkdGg6IDM3LjVyZW07XG59XG4udy0xNTAge1xuICAgIHdpZHRoOiA5LjM3NXJlbTtcbn1cbi53LTI1MCB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbn1cblxuLnctMzAwIHtcbiAgICB3aWR0aDogMTguNzVyZW07XG59XG5cbi53LTM1MCB7XG4gICAgd2lkdGg6IDIxLjg3NXJlbTtcbn1cbi53LTM1MC0tcmVzZXQge1xuICAgIHdpZHRoOiAyMS44NzVyZW07XG59XG5cbi53LTQ1MCB7XG4gICAgd2lkdGg6IDI4LjEyNXJlbTtcbn1cblxuLnctNTAwIHtcbiAgICB3aWR0aDogMzEuMjVyZW07XG59XG5cbi53LTYwMCB7XG4gICAgd2lkdGg6IDM3LjVyZW07XG59XG5cbi5oLTIwMCB7XG4gICAgaGVpZ2h0OiAxMi41cmVtO1xufVxuXG4udGV4dC1hbGlnbiwgLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYmx1ZSB7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbi5raGFraSB7XG4gICAgY29sb3I6IGRhcmtncmVlbjtcbn1cblxuLmRhcmtibHVlIHtcbiAgICBjb2xvcjogZGFya2JsdWU7XG59XG5cbi5saW1lZ3JlZW4ge1xuICAgIGNvbG9yOiAjMzJDRDMyO1xufVxuXG4uZGFya3JlZCB7XG4gICAgY29sb3I6IGRhcmtyZWQ7XG59XG5cbi5ici1iZWlnZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAuMTI1cmVtIHNvbGlkICNiZWFmOTg7XG59XG4uYmwtYmVpZ2Uge1xuICAgIGJvcmRlci1sZWZ0OiAuMTI1cmVtIHNvbGlkICNiZWFmOTg7XG59XG4uYnQtYmVpZ2Uge1xuICAgIGJvcmRlci10b3A6IC4xMjVyZW0gc29saWQgI2JlYWY5ODtcbn1cbi5iYi1iZWlnZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogLjEyNXJlbSBzb2xpZCAjYmVhZjk4O1xufVxuXG4ucmVjdGFuZ2xlIHtcbiAgICB3aWR0aDogMjVyZW07XG4gICAgaGVpZ2h0OiAuNjI1cmVtO1xufVxuLmZsZXgsIC5zaG93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mbG9hdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLnB1bGwtdXB7XG4gICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG59XG5cblxuLnB1bGwtbGVmdHtcbiAgICBtYXJnaW4tbGVmdDogLTcuNXJlbTtcbn1cbi5wdWxsLWxlZnQtcHVsbHtcbiAgICBtYXJnaW4tbGVmdDogLTcuNXJlbTtcbn1cblxuLnB1bGwtbGVmdC0yNHtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4vKiAucHVsbC1sZWZ0LTI0LS1yZXNldHtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xufSAqL1xuXG4ubW92ZUFuZENvbG9yIHtcbiAgICBhbmltYXRpb246IG1vdmVBbmRDb2xvciAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZS1pbWFnZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMuMTI1cmVtKTtcbiAgICB9XG59IFxuQGtleWZyYW1lcyBtb3ZlLXVwLWZhc3Qge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjE4NzVyZW0pO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgbW92ZS1kb3duLWZhc3Qge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNC42ODc1cmVtKTtcbiAgICB9XG59IFxuXG4uc2hvdy1mYWRlSW57XG4gICAgYW5pbWF0aW9uOiBzaG93LWZhZGVJbiAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5zaG93LXNsb3ctZmFkZUlue1xuICAgIGFuaW1hdGlvbjogc2hvdy1zbG93LWZhZGVJbiAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5jb21taXQtZmFkZUluLTEge1xuICAgIGFuaW1hdGlvbjogY29tbWl0LWZhZGVJbi0xIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5jb21taXQtZmFkZUluLTIge1xuICAgIGFuaW1hdGlvbjogY29tbWl0LWZhZGVJbi0yIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmNvbW1pdC1mYWRlSW4tMyB7XG4gICAgYW5pbWF0aW9uOiBjb21taXQtZmFkZUluLTMgM3MgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZXtcbiAgICBhbmltYXRpb246IG1vdmUgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuXG59XG5cbi5tb3ZlLWltYWdlIHtcbiAgICBhbmltYXRpb246IG1vdmUtaW1hZ2UgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLm1vdmUtbGVmdCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWxlZnQgLjc1cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWxlZnQtZnJvbS13b3JraW5nIHtcbiAgICBhbmltYXRpb246IG1vdmUtbGVmdC1mcm9tLXdvcmtpbmcgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1sZWZ0LWZyb20taW5kZXgge1xuICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LWZyb20taW5kZXggMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLm1vdmUtbGVmdC1mcm9tLWluZGV4LTIge1xuICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LWZyb20taW5kZXgtMiAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXJpZ2h0IHtcbiAgICBhbmltYXRpb246IG1vdmUtcmlnaHQgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1yaWdodC1wdWxsIHtcbiAgICBhbmltYXRpb246IG1vdmUtcmlnaHQtcHVsbCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXJpZ2h0LW1lcmdlIHtcbiAgICBhbmltYXRpb246IG1vdmUtcmlnaHQtbWVyZ2UgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLm1vdmUtcmlnaHQtZmV0Y2gge1xuICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1mZXRjaCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwIHtcbiAgICBhbmltYXRpb246IG1vdmUtdXAgMS4zcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwLXB1bGwge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cC1wdWxsIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS11cC0tcHVzaCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXVwLS1wdXNoIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS11cC1mYXN0IHtcbiAgICBhbmltYXRpb246IG1vdmUtdXAtZmFzdCAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1kb3duLWZhc3Qge1xuICAgIGFuaW1hdGlvbjogbW92ZS1kb3duLWZhc3QgMnMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1kb3duLW9uZSB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWRvd24tb25lIC41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWRvd24tdHdvIHtcbiAgICBhbmltYXRpb246IG1vdmUtZG93bi10d28gLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtZG93bi10aHJlZSB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWRvd24tdGhyZWUgLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi8qIFxuLm92ZXJ3cml0ZS1pbmRleCB7XG4gICAgYW5pbWF0aW9uOiBvdmVyd3JpdGUtaW5kZXggMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ub3ZlcndyaXRlLWluZGV4MSB7XG4gICAgYW5pbWF0aW9uOiBvdmVyd3JpdGUtaW5kZXgxIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ub3ZlcndyaXRlLWluZGV4MiB7XG4gICAgYW5pbWF0aW9uOiBvdmVyd3JpdGUtaW5kZXgyIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLm92ZXJ3cml0ZS1pbmRleDMge1xuICAgIGFuaW1hdGlvbjogb3ZlcndyaXRlLWluZGV4MyAxLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn0gKi9cbi8qIFxuLmhlYWRDb2xvckdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XG4gICAgYW5pbWF0aW9uOiBtb3ZlVG9Xb3JraW5nQXJlYSAxLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuXG4uaGVhZENvbG9yUmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XG4gICAgYW5pbWF0aW9uOiBtb3ZlVG9Xb3JraW5nQXJlYSAyLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmhlYWRDb2xvclB1cnBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtcHVycGxlO1xuICAgIGFuaW1hdGlvbjogbW92ZVRvV29ya2luZ0FyZWEgMi41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5oZWFkQ29sb3JHcmF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkVCRUJFO1xuICAgIGFuaW1hdGlvbjogbW92ZVRvV29ya2luZ0FyZWEgMi41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59ICovXG5cblxuLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDEuODc1cmVtIDEuODc1cmVtIDAgMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gICAgcGFkZGluZzogLjkzNzVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBtYXJnaW4tYm90dG9tOiAuMTI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFsaWduLWxlZnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmFsaWduLXJpZ2h0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5qdXN0aWZ5LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaXJlY3Rpb24tY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucGItOCB7XG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xufVxuLnBiLTE2IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbi5wYi0yNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cblxuLnBiLTI4IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS43NXJlbTtcbn1cbi5wYi0zMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5wYi00MiB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNjI1cmVtO1xufVxuLnB0LTMyIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLnB0LTU0IHtcbiAgICBwYWRkaW5nLXRvcDogMy4zNzVyZW07XG59XG5cbi5wdC02NCB7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG59XG5cbi5wdC0xMDAge1xuICAgIHBhZGRpbmctdG9wOiA2LjI1cmVtO1xufVxuXG4ucHQtNCB7XG4gICAgcGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLnByLTh7XG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XG59XG4ucHItMTYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5wci0yNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xufVxuLnByLTMyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuXG4ucHItNDgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG59XG4ucHItNjQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG59XG4udy1xdWFydGVyIHtcbiAgICB3aWR0aDogMjUlO1xufVxuXG4udy1oYWxmIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4udy1mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm9yZGVyLTEge1xuICAgIG9yZGVyOiAxO1xufVxuLyogXG5Aa2V5ZnJhbWVzIG1vdmVUb1dvcmtpbmdBcmVhIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTkuNXJlbSk7XG4gICAgfVxufSAgKi9cblxuQGtleWZyYW1lcyBjb21taXQtZmFkZUluLTEge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDguNzVyZW0pO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgY29tbWl0LWZhZGVJbi0yIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHJlbSk7XG4gICAgfVxuICAgIDMyJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHJlbSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBjb21taXQtZmFkZUluLTMge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDExLjI1cmVtKTtcbiAgICB9XG4gICAgNDIlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDExLjI1cmVtKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59IFxuXG5cbkBrZXlmcmFtZXMgc2hvdy1mYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufSBcbkBrZXlmcmFtZXMgc2hvdy1zbG93LWZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59IFxuXG4vKiBkZXNrdG9wIG9ubHkgY3NzICAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjByZW0pIHtcbiAgICAuZm9udC1zaXplLWNoYW5nZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICB9XG4gICAgLmZsZXgtZGlyZWN0aW9uLWNoYW5nZSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgIC5wdWxsLXVwLWltYWdle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTEuMTI1cmVtO1xuICAgIH1cbiAgICAucHYtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDMuMTI1cmVtO1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZSB7XG4gICAgICAgIHdpZHRoOiA5LjM1N3JlbTtcbiAgICB9XG4gICAgLmltYWdlLXNpemUtLWNsb25lIHtcbiAgICAgICAgd2lkdGg6IDkuMzU3cmVtO1xuICAgIH1cblxuICAgIC5pbWFnZS1zaXplLS1mZXRjaCB7XG4gICAgICAgIHdpZHRoOiA5LjM1N3JlbTtcbiAgICB9XG4gICAgLnB0LWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbiAgICAucHQtY2hhbmdlLS1jbG9uZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbiAgICAucHQtY2hhbmdlLS1jb21taXQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLnBiLWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIH1cblxuICAgIC5pbmRleF9jb21taXQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMy4yNXJlbTtcbiAgICB9XG4gICAgLm9yZGVyLXN3aXRjaC0wIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgfVxuXG4gICAgLm9yZGVyLXN3aXRjaC0yIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgfVxuXG4gICAgLm9yZGVyLXN3aXRjaC1zdGFzaCB7XG4gICAgICAgIG9yZGVyOiAtMTtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBtb3ZlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNC41MzEyNXJlbSk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOS44NzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMy40Mzc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS13b3JraW5nIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04LjQzNzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3Ljk0cmVtLCAxLjI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleC0yIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3Ljk0cmVtLCAyLjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtcHVsbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1mZXRjaCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNy44MTI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LW1lcmdlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzLjc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMTg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS43NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLS1wdXNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMTg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLWZhc3Qge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMTg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tZmFzdCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQuNjg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tb25lIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdHdvIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi10aHJlZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3LjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICAvKiBAa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNS4wNjI1cmVtLCAtLjE4NzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleDEge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNC44MXJlbSwgLTIuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00LjgxcmVtLCAtNS4xODc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgzIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQuODFyZW0sIC0uNjlyZW0pO1xuICAgICAgICB9XG4gICAgfSAgKi9cbiAgICBAa2V5ZnJhbWVzIG1vdmVBbmRDb2xvciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQuNTNyZW0pO1xuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkuMDZyZW0pO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuLyogbW9iaWxlIGxhbmRzY2FwZSBjc3MgICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpICB7XG4gICAgLmhpZGUtaW4tbGFuZHNjYXBle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5wbC1sYW5kc2NhcGUtY2xvbmV7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMS4zNzVyZW07XG4gICAgfVxuXG4gICAgLnBsLWNoYW5nZS1zdGF0dXMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyLjVyZW07XG4gICAgfVxuXG4gICAgLmZvbnQtY2hhbmdlLTE0LTE2IHtcbiAgICAgICAgZm9udC1zaXplOiAuODc1cmVtO1xuICAgIH1cblxuICAgIC5jaGFuZ2UtZGlyZWN0aW9uLXN0YXNoIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG5cbiAgICAucHVsbC11cC1pbi1wdXNoIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIuODFyZW07XG4gICAgfVxuXG4gICAgLnB0LTMyLWluLXBvcnRyYWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XG4gICAgfVxuXG4gICAgLnB2LWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIH1cbiAgICAucHVsbC11cC1mZXRjaCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC00LjM3NXJlbTtcbiAgICB9XG5cbiAgICAucHQtY2hhbmdlLXB1bGwge1xuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtcHVsbC0yIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XG4gICAgfVxuXG4gICAgLm1hcmdpbi1pbi1sYW5kc2NhcGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMS4yNXJlbTtcbiAgICB9XG5cbiAgICAubXQtY2hhbmdlLXB1bGwtMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNjI1cmVtO1xuICAgIH1cblxuICAgIC5tdC1jaGFuZ2UtcHVsbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjg3NXJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdWxsLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtMi1tYWMge1xuICAgICAgICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtMi1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC4xMjVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC00LW1hYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjc1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtNC1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjc1cmVtO1xuICAgIH1cblxuICAgIC5tdC1jaGFuZ2UtcHVsbC01IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC02IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gICAgfVxuXG4gICAgLnBiLWNoYW5nZS0xNi0zMiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAtLjYyNXJlbTtcbiAgICAgICAgfVxuXG4gICAgLnBhZGRpbmctbGFuZHNjYXBlLWNvbW1pdC10e1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLnBhZGRpbmctbGFuZHNjYXBlLWNvbW1pdC1ie1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgfVxuICAgIC5vcmRlci1zd2l0Y2gtMCB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cblxuICAgIC5wdC1jaGFuZ2UtLWNsb25lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZSB7XG4gICAgICAgIHdpZHRoOiA5LjM1N3JlbTtcbiAgICB9XG5cbiAgICAucHVsbC11cC1pbWFnZXtcbiAgICAgICAgbWFyZ2luLXRvcDogLTMuNjI1cmVtO1xuICAgIH1cblxuICAgIC5pbWFnZS1zaXplLS1jbG9uZSB7XG4gICAgICAgIHdpZHRoOiAzLjEyNXJlbTtcbiAgICB9XG5cbiAgICAuaW1hZ2Utc2l6ZS0tZmV0Y2gge1xuICAgICAgICB3aWR0aDogMy4xMjVyZW07XG4gICAgICAgIGhlaWdodDogMy4xMjVyZW07XG4gICAgfVxuXG4gICAgLmZsZXgtZGlyZWN0aW9uLWNoYW5nZSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgIC5wbC1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xuICAgIH1cbiAgICAucGNoYW5nZS1icmFuY2gge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDByZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNjI1cmVtO1xuICAgIH1cblxuICAgIFxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLW9uZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXR3byB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdGhyZWUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgLyogQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNC44MXJlbSwgLS4xODc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgxIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQuODFyZW0sIC0yLjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleDIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNC44MXJlbSwgLTUuMTg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00LjgxcmVtLCAtNy42OXJlbSk7XG4gICAgICAgIH1cbiAgICB9ICAqL1xuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS13b3JraW5nIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04LjQ0cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3Ljk0LCAxLjM3NXJlbSk7XG4gICAgICAgIH1cblxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleC0yIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3Ljk0cmVtLCAyLjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03LjE5cmVtLCAtLjE4NzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1LjYyNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUuNjI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtbWVyZ2Uge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMuNzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi4yNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlQW5kQ29sb3Ige1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0Ljg0cmVtKTtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5LjY5cmVtKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5LjM3NXJlbSwgLjMxMjVyZW0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWZldGNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzLjc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi8qIG1vYmlsZSBwb3J0cmFpdCBjc3MgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5pbWFnZS1zaXplLWljb24ge1xuICAgICAgICB3aWR0aDogMS44NzVyZW07XG4gICAgfVxuICAgIC5pbWFnZS1zaXplIHtcbiAgICAgICAgd2lkdGg6IDYuMnJlbTtcbiAgICB9XG4gICAgLmZvbnQtc2l6ZS1jaGFuZ2Uge1xuICAgICAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgIH1cblxuICAgIC5wdi1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIH1cbiAgICAucGwtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgIH1cbiAgICAuY2hhbmdlLWRpcmVjdGlvbiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5jaGFuZ2UtZGlyZWN0aW9uLXN0YXNoIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuaGVpZ2h0LWNoYW5nZSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDZyZW1cbiAgICB9XG5cbiAgICAucHQtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNsb25lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIH1cblxuICAgIC5wYi1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAuYmwtY2hhbmdlIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IC4xMjVyZW0gc29saWQgI2JlYWY5ODtcbiAgICB9XG5cbiAgICAuaW5kZXhfY29tbWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEuODc1cmVtO1xuICAgIH1cblxuICAgIC5vcmRlci1zd2l0Y2gtMCB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgIH1cbiAgICAub3JkZXItc3dpdGNoLTIge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLXN0YXNoIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5mbGV4LWRpcmVjdGlvbi1jaGFuZ2Uge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuXG4gICAgLyogLnB1bGwtbGVmdC0yNC0tcmVzZXQge1xuICAgICAgICBhbmltYXRpb246IHB1bGwtbGVmdC0yNC0tcmVzZXQgMXMgbGluZWFyO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICB9ICovXG5cbiAgICAucGwtNjQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuXG4gICAgLnctMzUwLS1yZXNldCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5taW4tdy0xNTAtLXJlc2V0IHtcbiAgICAgICAgbWluLXdpZHRoOiAzLjEyNXJlbTtcbiAgICB9XG4gICAgLnctNDAtLXJlc2V0IHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gICAgLnBsLTkyLWV4Y2VwdC1wb3J0cmFpdHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgIH1cbiAgICAuYmwtc3Rhc2gge1xuICAgICAgICBib3JkZXItbGVmdDogLjEyNXJlbSBzb2xpZCAjYmVhZjk4O1xuICAgIH1cbiAgICAuZm9udC1jaGFuZ2UtMTQtMTYge1xuICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgfVxuICAgIFxuXG4gICAgLnB1bGwtdXAtaW4tcHVzaC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICB9XG4gICAgXG5cbiAgICAucHQtMzItZGVza3RvcC1wdXNoIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIFxuXG4gICAgLm10LWluLXBvcnRyYWl0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTQuNjg3NXJlbTtcbiAgICB9XG5cbiAgICAubXQtaW4tcG9ydHJhaXQtMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yLjVyZW07XG4gICAgfVxuXG4gICAgLmhpZGUtaW4tcG9ydHJhaXQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5wdC0zMi1pbi1wb3J0cmFpdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cblxuICAgIFxuICAgIC5wci02NC1leGNlcHQtcG9ydHJhaXQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xuICAgIH1cbiAgICAuaC1jaGFuZ2UtMjgtNDgge1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgfVxuICAgIC5wdWxsLXVwLWltYWdle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMy43NXJlbTtcbiAgICB9XG5cbiAgICAuaW1hZ2Utc2l6ZS0tZmV0Y2gge1xuICAgICAgICB3aWR0aDogMy4xMjVyZW07XG4gICAgICAgIGhlaWdodDogMy4xMjVyZW07XG4gICAgfVxuICAgICAgICAgICAgXG4gICAgLyogQGtleWZyYW1lcyBwdWxsLWxlZnQtMjQtLXJlc2V0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgIH0gICovXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmVBbmRDb2xvciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVVKC0zLjEyNXJlbSk7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYuNTYyNXJlbSk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG5cblxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkgIHtcbiBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtaW1hZ2Uge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKDcuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlVG9Xb3JraW5nQXJlYSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQuNjhyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLW9uZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXR3byB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdGhyZWUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgLyogQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05LjEyNXJlbSwgLS4wNjI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgxIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkuMzc1cmVtLCAtMi41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgyIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkuMTg3NXJlbSwgLTUuMTg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05LjE4NzVyZW0sIC0uNjlyZW0pO1xuICAgICAgICB9XG4gICAgfSAgKi9cblxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20td29ya2luZyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3Ljk0cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMy4zMTI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleC0yIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEzcmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNy4xOXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUuNjI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEuMnJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1tZXJnZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMy43NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi4wNjI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVsbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjEyNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWZldGNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04LjU2cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMy4xMjVyZW0pO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02Ljc1cmVtKVxuICAgICAgICB9XG4gICAgfSBcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"visGitApp flex direction-column align-center\"> \n  <div class=\"flex align-center justify-center pl-8 pv-change\">\n    <img class=\"image-size-icon\" alt=\"Visual Git Logo\" src=\"favicon.ico\"/>\n    <div class=\"font-size-change bold pl-16\">Visualize Git</div>\n  </div>\n  <mat-form-field class=\"w-250\" appearance=\"fill\">\n    <mat-label float=\"never\">Choose a git command</mat-label>\n    <mat-select (selectionChange)=\"selectCommand($event.value)\">\n      <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n      >{{command.name}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <button *ngIf=\"chosenCommand !== '' && reset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>See {{chosenCommand}} Again</span></button>\n\n  \n  <visualize-add [someData]=\"chosenCommand\" @fade *ngIf=\"chosenCommand === 'add'\" class=\"flex w-full justify-center change-direction\"></visualize-add>\n  <visualize-branch @fade *ngIf=\"chosenCommand === 'branch'\" class=\"flex w-full justify-center change-direction\"></visualize-branch>\n  <visualize-checkout @fade *ngIf=\"chosenCommand === 'checkout'\" class=\"flex w-full justify-center change-direction\"></visualize-checkout>\n  <visualize-clone @fade *ngIf=\"chosenCommand === 'clone'\" class=\"flex w-full justify-center change-direction\"></visualize-clone>\n  <visualize-commit @fade *ngIf=\"chosenCommand === 'commit'\" class=\"flex w-full justify-center change-direction\"></visualize-commit>\n  <visualize-fetch @fade *ngIf=\"chosenCommand === 'fetch'\" class=\"flex w-full justify-center change-direction\"></visualize-fetch>\n  <visualize-init @fade *ngIf=\"chosenCommand === 'init'\" class=\"flex w-full justify-center change-direction\"></visualize-init>\n  <visualize-log @fade *ngIf=\"chosenCommand === 'log'\" class=\"flex w-full justify-center change-direction\"></visualize-log>\n  <visualize-merge @fade *ngIf=\"chosenCommand === 'merge'\" class=\"flex w-full justify-center change-direction\"></visualize-merge>\n  <visualize-pull @fade *ngIf=\"chosenCommand === 'pull'\" class=\"flex w-full align-center justify-center change-direction\"></visualize-pull>\n  <visualize-push @fade *ngIf=\"chosenCommand === 'push'\" class=\"flex w-full justify-center change-direction\"></visualize-push>\n  <visualize-reset @fade *ngIf=\"chosenCommand === 'reset'\" class=\"flex w-full justify-center change-direction\"></visualize-reset>\n  <visualize-stash @fade *ngIf=\"chosenCommand === 'stash'\" class=\"flex w-full justify-center change-direction\"></visualize-stash>\n  <visualize-status @fade *ngIf=\"chosenCommand === 'status'\" class=\"flex w-full justify-center change-direction\"></visualize-status>\n\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.state = 'small';
        this.title = 'visualize-git';
        this.commands = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.innerWidth > 960) {
            this.commands = [
                { name: 'add' },
                { name: 'branch' },
                { name: 'checkout' },
                { name: 'clone' },
                { name: 'commit' },
                { name: 'fetch' },
                { name: 'init' },
                { name: 'log' },
                { name: 'merge' },
                { name: 'pull' },
                { name: 'push' },
                { name: 'reset' },
                { name: 'stash' },
                { name: 'status' }
            ];
        }
        else {
            this.commands = [
                { name: 'add' },
                { name: 'branch' },
                { name: 'checkout' },
                { name: 'clone' },
                { name: 'commit' },
                { name: 'fetch' },
                { name: 'init' },
                { name: 'log' },
                { name: 'merge' },
                { name: 'pull' },
                { name: 'push' },
                { name: 'stash' },
                { name: 'status' }
            ];
        }
        this.chosenCommand = '';
        // const temp = localStorage.getItem('chosenCommand');
        // if (temp){
        //   this.chosenCommand = temp;
        // } else {
        //   this.chosenCommand = '';
        // }
    };
    AppComponent.prototype.selectCommand = function (command) {
        this.chosenCommand = command;
        localStorage.setItem('chosenCommand', this.chosenCommand);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], AppComponent.prototype, "selectionChange", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('myTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'scale(1.7)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('large <=> small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms'))
                ]),
                _animations__WEBPACK_IMPORTED_MODULE_3__["fade"],
                _animations__WEBPACK_IMPORTED_MODULE_3__["myTrigger2"]
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _commit_commit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commit/commit.component */ "./src/app/commit/commit.component.ts");
/* harmony import */ var _init_init_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./init/init.component */ "./src/app/init/init.component.ts");
/* harmony import */ var _clone_clone_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clone/clone.component */ "./src/app/clone/clone.component.ts");
/* harmony import */ var _push_push_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./push/push.component */ "./src/app/push/push.component.ts");
/* harmony import */ var _pull_pull_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pull/pull.component */ "./src/app/pull/pull.component.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/reset/reset.component.ts");
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./log/log.component */ "./src/app/log/log.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/branch/branch.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _stash_stash_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stash/stash.component */ "./src/app/stash/stash.component.ts");
/* harmony import */ var _merge_merge_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./merge/merge.component */ "./src/app/merge/merge.component.ts");
/* harmony import */ var _fetch_fetch_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fetch/fetch.component */ "./src/app/fetch/fetch.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
                _commit_commit_component__WEBPACK_IMPORTED_MODULE_8__["CommitComponent"],
                _init_init_component__WEBPACK_IMPORTED_MODULE_9__["InitComponent"],
                _clone_clone_component__WEBPACK_IMPORTED_MODULE_10__["CloneComponent"],
                _push_push_component__WEBPACK_IMPORTED_MODULE_11__["PushComponent"],
                _pull_pull_component__WEBPACK_IMPORTED_MODULE_12__["PullComponent"],
                _reset_reset_component__WEBPACK_IMPORTED_MODULE_13__["ResetComponent"],
                _log_log_component__WEBPACK_IMPORTED_MODULE_14__["LogComponent"],
                _branch_branch_component__WEBPACK_IMPORTED_MODULE_15__["BranchComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_16__["StatusComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__["CheckoutComponent"],
                _stash_stash_component__WEBPACK_IMPORTED_MODULE_18__["StashComponent"],
                _merge_merge_component__WEBPACK_IMPORTED_MODULE_19__["MergeComponent"],
                _fetch_fetch_component__WEBPACK_IMPORTED_MODULE_20__["FetchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/branch/branch.component.html":
/*!**********************************************!*\
  !*** ./src/app/branch/branch.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue pchange-branch h-28\" >\n    <div *ngIf=\"!hideMessage\" [@myTrigger]=\"fadeIn\">The asterisk (*) indicates the current branch</div>  \n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeBranch()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git branch\"</button>\n    <div class=\"pr-8\"></div>\n    <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n  </div>\n\n  <section class= \"flex direction-column pt-16 w-quarter align-left\" >\n    <div [ngClass]=\"{'green': i == '1'}\" class=\"pl-change pt-8 pb-8\" *ngFor=\"let branch of branches; let i = index\" [@myTrigger]=\"fadeIn\">{{branch}}</div>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "./src/app/branch/branch.component.ts":
/*!********************************************!*\
  !*** ./src/app/branch/branch.component.ts ***!
  \********************************************/
/*! exports provided: BranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchComponent", function() { return BranchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");



var BranchComponent = /** @class */ (function () {
    function BranchComponent() {
    }
    BranchComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.branches = [];
    };
    BranchComponent.prototype.push = function (message) {
        this.branches.push(message);
    };
    BranchComponent.prototype.visualizeBranch = function () {
        var _this = this;
        setTimeout(function () {
            _this.push('bug/25282');
        }, 200);
        setTimeout(function () {
            _this.push('*main');
        }, 400);
        setTimeout(function () {
            _this.push('navigation1');
        }, 600);
        setTimeout(function () {
            _this.push('pbi/2539');
        }, 800);
        setTimeout(function () {
            _this.hideMessage = false;
        }, 1500);
        setTimeout(function () {
            _this.showReset = true;
        }, 2000);
    };
    BranchComponent.prototype.reset = function () {
        window.location.reload();
    };
    BranchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-branch',
            template: __webpack_require__(/*! ./branch.component.html */ "./src/app/branch/branch.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BranchComponent);
    return BranchComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue h-change-28-48 align-center\" >\n    <div *ngIf=\"hideMessage2 && hideMessage3\" >Example: The HEAD points to the branch \"main\"</div>  \n    <div *ngIf=\"!hideMessage2 && !hideMessage\" >The HEAD points to the branch \"bug/25282\"</div>  \n    <div class=\"pl-32 pr-32 text-center\" *ngIf=\"!hideMessage3 && !hideMessage\">A new branch is created (a copy of \"main\") and the HEAD points to it.</div>  \n  </div>\n  <div class=\"flex pt-16\">\n    <div class=\"pr-8\"></div>\n    <mat-form-field class=\"w-full stash-field\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose an option</mat-label>\n      <mat-select [disabled]=\"disableOption\" (selectionChange)=\"selectCommand($event.value)\">\n        <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n        >{{command.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <section class=\"flex flex-direction-change align-center\">\n    <button *ngIf=\"chosenCommand === 'checkout an existing branch'\" [disabled]=\"!hideMessage\" (click)=\"visualizeCheckout()\" class=\"w-300\" mat-raised-button color=\"warn\">Visualize \"git checkout bug/25282\"</button>\n    <div class=\"pr-8 pb-8\"></div>\n    <button *ngIf=\"chosenCommand === 'create and checkout a new branch'\" [disabled]=\"!hideMessage\" (click)=\"visualizeCheckoutNew()\" class=\"w-300\" mat-raised-button color=\"warn\">Visualize \"git checkout -b version_2.0\"</button>\n    <div class=\"pr-8 pb-8\"></div>\n    <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n  </section>\n\n  \n  <div class=\"flex direction-column\">\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pt-16 mt-4 pr-4 white\">&#10132;</div> <!--arrow right-->\n      <div class=\"pt-32 pr-8\">bug/25282</div>\n    </div>\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pr-4\" \n      [ngClass]=\"{'move-up-fast': !hideMessage2, 'move-down-fast': !hideMessage3 }\">&#10132;</div> <!--arrow right-->\n      <div class=\"mt-8 pr-8\">main</div>\n    </div>\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pr-2 white\">&#10132;</div> <!--arrow right-->\n      <div class=\"mt-8 pr-8\">pbi/25391</div>\n    </div>\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pr-2 white\">&#10132;</div> <!--arrow right-->\n      <div class=\"mt-8 pr-8\" [ngClass]=\"{'hide': hideMessage3, 'show-fadeIn': !hideMessage3 }\">version_2.0</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");



var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
        this.commands = [
            { name: 'checkout an existing branch' },
            { name: 'create and checkout a new branch' },
        ];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.hideMessage2 = true;
        this.hideMessage3 = true;
        this.disableOption = false;
    };
    CheckoutComponent.prototype.selectCommand = function (command) {
        this.chosenCommand = command;
    };
    CheckoutComponent.prototype.visualizeCheckout = function () {
        var _this = this;
        this.hideMessage2 = false;
        this.hideMessage = false;
        this.disableOption = true;
        setTimeout(function () {
            _this.hideMessage = false;
        }, 1000);
    };
    CheckoutComponent.prototype.visualizeCheckoutNew = function () {
        var _this = this;
        this.hideMessage3 = false;
        this.hideMessage = false;
        this.disableOption = true;
        setTimeout(function () {
            _this.hideMessage = false;
        }, 2000);
    };
    CheckoutComponent.prototype.reset = function () {
        window.location.reload();
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/clone/clone.component.html":
/*!********************************************!*\
  !*** ./src/app/clone/clone.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-change-28-48\">\n      <span [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">The git repo is cloned on the user's computer</span>\n    </div>\n    <div class=\"flex flex-direction-change align-center\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeClone()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git clone url\"</button>\n      <div class=\"pr-8 pb-8\"></div>\n      <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n    </div>\n  </div>\n <div class=\"flex pt-change--clone justify-center\"> \n    <section class=\"flex direction-column text-center align-center\"> \n      <div class=\"pb-8 font-change-14-16\">Repository at url <br>(example: GitHub repo) </div>\n      <img  class=\"image-size--clone\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      <img  class=\"image-size--clone pull-up-image\" [ngClass]=\"{'hide': hideMessage, 'show, move-image': !hideMessage}\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n    </section>\n    <section class=\"pl-64\">\n      <div class=\"font-change-14-16 pl-landscape-clone\">User's Computer</div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/clone/clone.component.ts":
/*!******************************************!*\
  !*** ./src/app/clone/clone.component.ts ***!
  \******************************************/
/*! exports provided: CloneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneComponent", function() { return CloneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CloneComponent = /** @class */ (function () {
    function CloneComponent() {
    }
    CloneComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.showReset = false;
    };
    CloneComponent.prototype.visualizeClone = function () {
        this.hideMessage = false;
        this.showReset = true;
    };
    CloneComponent.prototype.reset = function () {
        window.location.reload();
    };
    CloneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-clone',
            template: __webpack_require__(/*! ./clone.component.html */ "./src/app/clone/clone.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CloneComponent);
    return CloneComponent;
}());



/***/ }),

/***/ "./src/app/commit/commit.component.html":
/*!**********************************************!*\
  !*** ./src/app/commit/commit.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"blue h-48\">\n    <span [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">The index.js snapshot is saved in the Repo</span>\n   </div>\n   <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeCommit()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git commit index.js\"</button>\n    <div class=\"pr-8\"></div>\n    <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n  </div>\n <div class=\"flex pt-change--commit change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n  <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n  <div class=\"pt-change--commit\">index.html</div>\n    <div class=\"pt-4 \">index.js</div>\n  <div class=\"pt-4 pb-change padding-landscape-commit-b\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Index</div>\n    <div class=\"green index_commit padding-landscape-commit-t\" [ngClass]=\"{'moveAndColor': !hideMessage}\">index.js</div></div>\n    <div class=\"order-switch-0 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Repository</div></div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/commit/commit.component.ts":
/*!********************************************!*\
  !*** ./src/app/commit/commit.component.ts ***!
  \********************************************/
/*! exports provided: CommitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitComponent", function() { return CommitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommitComponent = /** @class */ (function () {
    function CommitComponent() {
    }
    CommitComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.showReset = false;
    };
    CommitComponent.prototype.visualizeCommit = function () {
        this.showReset = true;
        this.hideMessage = false;
    };
    CommitComponent.prototype.reset = function () {
        window.location.reload();
    };
    CommitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-commit',
            template: __webpack_require__(/*! ./commit.component.html */ "./src/app/commit/commit.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommitComponent);
    return CommitComponent;
}());



/***/ }),

/***/ "./src/app/fetch/fetch.component.html":
/*!********************************************!*\
  !*** ./src/app/fetch/fetch.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: User 2 executes \"get fetch\"</div>\n      <div class=\"flex direction-column\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        <div>All remote branches are fetched to the local repo and are now available for checkout. </div>\n      </div>\n    </div>\n    <div class=\"flex\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeFetch()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git fetch\"</button>\n      <div class=\"pr-8\"></div>\n      <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n    </div>\n  </div>\n <div class=\"flex flex-direction-change pt-32 pl-16 pr-16\"> \n   <section class=\"flex direction-column justify-center text-center pr-64 order-switch-2 pt-fetch bb-portrait-fetch\"> \n    <div class=\"pl-36 pb-16\">Local Repo User 1</div>\n    <div class=\"flex pr-48 pad-portrait-fetch-1\">\n      <div class=\"flex direction-column\">\n        <div class=\"flex\">\n          <div class=\"pr-8 white\">x</div>\n        </div>\n        <div class=\"flex pull-up-fetch\">\n          <div class=\"mt-8 pt-54 pr-8\">featureA</div>\n        </div>\n      </div>\n      <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n    </div>\n  </section>\n    <section class=\"flex direction-column text-center pr-64 order-1 pt-fetch bb-portrait-fetch\"> \n      <div class=\"pb-16 pl-36\">Remote (Shared) Repo </div>\n      <div class=\"flex justify-center align-center\">\n        <div class=\"flex direction-column pull-up-fetch\">\n          <div class=\"pt-76 pr-8\">featureA</div>\n          <div class=\"pull-up pr-8\" [ngClass]=\"{'hide': hideMessage, 'show move-right-fetch': !hideMessage}\">featureA</div>\n          <div class=\"pt-8 pr-8\">featureB</div>\n          <div class=\"mt-8 pull-up pr-8\"  [ngClass]=\"{'hide': hideMessage, 'show move-right-fetch': !hideMessage}\">featureB</div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column justify-center align-center text-center pr-64 order-switch-0 bb-portrait-fetch\"> \n      <div class=\"pl-30 pb-16\">Local Repo User 2</div>\n      <div class=\"flex pr-48 pad-portrait-fetch-2\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex pull-up-fetch\">\n            <div class=\"pt-76 pr-8 white\">featureA</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"mt-8 pr-8\" [ngClass]=\"{'hide': !hideMessage}\">featureB</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/fetch/fetch.component.ts":
/*!******************************************!*\
  !*** ./src/app/fetch/fetch.component.ts ***!
  \******************************************/
/*! exports provided: FetchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchComponent", function() { return FetchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FetchComponent = /** @class */ (function () {
    function FetchComponent() {
    }
    FetchComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.showReset = false;
    };
    FetchComponent.prototype.visualizeFetch = function () {
        this.hideMessage = false;
        this.showReset = true;
    };
    FetchComponent.prototype.reset = function () {
        window.location.reload();
    };
    FetchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-fetch',
            template: __webpack_require__(/*! ./fetch.component.html */ "./src/app/fetch/fetch.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FetchComponent);
    return FetchComponent;
}());



/***/ }),

/***/ "./src/app/init/init.component.html":
/*!******************************************!*\
  !*** ./src/app/init/init.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"blue h-48 pl-32 pr-32 pb-16 text-center\">\n    <span [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: A folder contains 3 files. No git repository exists.</span>\n    <span [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">\n      A git repository is created (look for a hidden folder call .git).\n      Git init only needs to be run once. </span>\n   </div>\n   <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeInit()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git init\"</button>\n    <div class=\"pr-8\"></div>\n    <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change text-align\"\n         [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Working Area</div>\n      <div class=\"pt-change\">index.html</div>\n      <div class=\"pt-4 \">index.js</div>\n      <div class=\"pt-4 pb-change\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change text-align\"\n        [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Index</div>\n    </div>\n    <div class=\"order-switch-0 height-change text-align\"\n          [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Repository</div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/init/init.component.ts":
/*!****************************************!*\
  !*** ./src/app/init/init.component.ts ***!
  \****************************************/
/*! exports provided: InitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitComponent", function() { return InitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InitComponent = /** @class */ (function () {
    function InitComponent() {
    }
    InitComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.showReset = false;
    };
    InitComponent.prototype.visualizeInit = function () {
        this.hideMessage = false;
        this.showReset = true;
    };
    InitComponent.prototype.reset = function () {
        window.location.reload();
    };
    InitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-init',
            template: __webpack_require__(/*! ./init.component.html */ "./src/app/init/init.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitComponent);
    return InitComponent;
}());



/***/ }),

/***/ "./src/app/log/log.component.html":
/*!****************************************!*\
  !*** ./src/app/log/log.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center \">\n  <div class=\"blue align-center pl-32 pr-32 pb-16 text-center max-w-450\" \n      *ngIf=\"!hideMessage\">Lists the commits for the current branch. Use \"git log\" without options to see more information such as author and date</div>\n  <section class= \"flex direction-column align-center\" >\n    <div class=\"flex\">\n      <div class=\"pr-8\"></div>\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeLog()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git log --oneline\"</button>\n      <div class=\"pr-8\"></div>\n      <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n    </div>\n  </section>\n  <section class=\"flex align-center direction-column\">\n    <div *ngIf=\"!hideMessage\" class=\"flex direction-column align-left pl-50\" >\n      <div class=\"flex-direction-change\"><div class=\"commit flex commit-fadeIn-1 pt-32 pb-2\"><div class=\"w-100 pr-8 khaki bold\">da91bc1a</div><div>( <span class=\"darkblue bold\">HEAD -> </span><span class=\"limegreen bold\">main</span>, <span class=\"red bold pl-2\">origin/main</span>)</div></div>\n      <div class=\"pl-109 commit flex commit-fadeIn-1 pb-8\"> require oauth authentication</div></div>\n      <div class=\"commit flex commit-fadeIn-2 pb-8\"><div class=\"w-100 pr-8 khaki bold\">37bce8f6</div><div>add navigation bar</div></div>\n      <div class=\"commit flex commit-fadeIn-3 pb-8\"><div class=\"w-100 pr-8 khaki bold\">1dd25ea0</div><div>first commit, lay out app</div></div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/log/log.component.ts":
/*!**************************************!*\
  !*** ./src/app/log/log.component.ts ***!
  \**************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");



var LogComponent = /** @class */ (function () {
    function LogComponent() {
    }
    LogComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.showReset = false;
    };
    LogComponent.prototype.visualizeLog = function () {
        this.hideMessage = false;
        this.showReset = true;
    };
    LogComponent.prototype.reset = function () {
        window.location.reload();
    };
    LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-log',
            template: __webpack_require__(/*! ./log.component.html */ "./src/app/log/log.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "./src/app/merge/merge.component.html":
/*!********************************************!*\
  !*** ./src/app/merge/merge.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-change-28-48 pb-change-16-32\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-450\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The main branch is updated with the latest commits from the feature branch.\n        (A merge conflict may need to be resolved.)\n      </div>\n    </div>\n    <div class=\"flex\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeMerge()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git merge feature\"</button>\n      <div class=\"pr-8\"></div>\n      <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n    </div>\n  </div>\n <div class=\"flex pt-32 w-full align-center justify-center\"> \n    <section class=\"flex direction-column text-left pr-16\"> \n      <div class=\"pb-8 pl-32 bold\">feature branch </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-18 pl-4 mt-4 pr-2\">&#10132;</div> <!--arrow right-->\n            <div class=\"pr-2 pt-32\">commit 86b5f</div>\n            <div class=\"pr-8 pull-left pt-32\" [ngClass]=\"{'hide': hideMessage, 'show move-right-merge': !hideMessage}\">commit 86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"font-size-32 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-8 pl-4\">commit e34b2</div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"flex direction-column text-left\"> \n      <div class=\"pb-8 bold pl-32 ml-4\">main branch</div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-18 mt-4 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"white\">commit 86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"font-size-32\" [ngClass]=\"{'move-up': !hideMessage}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pl-2 mt-8\">commit e34b2</div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/merge/merge.component.ts":
/*!******************************************!*\
  !*** ./src/app/merge/merge.component.ts ***!
  \******************************************/
/*! exports provided: MergeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeComponent", function() { return MergeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MergeComponent = /** @class */ (function () {
    function MergeComponent() {
    }
    MergeComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.showReset = false;
    };
    MergeComponent.prototype.visualizeMerge = function () {
        this.hideMessage = false;
        this.showReset = true;
    };
    MergeComponent.prototype.reset = function () {
        window.location.reload();
    };
    MergeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-merge',
            template: __webpack_require__(/*! ./merge.component.html */ "./src/app/merge/merge.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MergeComponent);
    return MergeComponent;
}());



/***/ }),

/***/ "./src/app/pull/pull.component.css":
/*!*****************************************!*\
  !*** ./src/app/pull/pull.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.pt-change-pull-1 {\n    padding-top: 4.75rem;\n}\n.pt-change-pull-2 {\n    padding-top: 4rem;\n}\n.mt-change-pull {\n    margin-top: 0rem;\n}\n.mt-change-pull-2-mac {\n    margin-top: .25rem;\n}\n.mt-change-pull-2-pc {\n    margin-top: -.2rem;\n}\n.mt-change-pull-4-mac {\n    margin-top: -0.75rem;\n}\n.mt-change-pull-4-pc {\n    margin-top: -0.85rem;\n}\n/* desktop only css  */\n@media only screen and (min-device-width: 60rem) {\n\n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    }\n\n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n}\n/* mobile landscape css  */\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n\n    .mt-change-pull-0 {\n        margin-top: -.625rem;\n    }\n\n    .mt-change-pull {\n        margin-top: -1.875rem;\n    }\n    .mt-change-pull-2 {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-2-mac {\n        margin-top: -3.875rem;\n    }\n    .mt-change-pull-2-pc {\n        margin-top: -3.99rem;\n    }\n    .mt-change-pull-4-mac {\n        margin-top: -1.75rem;\n    }\n    .mt-change-pull-4-pc {\n        margin-top: -1.75rem;\n    }\n\n    .mt-change-pull-5 {\n        margin-top: -1.25rem;\n    }\n    .mt-change-pull-6 {\n        margin-top: -.9rem;\n    }\n\n    .pt-change-pull-1 {\n        padding-top: .75rem;\n    }\n\n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(15.9rem);\n        }\n    }\n\n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(15.9rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n}\n/* mobile portrait css */\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n\n    .pt-change-pull-2 {\n        padding-top: 0;\n        padding-bottom: 4rem;\n    }\n\n    .pull-left-pull{\n        margin-left: -3rem;\n    }\n \n\n    .pt-change-pull-1 {\n        padding-top: .9rem;\n    }\n\n    .mt-change-pull {\n        margin-top: -1.25rem;\n    }\n    .mt-change-pull-4-mac {\n        margin-top: -5.3rem;\n    }\n    .mt-change-pull-4-pc {\n        margin-top: -5.3rem;\n    }\n    .mt-change-pull-2 {\n        margin-top: .125rem;\n    }\n\n\n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    }\n\n\n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.125rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.125rem);\n        }\n    } \n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVsbC9wdWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUEsc0JBQXNCO0FBQ3RCOztJQUVJO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDRCQUE0QjtRQUNoQztJQUNKOztJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDRCQUE0QjtRQUNoQztJQUNKOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtBQUNKO0FBRUEsMEJBQTBCO0FBRTFCOztJQUVJO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKOztJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtBQUNKO0FBRUEsd0JBQXdCO0FBQ3hCOztJQUVJO1FBQ0ksY0FBYztRQUNkLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7O0lBR0E7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7OztJQUdBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKOzs7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw4QkFBOEI7UUFDbEM7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGdDQUFnQztRQUNwQztJQUNKOztJQVZBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksZ0NBQWdDO1FBQ3BDO0lBQ0o7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wdWxsL3B1bGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnB0LWNoYW5nZS1wdWxsLTEge1xuICAgIHBhZGRpbmctdG9wOiA0Ljc1cmVtO1xufVxuLnB0LWNoYW5nZS1wdWxsLTIge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xufVxuXG4ubXQtY2hhbmdlLXB1bGwge1xuICAgIG1hcmdpbi10b3A6IDByZW07XG59XG4ubXQtY2hhbmdlLXB1bGwtMi1tYWMge1xuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcbn1cbi5tdC1jaGFuZ2UtcHVsbC0yLXBjIHtcbiAgICBtYXJnaW4tdG9wOiAtLjJyZW07XG59XG5cbi5tdC1jaGFuZ2UtcHVsbC00LW1hYyB7XG4gICAgbWFyZ2luLXRvcDogLTAuNzVyZW07XG59XG4ubXQtY2hhbmdlLXB1bGwtNC1wYyB7XG4gICAgbWFyZ2luLXRvcDogLTAuODVyZW07XG59XG5cbi8qIGRlc2t0b3Agb25seSBjc3MgICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA2MHJlbSkge1xuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS11cC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuLyogbW9iaWxlIGxhbmRzY2FwZSBjc3MgICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpICB7XG5cbiAgICAubXQtY2hhbmdlLXB1bGwtMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNjI1cmVtO1xuICAgIH1cblxuICAgIC5tdC1jaGFuZ2UtcHVsbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjg3NXJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdWxsLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtMi1tYWMge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMy44NzVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC0yLXBjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTMuOTlyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC00LW1hYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjc1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtNC1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjc1cmVtO1xuICAgIH1cblxuICAgIC5tdC1jaGFuZ2UtcHVsbC01IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC02IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLS45cmVtO1xuICAgIH1cblxuICAgIC5wdC1jaGFuZ2UtcHVsbC0xIHtcbiAgICAgICAgcGFkZGluZy10b3A6IC43NXJlbTtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtcHVsbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNS45cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVsbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uODc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi8qIG1vYmlsZSBwb3J0cmFpdCBjc3MgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuXG4gICAgLnB0LWNoYW5nZS1wdWxsLTIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRyZW07XG4gICAgfVxuXG4gICAgLnB1bGwtbGVmdC1wdWxse1xuICAgICAgICBtYXJnaW4tbGVmdDogLTNyZW07XG4gICAgfVxuIFxuXG4gICAgLnB0LWNoYW5nZS1wdWxsLTEge1xuICAgICAgICBwYWRkaW5nLXRvcDogLjlyZW07XG4gICAgfVxuXG4gICAgLm10LWNoYW5nZS1wdWxsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC00LW1hYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01LjNyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC00LXBjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTUuM3JlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdWxsLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xuICAgIH1cblxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEuMnJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xMjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pull/pull.component.html":
/*!******************************************!*\
  !*** ./src/app/pull/pull.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-600 h-change-28-48\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The local main branch now points to the latest commit from the repo main branch. \n        git pull = git fetch + git merge. (A merge conflict may need to be resolved.) \n      </div>\n    </div>\n    <div class=\"flex align-center pt-32-in-portrait\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizePull()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git pull origin main\"</button>\n      <div class=\"pr-8\"></div>\n      <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n    </div>\n  </div>\n  <div class=\"flex pt-32 align-center\"> \n    <section class=\"flex direction-column text-center pr-64-except-portrait\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16\">\n        <div>Remote Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-pull-2 pl-4 pr-2\" [ngClass]=\"{'mt-change-pull-2-mac': isMac, 'mt-change-pull-2-pc': !isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-pull-1 pr-8\">86b5f</div>\n            <div class=\"pt-change-pull-1 pr-8 pull-left-pull\" [ngClass]=\"{'hide': hideMessage, 'show move-right-pull': !hideMessage}\">86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"font-size-32 pr-2 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-pull-0 pr-8 mt-in-portrait\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column align-center text-center pr-64-except-portrait margin-in-landscape mt-in-portrait-2\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16\">\n        <div>Local Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-pull-2 mt-change-pull-3 pr-2 white\" [ngClass]=\"{'mt-change-pull-2-mac': isMac, 'mt-change-pull-2-pc': !isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-pull-1 pr-8 white \">86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"font-size-32 pr-2\" [ngClass]=\"{'mt-change-pull-4-mac': isMac, 'mt-change-pull-4-pc': !isMac,'move-up-pull': !hideMessage}\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-pull-6 pr-8 mt-in-portrait\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pull/pull.component.ts":
/*!****************************************!*\
  !*** ./src/app/pull/pull.component.ts ***!
  \****************************************/
/*! exports provided: PullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PullComponent", function() { return PullComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PullComponent = /** @class */ (function () {
    function PullComponent() {
    }
    PullComponent.prototype.ngOnInit = function () {
        navigator.userAgent.includes('Mac') ? this.isMac = true : this.isMac = false;
        this.hideMessage = true;
        this.showReset = false;
    };
    PullComponent.prototype.visualizePull = function () {
        this.hideMessage = false;
        this.showReset = true;
    };
    PullComponent.prototype.reset = function () {
        window.location.reload();
    };
    PullComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-pull',
            template: __webpack_require__(/*! ./pull.component.html */ "./src/app/pull/pull.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./pull.component.css */ "./src/app/pull/pull.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PullComponent);
    return PullComponent;
}());



/***/ }),

/***/ "./src/app/push/push.component.css":
/*!*****************************************!*\
  !*** ./src/app/push/push.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.pt-change-push {\n    padding-top: 4.75rem;\n}\n.pt-change-push-2 {\n    padding-top: 4rem;\n}\n.mt-change-push {\n    margin-top: 0rem;\n}\n.mt-change-push-2-mac {\n    margin-top: .25rem;\n}\n.mt-change-push-2-pc {\n    margin-top: -.2rem;\n}\n.mt-change-push-4-mac {\n    margin-top: -0.45rem;\n}\n.mt-change-push-4-pc {\n    margin-top: -0.85rem;\n}\n.move-left-push {\n    -webkit-animation: move-left-push .75s linear;\n            animation: move-left-push .75s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up-push-mac {\n    -webkit-animation: move-up-push-mac 1.5s linear;\n            animation: move-up-push-mac 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up-push-pc {\n    -webkit-animation: move-up-push-pc 1.5s linear;\n            animation: move-up-push-pc 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.pull-left-push-mac {\n    margin-left: -7.2rem;\n}\n.pull-left-push-pc {\n    margin-left: -7.7rem;\n}\n@media only screen and (min-device-width: 60rem) {\n/* desktop */\n    @-webkit-keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    }\n    @keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    } \n/* desktop */\n    @-webkit-keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.85rem);\n        }\n    }\n    @keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.85rem);\n        }\n    } \n    @-webkit-keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.85rem);\n        }\n    } \n    @keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.85rem);\n        }\n    } \n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pt-change-push-2 {\n        padding-top: 0;\n        padding-bottom: 4rem;\n    }\n\n    .mt-change-push-2-mac {\n        margin-top: -.5rem;\n\n    }\n    .mt-change-push-2-pc {\n        margin-top: -.5rem;\n    }\n\n    .pull-left-push-mac{\n        margin-left: -2.6rem;\n    }\n    .pull-left-push-pc{\n        margin-left: -2.6rem;\n    }\n\n\n    .pt-change-push {\n        padding-top: 0;\n    }\n    .mt-change-push-4-mac {\n        margin-top: -5.4rem;\n    }\n    .mt-change-push-4-pc {\n        margin-top: -5.7rem;\n    }\n/* portrait */\n    @-webkit-keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-12rem);\n        }\n    }\n    @keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-12rem);\n        }\n    } \n\n    /* portrait */\n    @-webkit-keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    }\n    @keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n    @-webkit-keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n    @keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n\n    .mt-landscape {\n        margin-top: -4.5rem;\n    }\n\n    .pt-change-push-2 {\n        padding-top: 0;\n        padding-bottom: 4rem;\n    }\n    .mt-change-push-2-mac {\n        margin-top: -.5rem;\n\n    }\n    .mt-change-push-2-pc {\n        margin-top: -.5rem;\n    }\n\n    .pull-left-push-mac{\n        margin-left: -2.6rem;\n    }\n    .pull-left-push-pc{\n        margin-left: -2.6rem;\n    }\n\n    .pt-change-push {\n        padding-top: 0;\n    }\n    .mt-change-push-4-mac {\n        margin-top: -5.1rem;\n    }\n    .mt-change-push-4-pc {\n        margin-top: -5.7rem;\n    }\n    /* landscape */\n    @-webkit-keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-11.7rem);\n        }\n    }\n    @keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-11.7rem);\n        }\n    } \n    /* landscape */\n    @-webkit-keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.5rem);\n        }\n    }\n    @keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.5rem);\n        }\n    } \n    @-webkit-keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.5rem);\n        }\n    } \n    @keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.5rem);\n        }\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVzaC9wdXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLCtDQUF1QztZQUF2Qyx1Q0FBdUM7SUFDdkMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUdBO0FBQ0EsWUFBWTtJQUNSO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGtDQUFrQztRQUN0QztJQUNKO0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksa0NBQWtDO1FBQ3RDO0lBQ0o7QUFDSixZQUFZO0lBQ1I7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtJQVZBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLCtCQUErQjtRQUNuQztJQUNKO0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxrQkFBa0I7O0lBRXRCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4Qjs7O0lBR0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKLGFBQWE7SUFDVDtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw2QkFBNkI7UUFDakM7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOztJQUVBLGFBQWE7SUFDYjtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLCtCQUErQjtRQUNuQztJQUNKO0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtJQUNBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7SUFWQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLCtCQUErQjtRQUNuQztJQUNKO0FBQ0o7QUFHQTs7SUFFSTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGtCQUFrQjs7SUFFdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQSxjQUFjO0lBQ2Q7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtJQUNBLGNBQWM7SUFDZDtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKO0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw4QkFBOEI7UUFDbEM7SUFDSjtJQUNBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksOEJBQThCO1FBQ2xDO0lBQ0o7SUFWQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wdXNoL3B1c2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnB0LWNoYW5nZS1wdXNoIHtcbiAgICBwYWRkaW5nLXRvcDogNC43NXJlbTtcbn1cbi5wdC1jaGFuZ2UtcHVzaC0yIHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cblxuLm10LWNoYW5nZS1wdXNoIHtcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xufVxuLm10LWNoYW5nZS1wdXNoLTItbWFjIHtcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XG59XG4ubXQtY2hhbmdlLXB1c2gtMi1wYyB7XG4gICAgbWFyZ2luLXRvcDogLS4ycmVtO1xufVxuXG4ubXQtY2hhbmdlLXB1c2gtNC1tYWMge1xuICAgIG1hcmdpbi10b3A6IC0wLjQ1cmVtO1xufVxuLm10LWNoYW5nZS1wdXNoLTQtcGMge1xuICAgIG1hcmdpbi10b3A6IC0wLjg1cmVtO1xufVxuXG4ubW92ZS1sZWZ0LXB1c2gge1xuICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LXB1c2ggLjc1cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwLXB1c2gtbWFjIHtcbiAgICBhbmltYXRpb246IG1vdmUtdXAtcHVzaC1tYWMgMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwLXB1c2gtcGMge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cC1wdXNoLXBjIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ucHVsbC1sZWZ0LXB1c2gtbWFjIHtcbiAgICBtYXJnaW4tbGVmdDogLTcuMnJlbTtcbn1cbi5wdWxsLWxlZnQtcHVzaC1wYyB7XG4gICAgbWFyZ2luLWxlZnQ6IC03LjdyZW07XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjByZW0pIHtcbi8qIGRlc2t0b3AgKi9cbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1wdXNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMy40Mzc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4vKiBkZXNrdG9wICovXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1c2gtbWFjIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuODVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVzaC1wYyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjg1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5wdC1jaGFuZ2UtcHVzaC0yIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuICAgIH1cblxuICAgIC5tdC1jaGFuZ2UtcHVzaC0yLW1hYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNXJlbTtcblxuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1c2gtMi1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNXJlbTtcbiAgICB9XG5cbiAgICAucHVsbC1sZWZ0LXB1c2gtbWFje1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIuNnJlbTtcbiAgICB9XG4gICAgLnB1bGwtbGVmdC1wdXNoLXBje1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIuNnJlbTtcbiAgICB9XG5cblxuICAgIC5wdC1jaGFuZ2UtcHVzaCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1c2gtNC1tYWMge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNS40cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1c2gtNC1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01LjdyZW07XG4gICAgfVxuLyogcG9ydHJhaXQgKi9cbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1wdXNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMnJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgLyogcG9ydHJhaXQgKi9cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVzaC1tYWMge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS11cC1wdXNoLXBjIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS44NzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSAge1xuXG4gICAgLm10LWxhbmRzY2FwZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IC00LjVyZW07XG4gICAgfVxuXG4gICAgLnB0LWNoYW5nZS1wdXNoLTIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVzaC0yLW1hYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNXJlbTtcblxuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1c2gtMi1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNXJlbTtcbiAgICB9XG5cbiAgICAucHVsbC1sZWZ0LXB1c2gtbWFje1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIuNnJlbTtcbiAgICB9XG4gICAgLnB1bGwtbGVmdC1wdXNoLXBje1xuICAgICAgICBtYXJnaW4tbGVmdDogLTIuNnJlbTtcbiAgICB9XG5cbiAgICAucHQtY2hhbmdlLXB1c2gge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdXNoLTQtbWFjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTUuMXJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdXNoLTQtcGMge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNS43cmVtO1xuICAgIH1cbiAgICAvKiBsYW5kc2NhcGUgKi9cbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1wdXNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMS43cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgLyogbGFuZHNjYXBlICovXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1c2gtbWFjIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS11cC1wdXNoLXBjIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/push/push.component.html":
/*!******************************************!*\
  !*** ./src/app/push/push.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-600 h-change-28-48 font-change-14-16\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The remote main branch now points to the latest commit from the local main branch.\n        It's advisable to do a pull before a push to a shared repo.\n        When combining code with a push or a pull, merge conflicts may need to be resolved.\n      </div>\n    </div>\n    <div class=\"flex align-center pt-32-in-portrait\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizePush()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git push origin main\"</button>\n      <div class=\"pr-8\"></div>\n      <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n    </div>\n  </div>\n  <div class=\"flex pt-32 align-center\"> \n    <section class=\"flex direction-column text-center pr-64-except-portrait\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16 pull-up-in-push\">\n        <div>Remote Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-push-2 mt-change-push-3 pr-2 white\"\n                  [ngClass]=\"{'mt-change-push-2-mac': isMac, 'mt-change-push-2-pc': !isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-push pr-8 white \">86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"font-size-32 pr-2\" \n            [ngClass]=\"{'move-up-push-mac': !hideMessage && isMac, 'move-up-push-pc': !hideMessage && !isMac,  \n            'mt-change-push-4-mac': isMac, 'mt-change-push-4-pc': !isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-push-6 pr-8 mt-in-portrait mt-landscape\">e34b2</div>\n          </div>\n        </div>\n\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column align-center text-center pr-64-except-portrait margin-in-landscape mt-in-portrait-2\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16 pull-up-in-push-2\">\n        <div>Local Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\"  >\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-push-2 pl-4 pr-2\"\n                [ngClass]=\"{'mt-change-push-2-mac': isMac, 'mt-change-push-2-pc': !isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-push pr-8\">86b5f</div>\n            <div class=\"pt-change-push pr-8\" \n            [ngClass]=\"{'hide': hideMessage, 'show move-left-push': !hideMessage,\n                        'pull-left-push-mac': isMac, 'pull-left-push-pc': !isMac}\">86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"font-size-32 pr-2 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-push-0 pr-8 mt-in-portrait mt-landscape\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/push/push.component.ts":
/*!****************************************!*\
  !*** ./src/app/push/push.component.ts ***!
  \****************************************/
/*! exports provided: PushComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushComponent", function() { return PushComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PushComponent = /** @class */ (function () {
    function PushComponent() {
    }
    PushComponent.prototype.ngOnInit = function () {
        navigator.userAgent.includes('Mac') ? this.isMac = true : this.isMac = false;
        // this.isMac = false; //TODO remove;
        this.hideMessage = true;
        this.hideMessage = true;
        this.showReset = false;
    };
    PushComponent.prototype.visualizePush = function () {
        this.hideMessage = false;
        this.showReset = true;
    };
    PushComponent.prototype.reset = function () {
        window.location.reload();
    };
    PushComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-push',
            template: __webpack_require__(/*! ./push.component.html */ "./src/app/push/push.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./push.component.css */ "./src/app/push/push.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PushComponent);
    return PushComponent;
}());



/***/ }),

/***/ "./src/app/reset/reset.component.css":
/*!*******************************************!*\
  !*** ./src/app/reset/reset.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".green-left-mac-pc {\n    margin-left: -.2rem;\n}\n.adjust-mac-pc {\n    margin-left: -1.7rem !important;\n}\n.adjust2-mac-pc {\n    margin-left: -.1rem !important;\n}\n.pull-left-24--reset{\n    margin-left: -1.5rem !important;\n}\n.overwrite-index-mac {\n    -webkit-animation: overwrite-index-mac .6s linear;\n            animation: overwrite-index-mac .6s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.overwrite-index1-mac {\n    -webkit-animation: overwrite-index1-mac 1.5s linear;\n            animation: overwrite-index1-mac 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.overwrite-index2-mac {\n    -webkit-animation: overwrite-index2-mac 1.5s linear;\n            animation: overwrite-index2-mac 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.overwrite-index3-mac {\n    -webkit-animation: overwrite-index3-mac 1.5s linear;\n            animation: overwrite-index3-mac 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.overwrite-index-pc {\n    -webkit-animation: overwrite-index-pc 1s linear;\n            animation: overwrite-index-pc 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.overwrite-index1-pc {\n    -webkit-animation: overwrite-index1-pc 1.5s linear;\n            animation: overwrite-index1-pc 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.overwrite-index2-pc {\n    -webkit-animation: overwrite-index2-pc 1.5s linear;\n            animation: overwrite-index2-pc 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.overwrite-index3-pc {\n    -webkit-animation: overwrite-index3-pc 1.5s linear;\n            animation: overwrite-index3-pc 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.headColorGreen-mac {\n    background-color: darkseagreen;\n    -webkit-animation: moveToWorkingArea-mac 1.5s linear;\n            animation: moveToWorkingArea-mac 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.headColorRed-mac {\n    background-color: indianred;\n    -webkit-animation: moveToWorkingArea-mac 2.5s linear;\n            animation: moveToWorkingArea-mac 2.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.headColorPurple-mac {\n    background-color: mediumpurple;\n    -webkit-animation: moveToWorkingArea-mac 2.5s linear;\n            animation: moveToWorkingArea-mac 2.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.headColorGray-mac {\n    background-color: #BEBEBE;\n    -webkit-animation: moveToWorkingArea-mac 2.5s linear;\n            animation: moveToWorkingArea-mac 2.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes moveToWorkingArea-mac {\n    0% {\n        opacity: 0;\n        transform: translateX(0);\n    }\n    60% {\n        opacity: 0.3;\n        transform: translateX(0rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(-9.5rem);\n    }\n}\n@keyframes moveToWorkingArea-mac {\n    0% {\n        opacity: 0;\n        transform: translateX(0);\n    }\n    60% {\n        opacity: 0.3;\n        transform: translateX(0rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(-9.5rem);\n    }\n}\n@-webkit-keyframes overwrite-index-mac {\n    0% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-12.3rem, -.17rem);\n    }\n}\n@keyframes overwrite-index-mac {\n    0% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-12.3rem, -.17rem);\n    }\n}\n@-webkit-keyframes overwrite-index1-mac {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-12.3rem, -2.6rem);\n    }\n}\n@keyframes overwrite-index1-mac {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-12.3rem, -2.6rem);\n    }\n}\n@-webkit-keyframes overwrite-index2-mac {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-12.2rem, -5.1rem);\n    }\n}\n@keyframes overwrite-index2-mac {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-12.2rem, -5.1rem);\n    }\n}\n@-webkit-keyframes overwrite-index3-mac {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-12.2rem, -7.69rem);\n    }\n}\n@keyframes overwrite-index3-mac {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-12.2rem, -7.69rem);\n    }\n}\n@-webkit-keyframes overwrite-index-pc {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-15.0625rem, -.1875rem);\n    }\n}\n@keyframes overwrite-index-pc {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-15.0625rem, -.1875rem);\n    }\n}\n@-webkit-keyframes overwrite-index1-pc {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-4.81rem, -2.5rem);\n    }\n}\n@keyframes overwrite-index1-pc {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-4.81rem, -2.5rem);\n    }\n}\n@-webkit-keyframes overwrite-index2-pc {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-4.81rem, -5.1875rem);\n    }\n}\n@keyframes overwrite-index2-pc {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-4.81rem, -5.1875rem);\n    }\n}\n@-webkit-keyframes overwrite-index3-pc {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-4.81rem, -.69rem);\n    }\n}\n@keyframes overwrite-index3-pc {\n    0% {\n        transform: translate(0, 0);\n    }\n    50% {\n        transform: translate(0, 0);\n    }\n    100% {\n        transform: translate(-4.81rem, -.69rem);\n    }\n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n\n@-webkit-keyframes moveToWorkingArea-mac {\n    0% {\n        opacity: 0;\n        transform: translateX(0);\n    }\n    60% {\n        opacity: 0.3;\n        transform: translateX(0rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(-9.5rem);\n    }\n}\n\n@keyframes moveToWorkingArea-mac {\n    0% {\n        opacity: 0;\n        transform: translateX(0);\n    }\n    60% {\n        opacity: 0.3;\n        transform: translateX(0rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(-9.5rem);\n    }\n} \n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    /* .pull-left-24--reset {\n        animation: pull-left-24--reset 1s linear;\n        animation-fill-mode: forwards;\n    } */\n\n\n@-webkit-keyframes moveToWorkingArea-mac {\n    0% {\n        opacity: 0;\n        transform: translateX(0);\n    }\n    60% {\n        opacity: 0.3;\n        transform: translateX(0rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(-5.1rem);\n    }\n}\n\n\n@keyframes moveToWorkingArea-mac {\n    0% {\n        opacity: 0;\n        transform: translateX(0);\n    }\n    60% {\n        opacity: 0.3;\n        transform: translateX(0rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(-5.1rem);\n    }\n} \n    @-webkit-keyframes pull-left-24--reset {\n        0% {\n            opacity: 0;\n        }\n        70% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n\n    } \n    @keyframes pull-left-24--reset {\n        0% {\n            opacity: 0;\n        }\n        70% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n\n    } \n\n    @-webkit-keyframes overwrite-index-mac {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-9.3rem, -.17rem);\n        }\n    } \n\n    @keyframes overwrite-index-mac {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-9.3rem, -.17rem);\n        }\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQvcmVzZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksaURBQXlDO1lBQXpDLHlDQUF5QztJQUN6QyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxtREFBMkM7WUFBM0MsMkNBQTJDO0lBQzNDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLG1EQUEyQztZQUEzQywyQ0FBMkM7SUFDM0MscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksbURBQTJDO1lBQTNDLDJDQUEyQztJQUMzQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBR0E7SUFDSSwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGtEQUEwQztZQUExQywwQ0FBMEM7SUFDMUMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksa0RBQTBDO1lBQTFDLDBDQUEwQztJQUMxQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxrREFBMEM7WUFBMUMsMENBQTBDO0lBQzFDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFHQTtJQUNJLDhCQUE4QjtJQUM5QixvREFBNEM7WUFBNUMsNENBQTRDO0lBQzVDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFHQTtJQUNJLDJCQUEyQjtJQUMzQixvREFBNEM7WUFBNUMsNENBQTRDO0lBQzVDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixvREFBNEM7WUFBNUMsNENBQTRDO0lBQzVDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFF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UUFDSSxZQUFZO1FBQ1osMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsOEJBQThCO0lBQ2xDO0FBQ0o7OztBQWJBO0lBQ0k7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsOEJBQThCO0lBQ2xDO0FBQ0o7SUFDSTtRQUNJO1lBQ0ksVUFBVTtRQUNkO1FBQ0E7WUFDSSxVQUFVO1FBQ2Q7UUFDQTtZQUNJLFVBQVU7UUFDZDs7SUFFSjtJQVhBO1FBQ0k7WUFDSSxVQUFVO1FBQ2Q7UUFDQTtZQUNJLFVBQVU7UUFDZDtRQUNBO1lBQ0ksVUFBVTtRQUNkOztJQUVKOztJQUVBO1FBQ0k7WUFDSSwwQkFBMEI7UUFDOUI7UUFDQTtZQUNJLHNDQUFzQztRQUMxQztJQUNKOztJQVBBO1FBQ0k7WUFDSSwwQkFBMEI7UUFDOUI7UUFDQTtZQUNJLHNDQUFzQztRQUMxQztJQUNKOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvcmVzZXQvcmVzZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlbi1sZWZ0LW1hYy1wYyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0uMnJlbTtcbn1cbi5hZGp1c3QtbWFjLXBjIHtcbiAgICBtYXJnaW4tbGVmdDogLTEuN3JlbSAhaW1wb3J0YW50O1xufVxuLmFkanVzdDItbWFjLXBjIHtcbiAgICBtYXJnaW4tbGVmdDogLS4xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdWxsLWxlZnQtMjQtLXJlc2V0e1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVyd3JpdGUtaW5kZXgtbWFjIHtcbiAgICBhbmltYXRpb246IG92ZXJ3cml0ZS1pbmRleC1tYWMgLjZzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm92ZXJ3cml0ZS1pbmRleDEtbWFjIHtcbiAgICBhbmltYXRpb246IG92ZXJ3cml0ZS1pbmRleDEtbWFjIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ub3ZlcndyaXRlLWluZGV4Mi1tYWMge1xuICAgIGFuaW1hdGlvbjogb3ZlcndyaXRlLWluZGV4Mi1tYWMgMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4ub3ZlcndyaXRlLWluZGV4My1tYWMge1xuICAgIGFuaW1hdGlvbjogb3ZlcndyaXRlLWluZGV4My1tYWMgMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cblxuLm92ZXJ3cml0ZS1pbmRleC1wYyB7XG4gICAgYW5pbWF0aW9uOiBvdmVyd3JpdGUtaW5kZXgtcGMgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ub3ZlcndyaXRlLWluZGV4MS1wYyB7XG4gICAgYW5pbWF0aW9uOiBvdmVyd3JpdGUtaW5kZXgxLXBjIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ub3ZlcndyaXRlLWluZGV4Mi1wYyB7XG4gICAgYW5pbWF0aW9uOiBvdmVyd3JpdGUtaW5kZXgyLXBjIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLm92ZXJ3cml0ZS1pbmRleDMtcGMge1xuICAgIGFuaW1hdGlvbjogb3ZlcndyaXRlLWluZGV4My1wYyAxLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuXG4uaGVhZENvbG9yR3JlZW4tbWFjIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XG4gICAgYW5pbWF0aW9uOiBtb3ZlVG9Xb3JraW5nQXJlYS1tYWMgMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cblxuLmhlYWRDb2xvclJlZC1tYWMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlhbnJlZDtcbiAgICBhbmltYXRpb246IG1vdmVUb1dvcmtpbmdBcmVhLW1hYyAyLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmhlYWRDb2xvclB1cnBsZS1tYWMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXB1cnBsZTtcbiAgICBhbmltYXRpb246IG1vdmVUb1dvcmtpbmdBcmVhLW1hYyAyLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmhlYWRDb2xvckdyYXktbWFjIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkVCRUJFO1xuICAgIGFuaW1hdGlvbjogbW92ZVRvV29ya2luZ0FyZWEtbWFjIDIuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5cbkBrZXlmcmFtZXMgbW92ZVRvV29ya2luZ0FyZWEtbWFjIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTkuNXJlbSk7XG4gICAgfVxufSBcblxuXG5cblxuQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgtbWFjIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyLjNyZW0sIC0uMTdyZW0pO1xuICAgIH1cbn0gXG5Aa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleDEtbWFjIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMi4zcmVtLCAtMi42cmVtKTtcbiAgICB9XG59IFxuQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgyLW1hYyB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTIuMnJlbSwgLTUuMXJlbSk7XG4gICAgfVxufSBcbkBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4My1tYWMge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEyLjJyZW0sIC03LjY5cmVtKTtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleC1wYyB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUuMDYyNXJlbSwgLS4xODc1cmVtKTtcbiAgICB9XG59IFxuQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgxLXBjIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00LjgxcmVtLCAtMi41cmVtKTtcbiAgICB9XG59IFxuQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgyLXBjIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00LjgxcmVtLCAtNS4xODc1cmVtKTtcbiAgICB9XG59IFxuQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgzLXBjIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00LjgxcmVtLCAtLjY5cmVtKTtcbiAgICB9XG59IFxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSAge1xuXG5Aa2V5ZnJhbWVzIG1vdmVUb1dvcmtpbmdBcmVhLW1hYyB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05LjVyZW0pO1xuICAgIH1cbn0gXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC8qIC5wdWxsLWxlZnQtMjQtLXJlc2V0IHtcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxsLWxlZnQtMjQtLXJlc2V0IDFzIGxpbmVhcjtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgfSAqL1xuXG5cbkBrZXlmcmFtZXMgbW92ZVRvV29ya2luZ0FyZWEtbWFjIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUuMXJlbSk7XG4gICAgfVxufSBcbiAgICBAa2V5ZnJhbWVzIHB1bGwtbGVmdC0yNC0tcmVzZXQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4LW1hYyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkuM3JlbSwgLS4xN3JlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/reset/reset.component.html":
/*!********************************************!*\
  !*** ./src/app/reset/reset.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"h-48\">\n   <span class=\"blue font-change-14-16 pl-16 pr-16 text-center\" [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">git reset optionally moves the HEAD in the Repository and optionally overwrites the Index and Working Area</span>\n  <div class=\"flex direction-column\">\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head1' }\">Points to commit one place before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head' }\">Points to HEAD (default)</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head2' }\">Points to commit two places before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head3' }\">Points to commit three places before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'soft' }\">Soft: no overwrites</span>\n     <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'mixed' }\">Mixed (default): overwrite Index</span>\n    <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'hard' }\">Hard: overwrite Index and Working Area</span>\n  </div>\n  </div>\n  <div class=\"flex align-center justify-center\">\n    <mat-form-field class=\"w-40\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose where to move HEAD</mat-label>\n      <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommit($event.value)\">\n        <mat-option *ngFor = \"let commit of commits\" [value]=\"commit.name\"\n        >{{commit.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div class=\"pr-8\"></div>\n    <mat-form-field class=\"w-40--reset\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose overwrite option</mat-label>\n      <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommand($event.value)\">\n        <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n        >{{command.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"completed || chosenCommand === '' || chosenCommit === ''\" (click)=\"visualizeReset()\" class=\"w-350--reset\" mat-raised-button color=\"warn\">Visualize \"git reset<span *ngIf=\"chosenCommit !=='no parameter'\"> {{chosenCommit}}</span><span *ngIf=\"chosenCommand !=='no parameter' && chosenCommand !==''\"> --{{chosenCommand}}</span>\"</button>\n    <div class=\"pr-8\"></div>\n    <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n  </div>\n  <div class=\"flex pt-32 change-directionx\">\n    <div class=\"order-switch-2x flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n      <div class=\"w-full min-w-150--reset background-black white\">Working Area</div>\n      <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n        <div class=\"dot gold\"></div>\n        <!-- <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div> -->\n      </div>\n    </div>\n    <div class=\"order-1x height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150--reset background-black white\">Index</div>\n      <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n        <div class=\"dot gold\"></div>\n        <div class=\"\" \n        [ngClass]=\"{'hide': !hardOverwrite() , 'dot pull-left-24--reset show' : !hideMessage, \n        'headColorGreen-mac': (chosenCommand === 'hard' && headPointer() === 'head'),\n        'headColorRed-mac': (chosenCommand === 'hard' && headPointer() === 'head1'),\n        'headColorPurple-mac': (chosenCommand === 'hard' && headPointer() === 'head2'),\n        'headColorGray-mac': (chosenCommand === 'hard' && headPointer() === 'head3')}\"></div>\n        <!-- <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div> -->\n      </div>\n    </div>\n    <div class=\"order-switch-0x height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-250--reset background-black white\">Repository</div>\n      <div class=\"flex align-center pt-8 pb-8 pr-8\">\n        <div class=\"toMove pl-20 pr-8\">HEAD</div>\n        <div class=\"toMove toMove--arrow font-size-32 pr-8\">&#10132;</div> <!--arrow right-->\n        <div class=\"head dot seaGreen adjust2-mac-pc\" [ngClass]=\"{'hide': !copyHead(), \n        'show overwrite-index-mac': isMac && copyHead(), 'show overwrite-index-pc': !isMac && copyHead()}\"></div>\n        <div class=\"dot seaGreen green-left-mac-pc\" [ngClass]=\"{'adjust-mac-pc': copyHead()}\"></div>\n        <!-- <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div> -->\n      </div>\n      <div class=\"flex align-center justify-center ml-switch--reset pl-64--reset pb-8 pr-8\">\n        <div class=\"head1 dot indianRed\" \n        [ngClass]=\"{'hide': !copyHead1(), \n        'show overwrite-index1-mac': copyHead1() && isMac, 'show overwrite-index1-pc': copyHead1() && !isMac}\"></div>\n        <div class=\"dot indianRed \" [ngClass]=\"{'pull-left-24--reset': copyHead1()}\"></div>\n        <!-- <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div> -->\n      </div>\n      <div class=\"flex align-center justify-center ml-switch--reset pt-8 pl-64--reset pb-8 pr-8\">\n        <div class=\"head2 dot mediumPurple\" [ngClass]=\"{'hide': !copyHead2(), \n        'show overwrite-index2-mac': copyHead2() && isMac, 'show overwrite-index2-pc': copyHead2() && !isMac}\"></div>\n        <div class=\"dot mediumPurple \" [ngClass]=\"{'pull-left-24--reset': copyHead2()}\"></div>\n        <!-- <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div> -->\n      </div>\n      <div class=\"flex align-center justify-center ml-switch--reset  pt-8 pl-64--reset pb-8 pr-8\">\n        <div class=\"head3 dot background-gray\" [ngClass]=\"{'hide': !copyHead3(), \n        'show overwrite-index3-mac': copyHead3() && isMac, 'show overwrite-index3-pc': copyHead3() && !isMac}\"></div>\n        <div class=\"dot background-gray \" [ngClass]=\"{'pull-left-24--reset': copyHead3()}\"></div>\n        <!-- <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div> -->\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/reset/reset.component.ts":
/*!******************************************!*\
  !*** ./src/app/reset/reset.component.ts ***!
  \******************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResetComponent = /** @class */ (function () {
    function ResetComponent() {
        this.commands = [
            { name: 'hard' },
            { name: 'mixed' },
            { name: 'soft' },
            { name: 'no parameter' }
        ];
        this.commits = [
            { name: 'HEAD' },
            { name: 'HEAD~1' },
            { name: 'HEAD~2' },
            { name: 'HEAD~3' },
            { name: 'no parameter' }
        ];
        this.commands2 = ['hard', 'mixed', 'soft', 'no parameter'];
        this.commits2 = ['HEAD', 'HEAD~1', 'HEAD~2', 'HEAD~3', 'no parameter'];
    }
    ResetComponent.prototype.ngOnInit = function () {
        navigator.userAgent.includes('Mac') ? this.isMac = true : this.isMac = false;
        this.hideMessage = true;
        this.showReset = false;
        this.chosenCommand = '';
        this.chosenCommit = '';
        this.completed = false;
        var groupH1 = document.getElementsByClassName('toMove');
        for (var i = 0; i < groupH1.length; i++) {
            groupH1[i].classList.remove('move-down-one');
            groupH1[i].classList.remove('move-down-two');
            groupH1[i].classList.remove('move-down-three');
        }
    };
    ResetComponent.prototype.copyHead = function () {
        if (!this.hideMessage &&
            this.headPointer() === 'head' &&
            (this.overwriteType() === 'mixed' ||
                this.overwriteType() === 'hard')) {
            return true;
        }
        else {
            return false;
        }
    };
    ResetComponent.prototype.copyHead1 = function () {
        if (!this.hideMessage &&
            this.headPointer() === 'head1' &&
            (this.overwriteType() === 'mixed' ||
                this.overwriteType() === 'hard')) {
            return true;
        }
        else {
            return false;
        }
    };
    ResetComponent.prototype.copyHead2 = function () {
        if (!this.hideMessage &&
            this.headPointer() === 'head2' &&
            (this.overwriteType() === 'mixed' ||
                this.overwriteType() === 'hard')) {
            return true;
        }
        else {
            return false;
        }
    };
    ResetComponent.prototype.copyHead3 = function () {
        if (!this.hideMessage &&
            this.headPointer() === 'head3' &&
            (this.overwriteType() === 'mixed' ||
                this.overwriteType() === 'hard')) {
            return true;
        }
        else {
            return false;
        }
    };
    ResetComponent.prototype.headPointer = function () {
        switch (this.chosenCommit) {
            case ('HEAD' || false || false):
                console.log('head');
                return 'head';
                break;
            case 'HEAD~1':
                console.log('head1');
                return 'head1';
                break;
            case 'HEAD~2':
                return 'head2';
                break;
            case 'HEAD~3':
                return 'head3';
                break;
            default:
                return 'head';
        }
    };
    ResetComponent.prototype.overwriteType = function () {
        switch (this.chosenCommand) {
            case ('mixed' || false || false):
                return 'mixed';
                break;
            case 'soft':
                return 'soft';
                break;
            case 'hard':
                return 'hard';
                break;
            default:
                return 'mixed';
        }
    };
    ResetComponent.prototype.hardOverwrite = function () {
        if (!this.hideMessage && this.overwriteType() === 'hard') {
            return true;
        }
        else {
            return false;
        }
    };
    ResetComponent.prototype.visualizeReset = function () {
        switch (this.chosenCommit) {
            case ('HEAD' || false):
                break;
            case 'HEAD~1':
                var groupH1 = document.getElementsByClassName('toMove');
                for (var i = 0; i < groupH1.length; i++) {
                    groupH1[i].classList.add('move-down-one');
                }
                break;
            case 'HEAD~2':
                var groupH2 = document.getElementsByClassName('toMove');
                for (var i = 0; i < groupH2.length; i++) {
                    groupH2[i].classList.add('move-down-two');
                }
                break;
            case 'HEAD~3':
                var groupH3 = document.getElementsByClassName('toMove');
                for (var i = 0; i < groupH3.length; i++) {
                    groupH3[i].classList.add('move-down-three');
                }
                break;
            default:
        }
        this.hideMessage = false;
        this.completed = true;
        this.showReset = true;
    };
    ResetComponent.prototype.selectCommand = function (command) {
        this.chosenCommand = command;
    };
    ResetComponent.prototype.selectCommit = function (commit) {
        this.chosenCommit = commit;
    };
    ResetComponent.prototype.reset = function () {
        window.location.reload();
    };
    ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./reset.component.css */ "./src/app/reset/reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/stash/stash.component.html":
/*!********************************************!*\
  !*** ./src/app/stash/stash.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"flex align-center justify-center change-direction-stash\">\n    <div class=\"h-change-28-48 text-center\">\n      <span class=\"blue align-center text-align pl-16 pr-16 font-change-14-16\" >\"git stash\" stores files in the Stash Area. These files can be retrieved later with \"git stash apply\".</span>\n     </div>\n     <div class=\"flex pt-16\">\n       <div class=\"pr-8\"></div>\n       <mat-form-field class=\"w-full stash-field\" appearance=\"fill\">\n         <mat-label float=\"never\">Choose an option</mat-label>\n         <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommand($event.value)\">\n           <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n           >{{command.name}}</mat-option>\n         </mat-select>\n       </mat-form-field>\n     </div>\n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"completed || chosenCommand === ''\" (click)=\"visualizeStash()\" class=\"w-full\" mat-raised-button color=\"warn\">Visualize \"git stash<span *ngIf=\"chosenCommand !=='no option' && chosenCommand !==''\"> --{{chosenCommand}}</span>\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-stash flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Stash Area</div>\n      <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n      </div>\n    </div>\n    <div class=\"order-switch-2 bl-stash flex  direction-column height-change bt-beige bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n      <div class=\"flex align-center direction-column align-left justify-center pt-8 mt-4 pb-32\">\n        <div class=\"pl-8 toMove tracked noOption\">sidebar.html</div>\n        <div class=\"pl-8 toMove untracked\">untracked: nav.js</div>\n      </div>\n    </div>\n    <div class=\"order-1 height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Index</div>\n      <div class=\"flex align-left pt-8 mt-4 pb-32\">\n        <div class=\"pl-8 toMove index noOption\">sidebar.css</div>\n      </div>\n    </div>\n    <div class=\"order-switch-0 height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Repository</div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/stash/stash.component.ts":
/*!******************************************!*\
  !*** ./src/app/stash/stash.component.ts ***!
  \******************************************/
/*! exports provided: StashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StashComponent", function() { return StashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StashComponent = /** @class */ (function () {
    function StashComponent() {
        this.commands = [
            { name: 'no option' },
            { name: 'include-untracked' },
            { name: 'keep-index' }
        ];
    }
    StashComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.chosenCommand = '';
        this.completed = false;
        this.showReset = false;
        this.optionSelected = false;
    };
    StashComponent.prototype.copyHead = function () {
        if (!this.hideMessage &&
            this.headPointer() === 'head' &&
            (this.overwriteType() === 'mixed' ||
                this.overwriteType() === 'hard')) {
            return true;
        }
        else {
            return false;
        }
    };
    StashComponent.prototype.copyHead1 = function () {
        if (!this.hideMessage &&
            this.headPointer() === 'head1' &&
            (this.overwriteType() === 'mixed' ||
                this.overwriteType() === 'hard')) {
            return true;
        }
        else {
            return false;
        }
    };
    StashComponent.prototype.copyHead2 = function () {
        if (!this.hideMessage &&
            this.headPointer() === 'head2' &&
            (this.overwriteType() === 'mixed' ||
                this.overwriteType() === 'hard')) {
            return true;
        }
        else {
            return false;
        }
    };
    StashComponent.prototype.copyHead3 = function () {
        if (!this.hideMessage &&
            this.headPointer() === 'head3' &&
            (this.overwriteType() === 'mixed' ||
                this.overwriteType() === 'hard')) {
            return true;
        }
        else {
            return false;
        }
    };
    StashComponent.prototype.headPointer = function () {
        switch (this.chosenCommit) {
            case ('HEAD' || false || false):
                console.log('head');
                return 'head';
                break;
            case 'HEAD~1':
                console.log('head1');
                return 'head1';
                break;
            case 'HEAD~2':
                return 'head2';
                break;
            case 'HEAD~3':
                return 'head3';
                break;
            default:
                return 'head';
        }
    };
    StashComponent.prototype.overwriteType = function () {
        switch (this.chosenCommand) {
            case ('mixed' || false || false):
                return 'mixed';
                break;
            case 'soft':
                return 'soft';
                break;
            case 'hard':
                return 'hard';
                break;
            default:
                return 'mixed';
        }
    };
    StashComponent.prototype.hardOverwrite = function () {
        if (!this.hideMessage && this.overwriteType() === 'hard') {
            return true;
        }
        else {
            return false;
        }
    };
    StashComponent.prototype.visualizeStash = function () {
        var group;
        switch (this.chosenCommand) {
            case (''):
                group = document.getElementsByClassName('tracked');
                for (var i = 0; i < group.length; i++) {
                    group[i].classList.add('move-left-from-working');
                }
                group = document.getElementsByClassName('index');
                for (var i = 0; i < group.length; i++) {
                    group[i].classList.add('move-left-from-index');
                }
                break;
            case ('no option'):
                group = document.getElementsByClassName('tracked');
                for (var i = 0; i < group.length; i++) {
                    group[i].classList.add('move-left-from-working');
                }
                group = document.getElementsByClassName('index');
                for (var i = 0; i < group.length; i++) {
                    group[i].classList.add('move-left-from-index');
                }
                break;
            case 'include-untracked':
                group = document.getElementsByClassName('tracked');
                for (var i = 0; i < group.length; i++) {
                    group[i].classList.add('move-left-from-working');
                }
                group = document.getElementsByClassName('untracked');
                for (var i = 0; i < group.length; i++) {
                    group[i].classList.add('move-left-from-working');
                }
                group = document.getElementsByClassName('index');
                for (var i = 0; i < group.length; i++) {
                    group[i].classList.add('move-left-from-index-2');
                }
                break;
            case 'keep-index':
                group = document.getElementsByClassName('tracked');
                for (var i = 0; i < group.length; i++) {
                    group[i].classList.add('move-left-from-working');
                }
                break;
            default:
        }
        this.hideMessage = false;
        this.completed = true;
        this.showReset = true;
    };
    StashComponent.prototype.selectCommand = function (command) {
        this.chosenCommand = command;
    };
    StashComponent.prototype.reset = function () {
        window.location.reload();
    };
    StashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-stash',
            template: __webpack_require__(/*! ./stash.component.html */ "./src/app/stash/stash.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StashComponent);
    return StashComponent;
}());



/***/ }),

/***/ "./src/app/status/status.component.css":
/*!*********************************************!*\
  !*** ./src/app/status/status.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pl-change-status {\n        padding-left: 0rem !important;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5wbC1jaGFuZ2Utc3RhdHVzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue pt-8 h-change-28-48\" >\n    <div class=\"blue w-450 text-center\" *ngIf=\"!hideMessage\" [@myTrigger]=\"fadeIn\"><span class=\"red bold pr-8\">Red: <span class=\"black regular\">in Working Area.</span> </span><span class=\"green bold\">Green:<span class=\"black regular\">  in Index.</span></span></div>\n  </div>\n  <div class=\"flex pt-8\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeStatus()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git status\"</button>\n    <div class=\"pr-8\"></div>\n    <!-- <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button> -->\n  </div>\n  <section class= \"flex direction-column pl-change-status pt-16 w-half align-left\" >\n    <div [ngClass]=\"{\n                    'green bold pl-16': i == '1',\n                    'pl-16': (i == '1' || i == '3'),\n                    'red bold': i == '3'\n                  }\" \n                    class=\"pt-8 pb-8\" *ngFor=\"let message of messages; let i = index\" [@myTrigger]=\"fadeIn\">{{message}}</div>\n  </section>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");



var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.messages = [];
        this.showReset = false;
    };
    StatusComponent.prototype.push = function (message) {
        this.messages.push(message);
    };
    StatusComponent.prototype.visualizeStatus = function () {
        var _this = this;
        setTimeout(function () {
            _this.push('Changes to be committed:');
        }, 200);
        setTimeout(function () {
            _this.push('modified: index.html');
        }, 400);
        setTimeout(function () {
            _this.push('Changes not staged for commit:');
        }, 800);
        setTimeout(function () {
            _this.push('modified: index.js');
        }, 1000);
        setTimeout(function () {
            _this.hideMessage = false;
        }, 2000);
        setTimeout(function () {
            _this.showReset = true;
        }, 2000);
    };
    StatusComponent.prototype.reset = function () {
        window.location.reload();
    };
    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./status.component.css */ "./src/app/status/status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amydyson/Desktop/visualize git/visualize-git/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map