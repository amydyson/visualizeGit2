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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"blue h-48\">\n   <div class=\"green\" [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">A snapshot of index.js is staged in the Index</div>\n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeAdd()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git add index.js\"</button>\n    <div class=\"pr-16\"></div>\n    <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button>\n    <div class=\"pr-8\"></div>\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n  <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n  <div class=\"pt-change\">index.html</div>\n    <div class=\"pt-4 \">index.js</div>\n    <div class=\"pull-up green\" [ngClass]=\"{'hide': hideMessage, 'show, move': !hideMessage}\">index.js</div>\n  <div class=\"pt-4 pb-change\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Index</div></div>\n    <div class=\"order-switch-0 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Repository</div></div>\n  </div>\n</section>"

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
        this.enableReload = false;
    };
    AddComponent.prototype.visualizeAdd = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.enableReload = true;
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

module.exports = "\n.visGitApp {\n    font-family: Arial, Helvetica, sans-serif !important;\n}\n<!--snackbar-->\nul.custom {\n    list-style-type: none; /* Remove bullets */\n    padding: 0; /* Remove padding */\n    margin: 0; /* Remove margins */\n  }\nul li {\n    margin: 10px;\n  }\n::ng-deep .custom-style{\n    background-color: #c21807;\n    color:white;\n    display: flex !important;\n    justify-content: center;\n    align-items: center !important;\n  }\n.font-change-14-16 {\n    font-size: 1rem;\n}\n.font-16-14 {\n    font-size: 16px;\n}\n.w-40--reset {\n    width: 15.625rem;\n}\n.pl-change-status {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.change-direction-stash {\n    flex-direction: column;\n}\n.pl-92-except-portrait{\n    padding-left: 1.875rem;\n}\n.pr-64-except-portrait {\n    padding-right: 0rem;\n}\n.pt-32-in-portrait {\n    padding-top: 2rem;\n}\n.image-size-icon {\n    width: 3.125rem;\n}\n.font-size-change {\n    font-size: 1.375rem;\n}\n.pl-change {\n    padding-left: 3.125rem;\n}\n.pb-change-16-32 {\n padding-bottom: 2rem;\n}\n.h-change-28-48 {\n    height: 1.75rem;\n}\n.flex-direction-change {\n    flex-direction: row;\n}\n.font-size-12 {\n    font-size: .75rem;\n}\n.mat-fab .mat-button-wrapper {\n    line-height: .25rem !important;\n}\n.italics {\n    font-style: italic;\n}\n.font-size-24 {\n    font-size: 1.5rem;\n}\n.font-size-32 {\n    font-size: 2rem;\n}\n.font-size-48 {\n    font-size: 3rem;\n}\n.h-28 {\n    height: 1.25rem;\n}\n.h-38 {\n    height: 2.375rem;\n}\n.h-48 {\n    height: 3rem;\n}\n.h-58 {\n    height: 3.625rem;\n}\n.h-69 {\n    height: 4.3125rem;\n}\n.mr-2 {\n    margin-right: .125rem;\n}\n.mr-4 {\n    margin-right: .25rem;\n}\n.ml-2 {\n    margin-left: .125rem;\n}\n.ml-4 {\n    margin-left: .25rem;\n}\n.ml-6 {\n    margin-left: 0.375rem;\n}\n.ml-8 {\n    margin-left: .5rem;\n}\n.ml-switch--reset {\n    margin-left: 2.625rem;\n}\n.mt-2 {\n    margin-top: .125rem;\n}\n.mt-4 {\n    margin-top: .25rem;\n}\n.mt-8 {\n    margin-top: .5rem;\n}\n.pb-36 {\n    padding-bottom: 2.25rem;\n}\n.pb-48 {\n    padding-bottom: 3rem;\n}\n.pl-2 {\n    padding-left: .125rem;\n}\n.pl-4 {\n    padding-left: .25rem;\n}\n.pl-8 {\n    padding-left: .5rem;\n}\n.pl-16 {\n    padding-left: 1rem;\n}\n.pl-20 {\n    padding-left: 1.25rem;\n}\n.pl-24 {\n    padding-left: 1.5rem;\n}\n.pl-30 {\n    padding-left: 1.875rem;\n}\n.pl-32 {\n    padding-left: 2rem;\n}\n.pl-34 {\n    padding-left: 2.125rem;\n}\n.pl-36 {\n    padding-left: 2.25rem;\n}\n.pl-46 {\n    padding-left: 2.875rem;\n}\n.pl-48 {\n    padding-left: 3rem;\n}\n.pl-50 {\n    padding-left: 3.125rem;\n}\n.pl-100 {\n    padding-left: 6.25rem;\n}\n.pl-150 {\n    padding-left: 9.375rem;\n}\n.pl-200 {\n    padding-left: 12.5rem;\n}\n.pl-250 {\n    padding-left: 15.625rem;\n}\n.pl-64 {\n    padding-left: 4rem;\n}\n.pl-64--reset {\n    padding-left: 4rem;\n}\n.pl-92 {\n    padding-left: 5.75rem;\n}\n.pl-109 {\n    padding-left: 6.8125rem;\n}\n.pl-350 {\n    padding-left: 21.875rem;\n}\n.pl-500 {\n    padding-left: 31.25rem;\n}\n.pr-2 {\n    padding-right: .125rem;\n}\n.pr-4 {\n    padding-right: .25rem;\n}\n.pr-8 {\n    padding-right: .5rem;\n}\n.pr-16 {\n    padding-right: 1rem;\n}\n.pt-8{\n    padding-top: .5rem;\n}\n.pt-16{\n    padding-top: 1rem;\n}\n.pt-18{\n    padding-top: 1.125rem;\n}\n.pt-48{\n    padding-top: 3rem;\n}\n.pt-52{\n    padding-top: 3.25rem;\n}\n.pt-64{\n    padding-top: 4rem;\n}\n.pt-72{\n    padding-top: 4.5rem;\n}\n.pt-76{\n    padding-top: 4.75rem;\n}\n.regular, .normal {\n    font-weight: normal;\n}\n.bold {\n    font-weight: bold;;\n}\n.background-beige {\n    background-color: #beaf98;\n}\n.dot {\n    height: 1.5625rem;\n    width: 1.5625rem;\n    border-radius: 50%;\n    display: inline-block;\n  }\n.red {\n    color: #CD5C5C;\n}\n.black {\n    color: black;\n}\n.green {\n    color: green;\n}\n.indianRed{\n    background-color: indianRed;\n}\n.seaGreen {\n    background-color: darkseagreen;\n}\n.lightCoral {\n    background-color: lightcoral;\n}\n.mediumPurple {\n    background-color: mediumpurple;\n}\n.background-red {\n    background-color: #CD5C5C;\n}\n.background-gray {\n    background-color: #BEBEBE;\n}\n.background-black {\n    background-color: #000000;\n}\n.gold {\n    background-color: gold;\n}\n.white {\n    color: white;\n}\n.w-100 {\n    width: 6.25rem;\n    min-width: 6.25rem;\n}\n.min-w-150 {\n    min-width: 9.375rem;\n}\n.min-w-150--reset {\n    min-width: 9.375rem;\n}\n.min-w-250 {\n    min-width: 15.625rem;\n}\n.min-w-350 {\n    min-width: 21.875rem;\n}\n.max-w-450 {\n    max-width: 28.125rem;\n}\n.max-w-600 {\n    max-width: 37.5rem;\n}\n.w-150 {\n    width: 9.375rem;\n}\n.w-250 {\n    width: 15.625rem;\n}\n.w-300 {\n    width: 18.75rem;\n}\n.w-350 {\n    width: 21.875rem;\n}\n.w-350--reset {\n    width: 21.875rem;\n}\n.w-450 {\n    width: 28.125rem;\n}\n.w-500 {\n    width: 31.25rem;\n}\n.w-600 {\n    width: 37.5rem;\n}\n.h-200 {\n    height: 12.5rem;\n}\n.text-align, .text-center {\n    text-align: center;\n}\n.text-left {\n    text-align: left;\n}\n.blue {\n    color: #0047AB;\n}\n.cardinal-red {\n    color: #C41E3A;\n}\n.brown {\n    color: #5b3e31;\n}\n.khaki {\n    color: darkgreen;\n}\n.darkblue {\n    color: darkblue;\n}\n.limegreen {\n    color: #32CD32;\n}\n.darkred {\n    color: darkred;\n}\n.br-beige {\n    border-right: .125rem solid #beaf98;\n}\n.bl-beige {\n    border-left: .125rem solid #beaf98;\n}\n.bt-beige {\n    border-top: .125rem solid #beaf98;\n}\n.bb-beige {\n    border-bottom: .125rem solid #beaf98;\n}\n.rectangle {\n    width: 25rem;\n    height: .625rem;\n}\n.flex, .show{\n    display: flex;\n}\n.float {\n    float: right;\n}\n.pull-up{\n    margin-top: -1.25rem;\n}\n.pull-left{\n    margin-left: -7.5rem;\n}\n.pull-left-pull{\n    margin-left: -7.5rem;\n}\n.pull-left-24{\n    margin-left: -1.5rem !important;\n}\n.moveAndColor {\n    -webkit-animation: moveAndColor 1s linear;\n            animation: moveAndColor 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(13.125rem);\n    }\n}\n@keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(13.125rem);\n    }\n}\n@-webkit-keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.1875rem);\n    }\n}\n@keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.1875rem);\n    }\n}\n@-webkit-keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(4.6875rem);\n    }\n}\n@keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(4.6875rem);\n    }\n}\n.show-fadeIn{\n    -webkit-animation: show-fadeIn 2s linear;\n            animation: show-fadeIn 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.show-slow-fadeIn{\n    -webkit-animation: show-slow-fadeIn 2s linear;\n            animation: show-slow-fadeIn 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.commit-fadeIn-1 {\n    -webkit-animation: commit-fadeIn-1 1s linear;\n            animation: commit-fadeIn-1 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.commit-fadeIn-2 {\n    -webkit-animation: commit-fadeIn-2 2s linear;\n            animation: commit-fadeIn-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.commit-fadeIn-3 {\n    -webkit-animation: commit-fadeIn-3 3s linear;\n            animation: commit-fadeIn-3 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move{\n    -webkit-animation: move 1s linear;\n            animation: move 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n\n}\n.move-image {\n    -webkit-animation: move-image 1s linear;\n            animation: move-image 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left {\n    -webkit-animation: move-left .75s linear;\n            animation: move-left .75s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left-from-working {\n    -webkit-animation: move-left-from-working 1s linear;\n            animation: move-left-from-working 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left-from-index {\n    -webkit-animation: move-left-from-index 1s linear;\n            animation: move-left-from-index 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left-from-index-2 {\n    -webkit-animation: move-left-from-index-2 1s linear;\n            animation: move-left-from-index-2 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-right {\n    -webkit-animation: move-right 1s linear;\n            animation: move-right 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-right-pull {\n    -webkit-animation: move-right-pull 1s linear;\n            animation: move-right-pull 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up {\n    -webkit-animation: move-up 1.3s linear;\n            animation: move-up 1.3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up-pull {\n    -webkit-animation: move-up-pull 1.5s linear;\n            animation: move-up-pull 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up--push {\n    -webkit-animation: move-up--push 1.5s linear;\n            animation: move-up--push 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up-fast {\n    -webkit-animation: move-up-fast .5s linear;\n            animation: move-up-fast .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-fast {\n    -webkit-animation: move-down-fast 2s linear;\n            animation: move-down-fast 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-one {\n    -webkit-animation: move-down-one .5s linear;\n            animation: move-down-one .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-two {\n    -webkit-animation: move-down-two .5s linear;\n            animation: move-down-two .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-three {\n    -webkit-animation: move-down-three .5s linear;\n            animation: move-down-three .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.hide{\n    display: none;\n}\nul {\n    list-style-type: none;\n    margin: 1.875rem 1.875rem 0 0;\n    padding: 0;\n}\nli {\n    padding: .9375rem;\n    width: 100%;\n    background: #f1f1f1;\n    margin-bottom: .125rem;\n    font-weight: bold;\n}\n.align-center {\n    align-items: center;\n}\n.align-left {\n    align-items: flex-start;\n}\n.align-right {\n    align-items: flex-end;\n}\n.justify-center {\n    justify-content: center;\n}\n.direction-column {\n    flex-direction: column;\n}\n.pb-8 {\n    padding-bottom: .5rem;\n}\n.pb-16 {\n    padding-bottom: 1rem;\n}\n.pb-24 {\n    padding-bottom: 1.5rem;\n}\n.pb-28 {\n    padding-bottom: 1.75rem;\n}\n.pb-32 {\n    padding-bottom: 2rem;\n}\n.pb-42 {\n    padding-bottom: 2.625rem;\n}\n.pt-32 {\n    padding-top: 2rem;\n}\n.pt-54 {\n    padding-top: 3.375rem;\n}\n.pt-64 {\n    padding-top: 4rem;\n}\n.pt-100 {\n    padding-top: 6.25rem;\n}\n.pt-4 {\n    padding-top: .25rem;\n}\n.pr-8{\n    padding-right: .5rem;\n}\n.pr-16 {\n    padding-right: 1rem;\n}\n.pr-24 {\n    padding-right: 1.5rem;\n}\n.pr-32 {\n    padding-right: 2rem;\n}\n.pr-48 {\n    padding-right: 3rem;\n}\n.pr-64 {\n    padding-right: 4rem;\n}\n.w-quarter {\n    width: 25%;\n}\n.w-half {\n    width: 50%;\n}\n.w-full {\n    width: 100%;\n}\n.order-1 {\n    order: 1;\n}\n@-webkit-keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(8.75rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(8.75rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@-webkit-keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@-webkit-keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@-webkit-keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@-webkit-keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n/* desktop only css  */\n@media only screen and (min-device-width: 60rem) {\n    .font-size-change {\n        font-size: 2.25rem;\n    }\n    .flex-direction-change {\n        flex-direction: row;\n    }\n    .pull-up-image{\n        margin-top: -11.125rem;\n    }\n    .pv-change {\n        padding-bottom: 2rem;\n        padding-top: 2rem;\n    }\n    .image-size-icon {\n        width: 3.125rem;\n    }\n    .image-size {\n        width: 9.357rem;\n    }\n\n    .image-size--fetch {\n        width: 9.357rem;\n    }\n    .pt-change {\n        padding-top: 2rem;\n    }\n    .pt-change--clone {\n        padding-top: 2rem;\n    }\n    .pt-change--commit {\n        padding-top: 2rem;\n    }\n    .pb-change {\n        padding-bottom: 2rem;\n    }\n\n    .index_commit {\n        padding-top: 3.25rem;\n    }\n    .order-switch-0 {\n        order: 2;\n    }\n\n    .order-switch-2 {\n        order: 0;\n    }\n\n    .order-switch-stash {\n        order: -1;\n    }\n    @-webkit-keyframes move {\n        0% {\n            transform: translateX(0);\n        }\n        50% {\n            transform: translateX(4.53125rem);\n        }\n        100% {\n            transform: translateX(9.875rem);\n        }\n    }\n    @keyframes move {\n        0% {\n            transform: translateX(0);\n        }\n        50% {\n            transform: translateX(4.53125rem);\n        }\n        100% {\n            transform: translateX(9.875rem);\n        }\n    } \n\n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    } \n\n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.4375rem);\n        }\n    } \n    @keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.4375rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 1.25rem);\n        }\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 1.25rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n\n\n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n\n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n\n    @-webkit-keyframes move-up--push {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @keyframes move-up--push {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-fast {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @keyframes move-up-fast {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-fast {\n        0% {\n            transform: translateY(0);\n        }\n        50% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(4.6875rem);\n        }\n    } \n\n    @keyframes move-down-fast {\n        0% {\n            transform: translateY(0);\n        }\n        50% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(4.6875rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.53rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.06rem);\n            color: black;\n        }\n    } \n\n    @keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.53rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.06rem);\n            color: black;\n        }\n    } \n}\n/* mobile landscape css  */\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .hide-in-landscape{\n        display: none;\n    }\n\n    .pl-landscape-clone{\n        padding-left: 1.375rem;\n    }\n\n    .font-16-14 {\n        font-size: 14px;\n    }\n\n    .pl-change-status {\n        padding-left: 6rem;\n    }\n\n    .font-change-14-16 {\n        font-size: .875rem;\n    }\n\n    .change-direction-stash {\n        flex-direction: row;\n    }\n\n    .pull-up-in-push {\n        margin-top: -2.81rem;\n    }\n\n    .pt-32-in-portrait {\n        padding-top: 0rem;\n    }\n\n    .pv-change {\n        padding-bottom: .5rem;\n        padding-top: .5rem;\n    }\n    .pull-up-fetch {\n        margin-top: -4.375rem;\n    }\n\n    .pt-change-pull {\n        padding-top: .5rem;\n    }\n    .pt-change-pull-2 {\n        padding-top: 0rem;\n    }\n\n    .margin-in-landscape {\n        margin-top: -1.25rem;\n    }\n\n    .mt-change-pull-0 {\n        margin-top: -.625rem;\n    }\n\n    .mt-change-pull {\n        margin-top: -1.875rem;\n    }\n    .mt-change-pull-2 {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-2-mac {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-2-pc {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-4-mac {\n        margin-top: -1.75rem;\n    }\n    .mt-change-pull-4-pc {\n        margin-top: -1.75rem;\n    }\n\n    .mt-change-pull-5 {\n        margin-top: -1.25rem;\n    }\n    .mt-change-pull-6 {\n        margin-top: -1.25rem;\n    }\n\n    .pb-change-16-32 {\n        padding-bottom: 1rem;\n        margin-top: -.625rem;\n        }\n\n    .padding-landscape-commit-t{\n        padding-top: 2rem;\n    }\n    .padding-landscape-commit-b{\n        padding-bottom: .5rem;\n    }\n    .order-switch-0 {\n        order: 2;\n    }\n\n    .pt-change--clone {\n        padding-top: 1rem;\n    }\n    .pt-change--commit {\n        padding-top: 1rem;\n    }\n    .image-size {\n        width: 9.357rem;\n    }\n\n    .pull-up-image{\n        margin-top: -3.625rem;\n    }\n\n    .image-size--fetch {\n        width: 3.125rem;\n        height: 3.125rem;\n    }\n\n    .flex-direction-change {\n        flex-direction: row;\n    }\n    .pl-change {\n        padding-left: 3.125rem;\n    }\n    \n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    }\n    \n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.44rem);\n        }\n    } \n\n    @keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.44rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-17.94, 1.375rem);\n        }\n\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-17.94, 1.375rem);\n        }\n\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-7.19rem, -.1875rem);\n        }\n    } \n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-7.19rem, -.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n\n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.25rem);\n        }\n    } \n\n\n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.25rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.84rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.69rem);\n            color: black;\n        }\n    } \n\n    @keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.84rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.69rem);\n            color: black;\n        }\n    } \n    @-webkit-keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        100% {\n            transform: translate(9.375rem, .3125rem)\n        }\n    } \n    @keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        100% {\n            transform: translate(9.375rem, .3125rem)\n        }\n    }\n}\n/* mobile portrait css */\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .image-size-icon {\n        width: 1.875rem;\n    }\n    .image-size {\n        width: 6.2rem;\n    }\n\n    .font-16-14 {\n        font-size: 14px;\n    }\n    .font-size-change {\n        font-size: 1.375rem;\n    }\n\n    .pv-change {\n        padding-bottom: 1rem;\n        padding-top: .5rem;\n    }\n    .pl-change {\n        padding-left: 0rem;\n    }\n    .change-direction {\n        flex-direction: column;\n    }\n    .change-direction-stash {\n        flex-direction: column;\n    }\n\n    .height-change {\n        min-height: 6rem\n    }\n\n    .pt-change {\n        padding-top: 1rem;\n    }\n    .pt-change--clone {\n        padding-top: 1rem;\n    }\n    .pt-change--commit {\n        padding-top: 1rem;\n    }\n\n    .pb-change {\n        padding-bottom: 1rem;\n    }\n\n    .bl-change {\n        border-left: .125rem solid #beaf98;\n    }\n\n    .index_commit {\n        padding-top: 1.875rem;\n    }\n\n    .order-switch-0 {\n        order: 0;\n    }\n    .order-switch-2 {\n        order: 2;\n    }\n\n    .order-switch-stash {\n        order: 3;\n    }\n    \n    \n    .flex-direction-change {\n        flex-direction: column;\n    }\n\n    .pl-64 {\n        padding-left: 0rem;\n    }\n\n    .w-350--reset {\n        width: 100%;\n    }\n\n    .min-w-150--reset {\n        min-width: 3.125rem;\n    }\n    .w-40--reset {\n        width: 40%;\n    }\n    .pl-92-except-portrait{\n        padding-left: 0rem;\n    }\n    .bl-stash {\n        border-left: .125rem solid #beaf98;\n    }\n    .font-change-14-16 {\n        font-size: .875rem;\n    }\n    \n\n    .pull-up-in-push-2 {\n        margin-top: 5rem;\n    }\n    \n\n    .pt-32-desktop-push {\n        padding-top: 2rem;\n    }\n    \n\n    .mt-in-portrait {\n        margin-top: -4.6875rem;\n    }\n\n    .mt-in-portrait-2 {\n        margin-top: -2.5rem;\n    }\n\n    .hide-in-portrait {\n        display: none;\n    }\n\n    .pt-32-in-portrait {\n        padding-top: 2rem;\n    }\n\n    \n    .pr-64-except-portrait {\n        padding-right: 0rem;\n    }\n    .h-change-28-48 {\n        height: 3rem;\n    }\n    .pull-up-image{\n        margin-top: -3.75rem;\n    }\n\n    .image-size--fetch {\n        width: 3.125rem;\n        height: 3.125rem;\n    }\n\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateY(0);\n            color: green;\n        }\n        50% {\n            transform: translateU(-3.125rem);\n            color: green;\n        }\n        100% {\n            transform: translateY(-6.5625rem);\n            color: black;\n        }\n    }\n\n    @keyframes moveAndColor {\n        0% {\n            transform: translateY(0);\n            color: green;\n        }\n        50% {\n            transform: translateU(-3.125rem);\n            color: green;\n        }\n        100% {\n            transform: translateY(-6.5625rem);\n            color: black;\n        }\n    } \n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait)  {\n \n    @-webkit-keyframes move-image {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform:  translateX(7.5rem);\n        }\n    }\n \n    @keyframes move-image {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform:  translateX(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes moveToWorkingArea {\n        0% {\n            opacity: 0;\n            transform: translateX(0);\n        }\n        70% {\n            opacity: 0.3;\n            transform: translateX(0rem);\n        }\n        100% {\n            opacity: 1;\n            transform: translateX(-4.68rem);\n        }\n    } \n\n    @keyframes moveToWorkingArea {\n        0% {\n            opacity: 0;\n            transform: translateX(0);\n        }\n        70% {\n            opacity: 0.3;\n            transform: translateX(0rem);\n        }\n        100% {\n            opacity: 1;\n            transform: translateX(-4.68rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.94rem);\n        }\n    } \n\n    @keyframes move-left-from-working {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.94rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13.3125rem);\n        }\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13.3125rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13rem);\n        }\n    } \n\n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-7.19rem);\n        }\n    } \n\n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-7.19rem);\n        }\n    } \n\n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    } \n\n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.0625rem);\n        }\n    } \n\n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.0625rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.125rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.125rem);\n        }\n    } \n\n    @-webkit-keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        50% {\n            transform: translateY(-3.125rem);\n        }\n        100% {\n            transform: translateY(-6.75rem)\n        }\n    } \n\n    @keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        50% {\n            transform: translateY(-3.125rem);\n        }\n        100% {\n            transform: translateY(-6.75rem)\n        }\n    } \n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0RBQW9EO0FBQ3hEO0FBQ0E7O0lBRUkscUJBQXFCLEVBQUUsbUJBQW1CO0lBQzFDLFVBQVUsRUFBRSxtQkFBbUI7SUFDL0IsU0FBUyxFQUFFLG1CQUFtQjtFQUNoQztBQUNBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsOEJBQThCO0VBQ2hDO0FBRUY7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4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ZXNDb250ZW50IjpbIlxuLnZpc0dpdEFwcCB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cbjwhLS1zbmFja2Jhci0tPlxudWwuY3VzdG9tIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8qIFJlbW92ZSBidWxsZXRzICovXG4gICAgcGFkZGluZzogMDsgLyogUmVtb3ZlIHBhZGRpbmcgKi9cbiAgICBtYXJnaW46IDA7IC8qIFJlbW92ZSBtYXJnaW5zICovXG4gIH1cbiAgdWwgbGkge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIC5jdXN0b20tc3R5bGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMTgwNztcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9ICBcblxuLmZvbnQtY2hhbmdlLTE0LTE2IHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5mb250LTE2LTE0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi53LTQwLS1yZXNldCB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbn1cblxuLnBsLWNoYW5nZS1zdGF0dXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNoYW5nZS1kaXJlY3Rpb24tc3Rhc2gge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wbC05Mi1leGNlcHQtcG9ydHJhaXR7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjg3NXJlbTtcbn1cblxuLnByLTY0LWV4Y2VwdC1wb3J0cmFpdCB7XG4gICAgcGFkZGluZy1yaWdodDogMHJlbTtcbn1cblxuLnB0LTMyLWluLXBvcnRyYWl0IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLmltYWdlLXNpemUtaWNvbiB7XG4gICAgd2lkdGg6IDMuMTI1cmVtO1xufVxuXG4uZm9udC1zaXplLWNoYW5nZSB7XG4gICAgZm9udC1zaXplOiAxLjM3NXJlbTtcbn1cblxuXG4ucGwtY2hhbmdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xufVxuXG4ucGItY2hhbmdlLTE2LTMyIHtcbiBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLmgtY2hhbmdlLTI4LTQ4IHtcbiAgICBoZWlnaHQ6IDEuNzVyZW07XG59XG5cbi5mbGV4LWRpcmVjdGlvbi1jaGFuZ2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZm9udC1zaXplLTEyIHtcbiAgICBmb250LXNpemU6IC43NXJlbTtcbn1cblxuLm1hdC1mYWIgLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgbGluZS1oZWlnaHQ6IC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4uaXRhbGljcyB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uZm9udC1zaXplLTI0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmZvbnQtc2l6ZS0zMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9udC1zaXplLTQ4IHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG4uaC0yOCB7XG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xufVxuXG4uaC0zOCB7XG4gICAgaGVpZ2h0OiAyLjM3NXJlbTtcbn1cblxuLmgtNDgge1xuICAgIGhlaWdodDogM3JlbTtcbn1cbi5oLTU4IHtcbiAgICBoZWlnaHQ6IDMuNjI1cmVtO1xufVxuLmgtNjkge1xuICAgIGhlaWdodDogNC4zMTI1cmVtO1xufVxuLm1yLTIge1xuICAgIG1hcmdpbi1yaWdodDogLjEyNXJlbTtcbn1cbi5tci00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcbn1cbi5tbC0yIHtcbiAgICBtYXJnaW4tbGVmdDogLjEyNXJlbTtcbn1cbi5tbC00IHtcbiAgICBtYXJnaW4tbGVmdDogLjI1cmVtO1xufVxuLm1sLTYge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjM3NXJlbTtcbn1cbi5tbC04IHtcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XG59XG4ubWwtc3dpdGNoLS1yZXNldCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNjI1cmVtO1xufVxuLm10LTIge1xuICAgIG1hcmdpbi10b3A6IC4xMjVyZW07XG59XG4ubXQtNCB7XG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xufVxuLm10LTgge1xuICAgIG1hcmdpbi10b3A6IC41cmVtO1xufVxuLnBiLTM2IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi4yNXJlbTtcbn1cbi5wYi00OCB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG59XG4ucGwtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAuMTI1cmVtO1xufVxuLnBsLTQge1xuICAgIHBhZGRpbmctbGVmdDogLjI1cmVtO1xufVxuLnBsLTgge1xuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XG59XG4ucGwtMTYge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbi5wbC0yMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xufVxuLnBsLTI0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbn1cbi5wbC0zMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjg3NXJlbTtcbn1cbi5wbC0zMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuLnBsLTM0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMTI1cmVtO1xufVxuLnBsLTM2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMjVyZW07XG59XG4ucGwtNDYge1xuICAgIHBhZGRpbmctbGVmdDogMi44NzVyZW07XG59XG4ucGwtNDgge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbn1cbi5wbC01MCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjEyNXJlbTtcbn1cbi5wbC0xMDAge1xuICAgIHBhZGRpbmctbGVmdDogNi4yNXJlbTtcbn1cbi5wbC0xNTAge1xuICAgIHBhZGRpbmctbGVmdDogOS4zNzVyZW07XG59XG4ucGwtMjAwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEyLjVyZW07XG59XG4ucGwtMjUwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1LjYyNXJlbTtcbn1cbi5wbC02NCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xufVxuLnBsLTY0LS1yZXNldCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xufVxuLnBsLTkyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUuNzVyZW07XG59XG4ucGwtMTA5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYuODEyNXJlbTtcbn1cbi5wbC0zNTAge1xuICAgIHBhZGRpbmctbGVmdDogMjEuODc1cmVtO1xufVxuLnBsLTUwMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMS4yNXJlbTtcbn1cbi5wci0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuMTI1cmVtO1xufVxuLnByLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IC4yNXJlbTtcbn1cbi5wci04IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbn1cbi5wci0xNiB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLnB0LTh7XG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xufVxuLnB0LTE2e1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4ucHQtMTh7XG4gICAgcGFkZGluZy10b3A6IDEuMTI1cmVtO1xufVxuLnB0LTQ4e1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xufVxuXG4ucHQtNTJ7XG4gICAgcGFkZGluZy10b3A6IDMuMjVyZW07XG59XG5cbi5wdC02NHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cbi5wdC03MntcbiAgICBwYWRkaW5nLXRvcDogNC41cmVtO1xufVxuLnB0LTc2e1xuICAgIHBhZGRpbmctdG9wOiA0Ljc1cmVtO1xufVxuXG4ucmVndWxhciwgLm5vcm1hbCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOztcbn1cbi5iYWNrZ3JvdW5kLWJlaWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVhZjk4O1xufVxuXG4uZG90IHtcbiAgICBoZWlnaHQ6IDEuNTYyNXJlbTtcbiAgICB3aWR0aDogMS41NjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuLnJlZCB7XG4gICAgY29sb3I6ICNDRDVDNUM7XG59XG5cbi5ibGFjayB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uZ3JlZW4ge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuLmluZGlhblJlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5SZWQ7XG59XG5cbi5zZWFHcmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xufVxuLmxpZ2h0Q29yYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG59XG4ubWVkaXVtUHVycGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1wdXJwbGU7XG59XG5cbi5iYWNrZ3JvdW5kLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NENUM1Qztcbn1cbi5iYWNrZ3JvdW5kLWdyYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCRUJFQkU7XG59XG4uYmFja2dyb3VuZC1ibGFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbi5nb2xkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xufVxuXG5cbi53aGl0ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnctMTAwIHtcbiAgICB3aWR0aDogNi4yNXJlbTtcbiAgICBtaW4td2lkdGg6IDYuMjVyZW07XG59XG5cbi5taW4tdy0xNTAge1xuICAgIG1pbi13aWR0aDogOS4zNzVyZW07XG59XG4ubWluLXctMTUwLS1yZXNldCB7XG4gICAgbWluLXdpZHRoOiA5LjM3NXJlbTtcbn1cbi5taW4tdy0yNTAge1xuICAgIG1pbi13aWR0aDogMTUuNjI1cmVtO1xufVxuLm1pbi13LTM1MCB7XG4gICAgbWluLXdpZHRoOiAyMS44NzVyZW07XG59XG5cbi5tYXgtdy00NTAge1xuICAgIG1heC13aWR0aDogMjguMTI1cmVtO1xufVxuLm1heC13LTYwMCB7XG4gICAgbWF4LXdpZHRoOiAzNy41cmVtO1xufVxuLnctMTUwIHtcbiAgICB3aWR0aDogOS4zNzVyZW07XG59XG4udy0yNTAge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG59XG5cbi53LTMwMCB7XG4gICAgd2lkdGg6IDE4Ljc1cmVtO1xufVxuXG4udy0zNTAge1xuICAgIHdpZHRoOiAyMS44NzVyZW07XG59XG4udy0zNTAtLXJlc2V0IHtcbiAgICB3aWR0aDogMjEuODc1cmVtO1xufVxuXG4udy00NTAge1xuICAgIHdpZHRoOiAyOC4xMjVyZW07XG59XG5cbi53LTUwMCB7XG4gICAgd2lkdGg6IDMxLjI1cmVtO1xufVxuXG4udy02MDAge1xuICAgIHdpZHRoOiAzNy41cmVtO1xufVxuXG4uaC0yMDAge1xuICAgIGhlaWdodDogMTIuNXJlbTtcbn1cblxuLnRleHQtYWxpZ24sIC50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJsdWUge1xuICAgIGNvbG9yOiAjMDA0N0FCO1xufVxuXG4uY2FyZGluYWwtcmVkIHtcbiAgICBjb2xvcjogI0M0MUUzQTtcbn1cblxuLmJyb3duIHtcbiAgICBjb2xvcjogIzViM2UzMTtcbn1cblxuLmtoYWtpIHtcbiAgICBjb2xvcjogZGFya2dyZWVuO1xufVxuXG4uZGFya2JsdWUge1xuICAgIGNvbG9yOiBkYXJrYmx1ZTtcbn1cblxuLmxpbWVncmVlbiB7XG4gICAgY29sb3I6ICMzMkNEMzI7XG59XG5cbi5kYXJrcmVkIHtcbiAgICBjb2xvcjogZGFya3JlZDtcbn1cblxuLmJyLWJlaWdlIHtcbiAgICBib3JkZXItcmlnaHQ6IC4xMjVyZW0gc29saWQgI2JlYWY5ODtcbn1cbi5ibC1iZWlnZSB7XG4gICAgYm9yZGVyLWxlZnQ6IC4xMjVyZW0gc29saWQgI2JlYWY5ODtcbn1cbi5idC1iZWlnZSB7XG4gICAgYm9yZGVyLXRvcDogLjEyNXJlbSBzb2xpZCAjYmVhZjk4O1xufVxuLmJiLWJlaWdlIHtcbiAgICBib3JkZXItYm90dG9tOiAuMTI1cmVtIHNvbGlkICNiZWFmOTg7XG59XG5cbi5yZWN0YW5nbGUge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgICBoZWlnaHQ6IC42MjVyZW07XG59XG4uZmxleCwgLnNob3d7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsb2F0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucHVsbC11cHtcbiAgICBtYXJnaW4tdG9wOiAtMS4yNXJlbTtcbn1cblxuXG4ucHVsbC1sZWZ0e1xuICAgIG1hcmdpbi1sZWZ0OiAtNy41cmVtO1xufVxuLnB1bGwtbGVmdC1wdWxse1xuICAgIG1hcmdpbi1sZWZ0OiAtNy41cmVtO1xufVxuXG4ucHVsbC1sZWZ0LTI0e1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tb3ZlQW5kQ29sb3Ige1xuICAgIGFuaW1hdGlvbjogbW92ZUFuZENvbG9yIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBtb3ZlLWltYWdlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMy4xMjVyZW0pO1xuICAgIH1cbn0gXG5Aa2V5ZnJhbWVzIG1vdmUtdXAtZmFzdCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMTg3NXJlbSk7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBtb3ZlLWRvd24tZmFzdCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0LjY4NzVyZW0pO1xuICAgIH1cbn0gXG5cbi5zaG93LWZhZGVJbntcbiAgICBhbmltYXRpb246IHNob3ctZmFkZUluIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLnNob3ctc2xvdy1mYWRlSW57XG4gICAgYW5pbWF0aW9uOiBzaG93LXNsb3ctZmFkZUluIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmNvbW1pdC1mYWRlSW4tMSB7XG4gICAgYW5pbWF0aW9uOiBjb21taXQtZmFkZUluLTEgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLmNvbW1pdC1mYWRlSW4tMiB7XG4gICAgYW5pbWF0aW9uOiBjb21taXQtZmFkZUluLTIgMnMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uY29tbWl0LWZhZGVJbi0zIHtcbiAgICBhbmltYXRpb246IGNvbW1pdC1mYWRlSW4tMyAzcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3Zle1xuICAgIGFuaW1hdGlvbjogbW92ZSAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cbn1cblxuLm1vdmUtaW1hZ2Uge1xuICAgIGFuaW1hdGlvbjogbW92ZS1pbWFnZSAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4ubW92ZS1sZWZ0IHtcbiAgICBhbmltYXRpb246IG1vdmUtbGVmdCAuNzVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtbGVmdC1mcm9tLXdvcmtpbmcge1xuICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LWZyb20td29ya2luZyAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWxlZnQtZnJvbS1pbmRleCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWxlZnQtZnJvbS1pbmRleCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4ubW92ZS1sZWZ0LWZyb20taW5kZXgtMiB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWxlZnQtZnJvbS1pbmRleC0yIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtcmlnaHQge1xuICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXJpZ2h0LXB1bGwge1xuICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1wdWxsIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuXG4ubW92ZS11cCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXVwIDEuM3MgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS11cC1wdWxsIHtcbiAgICBhbmltYXRpb246IG1vdmUtdXAtcHVsbCAxLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtdXAtLXB1c2gge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cC0tcHVzaCAxLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtdXAtZmFzdCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXVwLWZhc3QgLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtZG93bi1mYXN0IHtcbiAgICBhbmltYXRpb246IG1vdmUtZG93bi1mYXN0IDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtZG93bi1vbmUge1xuICAgIGFuaW1hdGlvbjogbW92ZS1kb3duLW9uZSAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1kb3duLXR3byB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWRvd24tdHdvIC41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWRvd24tdGhyZWUge1xuICAgIGFuaW1hdGlvbjogbW92ZS1kb3duLXRocmVlIC41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5oaWRle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAxLjg3NXJlbSAxLjg3NXJlbSAwIDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxubGkge1xuICAgIHBhZGRpbmc6IC45Mzc1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgbWFyZ2luLWJvdHRvbTogLjEyNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFsaWduLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hbGlnbi1sZWZ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5hbGlnbi1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uanVzdGlmeS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGlyZWN0aW9uLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBiLTgge1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbn1cbi5wYi0xNiB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG4ucGItMjQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG59XG5cbi5wYi0yOCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG59XG4ucGItMzIge1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4ucGItNDIge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjYyNXJlbTtcbn1cbi5wdC0zMiB7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5wdC01NCB7XG4gICAgcGFkZGluZy10b3A6IDMuMzc1cmVtO1xufVxuXG4ucHQtNjQge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xufVxuXG4ucHQtMTAwIHtcbiAgICBwYWRkaW5nLXRvcDogNi4yNXJlbTtcbn1cblxuLnB0LTQge1xuICAgIHBhZGRpbmctdG9wOiAuMjVyZW07XG59XG5cbi5wci04e1xuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xufVxuLnByLTE2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG4ucHItMjQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn1cbi5wci0zMiB7XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cblxuLnByLTQ4IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xufVxuLnByLTY0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xufVxuLnctcXVhcnRlciB7XG4gICAgd2lkdGg6IDI1JTtcbn1cblxuLnctaGFsZiB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnctZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcmRlci0xIHtcbiAgICBvcmRlcjogMTtcbn1cblxuQGtleWZyYW1lcyBjb21taXQtZmFkZUluLTEge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDguNzVyZW0pO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgY29tbWl0LWZhZGVJbi0yIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHJlbSk7XG4gICAgfVxuICAgIDMyJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHJlbSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBjb21taXQtZmFkZUluLTMge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDExLjI1cmVtKTtcbiAgICB9XG4gICAgNDIlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDExLjI1cmVtKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59IFxuXG5cbkBrZXlmcmFtZXMgc2hvdy1mYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufSBcbkBrZXlmcmFtZXMgc2hvdy1zbG93LWZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59IFxuXG4vKiBkZXNrdG9wIG9ubHkgY3NzICAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjByZW0pIHtcbiAgICAuZm9udC1zaXplLWNoYW5nZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICB9XG4gICAgLmZsZXgtZGlyZWN0aW9uLWNoYW5nZSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgIC5wdWxsLXVwLWltYWdle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTEuMTI1cmVtO1xuICAgIH1cbiAgICAucHYtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDMuMTI1cmVtO1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZSB7XG4gICAgICAgIHdpZHRoOiA5LjM1N3JlbTtcbiAgICB9XG5cbiAgICAuaW1hZ2Utc2l6ZS0tZmV0Y2gge1xuICAgICAgICB3aWR0aDogOS4zNTdyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLnB0LWNoYW5nZS0tY2xvbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLnB0LWNoYW5nZS0tY29tbWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5wYi1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAuaW5kZXhfY29tbWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMuMjVyZW07XG4gICAgfVxuICAgIC5vcmRlci1zd2l0Y2gtMCB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cblxuICAgIC5vcmRlci1zd2l0Y2gtMiB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgIH1cblxuICAgIC5vcmRlci1zd2l0Y2gtc3Rhc2gge1xuICAgICAgICBvcmRlcjogLTE7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgbW92ZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQuNTMxMjVyZW0pO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkuODc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTMuNDM3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20td29ya2luZyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOC40Mzc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNy45NHJlbSwgMS4yNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20taW5kZXgtMiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNy45NHJlbSwgMi41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMTg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS43NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLS1wdXNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMTg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLWZhc3Qge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMTg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tZmFzdCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQuNjg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tb25lIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdHdvIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi10aHJlZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3LjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZUFuZENvbG9yIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNC41M3JlbSk7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOS4wNnJlbSk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG4vKiBtb2JpbGUgbGFuZHNjYXBlIGNzcyAgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgIHtcbiAgICAuaGlkZS1pbi1sYW5kc2NhcGV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBsLWxhbmRzY2FwZS1jbG9uZXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjM3NXJlbTtcbiAgICB9XG5cbiAgICAuZm9udC0xNi0xNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAucGwtY2hhbmdlLXN0YXR1cyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNnJlbTtcbiAgICB9XG5cbiAgICAuZm9udC1jaGFuZ2UtMTQtMTYge1xuICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgfVxuXG4gICAgLmNoYW5nZS1kaXJlY3Rpb24tc3Rhc2gge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cblxuICAgIC5wdWxsLXVwLWluLXB1c2gge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMi44MXJlbTtcbiAgICB9XG5cbiAgICAucHQtMzItaW4tcG9ydHJhaXQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgICB9XG5cbiAgICAucHYtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgfVxuICAgIC5wdWxsLXVwLWZldGNoIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTQuMzc1cmVtO1xuICAgIH1cblxuICAgIC5wdC1jaGFuZ2UtcHVsbCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICB9XG4gICAgLnB0LWNoYW5nZS1wdWxsLTIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcbiAgICB9XG5cbiAgICAubWFyZ2luLWluLWxhbmRzY2FwZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xuICAgIH1cblxuICAgIC5tdC1jaGFuZ2UtcHVsbC0wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLS42MjVyZW07XG4gICAgfVxuXG4gICAgLm10LWNoYW5nZS1wdWxsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuODc1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IC4xMjVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC0yLW1hYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC4xMjVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC0yLXBjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLjEyNXJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdWxsLTQtbWFjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuNzVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC00LXBjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuNzVyZW07XG4gICAgfVxuXG4gICAgLm10LWNoYW5nZS1wdWxsLTUge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMS4yNXJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdWxsLTYge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMS4yNXJlbTtcbiAgICB9XG5cbiAgICAucGItY2hhbmdlLTE2LTMyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNjI1cmVtO1xuICAgICAgICB9XG5cbiAgICAucGFkZGluZy1sYW5kc2NhcGUtY29tbWl0LXR7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbiAgICAucGFkZGluZy1sYW5kc2NhcGUtY29tbWl0LWJ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICB9XG4gICAgLm9yZGVyLXN3aXRjaC0wIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgfVxuXG4gICAgLnB0LWNoYW5nZS0tY2xvbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLnB0LWNoYW5nZS0tY29tbWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuICAgIC5pbWFnZS1zaXplIHtcbiAgICAgICAgd2lkdGg6IDkuMzU3cmVtO1xuICAgIH1cblxuICAgIC5wdWxsLXVwLWltYWdle1xuICAgICAgICBtYXJnaW4tdG9wOiAtMy42MjVyZW07XG4gICAgfVxuXG4gICAgLmltYWdlLXNpemUtLWZldGNoIHtcbiAgICAgICAgd2lkdGg6IDMuMTI1cmVtO1xuICAgICAgICBoZWlnaHQ6IDMuMTI1cmVtO1xuICAgIH1cblxuICAgIC5mbGV4LWRpcmVjdGlvbi1jaGFuZ2Uge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgICAucGwtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzLjEyNXJlbTtcbiAgICB9XG4gICAgXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tb25lIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdHdvIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi10aHJlZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3LjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20td29ya2luZyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOC40NHJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20taW5kZXgge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNy45NCwgMS4zNzVyZW0pO1xuICAgICAgICB9XG5cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20taW5kZXgtMiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNy45NHJlbSwgMi41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNy4xOXJlbSwgLS4xODc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNS42MjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtcHVsbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1LjYyNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi4yNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlQW5kQ29sb3Ige1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0Ljg0cmVtKTtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5LjY5cmVtKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5LjM3NXJlbSwgLjMxMjVyZW0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIG1vYmlsZSBwb3J0cmFpdCBjc3MgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5pbWFnZS1zaXplLWljb24ge1xuICAgICAgICB3aWR0aDogMS44NzVyZW07XG4gICAgfVxuICAgIC5pbWFnZS1zaXplIHtcbiAgICAgICAgd2lkdGg6IDYuMnJlbTtcbiAgICB9XG5cbiAgICAuZm9udC0xNi0xNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLmZvbnQtc2l6ZS1jaGFuZ2Uge1xuICAgICAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgIH1cblxuICAgIC5wdi1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIH1cbiAgICAucGwtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgIH1cbiAgICAuY2hhbmdlLWRpcmVjdGlvbiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5jaGFuZ2UtZGlyZWN0aW9uLXN0YXNoIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuaGVpZ2h0LWNoYW5nZSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDZyZW1cbiAgICB9XG5cbiAgICAucHQtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNsb25lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIH1cblxuICAgIC5wYi1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAuYmwtY2hhbmdlIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IC4xMjVyZW0gc29saWQgI2JlYWY5ODtcbiAgICB9XG5cbiAgICAuaW5kZXhfY29tbWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEuODc1cmVtO1xuICAgIH1cblxuICAgIC5vcmRlci1zd2l0Y2gtMCB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgIH1cbiAgICAub3JkZXItc3dpdGNoLTIge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLXN0YXNoIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5mbGV4LWRpcmVjdGlvbi1jaGFuZ2Uge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5wbC02NCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICB9XG5cbiAgICAudy0zNTAtLXJlc2V0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLm1pbi13LTE1MC0tcmVzZXQge1xuICAgICAgICBtaW4td2lkdGg6IDMuMTI1cmVtO1xuICAgIH1cbiAgICAudy00MC0tcmVzZXQge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgIH1cbiAgICAucGwtOTItZXhjZXB0LXBvcnRyYWl0e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuICAgIC5ibC1zdGFzaCB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAuMTI1cmVtIHNvbGlkICNiZWFmOTg7XG4gICAgfVxuICAgIC5mb250LWNoYW5nZS0xNC0xNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICB9XG4gICAgXG5cbiAgICAucHVsbC11cC1pbi1wdXNoLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIH1cbiAgICBcblxuICAgIC5wdC0zMi1kZXNrdG9wLXB1c2gge1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG4gICAgXG5cbiAgICAubXQtaW4tcG9ydHJhaXQge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNC42ODc1cmVtO1xuICAgIH1cblxuICAgIC5tdC1pbi1wb3J0cmFpdC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIuNXJlbTtcbiAgICB9XG5cbiAgICAuaGlkZS1pbi1wb3J0cmFpdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnB0LTMyLWluLXBvcnRyYWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgXG4gICAgLnByLTY0LWV4Y2VwdC1wb3J0cmFpdCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDByZW07XG4gICAgfVxuICAgIC5oLWNoYW5nZS0yOC00OCB7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICB9XG4gICAgLnB1bGwtdXAtaW1hZ2V7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zLjc1cmVtO1xuICAgIH1cblxuICAgIC5pbWFnZS1zaXplLS1mZXRjaCB7XG4gICAgICAgIHdpZHRoOiAzLjEyNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIG1vdmVBbmRDb2xvciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVVKC0zLjEyNXJlbSk7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYuNTYyNXJlbSk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG5cblxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkgIHtcbiBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtaW1hZ2Uge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKDcuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlVG9Xb3JraW5nQXJlYSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQuNjhyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLW9uZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXR3byB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdGhyZWUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLXdvcmtpbmcge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy45NHJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20taW5kZXgge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTMuMzEyNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20taW5kZXgtMiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3JlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTcuMTlyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1LjYyNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExLjJyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS11cCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjA2MjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS11cC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMTI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zLjEyNXJlbSk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYuNzVyZW0pXG4gICAgICAgIH1cbiAgICB9IFxuXG59XG5cbiJdfQ== */"

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

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"green align-center pchange-branch h-28 pl-16 pr-16\" >\n    <div *ngIf=\"!hideMessage\" [@myTrigger]=\"fadeIn\">\"git branch\" lists the branches. The asterisk (*) indicates the current branch.</div>  \n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeBranch()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git branch\"</button>\n    <div class=\"pr-16\"></div>\n    <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button>\n    <div class=\"pr-8\"></div>\n  </div>\n\n  <section class= \"flex direction-column pt-16 w-quarter align-left\" >\n    <div [ngClass]=\"{'green': i == '1'}\" class=\"pl-change pt-8 pb-8\" *ngFor=\"let branch of branches; let i = index\" [@myTrigger]=\"fadeIn\">{{branch}}</div>\n  </section>\n</div>\n\n"

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
        this.enableReload = false;
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
            _this.enableReload = true;
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

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"h-change-28-48 align-center \">\n    <div class=\"blue\" *ngIf=\"hideMessage2 && hideMessage3\">Example: The HEAD points to the branch \"main\"</div>\n    <div class=\"green\" *ngIf=\"!hideMessage2 && !hideMessage\">The HEAD points to the branch \"bug/25282\"</div>\n    <div class=\"green pl-32 pr-32 text-center\" *ngIf=\"!hideMessage3 && !hideMessage\">A new branch is created (a copy of\n      \"main\") and the HEAD points to it.</div>\n  </div>\n  <div class=\"flex pt-16\">\n    <div class=\"pr-8\"></div>\n    <mat-form-field class=\"w-full stash-field\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose an option</mat-label>\n      <mat-select [disabled]=\"disableOption\" (selectionChange)=\"selectCommand($event.value)\">\n        <mat-option *ngFor=\"let command of commands\" [value]=\"command.name\">{{command.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div class=\"pr-16\"></div>\n    <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button>\n  </div>\n  <section class=\"flex flex-direction-change align-center\">\n    <button *ngIf=\"chosenCommand === 'checkout an existing branch'\" [disabled]=\"!hideMessage\"\n      (click)=\"visualizeCheckout()\" class=\"w-300\" mat-raised-button color=\"warn\">Visualize \"git checkout\n      bug/25282\"</button>\n    <div class=\"pr-8 pb-8\"></div>\n    <button *ngIf=\"chosenCommand === 'create and checkout a new branch'\" [disabled]=\"!hideMessage\"\n      (click)=\"visualizeCheckoutNew()\" class=\"w-300\" mat-raised-button color=\"warn\">Visualize \"git checkout -b\n      version_2.0\"</button>\n    <div class=\"pr-8 pb-8\"></div>\n  </section>\n\n\n  <div class=\"flex direction-column\">\n    <div class=\"flex pr-2 pt-32 h-25 align-center\">\n        <div class=\"pr-4\" [ngClass]=\"{'hide': hideMessage2, 'fade-in-arrow-2': !hideMessage2}\">\n          <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n        </div>\n      <div class=\"pr-8\" [ngClass]=\"{'pl-28': hideMessage2}\">bug/25282</div>\n    </div>\n    <div class=\"flex h-25 align-center\">\n      <div class=\"pr-4\" [ngClass]=\"{ 'fade-out-arrow ': !hideMessage2, 'fade-out-arrow-2': !hideMessage3}\">\n        <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n      </div>\n      <div class=\"pr-8\">main</div>\n    </div>\n    <div class=\"flex pr-2 pl-20 h-27 align-center justify-center\">\n      <div class=\"pr-8\">pbi/25391</div>\n    </div>\n    <div class=\"flex pr-2 h-25 align-center justify-center\">\n      <div class=\"pr-4\" [ngClass]=\"{'hide': hideMessage3, 'fade-in-arrow-2': !hideMessage3}\">\n        <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n      </div>\n      <div class=\"pr-8\" [ngClass]=\"{'hide': hideMessage3, 'fade-in-version': !hideMessage3 }\">version_2.0</div>\n    </div>\n  </div>\n</div>"

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
        this.enableReload = false;
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
            _this.enableReload = true;
        }, 2000);
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
            _this.enableReload = true;
        }, 2000);
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

