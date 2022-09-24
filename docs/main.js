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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"blue h-48\">\n   <span [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">A snapshot of index.js is staged in the Index</span>\n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeAdd()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git add index.js\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n  <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n  <div class=\"pt-change\">index.html</div>\n    <div class=\"pt-4 \">index.js</div>\n    <div class=\"pull-up green\" [ngClass]=\"{'hide': hideMessage, 'show, move': !hideMessage}\">index.js</div>\n  <div class=\"pt-4 pb-change\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Index</div></div>\n    <div class=\"order-switch-0 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Repository</div></div>\n  </div>\n</section>"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var AddComponent = /** @class */ (function () {
    function AddComponent(sharedService) {
        this.sharedService = sharedService;
    }
    AddComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
    };
    AddComponent.prototype.visualizeAdd = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 2000);
    };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
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

module.exports = "\n.visGitApp {\n    font-family: Arial, Helvetica, sans-serif !important;\n}\n<!--snackbar-->\nul.custom {\n    list-style-type: none; /* Remove bullets */\n    padding: 0; /* Remove padding */\n    margin: 0; /* Remove margins */\n  }\nul li {\n    margin: 10px;\n  }\n::ng-deep .custom-style{\n    background-color: #c21807;\n    color:white;\n    display: flex !important;\n    justify-content: center;\n    align-items: center !important;\n  }\n.font-change-14-16 {\n    font-size: 1rem;\n}\n.font-16-14 {\n    font-size: 16px;\n}\n.w-40--reset {\n    width: 15.625rem;\n}\n.pl-change-status {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.change-direction-stash {\n    flex-direction: column;\n}\n.pl-92-except-portrait{\n    padding-left: 1.875rem;\n}\n.pr-64-except-portrait {\n    padding-right: 0rem;\n}\n.pt-32-in-portrait {\n    padding-top: 2rem;\n}\n.image-size-icon {\n    width: 3.125rem;\n}\n.font-size-change {\n    font-size: 1.375rem;\n}\n.pl-change {\n    padding-left: 3.125rem;\n}\n.pb-change-16-32 {\n padding-bottom: 2rem;\n}\n.h-change-28-48 {\n    height: 1.75rem;\n}\n.flex-direction-change {\n    flex-direction: row;\n}\n.font-size-12 {\n    font-size: .75rem;\n}\n.mat-fab .mat-button-wrapper {\n    line-height: .25rem !important;\n}\n.italics {\n    font-style: italic;\n}\n.font-size-24 {\n    font-size: 1.5rem;\n}\n.font-size-32 {\n    font-size: 2rem;\n}\n.font-size-48 {\n    font-size: 3rem;\n}\n.h-28 {\n    height: 1.25rem;\n}\n.h-38 {\n    height: 2.375rem;\n}\n.h-48 {\n    height: 3rem;\n}\n.h-58 {\n    height: 3.625rem;\n}\n.h-69 {\n    height: 4.3125rem;\n}\n.mr-2 {\n    margin-right: .125rem;\n}\n.mr-4 {\n    margin-right: .25rem;\n}\n.ml-2 {\n    margin-left: .125rem;\n}\n.ml-4 {\n    margin-left: .25rem;\n}\n.ml-6 {\n    margin-left: 0.375rem;\n}\n.ml-8 {\n    margin-left: .5rem;\n}\n.ml-switch--reset {\n    margin-left: 2.625rem;\n}\n.mt-2 {\n    margin-top: .125rem;\n}\n.mt-4 {\n    margin-top: .25rem;\n}\n.mt-8 {\n    margin-top: .5rem;\n}\n.pb-36 {\n    padding-bottom: 2.25rem;\n}\n.pb-48 {\n    padding-bottom: 3rem;\n}\n.pl-2 {\n    padding-left: .125rem;\n}\n.pl-4 {\n    padding-left: .25rem;\n}\n.pl-8 {\n    padding-left: .5rem;\n}\n.pl-16 {\n    padding-left: 1rem;\n}\n.pl-20 {\n    padding-left: 1.25rem;\n}\n.pl-24 {\n    padding-left: 1.5rem;\n}\n.pl-30 {\n    padding-left: 1.875rem;\n}\n.pl-32 {\n    padding-left: 2rem;\n}\n.pl-34 {\n    padding-left: 2.125rem;\n}\n.pl-36 {\n    padding-left: 2.25rem;\n}\n.pl-46 {\n    padding-left: 2.875rem;\n}\n.pl-48 {\n    padding-left: 3rem;\n}\n.pl-50 {\n    padding-left: 3.125rem;\n}\n.pl-100 {\n    padding-left: 6.25rem;\n}\n.pl-150 {\n    padding-left: 9.375rem;\n}\n.pl-200 {\n    padding-left: 12.5rem;\n}\n.pl-250 {\n    padding-left: 15.625rem;\n}\n.pl-64 {\n    padding-left: 4rem;\n}\n.pl-64--reset {\n    padding-left: 4rem;\n}\n.pl-92 {\n    padding-left: 5.75rem;\n}\n.pl-109 {\n    padding-left: 6.8125rem;\n}\n.pl-350 {\n    padding-left: 21.875rem;\n}\n.pl-500 {\n    padding-left: 31.25rem;\n}\n.pr-2 {\n    padding-right: .125rem;\n}\n.pr-4 {\n    padding-right: .25rem;\n}\n.pr-8 {\n    padding-right: .5rem;\n}\n.pr-16 {\n    padding-right: 1rem;\n}\n.pt-8{\n    padding-top: .5rem;\n}\n.pt-16{\n    padding-top: 1rem;\n}\n.pt-18{\n    padding-top: 1.125rem;\n}\n.pt-48{\n    padding-top: 3rem;\n}\n.pt-52{\n    padding-top: 3.25rem;\n}\n.pt-64{\n    padding-top: 4rem;\n}\n.pt-72{\n    padding-top: 4.5rem;\n}\n.pt-76{\n    padding-top: 4.75rem;\n}\n.regular, .normal {\n    font-weight: normal;\n}\n.bold {\n    font-weight: bold;;\n}\n.background-beige {\n    background-color: #beaf98;\n}\n.dot {\n    height: 1.5625rem;\n    width: 1.5625rem;\n    border-radius: 50%;\n    display: inline-block;\n  }\n.red {\n    color: #CD5C5C;\n}\n.black {\n    color: black;\n}\n.green {\n    color: green;\n}\n.indianRed{\n    background-color: indianRed;\n}\n.seaGreen {\n    background-color: darkseagreen;\n}\n.lightCoral {\n    background-color: lightcoral;\n}\n.mediumPurple {\n    background-color: mediumpurple;\n}\n.background-red {\n    background-color: #CD5C5C;\n}\n.background-gray {\n    background-color: #BEBEBE;\n}\n.background-black {\n    background-color: #000000;\n}\n.gold {\n    background-color: gold;\n}\n.white {\n    color: white;\n}\n.w-100 {\n    width: 6.25rem;\n    min-width: 6.25rem;\n}\n.min-w-150 {\n    min-width: 9.375rem;\n}\n.min-w-150--reset {\n    min-width: 9.375rem;\n}\n.min-w-250 {\n    min-width: 15.625rem;\n}\n.min-w-350 {\n    min-width: 21.875rem;\n}\n.max-w-450 {\n    max-width: 28.125rem;\n}\n.max-w-600 {\n    max-width: 37.5rem;\n}\n.w-150 {\n    width: 9.375rem;\n}\n.w-250 {\n    width: 15.625rem;\n}\n.w-300 {\n    width: 18.75rem;\n}\n.w-350 {\n    width: 21.875rem;\n}\n.w-350--reset {\n    width: 21.875rem;\n}\n.w-450 {\n    width: 28.125rem;\n}\n.w-500 {\n    width: 31.25rem;\n}\n.w-600 {\n    width: 37.5rem;\n}\n.h-200 {\n    height: 12.5rem;\n}\n.text-align, .text-center {\n    text-align: center;\n}\n.text-left {\n    text-align: left;\n}\n.blue {\n    color: blue;\n}\n.khaki {\n    color: darkgreen;\n}\n.darkblue {\n    color: darkblue;\n}\n.limegreen {\n    color: #32CD32;\n}\n.darkred {\n    color: darkred;\n}\n.br-beige {\n    border-right: .125rem solid #beaf98;\n}\n.bl-beige {\n    border-left: .125rem solid #beaf98;\n}\n.bt-beige {\n    border-top: .125rem solid #beaf98;\n}\n.bb-beige {\n    border-bottom: .125rem solid #beaf98;\n}\n.rectangle {\n    width: 25rem;\n    height: .625rem;\n}\n.flex, .show{\n    display: flex;\n}\n.float {\n    float: right;\n}\n.pull-up{\n    margin-top: -1.25rem;\n}\n.pull-left{\n    margin-left: -7.5rem;\n}\n.pull-left-pull{\n    margin-left: -7.5rem;\n}\n.pull-left-24{\n    margin-left: -1.5rem !important;\n}\n.moveAndColor {\n    -webkit-animation: moveAndColor 1s linear;\n            animation: moveAndColor 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(13.125rem);\n    }\n}\n@keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(13.125rem);\n    }\n}\n@-webkit-keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.1875rem);\n    }\n}\n@keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.1875rem);\n    }\n}\n@-webkit-keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(4.6875rem);\n    }\n}\n@keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(4.6875rem);\n    }\n}\n.show-fadeIn{\n    -webkit-animation: show-fadeIn 2s linear;\n            animation: show-fadeIn 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.show-slow-fadeIn{\n    -webkit-animation: show-slow-fadeIn 2s linear;\n            animation: show-slow-fadeIn 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.commit-fadeIn-1 {\n    -webkit-animation: commit-fadeIn-1 1s linear;\n            animation: commit-fadeIn-1 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.commit-fadeIn-2 {\n    -webkit-animation: commit-fadeIn-2 2s linear;\n            animation: commit-fadeIn-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.commit-fadeIn-3 {\n    -webkit-animation: commit-fadeIn-3 3s linear;\n            animation: commit-fadeIn-3 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move{\n    -webkit-animation: move 1s linear;\n            animation: move 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n\n}\n.move-image {\n    -webkit-animation: move-image 1s linear;\n            animation: move-image 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left {\n    -webkit-animation: move-left .75s linear;\n            animation: move-left .75s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left-from-working {\n    -webkit-animation: move-left-from-working 1s linear;\n            animation: move-left-from-working 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left-from-index {\n    -webkit-animation: move-left-from-index 1s linear;\n            animation: move-left-from-index 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left-from-index-2 {\n    -webkit-animation: move-left-from-index-2 1s linear;\n            animation: move-left-from-index-2 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-right {\n    -webkit-animation: move-right 1s linear;\n            animation: move-right 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-right-pull {\n    -webkit-animation: move-right-pull 1s linear;\n            animation: move-right-pull 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up {\n    -webkit-animation: move-up 1.3s linear;\n            animation: move-up 1.3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up-pull {\n    -webkit-animation: move-up-pull 1.5s linear;\n            animation: move-up-pull 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up--push {\n    -webkit-animation: move-up--push 1.5s linear;\n            animation: move-up--push 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up-fast {\n    -webkit-animation: move-up-fast .5s linear;\n            animation: move-up-fast .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-fast {\n    -webkit-animation: move-down-fast 2s linear;\n            animation: move-down-fast 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-one {\n    -webkit-animation: move-down-one .5s linear;\n            animation: move-down-one .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-two {\n    -webkit-animation: move-down-two .5s linear;\n            animation: move-down-two .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-three {\n    -webkit-animation: move-down-three .5s linear;\n            animation: move-down-three .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.hide{\n    display: none;\n}\nul {\n    list-style-type: none;\n    margin: 1.875rem 1.875rem 0 0;\n    padding: 0;\n}\nli {\n    padding: .9375rem;\n    width: 100%;\n    background: #f1f1f1;\n    margin-bottom: .125rem;\n    font-weight: bold;\n}\n.align-center {\n    align-items: center;\n}\n.align-left {\n    align-items: flex-start;\n}\n.align-right {\n    align-items: flex-end;\n}\n.justify-center {\n    justify-content: center;\n}\n.direction-column {\n    flex-direction: column;\n}\n.pb-8 {\n    padding-bottom: .5rem;\n}\n.pb-16 {\n    padding-bottom: 1rem;\n}\n.pb-24 {\n    padding-bottom: 1.5rem;\n}\n.pb-28 {\n    padding-bottom: 1.75rem;\n}\n.pb-32 {\n    padding-bottom: 2rem;\n}\n.pb-42 {\n    padding-bottom: 2.625rem;\n}\n.pt-32 {\n    padding-top: 2rem;\n}\n.pt-54 {\n    padding-top: 3.375rem;\n}\n.pt-64 {\n    padding-top: 4rem;\n}\n.pt-100 {\n    padding-top: 6.25rem;\n}\n.pt-4 {\n    padding-top: .25rem;\n}\n.pr-8{\n    padding-right: .5rem;\n}\n.pr-16 {\n    padding-right: 1rem;\n}\n.pr-24 {\n    padding-right: 1.5rem;\n}\n.pr-32 {\n    padding-right: 2rem;\n}\n.pr-48 {\n    padding-right: 3rem;\n}\n.pr-64 {\n    padding-right: 4rem;\n}\n.w-quarter {\n    width: 25%;\n}\n.w-half {\n    width: 50%;\n}\n.w-full {\n    width: 100%;\n}\n.order-1 {\n    order: 1;\n}\n@-webkit-keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(8.75rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(8.75rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@-webkit-keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@-webkit-keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@-webkit-keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@-webkit-keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n/* desktop only css  */\n@media only screen and (min-device-width: 60rem) {\n    .font-size-change {\n        font-size: 2.25rem;\n    }\n    .flex-direction-change {\n        flex-direction: row;\n    }\n    .pull-up-image{\n        margin-top: -11.125rem;\n    }\n    .pv-change {\n        padding-bottom: 2rem;\n        padding-top: 2rem;\n    }\n    .image-size-icon {\n        width: 3.125rem;\n    }\n    .image-size {\n        width: 9.357rem;\n    }\n\n    .image-size--fetch {\n        width: 9.357rem;\n    }\n    .pt-change {\n        padding-top: 2rem;\n    }\n    .pt-change--clone {\n        padding-top: 2rem;\n    }\n    .pt-change--commit {\n        padding-top: 2rem;\n    }\n    .pb-change {\n        padding-bottom: 2rem;\n    }\n\n    .index_commit {\n        padding-top: 3.25rem;\n    }\n    .order-switch-0 {\n        order: 2;\n    }\n\n    .order-switch-2 {\n        order: 0;\n    }\n\n    .order-switch-stash {\n        order: -1;\n    }\n    @-webkit-keyframes move {\n        0% {\n            transform: translateX(0);\n        }\n        50% {\n            transform: translateX(4.53125rem);\n        }\n        100% {\n            transform: translateX(9.875rem);\n        }\n    }\n    @keyframes move {\n        0% {\n            transform: translateX(0);\n        }\n        50% {\n            transform: translateX(4.53125rem);\n        }\n        100% {\n            transform: translateX(9.875rem);\n        }\n    } \n\n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    } \n\n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.4375rem);\n        }\n    } \n    @keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.4375rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 1.25rem);\n        }\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 1.25rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n\n\n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n\n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n\n    @-webkit-keyframes move-up--push {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @keyframes move-up--push {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-fast {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @keyframes move-up-fast {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-fast {\n        0% {\n            transform: translateY(0);\n        }\n        50% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(4.6875rem);\n        }\n    } \n\n    @keyframes move-down-fast {\n        0% {\n            transform: translateY(0);\n        }\n        50% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(4.6875rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.53rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.06rem);\n            color: black;\n        }\n    } \n\n    @keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.53rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.06rem);\n            color: black;\n        }\n    } \n}\n/* mobile landscape css  */\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .hide-in-landscape{\n        display: none;\n    }\n\n    .pl-landscape-clone{\n        padding-left: 1.375rem;\n    }\n\n    .font-16-14 {\n        font-size: 14px;\n    }\n\n    .pl-change-status {\n        padding-left: 6rem;\n    }\n\n    .font-change-14-16 {\n        font-size: .875rem;\n    }\n\n    .change-direction-stash {\n        flex-direction: row;\n    }\n\n    .pull-up-in-push {\n        margin-top: -2.81rem;\n    }\n\n    .pt-32-in-portrait {\n        padding-top: 0rem;\n    }\n\n    .pv-change {\n        padding-bottom: .5rem;\n        padding-top: .5rem;\n    }\n    .pull-up-fetch {\n        margin-top: -4.375rem;\n    }\n\n    .pt-change-pull {\n        padding-top: .5rem;\n    }\n    .pt-change-pull-2 {\n        padding-top: 0rem;\n    }\n\n    .margin-in-landscape {\n        margin-top: -1.25rem;\n    }\n\n    .mt-change-pull-0 {\n        margin-top: -.625rem;\n    }\n\n    .mt-change-pull {\n        margin-top: -1.875rem;\n    }\n    .mt-change-pull-2 {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-2-mac {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-2-pc {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-4-mac {\n        margin-top: -1.75rem;\n    }\n    .mt-change-pull-4-pc {\n        margin-top: -1.75rem;\n    }\n\n    .mt-change-pull-5 {\n        margin-top: -1.25rem;\n    }\n    .mt-change-pull-6 {\n        margin-top: -1.25rem;\n    }\n\n    .pb-change-16-32 {\n        padding-bottom: 1rem;\n        margin-top: -.625rem;\n        }\n\n    .padding-landscape-commit-t{\n        padding-top: 2rem;\n    }\n    .padding-landscape-commit-b{\n        padding-bottom: .5rem;\n    }\n    .order-switch-0 {\n        order: 2;\n    }\n\n    .pt-change--clone {\n        padding-top: 1rem;\n    }\n    .pt-change--commit {\n        padding-top: 1rem;\n    }\n    .image-size {\n        width: 9.357rem;\n    }\n\n    .pull-up-image{\n        margin-top: -3.625rem;\n    }\n\n    .image-size--fetch {\n        width: 3.125rem;\n        height: 3.125rem;\n    }\n\n    .flex-direction-change {\n        flex-direction: row;\n    }\n    .pl-change {\n        padding-left: 3.125rem;\n    }\n    \n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    }\n    \n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.44rem);\n        }\n    } \n\n    @keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.44rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-17.94, 1.375rem);\n        }\n\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-17.94, 1.375rem);\n        }\n\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-7.19rem, -.1875rem);\n        }\n    } \n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-7.19rem, -.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n\n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.25rem);\n        }\n    } \n\n\n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.25rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.84rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.69rem);\n            color: black;\n        }\n    } \n\n    @keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.84rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.69rem);\n            color: black;\n        }\n    } \n    @-webkit-keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        100% {\n            transform: translate(9.375rem, .3125rem)\n        }\n    } \n    @keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        100% {\n            transform: translate(9.375rem, .3125rem)\n        }\n    }\n}\n/* mobile portrait css */\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .image-size-icon {\n        width: 1.875rem;\n    }\n    .image-size {\n        width: 6.2rem;\n    }\n\n    .font-16-14 {\n        font-size: 14px;\n    }\n    .font-size-change {\n        font-size: 1.375rem;\n    }\n\n    .pv-change {\n        padding-bottom: 1rem;\n        padding-top: .5rem;\n    }\n    .pl-change {\n        padding-left: 0rem;\n    }\n    .change-direction {\n        flex-direction: column;\n    }\n    .change-direction-stash {\n        flex-direction: column;\n    }\n\n    .height-change {\n        min-height: 6rem\n    }\n\n    .pt-change {\n        padding-top: 1rem;\n    }\n    .pt-change--clone {\n        padding-top: 1rem;\n    }\n    .pt-change--commit {\n        padding-top: 1rem;\n    }\n\n    .pb-change {\n        padding-bottom: 1rem;\n    }\n\n    .bl-change {\n        border-left: .125rem solid #beaf98;\n    }\n\n    .index_commit {\n        padding-top: 1.875rem;\n    }\n\n    .order-switch-0 {\n        order: 0;\n    }\n    .order-switch-2 {\n        order: 2;\n    }\n\n    .order-switch-stash {\n        order: 3;\n    }\n    \n    \n    .flex-direction-change {\n        flex-direction: column;\n    }\n\n    .pl-64 {\n        padding-left: 0rem;\n    }\n\n    .w-350--reset {\n        width: 100%;\n    }\n\n    .min-w-150--reset {\n        min-width: 3.125rem;\n    }\n    .w-40--reset {\n        width: 40%;\n    }\n    .pl-92-except-portrait{\n        padding-left: 0rem;\n    }\n    .bl-stash {\n        border-left: .125rem solid #beaf98;\n    }\n    .font-change-14-16 {\n        font-size: .875rem;\n    }\n    \n\n    .pull-up-in-push-2 {\n        margin-top: 5rem;\n    }\n    \n\n    .pt-32-desktop-push {\n        padding-top: 2rem;\n    }\n    \n\n    .mt-in-portrait {\n        margin-top: -4.6875rem;\n    }\n\n    .mt-in-portrait-2 {\n        margin-top: -2.5rem;\n    }\n\n    .hide-in-portrait {\n        display: none;\n    }\n\n    .pt-32-in-portrait {\n        padding-top: 2rem;\n    }\n\n    \n    .pr-64-except-portrait {\n        padding-right: 0rem;\n    }\n    .h-change-28-48 {\n        height: 3rem;\n    }\n    .pull-up-image{\n        margin-top: -3.75rem;\n    }\n\n    .image-size--fetch {\n        width: 3.125rem;\n        height: 3.125rem;\n    }\n\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateY(0);\n            color: green;\n        }\n        50% {\n            transform: translateU(-3.125rem);\n            color: green;\n        }\n        100% {\n            transform: translateY(-6.5625rem);\n            color: black;\n        }\n    }\n\n    @keyframes moveAndColor {\n        0% {\n            transform: translateY(0);\n            color: green;\n        }\n        50% {\n            transform: translateU(-3.125rem);\n            color: green;\n        }\n        100% {\n            transform: translateY(-6.5625rem);\n            color: black;\n        }\n    } \n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait)  {\n \n    @-webkit-keyframes move-image {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform:  translateX(7.5rem);\n        }\n    }\n \n    @keyframes move-image {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform:  translateX(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes moveToWorkingArea {\n        0% {\n            opacity: 0;\n            transform: translateX(0);\n        }\n        70% {\n            opacity: 0.3;\n            transform: translateX(0rem);\n        }\n        100% {\n            opacity: 1;\n            transform: translateX(-4.68rem);\n        }\n    } \n\n    @keyframes moveToWorkingArea {\n        0% {\n            opacity: 0;\n            transform: translateX(0);\n        }\n        70% {\n            opacity: 0.3;\n            transform: translateX(0rem);\n        }\n        100% {\n            opacity: 1;\n            transform: translateX(-4.68rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.94rem);\n        }\n    } \n\n    @keyframes move-left-from-working {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.94rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13.3125rem);\n        }\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13.3125rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13rem);\n        }\n    } \n\n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-7.19rem);\n        }\n    } \n\n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-7.19rem);\n        }\n    } \n\n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    } \n\n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.0625rem);\n        }\n    } \n\n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.0625rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.125rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.125rem);\n        }\n    } \n\n    @-webkit-keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        50% {\n            transform: translateY(-3.125rem);\n        }\n        100% {\n            transform: translateY(-6.75rem)\n        }\n    } \n\n    @keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        50% {\n            transform: translateY(-3.125rem);\n        }\n        100% {\n            transform: translateY(-6.75rem)\n        }\n    } \n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0RBQW9EO0FBQ3hEO0FBQ0E7O0lBRUkscUJBQXFCLEVBQUUsbUJBQW1CO0lBQzFDLFVBQVUsRUFBRSxtQkFBbUI7SUFDL0IsU0FBUyxFQUFFLG1CQUFtQjtFQUNoQztBQUNBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsOEJBQThCO0VBQ2hDO0FBRUY7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBRUY7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUdBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUdBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLCtCQUErQjtBQUNuQztBQUVBO0lBQ0kseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZ0NBQWdDO0lBQ3BDO0FBQ0o7QUFQQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxnQ0FBZ0M7SUFDcEM7QUFDSjtBQUNBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGlDQUFpQztJQUNyQztBQUNKO0FBUEE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksaUNBQWlDO0lBQ3JDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGdDQUFnQztJQUNwQztBQUNKO0FBVkE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxnQ0FBZ0M7SUFDcEM7QUFDSjtBQUVBO0lBQ0ksd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNENBQW9DO1lBQXBDLG9DQUFvQztJQUNwQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIscUNBQTZCO1lBQTdCLDZCQUE2Qjs7QUFFakM7QUFFQTtJQUNJLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxtREFBMkM7WUFBM0MsMkNBQTJDO0lBQzNDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGlEQUF5QztZQUF6Qyx5Q0FBeUM7SUFDekMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksbURBQTJDO1lBQTNDLDJDQUEyQztJQUMzQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUdBO0lBQ0ksc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFFBQVE7QUFDWjtBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7QUFUQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKO0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDViw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFVBQVU7UUFDViw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjtBQWJBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLCtCQUErQjtJQUNuQztJQUNBO1FBQ0ksVUFBVTtRQUNWLCtCQUErQjtJQUNuQztJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKO0FBYkE7SUFDSTtRQUNJLFVBQVU7UUFDViwrQkFBK0I7SUFDbkM7SUFDQTtRQUNJLFVBQVU7UUFDViwrQkFBK0I7SUFDbkM7SUFDQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjtBQUdBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBUEE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBVkE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksaUNBQWlDO1FBQ3JDO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtJQVZBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGlDQUFpQztRQUNyQztRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksa0NBQWtDO1FBQ3RDO0lBQ0o7O0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksa0NBQWtDO1FBQ3RDO0lBQ0o7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxpQ0FBaUM7UUFDckM7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGlDQUFpQztRQUNyQztJQUNKO0lBQ0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0NBQXdDO1FBQzVDO0lBQ0o7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3Q0FBd0M7UUFDNUM7SUFDSjtJQUNBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHVDQUF1QztRQUMzQztJQUNKO0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksdUNBQXVDO1FBQzNDO0lBQ0o7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw0QkFBNEI7UUFDaEM7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDRCQUE0QjtRQUNoQztJQUNKO0lBQ0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksNEJBQTRCO1FBQ2hDO0lBQ0o7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw0QkFBNEI7UUFDaEM7SUFDSjs7O0lBR0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxpQ0FBaUM7UUFDckM7SUFDSjs7O0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxpQ0FBaUM7UUFDckM7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLCtCQUErQjtRQUNuQztJQUNKOztJQVZBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxpQ0FBaUM7UUFDckM7SUFDSjs7SUFWQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGlDQUFpQztRQUNyQztJQUNKOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGlDQUFpQztRQUNyQztJQUNKOztJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGlDQUFpQztRQUNyQztJQUNKOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksZ0NBQWdDO1FBQ3BDO0lBQ0o7O0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxnQ0FBZ0M7UUFDcEM7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw2QkFBNkI7UUFDakM7SUFDSjs7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw2QkFBNkI7UUFDakM7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwyQkFBMkI7UUFDL0I7SUFDSjs7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwyQkFBMkI7UUFDL0I7SUFDSjtJQUNBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKO0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksNkJBQTZCO1FBQ2pDO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtZQUN4QixZQUFZO1FBQ2hCO1FBQ0E7WUFDSSw4QkFBOEI7WUFDOUIsWUFBWTtRQUNoQjtRQUNBO1lBQ0ksOEJBQThCO1lBQzlCLFlBQVk7UUFDaEI7SUFDSjs7SUFiQTtRQUNJO1lBQ0ksd0JBQXdCO1lBQ3hCLFlBQVk7UUFDaEI7UUFDQTtZQUNJLDhCQUE4QjtZQUM5QixZQUFZO1FBQ2hCO1FBQ0E7WUFDSSw4QkFBOEI7WUFDOUIsWUFBWTtRQUNoQjtJQUNKO0FBQ0o7QUFFQSwwQkFBMEI7QUFFMUI7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCOztJQUVKO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOztJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDJCQUEyQjtRQUMvQjtJQUNKOztJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDJCQUEyQjtRQUMvQjtJQUNKO0lBQ0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksNkJBQTZCO1FBQ2pDO0lBQ0o7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw2QkFBNkI7UUFDakM7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjs7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtJQUNBO1FBQ0k7WUFDSSwwQkFBMEI7UUFDOUI7UUFDQTtZQUNJLHNDQUFzQztRQUMxQzs7SUFFSjtJQVJBO1FBQ0k7WUFDSSwwQkFBMEI7UUFDOUI7UUFDQTtZQUNJLHNDQUFzQztRQUMxQzs7SUFFSjtJQUNBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHVDQUF1QztRQUMzQztJQUNKO0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksdUNBQXVDO1FBQzNDO0lBQ0o7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx5Q0FBeUM7UUFDN0M7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHlDQUF5QztRQUM3QztJQUNKOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLCtCQUErQjtRQUNuQztJQUNKOztJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLCtCQUErQjtRQUNuQztJQUNKO0lBQ0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjs7O0lBR0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjs7O0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLCtCQUErQjtRQUNuQztJQUNKOztJQVZBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtZQUN4QixZQUFZO1FBQ2hCO1FBQ0E7WUFDSSw4QkFBOEI7WUFDOUIsWUFBWTtRQUNoQjtRQUNBO1lBQ0ksOEJBQThCO1lBQzlCLFlBQVk7UUFDaEI7SUFDSjs7SUFiQTtRQUNJO1lBQ0ksd0JBQXdCO1lBQ3hCLFlBQVk7UUFDaEI7UUFDQTtZQUNJLDhCQUE4QjtZQUM5QixZQUFZO1FBQ2hCO1FBQ0E7WUFDSSw4QkFBOEI7WUFDOUIsWUFBWTtRQUNoQjtJQUNKO0lBQ0E7UUFDSTtZQUNJO1FBQ0o7UUFDQTtZQUNJO1FBQ0o7SUFDSjtJQVBBO1FBQ0k7WUFDSTtRQUNKO1FBQ0E7WUFDSTtRQUNKO0lBQ0o7QUFDSjtBQUVBLHdCQUF3QjtBQUN4QjtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG9CQUFvQjtRQUNwQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGtDQUFrQztJQUN0Qzs7SUFFQTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaOzs7SUFHQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtDQUFrQztJQUN0QztJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCOzs7SUFHQTtRQUNJLGdCQUFnQjtJQUNwQjs7O0lBR0E7UUFDSSxpQkFBaUI7SUFDckI7OztJQUdBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7O0lBR0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtZQUN4QixZQUFZO1FBQ2hCO1FBQ0E7WUFDSSxnQ0FBZ0M7WUFDaEMsWUFBWTtRQUNoQjtRQUNBO1lBQ0ksaUNBQWlDO1lBQ2pDLFlBQVk7UUFDaEI7SUFDSjs7SUFiQTtRQUNJO1lBQ0ksd0JBQXdCO1lBQ3hCLFlBQVk7UUFDaEI7UUFDQTtZQUNJLGdDQUFnQztZQUNoQyxZQUFZO1FBQ2hCO1FBQ0E7WUFDSSxpQ0FBaUM7WUFDakMsWUFBWTtRQUNoQjtJQUNKO0FBQ0o7QUFJQzs7SUFFRztRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw4QkFBOEI7UUFDbEM7SUFDSjs7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw4QkFBOEI7UUFDbEM7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksVUFBVTtZQUNWLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksWUFBWTtZQUNaLDJCQUEyQjtRQUMvQjtRQUNBO1lBQ0ksVUFBVTtZQUNWLCtCQUErQjtRQUNuQztJQUNKOztJQWJBO1FBQ0k7WUFDSSxVQUFVO1lBQ1Ysd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxZQUFZO1lBQ1osMkJBQTJCO1FBQy9CO1FBQ0E7WUFDSSxVQUFVO1lBQ1YsK0JBQStCO1FBQ25DO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksNkJBQTZCO1FBQ2pDO0lBQ0o7O0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksNkJBQTZCO1FBQ2pDO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksMkJBQTJCO1FBQy9CO0lBQ0o7O0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksMkJBQTJCO1FBQy9CO0lBQ0o7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw2QkFBNkI7UUFDakM7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKOztJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKO0lBQ0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksaUNBQWlDO1FBQ3JDO0lBQ0o7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxpQ0FBaUM7UUFDckM7SUFDSjtJQUNBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDRCQUE0QjtRQUNoQztJQUNKO0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksNEJBQTRCO1FBQ2hDO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw4QkFBOEI7UUFDbEM7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksaUNBQWlDO1FBQ3JDO0lBQ0o7O0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxpQ0FBaUM7UUFDckM7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGdDQUFnQztRQUNwQztJQUNKOztJQVZBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksZ0NBQWdDO1FBQ3BDO0lBQ0o7O0lBRUE7UUFDSTtZQUNJO1FBQ0o7UUFDQTtZQUNJLGdDQUFnQztRQUNwQztRQUNBO1lBQ0k7UUFDSjtJQUNKOztJQVZBO1FBQ0k7WUFDSTtRQUNKO1FBQ0E7WUFDSSxnQ0FBZ0M7UUFDcEM7UUFDQTtZQUNJO1FBQ0o7SUFDSjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udmlzR2l0QXBwIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuPCEtLXNuYWNrYmFyLS0+XG51bC5jdXN0b20ge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgLyogUmVtb3ZlIGJ1bGxldHMgKi9cbiAgICBwYWRkaW5nOiAwOyAvKiBSZW1vdmUgcGFkZGluZyAqL1xuICAgIG1hcmdpbjogMDsgLyogUmVtb3ZlIG1hcmdpbnMgKi9cbiAgfVxuICB1bCBsaSB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgLmN1c3RvbS1zdHlsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzIxODA3O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH0gIFxuXG4uZm9udC1jaGFuZ2UtMTQtMTYge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmZvbnQtMTYtMTQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnctNDAtLXJlc2V0IHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xufVxuXG4ucGwtY2hhbmdlLXN0YXR1cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2hhbmdlLWRpcmVjdGlvbi1zdGFzaCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBsLTkyLWV4Y2VwdC1wb3J0cmFpdHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuODc1cmVtO1xufVxuXG4ucHItNjQtZXhjZXB0LXBvcnRyYWl0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xufVxuXG4ucHQtMzItaW4tcG9ydHJhaXQge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4uaW1hZ2Utc2l6ZS1pY29uIHtcbiAgICB3aWR0aDogMy4xMjVyZW07XG59XG5cbi5mb250LXNpemUtY2hhbmdlIHtcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xufVxuXG5cbi5wbC1jaGFuZ2Uge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG59XG5cbi5wYi1jaGFuZ2UtMTYtMzIge1xuIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4uaC1jaGFuZ2UtMjgtNDgge1xuICAgIGhlaWdodDogMS43NXJlbTtcbn1cblxuLmZsZXgtZGlyZWN0aW9uLWNoYW5nZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mb250LXNpemUtMTIge1xuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xufVxuXG4ubWF0LWZhYiAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgICBsaW5lLWhlaWdodDogLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pdGFsaWNzIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5mb250LXNpemUtMjQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9udC1zaXplLTMyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb250LXNpemUtNDgge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi5oLTI4IHtcbiAgICBoZWlnaHQ6IDEuMjVyZW07XG59XG5cbi5oLTM4IHtcbiAgICBoZWlnaHQ6IDIuMzc1cmVtO1xufVxuXG4uaC00OCB7XG4gICAgaGVpZ2h0OiAzcmVtO1xufVxuLmgtNTgge1xuICAgIGhlaWdodDogMy42MjVyZW07XG59XG4uaC02OSB7XG4gICAgaGVpZ2h0OiA0LjMxMjVyZW07XG59XG4ubXItMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuMTI1cmVtO1xufVxuLm1yLTQge1xuICAgIG1hcmdpbi1yaWdodDogLjI1cmVtO1xufVxuLm1sLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAuMTI1cmVtO1xufVxuLm1sLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAuMjVyZW07XG59XG4ubWwtNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMzc1cmVtO1xufVxuLm1sLTgge1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbn1cbi5tbC1zd2l0Y2gtLXJlc2V0IHtcbiAgICBtYXJnaW4tbGVmdDogMi42MjVyZW07XG59XG4ubXQtMiB7XG4gICAgbWFyZ2luLXRvcDogLjEyNXJlbTtcbn1cbi5tdC00IHtcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XG59XG4ubXQtOCB7XG4gICAgbWFyZ2luLXRvcDogLjVyZW07XG59XG4ucGItMzYge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjI1cmVtO1xufVxuLnBiLTQ4IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cbi5wbC0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IC4xMjVyZW07XG59XG4ucGwtNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAuMjVyZW07XG59XG4ucGwtOCB7XG4gICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbn1cbi5wbC0xNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuLnBsLTIwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG59XG4ucGwtMjQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuLnBsLTMwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuODc1cmVtO1xufVxuLnBsLTMyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG4ucGwtMzQge1xuICAgIHBhZGRpbmctbGVmdDogMi4xMjVyZW07XG59XG4ucGwtMzYge1xuICAgIHBhZGRpbmctbGVmdDogMi4yNXJlbTtcbn1cbi5wbC00NiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjg3NXJlbTtcbn1cbi5wbC00OCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xufVxuLnBsLTUwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xufVxuLnBsLTEwMCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjI1cmVtO1xufVxuLnBsLTE1MCB7XG4gICAgcGFkZGluZy1sZWZ0OiA5LjM3NXJlbTtcbn1cbi5wbC0yMDAge1xuICAgIHBhZGRpbmctbGVmdDogMTIuNXJlbTtcbn1cbi5wbC0yNTAge1xuICAgIHBhZGRpbmctbGVmdDogMTUuNjI1cmVtO1xufVxuLnBsLTY0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG59XG4ucGwtNjQtLXJlc2V0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG59XG4ucGwtOTIge1xuICAgIHBhZGRpbmctbGVmdDogNS43NXJlbTtcbn1cbi5wbC0xMDkge1xuICAgIHBhZGRpbmctbGVmdDogNi44MTI1cmVtO1xufVxuLnBsLTM1MCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMS44NzVyZW07XG59XG4ucGwtNTAwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMxLjI1cmVtO1xufVxuLnByLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IC4xMjVyZW07XG59XG4ucHItNCB7XG4gICAgcGFkZGluZy1yaWdodDogLjI1cmVtO1xufVxuLnByLTgge1xuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xufVxuLnByLTE2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG4ucHQtOHtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG59XG4ucHQtMTZ7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5wdC0xOHtcbiAgICBwYWRkaW5nLXRvcDogMS4xMjVyZW07XG59XG4ucHQtNDh7XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG59XG5cbi5wdC01MntcbiAgICBwYWRkaW5nLXRvcDogMy4yNXJlbTtcbn1cblxuLnB0LTY0e1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xufVxuLnB0LTcye1xuICAgIHBhZGRpbmctdG9wOiA0LjVyZW07XG59XG4ucHQtNzZ7XG4gICAgcGFkZGluZy10b3A6IDQuNzVyZW07XG59XG5cbi5yZWd1bGFyLCAubm9ybWFsIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7O1xufVxuLmJhY2tncm91bmQtYmVpZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWFmOTg7XG59XG5cbi5kb3Qge1xuICAgIGhlaWdodDogMS41NjI1cmVtO1xuICAgIHdpZHRoOiAxLjU2MjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4ucmVkIHtcbiAgICBjb2xvcjogI0NENUM1Qztcbn1cblxuLmJsYWNrIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uaW5kaWFuUmVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlhblJlZDtcbn1cblxuLnNlYUdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XG59XG4ubGlnaHRDb3JhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbn1cbi5tZWRpdW1QdXJwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXB1cnBsZTtcbn1cblxuLmJhY2tncm91bmQtcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0Q1QzVDO1xufVxuLmJhY2tncm91bmQtZ3JheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JFQkVCRTtcbn1cbi5iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuLmdvbGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG59XG5cblxuLndoaXRlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udy0xMDAge1xuICAgIHdpZHRoOiA2LjI1cmVtO1xuICAgIG1pbi13aWR0aDogNi4yNXJlbTtcbn1cblxuLm1pbi13LTE1MCB7XG4gICAgbWluLXdpZHRoOiA5LjM3NXJlbTtcbn1cbi5taW4tdy0xNTAtLXJlc2V0IHtcbiAgICBtaW4td2lkdGg6IDkuMzc1cmVtO1xufVxuLm1pbi13LTI1MCB7XG4gICAgbWluLXdpZHRoOiAxNS42MjVyZW07XG59XG4ubWluLXctMzUwIHtcbiAgICBtaW4td2lkdGg6IDIxLjg3NXJlbTtcbn1cblxuLm1heC13LTQ1MCB7XG4gICAgbWF4LXdpZHRoOiAyOC4xMjVyZW07XG59XG4ubWF4LXctNjAwIHtcbiAgICBtYXgtd2lkdGg6IDM3LjVyZW07XG59XG4udy0xNTAge1xuICAgIHdpZHRoOiA5LjM3NXJlbTtcbn1cbi53LTI1MCB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbn1cblxuLnctMzAwIHtcbiAgICB3aWR0aDogMTguNzVyZW07XG59XG5cbi53LTM1MCB7XG4gICAgd2lkdGg6IDIxLjg3NXJlbTtcbn1cbi53LTM1MC0tcmVzZXQge1xuICAgIHdpZHRoOiAyMS44NzVyZW07XG59XG5cbi53LTQ1MCB7XG4gICAgd2lkdGg6IDI4LjEyNXJlbTtcbn1cblxuLnctNTAwIHtcbiAgICB3aWR0aDogMzEuMjVyZW07XG59XG5cbi53LTYwMCB7XG4gICAgd2lkdGg6IDM3LjVyZW07XG59XG5cbi5oLTIwMCB7XG4gICAgaGVpZ2h0OiAxMi41cmVtO1xufVxuXG4udGV4dC1hbGlnbiwgLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYmx1ZSB7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbi5raGFraSB7XG4gICAgY29sb3I6IGRhcmtncmVlbjtcbn1cblxuLmRhcmtibHVlIHtcbiAgICBjb2xvcjogZGFya2JsdWU7XG59XG5cbi5saW1lZ3JlZW4ge1xuICAgIGNvbG9yOiAjMzJDRDMyO1xufVxuXG4uZGFya3JlZCB7XG4gICAgY29sb3I6IGRhcmtyZWQ7XG59XG5cbi5ici1iZWlnZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAuMTI1cmVtIHNvbGlkICNiZWFmOTg7XG59XG4uYmwtYmVpZ2Uge1xuICAgIGJvcmRlci1sZWZ0OiAuMTI1cmVtIHNvbGlkICNiZWFmOTg7XG59XG4uYnQtYmVpZ2Uge1xuICAgIGJvcmRlci10b3A6IC4xMjVyZW0gc29saWQgI2JlYWY5ODtcbn1cbi5iYi1iZWlnZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogLjEyNXJlbSBzb2xpZCAjYmVhZjk4O1xufVxuXG4ucmVjdGFuZ2xlIHtcbiAgICB3aWR0aDogMjVyZW07XG4gICAgaGVpZ2h0OiAuNjI1cmVtO1xufVxuLmZsZXgsIC5zaG93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mbG9hdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLnB1bGwtdXB7XG4gICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG59XG5cblxuLnB1bGwtbGVmdHtcbiAgICBtYXJnaW4tbGVmdDogLTcuNXJlbTtcbn1cbi5wdWxsLWxlZnQtcHVsbHtcbiAgICBtYXJnaW4tbGVmdDogLTcuNXJlbTtcbn1cblxuLnB1bGwtbGVmdC0yNHtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubW92ZUFuZENvbG9yIHtcbiAgICBhbmltYXRpb246IG1vdmVBbmRDb2xvciAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZS1pbWFnZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMuMTI1cmVtKTtcbiAgICB9XG59IFxuQGtleWZyYW1lcyBtb3ZlLXVwLWZhc3Qge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjE4NzVyZW0pO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgbW92ZS1kb3duLWZhc3Qge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNC42ODc1cmVtKTtcbiAgICB9XG59IFxuXG4uc2hvdy1mYWRlSW57XG4gICAgYW5pbWF0aW9uOiBzaG93LWZhZGVJbiAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5zaG93LXNsb3ctZmFkZUlue1xuICAgIGFuaW1hdGlvbjogc2hvdy1zbG93LWZhZGVJbiAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5jb21taXQtZmFkZUluLTEge1xuICAgIGFuaW1hdGlvbjogY29tbWl0LWZhZGVJbi0xIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5jb21taXQtZmFkZUluLTIge1xuICAgIGFuaW1hdGlvbjogY29tbWl0LWZhZGVJbi0yIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmNvbW1pdC1mYWRlSW4tMyB7XG4gICAgYW5pbWF0aW9uOiBjb21taXQtZmFkZUluLTMgM3MgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZXtcbiAgICBhbmltYXRpb246IG1vdmUgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuXG59XG5cbi5tb3ZlLWltYWdlIHtcbiAgICBhbmltYXRpb246IG1vdmUtaW1hZ2UgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLm1vdmUtbGVmdCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWxlZnQgLjc1cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWxlZnQtZnJvbS13b3JraW5nIHtcbiAgICBhbmltYXRpb246IG1vdmUtbGVmdC1mcm9tLXdvcmtpbmcgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1sZWZ0LWZyb20taW5kZXgge1xuICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LWZyb20taW5kZXggMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLm1vdmUtbGVmdC1mcm9tLWluZGV4LTIge1xuICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LWZyb20taW5kZXgtMiAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXJpZ2h0IHtcbiAgICBhbmltYXRpb246IG1vdmUtcmlnaHQgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1yaWdodC1wdWxsIHtcbiAgICBhbmltYXRpb246IG1vdmUtcmlnaHQtcHVsbCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cblxuLm1vdmUtdXAge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cCAxLjNzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtdXAtcHVsbCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXVwLXB1bGwgMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwLS1wdXNoIHtcbiAgICBhbmltYXRpb246IG1vdmUtdXAtLXB1c2ggMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwLWZhc3Qge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cC1mYXN0IC41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWRvd24tZmFzdCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWRvd24tZmFzdCAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWRvd24tb25lIHtcbiAgICBhbmltYXRpb246IG1vdmUtZG93bi1vbmUgLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtZG93bi10d28ge1xuICAgIGFuaW1hdGlvbjogbW92ZS1kb3duLXR3byAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1kb3duLXRocmVlIHtcbiAgICBhbmltYXRpb246IG1vdmUtZG93bi10aHJlZSAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMS44NzVyZW0gMS44NzVyZW0gMCAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgICBwYWRkaW5nOiAuOTM3NXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIG1hcmdpbi1ib3R0b206IC4xMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hbGlnbi1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWxpZ24tbGVmdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uYWxpZ24tcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLmp1c3RpZnktY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpcmVjdGlvbi1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wYi04IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG59XG4ucGItMTYge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLnBiLTI0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xufVxuXG4ucGItMjgge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjc1cmVtO1xufVxuLnBiLTMyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLnBiLTQyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi42MjVyZW07XG59XG4ucHQtMzIge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4ucHQtNTQge1xuICAgIHBhZGRpbmctdG9wOiAzLjM3NXJlbTtcbn1cblxuLnB0LTY0IHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cblxuLnB0LTEwMCB7XG4gICAgcGFkZGluZy10b3A6IDYuMjVyZW07XG59XG5cbi5wdC00IHtcbiAgICBwYWRkaW5nLXRvcDogLjI1cmVtO1xufVxuXG4ucHItOHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbn1cbi5wci0xNiB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLnByLTI0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG59XG4ucHItMzIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG59XG5cbi5wci00OCB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbn1cbi5wci02NCB7XG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcbn1cbi53LXF1YXJ0ZXIge1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi53LWhhbGYge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi53LWZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub3JkZXItMSB7XG4gICAgb3JkZXI6IDE7XG59XG5cbkBrZXlmcmFtZXMgY29tbWl0LWZhZGVJbi0xIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4Ljc1cmVtKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIGNvbW1pdC1mYWRlSW4tMiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTByZW0pO1xuICAgIH1cbiAgICAzMiUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTByZW0pO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgY29tbWl0LWZhZGVJbi0zIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMS4yNXJlbSk7XG4gICAgfVxuICAgIDQyJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMS4yNXJlbSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufSBcblxuXG5Aa2V5ZnJhbWVzIHNob3ctZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn0gXG5Aa2V5ZnJhbWVzIHNob3ctc2xvdy1mYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufSBcblxuLyogZGVza3RvcCBvbmx5IGNzcyAgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDYwcmVtKSB7XG4gICAgLmZvbnQtc2l6ZS1jaGFuZ2Uge1xuICAgICAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgfVxuICAgIC5mbGV4LWRpcmVjdGlvbi1jaGFuZ2Uge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgICAucHVsbC11cC1pbWFnZXtcbiAgICAgICAgbWFyZ2luLXRvcDogLTExLjEyNXJlbTtcbiAgICB9XG4gICAgLnB2LWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLmltYWdlLXNpemUtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAzLjEyNXJlbTtcbiAgICB9XG4gICAgLmltYWdlLXNpemUge1xuICAgICAgICB3aWR0aDogOS4zNTdyZW07XG4gICAgfVxuXG4gICAgLmltYWdlLXNpemUtLWZldGNoIHtcbiAgICAgICAgd2lkdGg6IDkuMzU3cmVtO1xuICAgIH1cbiAgICAucHQtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNsb25lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbiAgICAucGItY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgLmluZGV4X2NvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzLjI1cmVtO1xuICAgIH1cbiAgICAub3JkZXItc3dpdGNoLTAge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLTIge1xuICAgICAgICBvcmRlcjogMDtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLXN0YXNoIHtcbiAgICAgICAgb3JkZXI6IC0xO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIG1vdmUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0LjUzMTI1cmVtKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5Ljg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEzLjQzNzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLXdvcmtpbmcge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTguNDM3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20taW5kZXgge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTcuOTRyZW0sIDEuMjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4LTIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTcuOTRyZW0sIDIuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cblxuICAgIEBrZXlmcmFtZXMgbW92ZS11cCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjE4NzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS11cC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS11cC0tcHVzaCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjE4NzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS11cC1mYXN0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjE4NzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLWZhc3Qge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0LjY4NzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLW9uZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXR3byB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdGhyZWUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmVBbmRDb2xvciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQuNTNyZW0pO1xuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkuMDZyZW0pO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuLyogbW9iaWxlIGxhbmRzY2FwZSBjc3MgICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpICB7XG4gICAgLmhpZGUtaW4tbGFuZHNjYXBle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5wbC1sYW5kc2NhcGUtY2xvbmV7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMS4zNzVyZW07XG4gICAgfVxuXG4gICAgLmZvbnQtMTYtMTQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnBsLWNoYW5nZS1zdGF0dXMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XG4gICAgfVxuXG4gICAgLmZvbnQtY2hhbmdlLTE0LTE2IHtcbiAgICAgICAgZm9udC1zaXplOiAuODc1cmVtO1xuICAgIH1cblxuICAgIC5jaGFuZ2UtZGlyZWN0aW9uLXN0YXNoIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG5cbiAgICAucHVsbC11cC1pbi1wdXNoIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIuODFyZW07XG4gICAgfVxuXG4gICAgLnB0LTMyLWluLXBvcnRyYWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XG4gICAgfVxuXG4gICAgLnB2LWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIH1cbiAgICAucHVsbC11cC1mZXRjaCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC00LjM3NXJlbTtcbiAgICB9XG5cbiAgICAucHQtY2hhbmdlLXB1bGwge1xuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtcHVsbC0yIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDByZW07XG4gICAgfVxuXG4gICAgLm1hcmdpbi1pbi1sYW5kc2NhcGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMS4yNXJlbTtcbiAgICB9XG5cbiAgICAubXQtY2hhbmdlLXB1bGwtMCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNjI1cmVtO1xuICAgIH1cblxuICAgIC5tdC1jaGFuZ2UtcHVsbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjg3NXJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdWxsLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtMi1tYWMge1xuICAgICAgICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtMi1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC4xMjVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC00LW1hYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjc1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtNC1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjc1cmVtO1xuICAgIH1cblxuICAgIC5tdC1jaGFuZ2UtcHVsbC01IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC02IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gICAgfVxuXG4gICAgLnBiLWNoYW5nZS0xNi0zMiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAtLjYyNXJlbTtcbiAgICAgICAgfVxuXG4gICAgLnBhZGRpbmctbGFuZHNjYXBlLWNvbW1pdC10e1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLnBhZGRpbmctbGFuZHNjYXBlLWNvbW1pdC1ie1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgfVxuICAgIC5vcmRlci1zd2l0Y2gtMCB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cblxuICAgIC5wdC1jaGFuZ2UtLWNsb25lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZSB7XG4gICAgICAgIHdpZHRoOiA5LjM1N3JlbTtcbiAgICB9XG5cbiAgICAucHVsbC11cC1pbWFnZXtcbiAgICAgICAgbWFyZ2luLXRvcDogLTMuNjI1cmVtO1xuICAgIH1cblxuICAgIC5pbWFnZS1zaXplLS1mZXRjaCB7XG4gICAgICAgIHdpZHRoOiAzLjEyNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgICB9XG5cbiAgICAuZmxleC1kaXJlY3Rpb24tY2hhbmdlIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG4gICAgLnBsLWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG4gICAgfVxuICAgIFxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLW9uZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXR3byB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdGhyZWUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLXdvcmtpbmcge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTguNDRyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTcuOTQsIDEuMzc1cmVtKTtcbiAgICAgICAgfVxuXG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4LTIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTcuOTRyZW0sIDIuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcuMTlyZW0sIC0uMTg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUuNjI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNS42MjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS11cC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS44NzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZUFuZENvbG9yIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNC44NHJlbSk7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOS42OXJlbSk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOS4zNzVyZW0sIC4zMTI1cmVtKVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiBtb2JpbGUgcG9ydHJhaXQgY3NzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIHtcbiAgICAuaW1hZ2Utc2l6ZS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDEuODc1cmVtO1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZSB7XG4gICAgICAgIHdpZHRoOiA2LjJyZW07XG4gICAgfVxuXG4gICAgLmZvbnQtMTYtMTQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5mb250LXNpemUtY2hhbmdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgICB9XG5cbiAgICAucHYtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICB9XG4gICAgLnBsLWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICB9XG4gICAgLmNoYW5nZS1kaXJlY3Rpb24ge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuY2hhbmdlLWRpcmVjdGlvbi1zdGFzaCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmhlaWdodC1jaGFuZ2Uge1xuICAgICAgICBtaW4taGVpZ2h0OiA2cmVtXG4gICAgfVxuXG4gICAgLnB0LWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIH1cbiAgICAucHQtY2hhbmdlLS1jbG9uZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIH1cbiAgICAucHQtY2hhbmdlLS1jb21taXQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICB9XG5cbiAgICAucGItY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgLmJsLWNoYW5nZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAuMTI1cmVtIHNvbGlkICNiZWFmOTg7XG4gICAgfVxuXG4gICAgLmluZGV4X2NvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjg3NXJlbTtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLTAge1xuICAgICAgICBvcmRlcjogMDtcbiAgICB9XG4gICAgLm9yZGVyLXN3aXRjaC0yIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgfVxuXG4gICAgLm9yZGVyLXN3aXRjaC1zdGFzaCB7XG4gICAgICAgIG9yZGVyOiAzO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuZmxleC1kaXJlY3Rpb24tY2hhbmdlIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAucGwtNjQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuXG4gICAgLnctMzUwLS1yZXNldCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5taW4tdy0xNTAtLXJlc2V0IHtcbiAgICAgICAgbWluLXdpZHRoOiAzLjEyNXJlbTtcbiAgICB9XG4gICAgLnctNDAtLXJlc2V0IHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gICAgLnBsLTkyLWV4Y2VwdC1wb3J0cmFpdHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgIH1cbiAgICAuYmwtc3Rhc2gge1xuICAgICAgICBib3JkZXItbGVmdDogLjEyNXJlbSBzb2xpZCAjYmVhZjk4O1xuICAgIH1cbiAgICAuZm9udC1jaGFuZ2UtMTQtMTYge1xuICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgfVxuICAgIFxuXG4gICAgLnB1bGwtdXAtaW4tcHVzaC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICB9XG4gICAgXG5cbiAgICAucHQtMzItZGVza3RvcC1wdXNoIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIFxuXG4gICAgLm10LWluLXBvcnRyYWl0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTQuNjg3NXJlbTtcbiAgICB9XG5cbiAgICAubXQtaW4tcG9ydHJhaXQtMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yLjVyZW07XG4gICAgfVxuXG4gICAgLmhpZGUtaW4tcG9ydHJhaXQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5wdC0zMi1pbi1wb3J0cmFpdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cblxuICAgIFxuICAgIC5wci02NC1leGNlcHQtcG9ydHJhaXQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xuICAgIH1cbiAgICAuaC1jaGFuZ2UtMjgtNDgge1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgfVxuICAgIC5wdWxsLXVwLWltYWdle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMy43NXJlbTtcbiAgICB9XG5cbiAgICAuaW1hZ2Utc2l6ZS0tZmV0Y2gge1xuICAgICAgICB3aWR0aDogMy4xMjVyZW07XG4gICAgICAgIGhlaWdodDogMy4xMjVyZW07XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBtb3ZlQW5kQ29sb3Ige1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlVSgtMy4xMjVyZW0pO1xuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02LjU2MjVyZW0pO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuXG5cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpICB7XG4gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWltYWdlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCg3LjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZVRvV29ya2luZ0FyZWEge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00LjY4cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi1vbmUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi10d28ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXRocmVlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS13b3JraW5nIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcuOTRyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEzLjMxMjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4LTIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTNyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03LjE5cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNS42MjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtcHVsbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMS4ycmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi4wNjI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVsbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjEyNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMy4xMjVyZW0pO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02Ljc1cmVtKVxuICAgICAgICB9XG4gICAgfSBcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"visGitApp flex direction-column align-center\"> \n  <div class=\"flex align-center justify-center pl-8 pv-change\">\n    <img class=\"image-size-icon\" alt=\"Visual Git Logo\" src=\"favicon.ico\"/>\n    <div class=\"font-size-change bold pl-16\">Visualize Git</div>\n  </div>\n  <mat-form-field class=\"w-250 pt-32\" appearance=\"fill\">\n    <mat-label float=\"never\">Choose a git command</mat-label>\n    <mat-select (selectionChange)=\"selectCommand($event.value)\">\n      <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n      >{{command.name}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  \n  <visualize-add  @fade *ngIf=\"chosenCommand === 'add'\" class=\"flex w-full justify-center change-direction\"></visualize-add>\n  <visualize-branch @fade *ngIf=\"chosenCommand === 'branch'\" class=\"flex w-full justify-center change-direction\"></visualize-branch>\n  <visualize-checkout @fade *ngIf=\"chosenCommand === 'checkout'\" class=\"flex w-full justify-center change-direction\"></visualize-checkout>\n  <visualize-clone @fade *ngIf=\"chosenCommand === 'clone'\" class=\"flex w-full justify-center change-direction\"></visualize-clone>\n  <visualize-commit @fade *ngIf=\"chosenCommand === 'commit'\" class=\"flex w-full justify-center change-direction\"></visualize-commit>\n  <visualize-git-fetch @fade *ngIf=\"chosenCommand === 'fetch'\" class=\"flex w-full justify-center change-direction\"></visualize-git-fetch>\n  <visualize-init @fade *ngIf=\"chosenCommand === 'init'\" class=\"flex w-full justify-center change-direction\"></visualize-init>\n  <visualize-log @fade *ngIf=\"chosenCommand === 'log'\" class=\"flex w-full justify-center change-direction\"></visualize-log>\n  <visualize-merge @fade *ngIf=\"chosenCommand === 'merge'\" class=\"flex w-full justify-center change-direction\"></visualize-merge>\n <visualize-git-pull  *ngIf=\"chosenCommand === 'pull'\"class=\"flex w-full justify-center change-direction\" ></visualize-git-pull>\n  <visualize-git-push @fade *ngIf=\"chosenCommand === 'push'\" class=\"flex w-full justify-center change-direction\"></visualize-git-push>\n  <visualize-git-reset @fade *ngIf=\"chosenCommand === 'reset'\" class=\"flex w-full justify-center change-direction\"></visualize-git-reset>\n  <visualize-stash @fade *ngIf=\"chosenCommand === 'stash'\" class=\"flex w-full justify-center change-direction\"></visualize-stash>\n  <visualize-status @fade *ngIf=\"chosenCommand === 'status'\" class=\"flex w-full justify-center change-direction\"></visualize-status>\n\n</section>\n"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ "./src/app/shared.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(sharedService) {
        this.sharedService = sharedService;
        this.state = 'small';
        this.title = 'visualize-git';
        this.commands = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.sharedService.notificationsOn = true;
        // navigator.userAgent.includes('Mac') ? this.sharedService.isMac = true : this.sharedService.isMac = false;
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
        this.chosenCommand = '';
    };
    AppComponent.prototype.selectCommand = function (command) {
        this.chosenCommand = command;
    };
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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _commit_commit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./commit/commit.component */ "./src/app/commit/commit.component.ts");
/* harmony import */ var _init_init_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./init/init.component */ "./src/app/init/init.component.ts");
/* harmony import */ var _clone_clone_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clone/clone.component */ "./src/app/clone/clone.component.ts");
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./log/log.component */ "./src/app/log/log.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/branch/branch.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _stash_stash_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stash/stash.component */ "./src/app/stash/stash.component.ts");
/* harmony import */ var _merge_merge_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./merge/merge.component */ "./src/app/merge/merge.component.ts");
/* harmony import */ var _git_pull_git_pull_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./git-pull/git-pull.component */ "./src/app/git-pull/git-pull.component.ts");
/* harmony import */ var _git_push_git_push_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./git-push/git-push.component */ "./src/app/git-push/git-push.component.ts");
/* harmony import */ var _git_fetch_git_fetch_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./git-fetch/git-fetch.component */ "./src/app/git-fetch/git-fetch.component.ts");
/* harmony import */ var _git_reset_git_reset_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./git-reset/git-reset.component */ "./src/app/git-reset/git-reset.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"],
                _commit_commit_component__WEBPACK_IMPORTED_MODULE_10__["CommitComponent"],
                _init_init_component__WEBPACK_IMPORTED_MODULE_11__["InitComponent"],
                _clone_clone_component__WEBPACK_IMPORTED_MODULE_12__["CloneComponent"],
                _log_log_component__WEBPACK_IMPORTED_MODULE_13__["LogComponent"],
                _branch_branch_component__WEBPACK_IMPORTED_MODULE_14__["BranchComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_15__["StatusComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"],
                _stash_stash_component__WEBPACK_IMPORTED_MODULE_17__["StashComponent"],
                _merge_merge_component__WEBPACK_IMPORTED_MODULE_18__["MergeComponent"],
                _git_pull_git_pull_component__WEBPACK_IMPORTED_MODULE_19__["GitPullComponent"],
                _git_push_git_push_component__WEBPACK_IMPORTED_MODULE_20__["GitPushComponent"],
                _git_fetch_git_fetch_component__WEBPACK_IMPORTED_MODULE_21__["GitFetchComponent"],
                _git_reset_git_reset_component__WEBPACK_IMPORTED_MODULE_22__["GitResetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/branch/branch.component.css":
/*!*********************************************!*\
  !*** ./src/app/branch/branch.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.pchange-branch {\n    padding-top: .5rem;\n    padding-bottom: 1rem;\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .pchange-branch {\n        padding-top: .5rem;\n        padding-bottom: 1rem;\n        text-align: center;\n    }\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pchange-branch {\n        align-items: center;\n        padding-top: 8px;\n        padding-bottom: 32px;\n        text-align: center;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhbmNoL2JyYW5jaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2JyYW5jaC9icmFuY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ucGNoYW5nZS1icmFuY2gge1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgIHtcbiAgICAucGNoYW5nZS1icmFuY2gge1xuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIHtcbiAgICAucGNoYW5nZS1icmFuY2gge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/branch/branch.component.html":
/*!**********************************************!*\
  !*** ./src/app/branch/branch.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue align-center pchange-branch h-28 pl-16 pr-16\" >\n    <div *ngIf=\"!hideMessage\" [@myTrigger]=\"fadeIn\">\"git branch\" lists the branches. The asterisk (*) indicates the current branch.</div>  \n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeBranch()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git branch\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n\n  <section class= \"flex direction-column pt-16 w-quarter align-left\" >\n    <div [ngClass]=\"{'green': i == '1'}\" class=\"pl-change pt-8 pb-8\" *ngFor=\"let branch of branches; let i = index\" [@myTrigger]=\"fadeIn\">{{branch}}</div>\n  </section>\n</div>\n\n"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var BranchComponent = /** @class */ (function () {
    function BranchComponent(sharedService) {
        this.sharedService = sharedService;
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
            _this.sharedService.showSnackbar();
        }, 3000);
    };
    BranchComponent.prototype.reset = function () {
        window.location.reload();
    };
    BranchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-branch',
            template: __webpack_require__(/*! ./branch.component.html */ "./src/app/branch/branch.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./branch.component.css */ "./src/app/branch/branch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], BranchComponent);
    return BranchComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.mt-up {\n    margin-top: -10px;\n}\n\n.h-25 {\n    height: 25px;\n}\n\n.h-27 {\n    height: 27px;\n}\n\n.border-red {\n    border: 1px solid red;\n}\n\n.pt-14 {\n    padding-top: 14px;\n}\n\n.pl-20 {\n    padding-left: 20px;\n}\n\n.pl-28 {\n    padding-left: 28px;\n}\n\n.image-size-arrow {\n    width: 10px;\n    height: 10px;\n}\n\n.opacity-zero {\n    color: white;\n}\n\n.fade-out-arrow {\n    -webkit-animation: fade-out-arrow .5s linear;\n            animation: fade-out-arrow .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-out-arrow-2 {\n    -webkit-animation: fade-out-arrow-2 1s linear;\n            animation: fade-out-arrow-2 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-in-arrow {\n    -webkit-animation: fade-in-arrow 4s linear;\n            animation: fade-in-arrow 4s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-in-arrow-2 {\n    -webkit-animation: fade-in-arrow-2 1.5s linear;\n            animation: fade-in-arrow-2 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-in-version{\n    -webkit-animation: fade-in-version 2s linear;\n            animation: fade-in-version 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes fade-out-arrow {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes fade-out-arrow {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@-webkit-keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@-webkit-keyframes fade-in-arrow {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n\n@keyframes fade-in-arrow {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n\n@-webkit-keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n\n@keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n} \n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBSUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtBQUNKOztBQVRBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjs7QUFkQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLm10LXVwIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmgtMjUge1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLmgtMjcge1xuICAgIGhlaWdodDogMjdweDtcbn1cblxuLmJvcmRlci1yZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLnB0LTE0IHtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbn1cblxuLnBsLTIwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5wbC0yOCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xufVxuXG4uaW1hZ2Utc2l6ZS1hcnJvdyB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xufVxuXG4ub3BhY2l0eS16ZXJvIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYWRlLW91dC1hcnJvdyB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dC1hcnJvdyAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uZmFkZS1vdXQtYXJyb3ctMiB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dC1hcnJvdy0yIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmZhZGUtaW4tYXJyb3cge1xuICAgIGFuaW1hdGlvbjogZmFkZS1pbi1hcnJvdyA0cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5mYWRlLWluLWFycm93LTIge1xuICAgIGFuaW1hdGlvbjogZmFkZS1pbi1hcnJvdy0yIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLmZhZGUtaW4tdmVyc2lvbntcbiAgICBhbmltYXRpb246IGZhZGUtaW4tdmVyc2lvbiAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cblxuXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0LWFycm93IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQtYXJyb3ctMiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59IFxuQGtleWZyYW1lcyBmYWRlLWluLWFycm93IHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tYXJyb3ctMiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbn0gXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue h-change-28-48 align-center\">\n    <div *ngIf=\"hideMessage2 && hideMessage3\">Example: The HEAD points to the branch \"main\"</div>\n    <div *ngIf=\"!hideMessage2 && !hideMessage\">The HEAD points to the branch \"bug/25282\"</div>\n    <div class=\"pl-32 pr-32 text-center\" *ngIf=\"!hideMessage3 && !hideMessage\">A new branch is created (a copy of\n      \"main\") and the HEAD points to it.</div>\n  </div>\n  <div class=\"flex pt-16\">\n    <div class=\"pr-8\"></div>\n    <mat-form-field class=\"w-full stash-field\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose an option</mat-label>\n      <mat-select [disabled]=\"disableOption\" (selectionChange)=\"selectCommand($event.value)\">\n        <mat-option *ngFor=\"let command of commands\" [value]=\"command.name\">{{command.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <section class=\"flex flex-direction-change align-center\">\n    <button *ngIf=\"chosenCommand === 'checkout an existing branch'\" [disabled]=\"!hideMessage\"\n      (click)=\"visualizeCheckout()\" class=\"w-300\" mat-raised-button color=\"warn\">Visualize \"git checkout\n      bug/25282\"</button>\n    <div class=\"pr-8 pb-8\"></div>\n    <button *ngIf=\"chosenCommand === 'create and checkout a new branch'\" [disabled]=\"!hideMessage\"\n      (click)=\"visualizeCheckoutNew()\" class=\"w-300\" mat-raised-button color=\"warn\">Visualize \"git checkout -b\n      version_2.0\"</button>\n    <div class=\"pr-8 pb-8\"></div>\n  </section>\n\n\n  <div class=\"flex direction-column\">\n    <div class=\"flex pr-2 pt-32 h-25 align-center\">\n        <div class=\"pr-4\" [ngClass]=\"{'hide': hideMessage2, 'fade-in-arrow-2': !hideMessage2}\">\n          <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n        </div>\n      <div class=\"pr-8\" [ngClass]=\"{'pl-28': hideMessage2}\">bug/25282</div>\n    </div>\n    <div class=\"flex h-25 align-center\">\n      <div class=\"pr-4\" [ngClass]=\"{ 'fade-out-arrow ': !hideMessage2, 'fade-out-arrow-2': !hideMessage3}\">\n        <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n      </div>\n      <div class=\"pr-8\">main</div>\n    </div>\n    <div class=\"flex pr-2 pl-20 h-27 align-center justify-center\">\n      <div class=\"pr-8\">pbi/25391</div>\n    </div>\n    <div class=\"flex pr-2 h-25 align-center justify-center\">\n      <div class=\"pr-4\" [ngClass]=\"{'hide': hideMessage3, 'fade-in-arrow-2': !hideMessage3}\">\n        <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n      </div>\n      <div class=\"pr-8\" [ngClass]=\"{'hide': hideMessage3, 'fade-in-version': !hideMessage3 }\">version_2.0</div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(sharedService) {
        this.sharedService = sharedService;
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
        var bugDiv = document.getElementById('bug');
        var arrowDiv = document.getElementById('arrow');
        this.hideMessage2 = false;
        this.hideMessage = false;
        this.disableOption = true;
        setTimeout(function () {
            _this.hideMessage = false;
        }, 1000);
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 3300);
    };
    CheckoutComponent.prototype.visualizeCheckoutNew = function () {
        var _this = this;
        this.hideMessage3 = false;
        this.hideMessage = false;
        this.disableOption = true;
        setTimeout(function () {
            _this.hideMessage = false;
        }, 2000);
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 3500);
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/clone/clone.component.css":
/*!*******************************************!*\
  !*** ./src/app/clone/clone.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-size--clone {\n    width: 128px;\n}\n\n.pull-up-image--clone {\n    margin-top: -9.5rem;\n}\n\n.pt-change--clone {\n    padding-top: 16px;\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .image-size--clone {\n        width: 3.125rem;\n        height: 5.125rem;\n    }\n    .pull-up-image--clone {\n        margin-top: -4.9rem;\n    }\n    \n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .image-size--clone {\n        width: 3.125rem;\n        height: 5.125rem;\n    }\n    .pull-up-image--clone {\n        margin-top: -5.1rem;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvbmUvY2xvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBR0E7SUFDSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2Qjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jbG9uZS9jbG9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLXNpemUtLWNsb25lIHtcbiAgICB3aWR0aDogMTI4cHg7XG59XG5cbi5wdWxsLXVwLWltYWdlLS1jbG9uZSB7XG4gICAgbWFyZ2luLXRvcDogLTkuNXJlbTtcbn1cblxuLnB0LWNoYW5nZS0tY2xvbmUge1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpICB7XG4gICAgLmltYWdlLXNpemUtLWNsb25lIHtcbiAgICAgICAgd2lkdGg6IDMuMTI1cmVtO1xuICAgICAgICBoZWlnaHQ6IDUuMTI1cmVtO1xuICAgIH1cbiAgICAucHVsbC11cC1pbWFnZS0tY2xvbmUge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNC45cmVtO1xuICAgIH1cbiAgICBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XG4gICAgLmltYWdlLXNpemUtLWNsb25lIHtcbiAgICAgICAgd2lkdGg6IDMuMTI1cmVtO1xuICAgICAgICBoZWlnaHQ6IDUuMTI1cmVtO1xuICAgIH1cbiAgICAucHVsbC11cC1pbWFnZS0tY2xvbmUge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNS4xcmVtO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/clone/clone.component.html":
/*!********************************************!*\
  !*** ./src/app/clone/clone.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-change-28-48\">\n      <span [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">The git repo is cloned on the user's computer</span>\n    </div>\n    <div class=\"flex flex-direction-change align-center\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeClone()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git clone url\"</button>\n      <div class=\"pr-8 pb-8\"></div>\n    </div>\n  </div>\n <div class=\"flex pt-change--clone justify-center\"> \n    <section class=\"flex direction-column text-center align-center\"> \n      <div class=\"pb-8 font-change-14-16\">Repository at url <br>(example: GitHub repo) </div>\n      <img  class=\"image-size--clone\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      <img  class=\"image-size--clone pull-up-image--clone\" [ngClass]=\"{'hide': hideMessage, 'show, move-image': !hideMessage}\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n    </section>\n    <section class=\"pl-64\">\n      <div class=\"font-change-14-16 pl-landscape-clone\">User's Computer</div>\n    </section>\n  </div>\n</div>\n"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var CloneComponent = /** @class */ (function () {
    function CloneComponent(sharedService) {
        this.sharedService = sharedService;
    }
    CloneComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
    };
    CloneComponent.prototype.visualizeClone = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 2000);
    };
    CloneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-clone',
            template: __webpack_require__(/*! ./clone.component.html */ "./src/app/clone/clone.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./clone.component.css */ "./src/app/clone/clone.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"blue h-48\">\n    <span [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">The index.js snapshot is saved in the Repo</span>\n   </div>\n   <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeCommit()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git commit index.js\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n <div class=\"flex pt-change--commit change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n  <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n  <div class=\"pt-change--commit\">index.html</div>\n    <div class=\"pt-4 \">index.js</div>\n  <div class=\"pt-4 pb-change padding-landscape-commit-b\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Index</div>\n    <div class=\"green index_commit padding-landscape-commit-t\" [ngClass]=\"{'moveAndColor': !hideMessage}\">index.js</div></div>\n    <div class=\"order-switch-0 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Repository</div></div>\n  </div>\n</section>"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var CommitComponent = /** @class */ (function () {
    function CommitComponent(sharedService) {
        this.sharedService = sharedService;
    }
    CommitComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
    };
    CommitComponent.prototype.visualizeCommit = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 2000);
    };
    CommitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-commit',
            template: __webpack_require__(/*! ./commit.component.html */ "./src/app/commit/commit.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], CommitComponent);
    return CommitComponent;
}());



/***/ }),

/***/ "./src/app/git-fetch/git-fetch.component.css":
/*!***************************************************!*\
  !*** ./src/app/git-fetch/git-fetch.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w-message {\n    height: 38px;\n    width: auto;\n    padding-bottom: 8px;\n    display: flex;\n    align-items: center;\n}\n\n.z-1 {\n    z-index: 1;\n}\n\n.z-2 {\n    z-index: 2;\n}\n\n.pr-special {\n    padding-right: 8px;\n}\n\n.pull-left-fetch {\n    margin-left: -72px;\n}\n\n.hide-portrait {\n    display: flex;\n}\n\n.pl-16 {\n    padding-left: 16px;\n}\n\n.pr-16 {\n    padding-right: 16px;\n}\n\n.pt-16 {\n    padding-top: 16px;\n}\n\n.pb-16 {\n    padding-bottom: 16px;\n}\n\n.pr-16-landscape {\n    padding-right: 8px;\n}\n\n.pt-feature {\n    padding-top: 150px;\n}\n\n.padding-repo {\n    padding-left: 0;\n    padding-right: 32px;\n}\n\n.font-switch {\n    font-size: 14px;\n}\n\n.font-16-12 {\n    font-size: 16px;\n}\n\n.featureInfo {\n    margin-right: 0;\n}\n\n.move-right-fetch {\n    -webkit-animation: move-right-fetch 1s linear;\n            animation: move-right-fetch 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes move-right-fetch {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(15rem);\n    }\n}\n\n@keyframes move-right-fetch {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(15rem);\n    }\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .padding-repo {\n        padding-left: 16px;\n        padding-right: 16px;\n    }\n    .hide-portrait {\n        display: flex;\n    }\n\n    .fetch-section--middle {\n        width: 100px;\n    }\n\n    \n    .pr-special {\n        padding-right: 8px;\n    }\n    .featureInfo {\n        margin-right: 5px;\n    }\n\n    .font-16-12 {\n        font-size: 12px;\n    }\n    .pr-16-landscape {\n        padding-right: 16px;\n    }\n    .pt-feature {\n        padding-top: 70px;\n    }\n    .font-switch {\n        font-size: 12px;\n    }\n\n    @-webkit-keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(8.3rem);\n        }\n    }\n\n    @keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(8.3rem);\n        }\n    } \n    \n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n\n    .fetch-section {\n        width: 90px;\n    }\n\n    .portrait-A-top {\n        padding-right: 2px;\n    }\n\n    .padding-repo {\n        padding-left: 2px;\n        padding-right: 2px;\n    }\n    .pr-special {\n        padding-right: 60px;\n    }\n    .featureInfo {\n        margin-right: -5px;\n    }\n\n    .font-16-12 {\n        font-size: 12px;\n    }\n    .hide-portrait {\n        display: none;\n    }\n    .pr-16-landscape {\n        padding-right: 60px;\n    }\n    \n    .pt-feature {\n        padding-top: 50px;\n    }\n    .font-switch {\n        font-size: 12px;\n    }\n    @-webkit-keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.9rem);\n        }\n    }\n    @keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.9rem);\n        }\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0LWZldGNoL2dpdC1mZXRjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKOztBQVBBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKOztBQUdBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7O0lBR0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOztJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOztBQUVKOztBQUNBOztJQUVJO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw2QkFBNkI7UUFDakM7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9naXQtZmV0Y2gvZ2l0LWZldGNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudy1tZXNzYWdlIHtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi56LTEge1xuICAgIHotaW5kZXg6IDE7XG59XG4uei0yIHtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4ucHItc3BlY2lhbCB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLnB1bGwtbGVmdC1mZXRjaCB7XG4gICAgbWFyZ2luLWxlZnQ6IC03MnB4O1xufVxuXG4uaGlkZS1wb3J0cmFpdCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnBsLTE2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4ucHItMTYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4ucHQtMTYge1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLnBiLTE2IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLnByLTE2LWxhbmRzY2FwZSB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4ucHQtZmVhdHVyZSB7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuXG4ucGFkZGluZy1yZXBvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbn1cblxuLmZvbnQtc3dpdGNoIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb250LTE2LTEyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mZWF0dXJlSW5mbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ubW92ZS1yaWdodC1mZXRjaCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXJpZ2h0LWZldGNoIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgbW92ZS1yaWdodC1mZXRjaCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVyZW0pO1xuICAgIH1cbn0gXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgIHtcbiAgICAucGFkZGluZy1yZXBvIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICAuaGlkZS1wb3J0cmFpdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmZldGNoLXNlY3Rpb24tLW1pZGRsZSB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG5cbiAgICBcbiAgICAucHItc3BlY2lhbCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICB9XG4gICAgLmZlYXR1cmVJbmZvIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuXG4gICAgLmZvbnQtMTYtMTIge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5wci0xNi1sYW5kc2NhcGUge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICAucHQtZmVhdHVyZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgIH1cbiAgICAuZm9udC1zd2l0Y2gge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWZldGNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDguM3JlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIFxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XG5cbiAgICAuZmV0Y2gtc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgIH1cblxuICAgIC5wb3J0cmFpdC1BLXRvcCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICB9XG5cbiAgICAucGFkZGluZy1yZXBvIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICB9XG4gICAgLnByLXNwZWNpYWwge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICAgIH1cbiAgICAuZmVhdHVyZUluZm8ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gICAgfVxuXG4gICAgLmZvbnQtMTYtMTIge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5oaWRlLXBvcnRyYWl0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnByLTE2LWxhbmRzY2FwZSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gICAgfVxuICAgIFxuICAgIC5wdC1mZWF0dXJlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgfVxuICAgIC5mb250LXN3aXRjaCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWZldGNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUuOXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/git-fetch/git-fetch.component.html":
/*!****************************************************!*\
  !*** ./src/app/git-fetch/git-fetch.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column\">\n  <div class=\"flex direction-column align-center\" >\n    <div class=\"blue w-message\">\n        <div class=\"flex direction-column text-center\" [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">\n          <div class=\"font-16-14\"> Example: User 2 executes \"get fetch\"</div>\n          <div class=\"white\">All remote branches are fetched to the local repo and are now available for checkout. </div>\n        </div>\n        <div class=\"flex text-center\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn': !hideMessage}\">\n          <div class=\"pl-16 pr-16 font-16-14\">All remote branches are fetched to the local repo and are now available for checkout. </div>\n        </div>\n    </div>\n    <div class=\"flex\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeFetch()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git fetch\"</button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n\n  <div class=\"flex justify-center pt-32\">\n    <section class=\"flex direction-column padding-repo fetch-section\">\n      <div class=\"flex\">\n        <div class=\"flex direction-column font-switch featureInfo\">\n          <div class=\"pt-feature flex pr-8\"><span class=\"hide-portrait pr-2\">feature </span><span class=\"portrait-A-top\">A</span></div>\n          <div class=\"flex white pr-8\"><span class=\"hide-portrait pr-2\">feature </span><span>B</span></div>\n        </div>\n        <div class=\"flex direction-column align-center\">\n          <div class=\"pb-16 font-16-12 flex direction-column align-center\"><div>Local <span class=\"hide-portrait\">Repo</span>  </div><div>User 1</div></div>\n          <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n        </div>\n      </div>\n    </section>\n    <section class=\"flex direction-column padding-repo fetch-section fetch-section--middle\">\n      <div class=\"flex\">\n        <div class=\"flex direction-column font-switch featureInfo z-2 pr-special\" [ngClass]=\"{'pr-16-landscape': !hideMessage}\">\n          <div class=\"pt-feature flex pr-8\"><div class=\"hide-portrait pr-2\">feature </div><div>A</div></div>\n          <div class=\"flex pr-8\"><div class=\"hide-portrait pr-2\">feature </div><div>B</div></div>\n        </div>\n        <div class=\"flex direction-column font-switch pull-left-fetch z-1\" [ngClass]=\"{'white': hideMessage, 'show move-right-fetch': !hideMessage}\">\n          <div class=\"pt-feature flex pr-8\"><span class=\"hide-portrait pr-2\">feature </span><span>A</span></div>\n          <div class=\"flex pr-8\"><span class=\"hide-portrait pr-2\">feature </span><span>B</span></div>\n        </div>\n        <div class=\"flex direction-column align-center\">\n          <div class=\"pb-16 font-16-12 flex direction-column align-center\"><div>Remote</div><div>Shared <div class=\"white hide-portrait\">Repo</div> </div></div>\n          <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n        </div>\n      </div>\n    </section>\n    <section class=\"flex direction-column padding-repo fetch-section\" >\n      <div class=\"flex\">\n        <div class=\"flex direction-column font-switch featureInfo\">\n          <div class=\"pt-feature flex white pr-8\"><span class=\"hide-portrait pr-2\">feature </span><span>A</span></div>\n          <div class=\"pr-8 flex\" [ngClass]=\"{'white': !hideMessage}\">\n            <span class=\"hide-portrait pr-2\">feature </span><span>B</span></div>\n        </div>\n        <div class=\"flex direction-column align-center\">\n        <div class=\"pb-16 font-16-12 flex direction-column align-center\"><div>Local <span class=\"hide-portrait\">Repo</span>  </div><div>User 2</div></div>\n          <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n        </div>\n      </div>\n    </section>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/git-fetch/git-fetch.component.ts":
/*!**************************************************!*\
  !*** ./src/app/git-fetch/git-fetch.component.ts ***!
  \**************************************************/
/*! exports provided: GitFetchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitFetchComponent", function() { return GitFetchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var GitFetchComponent = /** @class */ (function () {
    function GitFetchComponent(sharedService) {
        this.sharedService = sharedService;
    }
    GitFetchComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
    };
    GitFetchComponent.prototype.visualizeFetch = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 3500);
    };
    GitFetchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-git-fetch',
            template: __webpack_require__(/*! ./git-fetch.component.html */ "./src/app/git-fetch/git-fetch.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./git-fetch.component.css */ "./src/app/git-fetch/git-fetch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], GitFetchComponent);
    return GitFetchComponent;
}());



