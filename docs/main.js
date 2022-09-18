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

module.exports = "\n.visGitApp {\n    font-family: Arial, Helvetica, sans-serif !important;\n}\n<!--snackbar-->\nul.custom {\n    list-style-type: none; /* Remove bullets */\n    padding: 0; /* Remove padding */\n    margin: 0; /* Remove margins */\n  }\nul li {\n    margin: 10px;\n  }\n::ng-deep .custom-style{\n    background-color: #c21807;\n    color:white;\n    display: flex !important;\n    justify-content: center;\n    align-items: center !important;\n  }\n.cdk-global-overlay-wrapper  {\n    /* display: flex !important;\n    align-items: center !important;\n    justify-content: center !important; */\n    border: 10px solid black;\n    background-color: orange;\n    font-size: 100px;\n}\n.font-change-14-16 {\n    font-size: 1rem;\n}\n.w-40--reset {\n    width: 15.625rem;\n}\n.pl-change-status {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.change-direction-stash {\n    flex-direction: column;\n}\n.pl-92-except-portrait{\n    padding-left: 1.875rem;\n}\n.pr-64-except-portrait {\n    padding-right: 0rem;\n}\n.pt-32-in-portrait {\n    padding-top: 2rem;\n}\n.image-size-icon {\n    width: 3.125rem;\n}\n.font-size-change {\n    font-size: 1.375rem;\n}\n.pl-change {\n    padding-left: 3.125rem;\n}\n.pb-change-16-32 {\n padding-bottom: 2rem;\n}\n.h-change-28-48 {\n    height: 1.75rem;\n}\n.flex-direction-change {\n    flex-direction: row;\n}\n.font-size-12 {\n    font-size: .75rem;\n}\n.mat-fab .mat-button-wrapper {\n    line-height: .25rem !important;\n}\n.italics {\n    font-style: italic;\n}\n.font-size-24 {\n    font-size: 1.5rem;\n}\n.font-size-32 {\n    font-size: 2rem;\n}\n.font-size-48 {\n    font-size: 3rem;\n}\n.h-28 {\n    height: 1.25rem;\n}\n.h-38 {\n    height: 2.375rem;\n}\n.h-48 {\n    height: 3rem;\n}\n.h-58 {\n    height: 3.625rem;\n}\n.h-69 {\n    height: 4.3125rem;\n}\n.mr-2 {\n    margin-right: .125rem;\n}\n.mr-4 {\n    margin-right: .25rem;\n}\n.ml-2 {\n    margin-left: .125rem;\n}\n.ml-4 {\n    margin-left: .25rem;\n}\n.ml-6 {\n    margin-left: 0.375rem;\n}\n.ml-8 {\n    margin-left: .5rem;\n}\n.ml-switch--reset {\n    margin-left: 2.625rem;\n}\n.mt-2 {\n    margin-top: .125rem;\n}\n.mt-4 {\n    margin-top: .25rem;\n}\n.mt-8 {\n    margin-top: .5rem;\n}\n.pb-36 {\n    padding-bottom: 2.25rem;\n}\n.pb-48 {\n    padding-bottom: 3rem;\n}\n.pl-2 {\n    padding-left: .125rem;\n}\n.pl-4 {\n    padding-left: .25rem;\n}\n.pl-8 {\n    padding-left: .5rem;\n}\n.pl-16 {\n    padding-left: 1rem;\n}\n.pl-20 {\n    padding-left: 1.25rem;\n}\n.pl-24 {\n    padding-left: 1.5rem;\n}\n.pl-30 {\n    padding-left: 1.875rem;\n}\n.pl-32 {\n    padding-left: 2rem;\n}\n.pl-34 {\n    padding-left: 2.125rem;\n}\n.pl-36 {\n    padding-left: 2.25rem;\n}\n.pl-46 {\n    padding-left: 2.875rem;\n}\n.pl-48 {\n    padding-left: 3rem;\n}\n.pl-50 {\n    padding-left: 3.125rem;\n}\n.pl-100 {\n    padding-left: 6.25rem;\n}\n.pl-150 {\n    padding-left: 9.375rem;\n}\n.pl-200 {\n    padding-left: 12.5rem;\n}\n.pl-250 {\n    padding-left: 15.625rem;\n}\n.pl-64 {\n    padding-left: 4rem;\n}\n.pl-64--reset {\n    padding-left: 4rem;\n}\n.pl-92 {\n    padding-left: 5.75rem;\n}\n.pl-109 {\n    padding-left: 6.8125rem;\n}\n.pl-350 {\n    padding-left: 21.875rem;\n}\n.pl-500 {\n    padding-left: 31.25rem;\n}\n.pr-2 {\n    padding-right: .125rem;\n}\n.pr-4 {\n    padding-right: .25rem;\n}\n.pr-8 {\n    padding-right: .5rem;\n}\n.pr-16 {\n    padding-right: 1rem;\n}\n.pt-8{\n    padding-top: .5rem;\n}\n.pt-16{\n    padding-top: 1rem;\n}\n.pt-18{\n    padding-top: 1.125rem;\n}\n.pt-48{\n    padding-top: 3rem;\n}\n.pt-52{\n    padding-top: 3.25rem;\n}\n.pt-64{\n    padding-top: 4rem;\n}\n.pt-72{\n    padding-top: 4.5rem;\n}\n.pt-76{\n    padding-top: 4.75rem;\n}\n.regular, .normal {\n    font-weight: normal;\n}\n.bold {\n    font-weight: bold;;\n}\n.background-beige {\n    background-color: #beaf98;\n}\n.dot {\n    height: 1.5625rem;\n    width: 1.5625rem;\n    border-radius: 50%;\n    display: inline-block;\n  }\n.red {\n    color: #CD5C5C;\n}\n.black {\n    color: black;\n}\n.green {\n    color: green;\n}\n.indianRed{\n    background-color: indianRed;\n}\n.seaGreen {\n    background-color: darkseagreen;\n}\n.lightCoral {\n    background-color: lightcoral;\n}\n.mediumPurple {\n    background-color: mediumpurple;\n}\n.background-red {\n    background-color: #CD5C5C;\n}\n.background-gray {\n    background-color: #BEBEBE;\n}\n.background-black {\n    background-color: #000000;\n}\n.gold {\n    background-color: gold;\n}\n.white {\n    color: white;\n}\n.w-100 {\n    width: 6.25rem;\n    min-width: 6.25rem;\n}\n.min-w-150 {\n    min-width: 9.375rem;\n}\n.min-w-150--reset {\n    min-width: 9.375rem;\n}\n.min-w-250 {\n    min-width: 15.625rem;\n}\n.min-w-350 {\n    min-width: 21.875rem;\n}\n.max-w-450 {\n    max-width: 28.125rem;\n}\n.max-w-600 {\n    max-width: 37.5rem;\n}\n.w-150 {\n    width: 9.375rem;\n}\n.w-250 {\n    width: 15.625rem;\n}\n.w-300 {\n    width: 18.75rem;\n}\n.w-350 {\n    width: 21.875rem;\n}\n.w-350--reset {\n    width: 21.875rem;\n}\n.w-450 {\n    width: 28.125rem;\n}\n.w-500 {\n    width: 31.25rem;\n}\n.w-600 {\n    width: 37.5rem;\n}\n.h-200 {\n    height: 12.5rem;\n}\n.text-align, .text-center {\n    text-align: center;\n}\n.text-left {\n    text-align: left;\n}\n.blue {\n    color: blue;\n}\n.khaki {\n    color: darkgreen;\n}\n.darkblue {\n    color: darkblue;\n}\n.limegreen {\n    color: #32CD32;\n}\n.darkred {\n    color: darkred;\n}\n.br-beige {\n    border-right: .125rem solid #beaf98;\n}\n.bl-beige {\n    border-left: .125rem solid #beaf98;\n}\n.bt-beige {\n    border-top: .125rem solid #beaf98;\n}\n.bb-beige {\n    border-bottom: .125rem solid #beaf98;\n}\n.rectangle {\n    width: 25rem;\n    height: .625rem;\n}\n.flex, .show{\n    display: flex;\n}\n.float {\n    float: right;\n}\n.pull-up{\n    margin-top: -1.25rem;\n}\n.pull-left{\n    margin-left: -7.5rem;\n}\n.pull-left-pull{\n    margin-left: -7.5rem;\n}\n.pull-left-24{\n    margin-left: -1.5rem !important;\n}\n.moveAndColor {\n    -webkit-animation: moveAndColor 1s linear;\n            animation: moveAndColor 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(13.125rem);\n    }\n}\n@keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(13.125rem);\n    }\n}\n@-webkit-keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.1875rem);\n    }\n}\n@keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.1875rem);\n    }\n}\n@-webkit-keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(4.6875rem);\n    }\n}\n@keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(4.6875rem);\n    }\n}\n.show-fadeIn{\n    -webkit-animation: show-fadeIn 2s linear;\n            animation: show-fadeIn 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.show-slow-fadeIn{\n    -webkit-animation: show-slow-fadeIn 2s linear;\n            animation: show-slow-fadeIn 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.commit-fadeIn-1 {\n    -webkit-animation: commit-fadeIn-1 1s linear;\n            animation: commit-fadeIn-1 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.commit-fadeIn-2 {\n    -webkit-animation: commit-fadeIn-2 2s linear;\n            animation: commit-fadeIn-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.commit-fadeIn-3 {\n    -webkit-animation: commit-fadeIn-3 3s linear;\n            animation: commit-fadeIn-3 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move{\n    -webkit-animation: move 1s linear;\n            animation: move 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n\n}\n.move-image {\n    -webkit-animation: move-image 1s linear;\n            animation: move-image 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left {\n    -webkit-animation: move-left .75s linear;\n            animation: move-left .75s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left-from-working {\n    -webkit-animation: move-left-from-working 1s linear;\n            animation: move-left-from-working 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left-from-index {\n    -webkit-animation: move-left-from-index 1s linear;\n            animation: move-left-from-index 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-left-from-index-2 {\n    -webkit-animation: move-left-from-index-2 1s linear;\n            animation: move-left-from-index-2 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-right {\n    -webkit-animation: move-right 1s linear;\n            animation: move-right 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-right-pull {\n    -webkit-animation: move-right-pull 1s linear;\n            animation: move-right-pull 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-right-merge {\n    -webkit-animation: move-right-merge 1s linear;\n            animation: move-right-merge 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-right-fetch {\n    -webkit-animation: move-right-fetch 1s linear;\n            animation: move-right-fetch 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up {\n    -webkit-animation: move-up 1.3s linear;\n            animation: move-up 1.3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up-pull {\n    -webkit-animation: move-up-pull 1.5s linear;\n            animation: move-up-pull 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up--push {\n    -webkit-animation: move-up--push 1.5s linear;\n            animation: move-up--push 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up-fast {\n    -webkit-animation: move-up-fast .5s linear;\n            animation: move-up-fast .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-fast {\n    -webkit-animation: move-down-fast 2s linear;\n            animation: move-down-fast 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-one {\n    -webkit-animation: move-down-one .5s linear;\n            animation: move-down-one .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-two {\n    -webkit-animation: move-down-two .5s linear;\n            animation: move-down-two .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-down-three {\n    -webkit-animation: move-down-three .5s linear;\n            animation: move-down-three .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.hide{\n    display: none;\n}\nul {\n    list-style-type: none;\n    margin: 1.875rem 1.875rem 0 0;\n    padding: 0;\n}\nli {\n    padding: .9375rem;\n    width: 100%;\n    background: #f1f1f1;\n    margin-bottom: .125rem;\n    font-weight: bold;\n}\n.align-center {\n    align-items: center;\n}\n.align-left {\n    align-items: flex-start;\n}\n.align-right {\n    align-items: flex-end;\n}\n.justify-center {\n    justify-content: center;\n}\n.direction-column {\n    flex-direction: column;\n}\n.pb-8 {\n    padding-bottom: .5rem;\n}\n.pb-16 {\n    padding-bottom: 1rem;\n}\n.pb-24 {\n    padding-bottom: 1.5rem;\n}\n.pb-28 {\n    padding-bottom: 1.75rem;\n}\n.pb-32 {\n    padding-bottom: 2rem;\n}\n.pb-42 {\n    padding-bottom: 2.625rem;\n}\n.pt-32 {\n    padding-top: 2rem;\n}\n.pt-54 {\n    padding-top: 3.375rem;\n}\n.pt-64 {\n    padding-top: 4rem;\n}\n.pt-100 {\n    padding-top: 6.25rem;\n}\n.pt-4 {\n    padding-top: .25rem;\n}\n.pr-8{\n    padding-right: .5rem;\n}\n.pr-16 {\n    padding-right: 1rem;\n}\n.pr-24 {\n    padding-right: 1.5rem;\n}\n.pr-32 {\n    padding-right: 2rem;\n}\n.pr-48 {\n    padding-right: 3rem;\n}\n.pr-64 {\n    padding-right: 4rem;\n}\n.w-quarter {\n    width: 25%;\n}\n.w-half {\n    width: 50%;\n}\n.w-full {\n    width: 100%;\n}\n.order-1 {\n    order: 1;\n}\n@-webkit-keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(8.75rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(8.75rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@-webkit-keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(10rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@-webkit-keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(11.25rem);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n@-webkit-keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@-webkit-keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n/* desktop only css  */\n@media only screen and (min-device-width: 60rem) {\n    .font-size-change {\n        font-size: 2.25rem;\n    }\n    .flex-direction-change {\n        flex-direction: row;\n    }\n    .pull-up-image{\n        margin-top: -11.125rem;\n    }\n    .pv-change {\n        padding-bottom: 2rem;\n        padding-top: 2rem;\n    }\n    .image-size-icon {\n        width: 3.125rem;\n    }\n    .image-size {\n        width: 9.357rem;\n    }\n\n    .image-size--fetch {\n        width: 9.357rem;\n    }\n    .pt-change {\n        padding-top: 2rem;\n    }\n    .pt-change--clone {\n        padding-top: 2rem;\n    }\n    .pt-change--commit {\n        padding-top: 2rem;\n    }\n    .pb-change {\n        padding-bottom: 2rem;\n    }\n\n    .index_commit {\n        padding-top: 3.25rem;\n    }\n    .order-switch-0 {\n        order: 2;\n    }\n\n    .order-switch-2 {\n        order: 0;\n    }\n\n    .order-switch-stash {\n        order: -1;\n    }\n    @-webkit-keyframes move {\n        0% {\n            transform: translateX(0);\n        }\n        50% {\n            transform: translateX(4.53125rem);\n        }\n        100% {\n            transform: translateX(9.875rem);\n        }\n    }\n    @keyframes move {\n        0% {\n            transform: translateX(0);\n        }\n        50% {\n            transform: translateX(4.53125rem);\n        }\n        100% {\n            transform: translateX(9.875rem);\n        }\n    } \n\n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    } \n\n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.4375rem);\n        }\n    } \n    @keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.4375rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 1.25rem);\n        }\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 1.25rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n    @-webkit-keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(17.8125rem);\n        }\n    } \n    @keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(17.8125rem);\n        }\n    } \n    @-webkit-keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n    @keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n\n    @-webkit-keyframes move-up--push {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @keyframes move-up--push {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-fast {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @keyframes move-up-fast {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-fast {\n        0% {\n            transform: translateY(0);\n        }\n        50% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(4.6875rem);\n        }\n    } \n\n    @keyframes move-down-fast {\n        0% {\n            transform: translateY(0);\n        }\n        50% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(4.6875rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.53rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.06rem);\n            color: black;\n        }\n    } \n\n    @keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.53rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.06rem);\n            color: black;\n        }\n    } \n}\n/* mobile landscape css  */\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .hide-in-landscape{\n        display: none;\n    }\n\n    .pl-landscape-clone{\n        padding-left: 1.375rem;\n    }\n\n    .pl-change-status {\n        padding-left: 6rem;\n    }\n\n    .font-change-14-16 {\n        font-size: .875rem;\n    }\n\n    .change-direction-stash {\n        flex-direction: row;\n    }\n\n    .pull-up-in-push {\n        margin-top: -2.81rem;\n    }\n\n    .pt-32-in-portrait {\n        padding-top: 0rem;\n    }\n\n    .pv-change {\n        padding-bottom: .5rem;\n        padding-top: .5rem;\n    }\n    .pull-up-fetch {\n        margin-top: -4.375rem;\n    }\n\n    .pt-change-pull {\n        padding-top: .5rem;\n    }\n    .pt-change-pull-2 {\n        padding-top: 0rem;\n    }\n\n    .margin-in-landscape {\n        margin-top: -1.25rem;\n    }\n\n    .mt-change-pull-0 {\n        margin-top: -.625rem;\n    }\n\n    .mt-change-pull {\n        margin-top: -1.875rem;\n    }\n    .mt-change-pull-2 {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-2-mac {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-2-pc {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-4-mac {\n        margin-top: -1.75rem;\n    }\n    .mt-change-pull-4-pc {\n        margin-top: -1.75rem;\n    }\n\n    .mt-change-pull-5 {\n        margin-top: -1.25rem;\n    }\n    .mt-change-pull-6 {\n        margin-top: -1.25rem;\n    }\n\n    .pb-change-16-32 {\n        padding-bottom: 1rem;\n        margin-top: -.625rem;\n        }\n\n    .padding-landscape-commit-t{\n        padding-top: 2rem;\n    }\n    .padding-landscape-commit-b{\n        padding-bottom: .5rem;\n    }\n    .order-switch-0 {\n        order: 2;\n    }\n\n    .pt-change--clone {\n        padding-top: 1rem;\n    }\n    .pt-change--commit {\n        padding-top: 1rem;\n    }\n    .image-size {\n        width: 9.357rem;\n    }\n\n    .pull-up-image{\n        margin-top: -3.625rem;\n    }\n\n    .image-size--fetch {\n        width: 3.125rem;\n        height: 3.125rem;\n    }\n\n    .flex-direction-change {\n        flex-direction: row;\n    }\n    .pl-change {\n        padding-left: 3.125rem;\n    }\n    \n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    }\n    \n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.44rem);\n        }\n    } \n\n    @keyframes move-left-from-working {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-8.44rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-17.94, 1.375rem);\n        }\n\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(-17.94, 1.375rem);\n        }\n\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-17.94rem, 2.5rem);\n        }\n    } \n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-7.19rem, -.1875rem);\n        }\n    } \n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translate(-7.19rem, -.1875rem);\n        }\n    } \n\n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n    @-webkit-keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n\n    @keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.25rem);\n        }\n    } \n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.25rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.84rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.69rem);\n            color: black;\n        }\n    } \n\n    @keyframes moveAndColor {\n        0% {\n            transform: translateX(0);\n            color: green;\n        }\n        50% {\n            transform: translateX(4.84rem);\n            color: green;\n        }\n        100% {\n            transform: translateX(9.69rem);\n            color: black;\n        }\n    } \n    @-webkit-keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        100% {\n            transform: translate(9.375rem, .3125rem)\n        }\n    } \n    @keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        100% {\n            transform: translate(9.375rem, .3125rem)\n        }\n    }\n    @-webkit-keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    }\n    @keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n}\n/* mobile portrait css */\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .image-size-icon {\n        width: 1.875rem;\n    }\n    .image-size {\n        width: 6.2rem;\n    }\n    .font-size-change {\n        font-size: 1.375rem;\n    }\n\n    .pv-change {\n        padding-bottom: 1rem;\n        padding-top: .5rem;\n    }\n    .pl-change {\n        padding-left: 0rem;\n    }\n    .change-direction {\n        flex-direction: column;\n    }\n    .change-direction-stash {\n        flex-direction: column;\n    }\n\n    .height-change {\n        min-height: 6rem\n    }\n\n    .pt-change {\n        padding-top: 1rem;\n    }\n    .pt-change--clone {\n        padding-top: 1rem;\n    }\n    .pt-change--commit {\n        padding-top: 1rem;\n    }\n\n    .pb-change {\n        padding-bottom: 1rem;\n    }\n\n    .bl-change {\n        border-left: .125rem solid #beaf98;\n    }\n\n    .index_commit {\n        padding-top: 1.875rem;\n    }\n\n    .order-switch-0 {\n        order: 0;\n    }\n    .order-switch-2 {\n        order: 2;\n    }\n\n    .order-switch-stash {\n        order: 3;\n    }\n    \n    \n    .flex-direction-change {\n        flex-direction: column;\n    }\n\n    .pl-64 {\n        padding-left: 0rem;\n    }\n\n    .w-350--reset {\n        width: 100%;\n    }\n\n    .min-w-150--reset {\n        min-width: 3.125rem;\n    }\n    .w-40--reset {\n        width: 40%;\n    }\n    .pl-92-except-portrait{\n        padding-left: 0rem;\n    }\n    .bl-stash {\n        border-left: .125rem solid #beaf98;\n    }\n    .font-change-14-16 {\n        font-size: .875rem;\n    }\n    \n\n    .pull-up-in-push-2 {\n        margin-top: 5rem;\n    }\n    \n\n    .pt-32-desktop-push {\n        padding-top: 2rem;\n    }\n    \n\n    .mt-in-portrait {\n        margin-top: -4.6875rem;\n    }\n\n    .mt-in-portrait-2 {\n        margin-top: -2.5rem;\n    }\n\n    .hide-in-portrait {\n        display: none;\n    }\n\n    .pt-32-in-portrait {\n        padding-top: 2rem;\n    }\n\n    \n    .pr-64-except-portrait {\n        padding-right: 0rem;\n    }\n    .h-change-28-48 {\n        height: 3rem;\n    }\n    .pull-up-image{\n        margin-top: -3.75rem;\n    }\n\n    .image-size--fetch {\n        width: 3.125rem;\n        height: 3.125rem;\n    }\n\n    @-webkit-keyframes moveAndColor {\n        0% {\n            transform: translateY(0);\n            color: green;\n        }\n        50% {\n            transform: translateU(-3.125rem);\n            color: green;\n        }\n        100% {\n            transform: translateY(-6.5625rem);\n            color: black;\n        }\n    }\n\n    @keyframes moveAndColor {\n        0% {\n            transform: translateY(0);\n            color: green;\n        }\n        50% {\n            transform: translateU(-3.125rem);\n            color: green;\n        }\n        100% {\n            transform: translateY(-6.5625rem);\n            color: black;\n        }\n    } \n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait)  {\n \n    @-webkit-keyframes move-image {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform:  translateX(7.5rem);\n        }\n    }\n \n    @keyframes move-image {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform:  translateX(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes moveToWorkingArea {\n        0% {\n            opacity: 0;\n            transform: translateX(0);\n        }\n        70% {\n            opacity: 0.3;\n            transform: translateX(0rem);\n        }\n        100% {\n            opacity: 1;\n            transform: translateX(-4.68rem);\n        }\n    } \n\n    @keyframes moveToWorkingArea {\n        0% {\n            opacity: 0;\n            transform: translateX(0);\n        }\n        70% {\n            opacity: 0.3;\n            transform: translateX(0rem);\n        }\n        100% {\n            opacity: 1;\n            transform: translateX(-4.68rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @keyframes move-down-one {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(2.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n\n    @keyframes move-down-two {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(5rem);\n        }\n    } \n    @-webkit-keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n    @keyframes move-down-three {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.5rem);\n        }\n    } \n\n    @-webkit-keyframes move-left-from-working {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.94rem);\n        }\n    } \n\n    @keyframes move-left-from-working {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(7.94rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13.3125rem);\n        }\n    } \n    @keyframes move-left-from-index {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13.3125rem);\n        }\n    } \n    @-webkit-keyframes move-left-from-index-2 {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13rem);\n        }\n    } \n    @keyframes move-left-from-index-2 {\n        0% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(13rem);\n        }\n    } \n\n    @-webkit-keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-7.19rem);\n        }\n    } \n\n    @keyframes move-left {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-7.19rem);\n        }\n    } \n\n    @-webkit-keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n\n    @keyframes move-right {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(5.625rem);\n        }\n    } \n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    } \n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    } \n    @-webkit-keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n    @keyframes move-right-merge {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(13.75rem);\n        }\n    } \n\n\n    @-webkit-keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.0625rem);\n        }\n    } \n\n\n    @keyframes move-up {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-2.0625rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.125rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.125rem);\n        }\n    } \n\n    @-webkit-keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateY(-8.56rem);\n        }\n    } \n\n    @keyframes move-right-fetch {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateY(-8.56rem);\n        }\n    } \n    @-webkit-keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        50% {\n            transform: translateY(-3.125rem);\n        }\n        100% {\n            transform: translateY(-6.75rem)\n        }\n    } \n    @keyframes move {\n        0% {\n            transform: translateY(0)\n        }\n        50% {\n            transform: translateY(-3.125rem);\n        }\n        100% {\n            transform: translateY(-6.75rem)\n        }\n    } \n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0RBQW9EO0FBQ3hEO0FBQ0E7O0lBRUkscUJBQXFCLEVBQUUsbUJBQW1CO0lBQzFDLFVBQVUsRUFBRSxtQkFBbUI7SUFDL0IsU0FBUyxFQUFFLG1CQUFtQjtFQUNoQztBQUNBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsOEJBQThCO0VBQ2hDO0FBR0Y7SUFDSTs7eUNBRXFDO0lBQ3JDLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCO0FBR0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FB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QTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKO0lBQ0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjs7O0lBR0E7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxpQ0FBaUM7UUFDckM7SUFDSjs7O0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSxpQ0FBaUM7UUFDckM7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGdDQUFnQztRQUNwQztJQUNKOztJQVZBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksZ0NBQWdDO1FBQ3BDO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7SUFDQTtRQUNJO1lBQ0k7UUFDSjtRQUNBO1lBQ0ksZ0NBQWdDO1FBQ3BDO1FBQ0E7WUFDSTtRQUNKO0lBQ0o7SUFWQTtRQUNJO1lBQ0k7UUFDSjtRQUNBO1lBQ0ksZ0NBQWdDO1FBQ3BDO1FBQ0E7WUFDSTtRQUNKO0lBQ0o7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnZpc0dpdEFwcCB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cbjwhLS1zbmFja2Jhci0tPlxudWwuY3VzdG9tIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8qIFJlbW92ZSBidWxsZXRzICovXG4gICAgcGFkZGluZzogMDsgLyogUmVtb3ZlIHBhZGRpbmcgKi9cbiAgICBtYXJnaW46IDA7IC8qIFJlbW92ZSBtYXJnaW5zICovXG4gIH1cbiAgdWwgbGkge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIC5jdXN0b20tc3R5bGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMTgwNztcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cblxuLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyICB7XG4gICAgLyogZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyAqL1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbn1cbiAgXG5cbi5mb250LWNoYW5nZS0xNC0xNiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udy00MC0tcmVzZXQge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG59XG5cbi5wbC1jaGFuZ2Utc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jaGFuZ2UtZGlyZWN0aW9uLXN0YXNoIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucGwtOTItZXhjZXB0LXBvcnRyYWl0e1xuICAgIHBhZGRpbmctbGVmdDogMS44NzVyZW07XG59XG5cbi5wci02NC1leGNlcHQtcG9ydHJhaXQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDByZW07XG59XG5cbi5wdC0zMi1pbi1wb3J0cmFpdCB7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5pbWFnZS1zaXplLWljb24ge1xuICAgIHdpZHRoOiAzLjEyNXJlbTtcbn1cblxuLmZvbnQtc2l6ZS1jaGFuZ2Uge1xuICAgIGZvbnQtc2l6ZTogMS4zNzVyZW07XG59XG5cblxuLnBsLWNoYW5nZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjEyNXJlbTtcbn1cblxuLnBiLWNoYW5nZS0xNi0zMiB7XG4gcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5oLWNoYW5nZS0yOC00OCB7XG4gICAgaGVpZ2h0OiAxLjc1cmVtO1xufVxuXG4uZmxleC1kaXJlY3Rpb24tY2hhbmdlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZvbnQtc2l6ZS0xMiB7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG59XG5cbi5tYXQtZmFiIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgIGxpbmUtaGVpZ2h0OiAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLml0YWxpY3Mge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmZvbnQtc2l6ZS0yNCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5mb250LXNpemUtMzIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvbnQtc2l6ZS00OCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuLmgtMjgge1xuICAgIGhlaWdodDogMS4yNXJlbTtcbn1cblxuLmgtMzgge1xuICAgIGhlaWdodDogMi4zNzVyZW07XG59XG5cbi5oLTQ4IHtcbiAgICBoZWlnaHQ6IDNyZW07XG59XG4uaC01OCB7XG4gICAgaGVpZ2h0OiAzLjYyNXJlbTtcbn1cbi5oLTY5IHtcbiAgICBoZWlnaHQ6IDQuMzEyNXJlbTtcbn1cbi5tci0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC4xMjVyZW07XG59XG4ubXItNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XG59XG4ubWwtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IC4xMjVyZW07XG59XG4ubWwtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbn1cbi5tbC02IHtcbiAgICBtYXJnaW4tbGVmdDogMC4zNzVyZW07XG59XG4ubWwtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xufVxuLm1sLXN3aXRjaC0tcmVzZXQge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjYyNXJlbTtcbn1cbi5tdC0yIHtcbiAgICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xufVxuLm10LTQge1xuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcbn1cbi5tdC04IHtcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbn1cbi5wYi0zNiB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuMjVyZW07XG59XG4ucGItNDgge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuLnBsLTIge1xuICAgIHBhZGRpbmctbGVmdDogLjEyNXJlbTtcbn1cbi5wbC00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IC4yNXJlbTtcbn1cbi5wbC04IHtcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xufVxuLnBsLTE2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG4ucGwtMjAge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbn1cbi5wbC0yNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG59XG4ucGwtMzAge1xuICAgIHBhZGRpbmctbGVmdDogMS44NzVyZW07XG59XG4ucGwtMzIge1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cbi5wbC0zNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjEyNXJlbTtcbn1cbi5wbC0zNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjI1cmVtO1xufVxuLnBsLTQ2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuODc1cmVtO1xufVxuLnBsLTQ4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG59XG4ucGwtNTAge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG59XG4ucGwtMTAwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYuMjVyZW07XG59XG4ucGwtMTUwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDkuMzc1cmVtO1xufVxuLnBsLTIwMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMi41cmVtO1xufVxuLnBsLTI1MCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNS42MjVyZW07XG59XG4ucGwtNjQge1xuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cbi5wbC02NC0tcmVzZXQge1xuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cbi5wbC05MiB7XG4gICAgcGFkZGluZy1sZWZ0OiA1Ljc1cmVtO1xufVxuLnBsLTEwOSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjgxMjVyZW07XG59XG4ucGwtMzUwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIxLjg3NXJlbTtcbn1cbi5wbC01MDAge1xuICAgIHBhZGRpbmctbGVmdDogMzEuMjVyZW07XG59XG4ucHItMiB7XG4gICAgcGFkZGluZy1yaWdodDogLjEyNXJlbTtcbn1cbi5wci00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuMjVyZW07XG59XG4ucHItOCB7XG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XG59XG4ucHItMTYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5wdC04e1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbn1cbi5wdC0xNntcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnB0LTE4e1xuICAgIHBhZGRpbmctdG9wOiAxLjEyNXJlbTtcbn1cbi5wdC00OHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbn1cblxuLnB0LTUye1xuICAgIHBhZGRpbmctdG9wOiAzLjI1cmVtO1xufVxuXG4ucHQtNjR7XG4gICAgcGFkZGluZy10b3A6IDRyZW07XG59XG4ucHQtNzJ7XG4gICAgcGFkZGluZy10b3A6IDQuNXJlbTtcbn1cbi5wdC03NntcbiAgICBwYWRkaW5nLXRvcDogNC43NXJlbTtcbn1cblxuLnJlZ3VsYXIsIC5ub3JtYWwge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDs7XG59XG4uYmFja2dyb3VuZC1iZWlnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlYWY5ODtcbn1cblxuLmRvdCB7XG4gICAgaGVpZ2h0OiAxLjU2MjVyZW07XG4gICAgd2lkdGg6IDEuNTYyNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbi5yZWQge1xuICAgIGNvbG9yOiAjQ0Q1QzVDO1xufVxuXG4uYmxhY2sge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmdyZWVuIHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5pbmRpYW5SZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWFuUmVkO1xufVxuXG4uc2VhR3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcbn1cbi5saWdodENvcmFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuLm1lZGl1bVB1cnBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtcHVycGxlO1xufVxuXG4uYmFja2dyb3VuZC1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRDVDNUM7XG59XG4uYmFja2dyb3VuZC1ncmF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkVCRUJFO1xufVxuLmJhY2tncm91bmQtYmxhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG4uZ29sZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbn1cblxuXG4ud2hpdGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi53LTEwMCB7XG4gICAgd2lkdGg6IDYuMjVyZW07XG4gICAgbWluLXdpZHRoOiA2LjI1cmVtO1xufVxuXG4ubWluLXctMTUwIHtcbiAgICBtaW4td2lkdGg6IDkuMzc1cmVtO1xufVxuLm1pbi13LTE1MC0tcmVzZXQge1xuICAgIG1pbi13aWR0aDogOS4zNzVyZW07XG59XG4ubWluLXctMjUwIHtcbiAgICBtaW4td2lkdGg6IDE1LjYyNXJlbTtcbn1cbi5taW4tdy0zNTAge1xuICAgIG1pbi13aWR0aDogMjEuODc1cmVtO1xufVxuXG4ubWF4LXctNDUwIHtcbiAgICBtYXgtd2lkdGg6IDI4LjEyNXJlbTtcbn1cbi5tYXgtdy02MDAge1xuICAgIG1heC13aWR0aDogMzcuNXJlbTtcbn1cbi53LTE1MCB7XG4gICAgd2lkdGg6IDkuMzc1cmVtO1xufVxuLnctMjUwIHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xufVxuXG4udy0zMDAge1xuICAgIHdpZHRoOiAxOC43NXJlbTtcbn1cblxuLnctMzUwIHtcbiAgICB3aWR0aDogMjEuODc1cmVtO1xufVxuLnctMzUwLS1yZXNldCB7XG4gICAgd2lkdGg6IDIxLjg3NXJlbTtcbn1cblxuLnctNDUwIHtcbiAgICB3aWR0aDogMjguMTI1cmVtO1xufVxuXG4udy01MDAge1xuICAgIHdpZHRoOiAzMS4yNXJlbTtcbn1cblxuLnctNjAwIHtcbiAgICB3aWR0aDogMzcuNXJlbTtcbn1cblxuLmgtMjAwIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG59XG5cbi50ZXh0LWFsaWduLCAudGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ibHVlIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuLmtoYWtpIHtcbiAgICBjb2xvcjogZGFya2dyZWVuO1xufVxuXG4uZGFya2JsdWUge1xuICAgIGNvbG9yOiBkYXJrYmx1ZTtcbn1cblxuLmxpbWVncmVlbiB7XG4gICAgY29sb3I6ICMzMkNEMzI7XG59XG5cbi5kYXJrcmVkIHtcbiAgICBjb2xvcjogZGFya3JlZDtcbn1cblxuLmJyLWJlaWdlIHtcbiAgICBib3JkZXItcmlnaHQ6IC4xMjVyZW0gc29saWQgI2JlYWY5ODtcbn1cbi5ibC1iZWlnZSB7XG4gICAgYm9yZGVyLWxlZnQ6IC4xMjVyZW0gc29saWQgI2JlYWY5ODtcbn1cbi5idC1iZWlnZSB7XG4gICAgYm9yZGVyLXRvcDogLjEyNXJlbSBzb2xpZCAjYmVhZjk4O1xufVxuLmJiLWJlaWdlIHtcbiAgICBib3JkZXItYm90dG9tOiAuMTI1cmVtIHNvbGlkICNiZWFmOTg7XG59XG5cbi5yZWN0YW5nbGUge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgICBoZWlnaHQ6IC42MjVyZW07XG59XG4uZmxleCwgLnNob3d7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsb2F0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucHVsbC11cHtcbiAgICBtYXJnaW4tdG9wOiAtMS4yNXJlbTtcbn1cblxuXG4ucHVsbC1sZWZ0e1xuICAgIG1hcmdpbi1sZWZ0OiAtNy41cmVtO1xufVxuLnB1bGwtbGVmdC1wdWxse1xuICAgIG1hcmdpbi1sZWZ0OiAtNy41cmVtO1xufVxuXG4ucHVsbC1sZWZ0LTI0e1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tb3ZlQW5kQ29sb3Ige1xuICAgIGFuaW1hdGlvbjogbW92ZUFuZENvbG9yIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBtb3ZlLWltYWdlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMy4xMjVyZW0pO1xuICAgIH1cbn0gXG5Aa2V5ZnJhbWVzIG1vdmUtdXAtZmFzdCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMTg3NXJlbSk7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBtb3ZlLWRvd24tZmFzdCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0LjY4NzVyZW0pO1xuICAgIH1cbn0gXG5cbi5zaG93LWZhZGVJbntcbiAgICBhbmltYXRpb246IHNob3ctZmFkZUluIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLnNob3ctc2xvdy1mYWRlSW57XG4gICAgYW5pbWF0aW9uOiBzaG93LXNsb3ctZmFkZUluIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmNvbW1pdC1mYWRlSW4tMSB7XG4gICAgYW5pbWF0aW9uOiBjb21taXQtZmFkZUluLTEgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuLmNvbW1pdC1mYWRlSW4tMiB7XG4gICAgYW5pbWF0aW9uOiBjb21taXQtZmFkZUluLTIgMnMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uY29tbWl0LWZhZGVJbi0zIHtcbiAgICBhbmltYXRpb246IGNvbW1pdC1mYWRlSW4tMyAzcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3Zle1xuICAgIGFuaW1hdGlvbjogbW92ZSAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cbn1cblxuLm1vdmUtaW1hZ2Uge1xuICAgIGFuaW1hdGlvbjogbW92ZS1pbWFnZSAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4ubW92ZS1sZWZ0IHtcbiAgICBhbmltYXRpb246IG1vdmUtbGVmdCAuNzVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtbGVmdC1mcm9tLXdvcmtpbmcge1xuICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LWZyb20td29ya2luZyAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWxlZnQtZnJvbS1pbmRleCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWxlZnQtZnJvbS1pbmRleCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4ubW92ZS1sZWZ0LWZyb20taW5kZXgtMiB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWxlZnQtZnJvbS1pbmRleC0yIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtcmlnaHQge1xuICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXJpZ2h0LXB1bGwge1xuICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1wdWxsIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtcmlnaHQtbWVyZ2Uge1xuICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1tZXJnZSAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4ubW92ZS1yaWdodC1mZXRjaCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXJpZ2h0LWZldGNoIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtdXAge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cCAxLjNzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtdXAtcHVsbCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXVwLXB1bGwgMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwLS1wdXNoIHtcbiAgICBhbmltYXRpb246IG1vdmUtdXAtLXB1c2ggMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwLWZhc3Qge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cC1mYXN0IC41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWRvd24tZmFzdCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWRvd24tZmFzdCAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWRvd24tb25lIHtcbiAgICBhbmltYXRpb246IG1vdmUtZG93bi1vbmUgLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtZG93bi10d28ge1xuICAgIGFuaW1hdGlvbjogbW92ZS1kb3duLXR3byAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1kb3duLXRocmVlIHtcbiAgICBhbmltYXRpb246IG1vdmUtZG93bi10aHJlZSAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMS44NzVyZW0gMS44NzVyZW0gMCAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgICBwYWRkaW5nOiAuOTM3NXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIG1hcmdpbi1ib3R0b206IC4xMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hbGlnbi1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWxpZ24tbGVmdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uYWxpZ24tcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLmp1c3RpZnktY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpcmVjdGlvbi1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wYi04IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG59XG4ucGItMTYge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLnBiLTI0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xufVxuXG4ucGItMjgge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjc1cmVtO1xufVxuLnBiLTMyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLnBiLTQyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi42MjVyZW07XG59XG4ucHQtMzIge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4ucHQtNTQge1xuICAgIHBhZGRpbmctdG9wOiAzLjM3NXJlbTtcbn1cblxuLnB0LTY0IHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cblxuLnB0LTEwMCB7XG4gICAgcGFkZGluZy10b3A6IDYuMjVyZW07XG59XG5cbi5wdC00IHtcbiAgICBwYWRkaW5nLXRvcDogLjI1cmVtO1xufVxuXG4ucHItOHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbn1cbi5wci0xNiB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLnByLTI0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG59XG4ucHItMzIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG59XG5cbi5wci00OCB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbn1cbi5wci02NCB7XG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcbn1cbi53LXF1YXJ0ZXIge1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi53LWhhbGYge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi53LWZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub3JkZXItMSB7XG4gICAgb3JkZXI6IDE7XG59XG5cbkBrZXlmcmFtZXMgY29tbWl0LWZhZGVJbi0xIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4Ljc1cmVtKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIGNvbW1pdC1mYWRlSW4tMiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTByZW0pO1xuICAgIH1cbiAgICAzMiUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTByZW0pO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgY29tbWl0LWZhZGVJbi0zIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMS4yNXJlbSk7XG4gICAgfVxuICAgIDQyJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMS4yNXJlbSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufSBcblxuXG5Aa2V5ZnJhbWVzIHNob3ctZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn0gXG5Aa2V5ZnJhbWVzIHNob3ctc2xvdy1mYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufSBcblxuLyogZGVza3RvcCBvbmx5IGNzcyAgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDYwcmVtKSB7XG4gICAgLmZvbnQtc2l6ZS1jaGFuZ2Uge1xuICAgICAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgfVxuICAgIC5mbGV4LWRpcmVjdGlvbi1jaGFuZ2Uge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbiAgICAucHVsbC11cC1pbWFnZXtcbiAgICAgICAgbWFyZ2luLXRvcDogLTExLjEyNXJlbTtcbiAgICB9XG4gICAgLnB2LWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLmltYWdlLXNpemUtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAzLjEyNXJlbTtcbiAgICB9XG4gICAgLmltYWdlLXNpemUge1xuICAgICAgICB3aWR0aDogOS4zNTdyZW07XG4gICAgfVxuXG4gICAgLmltYWdlLXNpemUtLWZldGNoIHtcbiAgICAgICAgd2lkdGg6IDkuMzU3cmVtO1xuICAgIH1cbiAgICAucHQtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNsb25lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbiAgICAucGItY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgLmluZGV4X2NvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzLjI1cmVtO1xuICAgIH1cbiAgICAub3JkZXItc3dpdGNoLTAge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLTIge1xuICAgICAgICBvcmRlcjogMDtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLXN0YXNoIHtcbiAgICAgICAgb3JkZXI6IC0xO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIG1vdmUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0LjUzMTI1cmVtKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5Ljg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEzLjQzNzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLXdvcmtpbmcge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTguNDM3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20taW5kZXgge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTcuOTRyZW0sIDEuMjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4LTIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTcuOTRyZW0sIDIuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWZldGNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3LjgxMjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtbWVyZ2Uge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMuNzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi4xODc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVsbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtLXB1c2gge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi4xODc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtZmFzdCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi4xODc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi1mYXN0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNC42ODc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi1vbmUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi10d28ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXRocmVlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlQW5kQ29sb3Ige1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0LjUzcmVtKTtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5LjA2cmVtKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi8qIG1vYmlsZSBsYW5kc2NhcGUgY3NzICAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSAge1xuICAgIC5oaWRlLWluLWxhbmRzY2FwZXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucGwtbGFuZHNjYXBlLWNsb25le1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuMzc1cmVtO1xuICAgIH1cblxuICAgIC5wbC1jaGFuZ2Utc3RhdHVzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2cmVtO1xuICAgIH1cblxuICAgIC5mb250LWNoYW5nZS0xNC0xNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICB9XG5cbiAgICAuY2hhbmdlLWRpcmVjdGlvbi1zdGFzaCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuXG4gICAgLnB1bGwtdXAtaW4tcHVzaCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yLjgxcmVtO1xuICAgIH1cblxuICAgIC5wdC0zMi1pbi1wb3J0cmFpdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgIH1cblxuICAgIC5wdi1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICB9XG4gICAgLnB1bGwtdXAtZmV0Y2gge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNC4zNzVyZW07XG4gICAgfVxuXG4gICAgLnB0LWNoYW5nZS1wdWxsIHtcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIH1cbiAgICAucHQtY2hhbmdlLXB1bGwtMiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgIH1cblxuICAgIC5tYXJnaW4taW4tbGFuZHNjYXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gICAgfVxuXG4gICAgLm10LWNoYW5nZS1wdWxsLTAge1xuICAgICAgICBtYXJnaW4tdG9wOiAtLjYyNXJlbTtcbiAgICB9XG5cbiAgICAubXQtY2hhbmdlLXB1bGwge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMS44NzVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLjEyNXJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdWxsLTItbWFjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLjEyNXJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdWxsLTItcGMge1xuICAgICAgICBtYXJnaW4tdG9wOiAuMTI1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtNC1tYWMge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMS43NXJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdWxsLTQtcGMge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMS43NXJlbTtcbiAgICB9XG5cbiAgICAubXQtY2hhbmdlLXB1bGwtNSB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtNiB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xuICAgIH1cblxuICAgIC5wYi1jaGFuZ2UtMTYtMzIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLS42MjVyZW07XG4gICAgICAgIH1cblxuICAgIC5wYWRkaW5nLWxhbmRzY2FwZS1jb21taXQtdHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5wYWRkaW5nLWxhbmRzY2FwZS1jb21taXQtYntcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgIH1cbiAgICAub3JkZXItc3dpdGNoLTAge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAucHQtY2hhbmdlLS1jbG9uZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIH1cbiAgICAucHQtY2hhbmdlLS1jb21taXQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICB9XG4gICAgLmltYWdlLXNpemUge1xuICAgICAgICB3aWR0aDogOS4zNTdyZW07XG4gICAgfVxuXG4gICAgLnB1bGwtdXAtaW1hZ2V7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zLjYyNXJlbTtcbiAgICB9XG5cbiAgICAuaW1hZ2Utc2l6ZS0tZmV0Y2gge1xuICAgICAgICB3aWR0aDogMy4xMjVyZW07XG4gICAgICAgIGhlaWdodDogMy4xMjVyZW07XG4gICAgfVxuXG4gICAgLmZsZXgtZGlyZWN0aW9uLWNoYW5nZSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgIC5wbC1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xuICAgIH1cbiAgICBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi1vbmUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi10d28ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXRocmVlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS13b3JraW5nIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04LjQ0cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3Ljk0LCAxLjM3NXJlbSk7XG4gICAgICAgIH1cblxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleC0yIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE3Ljk0cmVtLCAyLjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03LjE5cmVtLCAtLjE4NzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1LjYyNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUuNjI1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtbWVyZ2Uge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMuNzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi4yNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlQW5kQ29sb3Ige1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0Ljg0cmVtKTtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5LjY5cmVtKTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5LjM3NXJlbSwgLjMxMjVyZW0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWZldGNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzLjc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi8qIG1vYmlsZSBwb3J0cmFpdCBjc3MgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5pbWFnZS1zaXplLWljb24ge1xuICAgICAgICB3aWR0aDogMS44NzVyZW07XG4gICAgfVxuICAgIC5pbWFnZS1zaXplIHtcbiAgICAgICAgd2lkdGg6IDYuMnJlbTtcbiAgICB9XG4gICAgLmZvbnQtc2l6ZS1jaGFuZ2Uge1xuICAgICAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgIH1cblxuICAgIC5wdi1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIH1cbiAgICAucGwtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgIH1cbiAgICAuY2hhbmdlLWRpcmVjdGlvbiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5jaGFuZ2UtZGlyZWN0aW9uLXN0YXNoIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuaGVpZ2h0LWNoYW5nZSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDZyZW1cbiAgICB9XG5cbiAgICAucHQtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNsb25lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIH1cblxuICAgIC5wYi1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAuYmwtY2hhbmdlIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IC4xMjVyZW0gc29saWQgI2JlYWY5ODtcbiAgICB9XG5cbiAgICAuaW5kZXhfY29tbWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEuODc1cmVtO1xuICAgIH1cblxuICAgIC5vcmRlci1zd2l0Y2gtMCB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgIH1cbiAgICAub3JkZXItc3dpdGNoLTIge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLXN0YXNoIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5mbGV4LWRpcmVjdGlvbi1jaGFuZ2Uge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5wbC02NCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgICB9XG5cbiAgICAudy0zNTAtLXJlc2V0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLm1pbi13LTE1MC0tcmVzZXQge1xuICAgICAgICBtaW4td2lkdGg6IDMuMTI1cmVtO1xuICAgIH1cbiAgICAudy00MC0tcmVzZXQge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgIH1cbiAgICAucGwtOTItZXhjZXB0LXBvcnRyYWl0e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuICAgIC5ibC1zdGFzaCB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAuMTI1cmVtIHNvbGlkICNiZWFmOTg7XG4gICAgfVxuICAgIC5mb250LWNoYW5nZS0xNC0xNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICB9XG4gICAgXG5cbiAgICAucHVsbC11cC1pbi1wdXNoLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIH1cbiAgICBcblxuICAgIC5wdC0zMi1kZXNrdG9wLXB1c2gge1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG4gICAgXG5cbiAgICAubXQtaW4tcG9ydHJhaXQge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNC42ODc1cmVtO1xuICAgIH1cblxuICAgIC5tdC1pbi1wb3J0cmFpdC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIuNXJlbTtcbiAgICB9XG5cbiAgICAuaGlkZS1pbi1wb3J0cmFpdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnB0LTMyLWluLXBvcnRyYWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgXG4gICAgLnByLTY0LWV4Y2VwdC1wb3J0cmFpdCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDByZW07XG4gICAgfVxuICAgIC5oLWNoYW5nZS0yOC00OCB7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICB9XG4gICAgLnB1bGwtdXAtaW1hZ2V7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zLjc1cmVtO1xuICAgIH1cblxuICAgIC5pbWFnZS1zaXplLS1mZXRjaCB7XG4gICAgICAgIHdpZHRoOiAzLjEyNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIG1vdmVBbmRDb2xvciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVVKC0zLjEyNXJlbSk7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYuNTYyNXJlbSk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG5cblxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkgIHtcbiBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtaW1hZ2Uge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVYKDcuNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlVG9Xb3JraW5nQXJlYSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQuNjhyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLW9uZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXR3byB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdGhyZWUge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLXdvcmtpbmcge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNy45NHJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20taW5kZXgge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTMuMzEyNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20taW5kZXgtMiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3JlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTcuMTlyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1LjYyNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExLjJyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQtbWVyZ2Uge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMuNzVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMDYyNXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xMjVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1mZXRjaCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOC41NnJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIEBrZXlmcmFtZXMgbW92ZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMuMTI1cmVtKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNi43NXJlbSlcbiAgICAgICAgfVxuICAgIH0gXG5cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"visGitApp flex direction-column align-center\"> \n  <div class=\"flex align-center justify-center pl-8 pv-change\">\n    <img class=\"image-size-icon\" alt=\"Visual Git Logo\" src=\"favicon.ico\"/>\n    <div class=\"font-size-change bold pl-16\">Visualize Git</div>\n  </div>\n  <mat-form-field class=\"w-250 pt-32\" appearance=\"fill\">\n    <mat-label float=\"never\">Choose a git command</mat-label>\n    <mat-select (selectionChange)=\"selectCommand($event.value)\">\n      <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n      >{{command.name}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <button *ngIf=\"chosenCommand !== '' && reset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>See {{chosenCommand}} Again</span></button>\n  \n  <visualize-add  @fade *ngIf=\"chosenCommand === 'add'\" class=\"flex w-full justify-center change-direction\"></visualize-add>\n  <visualize-branch @fade *ngIf=\"chosenCommand === 'branch'\" class=\"flex w-full justify-center change-direction\"></visualize-branch>\n  <visualize-checkout @fade *ngIf=\"chosenCommand === 'checkout'\" class=\"flex w-full justify-center change-direction\"></visualize-checkout>\n  <visualize-clone @fade *ngIf=\"chosenCommand === 'clone'\" class=\"flex w-full justify-center change-direction\"></visualize-clone>\n  <visualize-commit @fade *ngIf=\"chosenCommand === 'commit'\" class=\"flex w-full justify-center change-direction\"></visualize-commit>\n  <visualize-fetch @fade *ngIf=\"chosenCommand === 'fetch'\" class=\"flex w-full justify-center change-direction\"></visualize-fetch>\n  <visualize-init @fade *ngIf=\"chosenCommand === 'init'\" class=\"flex w-full justify-center change-direction\"></visualize-init>\n  <visualize-log @fade *ngIf=\"chosenCommand === 'log'\" class=\"flex w-full justify-center change-direction\"></visualize-log>\n  <visualize-merge @fade *ngIf=\"chosenCommand === 'merge'\" class=\"flex w-full justify-center change-direction\"></visualize-merge>\n  <visualize-pull @fade *ngIf=\"chosenCommand === 'pull'\" class=\"flex w-full align-center justify-center change-direction\"></visualize-pull>\n  <visualize-push @fade *ngIf=\"chosenCommand === 'push'\" class=\"flex w-full justify-center change-direction\"></visualize-push>\n  <visualize-reset @fade *ngIf=\"chosenCommand === 'reset'\" class=\"flex w-full justify-center change-direction\"></visualize-reset>\n  <visualize-stash @fade *ngIf=\"chosenCommand === 'stash'\" class=\"flex w-full justify-center change-direction\"></visualize-stash>\n  <visualize-status @fade *ngIf=\"chosenCommand === 'status'\" class=\"flex w-full justify-center change-direction\"></visualize-status>\n\n</section>\n"

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
        navigator.userAgent.includes('Mac') ? this.sharedService.isMac = true : this.sharedService.isMac = false;
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
/* harmony import */ var _push_push_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./push/push.component */ "./src/app/push/push.component.ts");
/* harmony import */ var _pull_pull_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pull/pull.component */ "./src/app/pull/pull.component.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/reset/reset.component.ts");
/* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./log/log.component */ "./src/app/log/log.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/branch/branch.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _stash_stash_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./stash/stash.component */ "./src/app/stash/stash.component.ts");
/* harmony import */ var _merge_merge_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./merge/merge.component */ "./src/app/merge/merge.component.ts");
/* harmony import */ var _fetch_fetch_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fetch/fetch.component */ "./src/app/fetch/fetch.component.ts");
























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
                _push_push_component__WEBPACK_IMPORTED_MODULE_13__["PushComponent"],
                _pull_pull_component__WEBPACK_IMPORTED_MODULE_14__["PullComponent"],
                _reset_reset_component__WEBPACK_IMPORTED_MODULE_15__["ResetComponent"],
                _log_log_component__WEBPACK_IMPORTED_MODULE_16__["LogComponent"],
                _branch_branch_component__WEBPACK_IMPORTED_MODULE_17__["BranchComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_18__["StatusComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__["CheckoutComponent"],
                _stash_stash_component__WEBPACK_IMPORTED_MODULE_20__["StashComponent"],
                _merge_merge_component__WEBPACK_IMPORTED_MODULE_21__["MergeComponent"],
                _fetch_fetch_component__WEBPACK_IMPORTED_MODULE_22__["FetchComponent"]
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

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue align-center pchange-branch h-28\" >\n    <div *ngIf=\"!hideMessage\" [@myTrigger]=\"fadeIn\">\"git branch\" lists the branches. The asterisk (*) indicates the current branch.</div>  \n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeBranch()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git branch\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n\n  <section class= \"flex direction-column pt-16 w-quarter align-left\" >\n    <div [ngClass]=\"{'green': i == '1'}\" class=\"pl-change pt-8 pb-8\" *ngFor=\"let branch of branches; let i = index\" [@myTrigger]=\"fadeIn\">{{branch}}</div>\n  </section>\n</div>\n\n"

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

module.exports = "\n.pull-up-pc {\n    margin-top: -5px;\n}\n\n.move-up-fast-pc {\n    -webkit-animation: move-up-fast-pc .5s linear;\n            animation: move-up-fast-pc .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-down-fast-pc {\n    -webkit-animation: move-down-fast-pc 2s linear;\n            animation: move-down-fast-pc 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes move-up-fast-pc {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.8rem);\n    }\n}\n\n@keyframes move-up-fast-pc {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-2.8rem);\n    }\n}\n\n@-webkit-keyframes move-down-fast-pc {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(5.2rem);\n    }\n}\n\n@keyframes move-down-fast-pc {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(5.2rem);\n    }\n} \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7QUFDSjs7QUFWQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnB1bGwtdXAtcGMge1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5tb3ZlLXVwLWZhc3QtcGMge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cC1mYXN0LXBjIC41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLWRvd24tZmFzdC1wYyB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWRvd24tZmFzdC1wYyAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZS11cC1mYXN0LXBjIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi44cmVtKTtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIG1vdmUtZG93bi1mYXN0LXBjIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUuMnJlbSk7XG4gICAgfVxufSBcbiJdfQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue h-change-28-48 align-center\">\n    <div *ngIf=\"hideMessage2 && hideMessage3\">Example: The HEAD points to the branch \"main\"</div>\n    <div *ngIf=\"!hideMessage2 && !hideMessage\">The HEAD points to the branch \"bug/25282\"</div>\n    <div class=\"pl-32 pr-32 text-center\" *ngIf=\"!hideMessage3 && !hideMessage\">A new branch is created (a copy of\n      \"main\") and the HEAD points to it.</div>\n  </div>\n  <div class=\"flex pt-16\">\n    <div class=\"pr-8\"></div>\n    <mat-form-field class=\"w-full stash-field\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose an option</mat-label>\n      <mat-select [disabled]=\"disableOption\" (selectionChange)=\"selectCommand($event.value)\">\n        <mat-option *ngFor=\"let command of commands\" [value]=\"command.name\">{{command.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <section class=\"flex flex-direction-change align-center\">\n    <button *ngIf=\"chosenCommand === 'checkout an existing branch'\" [disabled]=\"!hideMessage\"\n      (click)=\"visualizeCheckout()\" class=\"w-300\" mat-raised-button color=\"warn\">Visualize \"git checkout\n      bug/25282\"</button>\n    <div class=\"pr-8 pb-8\"></div>\n    <button *ngIf=\"chosenCommand === 'create and checkout a new branch'\" [disabled]=\"!hideMessage\"\n      (click)=\"visualizeCheckoutNew()\" class=\"w-300\" mat-raised-button color=\"warn\">Visualize \"git checkout -b\n      version_2.0\"</button>\n    <div class=\"pr-8 pb-8\"></div>\n  </section>\n\n\n  <div class=\"flex direction-column\">\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pt-16 mt-4 pr-4 white\">&#10132;</div>\n      <!--arrow right-->\n      <div class=\"pt-32 pr-8\">bug/25282</div>\n    </div>\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pr-4\"\n        [ngClass]=\n        \"{'move-up-fast': !hideMessage2 && sharedService.isMac, \n        'move-down-fast': !hideMessage3 && sharedService.isMac, \n        'move-up-fast-pc': !hideMessage2 && !sharedService.isMac, \n        'move-down-fast-pc': !hideMessage3 && !sharedService.isMac, \n        'pull-up-pc': !sharedService.isMac }\">\n        &#10132;</div>\n      <!--arrow right-->\n      <div class=\"mt-8 pr-8\">main</div>\n    </div>\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pr-2 white\">&#10132;</div>\n      <!--arrow right-->\n      <div class=\"mt-8 pr-8\">pbi/25391</div>\n    </div>\n    <div class=\"flex pr-2\">\n      <div class=\"font-size-32 pr-2 white\">&#10132;</div>\n      <!--arrow right-->\n      <div class=\"mt-8 pr-8\" [ngClass]=\"{'hide': hideMessage3, 'show-fadeIn': !hideMessage3 }\">version_2.0</div>\n    </div>\n  </div>\n</div>"

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
        this.hideMessage2 = false;
        this.hideMessage = false;
        this.disableOption = true;
        setTimeout(function () {
            _this.hideMessage = false;
        }, 1000);
        setTimeout(function () {
            _this.sharedService.showSnackbar();
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
            _this.sharedService.showSnackbar();
        }, 2500);
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

module.exports = ".image-size--clone {\n    width: 128px;\n}\n\n.pull-up-image--clone {\n    margin-top: -9.5rem;\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n    .image-size--clone {\n        width: 3.125rem;\n        height: 3.125rem;\n    }\n    .pull-up-image--clone {\n        margin-top: -3.3rem;\n    }\n    \n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .image-size--clone {\n        width: 3.125rem;\n        height: 3.125rem;\n    }\n    .pull-up-image--clone {\n        margin-top: -3.1rem;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvbmUvY2xvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2Qjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jbG9uZS9jbG9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLXNpemUtLWNsb25lIHtcbiAgICB3aWR0aDogMTI4cHg7XG59XG5cbi5wdWxsLXVwLWltYWdlLS1jbG9uZSB7XG4gICAgbWFyZ2luLXRvcDogLTkuNXJlbTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSAge1xuICAgIC5pbWFnZS1zaXplLS1jbG9uZSB7XG4gICAgICAgIHdpZHRoOiAzLjEyNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgICB9XG4gICAgLnB1bGwtdXAtaW1hZ2UtLWNsb25lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTMuM3JlbTtcbiAgICB9XG4gICAgXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5pbWFnZS1zaXplLS1jbG9uZSB7XG4gICAgICAgIHdpZHRoOiAzLjEyNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgICB9XG4gICAgLnB1bGwtdXAtaW1hZ2UtLWNsb25lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTMuMXJlbTtcbiAgICB9XG59XG4iXX0= */"

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

/***/ "./src/app/fetch/fetch.component.html":
/*!********************************************!*\
  !*** ./src/app/fetch/fetch.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: User 2 executes \"get fetch\"</div>\n      <div class=\"flex direction-column\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        <div>All remote branches are fetched to the local repo and are now available for checkout. </div>\n      </div>\n    </div>\n    <div class=\"flex\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeFetch()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git fetch\"</button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n <div class=\"flex flex-direction-change pt-32 pl-16 pr-16\"> \n   <section class=\"flex direction-column justify-center text-center pr-64 order-switch-2 pt-fetch bb-portrait-fetch\"> \n    <div class=\"pl-36 pb-16\">Local Repo User 1</div>\n    <div class=\"flex pr-48 pad-portrait-fetch-1\">\n      <div class=\"flex direction-column\">\n        <div class=\"flex\">\n          <div class=\"pr-8 white\">x</div>\n        </div>\n        <div class=\"flex pull-up-fetch\">\n          <div class=\"mt-8 pt-54 pr-8\">featureA</div>\n        </div>\n      </div>\n      <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n    </div>\n  </section>\n    <section class=\"flex direction-column text-center pr-64 order-1 pt-fetch bb-portrait-fetch\"> \n      <div class=\"pb-16 pl-36\">Remote (Shared) Repo </div>\n      <div class=\"flex justify-center align-center\">\n        <div class=\"flex direction-column pull-up-fetch\">\n          <div class=\"pt-76 pr-8\">featureA</div>\n          <div class=\"pull-up pr-8\" [ngClass]=\"{'hide': hideMessage, 'show move-right-fetch': !hideMessage}\">featureA</div>\n          <div class=\"pt-8 pr-8\">featureB</div>\n          <div class=\"mt-8 pull-up pr-8\"  [ngClass]=\"{'hide': hideMessage, 'show move-right-fetch': !hideMessage}\">featureB</div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column justify-center align-center text-center pr-64 order-switch-0 bb-portrait-fetch\"> \n      <div class=\"pl-30 pb-16\">Local Repo User 2</div>\n      <div class=\"flex pr-48 pad-portrait-fetch-2\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex pull-up-fetch\">\n            <div class=\"pt-76 pr-8 white\">featureA</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"mt-8 pr-8\" [ngClass]=\"{'hide': !hideMessage}\">featureB</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var FetchComponent = /** @class */ (function () {
    function FetchComponent(sharedService) {
        this.sharedService = sharedService;
    }
    FetchComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
    };
    FetchComponent.prototype.visualizeFetch = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 3500);
    };
    FetchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-fetch',
            template: __webpack_require__(/*! ./fetch.component.html */ "./src/app/fetch/fetch.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"blue h-48 pl-32 pr-32 pb-16 text-center\">\n    <span [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: A folder contains 3 files. No git repository exists.</span>\n    <span [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">\n      A git repository is created (look for a hidden folder call .git).\n      Git init only needs to be run once. </span>\n   </div>\n   <div class=\"flex\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeInit()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git init\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n  <div class=\"flex pt-32 change-direction\">\n    <div class=\"order-switch-2 flex  direction-column height-change text-align\"\n         [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Working Area</div>\n      <div class=\"pt-change\">index.html</div>\n      <div class=\"pt-4 \">index.js</div>\n      <div class=\"pt-4 pb-change\">index.css</div>\n    </div>\n    <div class=\"order-1 height-change text-align\"\n        [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Index</div>\n    </div>\n    <div class=\"order-switch-0 height-change text-align\"\n          [ngClass]=\"{'bt-beige bb-beige bl-beige br-beige ': !hideMessage}\">\n      <div class=\"w-full min-w-150 background-black white\" [ngClass]=\"{'hide': hideMessage, 'show-fadeIn': !hideMessage}\">Repository</div>\n    </div>\n  </div>\n</section>"

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

module.exports = ".pull-up-pc {\n    margin-top: -5px;\n    /* border: 1px solid hotpink; */\n}\n.pull-up-pc-2 {\n    margin-top: -10px !important;\n    /* border: 2px solid orange; */\n}\n.move-up-pc {\n    -webkit-animation: move-up-pc 1.3s linear;\n            animation: move-up-pc 1.3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes move-up-pc {\n    0% {\n        transform: translateY(0);\n    }\n    70% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-3.5rem);\n    }\n}\n@keyframes move-up-pc {\n    0% {\n        transform: translateY(0);\n    }\n    70% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-3.5rem);\n    }\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyZ2UvbWVyZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0o7QUFWQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWVyZ2UvbWVyZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdWxsLXVwLXBjIHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGhvdHBpbms7ICovXG59XG4ucHVsbC11cC1wYy0yIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTsgKi9cbn1cblxuLm1vdmUtdXAtcGMge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cC1wYyAxLjNzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBtb3ZlLXVwLXBjIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zLjVyZW0pO1xuICAgIH1cbn0gIl19 */"

/***/ }),