module.exports = "<div class=\"flex direction-column\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue  h-change-28-48\">\n      <span [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">The git repo is cloned on the user's computer</span>\n    </div>\n    <div class=\"flex flex-direction-change align-center\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeClone()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git clone url\"</button>\n      <div class=\"pr-16\"></div>\n      <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button>\n      <div class=\"pr-8 pb-8\"></div>\n    </div>\n  </div>\n <div class=\"flex pt-change--clone justify-center\"> \n    <section class=\"flex direction-column text-center align-center\"> \n      <div class=\"pb-8 font-change-14-16\">Repository at url <br>(example: GitHub repo) </div>\n      <img  class=\"image-size--clone\"  src=\"assets/gitRepoEarthGreen.png\" alt=\"repository on GitHub\">\n      <img  class=\"image-size--clone pull-up-image--clone\" [ngClass]=\"{'hide': hideMessage, 'show, move-image': !hideMessage}\"  src=\"assets/gitRepoEarthGreen.png\" alt=\"repository on GitHub\">\n    </section>\n    <section class=\"pl-64\">\n      <div class=\"font-change-14-16 pl-landscape-clone\">User's Computer</div>\n    </section>\n  </div>\n</div>\n"

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
        this.enableReload = false;
    };
    CloneComponent.prototype.visualizeClone = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.enableReload = true;
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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"green h-48\">\n    <span [ngClass]=\"{'hide': hideMessage, 'show': !hideMessage}\">The index.js snapshot is saved in the Repo</span>\n   </div>\n   <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeCommit()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git commit index.js\"</button>\n    <div class=\"pr-16\"></div>\n    <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button>\n    <div class=\"pr-8\"></div>\n  </div>\n <div class=\"flex pt-change--commit change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n  <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n  <div class=\"pt-change--commit\">index.html</div>\n    <div class=\"pt-4 \">index.js</div>\n  <div class=\"pt-4 pb-change padding-landscape-commit-b\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Index</div>\n    <div class=\"green index_commit padding-landscape-commit-t\" [ngClass]=\"{'moveAndColor': !hideMessage}\">index.js</div></div>\n    <div class=\"order-switch-0 height-change bt-beige  bl-change bb-beige br-beige text-align\"><div class=\"w-full min-w-150 background-black white\">Repository</div></div>\n  </div>\n</section>"

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
        this.enableReload = false;
    };
    CommitComponent.prototype.visualizeCommit = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.enableReload = true;
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