/***/ }),

/***/ "./src/app/git-pull/git-pull.component.css":
/*!*************************************************!*\
  !*** ./src/app/git-pull/git-pull.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay-left {\n    margin-left: -48px;\n}\n\n.h-24 {\n    height: 24px;\n}\n\n.pt-change {\n    padding-top: 64px;\n    align-items: flex-end;\n}\n\n.image-size--pull {\n    width: 9.357rem;\n}\n\n.move-right-git-pull {\n    -webkit-animation: move-right-git-pull 1s linear;\n            animation: move-right-git-pull 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-out-arrow-2 {\n    -webkit-animation: fade-out-arrow-2 2s linear;\n            animation: fade-out-arrow-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-in-arrow-2 {\n    -webkit-animation: fade-in-arrow-2 3s linear;\n            animation: fade-in-arrow-2 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes move-right-git-pull {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translate(17.1rem, -.125rem);\n    }\n}\n\n@keyframes move-right-git-pull {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translate(17.1rem, -.125rem);\n    }\n}\n\n@-webkit-keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@-webkit-keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n\n@keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .pt-change {\n        padding-top: 10px !important;\n    }\n    .image-size--pull {\n        width: 9.357rem;\n    }\n\n    .image-size--pull {\n        width: 3.125rem !important;\n        height: 4.125rem !important;\n    }\n    @-webkit-keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    }\n    @keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    } \n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pt-change {\n        padding-top: 20px !important;\n    }\n    .image-size--pull {\n        width: 3.125rem !important;\n        height: 5.125rem !important;\n    }\n    @-webkit-keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    }\n    @keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0LXB1bGwvZ2l0LXB1bGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdEQUF3QztZQUF4Qyx3Q0FBd0M7SUFDeEMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1Q0FBdUM7SUFDM0M7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1Q0FBdUM7SUFDM0M7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjs7QUFkQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksMEJBQTBCO1FBQzFCLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHFDQUFxQztRQUN6QztJQUNKO0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0kscUNBQXFDO1FBQ3pDO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0kscUNBQXFDO1FBQ3pDO0lBQ0o7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxxQ0FBcUM7UUFDekM7SUFDSjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2l0LXB1bGwvZ2l0LXB1bGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5LWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiAtNDhweDtcbn1cblxuLmgtMjQge1xuICAgIGhlaWdodDogMjRweDtcbn1cblxuLnB0LWNoYW5nZSB7XG4gICAgcGFkZGluZy10b3A6IDY0cHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uaW1hZ2Utc2l6ZS0tcHVsbCB7XG4gICAgd2lkdGg6IDkuMzU3cmVtO1xufVxuXG4ubW92ZS1yaWdodC1naXQtcHVsbCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXJpZ2h0LWdpdC1wdWxsIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5mYWRlLW91dC1hcnJvdy0yIHtcbiAgICBhbmltYXRpb246IGZhZGUtb3V0LWFycm93LTIgMnMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uZmFkZS1pbi1hcnJvdy0yIHtcbiAgICBhbmltYXRpb246IGZhZGUtaW4tYXJyb3ctMiAzcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZS1yaWdodC1naXQtcHVsbCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNy4xcmVtLCAtLjEyNXJlbSk7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBmYWRlLW91dC1hcnJvdy0yIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgZmFkZS1pbi1hcnJvdy0yIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxufSBcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgIHtcbiAgICAucHQtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmltYWdlLXNpemUtLXB1bGwge1xuICAgICAgICB3aWR0aDogOS4zNTdyZW07XG4gICAgfVxuXG4gICAgLmltYWdlLXNpemUtLXB1bGwge1xuICAgICAgICB3aWR0aDogMy4xMjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0LjEyNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtZ2l0LXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMXJlbSwgLS4xMjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XG4gICAgLnB0LWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pbWFnZS1zaXplLS1wdWxsIHtcbiAgICAgICAgd2lkdGg6IDMuMTI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNS4xMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWdpdC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTFyZW0sIC0uMTI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG59Il19 */"