/***/ "./src/app/merge/merge.component.html":
/*!********************************************!*\
  !*** ./src/app/merge/merge.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-change-28-48 pb-change-16-32\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-450\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The main branch is updated with the latest commits from the feature branch.\n        (A merge conflict may need to be resolved.)\n      </div>\n    </div>\n    <div class=\"flex\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizeMerge()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git merge feature\"</button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n <div class=\"flex pt-32 w-full align-center justify-center\"> \n    <section class=\"flex direction-column text-left pr-16\"> \n      <div class=\"pb-8 pl-32 bold\">feature branch </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-18 pl-4 mt-4 pr-2\" [ngClass]=\"{'pull-up-pc': !sharedService.isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pr-2 pt-32\">commit 86b5f</div>\n            <div class=\"pr-8 pull-left pt-32\" [ngClass]=\"{'hide': hideMessage, 'show move-right-merge': !hideMessage}\">commit 86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"font-size-32 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-8 pl-4\">commit e34b2</div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"flex direction-column text-left\"> \n      <div class=\"pb-8 bold pl-32 ml-4\">main branch</div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-18 mt-4 white\" [ngClass]=\"{'pull-up-pc': !sharedService.isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"white\">commit 86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"font-size-32\" [ngClass]=\"{'move-up': !hideMessage, 'pull-up-pc-2': !sharedService.isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pl-2 mt-8\">commit e34b2</div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n"

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

/***/ "./src/app/pull/pull.component.css":
/*!*****************************************!*\
  !*** ./src/app/pull/pull.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.pt-change-pull-1 {\n    padding-top: 4.75rem;\n}\n.pt-change-pull-2 {\n    padding-top: 4rem;\n}\n.mt-change-pull {\n    margin-top: 0rem;\n}\n.mt-change-pull-2-mac {\n    margin-top: .25rem;\n}\n.mt-change-pull-2-pc {\n    margin-top: -.2rem;\n}\n.mt-change-pull-4-mac {\n    margin-top: -0.75rem;\n}\n.mt-change-pull-4-pc {\n    margin-top: -0.85rem;\n}\n/* desktop only css  */\n@media only screen and (min-device-width: 60rem) {\n\n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    }\n\n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(22rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.75rem);\n        }\n    } \n}\n/* mobile landscape css  */\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n\n    .mt-change-pull-0 {\n        margin-top: -.625rem;\n    }\n\n    .mt-change-pull {\n        margin-top: -1.875rem;\n    }\n    .mt-change-pull-2 {\n        margin-top: .125rem;\n    }\n    .mt-change-pull-2-mac {\n        margin-top: -3.875rem;\n    }\n    .mt-change-pull-2-pc {\n        margin-top: -3.99rem;\n    }\n    .mt-change-pull-4-mac {\n        margin-top: -1.75rem;\n    }\n    .mt-change-pull-4-pc {\n        margin-top: -1.75rem;\n    }\n\n    .mt-change-pull-5 {\n        margin-top: -1.25rem;\n    }\n    .mt-change-pull-6 {\n        margin-top: -.9rem;\n    }\n\n    .pt-change-pull-1 {\n        padding-top: .75rem;\n    }\n\n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(15.9rem);\n        }\n    }\n\n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(15.9rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n}\n/* mobile portrait css */\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n\n    .pt-change-pull-2 {\n        padding-top: 0;\n        padding-bottom: 4rem;\n    }\n\n    .pull-left-pull{\n        margin-left: -3rem;\n    }\n \n\n    .pt-change-pull-1 {\n        padding-top: .9rem;\n    }\n\n    .mt-change-pull {\n        margin-top: -1.25rem;\n    }\n    .mt-change-pull-4-mac {\n        margin-top: -5.3rem;\n    }\n    .mt-change-pull-4-pc {\n        margin-top: -5.8rem;\n        /* border: 1px solid hotpink; */\n    }\n    .mt-change-pull-2 {\n        margin-top: .125rem;\n    }\n\n\n    @-webkit-keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    }\n\n\n    @keyframes move-right-pull {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(11.2rem);\n        }\n    } \n\n    @-webkit-keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1rem);\n        }\n    } \n\n    @keyframes move-up-pull {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1rem);\n        }\n    } \n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVsbC9wdWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUEsc0JBQXNCO0FBQ3RCOztJQUVJO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDRCQUE0QjtRQUNoQztJQUNKOztJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDRCQUE0QjtRQUNoQztJQUNKOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtBQUNKO0FBRUEsMEJBQTBCO0FBRTFCOztJQUVJO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKOztJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKOztJQUVBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7O0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtBQUNKO0FBRUEsd0JBQXdCO0FBQ3hCOztJQUVJO1FBQ0ksY0FBYztRQUNkLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7O0lBR0E7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLCtCQUErQjtJQUNuQztJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCOzs7SUFHQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw4QkFBOEI7UUFDbEM7SUFDSjs7O0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksOEJBQThCO1FBQ2xDO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw0QkFBNEI7UUFDaEM7SUFDSjs7SUFWQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDRCQUE0QjtRQUNoQztJQUNKOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvcHVsbC9wdWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wdC1jaGFuZ2UtcHVsbC0xIHtcbiAgICBwYWRkaW5nLXRvcDogNC43NXJlbTtcbn1cbi5wdC1jaGFuZ2UtcHVsbC0yIHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cblxuLm10LWNoYW5nZS1wdWxsIHtcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xufVxuLm10LWNoYW5nZS1wdWxsLTItbWFjIHtcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XG59XG4ubXQtY2hhbmdlLXB1bGwtMi1wYyB7XG4gICAgbWFyZ2luLXRvcDogLS4ycmVtO1xufVxuXG4ubXQtY2hhbmdlLXB1bGwtNC1tYWMge1xuICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtO1xufVxuLm10LWNoYW5nZS1wdWxsLTQtcGMge1xuICAgIG1hcmdpbi10b3A6IC0wLjg1cmVtO1xufVxuXG4vKiBkZXNrdG9wIG9ubHkgY3NzICAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjByZW0pIHtcblxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVsbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbi8qIG1vYmlsZSBsYW5kc2NhcGUgY3NzICAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSAge1xuXG4gICAgLm10LWNoYW5nZS1wdWxsLTAge1xuICAgICAgICBtYXJnaW4tdG9wOiAtLjYyNXJlbTtcbiAgICB9XG5cbiAgICAubXQtY2hhbmdlLXB1bGwge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMS44NzVyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLjEyNXJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdWxsLTItbWFjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTMuODc1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtMi1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zLjk5cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtNC1tYWMge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMS43NXJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdWxsLTQtcGMge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMS43NXJlbTtcbiAgICB9XG5cbiAgICAubXQtY2hhbmdlLXB1bGwtNSB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtNiB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0uOXJlbTtcbiAgICB9XG5cbiAgICAucHQtY2hhbmdlLXB1bGwtMSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAuNzVyZW07XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUuOXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1bGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG4vKiBtb2JpbGUgcG9ydHJhaXQgY3NzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA1OS45Mzc1cmVtKSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIHtcblxuICAgIC5wdC1jaGFuZ2UtcHVsbC0yIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuICAgIH1cblxuICAgIC5wdWxsLWxlZnQtcHVsbHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcmVtO1xuICAgIH1cbiBcblxuICAgIC5wdC1jaGFuZ2UtcHVsbC0xIHtcbiAgICAgICAgcGFkZGluZy10b3A6IC45cmVtO1xuICAgIH1cblxuICAgIC5tdC1jaGFuZ2UtcHVsbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtNC1tYWMge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNS4zcmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1bGwtNC1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01LjhyZW07XG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGhvdHBpbms7ICovXG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVsbC0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLjEyNXJlbTtcbiAgICB9XG5cblxuICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExLjJyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgIEBrZXlmcmFtZXMgbW92ZS11cC1wdWxsIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xuICAgICAgICB9XG4gICAgfSBcblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pull/pull.component.html":