module.exports = "<div class=\"flex direction-column\">\n  <div class=\"flex direction-column align-center\" >\n    <div class=\" w-message\">\n        <div class=\"flex direction-column text-center \" [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">\n          <div class=\"blue font-16-14\"> Example: User 2 executes \"get fetch\"</div>\n          <div class=\"white\">All remote branches are fetched to the local repo and are now available for checkout. </div>\n        </div>\n        <div class=\"flex text-center\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn': !hideMessage}\">\n          <div class=\"green  pl-16 pr-16 font-16-14\">All remote branches are fetched to the local repo and are now available for checkout. </div>\n        </div>\n    </div>\n    <div class=\"flex\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeFetch()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git fetch\"</button>\n      <div class=\"pr-16\"></div>\n      <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n\n  <div class=\"flex justify-center pt-32\">\n    <section class=\"flex direction-column padding-repo fetch-section\">\n      <div class=\"flex\">\n        <div class=\"flex direction-column font-switch featureInfo\">\n          <div class=\"pt-feature flex pr-8\"><span class=\"hide-portrait pr-2\">feature </span><span class=\"portrait-A-top\">A</span></div>\n          <div class=\"flex white pr-8\"><span class=\"hide-portrait pr-2\">feature </span><span>B</span></div>\n        </div>\n        <div class=\"flex direction-column align-center\">\n          <div class=\"pb-16 font-16-12 flex direction-column align-center\"><div class=\"brown bold\">User 1</div><div>Local <span class=\"hide-portrait\">Repo</span>  </div></div>\n          <img  class=\"image-size--fetch\"  src=\"assets/gitRepoEarthBrown.jpg\" alt=\"repository on GitHub\">\n        </div>\n      </div>\n    </section>\n    <section class=\"flex direction-column padding-repo fetch-section fetch-section--middle\">\n      <div class=\"flex\">\n        <div class=\"flex direction-column font-switch featureInfo z-2 pr-special\" [ngClass]=\"{'pr-16-landscape': !hideMessage}\">\n          <div class=\"pt-feature flex pr-8\"><div class=\"hide-portrait pr-2\">feature </div><div>A</div></div>\n          <div class=\"flex pr-8\"><div class=\"hide-portrait pr-2\">feature </div><div>B</div></div>\n        </div>\n        <div class=\"flex direction-column font-switch pull-left-fetch z-1\" [ngClass]=\"{'white': hideMessage, 'show move-right-fetch': !hideMessage}\">\n          <div class=\"pt-feature flex pr-8\"><span class=\"hide-portrait pr-2\">feature </span><span>A</span></div>\n          <div class=\"flex pr-8\"><span class=\"hide-portrait pr-2\">feature </span><span>B</span></div>\n        </div>\n        <div class=\"flex direction-column align-center\">\n          <div class=\"pb-16 font-16-12 flex direction-column align-center\"><div class=\"green bold\">Remote</div><div>Shared <div class=\"white hide-portrait\">Repo</div> </div></div>\n          <img  class=\"image-size--fetch\"  src=\"assets/gitRepoEarthGreen.png\" alt=\"repository on GitHub\">\n        </div>\n      </div>\n    </section>\n    <section class=\"flex direction-column padding-repo fetch-section\" >\n      <div class=\"flex\">\n        <div class=\"flex direction-column font-switch featureInfo\">\n          <div class=\"pt-feature flex white pr-8\"><span class=\"hide-portrait pr-2\">feature </span><span>A</span></div>\n          <div class=\"pr-8 flex\" [ngClass]=\"{'white': !hideMessage}\">\n            <span class=\"hide-portrait pr-2\">feature </span><span>B</span></div>\n        </div>\n        <div class=\"flex direction-column align-center\">\n        <div class=\"pb-16 font-16-12 flex direction-column align-center\"><div class=\"blue bold\">User 2</div><div>Local <span class=\"hide-portrait\">Repo</span>  </div></div>\n          <img  class=\"image-size--fetch\"  src=\"assets/gitRepoEarthBlue.jpg\" alt=\"repository on GitHub\">\n        </div>\n      </div>\n    </section>\n  </div>\n\n</div>\n"

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
        this.enableReload = false;
    };
    GitFetchComponent.prototype.visualizeFetch = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.enableReload = true;
        }, 3000);
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