/***/ }),

/***/ "./src/app/git-pull/git-pull.component.html":
/*!**************************************************!*\
  !*** ./src/app/git-pull/git-pull.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16 font-16-14\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-600 h-change-28-48 font-14-12 \" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The local main branch now points to the latest commit from the repo main branch. \n        git pull = git fetch + git merge. (A merge conflict may need to be resolved.) \n      </div>\n    </div>\n    <div class=\"flex align-center pt-32-in-portrait\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizePull()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git pull origin main\"</button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n  <div class=\"flex pt-32 align-center\"> \n    <section class=\"flex direction-column align-center text-center\"> \n      <div class=\"pb-8\">\n        <div>Remote Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column pt-change\">\n          <div class=\"flex align-center\">\n            <div class=\"pr-2\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div> \n            <div class=\"pr-8 h-24\">86b5f</div>\n            <div class= \"pr-8 overlay-left\" [ngClass]=\"{'hide': hideMessage, 'show move-right-git-pull': !hideMessage}\">86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"pr-8 h-24\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--pull\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column align-center text-center\"> \n      <div class=\"pb-8\">\n        <div>Local Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column pt-change\">\n          <div class=\"flex align-center h-24\">\n            <div class=\"pr-4\" [ngClass]=\"{'hide': hideMessage, 'fade-in-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div>   \n            <div class=\"pr-8 white h-24\">86b5f</div>\n          </div>\n          <div class=\"flex align-center h-24\" >\n            <div class=\"pr-2\" [ngClass]=\"{'fade-out-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div>            \n            <div class=\"pr-8 h-24\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--pull\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/git-pull/git-pull.component.ts":
/*!************************************************!*\
  !*** ./src/app/git-pull/git-pull.component.ts ***!
  \************************************************/
