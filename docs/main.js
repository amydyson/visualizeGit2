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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"blue h-48\">\n   <span [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">A snapshot of index.js is staged in the Index</span>\n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeAdd()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git add index.js\"</button>\n    <div class=\"pr-8\"></div>\n    <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n  <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n  <div class=\"pt-change\">index.html</div>\n    <div class=\"pt-4 \">index.js</div>\n    <div class=\"pull-up green\" [ngClass]=\"{'hide': hideMessage, 'show, move': !hideMessage}\">index.js</div>\n  <div class=\"pt-4 pb-change\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Index</div></div>\n    <div class=\"order-switch-0 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Repository</div></div>\n  </div>\n</section>"

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
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.showReset = true;
        }, 1500);
    };
    AddComponent.prototype.reset = function () {
        window.location.reload();
    };
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

module.exports = "\n.visGitApp {\n    font-family: Arial, Helvetica, sans-serif !important;\n}\n\n.font-change-14-16 {\n    font-size: 1rem;\n}\n\n.w-40--reset {\n    width: 15.625rem;\n}\n\n.pl-change-status {\n    padding-left: 20rem;\n}\n\n.change-direction-stash {\n    flex-direction: column;\n}\n\n.pl-92-except-portrait{\n    padding-left: 1.875rem;\n}\n\n.pr-64-except-portrait {\n    padding-right: 0rem;\n}\n\n.pt-32-in-portrait {\n    padding-top: 2rem;\n}\n\n.image-size-icon {\n    width: 3.125rem;\n}\n\n.font-size-change {\n    font-size: 1.375rem;\n}\n\n.pt-change-pull {\n    padding-top: 4.75rem;\n}\n\n.pt-change-pull-2 {\n    padding-top: 4rem;\n}\n\n.mt-change-pull {\n    margin-top: 0rem;\n}\n\n.mt-change-pull-2-mac {\n    margin-top: .25rem;\n}\n\n.mt-change-pull-2-pc {\n    margin-top: -.2rem;\n}\n\n.mt-change-pull-4-mac {\n    margin-top: -0.45rem;\n}\n\n.mt-change-pull-4-pc {\n    margin-top: -0.85rem;\n}\n\n.pl-change {\n    padding-left: 3.125rem;\n}\n\n.pb-change-16-32 {\n padding-bottom: 2rem;\n}\n\n.pchange-branch {\n    padding-top: .5rem;\n    padding-bottom: 1rem;\n}\n\n.h-change-28-48 {\n    height: 1.75rem;\n}\n\n.flex-direction-change {\n    flex-direction: row;\n}\n\n.font-size-12 {\n    font-size: .75rem;\n}\n\n.mat-fab .mat-button-wrapper {\n    line-height: .25rem !important;\n}\n\n.italics {\n    font-style: italic;\n}\n\n.font-size-24 {\n    font-size: 1.5rem;\n}\n\n.font-size-32 {\n    font-size: 2rem;\n}\n\n.font-size-48 {\n    font-size: 3rem;\n}\n\n.h-28 {\n    height: 1.25rem;\n}\n\n.h-38 {\n    height: 2.375rem;\n}\n\n.h-48 {\n    height: 3rem;\n}\n\n.h-58 {\n    height: 3.625rem;\n}\n\n.h-69 {\n    height: 4.3125rem;\n}\n\n.mr-2 {\n    margin-right: .125rem;\n}\n\n.mr-4 {\n    margin-right: .25rem;\n}\n\n.ml-2 {\n    margin-left: .125rem;\n}\n\n.ml-4 {\n    margin-left: .25rem;\n}\n\n.ml-6 {\n    margin-left: 0.375rem;\n}\n\n.ml-8 {\n    margin-left: .5rem;\n}\n\n.ml-switch--reset {\n    margin-left: 2.625rem;\n}\n\n.mt-2 {\n    margin-top: .125rem;\n}\n\n.mt-4 {\n    margin-top: .25rem;\n}\n\n.mt-8 {\n    margin-top: .5rem;\n}\n\n.pb-36 {\n    padding-bottom: 2.25rem;\n}\n\n.pb-48 {\n    padding-bottom: 3rem;\n}\n\n.pl-2 {\n    padding-left: .125rem;\n}\n\n.pl-4 {\n    padding-left: .25rem;\n}\n\n.pl-8 {\n    padding-left: .5rem;\n}\n\n.pl-16 {\n    padding-left: 1rem;\n}\n\n.pl-20 {\n    padding-left: 1.25rem;\n}\n\n.pl-24 {\n    padding-left: 1.5rem;\n}\n\n.pl-30 {\n    padding-left: 1.875rem;\n}\n\n.pl-32 {\n    padding-left: 2rem;\n}\n\n.pl-34 {\n    padding-left: 2.125rem;\n}\n\n.pl-36 {\n    padding-left: 2.25rem;\n}\n\n.pl-46 {\n    padding-left: 2.875rem;\n}\n\n.pl-48 {\n    padding-left: 3rem;\n}\n\n.pl-50 {\n    padding-left: 3.125rem;\n}\n\n.pl-100 {\n    padding-left: 6.25rem;\n}\n\n.pl-150 {\n    padding-left: 9.375rem;\n}\n\n.pl-200 {\n    padding-left: 12.5rem;\n}\n\n.pl-250 {\n    padding-left: 15.625rem;\n}\n\n.pl-64 {\n    padding-left: 4rem;\n}\n\n.pl-64--reset {\n    padding-left: 4rem;\n}\n\n.pl-92 {\n    padding-left: 5.75rem;\n}\n\n.pl-109 {\n    padding-left: 6.8125rem;\n}\n\n.pl-350 {\n    padding-left: 21.875rem;\n}\n\n.pl-500 {\n    padding-left: 31.25rem;\n}\n\n.pr-2 {\n    padding-right: .125rem;\n}\n\n.pr-4 {\n    padding-right: .25rem;\n}\n\n.pr-8 {\n    padding-right: .5rem;\n}\n\n.pr-16 {\n    padding-right: 1rem;\n}\n\n.pt-8{\n    padding-top: .5rem;\n}\n\n.pt-16{\n    padding-top: 1rem;\n}\n\n.pt-18{\n    padding-top: 1.125rem;\n}\n\n.pt-48{\n    padding-top: 3rem;\n}\n\n.pt-52{\n    padding-top: 3.25rem;\n}\n\n.pt-64{\n    padding-top: 4rem;\n}\n\n.pt-72{\n    padding-top: 4.5rem;\n}\n\n.pt-76{\n    padding-top: 4.75rem;\n}\n\n.regular, .normal {\n    font-weight: normal;\n}\n\n.bold {\n    font-weight: bold;;\n}\n\n.background-beige {\n    background-color: #beaf98;\n}\n\n.dot {\n    height: 1.5625rem;\n    width: 1.5625rem;\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n.red {\n    color: #CD5C5C;\n}\n\n.black {\n    color: black;\n}\n\n.green {\n    color: green;\n}\n\n.indianRed{\n    background-color: indianRed;\n}\n\n.seaGreen {\n    background-color: darkseagreen;\n}\n\n.lightCoral {\n    background-color: lightcoral;\n}\n\n.mediumPurple {\n    background-color: mediumpurple;\n}\n\n.background-red {\n    background-color: #CD5C5C;\n}\n\n.background-gray {\n    background-color: #BEBEBE;\n}\n\n.background-black {\n    background-color: #000000;\n}\n\n.gold {\n    background-color: gold;\n}\n\n.white {\n    color: white;\n}\n\n.w-100 {\n    width: 6.25rem;\n    min-width: 6.25rem;\n}\n\n.min-w-150 {\n    min-width: 9.375rem;\n}\n\n.min-w-150--reset {\n    min-width: 9.375rem;\n}\n\n.min-w-250 {\n    min-width: 15.625rem;\n}\n\n.min-w-350 {\n    min-width: 21.875rem;\n}\n\n.max-w-450 {\n    max-width: 28.125rem;\n}\n\n.max-w-600 {\n    max-width: 37.5rem;\n}\n\n.w-150 {\n    width: 9.375rem;\n}\n\n.w-250 {\n    width: 15.625rem;\n}\n\n.w-300 {\n    width: 18.75rem;\n}\n\n.w-350 {\n    width: 21.875rem;\n}\n\n.w-350--reset {\n    width: 21.875rem;\n}\n\n.w-450 {\n    width: 28.125rem;\n}\n\n.w-500 {\n    width: 31.25rem;\n}\n\n.w-600 {\n    width: 37.5rem;\n}\n\n.h-200 {\n    height: 12.5rem;\n}\n\n.text-align, .text-center {\n    text-align: center;\n}\n\n.text-left {\n    text-align: left;\n}\n\n.blue {\n    color: blue;\n}\n\n.khaki {\n    color: darkgreen;\n}\n\n.darkblue {\n    color: darkblue;\n}\n\n.limegreen {\n    color: #32CD32;\n}\n\n.darkred {\n    color: darkred;\n}\n\n.br-beige {\n    border-right: .125rem solid #beaf98;\n}\n\n.bl-beige {\n    border-left: .125rem solid #beaf98;\n}\n\n.bt-beige {\n    border-top: .125rem solid #beaf98;\n}\n\n.bb-beige {\n    border-bottom: .125rem solid #beaf98;\n}\n\n.rectangle {\n    width: 25rem;\n    height: .625rem;\n}\n\n.flex, .show{\n    display: flex;\n}\n\n.float {\n    float: right;\n}\n\n.pull-up{\n    margin-top: -1.25rem;\n}\n\n.pull-left{\n    margin-left: -7.5rem;\n}\n\n.pull-left-pull{\n    margin-left: -7.5rem;\n}\n\n.pull-left-24{\n    margin-left: -1.5rem !important;\n}\n\n.pull-left-24--reset{\n    margin-left: -1.5rem !important;\n}\n\n.moveAndColor {\n    -webkit-animation: moveAndColor 1s linear;\n            animation: moveAndColor 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(13.125rem);\n    }\n}\n\n@keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(13.125rem);\n    }\n}\n\n@-webkit-keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.1875rem);\n    }\n}\n\n@keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.1875rem);\n    }\n}\n\n@-webkit-keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(4.6875rem);\n    }\n}\n\n@keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(4.6875rem);\n    }\n}\n\n@media only screen and (min-device-width: 60rem) {\n        .font-size-change {\n            font-size: 2.25rem;\n        }\n        .flex-direction-change {\n            flex-direction: row;\n        }\n        .pull-up-image{\n            margin-top: -11.125rem;\n        }\n        .pv-change {\n            padding-bottom: 2rem;\n            padding-top: 2rem;\n        }\n\n        @-webkit-keyframes moveAndColor {\n            0% {\n                transform: translateX(0);\n                color: green;\n            }\n            50% {\n                transform: translateX(4.53rem);\n                color: green;\n            }\n            100% {\n                transform: translateX(9.06rem);\n                color: black;\n            }\n        }\n\n        @keyframes moveAndColor {\n            0% {\n                transform: translateX(0);\n                color: green;\n            }\n            50% {\n                transform: translateX(4.53rem);\n                color: green;\n            }\n            100% {\n                transform: translateX(9.06rem);\n                color: black;\n            }\n        } \n    }\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n        .flex-direction-change {\n            flex-direction: column;\n        }\n\n\n        .pull-left-24--reset {\n            -webkit-animation: pull-left-24--reset 1s linear;\n                    animation: pull-left-24--reset 1s linear;\n            -webkit-animation-fill-mode: forwards;\n                    animation-fill-mode: forwards;\n        }\n\n        .pl-64 {\n            padding-left: 0rem;\n        }\n\n        .w-350--reset {\n            width: 100%;\n        }\n\n        .min-w-150--reset {\n            min-width: 3.125rem;\n        }\n        .w-40--reset {\n            width: 40%;\n        }\n        .pl-92-except-portrait{\n            padding-left: 0rem;\n        }\n        .bl-stash {\n            border-left: .125rem solid #beaf98;\n        }\n        .font-change-14-16 {\n            font-size: .875rem;\n        }\n        \n\n        .pull-up-in-push-2 {\n            margin-top: 5rem;\n        }\n        \n\n        .pt-32-desktop-push {\n            padding-top: 2rem;\n        }\n        \n\n        .mt-in-portrait {\n            margin-top: -4.6875rem;\n        }\n\n        .mt-in-portrait-2 {\n            margin-top: -2.5rem;\n        }\n\n        .hide-in-portrait {\n            display: none;\n        }\n\n        .pt-32-in-portrait {\n            padding-top: 2rem;\n        }\n\n        .pt-change-pull-2 {\n            padding-top: 0;\n            padding-bottom: 4rem;\n        }\n        \n        .pr-64-except-portrait {\n            padding-right: 0rem;\n        }\n        .h-change-28-48 {\n            height: 3rem;\n        }\n        .pull-up-image{\n            margin-top: -3.75rem;\n        }\n\n        .pull-left-pull{\n            margin-left: -3rem;\n        }\n                \n        @-webkit-keyframes pull-left-24--reset {\n            0% {\n                opacity: 0;\n            }\n            70% {\n                opacity: 0;\n            }\n            100% {\n                opacity: 1;\n            }\n        }\n                \n        @keyframes pull-left-24--reset {\n            0% {\n                opacity: 0;\n            }\n            70% {\n                opacity: 0;\n            }\n            100% {\n                opacity: 1;\n            }\n        } \n\n        @-webkit-keyframes moveAndColor {\n            0% {\n                transform: translateY(0);\n                color: green;\n            }\n            50% {\n                transform: translateU(-3.125rem);\n                color: green;\n            }\n            100% {\n                transform: translateY(-6.5625rem);\n                color: black;\n            }\n        } \n\n        @keyframes moveAndColor {\n            0% {\n                transform: translateY(0);\n                color: green;\n            }\n            50% {\n                transform: translateU(-3.125rem);\n                color: green;\n            }\n            100% {\n                transform: translateY(-6.5625rem);\n                color: black;\n            }\n        } \n    }\n\n.show-fadeIn{\n    -webkit-animation: show-fadeIn 2s linear;\n            animation: show-fadeIn 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.show-slow-fadeIn{\n    -webkit-animation: show-slow-fadeIn 4s linear;\n            animation: show-slow-fadeIn 4s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.commit-fadeIn-1 {\n    -webkit-animation: commit-fadeIn-1 1s linear;\n            animation: commit-fadeIn-1 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.commit-fadeIn-2 {\n    -webkit-animation: commit-fadeIn-2 2s linear;\n            animation: commit-fadeIn-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.commit-fadeIn-3 {\n    -webkit-animation: commit-fadeIn-3 3s linear;\n            animation: commit-fadeIn-3 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move{\n    -webkit-animation: move 1s linear;\n            animation: move 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n\n}\n\n.move-image {\n    -webkit-animation: move-image 1s linear;\n            animation: move-image 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-left {\n    -webkit-animation: move-left .75s linear;\n            animation: move-left .75s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-left-from-working {\n    -webkit-animation: move-left-from-working 1s linear;\n            animation: move-left-from-working 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-left-from-index {\n    -webkit-animation: move-left-from-index 1s linear;\n            animation: move-left-from-index 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-left-from-index-2 {\n    -webkit-animation: move-left-from-index-2 1s linear;\n            animation: move-left-from-index-2 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-right {\n    -webkit-animation: move-right 1s linear;\n            animation: move-right 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-right-pull {\n    -webkit-animation: move-right-pull 1s linear;\n            animation: move-right-pull 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-right-merge {\n    -webkit-animation: move-right-merge 1s linear;\n            animation: move-right-merge 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-right-fetch {\n    -webkit-animation: move-right-fetch 1s linear;\n            animation: move-right-fetch 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-up {\n    -webkit-animation: move-up 1.3s linear;\n            animation: move-up 1.3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-up-pull {\n    -webkit-animation: move-up-pull 1.5s linear;\n            animation: move-up-pull 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-up--push {\n    -webkit-animation: move-up--push 1.5s linear;\n            animation: move-up--push 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-up-fast {\n    -webkit-animation: move-up-fast .5s linear;\n            animation: move-up-fast .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-down-fast {\n    -webkit-animation: move-down-fast 2s linear;\n            animation: move-down-fast 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-down-one {\n    -webkit-animation: move-down-one .5s linear;\n            animation: move-down-one .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-down-two {\n    -webkit-animation: move-down-two .5s linear;\n            animation: move-down-two .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-down-three {\n    -webkit-animation: move-down-three .5s linear;\n            animation: move-down-three .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.overwrite-index {\n    -webkit-animation: overwrite-index 1s linear;\n            animation: overwrite-index 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.overwrite-index1 {\n    -webkit-animation: overwrite-index1 1.5s linear;\n            animation: overwrite-index1 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.overwrite-index2 {\n    -webkit-animation: overwrite-index2 1.5s linear;\n            animation: overwrite-index2 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.overwrite-index3 {\n    -webkit-animation: overwrite-index3 1.5s linear;\n            animation: overwrite-index3 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.headColorGreen {\n    background-color: darkseagreen;\n    -webkit-animation: moveToWorkingArea 2s linear;\n            animation: moveToWorkingArea 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.headColorRed {\n    background-color: indianred;\n    -webkit-animation: moveToWorkingArea 2.5s linear;\n            animation: moveToWorkingArea 2.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.headColorPurple {\n    background-color: mediumpurple;\n    -webkit-animation: moveToWorkingArea 2.5s linear;\n            animation: moveToWorkingArea 2.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.headColorGray {\n    background-color: #BEBEBE;\n    -webkit-animation: moveToWorkingArea 2.5s linear;\n            animation: moveToWorkingArea 2.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes moveToWorkingArea {\n    0% {\n        opacity: 0;\n        transform: translateX(0);\n    }\n    70% {\n        opacity: 0.3;\n        transform: translateX(0rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(-9.5rem);\n    }\n}\n\n@keyframes moveToWorkingArea {\n    0% {\n        opacity: 0;\n        transform: translateX(0);\n    }\n    70% {\n        opacity: 0.3;\n        transform: translateX(0rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(-9.5rem);\n    }\n}\n\n@-webkit-keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(8.75rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(8.75rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@-webkit-keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@-webkit-keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@-webkit-keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@media only screen and (min-device-width: 60rem) {\n        @-webkit-keyframes move {\n            0% {\n                transform: translateX(0);\n            }\n            50% {\n                transform: translateX(4.53125rem);\n            }\n            100% {\n                transform: translateX(9.875rem);\n            }\n        }\n        @keyframes move {\n            0% {\n                transform: translateX(0);\n            }\n            50% {\n                transform: translateX(4.53125rem);\n            }\n            100% {\n                transform: translateX(9.875rem);\n            }\n        } \n\n        @-webkit-keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-13.4375rem);\n            }\n        } \n\n        @keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-13.4375rem);\n            }\n        } \n        @-webkit-keyframes move-left-from-working {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-8.4375rem);\n            }\n        } \n        @keyframes move-left-from-working {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-8.4375rem);\n            }\n        } \n        @-webkit-keyframes move-left-from-index {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-17.94rem, 1.25rem);\n            }\n        } \n        @keyframes move-left-from-index {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-17.94rem, 1.25rem);\n            }\n        } \n        @-webkit-keyframes move-left-from-index-2 {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-17.94rem, 2.5rem);\n            }\n        } \n        @keyframes move-left-from-index-2 {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-17.94rem, 2.5rem);\n            }\n        } \n        @-webkit-keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(22rem);\n            }\n        } \n        @keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(22rem);\n            }\n        } \n        @-webkit-keyframes move-right-pull {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(22rem);\n            }\n        } \n        @keyframes move-right-pull {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(22rem);\n            }\n        } \n        @-webkit-keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(17.8125rem);\n            }\n        } \n        @keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(17.8125rem);\n            }\n        } \n        @-webkit-keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(13.75rem);\n            }\n        } \n        @keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(13.75rem);\n            }\n        } \n        @-webkit-keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-2.1875rem);\n            }\n        } \n        @keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-2.1875rem);\n            }\n        } \n\n        @-webkit-keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-1.75rem);\n            }\n        } \n\n        @keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-1.75rem);\n            }\n        } \n\n        @-webkit-keyframes move-up--push {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-2.1875rem);\n            }\n        } \n\n        @keyframes move-up--push {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-2.1875rem);\n            }\n        } \n\n        @-webkit-keyframes move-up-fast {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-2.1875rem);\n            }\n        } \n\n        @keyframes move-up-fast {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-2.1875rem);\n            }\n        } \n\n        @-webkit-keyframes move-down-fast {\n            0% {\n                transform: translateY(0);\n            }\n            50% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(4.6875rem);\n            }\n        } \n\n        @keyframes move-down-fast {\n            0% {\n                transform: translateY(0);\n            }\n            50% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(4.6875rem);\n            }\n        } \n\n        @-webkit-keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(2.5rem);\n            }\n        } \n\n        @keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(2.5rem);\n            }\n        } \n\n        @-webkit-keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(5rem);\n            }\n        } \n\n        @keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(5rem);\n            }\n        } \n        @-webkit-keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(7.5rem);\n            }\n        } \n        @keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(7.5rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-15.0625rem, -.1875rem);\n            }\n        } \n        @keyframes overwrite-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-15.0625rem, -.1875rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -2.5rem);\n            }\n        } \n        @keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -2.5rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -5.1875rem);\n            }\n        } \n        @keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -5.1875rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -.69rem);\n            }\n        } \n        @keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -.69rem);\n            }\n        } \n    }\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n        .hide-in-landscape{\n            display: none;\n        }\n\n        .pl-landscape-clone{\n            padding-left: 1.375rem;\n        }\n\n        .pl-change-status {\n            padding-left: 12.5rem;\n        }\n\n        .font-change-14-16 {\n            font-size: .875rem;\n        }\n\n        .change-direction-stash {\n            flex-direction: row;\n        }\n\n        .pull-up-in-push {\n            margin-top: -2.81rem;\n        }\n\n        .pt-32-in-portrait {\n            padding-top: 0rem;\n        }\n    \n        .pv-change {\n            padding-bottom: .5rem;\n            padding-top: .5rem;\n        }\n        .pull-up-fetch {\n            margin-top: -4.375rem;\n        }\n\n        .pt-change-pull {\n            padding-top: .5rem;\n        }\n        .pt-change-pull-2 {\n            padding-top: 0rem;\n        }\n\n        .margin-in-landscape {\n            margin-top: -1.25rem;\n        }\n\n        .mt-change-pull-0 {\n            margin-top: -.625rem;\n        }\n\n        .mt-change-pull {\n            margin-top: -1.875rem;\n        }\n        .mt-change-pull-2 {\n            margin-top: .125rem;\n        }\n        .mt-change-pull-2-mac {\n            margin-top: .125rem;\n        }\n        .mt-change-pull-2-pc {\n            margin-top: .125rem;\n        }\n        .mt-change-pull-4-mac {\n            margin-top: -1.75rem;\n        }\n        .mt-change-pull-4-pc {\n            margin-top: -1.75rem;\n        }\n\n        .mt-change-pull-5 {\n            margin-top: -1.25rem;\n        }\n        .mt-change-pull-6 {\n            margin-top: -1.25rem;\n        }\n\n        .pb-change-16-32 {\n            padding-bottom: 1rem;\n            margin-top: -.625rem;\n           }\n\n        .padding-landscape-commit-t{\n            padding-top: 2rem;\n        }\n        .padding-landscape-commit-b{\n            padding-bottom: .5rem;\n        }\n        .order-switch-0 {\n            order: 2;\n        }\n    \n        .pt-change--clone {\n            padding-top: 1rem;\n        }\n        .pt-change--commit {\n            padding-top: 1rem;\n        }\n        .image-size {\n            width: 9.357rem;\n        }\n\n        .pull-up-image{\n            margin-top: -3.625rem;\n        }\n\n        .image-size--clone {\n            width: 3.125rem;\n        }\n\n        .image-size--fetch {\n            width: 3.125rem;\n            height: 3.125rem;\n        }\n\n        .flex-direction-change {\n            flex-direction: row;\n        }\n        .pl-change {\n            padding-left: 3.125rem;\n        }\n        .pchange-branch {\n            padding-top: 0rem;\n            padding-bottom: 0rem;\n            margin-top: -.625rem;\n        }\n\n        \n        @-webkit-keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(2.5rem);\n            }\n        }\n\n        \n        @keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(2.5rem);\n            }\n        } \n\n        @-webkit-keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(5rem);\n            }\n        } \n\n        @keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(5rem);\n            }\n        } \n        @-webkit-keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(7.5rem);\n            }\n        } \n        @keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(7.5rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -.1875rem);\n            }\n        } \n        @keyframes overwrite-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -.1875rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -2.5rem);\n            }\n        } \n        @keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -2.5rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -5.1875rem);\n            }\n        } \n        @keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -5.1875rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -7.69rem);\n            }\n        } \n        @keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-4.81rem, -7.69rem);\n            }\n        } \n\n        @-webkit-keyframes move-left-from-working {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-8.44rem);\n            }\n        } \n\n        @keyframes move-left-from-working {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-8.44rem);\n            }\n        } \n        @-webkit-keyframes move-left-from-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-17.94, 1.375rem);\n            }\n\n        } \n        @keyframes move-left-from-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-17.94, 1.375rem);\n            }\n\n        } \n        @-webkit-keyframes move-left-from-index-2 {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-17.94rem, 2.5rem);\n            }\n        } \n        @keyframes move-left-from-index-2 {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-17.94rem, 2.5rem);\n            }\n        } \n        @-webkit-keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-7.19rem, -.1875rem);\n            }\n        } \n        @keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-7.19rem, -.1875rem);\n            }\n        } \n\n        @-webkit-keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(5.625rem);\n            }\n        } \n\n        @keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(5.625rem);\n            }\n        } \n        @-webkit-keyframes move-right-pull {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(5.625rem);\n            }\n        } \n        @keyframes move-right-pull {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(5.625rem);\n            }\n        } \n\n        @-webkit-keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(13.75rem);\n            }\n        } \n\n        @keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(13.75rem);\n            }\n        } \n        @-webkit-keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-2.25rem);\n            }\n        } \n        @keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-2.25rem);\n            }\n        } \n\n        @-webkit-keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-.875rem);\n            }\n        } \n\n        @keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-.875rem);\n            }\n        } \n\n        @-webkit-keyframes moveAndColor {\n            0% {\n                transform: translateX(0);\n                color: green;\n            }\n            50% {\n                transform: translateX(4.84rem);\n                color: green;\n            }\n            100% {\n                transform: translateX(9.69rem);\n                color: black;\n            }\n        } \n\n        @keyframes moveAndColor {\n            0% {\n                transform: translateX(0);\n                color: green;\n            }\n            50% {\n                transform: translateX(4.84rem);\n                color: green;\n            }\n            100% {\n                transform: translateX(9.69rem);\n                color: black;\n            }\n        } \n        @-webkit-keyframes move {\n            0% {\n                transform: translateY(0)\n            }\n            100% {\n                transform: translate(9.375rem, .3125rem)\n            }\n        } \n        @keyframes move {\n            0% {\n                transform: translateY(0)\n            }\n            100% {\n                transform: translate(9.375rem, .3125rem)\n            }\n        }\n        @-webkit-keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(13.75rem);\n            }\n        }\n        @keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(13.75rem);\n            }\n        } \n    }\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait)  {\n        .image-size--clone {\n            width: 3.125rem;\n        }\n        .pl-change-status {\n            padding-left: 0rem;\n        }\n\n        .pt-change-pull {\n            padding-top: .5rem;\n        }\n\n        .mt-change-pull {\n            margin-top: -1.25rem;\n        }\n        .mt-change-pull-4-mac {\n            margin-top: -5.1875rem;\n        }\n        .mt-change-pull-4-pc {\n            margin-top: -5.1875rem;\n        }\n        .mt-change-pull-2 {\n            margin-top: .125rem;\n        }\n\n        .pt-fetch {\n            padding-top: 2rem;\n        }\n\n        .bb-portrait-fetch {\n            padding-bottom: .9375rem;\n            border-bottom: .0625rem solid gray;\n        }\n\n        .pad-portrait-fetch-1 {\n            justify-content: center;\n            padding-left: 2.81rem;\n        }\n        .pad-portrait-fetch-2 {\n            padding-left: 3.125rem;\n        }\n        .pull-up-fetch {\n            margin-top: -4.68rem;\n        }\n\n        .image-size--fetch {\n            width: 3.125rem;\n            height: 3.125rem;\n        }\n\n        @-webkit-keyframes move-image {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform:  translateX(7.5rem);\n            }\n        }\n\n        @keyframes move-image {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform:  translateX(7.5rem);\n            }\n        } \n\n        @-webkit-keyframes moveToWorkingArea {\n            0% {\n                opacity: 0;\n                transform: translateX(0);\n            }\n            70% {\n                opacity: 0.3;\n                transform: translateX(0rem);\n            }\n            100% {\n                opacity: 1;\n                transform: translateX(-4.68rem);\n            }\n        } \n\n        @keyframes moveToWorkingArea {\n            0% {\n                opacity: 0;\n                transform: translateX(0);\n            }\n            70% {\n                opacity: 0.3;\n                transform: translateX(0rem);\n            }\n            100% {\n                opacity: 1;\n                transform: translateX(-4.68rem);\n            }\n        } \n\n        @-webkit-keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(2.5rem);\n            }\n        } \n\n        @keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(2.5rem);\n            }\n        } \n\n        @-webkit-keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(5rem);\n            }\n        } \n\n        @keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(5rem);\n            }\n        } \n        @-webkit-keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(7.5rem);\n            }\n        } \n        @keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(7.5rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index {\n            0% {\n                opacity: 0;\n                transform: translate(0, 0);\n            }\n            70% {\n                opacity: 1;\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-9.125rem, -.0625rem);\n            }\n        } \n        @keyframes overwrite-index {\n            0% {\n                opacity: 0;\n                transform: translate(0, 0);\n            }\n            70% {\n                opacity: 1;\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-9.125rem, -.0625rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-9.375rem, -2.5rem);\n            }\n        } \n        @keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-9.375rem, -2.5rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-9.1875rem, -5.1875rem);\n            }\n        } \n        @keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-9.1875rem, -5.1875rem);\n            }\n        } \n        @-webkit-keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-9.1875rem, -.69rem);\n            }\n        } \n        @keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-9.1875rem, -.69rem);\n            }\n        } \n\n        @-webkit-keyframes move-left-from-working {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(7.94rem);\n            }\n        } \n\n        @keyframes move-left-from-working {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(7.94rem);\n            }\n        } \n        @-webkit-keyframes move-left-from-index {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(13.3125rem);\n            }\n        } \n        @keyframes move-left-from-index {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(13.3125rem);\n            }\n        } \n        @-webkit-keyframes move-left-from-index-2 {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(13rem);\n            }\n        } \n        @keyframes move-left-from-index-2 {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(13rem);\n            }\n        } \n\n        @-webkit-keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-7.19rem);\n            }\n        } \n\n        @keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-7.19rem);\n            }\n        } \n\n        @-webkit-keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(5.625rem);\n            }\n        } \n\n        @keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(5.625rem);\n            }\n        } \n        @-webkit-keyframes move-right-pull {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(11.2rem);\n            }\n        } \n        @keyframes move-right-pull {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(11.2rem);\n            }\n        } \n        @-webkit-keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(13.75rem);\n            }\n        } \n        @keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(13.75rem);\n            }\n        } \n\n\n        @-webkit-keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-2.0625rem);\n            }\n        } \n\n\n        @keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-2.0625rem);\n            }\n        } \n\n        @-webkit-keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-1.125rem);\n            }\n        } \n\n        @keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-1.125rem);\n            }\n        } \n\n        @-webkit-keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateY(-8.56rem);\n            }\n        } \n\n        @keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateY(-8.56rem);\n            }\n        } \n        @-webkit-keyframes move {\n            0% {\n                transform: translateY(0)\n            }\n            50% {\n                transform: translateY(-3.125rem);\n            }\n            100% {\n                transform: translateY(-6.75rem)\n            }\n        } \n        @keyframes move {\n            0% {\n                transform: translateY(0)\n            }\n            50% {\n                transform: translateY(-3.125rem);\n            }\n            100% {\n                transform: translateY(-6.75rem)\n            }\n        } \n\n    }\n\n.hide{\n    display: none;\n}\n\nul {\n    list-style-type: none;\n    margin: 1.875rem 1.875rem 0 0;\n    padding: 0;\n}\n\nli {\n    padding: .9375rem;\n    width: 100%;\n    background: #f1f1f1;\n    margin-bottom: .125rem;\n    font-weight: bold;\n}\n\n.align-center {\n    align-items: center;\n}\n\n.align-left {\n    align-items: flex-start;\n}\n\n.align-right {\n    align-items: flex-end;\n}\n\n.justify-center {\n    justify-content: center;\n}\n\n.direction-column {\n    flex-direction: column;\n}\n\n.pb-8 {\n    padding-bottom: .5rem;\n}\n\n.pb-16 {\n    padding-bottom: 1rem;\n}\n\n.pb-24 {\n    padding-bottom: 1.5rem;\n}\n\n.pb-28 {\n    padding-bottom: 1.75rem;\n}\n\n.pb-32 {\n    padding-bottom: 2rem;\n}\n\n.pb-42 {\n    padding-bottom: 2.625rem;\n}\n\n.pt-32 {\n    padding-top: 2rem;\n}\n\n.pt-54 {\n    padding-top: 3.375rem;\n}\n\n.pt-64 {\n    padding-top: 4rem;\n}\n\n.pt-100 {\n    padding-top: 6.25rem;\n}\n\n.pt-4 {\n    padding-top: .25rem;\n}\n\n.pr-8{\n    padding-right: .5rem;\n}\n\n.pr-16 {\n    padding-right: 1rem;\n}\n\n.pr-24 {\n    padding-right: 1.5rem;\n}\n\n.pr-32 {\n    padding-right: 2rem;\n}\n\n.pr-48 {\n    padding-right: 3rem;\n}\n\n.pr-64 {\n    padding-right: 4rem;\n}\n\n.w-quarter {\n    width: 25%;\n}\n\n.w-half {\n    width: 50%;\n}\n\n.w-full {\n    width: 100%;\n}\n\n.order-1 {\n    order: 1;\n}\n\n@media only screen and (min-device-width: 60rem) {\n    .image-size-icon {\n        width: 3.125rem;\n    }\n    .image-size {\n        width: 9.357rem;\n    }\n    .image-size--clone {\n        width: 9.357rem;\n    }\n\n    .image-size--fetch {\n        width: 9.357rem;\n    }\n    .pt-change {\n        padding-top: 2rem;\n    }\n    .pt-change--clone {\n        padding-top: 2rem;\n    }\n    .pt-change--commit {\n        padding-top: 2rem;\n    }\n    .pb-change {\n        padding-bottom: 2rem;\n    }\n\n    .index_commit {\n        padding-top: 3.25rem;\n    }\n    .order-switch-0 {\n        order: 2;\n    }\n\n    .order-switch-2 {\n        order: 0;\n    }\n\n    .order-switch-stash {\n        order: -1;\n    }\n\n }\n\n@media only screen and (max-device-width: 59.9375rem)  and (orientation : portrait) {\n    .image-size-icon {\n        width: 1.875rem;\n    }\n    .image-size {\n        width: 6.2rem;\n    }\n    .font-size-change {\n        font-size: 1.375rem;\n    }\n\n    .pv-change {\n        padding-bottom: 1rem;\n        padding-top: .5rem;\n    }\n    .pl-change {\n        padding-left: 0rem;\n    }\n    .change-direction {\n        flex-direction: column;\n    }\n    .change-direction-stash {\n        flex-direction: column;\n    }\n\n    .height-change {\n        min-height: 59.9375rem\n    }\n\n    .pt-change {\n        padding-top: 1rem;\n    }\n    .pt-change--clone {\n        padding-top: 1rem;\n    }\n    .pt-change--commit {\n        padding-top: 1rem;\n    }\n\n    .pb-change {\n        padding-bottom: 1rem;\n    }\n\n    .bl-change {\n        border-left: .125rem solid #beaf98;\n    }\n\n    .index_commit {\n        padding-top: 1.875rem;\n    }\n\n    .order-switch-0 {\n        order: 0;\n    }\n    .order-switch-2 {\n        order: 2;\n    }\n\n    .order-switch-stash {\n        order: 3;\n    }\n\n\n\n }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFD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Q3pCOztJQUVBO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxRQUFRO0lBQ1o7Ozs7Q0FJSCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udmlzR2l0QXBwIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1jaGFuZ2UtMTQtMTYge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnctNDAtLXJlc2V0IHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xufVxuXG4ucGwtY2hhbmdlLXN0YXR1cyB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHJlbTtcbn1cblxuLmNoYW5nZS1kaXJlY3Rpb24tc3Rhc2gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wbC05Mi1leGNlcHQtcG9ydHJhaXR7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjg3NXJlbTtcbn1cblxuLnByLTY0LWV4Y2VwdC1wb3J0cmFpdCB7XG4gICAgcGFkZGluZy1yaWdodDogMHJlbTtcbn1cblxuLnB0LTMyLWluLXBvcnRyYWl0IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLmltYWdlLXNpemUtaWNvbiB7XG4gICAgd2lkdGg6IDMuMTI1cmVtO1xufVxuXG4uZm9udC1zaXplLWNoYW5nZSB7XG4gICAgZm9udC1zaXplOiAxLjM3NXJlbTtcbn1cblxuLnB0LWNoYW5nZS1wdWxsIHtcbiAgICBwYWRkaW5nLXRvcDogNC43NXJlbTtcbn1cbi5wdC1jaGFuZ2UtcHVsbC0yIHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cbi5tdC1jaGFuZ2UtcHVsbCB7XG4gICAgbWFyZ2luLXRvcDogMHJlbTtcbn1cbi5tdC1jaGFuZ2UtcHVsbC0yLW1hYyB7XG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xufVxuLm10LWNoYW5nZS1wdWxsLTItcGMge1xuICAgIG1hcmdpbi10b3A6IC0uMnJlbTtcbn1cblxuLm10LWNoYW5nZS1wdWxsLTQtbWFjIHtcbiAgICBtYXJnaW4tdG9wOiAtMC40NXJlbTtcbn1cbi5tdC1jaGFuZ2UtcHVsbC00LXBjIHtcbiAgICBtYXJnaW4tdG9wOiAtMC44NXJlbTtcbn1cbi5wbC1jaGFuZ2Uge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG59XG5cbi5wYi1jaGFuZ2UtMTYtMzIge1xuIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4ucGNoYW5nZS1icmFuY2gge1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbi5oLWNoYW5nZS0yOC00OCB7XG4gICAgaGVpZ2h0OiAxLjc1cmVtO1xufVxuXG4uZmxleC1kaXJlY3Rpb24tY2hhbmdlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZvbnQtc2l6ZS0xMiB7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG59XG5cbi5tYXQtZmFiIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgIGxpbmUtaGVpZ2h0OiAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLml0YWxpY3Mge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmZvbnQtc2l6ZS0yNCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LXNpemUtMzIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvbnQtc2l6ZS00OCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuLmgtMjgge1xuICAgIGhlaWdodDogMS4yNXJlbTtcbn1cblxuLmgtMzgge1xuICAgIGhlaWdodDogMi4zNzVyZW07XG59XG5cbi5oLTQ4IHtcbiAgICBoZWlnaHQ6IDNyZW07XG59XG4uaC01OCB7XG4gICAgaGVpZ2h0OiAzLjYyNXJlbTtcbn1cbi5oLTY5IHtcbiAgICBoZWlnaHQ6IDQuMzEyNXJlbTtcbn1cbi5tci0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC4xMjVyZW07XG59XG4ubXItNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XG59XG4ubWwtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IC4xMjVyZW07XG59XG4ubWwtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbn1cbi5tbC02IHtcbiAgICBtYXJnaW4tbGVmdDogMC4zNzVyZW07XG59XG4ubWwtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xufVxuLm1sLXN3aXRjaC0tcmVzZXQge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjYyNXJlbTtcbn1cbi5tdC0yIHtcbiAgICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xufVxuLm10LTQge1xuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcbn1cbi5tdC04IHtcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbn1cbi5wYi0zNiB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuMjVyZW07XG59XG4ucGItNDgge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuLnBsLTIge1xuICAgIHBhZGRpbmctbGVmdDogLjEyNXJlbTtcbn1cbi5wbC00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcbn1cbi5wbC04IHtcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xufVxuLnBsLTE2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG4ucGwtMjAge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbn1cbi5wbC0yNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG59XG4ucGwtMzAge1xuICAgIHBhZGRpbmctbGVmdDogMS44NzVyZW07XG59XG4ucGwtMzIge1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cbi5wbC0zNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjEyNXJlbTtcbn1cbi5wbC0zNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjI1cmVtO1xufVxuLnBsLTQ2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuODc1cmVtO1xufVxuLnBsLTQ4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG59XG4ucGwtNTAge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG59XG4ucGwtMTAwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYuMjVyZW07XG59XG4ucGwtMTUwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDkuMzc1cmVtO1xufVxuLnBsLTIwMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMi41cmVtO1xufVxuLnBsLTI1MCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNS42MjVyZW07XG59XG4ucGwtNjQge1xuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cbi5wbC02NC0tcmVzZXQge1xuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cbi5wbC05MiB7XG4gICAgcGFkZGluZy1sZWZ0OiA1Ljc1cmVtO1xufVxuLnBsLTEwOSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjgxMjVyZW07XG59XG4ucGwtMzUwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIxLjg3NXJlbTtcbn1cbi5wbC01MDAge1xuICAgIHBhZGRpbmctbGVmdDogMzEuMjVyZW07XG59XG4ucHItMiB7XG4gICAgcGFkZGluZy1yaWdodDogLjEyNXJlbTtcbn1cbi5wci00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XG59XG4ucHItOCB7XG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XG59XG4ucHItMTYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5wdC04e1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbn1cbi5wdC0xNntcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnB0LTE4e1xuICAgIHBhZGRpbmctdG9wOiAxLjEyNXJlbTtcbn1cbi5wdC00OHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbn1cblxuLnB0LTUye1xuICAgIHBhZGRpbmctdG9wOiAzLjI1cmVtO1xufVxuXG4ucHQtNjR7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG59XG4ucHQtNzJ7XG4gICAgcGFkZGluZy10b3A6IDQuNXJlbTtcbn1cbi5wdC03NntcbiAgICBwYWRkaW5nLXRvcDogNC43NXJlbTtcbn1cblxuLnJlZ3VsYXIsIC5ub3JtYWwge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDs7XG59XG4uYmFja2dyb3VuZC1iZWlnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlYWY5ODtcbn1cblxuLmRvdCB7XG4gICAgaGVpZ2h0OiAxLjU2MjVyZW07XG4gICAgd2lkdGg6IDEuNTYyNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbi5yZWQge1xuICAgIGNvbG9yOiAjQ0Q1QzVDO1xufVxuXG4uYmxhY2sge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmdyZWVuIHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5pbmRpYW5SZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWFuUmVkO1xufVxuXG4uc2VhR3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcbn1cbi5saWdodENvcmFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuLm1lZGl1bVB1cnBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtcHVycGxlO1xufVxuXG4uYmFja2dyb3VuZC1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRDVDNUM7XG59XG4uYmFja2dyb3VuZC1ncmF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkVCRUJFO1xufVxuLmJhY2tncm91bmQtYmxhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG4uZ29sZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbn1cblxuXG4ud2hpdGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi53LTEwMCB7XG4gICAgd2lkdGg6IDYuMjVyZW07XG4gICAgbWluLXdpZHRoOiA2LjI1cmVtO1xufVxuXG4ubWluLXctMTUwIHtcbiAgICBtaW4td2lkdGg6IDkuMzc1cmVtO1xufVxuLm1pbi13LTE1MC0tcmVzZXQge1xuICAgIG1pbi13aWR0aDogOS4zNzVyZW07XG59XG4ubWluLXctMjUwIHtcbiAgICBtaW4td2lkdGg6IDE1LjYyNXJlbTtcbn1cbi5taW4tdy0zNTAge1xuICAgIG1pbi13aWR0aDogMjEuODc1cmVtO1xufVxuXG4ubWF4LXctNDUwIHtcbiAgICBtYXgtd2lkdGg6IDI4LjEyNXJlbTtcbn1cbi5tYXgtdy02MDAge1xuICAgIG1heC13aWR0aDogMzcuNXJlbTtcbn1cbi53LTE1MCB7XG4gICAgd2lkdGg6IDkuMzc1cmVtO1xufVxuLnctMjUwIHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xufVxuXG4udy0zMDAge1xuICAgIHdpZHRoOiAxOC43NXJlbTtcbn1cblxuLnctMzUwIHtcbiAgICB3aWR0aDogMjEuODc1cmVtO1xufVxuLnctMzUwLS1yZXNldCB7XG4gICAgd2lkdGg6IDIxLjg3NXJlbTtcbn1cblxuLnctNDUwIHtcbiAgICB3aWR0aDogMjguMTI1cmVtO1xufVxuXG4udy01MDAge1xuICAgIHdpZHRoOiAzMS4yNXJlbTtcbn1cblxuLnctNjAwIHtcbiAgICB3aWR0aDogMzcuNXJlbTtcbn1cblxuLmgtMjAwIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG59XG5cbi50ZXh0LWFsaWduLCAudGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ibHVlIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuLmtoYWtpIHtcbiAgICBjb2xvcjogZGFya2dyZWVuO1xufVxuXG4uZGFya2JsdWUge1xuICAgIGNvbG9yOiBkYXJrYmx1ZTtcbn1cblxuLmxpbWVncmVlbiB7XG4gICAgY29sb3I6ICMzMkNEMzI7XG59XG5cbi5kYXJrcmVkIHtcbiAgICBjb2xvcjogZGFya3JlZDtcbn1cblxuLmJyLWJlaWdlIHtcbiAgICBib3JkZXItcmlnaHQ6IC4xMjVyZW0gc29saWQgI2JlYWY5ODtcbn1cbi5ibC1iZWlnZSB7XG4gICAgYm9yZGVyLWxlZnQ6IC4xMjVyZW0gc29saWQgI2JlYWY5ODtcbn1cbi5idC1iZWlnZSB7XG4gICAgYm9yZGVyLXRvcDogLjEyNXJlbSBzb2xpZCAjYmVhZjk4O1xufVxuLmJiLWJlaWdlIHtcbiAgICBib3JkZXItYm90dG9tOiAuMTI1cmVtIHNvbGlkICNiZWFmOTg7XG59XG5cbi5yZWN0YW5nbGUge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgICBoZWlnaHQ6IC42MjVyZW07XG59XG4uZmxleCwgLnNob3d7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsb2F0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucHVsbC11cHtcbiAgICBtYXJnaW4tdG9wOiAtMS4yNXJlbTtcbn1cblxuXG4ucHVsbC1sZWZ0e1xuICAgIG1hcmdpbi1sZWZ0OiAtNy41cmVtO1xufVxuLnB1bGwtbGVmdC1wdWxse1xuICAgIG1hcmdpbi1sZWZ0OiAtNy41cmVtO1xufVxuXG4ucHVsbC1sZWZ0LTI0e1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdWxsLWxlZnQtMjQtLXJlc2V0e1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tb3ZlQW5kQ29sb3Ige1xuICAgIGFuaW1hdGlvbjogbW92ZUFuZENvbG9yIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBtb3ZlLWltYWdlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMy4xMjVyZW0pO1xuICAgIH1cbn0gXG5Aa2V5ZnJhbWVzIG1vdmUtdXAtZmFzdCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMTg3NXJlbSk7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBtb3ZlLWRvd24tZmFzdCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0LjY4NzVyZW0pO1xuICAgIH1cbn0gXG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA2MHJlbSkge1xuICAgICAgICAuZm9udC1zaXplLWNoYW5nZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXgtZGlyZWN0aW9uLWNoYW5nZSB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5wdWxsLXVwLWltYWdle1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTExLjEyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAucHYtY2hhbmdlIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmVBbmRDb2xvciB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQuNTNyZW0pO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5LjA2cmVtKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XG4gICAgICAgIC5mbGV4LWRpcmVjdGlvbi1jaGFuZ2Uge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLnB1bGwtbGVmdC0yNC0tcmVzZXQge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxsLWxlZnQtMjQtLXJlc2V0IDFzIGxpbmVhcjtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsLTY0IHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53LTM1MC0tcmVzZXQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubWluLXctMTUwLS1yZXNldCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMuMTI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC53LTQwLS1yZXNldCB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG4gICAgICAgIC5wbC05Mi1leGNlcHQtcG9ydHJhaXR7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgICAgIH1cbiAgICAgICAgLmJsLXN0YXNoIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAuMTI1cmVtIHNvbGlkICNiZWFmOTg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvbnQtY2hhbmdlLTE0LTE2IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAucHVsbC11cC1pbi1wdXNoLTIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAucHQtMzItZGVza3RvcC1wdXNoIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC5tdC1pbi1wb3J0cmFpdCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNC42ODc1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm10LWluLXBvcnRyYWl0LTIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oaWRlLWluLXBvcnRyYWl0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAucHQtMzItaW4tcG9ydHJhaXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucHQtY2hhbmdlLXB1bGwtMiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucHItNjQtZXhjZXB0LXBvcnRyYWl0IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDByZW07XG4gICAgICAgIH1cbiAgICAgICAgLmgtY2hhbmdlLTI4LTQ4IHtcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgfVxuICAgICAgICAucHVsbC11cC1pbWFnZXtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zLjc1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnB1bGwtbGVmdC1wdWxse1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcmVtO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsbC1sZWZ0LTI0LS1yZXNldCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlQW5kQ29sb3Ige1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlVSgtMy4xMjVyZW0pO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNi41NjI1cmVtKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4uc2hvdy1mYWRlSW57XG4gICAgYW5pbWF0aW9uOiBzaG93LWZhZGVJbiAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5zaG93LXNsb3ctZmFkZUlue1xuICAgIGFuaW1hdGlvbjogc2hvdy1zbG93LWZhZGVJbiA0cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5jb21taXQtZmFkZUluLTEge1xuICAgIGFuaW1hdGlvbjogY29tbWl0LWZhZGVJbi0xIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5jb21taXQtZmFkZUluLTIge1xuICAgIGFuaW1hdGlvbjogY29tbWl0LWZhZGVJbi0yIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmNvbW1pdC1mYWRlSW4tMyB7XG4gICAgYW5pbWF0aW9uOiBjb21taXQtZmFkZUluLTMgM3MgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZXtcbiAgICBhbmltYXRpb246IG1vdmUgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuXG59XG5cbi5tb3ZlLWltYWdlIHtcbiAgICBhbmltYXRpb246IG1vdmUtaW1hZ2UgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLm1vdmUtbGVmdCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWxlZnQgLjc1cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWxlZnQtZnJvbS13b3JraW5nIHtcbiAgICBhbmltYXRpb246IG1vdmUtbGVmdC1mcm9tLXdvcmtpbmcgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1sZWZ0LWZyb20taW5kZXgge1xuICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LWZyb20taW5kZXggMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLm1vdmUtbGVmdC1mcm9tLWluZGV4LTIge1xuICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LWZyb20taW5kZXgtMiAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXJpZ2h0IHtcbiAgICBhbmltYXRpb246IG1vdmUtcmlnaHQgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1yaWdodC1wdWxsIHtcbiAgICBhbmltYXRpb246IG1vdmUtcmlnaHQtcHVsbCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXJpZ2h0LW1lcmdlIHtcbiAgICBhbmltYXRpb246IG1vdmUtcmlnaHQtbWVyZ2UgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLm1vdmUtcmlnaHQtZmV0Y2gge1xuICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1mZXRjaCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwIHtcbiAgICBhbmltYXRpb246IG1vdmUtdXAgMS4zcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwLXB1bGwge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cC1wdWxsIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS11cC0tcHVzaCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXVwLS1wdXNoIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS11cC1mYXN0IHtcbiAgICBhbmltYXRpb246IG1vdmUtdXAtZmFzdCAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1kb3duLWZhc3Qge1xuICAgIGFuaW1hdGlvbjogbW92ZS1kb3duLWZhc3QgMnMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1kb3duLW9uZSB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWRvd24tb25lIC41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cblxuLm1vdmUtZG93bi10d28ge1xuICAgIGFuaW1hdGlvbjogbW92ZS1kb3duLXR3byAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1kb3duLXRocmVlIHtcbiAgICBhbmltYXRpb246IG1vdmUtZG93bi10aHJlZSAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ub3ZlcndyaXRlLWluZGV4IHtcbiAgICBhbmltYXRpb246IG92ZXJ3cml0ZS1pbmRleCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5vdmVyd3JpdGUtaW5kZXgxIHtcbiAgICBhbmltYXRpb246IG92ZXJ3cml0ZS1pbmRleDEgMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5vdmVyd3JpdGUtaW5kZXgyIHtcbiAgICBhbmltYXRpb246IG92ZXJ3cml0ZS1pbmRleDIgMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4ub3ZlcndyaXRlLWluZGV4MyB7XG4gICAgYW5pbWF0aW9uOiBvdmVyd3JpdGUtaW5kZXgzIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uaGVhZENvbG9yR3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcbiAgICBhbmltYXRpb246IG1vdmVUb1dvcmtpbmdBcmVhIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuXG4uaGVhZENvbG9yUmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XG4gICAgYW5pbWF0aW9uOiBtb3ZlVG9Xb3JraW5nQXJlYSAyLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmhlYWRDb2xvclB1cnBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtcHVycGxlO1xuICAgIGFuaW1hdGlvbjogbW92ZVRvV29ya2luZ0FyZWEgMi41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5oZWFkQ29sb3JHcmF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkVCRUJFO1xuICAgIGFuaW1hdGlvbjogbW92ZVRvV29ya2luZ0FyZWEgMi41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZVRvV29ya2luZ0FyZWEge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOS41cmVtKTtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIGNvbW1pdC1mYWRlSW4tMSB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOC43NXJlbSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBjb21taXQtZmFkZUluLTIge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcmVtKTtcbiAgICB9XG4gICAgMzIlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcmVtKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIGNvbW1pdC1mYWRlSW4tMyB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTEuMjVyZW0pO1xuICAgIH1cbiAgICA0MiUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTEuMjVyZW0pO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn0gXG5cblxuQGtleWZyYW1lcyBzaG93LWZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59IFxuQGtleWZyYW1lcyBzaG93LXNsb3ctZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn0gXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjByZW0pIHtcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0LjUzMTI1cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5Ljg3NXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTMuNDM3NXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20td29ya2luZyB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04LjQzNzVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTcuOTRyZW0sIDEuMjVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4LTIge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNy45NHJlbSwgMi41cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtcHVsbCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWZldGNoIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTcuODEyNXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1tZXJnZSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzLjc1cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLXVwIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA3MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi4xODc1cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVsbCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNzVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS11cC0tcHVzaCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMTg3NXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLXVwLWZhc3Qge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi4xODc1cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi1mYXN0IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0LjY4NzVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLW9uZSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuNXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdHdvIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXRocmVlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNS4wNjI1cmVtLCAtLjE4NzVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleDEge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00LjgxcmVtLCAtMi41cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgyIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNC44MXJlbSwgLTUuMTg3NXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MyB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQuODFyZW0sIC0uNjlyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpICB7XG4gICAgICAgIC5oaWRlLWluLWxhbmRzY2FwZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAucGwtbGFuZHNjYXBlLWNsb25le1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjM3NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbC1jaGFuZ2Utc3RhdHVzIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTIuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb250LWNoYW5nZS0xNC0xNiB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhbmdlLWRpcmVjdGlvbi1zdGFzaCB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG5cbiAgICAgICAgLnB1bGwtdXAtaW4tcHVzaCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMi44MXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wdC0zMi1pbi1wb3J0cmFpdCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucHYtY2hhbmdlIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAucHVsbC11cC1mZXRjaCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNC4zNzVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAucHQtY2hhbmdlLXB1bGwge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5wdC1jaGFuZ2UtcHVsbC0yIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hcmdpbi1pbi1sYW5kc2NhcGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubXQtY2hhbmdlLXB1bGwtMCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtLjYyNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tdC1jaGFuZ2UtcHVsbCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMS44NzVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm10LWNoYW5nZS1wdWxsLTIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjEyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAubXQtY2hhbmdlLXB1bGwtMi1tYWMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjEyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAubXQtY2hhbmdlLXB1bGwtMi1wYyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5tdC1jaGFuZ2UtcHVsbC00LW1hYyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMS43NXJlbTtcbiAgICAgICAgfVxuICAgICAgICAubXQtY2hhbmdlLXB1bGwtNC1wYyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMS43NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tdC1jaGFuZ2UtcHVsbC01IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5tdC1jaGFuZ2UtcHVsbC02IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBiLWNoYW5nZS0xNi0zMiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0uNjI1cmVtO1xuICAgICAgICAgICB9XG5cbiAgICAgICAgLnBhZGRpbmctbGFuZHNjYXBlLWNvbW1pdC10e1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnBhZGRpbmctbGFuZHNjYXBlLWNvbW1pdC1ie1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5vcmRlci1zd2l0Y2gtMCB7XG4gICAgICAgICAgICBvcmRlcjogMjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucHQtY2hhbmdlLS1jbG9uZSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAucHQtY2hhbmdlLS1jb21taXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlLXNpemUge1xuICAgICAgICAgICAgd2lkdGg6IDkuMzU3cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnB1bGwtdXAtaW1hZ2V7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMy42MjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2Utc2l6ZS0tY2xvbmUge1xuICAgICAgICAgICAgd2lkdGg6IDMuMTI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlLXNpemUtLWZldGNoIHtcbiAgICAgICAgICAgIHdpZHRoOiAzLjEyNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMy4xMjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleC1kaXJlY3Rpb24tY2hhbmdlIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cbiAgICAgICAgLnBsLWNoYW5nZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5wY2hhbmdlLWJyYW5jaCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLS42MjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tb25lIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi41cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi10d28ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdGhyZWUge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3LjVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQuODFyZW0sIC0uMTg3NXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQuODFyZW0sIC0yLjVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleDIge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00LjgxcmVtLCAtNS4xODc1cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgzIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNC44MXJlbSwgLTcuNjlyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20td29ya2luZyB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04LjQ0cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTcuOTQsIDEuMzc1cmVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4LTIge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNy45NHJlbSwgMi41cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03LjE5cmVtLCAtLjE4NzVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUuNjI1cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LXB1bGwge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1LjYyNXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LW1lcmdlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMuNzVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtdXAge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjI1cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVsbCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS44NzVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZUFuZENvbG9yIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNC44NHJlbSk7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkuNjlyZW0pO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDkuMzc1cmVtLCAuMzEyNXJlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtZmV0Y2gge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMy43NXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSAge1xuICAgICAgICAuaW1hZ2Utc2l6ZS0tY2xvbmUge1xuICAgICAgICAgICAgd2lkdGg6IDMuMTI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5wbC1jaGFuZ2Utc3RhdHVzIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wdC1jaGFuZ2UtcHVsbCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubXQtY2hhbmdlLXB1bGwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm10LWNoYW5nZS1wdWxsLTQtbWFjIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01LjE4NzVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLm10LWNoYW5nZS1wdWxsLTQtcGMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUuMTg3NXJlbTtcbiAgICAgICAgfVxuICAgICAgICAubXQtY2hhbmdlLXB1bGwtMiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnB0LWZldGNoIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJiLXBvcnRyYWl0LWZldGNoIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuOTM3NXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IC4wNjI1cmVtIHNvbGlkIGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFkLXBvcnRyYWl0LWZldGNoLTEge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuODFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnBhZC1wb3J0cmFpdC1mZXRjaC0yIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnB1bGwtdXAtZmV0Y2gge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTQuNjhyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2Utc2l6ZS0tZmV0Y2gge1xuICAgICAgICAgICAgd2lkdGg6IDMuMTI1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1pbWFnZSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCg3LjVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZVRvV29ya2luZ0FyZWEge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQuNjhyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLW9uZSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuNXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdHdvIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXRocmVlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA3MCUge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOS4xMjVyZW0sIC0uMDYyNXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkuMzc1cmVtLCAtMi41cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgyIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOS4xODc1cmVtLCAtNS4xODc1cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgzIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOS4xODc1cmVtLCAtLjY5cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLXdvcmtpbmcge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3Ljk0cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEzLjMxMjVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4LTIge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3JlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNy4xOXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNS42MjVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtcHVsbCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExLjJyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtbWVyZ2Uge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMy43NXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtdXAge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjA2MjVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS11cC1wdWxsIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA3MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xMjVyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1mZXRjaCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04LjU2cmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zLjEyNXJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYuNzVyZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICB9XG5cblxuLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDEuODc1cmVtIDEuODc1cmVtIDAgMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gICAgcGFkZGluZzogLjkzNzVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBtYXJnaW4tYm90dG9tOiAuMTI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFsaWduLWxlZnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmFsaWduLXJpZ2h0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5qdXN0aWZ5LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaXJlY3Rpb24tY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucGItOCB7XG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xufVxuLnBiLTE2IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbi5wYi0yNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cblxuLnBiLTI4IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS43NXJlbTtcbn1cbi5wYi0zMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5wYi00MiB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNjI1cmVtO1xufVxuLnB0LTMyIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLnB0LTU0IHtcbiAgICBwYWRkaW5nLXRvcDogMy4zNzVyZW07XG59XG5cbi5wdC02NCB7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG59XG5cbi5wdC0xMDAge1xuICAgIHBhZGRpbmctdG9wOiA2LjI1cmVtO1xufVxuXG4ucHQtNCB7XG4gICAgcGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLnByLTh7XG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XG59XG4ucHItMTYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5wci0yNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xufVxuLnByLTMyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuXG4ucHItNDgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG59XG4ucHItNjQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG59XG4udy1xdWFydGVyIHtcbiAgICB3aWR0aDogMjUlO1xufVxuXG4udy1oYWxmIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4udy1mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm9yZGVyLTEge1xuICAgIG9yZGVyOiAxO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA2MHJlbSkge1xuICAgIC5pbWFnZS1zaXplLWljb24ge1xuICAgICAgICB3aWR0aDogMy4xMjVyZW07XG4gICAgfVxuICAgIC5pbWFnZS1zaXplIHtcbiAgICAgICAgd2lkdGg6IDkuMzU3cmVtO1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZS0tY2xvbmUge1xuICAgICAgICB3aWR0aDogOS4zNTdyZW07XG4gICAgfVxuXG4gICAgLmltYWdlLXNpemUtLWZldGNoIHtcbiAgICAgICAgd2lkdGg6IDkuMzU3cmVtO1xuICAgIH1cbiAgICAucHQtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNsb25lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbiAgICAucGItY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgLmluZGV4X2NvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzLjI1cmVtO1xuICAgIH1cbiAgICAub3JkZXItc3dpdGNoLTAge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLTIge1xuICAgICAgICBvcmRlcjogMDtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLXN0YXNoIHtcbiAgICAgICAgb3JkZXI6IC0xO1xuICAgIH1cblxuIH1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSAgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XG4gICAgLmltYWdlLXNpemUtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICB9XG4gICAgLmltYWdlLXNpemUge1xuICAgICAgICB3aWR0aDogNi4ycmVtO1xuICAgIH1cbiAgICAuZm9udC1zaXplLWNoYW5nZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gICAgfVxuXG4gICAgLnB2LWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgfVxuICAgIC5wbC1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuICAgIC5jaGFuZ2UtZGlyZWN0aW9uIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmNoYW5nZS1kaXJlY3Rpb24tc3Rhc2gge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5oZWlnaHQtY2hhbmdlIHtcbiAgICAgICAgbWluLWhlaWdodDogNTkuOTM3NXJlbVxuICAgIH1cblxuICAgIC5wdC1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLnB0LWNoYW5nZS0tY2xvbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLnB0LWNoYW5nZS0tY29tbWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuXG4gICAgLnBiLWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgIC5ibC1jaGFuZ2Uge1xuICAgICAgICBib3JkZXItbGVmdDogLjEyNXJlbSBzb2xpZCAjYmVhZjk4O1xuICAgIH1cblxuICAgIC5pbmRleF9jb21taXQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMS44NzVyZW07XG4gICAgfVxuXG4gICAgLm9yZGVyLXN3aXRjaC0wIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgfVxuICAgIC5vcmRlci1zd2l0Y2gtMiB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cblxuICAgIC5vcmRlci1zd2l0Y2gtc3Rhc2gge1xuICAgICAgICBvcmRlcjogMztcbiAgICB9XG5cblxuXG4gfVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"visGitApp flex direction-column align-center\"> \n  <div class=\"flex align-center justify-center pl-8 pv-change\">\n    <img class=\"image-size-icon\" alt=\"Visual Git Logo\" src=\"favicon.ico\"/>\n    <div class=\"font-size-change bold pl-16\">Visualize Git</div>\n  </div>\n  <mat-form-field class=\"w-250\" appearance=\"fill\">\n    <mat-label float=\"never\">Choose a git command</mat-label>\n    <mat-select (selectionChange)=\"selectCommand($event.value)\">\n      <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n      >{{command.name}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <visualize-add @fade *ngIf=\"chosenCommand === 'add'\" class=\"flex w-full justify-center change-direction\"></visualize-add>\n  <visualize-branch @fade *ngIf=\"chosenCommand === 'branch'\" class=\"flex w-full justify-center change-direction\"></visualize-branch>\n  <visualize-checkout @fade *ngIf=\"chosenCommand === 'checkout'\" class=\"flex w-full justify-center change-direction\"></visualize-checkout>\n  <visualize-clone @fade *ngIf=\"chosenCommand === 'clone'\" class=\"flex w-full justify-center change-direction\"></visualize-clone>\n  <visualize-commit @fade *ngIf=\"chosenCommand === 'commit'\" class=\"flex w-full justify-center change-direction\"></visualize-commit>\n  <visualize-fetch @fade *ngIf=\"chosenCommand === 'fetch'\" class=\"flex w-full justify-center change-direction\"></visualize-fetch>\n  <visualize-init @fade *ngIf=\"chosenCommand === 'init'\" class=\"flex w-full justify-center change-direction\"></visualize-init>\n  <visualize-log @fade *ngIf=\"chosenCommand === 'log'\" class=\"flex w-full justify-center change-direction\"></visualize-log>\n  <visualize-merge @fade *ngIf=\"chosenCommand === 'merge'\" class=\"flex w-full justify-center change-direction\"></visualize-merge>\n  <visualize-pull @fade *ngIf=\"chosenCommand === 'pull'\" class=\"flex w-full align-center justify-center change-direction\"></visualize-pull>\n  <visualize-push @fade *ngIf=\"chosenCommand === 'push'\" class=\"flex w-full justify-center change-direction\"></visualize-push>\n  <visualize-reset @fade *ngIf=\"chosenCommand === 'reset'\" class=\"flex w-full justify-center change-direction\"></visualize-reset>\n  <visualize-stash @fade *ngIf=\"chosenCommand === 'stash'\" class=\"flex w-full justify-center change-direction\"></visualize-stash>\n  <visualize-status @fade *ngIf=\"chosenCommand === 'status'\" class=\"flex w-full justify-center change-direction\"></visualize-status>\n\n</section>\n"

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
    AppComponent.prototype.ngOnInit = function () {
        var temp = localStorage.getItem('chosenCommand');
        if (temp) {
            this.chosenCommand = temp;
        }
        else {
            this.chosenCommand = '';
        }
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

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue pchange-branch h-28\" >\n    <div *ngIf=\"!hideMessage\" [@myTrigger]=\"fadeIn\">The asterisk (*) indicates the current branch</div>  \n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeBranch()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git branch\"</button>\n    <div class=\"pr-8\"></div>\n    <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n  </div>\n\n  <section class= \"flex direction-column pt-16 w-quarter align-left\" >\n    <div [ngClass]=\"{'green': i == '1'}\" class=\"pl-change pt-8 pb-8\" *ngFor=\"let branch of branches; let i = index\" [@myTrigger]=\"fadeIn\">{{branch}}</div>\n  </section>\n</div>\n\n"

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
        }, 2500);
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

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue h-change-28-48 align-center\" >\n    <div *ngIf=\"hideMessage2 && hideMessage3\" >Example: The HEAD points to the branch \"main\"</div>  \n    <div *ngIf=\"!hideMessage2 && !hideMessage\" >The HEAD points to the branch \"bug/25282\"</div>  \n    <div class=\"pl-32 pr-32 text-center\" *ngIf=\"!hideMessage3 && !hideMessage\">A new branch is created (a copy of \"main\") and the HEAD points to it.</div>  \n  </div>\n  <section class=\"flex flex-direction-change align-center\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeCheckout()\" class=\"w-300\" mat-raised-button color=\"warn\">Visualize \"git checkout bug/25282\"</button>\n    <div class=\"pr-8 pb-8\"></div>\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeCheckoutNew()\" class=\"w-300\" mat-raised-button color=\"warn\">Visualize \"git checkout -b version_2.0\"</button>\n    <div class=\"pr-8 pb-8\"></div>\n    <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n  </section>\n  \n  <div class=\"flex direction-column\">\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pt-16 mt-4 pr-4 white\">&#10132;</div> <!--arrow right-->\n      <div class=\"pt-32 pr-8\">bug/25282</div>\n    </div>\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pr-4\" \n      [ngClass]=\"{'move-up-fast': !hideMessage2, 'move-down-fast': !hideMessage3 }\">&#10132;</div> <!--arrow right-->\n      <div class=\"mt-8 pr-8\">main</div>\n    </div>\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pr-2 white\">&#10132;</div> <!--arrow right-->\n      <div class=\"mt-8 pr-8\">pbi/25391</div>\n    </div>\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pr-2 white\">&#10132;</div> <!--arrow right-->\n      <div class=\"mt-8 pr-8\" [ngClass]=\"{'hide': hideMessage3, 'show-fadeIn': !hideMessage3 }\">version_2.0</div>\n    </div>\n  </div>\n</div>"

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
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.hideMessage2 = true;
        this.hideMessage3 = true;
        this.showReset = false;
    };
    CheckoutComponent.prototype.visualizeCheckout = function () {
        var _this = this;
        this.hideMessage2 = false;
        this.hideMessage = false;
        setTimeout(function () {
            _this.hideMessage = false;
        }, 1000);
        setTimeout(function () {
            _this.showReset = true;
        }, 1500);
    };
    CheckoutComponent.prototype.visualizeCheckoutNew = function () {
        var _this = this;
        this.hideMessage3 = false;
        this.hideMessage = false;
        setTimeout(function () {
            _this.hideMessage = false;
        }, 2000);
        setTimeout(function () {
            _this.showReset = true;
        }, 2400);
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

module.exports = "<div class=\"flex direction-column\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-change-28-48\">\n      <span [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">The git repo is cloned on the user's computer</span>\n    </div>\n    <div class=\"flex flex-direction-change align-center\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeClone()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git clone url\"</button>\n      <div class=\"pr-8 pb-8\"></div>\n      <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n    </div>\n  </div>\n <div class=\"flex pt-change--clone justify-center\"> \n    <section class=\"flex direction-column text-center align-center\"> \n      <div class=\"pb-8 font-change-14-16\">Repository at url <br>(example: GitHub repo) </div>\n      <img  class=\"image-size--clone\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      <img  class=\"image-size--clone pull-up-image\" [ngClass]=\"{'hide': hideMessage, 'show, move-image': !hideMessage}\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n    </section>\n    <section class=\"pl-64\">\n      <div class=\"font-change-14-16 pl-landscape-clone\">User's Computer</div>\n    </section>\n  </div>\n</div>\n"

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
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.showReset = true;
        }, 2000);
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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"blue h-48\">\n    <span [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">The index.js snapshot is saved in the Repo</span>\n   </div>\n   <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeCommit()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git commit index.js\"</button>\n    <div class=\"pr-8\"></div>\n    <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n  </div>\n <div class=\"flex pt-change--commit change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n  <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n  <div class=\"pt-change--commit\">index.html</div>\n    <div class=\"pt-4 \">index.js</div>\n  <div class=\"pt-4 pb-change padding-landscape-commit-b\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Index</div>\n    <div class=\"green index_commit padding-landscape-commit-t\" [ngClass]=\"{'moveAndColor': !hideMessage}\">index.js</div></div>\n    <div class=\"order-switch-0 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Repository</div></div>\n  </div>\n</section>"

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
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.showReset = true;
        }, 2200);
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