module.exports = ".overlay-left {\n    margin-left: -48px;\n}\n\n.h-24 {\n    height: 24px;\n}\n\n.max-w-700 {\n    /* width: 700px; */\n    max-width: 700px;\n}\n\n.pt-change {\n    padding-top: 64px;\n    align-items: flex-end;\n}\n\n.image-size--pull {\n    width: 9.357rem;\n}\n\n.move-right-git-pull {\n    -webkit-animation: move-right-git-pull 1s linear;\n            animation: move-right-git-pull 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-out-arrow-2 {\n    -webkit-animation: fade-out-arrow-2 2s linear;\n            animation: fade-out-arrow-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-in-arrow-2 {\n    -webkit-animation: fade-in-arrow-2 3s linear;\n            animation: fade-in-arrow-2 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes move-right-git-pull {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translate(17.1rem, -.125rem);\n    }\n}\n\n@keyframes move-right-git-pull {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translate(17.1rem, -.125rem);\n    }\n}\n\n@-webkit-keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@-webkit-keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n\n@keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .pt-change {\n        padding-top: 10px !important;\n    }\n    .image-size--pull {\n        width: 9.357rem;\n    }\n\n    .image-size--pull {\n        width: 3.125rem !important;\n        height: 4.125rem !important;\n    }\n    @-webkit-keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    }\n    @keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    } \n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pt-change {\n        padding-top: 20px !important;\n    }\n    .image-size--pull {\n        width: 3.125rem !important;\n        height: 5.125rem !important;\n    }\n    @-webkit-keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    }\n    @keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0LXB1bGwvZ2l0LXB1bGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnREFBd0M7WUFBeEMsd0NBQXdDO0lBQ3hDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0FBQ0o7O0FBZEE7SUFDSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxxQ0FBcUM7UUFDekM7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHFDQUFxQztRQUN6QztJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHFDQUFxQztRQUN6QztJQUNKO0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0kscUNBQXFDO1FBQ3pDO0lBQ0o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2dpdC1wdWxsL2dpdC1wdWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheS1sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogLTQ4cHg7XG59XG5cbi5oLTI0IHtcbiAgICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5tYXgtdy03MDAge1xuICAgIC8qIHdpZHRoOiA3MDBweDsgKi9cbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuLnB0LWNoYW5nZSB7XG4gICAgcGFkZGluZy10b3A6IDY0cHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uaW1hZ2Utc2l6ZS0tcHVsbCB7XG4gICAgd2lkdGg6IDkuMzU3cmVtO1xufVxuXG4ubW92ZS1yaWdodC1naXQtcHVsbCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXJpZ2h0LWdpdC1wdWxsIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5mYWRlLW91dC1hcnJvdy0yIHtcbiAgICBhbmltYXRpb246IGZhZGUtb3V0LWFycm93LTIgMnMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uZmFkZS1pbi1hcnJvdy0yIHtcbiAgICBhbmltYXRpb246IGZhZGUtaW4tYXJyb3ctMiAzcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZS1yaWdodC1naXQtcHVsbCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNy4xcmVtLCAtLjEyNXJlbSk7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBmYWRlLW91dC1hcnJvdy0yIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgZmFkZS1pbi1hcnJvdy0yIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxufSBcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgIHtcbiAgICAucHQtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmltYWdlLXNpemUtLXB1bGwge1xuICAgICAgICB3aWR0aDogOS4zNTdyZW07XG4gICAgfVxuXG4gICAgLmltYWdlLXNpemUtLXB1bGwge1xuICAgICAgICB3aWR0aDogMy4xMjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0LjEyNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtZ2l0LXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMXJlbSwgLS4xMjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XG4gICAgLnB0LWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pbWFnZS1zaXplLS1wdWxsIHtcbiAgICAgICAgd2lkdGg6IDMuMTI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNS4xMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWdpdC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTFyZW0sIC0uMTI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG59Il19 */"