/*! exports provided: GitPullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPullComponent", function() { return GitPullComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var GitPullComponent = /** @class */ (function () {
    function GitPullComponent(sharedService) {
        this.sharedService = sharedService;
    }
    GitPullComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
    };
    GitPullComponent.prototype.visualizePull = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 3400);
    };
    GitPullComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-git-pull',
            template: __webpack_require__(/*! ./git-pull.component.html */ "./src/app/git-pull/git-pull.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./git-pull.component.css */ "./src/app/git-pull/git-pull.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], GitPullComponent);
    return GitPullComponent;
}());



/***/ }),

/***/ "./src/app/git-push/git-push.component.css":
/*!*************************************************!*\
  !*** ./src/app/git-push/git-push.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay-left {\n    margin-left: -48px;\n}\n\n.font-14-12 {\n    font-size: 14px;\n}\n\n.h-28 {\n    height: 28px;\n}\n\n.justify-end {\n    justify-content: flex-end;\n}\n\n.pt-change {\n    padding-top: 64px;\n}\n\n.image-size--pull {\n    width: 9.357rem;\n}\n\n.move-left-git-push {\n    -webkit-animation: move-left-git-push 1s linear;\n            animation: move-left-git-push 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-out-arrow-2 {\n    -webkit-animation: fade-out-arrow-2 2s linear;\n            animation: fade-out-arrow-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-in-arrow-2 {\n    -webkit-animation: fade-in-arrow-2 3s linear;\n            animation: fade-in-arrow-2 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes move-left-git-push {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(-17.3rem);\n    }\n}\n\n@keyframes move-left-git-push {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(-17.3rem);\n    }\n}\n\n@-webkit-keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@-webkit-keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n\n@keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .pt-change {\n        padding-top: 10px !important;\n    }\n    .image-size--pull {\n        width: 9.357rem;\n    }\n\n    .font-14-12 {\n        font-size: 12px;\n    }\n\n    .image-size--pull {\n        width: 3.125rem !important;\n        height: 4.125rem !important;\n    }\n    @-webkit-keyframes move-left-git-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-11rem);\n        }\n    }\n    @keyframes move-left-git-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-11rem);\n        }\n    } \n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pt-change {\n        padding-top: 20px !important;\n    }\n\n    .font-14-12 {\n        font-size: 12px;\n    }\n    .image-size--pull {\n        width: 3.125rem !important;\n        height: 5.125rem !important;\n    }\n    @-webkit-keyframes move-left-git-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-11rem);\n        }\n    }\n    @keyframes move-left-git-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-11rem);\n        }\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0LXB1c2gvZ2l0LXB1c2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtDQUF1QztZQUF2Qyx1Q0FBdUM7SUFDdkMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwrQkFBK0I7SUFDbkM7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwrQkFBK0I7SUFDbkM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjs7QUFkQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw2QkFBNkI7UUFDakM7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw2QkFBNkI7UUFDakM7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9naXQtcHVzaC9naXQtcHVzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXktbGVmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IC00OHB4O1xufVxuXG4uZm9udC0xNC0xMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaC0yOCB7XG4gICAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uanVzdGlmeS1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5wdC1jaGFuZ2Uge1xuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xufVxuXG4uaW1hZ2Utc2l6ZS0tcHVsbCB7XG4gICAgd2lkdGg6IDkuMzU3cmVtO1xufVxuXG4ubW92ZS1sZWZ0LWdpdC1wdXNoIHtcbiAgICBhbmltYXRpb246IG1vdmUtbGVmdC1naXQtcHVzaCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4uZmFkZS1vdXQtYXJyb3ctMiB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dC1hcnJvdy0yIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmZhZGUtaW4tYXJyb3ctMiB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluLWFycm93LTIgM3MgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmUtbGVmdC1naXQtcHVzaCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE3LjNyZW0pO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQtYXJyb3ctMiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tYXJyb3ctMiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbn0gXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpICB7XG4gICAgLnB0LWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pbWFnZS1zaXplLS1wdWxsIHtcbiAgICAgICAgd2lkdGg6IDkuMzU3cmVtO1xuICAgIH1cblxuICAgIC5mb250LTE0LTEyIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5pbWFnZS1zaXplLS1wdWxsIHtcbiAgICAgICAgd2lkdGg6IDMuMTI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNC4xMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZ2l0LXB1c2gge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExcmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5wdC1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5mb250LTE0LTEyIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZS0tcHVsbCB7XG4gICAgICAgIHdpZHRoOiAzLjEyNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDUuMTI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWdpdC1wdXNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/git-push/git-push.component.html":
/*!**************************************************!*\
  !*** ./src/app/git-push/git-push.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16 font-16-14\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-600 h-change-28-48 font-14-12\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The remote main branch now points to the latest commit from the local main branch.\n        It's advisable to do a pull before a push to a shared repo.\n        When combining code with a push or a pull, merge conflicts may need to be resolved.\n      </div>\n    </div>\n    <div class=\"flex align-center pt-32-in-portrait\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizePull()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git pull origin main\"</button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n  <div class=\"flex pt-32 align-center\"> \n    <section class=\"flex direction-column align-center text-center\"> \n      <div class=\"pb-8\">\n        <div>Remote Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column pt-change\">\n          <div class=\"flex\">\n            <div class=\"pr-4\" [ngClass]=\"{'hide': hideMessage, 'fade-in-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div> \n            <div class=\"pr-8 white h-28\">86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"pr-4\" [ngClass]=\"{'fade-out-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div>   \n            <div class=\"pr-8 h-28\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--pull\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column align-center text-center\"> \n      <div class=\"pb-8\">\n        <div>Local Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column pt-change\">\n          <div class=\"flex align-center h-28\">\n            <div class=\"pr-2\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div> \n            <div class=\"pr-8 h-28\">86b5f</div>  \n            <div class= \"pr-8 overlay-left\" [ngClass]=\"{'hide': hideMessage, 'show move-left-git-push': !hideMessage}\">86b5f</div>\n          </div>\n          <div class=\"flex justify-end h-28\" >  \n            <div class=\"pr-8 h-28\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--pull\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/git-push/git-push.component.ts":
/*!************************************************!*\
  !*** ./src/app/git-push/git-push.component.ts ***!
  \************************************************/