module.exports = "<div class=\"flex direction-column\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: User 2 executes \"get fetch\"</div>\n      <div class=\"flex direction-column\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        <div>All remote branches are fetched to the local repo and are now available for checkout. </div>\n      </div>\n    </div>\n    <div class=\"flex\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeFetch()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git fetch\"</button>\n      <div class=\"pr-8\"></div>\n      <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n    </div>\n  </div>\n <div class=\"flex flex-direction-change pt-32 pl-16 pr-16\"> \n   <section class=\"flex direction-column justify-center text-center pr-64 order-switch-2 pt-fetch bb-portrait-fetch\"> \n    <div class=\"pl-36 pb-16\">Local Repo User 1</div>\n    <div class=\"flex pr-48 pad-portrait-fetch-1\">\n      <div class=\"flex direction-column\">\n        <div class=\"flex\">\n          <div class=\"pr-8 white\">x</div>\n        </div>\n        <div class=\"flex pull-up-fetch\">\n          <div class=\"mt-8 pt-54 pr-8\">featureA</div>\n        </div>\n      </div>\n      <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n    </div>\n  </section>\n    <section class=\"flex direction-column text-center pr-64 order-1 pt-fetch bb-portrait-fetch\"> \n      <div class=\"pb-16 pl-36\">Remote (Shared) Repo </div>\n      <div class=\"flex justify-center align-center\">\n        <div class=\"flex direction-column pull-up-fetch\">\n          <div class=\"pt-76 pr-8\">featureA</div>\n          <div class=\"pull-up pr-8\" [ngClass]=\"{'hide': hideMessage, 'show move-right-fetch': !hideMessage}\">featureA</div>\n          <div class=\"pt-8 pr-8\">featureB</div>\n          <div class=\"mt-8 pull-up pr-8\"  [ngClass]=\"{'hide': hideMessage, 'show move-right-fetch': !hideMessage}\">featureB</div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column justify-center align-center text-center pr-64 order-switch-0 bb-portrait-fetch\"> \n      <div class=\"pl-30 pb-16\">Local Repo User 2</div>\n      <div class=\"flex pr-48 pad-portrait-fetch-2\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex pull-up-fetch\">\n            <div class=\"pt-76 pr-8 white\">featureA</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"mt-8 pr-8\" [ngClass]=\"{'hide': !hideMessage}\">featureB</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

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
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.showReset = true;
        }, 2200);
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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"blue h-48 pl-32 pr-32 pb-16 text-center\">\n    <span [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: A folder contains 3 files. No git repository exists.</span>\n    <span [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">\n      A git repository is created (look for a hidden folder call .git).\n      Git init only needs to be run once. </span>\n   </div>\n   <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeInit()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git init\"</button>\n    <div class=\"pr-8\"></div>\n    <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change text-align\"\n         [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Working Area</div>\n      <div class=\"pt-change\">index.html</div>\n      <div class=\"pt-4 \">index.js</div>\n      <div class=\"pt-4 pb-change\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change text-align\"\n        [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Index</div>\n    </div>\n    <div class=\"order-switch-0 height-change text-align\"\n          [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Repository</div>\n    </div>\n  </div>\n</section>"

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