/*!******************************************!*\
  !*** ./src/app/pull/pull.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-600 h-change-28-48\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The local main branch now points to the latest commit from the repo main branch. \n        git pull = git fetch + git merge. (A merge conflict may need to be resolved.) \n      </div>\n    </div>\n    <div class=\"flex align-center pt-32-in-portrait\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizePull()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git pull origin main\"</button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n  <div class=\"flex pt-32 align-center\"> \n    <section class=\"flex direction-column text-center pr-64-except-portrait\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16\">\n        <div>Remote Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-pull-2 pl-4 pr-2\" [ngClass]=\"{'mt-change-pull-2-mac': sharedService.isMac, 'mt-change-pull-2-pc': !sharedService.isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-pull-1 pr-8\">86b5f</div>\n            <div class=\"pt-change-pull-1 pr-8 pull-left-pull\" [ngClass]=\"{'hide': hideMessage, 'show move-right-pull': !hideMessage}\">86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"font-size-32 pr-2 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-pull-0 pr-8 mt-in-portrait\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column align-center text-center pr-64-except-portrait margin-in-landscape mt-in-portrait-2\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16\">\n        <div>Local Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-pull-2 mt-change-pull-3 pr-2 white\" [ngClass]=\"{'mt-change-pull-2-mac': sharedService.isMac, 'mt-change-pull-2-pc': !sharedService.isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-pull-1 pr-8 white \">86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"font-size-32 pr-2\" [ngClass]=\"{'mt-change-pull-4-mac': sharedService.isMac, 'mt-change-pull-4-pc': !sharedService.isMac,'move-up-pull': !hideMessage}\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-pull-6 pr-8 mt-in-portrait\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var PullComponent = /** @class */ (function () {
    function PullComponent(sharedService) {
        this.sharedService = sharedService;
    }
    PullComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
    };
    PullComponent.prototype.visualizePull = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 3400);
    };
    PullComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-pull',
            template: __webpack_require__(/*! ./pull.component.html */ "./src/app/pull/pull.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./pull.component.css */ "./src/app/pull/pull.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
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

module.exports = "\n.pt-change-push {\n    padding-top: 4.75rem;\n}\n.pt-change-push-2 {\n    padding-top: 4rem;\n}\n.mt-change-push {\n    margin-top: 0rem;\n}\n.mt-change-push-2-mac {\n    margin-top: .25rem;\n}\n.mt-change-push-2-pc {\n    margin-top: -.2rem;\n}\n.mt-change-push-4-mac {\n    margin-top: -0.45rem;\n}\n.mt-change-push-4-pc {\n    margin-top: -0.85rem;\n}\n.move-left-push {\n    -webkit-animation: move-left-push .75s linear;\n            animation: move-left-push .75s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up-push-mac {\n    -webkit-animation: move-up-push-mac 1.5s linear;\n            animation: move-up-push-mac 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.move-up-push-pc {\n    -webkit-animation: move-up-push-pc 1.5s linear;\n            animation: move-up-push-pc 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n.pull-left-push-mac {\n    margin-left: -7.2rem;\n}\n.pull-left-push-pc {\n    margin-left: -7.7rem;\n}\n@media only screen and (min-device-width: 60rem) {\n/* desktop */\n    @-webkit-keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    }\n    @keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-13.4375rem);\n        }\n    } \n/* desktop */\n    @-webkit-keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.85rem);\n        }\n    }\n    @keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.85rem);\n        }\n    } \n    @-webkit-keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.85rem);\n        }\n    } \n    @keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.85rem);\n        }\n    } \n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pt-change-push-2 {\n        padding-top: 0;\n        padding-bottom: 4rem;\n    }\n\n    .mt-change-push-2-mac {\n        margin-top: -.5rem;\n\n    }\n    .mt-change-push-2-pc {\n        margin-top: -1rem;\n    }\n\n    .pull-left-push-mac{\n        margin-left: -2.6rem;\n    }\n    .pull-left-push-pc{\n        margin-left: -2.6rem;\n    }\n\n\n    .pt-change-push {\n        padding-top: 0;\n    }\n    .mt-change-push-4-mac {\n        margin-top: -5.4rem;\n    }\n    .mt-change-push-4-pc {\n        margin-top: -5.7rem;\n    }\n/* portrait */\n    @-webkit-keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-12rem);\n        }\n    }\n    @keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-12rem);\n        }\n    } \n\n    /* portrait */\n    @-webkit-keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    }\n    @keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n    @-webkit-keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n    @keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-.875rem);\n        }\n    } \n}\n@media only screen and (max-device-width: 59.9375rem) and (orientation : landscape)  {\n\n    .mt-landscape {\n        margin-top: -4.5rem;\n    }\n\n    .pt-change-push-2 {\n        padding-top: 0;\n        padding-bottom: 4rem;\n    }\n    .mt-change-push-2-mac {\n        margin-top: -.5rem;\n\n    }\n    .mt-change-push-2-pc {\n        margin-top: -.5rem;\n    }\n\n    .pull-left-push-mac{\n        margin-left: -2.6rem;\n    }\n    .pull-left-push-pc{\n        margin-left: -2.6rem;\n    }\n\n    .pt-change-push {\n        padding-top: 0;\n    }\n    .mt-change-push-4-mac {\n        margin-top: -5.1rem;\n    }\n    .mt-change-push-4-pc {\n        margin-top: -5.7rem;\n    }\n    /* landscape */\n    @-webkit-keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-11.7rem);\n        }\n    }\n    @keyframes move-left-push {\n        0% {\n            transform: translateX(0);\n        }\n        100% {\n            transform: translateX(-11.7rem);\n        }\n    } \n    /* landscape */\n    @-webkit-keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.5rem);\n        }\n    }\n    @keyframes move-up-push-mac {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.5rem);\n        }\n    } \n    @-webkit-keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.5rem);\n        }\n    } \n    @keyframes move-up-push-pc {\n        0% {\n            transform: translateY(0);\n        }\n        70% {\n            transform: translateY(0);\n        }\n        100% {\n            transform: translateY(-1.5rem);\n        }\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVzaC9wdXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLCtDQUF1QztZQUF2Qyx1Q0FBdUM7SUFDdkMscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUdBO0FBQ0EsWUFBWTtJQUNSO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLGtDQUFrQztRQUN0QztJQUNKO0lBUEE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksa0NBQWtDO1FBQ3RDO0lBQ0o7QUFDSixZQUFZO0lBQ1I7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtJQVZBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7SUFDQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLCtCQUErQjtRQUNuQztJQUNKO0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7UUFDZCxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxrQkFBa0I7O0lBRXRCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4Qjs7O0lBR0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKLGFBQWE7SUFDVDtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw2QkFBNkI7UUFDakM7SUFDSjtJQVBBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOztJQUVBLGFBQWE7SUFDYjtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLCtCQUErQjtRQUNuQztJQUNKO0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtJQUNBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7SUFWQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLCtCQUErQjtRQUNuQztJQUNKO0FBQ0o7QUFHQTs7SUFFSTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGtCQUFrQjs7SUFFdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQSxjQUFjO0lBQ2Q7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksK0JBQStCO1FBQ25DO0lBQ0o7SUFQQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSwrQkFBK0I7UUFDbkM7SUFDSjtJQUNBLGNBQWM7SUFDZDtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKO0lBVkE7UUFDSTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSw4QkFBOEI7UUFDbEM7SUFDSjtJQUNBO1FBQ0k7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLHdCQUF3QjtRQUM1QjtRQUNBO1lBQ0ksOEJBQThCO1FBQ2xDO0lBQ0o7SUFWQTtRQUNJO1lBQ0ksd0JBQXdCO1FBQzVCO1FBQ0E7WUFDSSx3QkFBd0I7UUFDNUI7UUFDQTtZQUNJLDhCQUE4QjtRQUNsQztJQUNKO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wdXNoL3B1c2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnB0LWNoYW5nZS1wdXNoIHtcbiAgICBwYWRkaW5nLXRvcDogNC43NXJlbTtcbn1cbi5wdC1jaGFuZ2UtcHVzaC0yIHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cblxuLm10LWNoYW5nZS1wdXNoIHtcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xufVxuLm10LWNoYW5nZS1wdXNoLTItbWFjIHtcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XG59XG4ubXQtY2hhbmdlLXB1c2gtMi1wYyB7XG4gICAgbWFyZ2luLXRvcDogLS4ycmVtO1xufVxuXG4ubXQtY2hhbmdlLXB1c2gtNC1tYWMge1xuICAgIG1hcmdpbi10b3A6IC0wLjQ1cmVtO1xufVxuLm10LWNoYW5nZS1wdXNoLTQtcGMge1xuICAgIG1hcmdpbi10b3A6IC0wLjg1cmVtO1xufVxuXG4ubW92ZS1sZWZ0LXB1c2gge1xuICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0LXB1c2ggLjc1cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwLXB1c2gtbWFjIHtcbiAgICBhbmltYXRpb246IG1vdmUtdXAtcHVzaC1tYWMgMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5tb3ZlLXVwLXB1c2gtcGMge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cC1wdXNoLXBjIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ucHVsbC1sZWZ0LXB1c2gtbWFjIHtcbiAgICBtYXJnaW4tbGVmdDogLTcuMnJlbTtcbn1cbi5wdWxsLWxlZnQtcHVzaC1wYyB7XG4gICAgbWFyZ2luLWxlZnQ6IC03LjdyZW07XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjByZW0pIHtcbi8qIGRlc2t0b3AgKi9cbiAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1wdXNoIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMy40Mzc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4vKiBkZXNrdG9wICovXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1c2gtbWFjIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuODVyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVzaC1wYyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjg1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5wdC1jaGFuZ2UtcHVzaC0yIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuICAgIH1cblxuICAgIC5tdC1jaGFuZ2UtcHVzaC0yLW1hYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNXJlbTtcblxuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1c2gtMi1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICAgIH1cblxuICAgIC5wdWxsLWxlZnQtcHVzaC1tYWN7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMi42cmVtO1xuICAgIH1cbiAgICAucHVsbC1sZWZ0LXB1c2gtcGN7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMi42cmVtO1xuICAgIH1cblxuXG4gICAgLnB0LWNoYW5nZS1wdXNoIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVzaC00LW1hYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01LjRyZW07XG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVzaC00LXBjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTUuN3JlbTtcbiAgICB9XG4vKiBwb3J0cmFpdCAqL1xuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LXB1c2gge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEycmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICAvKiBwb3J0cmFpdCAqL1xuICAgIEBrZXlmcmFtZXMgbW92ZS11cC1wdXNoLW1hYyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uODc1cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1c2gtcGMge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjg3NXJlbSk7XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDU5LjkzNzVyZW0pIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpICB7XG5cbiAgICAubXQtbGFuZHNjYXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTQuNXJlbTtcbiAgICB9XG5cbiAgICAucHQtY2hhbmdlLXB1c2gtMiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbiAgICB9XG4gICAgLm10LWNoYW5nZS1wdXNoLTItbWFjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLS41cmVtO1xuXG4gICAgfVxuICAgIC5tdC1jaGFuZ2UtcHVzaC0yLXBjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLS41cmVtO1xuICAgIH1cblxuICAgIC5wdWxsLWxlZnQtcHVzaC1tYWN7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMi42cmVtO1xuICAgIH1cbiAgICAucHVsbC1sZWZ0LXB1c2gtcGN7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMi42cmVtO1xuICAgIH1cblxuICAgIC5wdC1jaGFuZ2UtcHVzaCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1c2gtNC1tYWMge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNS4xcmVtO1xuICAgIH1cbiAgICAubXQtY2hhbmdlLXB1c2gtNC1wYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC01LjdyZW07XG4gICAgfVxuICAgIC8qIGxhbmRzY2FwZSAqL1xuICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LXB1c2gge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExLjdyZW0pO1xuICAgICAgICB9XG4gICAgfSBcbiAgICAvKiBsYW5kc2NhcGUgKi9cbiAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVzaC1tYWMge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgQGtleWZyYW1lcyBtb3ZlLXVwLXB1c2gtcGMge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgNzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41cmVtKTtcbiAgICAgICAgfVxuICAgIH0gXG59Il19 */"

/***/ }),