/*! exports provided: GitPushComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitPushComponent", function() { return GitPushComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var GitPushComponent = /** @class */ (function () {
    function GitPushComponent(sharedService) {
        this.sharedService = sharedService;
    }
    GitPushComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
    };
    GitPushComponent.prototype.visualizePull = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 3400);
    };
    GitPushComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-git-push',
            template: __webpack_require__(/*! ./git-push.component.html */ "./src/app/git-push/git-push.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./git-push.component.css */ "./src/app/git-push/git-push.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], GitPushComponent);
    return GitPushComponent;
}());



/***/ }),

/***/ "./src/app/git-reset/git-reset.component.css":
/*!***************************************************!*\
  !*** ./src/app/git-reset/git-reset.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-full {\n    height: 100%;\n}\n.gold {\n    background-color: gold;\n}\n.h-36 {\n    height: 36px;\n    min-height: 36px;\n}\n.h-48 {\n    height: 48px;\n    min-height: 48px;\n}\n.border-beige{\n    border: 2px solid #beaf98;\n}\n.br-beige{\n    border-right: 2px solid #beaf98;\n}\n.pb-8-portrait {\n    padding-bottom: 0; \n}\n.w-24 {\n    width: 24px;\n}\n.h-28 {\n    height: 28px;;\n}\n.fade-to-green {\n    -webkit-animation: fade-to-green 2s linear;\n            animation: fade-to-green 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-to-red {\n    -webkit-animation: fade-to-red 2s linear;\n            animation: fade-to-red 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-to-purple {\n    -webkit-animation: fade-to-purple 2s linear;\n            animation: fade-to-purple 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-to-gray {\n    -webkit-animation: fade-to-gray 2s linear;\n            animation: fade-to-gray 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.stay-gold{\n    background-color: gold;\n}\n.fade-in-index {\n    -webkit-animation: fade-in-arrow-2 5s linear;\n            animation: fade-in-arrow-2 5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-out-index {\n    -webkit-animation: fade-out-arrow-2 4s linear;\n            animation: fade-out-arrow-2 4s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-out-arrow-2 {\n    -webkit-animation: fade-out-arrow-2 2s linear;\n            animation: fade-out-arrow-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-in-arrow-2 {\n    -webkit-animation: fade-in-arrow-2 1s linear;\n            animation: fade-in-arrow-2 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes fade-to-green{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: darkseagreen;\n    }\n}\n@keyframes fade-to-green{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: darkseagreen;\n    }\n}\n@-webkit-keyframes fade-to-red{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: indianred;\n    }\n}\n@keyframes fade-to-red{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: indianred;\n    }\n}\n@-webkit-keyframes fade-to-purple{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: mediumpurple;\n    }\n}\n@keyframes fade-to-purple{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: mediumpurple;\n    }\n}\n@-webkit-keyframes fade-to-gray{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: #BEBEBE;\n    }\n}\n@keyframes fade-to-gray{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: #BEBEBE;\n    }\n}\n@-webkit-keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n@keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n@-webkit-keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n@keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .pb-8-portrait {\n        padding-bottom: 0;\n    }\n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pb-8-portrait {\n        padding-bottom: 8px;;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0LXJlc2V0L2dpdC1yZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKO0FBVkE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSjtBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0o7QUFWQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKO0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSjtBQVZBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKO0FBVkE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjtBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBUEE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjtBQWRBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2l0LXJlc2V0L2dpdC1yZXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmgtZnVsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmdvbGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG59XG5cbi5oLTM2IHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbWluLWhlaWdodDogMzZweDtcbn1cblxuLmgtNDgge1xuICAgIGhlaWdodDogNDhweDtcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xufVxuXG4uYm9yZGVyLWJlaWdle1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZWFmOTg7XG59XG5cbi5ici1iZWlnZXtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmVhZjk4O1xufVxuXG4ucGItOC1wb3J0cmFpdCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7IFxufVxuXG4udy0yNCB7XG4gICAgd2lkdGg6IDI0cHg7XG59XG5cbi5oLTI4IHtcbiAgICBoZWlnaHQ6IDI4cHg7O1xufVxuXG4uZmFkZS10by1ncmVlbiB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLXRvLWdyZWVuIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmZhZGUtdG8tcmVkIHtcbiAgICBhbmltYXRpb246IGZhZGUtdG8tcmVkIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5mYWRlLXRvLXB1cnBsZSB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLXRvLXB1cnBsZSAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4uZmFkZS10by1ncmF5IHtcbiAgICBhbmltYXRpb246IGZhZGUtdG8tZ3JheSAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4uc3RheS1nb2xke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG59XG5cbi5mYWRlLWluLWluZGV4IHtcbiAgICBhbmltYXRpb246IGZhZGUtaW4tYXJyb3ctMiA1cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4uZmFkZS1vdXQtaW5kZXgge1xuICAgIGFuaW1hdGlvbjogZmFkZS1vdXQtYXJyb3ctMiA0cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5mYWRlLW91dC1hcnJvdy0yIHtcbiAgICBhbmltYXRpb246IGZhZGUtb3V0LWFycm93LTIgMnMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uZmFkZS1pbi1hcnJvdy0yIHtcbiAgICBhbmltYXRpb246IGZhZGUtaW4tYXJyb3ctMiAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZS10by1ncmVlbntcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBmYWRlLXRvLXJlZHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBmYWRlLXRvLXB1cnBsZXtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1wdXJwbGU7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBmYWRlLXRvLWdyYXl7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JFQkVCRTtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0LWFycm93LTIge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBmYWRlLWluLWFycm93LTIge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59IFxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSAge1xuICAgIC5wYi04LXBvcnRyYWl0IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XG4gICAgLnBiLTgtcG9ydHJhaXQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4OztcbiAgICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/git-reset/git-reset.component.html":
/*!****************************************************!*\
  !*** ./src/app/git-reset/git-reset.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"h-48\">\n   <span class=\"blue font-16-14 pl-16 pr-16 text-center\" [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">git reset optionally moves the HEAD in the Repository and optionally overwrites the Index and Working Area</span>\n  <div class=\"flex direction-column blue\">\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head1' }\">Points to commit one place before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head' }\">Points to HEAD (default)</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head2' }\">Points to commit two places before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head3' }\">Points to commit three places before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'soft' }\">Soft: no overwrites</span>\n     <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'mixed' }\">Mixed (default): overwrite Index</span>\n    <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'hard' }\">Hard: overwrite Index and Working Area</span>\n  </div>\n  </div>\n  <div class=\"flex align-center justify-center\">\n    <mat-form-field class=\"w-40\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose where to move HEAD</mat-label>\n      <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommit($event.value)\">\n        <mat-option *ngFor = \"let commit of commits\" [value]=\"commit.name\"\n        >{{commit.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div class=\"pr-8\"></div>\n    <mat-form-field class=\"w-40--reset\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose overwrite option</mat-label>\n      <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommand($event.value)\">\n        <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n        >{{command.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"flex pb-32\">\n    <button [disabled]=\"completed || chosenCommand === '' || chosenCommit === ''\" (click)=\"visualizeReset()\" class=\"w-350--reset\" mat-raised-button color=\"warn\">Visualize \"git reset<span *ngIf=\"chosenCommit !=='no parameter'\"> {{chosenCommit}}</span><span *ngIf=\"chosenCommand !=='no parameter' && chosenCommand !==''\"> --{{chosenCommand}}</span>\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n\n  <div class=\"flex h-full border-beige \">\n    <section class=\"br-beige\">\n      <div class=\"flex direction-column text-align\">\n        <div class=\"w-full min-w-150--reset background-black white\">Working Area</div>\n        <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n          <div class=\"dot \" \n              [ngClass]=\"{'gold': initArrow || (!initArrow && overWriteType !== 'hard'),\n                          'fade-to-green': !initArrow && copyHead() && overwriteType() === 'hard',\n                          'fade-to-red': !initArrow && copyHead1() && overwriteType() === 'hard',\n                          'fade-to-purple': !initArrow && copyHead2() && overwriteType() === 'hard',\n                          'fade-to-gray': !initArrow && copyHead3() && overwriteType() === 'hard'}\">\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"br-beige\">\n      <div class=\"flex direction-column text-align\">\n        <div class=\"w-full min-w-150--reset background-black white\">Index</div>\n        <div class=\"flex align-center justify-center pt-8 mt-4\">\n          <div class=\"dot \" \n              [ngClass]=\"{'gold': initArrow || softOverwrite(),\n                          'fade-to-green': !initArrow && copyHead() && overwriteType() !== 'soft',\n                          'fade-to-red': !initArrow && copyHead1() && overwriteType()  !== 'soft',\n                          'fade-to-purple': !initArrow && copyHead2() && overwriteType()  !== 'soft',\n                          'fade-to-gray': !initArrow && copyHead3() && overwriteType()  !== 'soft'}\">\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"\">\n      <div class=\"flex direction-column text-align\">\n        <div class=\"w-full min-w-150--reset background-black white\">Repository</div>\n        <div class=\"flex align-center justify-center pt-8 mt-4 h-36\">\n          <div class=\"pr-8 h-28\" >\n            <div class=\"w-24\"></div>\n            <img *ngIf=\"initArrow\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            <img [ngClass]=\"{'hide': (initArrow || headPointer() !== 'head'),'fade-in-arrow-2': (!initArrow && headPointer() === 'head')}\"  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n          </div> \n          <div class=\"head dot seaGreen\"></div>\n        </div>\n        <div class=\"flex align-center justify-center pt-8 mt-4 h-36\">\n          <div class=\"pr-8\">\n            <div class=\"w-24\"></div>\n            <img [ngClass]=\"{'hide': (initArrow || headPointer() !== 'head1'),'fade-in-arrow-2': (!initArrow && headPointer() === 'head1')}\"  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n          </div> \n          <div class=\"head1 dot indianRed\"></div>\n        </div>\n        <div class=\"flex align-center justify-center pt-8 mt-4 h-36\">\n          <div class=\"pr-8\">\n            <div class=\"w-24\"></div>\n            <img [ngClass]=\"{'hide': (initArrow || headPointer() !== 'head2'),'fade-in-arrow-2': (!initArrow && headPointer() === 'head2')}\"  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n          </div> \n          <div class=\"head2 dot mediumPurple\"></div>\n        </div>\n        <div class=\"flex align-center justify-center pt-8 pb-8 mt-4 h-36\">\n          <div class=\"pr-8\">\n            <div class=\"w-24\"></div>\n            <img [ngClass]=\"{'hide': (initArrow || headPointer() !== 'head3'),'fade-in-arrow-2': (!initArrow && headPointer() === 'head3')}\"  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n          </div> \n          <div class=\"head3 dot background-gray\"></div>\n        </div>\n      </div>\n    </section>\n</div>\n\n\n\n</section>"

/***/ }),