module.exports = "<div class=\"flex direction-column align-center \">\n  <div class=\"blue align-center pl-32 pr-32 pb-16 text-center max-w-450\" \n      *ngIf=\"!hideMessage\">Lists the commits for the current branch. Use \"git log\" without options to see more information such as author and date</div>\n  <section class= \"flex direction-column align-center\" >\n    <div class=\"flex\">\n      <div class=\"pr-8\"></div>\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeLog()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git log --oneline\"</button>\n      <div class=\"pr-8\"></div>\n      <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n    </div>\n  </section>\n  <section class=\"flex align-center direction-column\">\n    <div *ngIf=\"!hideMessage\" class=\"flex direction-column align-left pl-50\" >\n      <div class=\"flex-direction-change\"><div class=\"commit flex commit-fadeIn-1 pt-32 pb-2\"><div class=\"w-100 pr-8 khaki bold\">da91bc1a</div><div>( <span class=\"darkblue bold\">HEAD -> </span><span class=\"limegreen bold\">main</span>, <span class=\"red bold pl-2\">origin/main</span>)</div></div>\n      <div class=\"pl-109 commit flex commit-fadeIn-1 pb-8\"> require oauth authentication</div></div>\n      <div class=\"commit flex commit-fadeIn-2 pb-8\"><div class=\"w-100 pr-8 khaki bold\">37bce8f6</div><div>add navigation bar</div></div>\n      <div class=\"commit flex commit-fadeIn-3 pb-8\"><div class=\"w-100 pr-8 khaki bold\">1dd25ea0</div><div>first commit, lay out app</div></div>\n    </div>\n  </section>\n</div>\n"

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
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.showReset = true;
        }, 3300);
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

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-change-28-48 pb-change-16-32\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-450\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The main branch is updated with the latest commits from the feature branch.\n        (A merge conflict may need to be resolved.)\n      </div>\n    </div>\n    <div class=\"flex\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeMerge()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git merge feature\"</button>\n      <div class=\"pr-8\"></div>\n      <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n    </div>\n  </div>\n <div class=\"flex pt-32 w-full align-center justify-center\"> \n    <section class=\"flex direction-column text-left pr-16\"> \n      <div class=\"pb-8 pl-32 bold\">feature branch </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-18 pl-4 mt-4 pr-2\">&#10132;</div> <!--arrow right-->\n            <div class=\"pr-2 pt-32\">commit 86b5f</div>\n            <div class=\"pr-8 pull-left pt-32\" [ngClass]=\"{'hide': hideMessage, 'show move-right-merge': !hideMessage}\">commit 86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"font-size-32 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-8 pl-4\">commit e34b2</div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"flex direction-column text-left\"> \n      <div class=\"pb-8 bold pl-32 ml-4\">main branch</div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-18 mt-4 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"white\">commit 86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"font-size-32\" [ngClass]=\"{'move-up': !hideMessage}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pl-2 mt-8\">commit e34b2</div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n"

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
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.showReset = true;
        }, 2000);
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