/***/ "./src/app/push/push.component.html":
/*!******************************************!*\
  !*** ./src/app/push/push.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-600 h-change-28-48 font-change-14-16\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The remote main branch now points to the latest commit from the local main branch.\n        It's advisable to do a pull before a push to a shared repo.\n        When combining code with a push or a pull, merge conflicts may need to be resolved.\n      </div>\n    </div>\n    <div class=\"flex align-center pt-32-in-portrait\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizePush()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git push origin main\"</button>\n      <div class=\"pr-8\"></div>\n    </div>\n  </div>\n  <div class=\"flex pt-32 align-center\"> \n    <section class=\"flex direction-column text-center pr-64-except-portrait\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16 pull-up-in-push\">\n        <div>Remote Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-push-2 mt-change-push-3 pr-2 white\"\n                  [ngClass]=\"{'mt-change-push-2-mac': sharedService.isMac, 'mt-change-push-2-pc': !sharedService.isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-push pr-8 white \">86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"font-size-32 pr-2\" \n            [ngClass]=\"{'move-up-push-mac': !hideMessage && sharedService.isMac, 'move-up-push-pc': !hideMessage && !sharedService.isMac,  \n            'mt-change-push-4-mac': sharedService.isMac, 'mt-change-push-4-pc': !sharedService.isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-push-6 pr-8 mt-in-portrait mt-landscape\">e34b2</div>\n          </div>\n        </div>\n\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column align-center text-center pr-64-except-portrait margin-in-landscape mt-in-portrait-2\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16 pull-up-in-push-2\">\n        <div>Local Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\"  >\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-push-2 pl-4 pr-2\"\n                [ngClass]=\"{'mt-change-push-2-mac': sharedService.isMac, 'mt-change-push-2-pc': !sharedService.isMac}\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-push pr-8\">86b5f</div>\n            <div class=\"pt-change-push pr-8\" \n            [ngClass]=\"{'hide': hideMessage, 'show move-left-push': !hideMessage,\n                        'pull-left-push-mac': sharedService.isMac, 'pull-left-push-pc': !sharedService.isMac}\">86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"font-size-32 pr-2 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-push-0 pr-8 mt-in-portrait mt-landscape\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var PushComponent = /** @class */ (function () {
    function PushComponent(sharedService) {
        this.sharedService = sharedService;
    }
    PushComponent.prototype.ngOnInit = function () {
        this.hideMessage = true;
        this.hideMessage = true;
    };
    PushComponent.prototype.visualizePush = function () {
        var _this = this;
        this.hideMessage = false;
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 3000);
    };
    PushComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-push',
            template: __webpack_require__(/*! ./push.component.html */ "./src/app/push/push.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./push.component.css */ "./src/app/push/push.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
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

module.exports = "<section class= \"flex direction-column align-center\">\n  <div class=\"h-48\">\n   <span class=\"blue font-change-14-16 pl-16 pr-16 text-center\" [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">git reset optionally moves the HEAD in the Repository and optionally overwrites the Index and Working Area</span>\n  <div class=\"flex direction-column\">\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head1' }\">Points to commit one place before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head' }\">Points to HEAD (default)</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head2' }\">Points to commit two places before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || headPointer() !== 'head3' }\">Points to commit three places before HEAD</span>\n    <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'soft' }\">Soft: no overwrites</span>\n     <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'mixed' }\">Mixed (default): overwrite Index</span>\n    <span [ngClass]=\"{'hide': hideMessage || overwriteType() !== 'hard' }\">Hard: overwrite Index and Working Area</span>\n  </div>\n  </div>\n  <div class=\"flex align-center justify-center\">\n    <mat-form-field class=\"w-40\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose where to move HEAD</mat-label>\n      <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommit($event.value)\">\n        <mat-option *ngFor = \"let commit of commits\" [value]=\"commit.name\"\n        >{{commit.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div class=\"pr-8\"></div>\n    <mat-form-field class=\"w-40--reset\" appearance=\"fill\">\n      <mat-label float=\"never\">Choose overwrite option</mat-label>\n      <mat-select [disabled]=\"completed\" (selectionChange)=\"selectCommand($event.value)\">\n        <mat-option *ngFor = \"let command of commands\" [value]=\"command.name\"\n        >{{command.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"flex\">\n    <button [disabled]=\"completed || chosenCommand === '' || chosenCommit === ''\" (click)=\"visualizeReset()\" class=\"w-350--reset\" mat-raised-button color=\"warn\">Visualize \"git reset<span *ngIf=\"chosenCommit !=='no parameter'\"> {{chosenCommit}}</span><span *ngIf=\"chosenCommand !=='no parameter' && chosenCommand !==''\"> --{{chosenCommand}}</span>\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n  <div class=\"flex pt-32 change-directionx\">\n    <div class=\"order-switch-2x flex  direction-column height-change bt-beige bb-beige bl-beige br-beige text-align\">\n      <div class=\"w-full min-w-150--reset background-black white\">Working Area</div>\n      <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n        <div class=\"dot gold\"></div>\n      </div>\n    </div>\n    <div class=\"order-1x height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-150--reset background-black white\">Index</div>\n      <div class=\"flex align-center justify-center pt-8 mt-4 pb-32\">\n        <div class=\"dot gold\"></div>\n        <div class=\"\" \n        [ngClass]=\"{'hide': !hardOverwrite() , 'dot pull-left-24--reset show' : !hideMessage, \n        'headColorGreen-mac': (chosenCommand === 'hard' && headPointer() === 'head'),\n        'headColorRed-mac': (chosenCommand === 'hard' && headPointer() === 'head1'),\n        'headColorPurple-mac': (chosenCommand === 'hard' && headPointer() === 'head2'),\n        'headColorGray-mac': (chosenCommand === 'hard' && headPointer() === 'head3')}\"></div>\n      </div>\n    </div>\n    <div class=\"order-switch-0x height-change bt-beige bl-change bb-beige br-beige text-align\">\n      <div class=\"w-full min-w-250--reset background-black white\">Repository</div>\n      <div class=\"flex align-center pt-8 pb-8 pr-8\">\n        <div class=\"toMove pl-20 pr-8\">HEAD</div>\n        <div class=\"toMove toMove--arrow font-size-32 pr-8\">&#10132;</div> <!--arrow right-->\n        <div class=\"head dot seaGreen adjust2-mac-pc\" [ngClass]=\"{'hide': !copyHead(), \n        'show overwrite-index-mac': sharedService.isMac && copyHead(), 'show overwrite-index-pc': !sharedService.isMac && copyHead()}\"></div>\n        <div class=\"dot seaGreen green-left-mac-pc\" [ngClass]=\"{'adjust-mac-pc': copyHead()}\"></div>\n      </div>\n      <div class=\"flex align-center justify-center ml-switch--reset pl-64--reset pb-8 pr-8\">\n        <div class=\"head1 dot indianRed\" \n        [ngClass]=\"{'hide': !copyHead1(), \n        'show overwrite-index1-mac': copyHead1() && sharedService.isMac, 'show overwrite-index1-pc': copyHead1() && !sharedService.isMac}\"></div>\n        <div class=\"dot indianRed \" [ngClass]=\"{'pull-left-24--reset': copyHead1()}\"></div>\n      </div>\n      <div class=\"flex align-center justify-center ml-switch--reset pt-8 pl-64--reset pb-8 pr-8\">\n        <div class=\"head2 dot mediumPurple\" [ngClass]=\"{'hide': !copyHead2(), \n        'show overwrite-index2-mac': copyHead2() && sharedService.isMac, 'show overwrite-index2-pc': copyHead2() && !sharedService.isMac}\"></div>\n        <div class=\"dot mediumPurple \" [ngClass]=\"{'pull-left-24--reset': copyHead2()}\"></div>\n      </div>\n      <div class=\"flex align-center justify-center ml-switch--reset  pt-8 pl-64--reset pb-8 pr-8\">\n        <div class=\"head3 dot background-gray\" [ngClass]=\"{'hide': !copyHead3(), \n        'show overwrite-index3-mac': copyHead3() && sharedService.isMac, 'show overwrite-index3-pc': copyHead3() && !sharedService.isMac}\"></div>\n        <div class=\"dot background-gray \" [ngClass]=\"{'pull-left-24--reset': copyHead3()}\"></div>\n      </div>\n    </div>\n  </div>\n</section>"

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
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");



var ResetComponent = /** @class */ (function () {
    function ResetComponent(sharedService) {
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
    ResetComponent.prototype.ngOnInit = function () {
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
        setTimeout(function () {
            _this.sharedService.showSnackbar();
        }, 3000);
        this.hideMessage = false;
        this.completed = true;
    };
    ResetComponent.prototype.selectCommand = function (command) {
        this.chosenCommand = command;
    };
    ResetComponent.prototype.selectCommit = function (commit) {
        this.chosenCommit = commit;
    };
    ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'visualize-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./reset.component.css */ "./src/app/reset/reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], ResetComponent);
    return ResetComponent;
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
            var snackbarRef = this.snackBar.open(message, action);
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

module.exports = ".green-bold {\n    color: green;\n    font-weight: bold;\n    padding-left: 16px;\n}\n\n.red-bold {\n    color: red;\n    font-weight: bold;\n}\n\n.ml-neg {\n    margin-left: -40px;\n}\n\n@media only screen and (max-device-width: 59.9375rem) and (orientation : portrait) {\n    .pl-change-status {\n        padding-left: 0rem !important;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7SUFDakM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlbi1ib2xkIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4ucmVkLWJvbGQge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tbC1uZWcge1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTkuOTM3NXJlbSkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XG4gICAgLnBsLWNoYW5nZS1zdGF0dXMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex direction-column w-full align-center\">\n  <div class=\"blue pt-8 h-change-28-48\" >\n    <div class=\"blue w-450 text-center\" *ngIf=\"!hideMessage\" [@myTrigger]=\"fadeIn\"><span class=\"red bold pr-8\">Red: <span class=\"black regular\">in Working Area.</span> </span><span class=\"green bold\">Green:<span class=\"black regular\">  in Index.</span></span></div>\n  </div>\n  <div class=\"flex pt-8\">\n    <button [disabled]=\"!hideMessage\" (click)=\"visualizeStatus()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git status\"</button>\n    <div class=\"pr-8\"></div>\n  </div>\n  <section class= \"flex direction-column pl-change-status pt-16 text-left\" >\n    <div [ngClass]=\"{\n                    'ml-neg': i == '0',\n                    'green-bold pl-16': i == '1',\n                    'red-bold': i == '3'\n                  }\" \n                    class=\"pt-8 pb-8\" *ngFor=\"let message of messages; let i = index\" [@myTrigger]=\"fadeIn\">{{message}}</div>\n  </section>\n</div>\n\n\n"

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