/***/ "./src/app/git-reset/git-reset.component.ts":
/*!**************************************************!*\
  !*** ./src/app/git-reset/git-reset.component.ts ***!
  \**************************************************/
/*! exports provided: GitResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitResetComponent", function() { return GitResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var GitResetComponent = /** @class */ (function () {
    function GitResetComponent(sharedService) {
        this.sharedService = sharedService;
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
    GitResetComponent.prototype.ngOnInit = function () {
        this.initArrow = true;
        this.hideMessage = true;
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
    GitResetComponent.prototype.copyHead = function () {
        if (!this.hideMessage &&
            this.headPointer() === 'head' &&
            (this.overwriteType() === 'mixed' ||
                this.overwriteType() === 'hard')) {
            console.log('true');
            return true;
        }
        else {
            console.log('false');
            return false;
        }
    };
    GitResetComponent.prototype.copyHead1 = function () {
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
    GitResetComponent.prototype.copyHead2 = function () {
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
    GitResetComponent.prototype.copyHead3 = function () {
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
    GitResetComponent.prototype.headPointer = function () {
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
    GitResetComponent.prototype.overwriteType = function () {
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
    GitResetComponent.prototype.hardOverwrite = function () {
        if (!this.hideMessage && this.overwriteType() === 'hard') {
            return true;
        }
        else {
            return false;
        }
    };
    GitResetComponent.prototype.softOverwrite = function () {
        if (!this.hideMessage && this.overwriteType() === 'soft') {
            return true;
        }
        else {
            return false;
        }
    };
    GitResetComponent.prototype.visualizeReset = function () {
        var _this = this;
        this.initArrow = false;
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
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 5000);
        this.hideMessage = false;
        this.completed = true;
    };
    GitResetComponent.prototype.selectCommand = function (command) {
        this.chosenCommand = command;
    };
    GitResetComponent.prototype.selectCommit = function (commit) {
        this.chosenCommit = commit;
    };
    GitResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-git-reset',
            template: __webpack_require__(/*! ./git-reset.component.html */ "./src/app/git-reset/git-reset.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./git-reset.component.css */ "./src/app/git-reset/git-reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], GitResetComponent);
    return GitResetComponent;
}());



/***/ }),

/***/ "./src/app/init/init.component.html":
/*!******************************************!*\
  !*** ./src/app/init/init.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"blue h-48 pl-16 pr-16 pb-16 text-center\">\n    <span [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: A folder contains 3 files. No git repository exists.</span>\n    <span [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">\n      A git repository is created (look for a hidden folder call .git).\n      Git init only needs to be run once. </span>\n   </div>\n   <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeInit()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git init\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change text-align\"\n         [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Working Area</div>\n      <div class=\"pt-change\">index.html</div>\n      <div class=\"pt-4 \">index.js</div>\n      <div class=\"pt-4 pb-change\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change text-align\"\n        [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Index</div>\n    </div>\n    <div class=\"order-switch-0 height-change text-align\"\n          [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Repository</div>\n    </div>\n  </div>\n</section>"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var InitComponent = /** @class */ (function () {
    function InitComponent(sharedService) {
        this.sharedService = sharedService;
    }
    InitComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
    };
    InitComponent.prototype.visualizeInit = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 2500);
    };
    InitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-init',
            template: __webpack_require__(/*! ./init.component.html */ "./src/app/init/init.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
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

module.exports = "<div class=\"flex direction-column align-center \">\n  <div class=\"blue align-center pl-32 pr-32 pb-16 text-center max-w-450\" \n      *ngIf=\"!hideMessage\">Lists the commits for the current branch. Use \"git log\" without options to see more information such as author and date</div>\n  <section class= \"flex direction-column align-center\" >\n    <div class=\"flex\">\n      <div class=\"pr-8\"></div>\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeLog()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git log --oneline\"</button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </section>\n  <section class=\"flex align-center direction-column\">\n    <div *ngIf=\"!hideMessage\" class=\"flex direction-column align-left pl-50\" >\n      <div class=\"flex-direction-change\"><div class=\"commit flex commit-fadeIn-1 pt-32 pb-2\"><div class=\"w-100 pr-8 khaki bold\">da91bc1a</div><div>( <span class=\"darkblue bold\">HEAD -> </span><span class=\"limegreen bold\">main</span>, <span class=\"red bold pl-2\">origin/main</span>)</div></div>\n      <div class=\"pl-109 commit flex commit-fadeIn-1 pb-8\"> require oauth authentication</div></div>\n      <div class=\"commit flex commit-fadeIn-2 pb-8\"><div class=\"w-100 pr-8 khaki bold\">37bce8f6</div><div>add navigation bar</div></div>\n      <div class=\"commit flex commit-fadeIn-3 pb-8\"><div class=\"w-100 pr-8 khaki bold\">1dd25ea0</div><div>first commit, lay out app</div></div>\n    </div>\n  </section>\n</div>\n"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var LogComponent = /** @class */ (function () {
    function LogComponent(sharedService) {
        this.sharedService = sharedService;
    }
    LogComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
    };
    LogComponent.prototype.visualizeLog = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 3500);
    };
    LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-log',
            template: __webpack_require__(/*! ./log.component.html */ "./src/app/log/log.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "./src/app/merge/merge.component.css":
/*!*******************************************!*\
  !*** ./src/app/merge/merge.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pull-up-pc {\n    margin-top: -5px;\n    /* border: 1px solid hotpink; */\n}\n.pull-up-pc-2 {\n    margin-top: -10px !important;\n    /* border: 2px solid orange; */\n}\n.h-20 {\n    height: 20px;\n}\n.h-30 {\n    height: 30px;\n}\n.pl-28 {\n    padding-left: 28px;\n}\n.pt-25 {\n    padding-top: 25px;\n}\n.pt-36 {\n    padding-top: 36px;\n}\n.move-up-pc {\n    -webkit-animation: move-up-pc 1.3s linear;\n            animation: move-up-pc 1.3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-right-merge {\n    -webkit-animation: move-right-merge 1s linear;\n            animation: move-right-merge 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.pl-20 {\n    padding-left: 20px;\n}\n.pl-28 {\n    padding-left: 28px;\n}\n.fade-out-arrow-2 {\n    -webkit-animation: fade-out-arrow-2 1.5s linear;\n            animation: fade-out-arrow-2 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-in-arrow-2 {\n    -webkit-animation: fade-in-arrow-2 3s linear;\n            animation: fade-in-arrow-2 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes move-right-merge {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(10.5rem);\n    }\n}\n@keyframes move-right-merge {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(10.5rem);\n    }\n}\n@-webkit-keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n@keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n@-webkit-keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n@keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n@-webkit-keyframes move-up-pc {\n    0% {\n        transform: translateY(0);\n    }\n    70% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-3.5rem);\n    }\n}\n@keyframes move-up-pc {\n    0% {\n        transform: translateY(0);\n    }\n    70% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-3.5rem);\n    }\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyZ2UvbWVyZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksK0NBQXVDO1lBQXZDLHVDQUF1QztJQUN2QyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSjtBQVBBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKO0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFQQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtBQUNKO0FBZEE7SUFDSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKO0FBVkE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21lcmdlL21lcmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVsbC11cC1wYyB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBob3RwaW5rOyAqL1xufVxuLnB1bGwtdXAtcGMtMiB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7ICovXG59XG5cbi5oLTIwIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4uaC0zMCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ucGwtMjgge1xuICAgIHBhZGRpbmctbGVmdDogMjhweDtcbn1cbi5wdC0yNSB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4ucHQtMzYge1xuICAgIHBhZGRpbmctdG9wOiAzNnB4O1xufVxuLm1vdmUtdXAtcGMge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cC1wYyAxLjNzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtcmlnaHQtbWVyZ2Uge1xuICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1tZXJnZSAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5wbC0yMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucGwtMjgge1xuICAgIHBhZGRpbmctbGVmdDogMjhweDtcbn1cblxuLmZhZGUtb3V0LWFycm93LTIge1xuICAgIGFuaW1hdGlvbjogZmFkZS1vdXQtYXJyb3ctMiAxLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmZhZGUtaW4tYXJyb3ctMiB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluLWFycm93LTIgM3MgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmUtcmlnaHQtbWVyZ2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwLjVyZW0pO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQtYXJyb3ctMiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tYXJyb3ctMiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgbW92ZS11cC1wYyB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMy41cmVtKTtcbiAgICB9XG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/merge/merge.component.html":
/*!********************************************!*\
  !*** ./src/app/merge/merge.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-change-28-48 pb-change-16-32\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-450\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The main branch is updated with the latest commits from the feature branch.\n        (A merge conflict may need to be resolved.)\n      </div>\n    </div>\n    <div class=\"flex\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeMerge()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git merge feature\"</button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n <div class=\"flex pt-32 w-full justify-center\"> \n    <section class=\"flex direction-column pr-16\"> \n      <div class=\"pb-8 pl-16 bold text-center\">feature branch </div>\n      <div class=\"flex\">\n        <div class=\"flex direction-column pt-36\">\n          <div class=\"flex align-center\">\n            <div class=\"h-30\"></div>     \n            <div class=\"pr-2 pl-28\">commit 86b5f</div>\n            <div class=\"pr-8 pull-left\" [ngClass]=\"{'hide': hideMessage, 'show move-right-merge': !hideMessage}\">commit 86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"pl-28\">commit e34b2</div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"flex direction-column text-left pr-16\"> \n      <div class=\"pb-8 pl-16 bold text-center\">main branch </div>\n      <div class=\"flex\">\n        <div class=\"flex direction-column pt-32\">\n          <div class=\"flex align-center h-20\">\n            <div class=\"pr-4 pt-25\" [ngClass]=\"{'hide': hideMessage, 'fade-in-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div>         \n            <div class=\"pr-2\"></div>\n          </div>\n          <div class=\"flex pr-2 mt-8 align-center justify-center\">\n            <div class=\"pr-4\" [ngClass]=\"{'fade-out-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div>    \n            <div class=\"\">commit e34b2</div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var MergeComponent = /** @class */ (function () {
    function MergeComponent(sharedService) {
        this.sharedService = sharedService;
    }
    MergeComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
    };
    MergeComponent.prototype.visualizeMerge = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 3400);
    };
    MergeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-merge',
            template: __webpack_require__(/*! ./merge.component.html */ "./src/app/merge/merge.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./merge.component.css */ "./src/app/merge/merge.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], MergeComponent);
    return MergeComponent;
}());



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");