/***/ "./src/app/pull/pull.component.html":
/*!******************************************!*\
  !*** ./src/app/pull/pull.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center\">\n  <div>isMac: {{isMac}}</div>\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-600 h-change-28-48\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The local main branch now points to the latest commit from the repo main branch. \n        git pull = git fetch + git merge. (A merge conflict may need to be resolved.) \n      </div>\n    </div>\n    <div class=\"flex align-center pt-32-in-portrait\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizePull()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git pull origin main\"</button>\n      <div class=\"pr-8\"></div>\n      <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n    </div>\n  </div>\n  <div class=\"flex pt-32 align-center\"> \n    <section class=\"flex direction-column text-center pr-64-except-portrait\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16\">\n        <div>Remote Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-pull-2 pl-4 mt-change-pull-2 pr-2\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-pull pr-8\">86b5f</div>\n            <div class=\"pt-change-pull pr-8 pull-left-pull\" [ngClass]=\"{'hide': hideMessage, 'show move-right-pull': !hideMessage}\">86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"font-size-32 pr-2 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-pull-0 pr-8 mt-in-portrait\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column align-center text-center pr-64-except-portrait margin-in-landscape mt-in-portrait-2\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16\">\n        <div>Local Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-pull-2 mt-change-pull-2 mt-change-pull-3 pr-2 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-pull pr-8 white \">86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"font-size-32 pr-2\" [ngClass]=\"{'mt-change-pull-4-mac': isMac, 'mt-change-pull-4-pc': !isMac,'move-up-pull': !hideMessage}\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-pull-6 pr-8 mt-in-portrait\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

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
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.showReset = true;
        }, 4500);
    };
    PullComponent.prototype.reset = function () {
        window.location.reload();
    };
    PullComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-pull',
            template: __webpack_require__(/*! ./pull.component.html */ "./src/app/pull/pull.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PullComponent);
    return PullComponent;
}());