/***/ }),

/***/ "./src/app/git-pull/git-pull.component.html":
/*!**************************************************!*\
  !*** ./src/app/git-pull/git-pull.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\" h-38 pb-16 font-16-14\">\n      <div class=blue [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"green flex direction-column pl-32 pr-32 max-w-700 h-change-28-48 font-14-12 \" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The local main branch now points to the latest commit from the repo main branch. \n        git pull = git fetch + git merge. (A merge conflict may need to be resolved.) \n      </div>\n    </div>\n    <div class=\"flex align-center pt-32-in-portrait\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizePull()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git pull origin main\"</button>\n      <div class=\"pr-16\"></div>\n      <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n  <div class=\"flex pt-32 align-center\"> \n    <section class=\"flex direction-column align-center text-center\"> \n      <div class=\"pl-32 pb-8\">\n        <div class=\"green bold\">Remote Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column pt-change\">\n          <div class=\"flex align-center\">\n            <div class=\"pr-2\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div> \n            <div class=\"pr-8 h-24\">86b5f</div>\n            <div class= \"pr-8 overlay-left\" [ngClass]=\"{'hide': hideMessage, 'show move-right-git-pull': !hideMessage}\">86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"pr-8 h-24\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--pull\"  src=\"assets/gitRepoEarthGreen.png\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column align-center text-center\"> \n      <div class=\"pl-32 pb-8\">\n        <div class=\"blue bold\">Local Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column pt-change\">\n          <div class=\"flex align-center h-24\">\n            <div class=\"pr-4\" [ngClass]=\"{'hide': hideMessage, 'fade-in-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div>   \n            <div class=\"pr-8 white h-24\">86b5f</div>\n          </div>\n          <div class=\"flex align-center justify-center h-24\" >\n            <div class=\"pr-2\" [ngClass]=\"{'fade-out-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div>            \n            <div class=\"pr-8 h-24\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--pull\"  src=\"assets/gitRepoEarthBlue.jpg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

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
        this.enableReload = false;
    };
    GitPullComponent.prototype.visualizePull = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.enableReload = true;
        }, 2700);
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

module.exports = ".overlay-left {\n    margin-left: -48px;\n}\n\n.h-24 {\n    height: 24px;\n}\n\n.max-w-700 {\n    max-width: 700px;\n}\n\n.pt-change {\n    padding-top: 64px;\n    align-items: flex-end;\n}\n\n.image-size--pull {\n    width: 9.357rem;\n}\n\n.move-right-git-pull {\n    -webkit-animation: move-right-git-pull 1s linear;\n            animation: move-right-git-pull 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-out-arrow-2 {\n    -webkit-animation: fade-out-arrow-2 2s linear;\n            animation: fade-out-arrow-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.fade-in-arrow-2 {\n    -webkit-animation: fade-in-arrow-2 3s linear;\n            animation: fade-in-arrow-2 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes move-right-git-pull {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translate(17.1rem, -.125rem);\n    }\n}\n\n@keyframes move-right-git-pull {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translate(17.1rem, -.125rem);\n    }\n}\n\n@-webkit-keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@-webkit-keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n\n@keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .pt-change {\n        padding-top: 10px !important;\n    }\n    .image-size--pull {\n        width: 9.357rem;\n    }\n\n\n    .image-size--pull {\n        width: 3.125rem !important;\n        height: 4.125rem !important;\n    }\n    @-webkit-keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    }\n    @keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    } \n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pt-change {\n        padding-top: 20px !important;\n    }\n    .image-size--pull {\n        width: 3.125rem !important;\n        height: 5.125rem !important;\n    }\n\n\n    @-webkit-keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    }\n\n\n    @keyframes move-right-git-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(11rem, -.125rem);\n        }\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0LXB1c2gvZ2l0LXB1c2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdEQUF3QztZQUF4Qyx3Q0FBd0M7SUFDeEMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1Q0FBdUM7SUFDM0M7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx1Q0FBdUM7SUFDM0M7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjs7QUFkQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxlQUFlO0lBQ25COzs7SUFHQTtRQUNJLDBCQUEwQjtRQUMxQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxxQ0FBcUM7UUFDekM7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHFDQUFxQztRQUN6QztJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCLDJCQUEyQjtJQUMvQjs7O0lBR0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0kscUNBQXFDO1FBQ3pDO0lBQ0o7OztJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHFDQUFxQztRQUN6QztJQUNKO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9naXQtcHVzaC9naXQtcHVzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXktbGVmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IC00OHB4O1xufVxuXG4uaC0yNCB7XG4gICAgaGVpZ2h0OiAyNHB4O1xufVxuXG4ubWF4LXctNzAwIHtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG4ucHQtY2hhbmdlIHtcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5pbWFnZS1zaXplLS1wdWxsIHtcbiAgICB3aWR0aDogOS4zNTdyZW07XG59XG5cbi5tb3ZlLXJpZ2h0LWdpdC1wdWxsIHtcbiAgICBhbmltYXRpb246IG1vdmUtcmlnaHQtZ2l0LXB1bGwgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLmZhZGUtb3V0LWFycm93LTIge1xuICAgIGFuaW1hdGlvbjogZmFkZS1vdXQtYXJyb3ctMiAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5mYWRlLWluLWFycm93LTIge1xuICAgIGFuaW1hdGlvbjogZmFkZS1pbi1hcnJvdy0yIDNzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWdpdC1wdWxsIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE3LjFyZW0sIC0uMTI1cmVtKTtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0LWFycm93LTIge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBmYWRlLWluLWFycm93LTIge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG59IFxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSAge1xuICAgIC5wdC1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZS0tcHVsbCB7XG4gICAgICAgIHdpZHRoOiA5LjM1N3JlbTtcbiAgICB9XG5cblxuICAgIC5pbWFnZS1zaXplLS1wdWxsIHtcbiAgICAgICAgd2lkdGg6IDMuMTI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNC4xMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWdpdC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTFyZW0sIC0uMTI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5wdC1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZS0tcHVsbCB7XG4gICAgICAgIHdpZHRoOiAzLjEyNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDUuMTI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtZ2l0LXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMXJlbSwgLS4xMjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/git-push/git-push.component.html":
/*!**************************************************!*\
  !*** ./src/app/git-push/git-push.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16 font-16-14\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 green max-w-700 h-change-28-48 font-14-12\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The remote main branch now points to the latest commit from the local main branch.\n        It's advisable to do a pull before a push to a shared repo.\n        When combining code with a push or a pull, merge conflicts may need to be resolved.\n      </div>\n    </div>\n    <div class=\"flex align-center pt-32-in-portrait\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizePush()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git push origin main\"</button>\n      <div class=\"pr-16\"></div>\n      <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n  <div class=\"flex pt-32 align-center\"> \n    <section class=\"flex direction-column align-center text-center\"> \n      <div class=\"pl-32 pb-8\">\n        <div class=\"blue bold\">Local Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column pt-change\">\n          <div class=\"flex align-center\">\n            <div class=\"pr-2\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div> \n            <div class=\"pr-8 h-24\">86b5f</div>\n            <div class= \"pr-8 overlay-left\" [ngClass]=\"{'hide': hideMessage, 'show move-right-git-pull': !hideMessage}\">86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"pr-8 h-24\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--pull\"  src=\"assets/gitRepoEarthBlue.jpg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column align-center text-center\"> \n      <div class=\"pl-32 pb-8\">\n        <div class=\"green bold\">Remote Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column pt-change\">\n          <div class=\"flex align-center h-24\">\n            <div class=\"pr-4\" [ngClass]=\"{'hide': hideMessage, 'fade-in-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div>   \n            <div class=\"pr-8 white h-24\">86b5f</div>\n          </div>\n          <div class=\"flex align-center justify-center h-24\" >\n            <div class=\"pr-2\" [ngClass]=\"{'fade-out-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div>            \n            <div class=\"pr-8 h-24\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--pull\"  src=\"assets/gitRepoEarthGreen.png\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

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
        this.enableReload = false;
    };
    GitPushComponent.prototype.visualizePush = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.enableReload = true;
        }, 2700);
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

module.exports = ".h-full {\n    height: 100%;\n}\n.gold {\n    background-color: gold;\n}\n.background-orange {\n    background-color: orange;\n}\n.h-36 {\n    height: 36px;\n    min-height: 36px;\n}\n.h-48 {\n    height: 48px;\n    min-height: 48px;\n}\n.border-beige{\n    border: 2px solid #beaf98;\n}\n.br-beige{\n    border-right: 2px solid #beaf98;\n}\n.pb-8-portrait {\n    padding-bottom: 0; \n}\n.w-24 {\n    width: 24px;\n}\n.h-28 {\n    height: 28px;;\n}\n.fade-to-green {\n    -webkit-animation: fade-to-green 2s linear;\n            animation: fade-to-green 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-to-orange {\n    -webkit-animation: fade-to-orange 2s linear;\n            animation: fade-to-orange 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-to-red {\n    -webkit-animation: fade-to-red 2s linear;\n            animation: fade-to-red 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-to-purple {\n    -webkit-animation: fade-to-purple 2s linear;\n            animation: fade-to-purple 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-to-gray {\n    -webkit-animation: fade-to-gray 2s linear;\n            animation: fade-to-gray 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.stay-gold{\n    background-color: gold;\n}\n.fade-in-index {\n    -webkit-animation: fade-in-arrow-2 5s linear;\n            animation: fade-in-arrow-2 5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-out-index {\n    -webkit-animation: fade-out-arrow-2 4s linear;\n            animation: fade-out-arrow-2 4s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-out-arrow-2 {\n    -webkit-animation: fade-out-arrow-2 2s linear;\n            animation: fade-out-arrow-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-in-arrow-2 {\n    -webkit-animation: fade-in-arrow-2 1s linear;\n            animation: fade-in-arrow-2 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes fade-to-green{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: darkseagreen;\n    }\n}\n@keyframes fade-to-green{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: darkseagreen;\n    }\n}\n@-webkit-keyframes fade-to-red{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: indianred;\n    }\n}\n@keyframes fade-to-red{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: indianred;\n    }\n}\n@-webkit-keyframes fade-to-purple{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: mediumpurple;\n    }\n}\n@keyframes fade-to-purple{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: mediumpurple;\n    }\n}\n@-webkit-keyframes fade-to-gray{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: #BEBEBE;\n    }\n}\n@keyframes fade-to-gray{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: #BEBEBE;\n    }\n}\n@-webkit-keyframes fade-to-orange{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: orange;\n    }\n}\n@keyframes fade-to-orange{\n    0% {\n        background-color: gold;\n    }\n    60% {\n        background-color: gold;\n    }\n    100% {\n        background-color: orange;\n    }\n}\n@-webkit-keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n@keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n@-webkit-keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n@keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .pb-8-portrait {\n        padding-bottom: 0;\n    }\n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pb-8-portrait {\n        padding-bottom: 8px;;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0LXJlc2V0L2dpdC1yZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSx5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksNENBQW9DO1lBQXBDLG9DQUFvQztJQUNwQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksNENBQW9DO1lBQXBDLG9DQUFvQztJQUNwQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSjtBQVZBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKO0FBVkE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjtBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7QUFWQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKO0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjtBQVZBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKO0FBVkE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBUEE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7QUFDSjtBQWRBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2l0LXJlc2V0L2dpdC1yZXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmgtZnVsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmdvbGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG59XG5cbi5iYWNrZ3JvdW5kLW9yYW5nZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uaC0zNiB7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG59XG5cbi5oLTQ4IHtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbWluLWhlaWdodDogNDhweDtcbn1cblxuLmJvcmRlci1iZWlnZXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmVhZjk4O1xufVxuXG4uYnItYmVpZ2V7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2JlYWY5ODtcbn1cblxuLnBiLTgtcG9ydHJhaXQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwOyBcbn1cblxuLnctMjQge1xuICAgIHdpZHRoOiAyNHB4O1xufVxuXG4uaC0yOCB7XG4gICAgaGVpZ2h0OiAyOHB4Oztcbn1cblxuLmZhZGUtdG8tZ3JlZW4ge1xuICAgIGFuaW1hdGlvbjogZmFkZS10by1ncmVlbiAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5mYWRlLXRvLW9yYW5nZSB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLXRvLW9yYW5nZSAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5mYWRlLXRvLXJlZCB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLXRvLXJlZCAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4uZmFkZS10by1wdXJwbGUge1xuICAgIGFuaW1hdGlvbjogZmFkZS10by1wdXJwbGUgMnMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLmZhZGUtdG8tZ3JheSB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLXRvLWdyYXkgMnMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLnN0YXktZ29sZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xufVxuXG4uZmFkZS1pbi1pbmRleCB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluLWFycm93LTIgNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLmZhZGUtb3V0LWluZGV4IHtcbiAgICBhbmltYXRpb246IGZhZGUtb3V0LWFycm93LTIgNHMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uZmFkZS1vdXQtYXJyb3ctMiB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dC1hcnJvdy0yIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmZhZGUtaW4tYXJyb3ctMiB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluLWFycm93LTIgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtdG8tZ3JlZW57XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgZmFkZS10by1yZWR7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgZmFkZS10by1wdXJwbGV7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtcHVycGxlO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgZmFkZS10by1ncmF5e1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCRUJFQkU7XG4gICAgfVxufSBcbkBrZXlmcmFtZXMgZmFkZS10by1vcmFuZ2V7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQtYXJyb3ctMiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tYXJyb3ctMiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbn0gXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpICB7XG4gICAgLnBiLTgtcG9ydHJhaXQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIHtcbiAgICAucGItOC1wb3J0cmFpdCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7O1xuICAgIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/git-reset/git-reset.component.html":
/*!****************************************************!*\
  !*** ./src/app/git-reset/git-reset.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"h-48\">\n   <span class=\"blue font-16-14 pl-16 pr-16 text-center\" [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">git reset optionally moves the HEAD in the Repository and optionally overwrites the Index and Working Area</span>\n  <div class=\"flex direction-column green\">\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head1' }\">Points to commit one place before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head' }\">Points to HEAD (default)</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head2' }\">Points to commit two places before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head3' }\">Points to commit three places before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'soft' }\">Soft: no overwrites</span>\n     <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'mixed' }\">Mixed (default): overwrite Index</span>\n    <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'hard' }\">Hard: overwrite Index and Working Area</span>\n  </div>\n  </div>\n  <div class=\"flex align-center justify-center\">\n    <mat-form-field class=\"w-40\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose where to move HEAD</mat-label>\n      <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommit($event.value)\">\n        <mat-option *ngFor = \"let commit of commits\" [value]=\"commit.name\"\n        >{{commit.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div class=\"pr-8\"></div>\n    <mat-form-field class=\"w-40--reset\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose overwrite option</mat-label>\n      <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommand($event.value)\">\n        <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n        >{{command.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"flex pb-32\">\n    <button [disabled]=\"completed || chosenCommand === '' || chosenCommit === ''\" (click)=\"visualizeReset()\" class=\"w-350--reset\" mat-raised-button color=\"warn\">Visualize \"git reset<span *ngIf=\"chosenCommit !=='no parameter'\"> {{chosenCommit}}</span><span *ngIf=\"chosenCommand !=='no parameter' && chosenCommand !==''\"> --{{chosenCommand}}</span>\"</button>\n    <div class=\"pr-16\"></div>\n    <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button><div class=\"pr-8\"></div>\n  </div>\n\n  <div class=\"flex h-full border-beige \">\n    <section class=\"br-beige\">\n      <div class=\"flex direction-column text-align\">\n        <div class=\"w-full min-w-150--reset background-black white\">Working Area</div>\n        <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n          <div class=\"dot \" \n              [ngClass]=\"{'gold': initArrow || (!initArrow && overWriteType !== 'hard'),\n                          'fade-to-green': !initArrow && copyHead() && overwriteType() === 'hard',\n                          'fade-to-red': !initArrow && copyHead1() && overwriteType() === 'hard',\n                          'fade-to-purple': !initArrow && copyHead2() && overwriteType() === 'hard',\n                          'fade-to-gray': !initArrow && copyHead3() && overwriteType() === 'hard'}\">\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"br-beige\">\n      <div class=\"flex direction-column text-align\">\n        <div class=\"w-full min-w-150--reset background-black white\">Index</div>\n        <div class=\"flex align-center justify-center pt-8 mt-4\">\n          <div class=\"dot \" \n              [ngClass]=\"{'gold': initArrow || softOverwrite(),\n                          'fade-to-green': !initArrow && copyHead() && overwriteType() !== 'soft',\n                          'fade-to-red': !initArrow && copyHead1() && overwriteType()  !== 'soft',\n                          'fade-to-purple': !initArrow && copyHead2() && overwriteType()  !== 'soft',\n                          'fade-to-gray': !initArrow && copyHead3() && overwriteType()  !== 'soft'}\">\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"\">\n      <div class=\"flex direction-column text-align\">\n        <div class=\"w-full min-w-150--reset background-black white\">Repository</div>\n        <div class=\"flex align-center justify-center pt-8 mt-4 h-36\">\n          <div class=\"pr-8 h-28\" >\n            <div class=\"w-24\"></div>\n            <img *ngIf=\"initArrow\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            <img [ngClass]=\"{'hide': (initArrow || headPointer() !== 'head'),'fade-in-arrow-2': (!initArrow && headPointer() === 'head')}\"  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n          </div> \n          <div class=\"head dot seaGreen\"></div>\n        </div>\n        <div class=\"flex align-center justify-center pt-8 mt-4 h-36\">\n          <div class=\"pr-8\">\n            <div class=\"w-24\"></div>\n            <img [ngClass]=\"{'hide': (initArrow || headPointer() !== 'head1'),'fade-in-arrow-2': (!initArrow && headPointer() === 'head1')}\"  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n          </div> \n          <div class=\"head1 dot indianRed\"></div>\n        </div>\n        <div class=\"flex align-center justify-center pt-8 mt-4 h-36\">\n          <div class=\"pr-8\">\n            <div class=\"w-24\"></div>\n            <img [ngClass]=\"{'hide': (initArrow || headPointer() !== 'head2'),'fade-in-arrow-2': (!initArrow && headPointer() === 'head2')}\"  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n          </div> \n          <div class=\"head2 dot mediumPurple\"></div>\n        </div>\n        <div class=\"flex align-center justify-center pt-8 pb-8 mt-4 h-36\">\n          <div class=\"pr-8\">\n            <div class=\"w-24\"></div>\n            <img [ngClass]=\"{'hide': (initArrow || headPointer() !== 'head3'),'fade-in-arrow-2': (!initArrow && headPointer() === 'head3')}\"  src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n          </div> \n          <div class=\"head3 dot background-gray\"></div>\n        </div>\n      </div>\n    </section>\n</div>\n\n\n\n</section>"

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
        this.enableReload = false;
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
            _this.enableReload = true;
        }, 3200);
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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\" h-48 pl-16 pr-16 pb-16 text-center\">\n    <span class=\"blue\" [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: A folder contains 3 files. No git repository exists.</span>\n    <span class=\"green\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">\n      A git repository is created (look for a hidden folder call .git).\n      Git init only needs to be run once. </span>\n   </div>\n   <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeInit()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git init\"</button>\n    <div class=\"pr-16\"></div>\n    <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button>\n    <div class=\"pr-8\"></div>\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change text-align\"\n         [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Working Area</div>\n      <div class=\"pt-change\">index.html</div>\n      <div class=\"pt-4 \">index.js</div>\n      <div class=\"pt-4 pb-change\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change text-align\"\n        [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Index</div>\n    </div>\n    <div class=\"order-switch-0 height-change text-align\"\n          [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Repository</div>\n    </div>\n  </div>\n</section>"

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
        this.enableReload = false;
    };
    InitComponent.prototype.visualizeInit = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.enableReload = true;
        }, 1800);
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

/***/ "./src/app/log/log.component.css":
/*!***************************************!*\
  !*** ./src/app/log/log.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max-width-550{\n    max-width: 550px;\n}\n.w-550{\n    width: 550px;\n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .max-width-550{\n        max-width: 300px;\n    }\n    .w-550{\n        width: 300px;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nL2xvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2xvZy9sb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXgtd2lkdGgtNTUwe1xuICAgIG1heC13aWR0aDogNTUwcHg7XG59XG4udy01NTB7XG4gICAgd2lkdGg6IDU1MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIHtcbiAgICAubWF4LXdpZHRoLTU1MHtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB9XG4gICAgLnctNTUwe1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/log/log.component.html":
/*!****************************************!*\
  !*** ./src/app/log/log.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center \">\n  <div class=\"blue  align-center pl-32 pr-32 pb-16 text-center w-550 max-w-550\" \n      *ngIf=\"!hideMessage\">Lists the commits for the current branch. Use \"git log\" without options to see more information such as author and date.</div>\n  <section class= \"flex direction-column align-center\" >\n    <div class=\"flex\">\n      <div class=\"pr-8\"></div>\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeLog()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git log --oneline\"</button>\n      <div class=\"pr-16\"></div>\n      <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </section>\n  <section class=\"flex align-center direction-column\">\n    <div *ngIf=\"!hideMessage\" class=\"flex direction-column align-left pl-50\" >\n      <div class=\"flex-direction-change\"><div class=\"commit flex commit-fadeIn-1 pt-32 pb-2\"><div class=\"w-100 pr-8 khaki bold\">da91bc1a</div><div>( <span class=\"darkblue bold\">HEAD -> </span><span class=\"limegreen bold\">main</span>, <span class=\"red bold pl-2\">origin/main</span>)</div></div>\n      <div class=\"pl-109 commit flex commit-fadeIn-1 pb-8\"> require oauth authentication</div></div>\n      <div class=\"commit flex commit-fadeIn-2 pb-8\"><div class=\"w-100 pr-8 khaki bold\">37bce8f6</div><div>add navigation bar</div></div>\n      <div class=\"commit flex commit-fadeIn-3 pb-8\"><div class=\"w-100 pr-8 khaki bold\">1dd25ea0</div><div>first commit, lay out app</div></div>\n    </div>\n  </section>\n</div>\n"

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
        this.enableReload = false;
    };
    LogComponent.prototype.visualizeLog = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.enableReload = true;
        }, 3300);
    };
    LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-log',
            template: __webpack_require__(/*! ./log.component.html */ "./src/app/log/log.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fade"], _animations__WEBPACK_IMPORTED_MODULE_2__["myTrigger2"], _animations__WEBPACK_IMPORTED_MODULE_2__["fade2"], _animations__WEBPACK_IMPORTED_MODULE_2__["ani3"]],
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./log.component.css */ "./src/app/log/log.component.css")]
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