var SharedService = /** @class */ (function () {
    function SharedService(snackBar) {
        this.snackBar = snackBar;
    }
    SharedService.prototype.showSnackbar = function () {
        var _this = this;
        if (this.notificationsOn) {
            var message = 'Animation complete. Choose another command.';
            var action = 'Disable this Notification Bar';
            var snackbarRef = this.snackBar.open(message, action, { duration: 2800 });
            snackbarRef.onAction().subscribe(function () {
                _this.notificationsOn = false;
            });
        }
    };
    SharedService.prototype.showSnackbarCssStyles = function (content, action, duration) {
        var sb = this.snackBar.open(content, action, {
            duration: duration,
            panelClass: ["custom-style"]
        });
        sb.onAction().subscribe(function () {
            sb.dismiss();
        });
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/stash/stash.component.html":
/*!********************************************!*\
  !*** ./src/app/stash/stash.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"flex align-center justify-center change-direction-stash\">\n    <div class=\"h-change-28-48 text-center \">\n      <div class=\"blue align-center text-align pl-16 pr-16 font-change-14-16\" >\"git stash\" stores files in the Stash Area. These files can be retrieved later with \"git stash apply\".</div>\n     </div>\n     <div class=\"flex pt-16\">\n       <div class=\"pr-8\"></div>\n       <mat-form-field class=\"w-full stash-field\" appearance=\"fill\">\n         <mat-label float=\"never\">Choose an option</mat-label>\n         <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommand($event.value)\">\n           <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n           >{{command.name}}</mat-option>\n         </mat-select>\n       </mat-form-field>\n     </div>\n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"completed || chosenCommand === ''\" (click)=\"visualizeStash()\" class=\"w-full\" mat-raised-button color=\"warn\">Visualize \"git stash<span *ngIf=\"chosenCommand !=='no option' && chosenCommand !==''\"> --{{chosenCommand}}</span>\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-stash flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Stash Area</div>\n      <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n      </div>\n    </div>\n    <div class=\"order-switch-2 bl-stash flex  direction-column height-change bt-beige bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n      <div class=\"flex align-center direction-column align-left justify-center pt-8 mt-4 pb-32\">\n        <div class=\"pl-8 toMove tracked noOption\">sidebar.html</div>\n        <div class=\"pl-8 toMove untracked\">untracked: nav.js</div>\n      </div>\n    </div>\n    <div class=\"order-1 height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Index</div>\n      <div class=\"flex align-left pt-8 mt-4 pb-32\">\n        <div class=\"pl-8 toMove index noOption\">sidebar.css</div>\n      </div>\n    </div>\n    <div class=\"order-switch-0 height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Repository</div>\n    </div>\n  </div>\n</section>"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var StashComponent = /** @class */ (function () {
    function StashComponent(sharedService) {
        this.sharedService = sharedService;
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
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 2000);
        this.hideMessage = false;
        this.completed = true;
    };
    StashComponent.prototype.selectCommand = function (command) {
        this.chosenCommand = command;
    };
    StashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-stash',
            template: __webpack_require__(/*! ./stash.component.html */ "./src/app/stash/stash.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
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

module.exports = ".green-bold {\n    color: green;\n    font-weight: bold;\n    padding-left: 16px;\n}\n\n.red-bold {\n    color: red;\n    font-weight: bold;\n}\n\n.font-16-14 {\n    font-size: 16px;\n}\n\n.ml-neg {\n    margin-left: -40px;\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .font-16-14 {\n        font-size: 14px;\n    }\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pl-change-status {\n        padding-left: 0rem !important;\n    }\n    .font-16-14 {\n        font-size: 14px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlbi1ib2xkIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4ucmVkLWJvbGQge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb250LTE2LTE0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tbC1uZWcge1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgIHtcbiAgICAuZm9udC0xNi0xNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5wbC1jaGFuZ2Utc3RhdHVzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5mb250LTE2LTE0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue pt-8 pr-16 pl-16 h-change-28-48 font-16-14\" >\n    <div class=\"blue w-550 text-center\" *ngIf=\"hideMessage\">Git status displays the state of the working directory and the staging area.</div>\n    <div class=\"blue w-450 text-center\" *ngIf=\"!hideMessage\" [@myTrigger]=\"fadeIn\"><span class=\"red bold pr-8\">Red: <span class=\"black regular\">in Working Area.</span> </span><span class=\"green bold\">Green:<span class=\"black regular\">  in Index.</span></span></div>\n  </div>\n  <div class=\"flex pt-8\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeStatus()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git status\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n  <section class= \"flex direction-column pl-change-status pt-16 text-left\" >\n    <div [ngClass]=\"{\n                    'ml-neg': i == '0',\n                    'green-bold pl-16': i == '1',\n                    'red-bold': i == '3'\n                  }\" \n                    class=\"pt-8 pb-8\" *ngFor=\"let message of messages; let i = index\" [@myTrigger]=\"fadeIn\">{{message}}</div>\n  </section>\n</div>\n\n\n"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




var StatusComponent = /** @class */ (function () {
    function StatusComponent(sharedService) {
        this.sharedService = sharedService;
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.messages = [];
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
            _this.sharedService.showSnackbar();
        }, 3500);
    };
    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./status.component.css */ "./src/app/status/status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
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