/***/ }),

/***/ "./src/app/push/push.component.html":
/*!******************************************!*\
  !*** ./src/app/push/push.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-600 h-change-28-48 font-change-14-16\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The remote main branch now points to the latest commit from the local main branch.\n        It's advisable to do a pull before a push to a shared repo.\n        When combining code with a push or a pull, merge conflicts may need to be resolved.\n      </div>\n    </div>\n    <div class=\"flex align-center pt-32-in-portrait\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizePush()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git push origin main\"</button>\n      <div class=\"pr-8\"></div>\n      <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n    </div>\n  </div>\n  <div class=\"flex pt-32 align-center\"> \n    <section class=\"flex direction-column text-center pr-64-except-portrait\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16 pull-up-in-push\">\n        <div>Remote Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-pull-2 mt-change-pull-2 mt-change-pull-3 pr-2 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-pull pr-8 white \">86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"font-size-32 pr-2 mt-change-pull-4\" [ngClass]=\"{'move-up-pull': !hideMessage}\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-pull-6 pr-8 mt-in-portrait\">e34b2</div>\n          </div>\n        </div>\n\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column align-center text-center pr-64-except-portrait margin-in-landscape mt-in-portrait-2\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16 pull-up-in-push-2\">\n        <div>Local Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\"  >\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-pull-2 pl-4 mt-change-pull-2 pr-2\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-pull pr-8\">86b5f</div>\n            <div class=\"pt-change-pull pr-8 pull-left\" [ngClass]=\"{'hide': hideMessage, 'show move-left': !hideMessage}\">86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"font-size-32 pr-2 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-pull-0 pr-8 mt-in-portrait\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

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
        this.hideMessage = true;
        this.showReset = false;
    };
    PushComponent.prototype.visualizePush = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.showReset = true;
        }, 4500);
    };
    PushComponent.prototype.reset = function () {
        window.location.reload();
    };
    PushComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-push',
            template: __webpack_require__(/*! ./push.component.html */ "./src/app/push/push.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PushComponent);
    return PushComponent;
}());