module.exports = ".pull-up-pc {\n    margin-top: -5px;\n    /* border: 1px solid hotpink; */\n}\n.pull-up-pc-2 {\n    margin-top: -10px !important;\n    /* border: 2px solid orange; */\n}\n.h-20 {\n    height: 20px;\n}\n.h-30 {\n    height: 30px;\n}\n.pl-28 {\n    padding-left: 28px;\n}\n.pt-25 {\n    padding-top: 25px;\n}\n.pt-36 {\n    padding-top: 36px;\n}\n.move-up-pc {\n    -webkit-animation: move-up-pc 1.3s linear;\n            animation: move-up-pc 1.3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-right-merge {\n    -webkit-animation: move-right-merge 1s linear;\n            animation: move-right-merge 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.pl-20 {\n    padding-left: 20px;\n}\n.pl-28 {\n    padding-left: 28px;\n}\n.fade-out-arrow-2 {\n    -webkit-animation: fade-out-arrow-2 1.5s linear;\n            animation: fade-out-arrow-2 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.fade-in-arrow-2 {\n    -webkit-animation: fade-in-arrow-2 3s linear;\n            animation: fade-in-arrow-2 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.max-width-550{\n    max-width: 550px;\n}\n.w-550{\n    width: 550px;\n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .max-width-550{\n        max-width: 300px;\n    }\n    .w-550{\n        width: 300px;\n    }\n\n    .bold {\n        font-weight: 300;\n    }\n    \n}\n@-webkit-keyframes move-right-merge {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(10.5rem);\n    }\n}\n@keyframes move-right-merge {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(10.5rem);\n    }\n}\n@-webkit-keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n@keyframes fade-out-arrow-2 {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n@-webkit-keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n@keyframes fade-in-arrow-2 {\n    0% {\n        opacity: 0;\n        color: white;\n    }\n    50% {\n        opacity: 0;\n        color: white;\n    }\n\n    100% {\n        opacity: 1;\n        color: black;\n    }\n}\n@-webkit-keyframes move-up-pc {\n    0% {\n        transform: translateY(0);\n    }\n    70% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-3.5rem);\n    }\n}\n@keyframes move-up-pc {\n    0% {\n        transform: translateY(0);\n    }\n    70% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-3.5rem);\n    }\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyZ2UvbWVyZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksK0NBQXVDO1lBQXZDLHVDQUF1QztJQUN2QyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUo7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSjtBQVBBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKO0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFQQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtBQUNKO0FBZEE7SUFDSTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKO0FBVkE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21lcmdlL21lcmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVsbC11cC1wYyB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBob3RwaW5rOyAqL1xufVxuLnB1bGwtdXAtcGMtMiB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2U7ICovXG59XG5cbi5oLTIwIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4uaC0zMCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ucGwtMjgge1xuICAgIHBhZGRpbmctbGVmdDogMjhweDtcbn1cbi5wdC0yNSB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4ucHQtMzYge1xuICAgIHBhZGRpbmctdG9wOiAzNnB4O1xufVxuLm1vdmUtdXAtcGMge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cC1wYyAxLjNzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtcmlnaHQtbWVyZ2Uge1xuICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1tZXJnZSAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5wbC0yMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucGwtMjgge1xuICAgIHBhZGRpbmctbGVmdDogMjhweDtcbn1cblxuLmZhZGUtb3V0LWFycm93LTIge1xuICAgIGFuaW1hdGlvbjogZmFkZS1vdXQtYXJyb3ctMiAxLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmZhZGUtaW4tYXJyb3ctMiB7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluLWFycm93LTIgM3MgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubWF4LXdpZHRoLTU1MHtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xufVxuLnctNTUwe1xuICAgIHdpZHRoOiA1NTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XG4gICAgLm1heC13aWR0aC01NTB7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxuICAgIC53LTU1MHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cblxuICAgIC5ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG4gICAgXG59XG5cbkBrZXlmcmFtZXMgbW92ZS1yaWdodC1tZXJnZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAuNXJlbSk7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBmYWRlLW91dC1hcnJvdy0yIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgZmFkZS1pbi1hcnJvdy0yIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBtb3ZlLXVwLXBjIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zLjVyZW0pO1xuICAgIH1cbn0gIl19 */"