/***/ }),

/***/ "./src/app/reset/reset.component.html":
/*!********************************************!*\
  !*** ./src/app/reset/reset.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"h-48\">\n   <span class=\"blue font-change-14-16 pl-16 pr-16 text-center\" [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">git reset optionally moves the HEAD in the Repository and optionally overwrites the Index and Working Area</span>\n  <div class=\"flex direction-column\">\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head1' }\">Points to commit one place before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head' }\">Points to HEAD (default)</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head2' }\">Points to commit two places before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head3' }\">Points to commit three places before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'soft' }\">Soft: no overwrites</span>\n     <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'mixed' }\">Mixed (default): overwrite Index</span>\n    <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'hard' }\">Hard: overwrite Index and Working Area</span>\n  </div>\n  </div>\n  <div class=\"flex align-center justify-center\">\n    <mat-form-field class=\"w-40\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose where to move HEAD</mat-label>\n      <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommit($event.value)\">\n        <mat-option *ngFor = \"let commit of commits\" [value]=\"commit.name\"\n        >{{commit.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div class=\"pr-8\"></div>\n    <mat-form-field class=\"w-40--reset\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose overwrite option</mat-label>\n      <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommand($event.value)\">\n        <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n        >{{command.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"completed\" (click)=\"visualizeReset()\" class=\"w-350--reset\" mat-raised-button color=\"warn\">Visualize \"git reset<span *ngIf=\"chosenCommit !=='no parameter'\"> {{chosenCommit}}</span><span *ngIf=\"chosenCommand !=='no parameter' && chosenCommand !==''\"> --{{chosenCommand}}</span>\"</button>\n    <div class=\"pr-8\"></div>\n    <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n  </div>\n  <div class=\"flex pt-32 change-directionx\">\n    <div class=\"order-switch-2x flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n      <div class=\"w-full min-w-150--reset background-black white\">Working Area</div>\n      <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n        <div class=\"dot gold\"></div>\n        <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div>\n      </div>\n    </div>\n    <div class=\"order-1x height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150--reset background-black white\">Index</div>\n      <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n        <div class=\"dot gold\"></div>\n        <div class=\"\" \n        [ngClass]=\"{'hide': !hardOverwrite() , 'dot pull-left-24--reset show' : !hideMessage, \n        'headColorGreen': (chosenCommand === 'hard' && headPointer() === 'head'),\n        'headColorRed': (chosenCommand === 'hard' && headPointer() === 'head1'),\n        'headColorPurple': (chosenCommand === 'hard' && headPointer() === 'head2'),\n        'headColorGray': (chosenCommand === 'hard' && headPointer() === 'head3')}\"></div>\n        <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div>\n      </div>\n    </div>\n    <div class=\"order-switch-0x height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-250--reset background-black white\">Repository</div>\n      <div class=\"flex align-center pt-8 pb-8 pr-8\">\n        <div class=\"toMove pl-20 pr-8\">HEAD</div>\n        <div class=\"toMove toMove--arrow font-size-32 pr-8\">&#10132;</div> <!--arrow right-->\n        <div class=\"head dot seaGreen\" [ngClass]=\"{'hide': !copyHead(), 'show overwrite-index': copyHead()}\"></div>\n        <div class=\"dot seaGreen \" [ngClass]=\"{'pull-left-24--reset': copyHead()}\"></div>\n        <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div>\n      </div>\n      <div class=\"flex align-center justify-center ml-switch--reset pl-64--reset pb-8 pr-8\">\n        <div class=\"head1 dot indianRed\" [ngClass]=\"{'hide': !copyHead1(), 'show overwrite-index1': copyHead1()}\"></div>\n        <div class=\"dot indianRed \" [ngClass]=\"{'pull-left-24--reset': copyHead1()}\"></div>\n        <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div>\n      </div>\n      <div class=\"flex align-center justify-center ml-switch--reset pt-8 pl-64--reset pb-8 pr-8\">\n        <div class=\"head2 dot mediumPurple\" [ngClass]=\"{'hide': !copyHead2(), 'show overwrite-index2': copyHead2()}\"></div>\n        <div class=\"dot mediumPurple \" [ngClass]=\"{'pull-left-24--reset': copyHead2()}\"></div>\n        <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div>\n      </div>\n      <div class=\"flex align-center justify-center ml-switch--reset  pt-8 pl-64--reset pb-8 pr-8\">\n        <div class=\"head3 dot background-gray\" [ngClass]=\"{'hide': !copyHead3(), 'show overwrite-index3': copyHead3()}\"></div>\n        <div class=\"dot background-gray \" [ngClass]=\"{'pull-left-24--reset': copyHead3()}\"></div>\n        <div class=\"pl-8 pr-8 hide-in-portrait\">index.html</div>\n      </div>\n    </div>\n  </div>\n</section>"

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
        var _this = this;
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
        setTimeout(function () {
            _this.showReset = true;
        }, 3000);
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
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"flex align-center justify-center change-direction-stash\">\n    <div class=\"h-change-28-48 text-center\">\n      <span class=\"blue align-center text-align pl-16 pr-16 font-change-14-16\" >\"git stash\" stores files in the Stash Area. These files can be retrieved later with \"git stash apply\".</span>\n     </div>\n     <div class=\"flex pt-16\">\n       <div class=\"pr-8\"></div>\n       <mat-form-field class=\"w-full stash-field\" appearance=\"fill\">\n         <mat-label float=\"never\">Choose an option</mat-label>\n         <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommand($event.value)\">\n           <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n           >{{command.name}}</mat-option>\n         </mat-select>\n       </mat-form-field>\n     </div>\n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"completed\" (click)=\"visualizeStash()\" class=\"w-full\" mat-raised-button color=\"warn\">Visualize \"git stash<span *ngIf=\"chosenCommand !=='no option' && chosenCommand !==''\"> --{{chosenCommand}}</span>\"</button>\n    <div class=\"pr-8\"></div>\n    <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-stash flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Stash Area</div>\n      <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n      </div>\n    </div>\n    <div class=\"order-switch-2 bl-stash flex  direction-column height-change bt-beige bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n      <div class=\"flex align-center direction-column align-left justify-center pt-8 mt-4 pb-32\">\n        <div class=\"pl-8 toMove tracked noOption\">sidebar.html</div>\n        <div class=\"pl-8 toMove untracked\">untracked: nav.js</div>\n      </div>\n    </div>\n    <div class=\"order-1 height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Index</div>\n      <div class=\"flex align-left pt-8 mt-4 pb-32\">\n        <div class=\"pl-8 toMove index noOption\">sidebar.css</div>\n      </div>\n    </div>\n    <div class=\"order-switch-0 height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Repository</div>\n    </div>\n  </div>\n</section>"

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
        var _this = this;
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
        setTimeout(function () {
            _this.showReset = true;
        }, 1500);
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

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue pt-8 h-change-28-48\" >\n    <div class=\"blue w-450 text-center\" *ngIf=\"!hideMessage\" [@myTrigger]=\"fadeIn\"><span class=\"red bold pr-8\">Red: <span class=\"black regular\">in Working Area.</span> </span><span class=\"green bold\">Green:<span class=\"black regular\">  in Index.</span></span></div>\n  </div>\n  <div class=\"flex pt-8\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeStatus()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git status\"</button>\n    <div class=\"pr-8\"></div>\n    <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n  </div>\n  <section class= \"flex direction-column pl-change-status pt-16 w-half align-left\" >\n    <div [ngClass]=\"{\n                    'green bold pl-16': i == '1',\n                    'pl-16': (i == '1' || i == '3'),\n                    'red bold': i == '3'\n                  }\" \n                    class=\"pt-8 pb-8\" *ngFor=\"let message of messages; let i = index\" [@myTrigger]=\"fadeIn\">{{message}}</div>\n  </section>\n</div>\n\n\n"

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
        }, 2800);
    };
    StatusComponent.prototype.reset = function () {
        window.location.reload();
    };
    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
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