/***/ }),

/***/ "./src/app/merge/merge.component.html":
/*!********************************************!*\
  !*** ./src/app/merge/merge.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\" h-change-28-48 pb-change-16-32\">\n      <div class=\"blue\" [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"green flex direction-column pl-32 pr-32 w-550 max-w-550\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The main branch is updated with the latest commits from the feature branch.\n        (A merge conflict may need to be resolved.)\n      </div>\n    </div>\n    <div class=\"flex\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeMerge()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git merge feature\"</button>\n      <div class=\"pr-16\"></div>\n      <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n <div class=\"flex pt-32 w-full justify-center\"> \n    <section class=\"flex direction-column pr-16\"> \n      <div class=\"pb-8 pl-16 bold text-center\">feature branch </div>\n      <div class=\"flex\">\n        <div class=\"flex direction-column pt-36\">\n          <div class=\"flex align-center\">\n            <div class=\"h-30\"></div>     \n            <div class=\"pr-2 pl-28\">commit 86b5f</div>\n            <div class=\"pr-8 pull-left\" [ngClass]=\"{'hide': hideMessage, 'show move-right-merge': !hideMessage}\">commit 86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"pl-28\">commit e34b2</div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"flex direction-column text-left pr-16\"> \n      <div class=\"pb-8 pl-16 bold text-center\">main branch </div>\n      <div class=\"flex\">\n        <div class=\"flex direction-column pt-32\">\n          <div class=\"flex align-center h-20\">\n            <div class=\"pr-4 pt-25\" [ngClass]=\"{'hide': hideMessage, 'fade-in-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div>         \n            <div class=\"pr-2\"></div>\n          </div>\n          <div class=\"flex pr-2 mt-8 align-center justify-center\">\n            <div class=\"pr-4\" [ngClass]=\"{'fade-out-arrow-2': !hideMessage}\">\n              <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjElEQVRIie3VPQ4BURiF4ScSetbANtiNtWitg42MXUw1vUYjrsYoZEhG7qk4ySm/++b7ybn8FdAmDbhhj1kKUB4+YZUEFJyxTQJ6H7FIAgparIcKug9FY33FDtMUoHeDZRLwPIDJmznXUMEl1UFsRINL/qb1UWdaA3DAvMbjr4BoVMTCLh7X8Q/nx3QHemGZLZvPo5wAAAAASUVORK5CYII=\">\n            </div>    \n            <div class=\"\">commit e34b2</div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n"

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
        this.enableReload = false;
    };
    MergeComponent.prototype.visualizeMerge = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.enableReload = true;
        }, 3100);
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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"flex align-center justify-center change-direction-stash\">\n    <div class=\"h-change-28-48 text-center \">\n      <div class=\"blue align-center text-align pl-16 pr-16 font-change-14-16\" >\"git stash\" stores files in the Stash Area. These files can be retrieved later with \"git stash apply\".</div>\n     </div>\n     <div class=\"flex pt-16\">\n       <div class=\"pr-8\"></div>\n       <mat-form-field class=\"w-full stash-field\" appearance=\"fill\">\n         <mat-label float=\"never\">Choose an option</mat-label>\n         <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommand($event.value)\">\n           <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n           >{{command.name}}</mat-option>\n         </mat-select>\n       </mat-form-field>\n     </div>\n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"completed || chosenCommand === ''\" (click)=\"visualizeStash()\" class=\"w-full\" mat-raised-button color=\"warn\">Visualize \"git stash<span *ngIf=\"chosenCommand !=='no option' && chosenCommand !==''\"> --{{chosenCommand}}</span>\"</button>\n    <div class=\"pr-16\"></div>\n    <button mat-fab [disabled]=\"!enableReload\" (click)=\"reload()\" mat-raised-button color=\"warn\"><span>Reload</span></button><div class=\"pr-8\"></div>\n    <div class=\"pr-8\"></div>\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-stash flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Stash Area</div>\n      <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n      </div>\n    </div>\n    <div class=\"order-switch-2 bl-stash flex  direction-column height-change bt-beige bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Working Area</div>\n      <div class=\"flex align-center direction-column align-left justify-center pt-8 mt-4 pb-32\">\n        <div class=\"pl-8 toMove tracked noOption\">sidebar.html</div>\n        <div class=\"pl-8 toMove untracked\">untracked: nav.js</div>\n      </div>\n    </div>\n    <div class=\"order-1 height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Index</div>\n      <div class=\"flex align-left pt-8 mt-4 pb-32\">\n        <div class=\"pl-8 toMove index noOption\">sidebar.css</div>\n      </div>\n    </div>\n    <div class=\"order-switch-0 height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150 background-black white\">Repository</div>\n    </div>\n  </div>\n</section>"

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
        this.enableReload = false;
    };
    StashComponent.prototype.reload = function () {
        var group;
        this.ngOnInit();
        group = document.getElementsByClassName('move-left-from-working');
        for (var i = 0; i < group.length; i++) {
            group[i].classList.remove('move-left-from-working');
        }
        group = document.getElementsByClassName('untracked');
        for (var i = 0; i < group.length; i++) {
            group[i].classList.remove('move-left-from-working');
        }
        group = document.getElementsByClassName('move-left-from-index');
        for (var i = 0; i < group.length; i++) {
            group[i].classList.remove('move-left-from-index');
        }
        group = document.getElementsByClassName('move-left-from-index-2');
        for (var i = 0; i < group.length; i++) {
            group[i].classList.remove('move-left-from-index-2');
        }
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
            _this.enableReload = true;
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

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue pt-8 pr-16 pl-16 h-change-28-48 font-16-14\" >\n    <div class=\"blue w-550 text-center\" *ngIf=\"hideMessage\">Git status displays the state of the working directory and the staging area.</div>\n    <div class=\"blue w-450 text-center\" *ngIf=\"!hideMessage\" [@myTrigger]=\"fadeIn\"><span class=\"red bold pr-8\">Red: <span class=\"black regular\">in Working Area.</span> </span><span class=\"green bold\">Green:<span class=\"black regular\">  in Index.</span></span></div>\n  </div>\n  <div class=\"flex pt-8\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeStatus()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git status\"</button>\n    <div class=\"pr-16\"></div>\n    <button mat-fab [disabled]=\"!enableReload\" (click)=\"ngOnInit()\" mat-raised-button color=\"warn\"><span>Reload</span></button><div class=\"pr-8\"></div>\n    <div class=\"pr-8\"></div>\n  </div>\n  <section class= \"flex direction-column pl-change-status pt-16 text-left\" >\n    <div [ngClass]=\"{\n                    'ml-neg': i == '0',\n                    'green-bold pl-16': i == '1',\n                    'red-bold': i == '3'\n                  }\" \n                    class=\"pt-8 pb-8\" *ngFor=\"let message of messages; let i = index\" [@myTrigger]=\"fadeIn\">{{message}}</div>\n  </section>\n</div>\n\n\n"

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
        this.enableReload = false;
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
            _this.enableReload = true;
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