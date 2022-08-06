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

module.exports = "\n.visGitApp {\n    font-family: Arial, Helvetica, sans-serif !important;\n}\n\n.font-change-14-16 {\n    font-size: 16px;\n}\n\n.w-40--reset {\n    width: 250px;\n}\n\n.pl-change-status {\n    padding-left: 320px;\n}\n\n.change-direction-stash {\n    flex-direction: column;\n}\n\n.pl-92-except-portrait{\n    padding-left: 30px;\n}\n\n.pr-64-except-portrait {\n    padding-right: 0px;\n}\n\n.pt-32-in-portrait {\n    padding-top: 32px;\n}\n\n.image-size-icon {\n    width: 50px;\n}\n\n.font-size-change {\n    font-size: 22px;\n}\n\n.pt-change-pull {\n    padding-top: 76px;\n}\n\n.pt-change-pull-2 {\n    padding-top: 64px;\n}\n\n.mt-change-pull {\n    margin-top: 0px;\n}\n\n.mt-change-pull-2 {\n    margin-top: 4px;\n}\n\n.mt-change-pull-4 {\n    margin-top: -12px;\n}\n\n.pl-change {\n    padding-left: 50px;\n}\n\n.pb-change-16-32 {\n padding-bottom: 32px;\n}\n\n.pchange-branch {\n    padding-top: 8px;\n    padding-bottom: 16px;\n}\n\n.h-change-28-48 {\n    height: 28px;\n}\n\n.flex-direction-change {\n    flex-direction: row;\n}\n\n.font-size-12 {\n    font-size: 12px;\n}\n\n.mat-fab .mat-button-wrapper {\n    line-height: 4px !important;\n}\n\n.italics {\n    font-style: italic;\n}\n\n.font-size-24 {\n    font-size: 24px;\n}\n\n.font-size-32 {\n    font-size: 32px;\n}\n\n.font-size-48 {\n    font-size: 48px;\n}\n\n.h-28 {\n    height: 28px;\n}\n\n.h-38 {\n    height: 38px;\n}\n\n.h-48 {\n    height: 48px;\n}\n\n.h-58 {\n    height: 58px;\n}\n\n.h-69 {\n    height: 69px;\n}\n\n.mr-2 {\n    margin-right: 2px;\n}\n\n.mr-4 {\n    margin-right: 4px;\n}\n\n.ml-2 {\n    margin-left: 2px;\n}\n\n.ml-4 {\n    margin-left: 4px;\n}\n\n.ml-6 {\n    margin-left: 6px;\n}\n\n.ml-8 {\n    margin-left: 8px;\n}\n\n.ml-switch--reset {\n    margin-left: 42px;\n}\n\n.mt-2 {\n    margin-top: 2px;\n}\n\n.mt-4 {\n    margin-top: 4px;\n}\n\n.mt-8 {\n    margin-top: 8px;\n}\n\n.pb-36 {\n    padding-bottom: 36px;\n}\n\n.pb-48 {\n    padding-bottom: 48px;\n}\n\n.pl-2 {\n    padding-left: 2px;\n}\n\n.pl-4 {\n    padding-left: 4px;\n}\n\n.pl-8 {\n    padding-left: 8px;\n}\n\n.pl-16 {\n    padding-left: 16px;\n}\n\n.pl-20 {\n    padding-left: 20px;\n}\n\n.pl-24 {\n    padding-left: 24px;\n}\n\n.pl-30 {\n    padding-left: 30px;\n}\n\n.pl-32 {\n    padding-left: 32px;\n}\n\n.pl-34 {\n    padding-left: 34px;\n}\n\n.pl-36 {\n    padding-left: 36px;\n}\n\n.pl-46 {\n    padding-left: 46px;\n}\n\n.pl-48 {\n    padding-left: 48px;\n}\n\n.pl-50 {\n    padding-left: 50px;\n}\n\n.pl-100 {\n    padding-left: 100px;\n}\n\n.pl-150 {\n    padding-left: 150px;\n}\n\n.pl-200 {\n    padding-left: 200px;\n}\n\n.pl-250 {\n    padding-left: 250px;\n}\n\n.pl-64 {\n    padding-left: 64px;\n}\n\n.pl-64--reset {\n    padding-left: 64px;\n}\n\n.pl-92 {\n    padding-left: 92px;\n}\n\n.pl-109 {\n    padding-left: 109px;\n}\n\n.pl-350 {\n    padding-left: 350px;\n}\n\n.pl-500 {\n    padding-left: 500px;\n}\n\n.pr-2 {\n    padding-right: 2px;\n}\n\n.pr-4 {\n    padding-right: 4px;\n}\n\n.pr-8 {\n    padding-right: 8px;\n}\n\n.pr-16 {\n    padding-right: 16px;\n}\n\n.pt-8{\n    padding-top: 8px;\n}\n\n.pt-16{\n    padding-top: 16px;\n}\n\n.pt-18{\n    padding-top: 18px;\n}\n\n.pt-48{\n    padding-top: 48px;\n}\n\n.pt-52{\n    padding-top: 52px;\n}\n\n.pt-64{\n    padding-top: 64px;\n}\n\n.pt-72{\n    padding-top: 72px;\n}\n\n.pt-76{\n    padding-top: 76px;\n}\n\n.regular, .normal {\n    font-weight: normal;\n}\n\n.bold {\n    font-weight: bold;;\n}\n\n.background-beige {\n    background-color: #beaf98;\n}\n\n.dot {\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n.red {\n    color: #CD5C5C;\n}\n\n.black {\n    color: black;\n}\n\n.green {\n    color: green;\n}\n\n.indianRed{\n    background-color: indianRed;\n}\n\n.seaGreen {\n    background-color: darkseagreen;\n}\n\n.lightCoral {\n    background-color: lightcoral;\n}\n\n.mediumPurple {\n    background-color: mediumpurple;\n}\n\n.background-red {\n    background-color: #CD5C5C;\n}\n\n.background-gray {\n    background-color: #BEBEBE;\n}\n\n.background-black {\n    background-color: #000000;\n}\n\n.gold {\n    background-color: gold;\n}\n\n.white {\n    color: white;\n}\n\n.w-100 {\n    width: 100px;\n    min-width: 100px;\n}\n\n.min-w-150 {\n    min-width: 150px;\n}\n\n.min-w-150--reset {\n    min-width: 150px;\n}\n\n.min-w-250 {\n    min-width: 250px;\n}\n\n.min-w-350 {\n    min-width: 350px;\n}\n\n.max-w-450 {\n    max-width: 450px;\n}\n\n.max-w-600 {\n    max-width: 600px;\n}\n\n.w-150 {\n    width: 150px;\n}\n\n.w-250 {\n    width: 250px;\n}\n\n.w-300 {\n    width: 300px;\n}\n\n.w-350 {\n    width: 350px;\n}\n\n.w-350--reset {\n    width: 350px;\n}\n\n.w-450 {\n    width: 450px;\n}\n\n.w-500 {\n    width: 500px;\n}\n\n.w-600 {\n    width: 600px;\n}\n\n.h-200 {\n    height: 200px;\n}\n\n.text-align, .text-center {\n    text-align: center;\n}\n\n.text-left {\n    text-align: left;\n}\n\n.blue {\n    color: blue;\n}\n\n.khaki {\n    color: darkgreen;\n}\n\n.darkblue {\n    color: darkblue;\n}\n\n.limegreen {\n    color: #32CD32;\n}\n\n.darkred {\n    color: darkred;\n}\n\n.br-beige {\n    border-right: 2px solid #beaf98;\n}\n\n.bl-beige {\n    border-left: 2px solid #beaf98;\n}\n\n.bt-beige {\n    border-top: 2px solid #beaf98;\n}\n\n.bb-beige {\n    border-bottom: 2px solid #beaf98;\n}\n\n.rectangle {\n    width: 400px;\n    height: 10px;\n}\n\n.flex, .show{\n    display: flex;\n}\n\n.float {\n    float: right;\n}\n\n.pull-up{\n    margin-top: -20px;\n}\n\n.pull-left{\n    margin-left: -120px;\n}\n\n.pull-left-24{\n    margin-left: -24px !important;\n}\n\n.pull-left-24--reset{\n    margin-left: -24px !important;\n}\n\n.moveAndColor {\n    -webkit-animation: moveAndColor 1s linear;\n            animation: moveAndColor 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(210px);\n    }\n}\n\n@keyframes move-image {\n    0% {\n        transform: translateX(0);\n    }\n    100% {\n        transform: translateX(210px);\n    }\n}\n\n@-webkit-keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-35px);\n    }\n}\n\n@keyframes move-up-fast {\n    0% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(-35px);\n    }\n}\n\n@-webkit-keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(75px);\n    }\n}\n\n@keyframes move-down-fast {\n    0% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(0);\n    }\n    100% {\n        transform: translateY(75px);\n    }\n}\n\n@media only screen and (min-device-width: 960px) {\n        .font-size-change {\n            font-size: 36px;\n        }\n        .flex-direction-change {\n            flex-direction: row;\n        }\n        .pull-up-image{\n            margin-top: -178px;\n        }\n        .pv-change {\n            padding-bottom: 32px;\n            padding-top: 32px;\n        }\n\n        @-webkit-keyframes moveAndColor {\n            0% {\n                transform: translateX(0);\n                color: green;\n            }\n            50% {\n                transform: translateX(72.5px);\n                color: green;\n            }\n            100% {\n                transform: translateX(145px);\n                color: black;\n            }\n        }\n\n        @keyframes moveAndColor {\n            0% {\n                transform: translateX(0);\n                color: green;\n            }\n            50% {\n                transform: translateX(72.5px);\n                color: green;\n            }\n            100% {\n                transform: translateX(145px);\n                color: black;\n            }\n        } \n    }\n\n@media only screen and (max-device-width: 959px) and (orientation : portrait) {\n        .flex-direction-change {\n            flex-direction: column;\n        }\n\n\n        .pull-left-24--reset {\n            -webkit-animation: pull-left-24--reset 1s linear;\n                    animation: pull-left-24--reset 1s linear;\n            -webkit-animation-fill-mode: forwards;\n                    animation-fill-mode: forwards;\n        }\n\n        .pl-64 {\n            padding-left: 0px;\n        }\n\n        .w-350--reset {\n            width: 100%;\n        }\n\n        .min-w-150--reset {\n            min-width: 50px;\n        }\n        .w-40--reset {\n            width: 40%;\n        }\n        .pl-92-except-portrait{\n            padding-left: 0px;\n        }\n        .bl-stash {\n            border-left: 2px solid #beaf98;\n        }\n        .font-change-14-16 {\n            font-size: 14px;\n        }\n        \n\n        .pull-up-in-push-2 {\n            margin-top: 80px;\n        }\n        \n\n        .pt-32-desktop-push {\n            padding-top: 32px;\n        }\n        \n\n        .mt-in-portrait {\n            margin-top: -75px;\n        }\n\n        .mt-in-portrait-2 {\n            margin-top: -40px;\n        }\n\n        .hide-in-portrait {\n            display: none;\n        }\n\n        .pt-32-in-portrait {\n            padding-top: 32px;\n        }\n\n        .pt-change-pull-2 {\n            padding-top: 0;\n            padding-bottom: 64px;\n        }\n        \n        .pr-64-except-portrait {\n            padding-right: 0px;\n        }\n        .h-change-28-48 {\n            height: 48px;\n        }\n        .pull-up-image{\n            margin-top: -60px;\n        }\n                \n        @-webkit-keyframes pull-left-24--reset {\n            0% {\n                opacity: 0;\n            }\n            70% {\n                opacity: 0;\n            }\n            100% {\n                opacity: 1;\n            }\n        }\n                \n        @keyframes pull-left-24--reset {\n            0% {\n                opacity: 0;\n            }\n            70% {\n                opacity: 0;\n            }\n            100% {\n                opacity: 1;\n            }\n        } \n\n        @-webkit-keyframes moveAndColor {\n            0% {\n                transform: translateY(0);\n                color: green;\n            }\n            50% {\n                transform: translateU(-50px);\n                color: green;\n            }\n            100% {\n                transform: translateY(-105px);\n                color: black;\n            }\n        } \n\n        @keyframes moveAndColor {\n            0% {\n                transform: translateY(0);\n                color: green;\n            }\n            50% {\n                transform: translateU(-50px);\n                color: green;\n            }\n            100% {\n                transform: translateY(-105px);\n                color: black;\n            }\n        } \n    }\n\n.show-fadeIn{\n    -webkit-animation: show-fadeIn 2s linear;\n            animation: show-fadeIn 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.show-slow-fadeIn{\n    -webkit-animation: show-slow-fadeIn 4s linear;\n            animation: show-slow-fadeIn 4s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.commit-fadeIn-1 {\n    -webkit-animation: commit-fadeIn-1 1s linear;\n            animation: commit-fadeIn-1 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.commit-fadeIn-2 {\n    -webkit-animation: commit-fadeIn-2 2s linear;\n            animation: commit-fadeIn-2 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.commit-fadeIn-3 {\n    -webkit-animation: commit-fadeIn-3 3s linear;\n            animation: commit-fadeIn-3 3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move{\n    -webkit-animation: move 1s linear;\n            animation: move 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n\n}\n\n.move-image {\n    -webkit-animation: move-image 1s linear;\n            animation: move-image 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-left {\n    -webkit-animation: move-left .75s linear;\n            animation: move-left .75s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-left-from-working {\n    -webkit-animation: move-left-from-working 1s linear;\n            animation: move-left-from-working 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-left-from-index {\n    -webkit-animation: move-left-from-index 1s linear;\n            animation: move-left-from-index 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-left-from-index-2 {\n    -webkit-animation: move-left-from-index-2 1s linear;\n            animation: move-left-from-index-2 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-right {\n    -webkit-animation: move-right 1s linear;\n            animation: move-right 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-right-merge {\n    -webkit-animation: move-right-merge 1s linear;\n            animation: move-right-merge 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-right-fetch {\n    -webkit-animation: move-right-fetch 1s linear;\n            animation: move-right-fetch 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-up {\n    -webkit-animation: move-up 1.3s linear;\n            animation: move-up 1.3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-up-pull {\n    -webkit-animation: move-up-pull 1s linear;\n            animation: move-up-pull 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-up--push {\n    -webkit-animation: move-up--push 1.5s linear;\n            animation: move-up--push 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-up-fast {\n    -webkit-animation: move-up-fast .5s linear;\n            animation: move-up-fast .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-down-fast {\n    -webkit-animation: move-down-fast 2s linear;\n            animation: move-down-fast 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-down-one {\n    -webkit-animation: move-down-one .5s linear;\n            animation: move-down-one .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-down-two {\n    -webkit-animation: move-down-two .5s linear;\n            animation: move-down-two .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.move-down-three {\n    -webkit-animation: move-down-three .5s linear;\n            animation: move-down-three .5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.overwrite-index {\n    -webkit-animation: overwrite-index 1s linear;\n            animation: overwrite-index 1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.overwrite-index1 {\n    -webkit-animation: overwrite-index1 1.5s linear;\n            animation: overwrite-index1 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.overwrite-index2 {\n    -webkit-animation: overwrite-index2 1.5s linear;\n            animation: overwrite-index2 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.overwrite-index3 {\n    -webkit-animation: overwrite-index3 1.5s linear;\n            animation: overwrite-index3 1.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.headColorGreen {\n    background-color: darkseagreen;\n    -webkit-animation: moveToWorkingArea 2s linear;\n            animation: moveToWorkingArea 2s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.headColorRed {\n    background-color: indianred;\n    -webkit-animation: moveToWorkingArea 2.5s linear;\n            animation: moveToWorkingArea 2.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.headColorPurple {\n    background-color: mediumpurple;\n    -webkit-animation: moveToWorkingArea 2.5s linear;\n            animation: moveToWorkingArea 2.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.headColorGray {\n    background-color: #BEBEBE;\n    -webkit-animation: moveToWorkingArea 2.5s linear;\n            animation: moveToWorkingArea 2.5s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes moveToWorkingArea {\n    0% {\n        opacity: 0;\n        transform: translateX(0);\n    }\n    70% {\n        opacity: 0.3;\n        transform: translateX(0px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(-152px);\n    }\n}\n\n@keyframes moveToWorkingArea {\n    0% {\n        opacity: 0;\n        transform: translateX(0);\n    }\n    70% {\n        opacity: 0.3;\n        transform: translateX(0px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateX(-152px);\n    }\n}\n\n@-webkit-keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(140px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes commit-fadeIn-1 {\n    0% {\n        opacity: 0;\n        transform: translateY(140px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@-webkit-keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(160px);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(160px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes commit-fadeIn-2 {\n    0% {\n        opacity: 0;\n        transform: translateY(160px);\n    }\n    32% {\n        opacity: 0;\n        transform: translateY(160px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@-webkit-keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(180px);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(180px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes commit-fadeIn-3 {\n    0% {\n        opacity: 0;\n        transform: translateY(180px);\n    }\n    42% {\n        opacity: 0;\n        transform: translateY(180px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@-webkit-keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes show-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes show-slow-fadeIn {\n    0% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@media only screen and (min-device-width: 960px) {\n        @-webkit-keyframes move {\n            0% {\n                transform: translateX(0);\n            }\n            50% {\n                transform: translateX(72.5px);\n            }\n            100% {\n                transform: translateX(158px);\n            }\n        }\n        @keyframes move {\n            0% {\n                transform: translateX(0);\n            }\n            50% {\n                transform: translateX(72.5px);\n            }\n            100% {\n                transform: translateX(158px);\n            }\n        } \n\n        @-webkit-keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-215px);\n            }\n        } \n\n        @keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-215px);\n            }\n        } \n        @-webkit-keyframes move-left-from-working {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-135px);\n            }\n        } \n        @keyframes move-left-from-working {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-135px);\n            }\n        } \n        @-webkit-keyframes move-left-from-index {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-287px, 20px);\n            }\n        } \n        @keyframes move-left-from-index {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-287px, 20px);\n            }\n        } \n        @-webkit-keyframes move-left-from-index-2 {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-287px, 40px);\n            }\n        } \n        @keyframes move-left-from-index-2 {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-287px, 40px);\n            }\n        } \n        @-webkit-keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(352px);\n            }\n        } \n        @keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(352px);\n            }\n        } \n        @-webkit-keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(285px);\n            }\n        } \n        @keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(285px);\n            }\n        } \n        @-webkit-keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(220px);\n            }\n        } \n        @keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(220px);\n            }\n        } \n        @-webkit-keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-35px);\n            }\n        } \n        @keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-35px);\n            }\n        } \n\n        @-webkit-keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-28px);\n            }\n        } \n\n        @keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-28px);\n            }\n        } \n\n        @-webkit-keyframes move-up--push {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-35px);\n            }\n        } \n\n        @keyframes move-up--push {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-35px);\n            }\n        } \n\n        @-webkit-keyframes move-up-fast {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-35px);\n            }\n        } \n\n        @keyframes move-up-fast {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-35px);\n            }\n        } \n\n        @-webkit-keyframes move-down-fast {\n            0% {\n                transform: translateY(0);\n            }\n            50% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(75px);\n            }\n        } \n\n        @keyframes move-down-fast {\n            0% {\n                transform: translateY(0);\n            }\n            50% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(75px);\n            }\n        } \n\n        @-webkit-keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(40px);\n            }\n        } \n\n        @keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(40px);\n            }\n        } \n\n        @-webkit-keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(80px);\n            }\n        } \n\n        @keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(80px);\n            }\n        } \n        @-webkit-keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(120px);\n            }\n        } \n        @keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(120px);\n            }\n        } \n        @-webkit-keyframes overwrite-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-241px, -3px);\n            }\n        } \n        @keyframes overwrite-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-241px, -3px);\n            }\n        } \n        @-webkit-keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -40px);\n            }\n        } \n        @keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -40px);\n            }\n        } \n        @-webkit-keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -83px);\n            }\n        } \n        @keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -83px);\n            }\n        } \n        @-webkit-keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -123px);\n            }\n        } \n        @keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -123px);\n            }\n        } \n    }\n\n@media only screen and (max-device-width: 959px) and (orientation : landscape)  {\n        .hide-in-landscape{\n            display: none;\n        }\n\n        .pl-landscape-clone{\n            padding-left: 22px;\n        }\n\n        .pl-change-status {\n            padding-left: 200px;\n        }\n\n        .font-change-14-16 {\n            font-size: 14px;\n        }\n\n        .change-direction-stash {\n            flex-direction: row;\n        }\n\n        .pull-up-in-push {\n            margin-top: -45px;\n        }\n\n        .pt-32-in-portrait {\n            padding-top: 0px;\n        }\n    \n        .pv-change {\n            padding-bottom: 8px;\n            padding-top: 8px;\n        }\n        .pull-up-fetch {\n            margin-top: -70px;\n        }\n\n        .pt-change-pull {\n            padding-top: 8px;\n        }\n        .pt-change-pull-2 {\n            padding-top: 0px;\n        }\n\n        .margin-in-landscape {\n            margin-top: -20px;\n        }\n\n        .mt-change-pull-0 {\n            margin-top: -10px;\n        }\n\n        .mt-change-pull {\n            margin-top: -30px;\n        }\n        .mt-change-pull-2 {\n            margin-top: 2px;\n        }\n        .mt-change-pull-4 {\n            margin-top: -28px;\n        }\n\n        .mt-change-pull-5 {\n            margin-top: -20px;\n        }\n        .mt-change-pull-6 {\n            margin-top: -20px;\n        }\n\n        .pb-change-16-32 {\n            padding-bottom: 16px;\n            margin-top: -10px;\n           }\n\n        .padding-landscape-commit-t{\n            padding-top: 32px;\n        }\n        .padding-landscape-commit-b{\n            padding-bottom: 8px;\n        }\n        .order-switch-0 {\n            order: 2;\n        }\n    \n        .pt-change--clone {\n            padding-top: 16px;\n        }\n        .pt-change--commit {\n            padding-top: 16px;\n        }\n        .image-size {\n            width: 150px;\n        }\n\n        .pull-up-image{\n            margin-top: -58px;\n        }\n\n        .image-size--clone {\n            width: 50px;\n        }\n\n        .image-size--fetch {\n            width: 50px;\n            height: 50px;\n        }\n\n        .flex-direction-change {\n            flex-direction: row;\n        }\n        .pl-change {\n            padding-left: 50px;\n        }\n        .pchange-branch {\n            padding-top: 0px;\n            padding-bottom: 0px;\n            margin-top: -10px;\n        }\n\n        \n        @-webkit-keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(40px);\n            }\n        }\n\n        \n        @keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(40px);\n            }\n        } \n\n        @-webkit-keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(80px);\n            }\n        } \n\n        @keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(80px);\n            }\n        } \n        @-webkit-keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(120px);\n            }\n        } \n        @keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(120px);\n            }\n        } \n        @-webkit-keyframes overwrite-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -3px);\n            }\n        } \n        @keyframes overwrite-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -3px);\n            }\n        } \n        @-webkit-keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -40px);\n            }\n        } \n        @keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -40px);\n            }\n        } \n        @-webkit-keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -83px);\n            }\n        } \n        @keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -83px);\n            }\n        } \n        @-webkit-keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -123px);\n            }\n        } \n        @keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-237px, -123px);\n            }\n        } \n\n        @-webkit-keyframes move-left-from-working {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-135px);\n            }\n        } \n\n        @keyframes move-left-from-working {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-135px);\n            }\n        } \n        @-webkit-keyframes move-left-from-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-287px, 22px);\n            }\n\n        } \n        @keyframes move-left-from-index {\n            0% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-287px, 22px);\n            }\n\n        } \n        @-webkit-keyframes move-left-from-index-2 {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-287px, 40px);\n            }\n        } \n        @keyframes move-left-from-index-2 {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-287px, 40px);\n            }\n        } \n        @-webkit-keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-115px, -3px);\n            }\n        } \n        @keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translate(-115px, -3px);\n            }\n        } \n\n        @-webkit-keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(250px);\n            }\n        } \n\n        @keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(250px);\n            }\n        } \n\n        @-webkit-keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(220px);\n            }\n        } \n\n        @keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(220px);\n            }\n        } \n        @-webkit-keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-36px);\n            }\n        } \n        @keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-36px);\n            }\n        } \n\n        @-webkit-keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-14px);\n            }\n        } \n\n        @keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-14px);\n            }\n        } \n\n        @-webkit-keyframes moveAndColor {\n            0% {\n                transform: translateX(0);\n                color: green;\n            }\n            50% {\n                transform: translateX(77.5px);\n                color: green;\n            }\n            100% {\n                transform: translateX(155px);\n                color: black;\n            }\n        } \n\n        @keyframes moveAndColor {\n            0% {\n                transform: translateX(0);\n                color: green;\n            }\n            50% {\n                transform: translateX(77.5px);\n                color: green;\n            }\n            100% {\n                transform: translateX(155px);\n                color: black;\n            }\n        } \n        @-webkit-keyframes move {\n            0% {\n                transform: translateY(0)\n            }\n            100% {\n                transform: translate(150px, 5px)\n            }\n        } \n        @keyframes move {\n            0% {\n                transform: translateY(0)\n            }\n            100% {\n                transform: translate(150px, 5px)\n            }\n        }\n        @-webkit-keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(220px);\n            }\n        }\n        @keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(220px);\n            }\n        } \n    }\n\n@media only screen and (max-device-width: 959px) and (orientation : portrait)  {\n        .image-size--clone {\n            width: 50px;\n        }\n        .pl-change-status {\n            padding-left: 0px;\n        }\n\n        .pt-change-pull {\n            padding-top: 8px;\n        }\n\n        .mt-change-pull {\n            margin-top: -20px;\n        }\n        .mt-change-pull-4 {\n            margin-top: -83px;\n        }\n        .mt-change-pull-2 {\n            margin-top: 2px;\n        }\n\n        .pt-fetch {\n            padding-top: 32px;\n        }\n\n        .bb-portrait-fetch {\n            padding-bottom: 15px;\n            border-bottom: 1px solid gray;\n        }\n\n        .pad-portrait-fetch-1 {\n            justify-content: center;\n            padding-left: 45px;\n        }\n        .pad-portrait-fetch-2 {\n            padding-left: 50px;\n        }\n        .pull-up-fetch {\n            margin-top: -70px;\n        }\n\n        .image-size--fetch {\n            width: 50px;\n            height: 50px;\n        }\n\n        @-webkit-keyframes move-image {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform:  translateX(120px);\n            }\n        }\n\n        @keyframes move-image {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform:  translateX(120px);\n            }\n        } \n\n        @-webkit-keyframes moveToWorkingArea {\n            0% {\n                opacity: 0;\n                transform: translateX(0);\n            }\n            70% {\n                opacity: 0.3;\n                transform: translateX(0px);\n            }\n            100% {\n                opacity: 1;\n                transform: translateX(-75px);\n            }\n        } \n\n        @keyframes moveToWorkingArea {\n            0% {\n                opacity: 0;\n                transform: translateX(0);\n            }\n            70% {\n                opacity: 0.3;\n                transform: translateX(0px);\n            }\n            100% {\n                opacity: 1;\n                transform: translateX(-75px);\n            }\n        } \n\n        @-webkit-keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(40px);\n            }\n        } \n\n        @keyframes move-down-one {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(40px);\n            }\n        } \n\n        @-webkit-keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(80px);\n            }\n        } \n\n        @keyframes move-down-two {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(80px);\n            }\n        } \n        @-webkit-keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(120px);\n            }\n        } \n        @keyframes move-down-three {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(120px);\n            }\n        } \n        @-webkit-keyframes overwrite-index {\n            0% {\n                opacity: 0;\n                transform: translate(0, 0);\n            }\n            70% {\n                opacity: 1;\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-146px, -1px);\n            }\n        } \n        @keyframes overwrite-index {\n            0% {\n                opacity: 0;\n                transform: translate(0, 0);\n            }\n            70% {\n                opacity: 1;\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-146px, -1px);\n            }\n        } \n        @-webkit-keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-150px, -40px);\n            }\n        } \n        @keyframes overwrite-index1 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-150px, -40px);\n            }\n        } \n        @-webkit-keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-147px, -83px);\n            }\n        } \n        @keyframes overwrite-index2 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-147px, -83px);\n            }\n        } \n        @-webkit-keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-147px, -123px);\n            }\n        } \n        @keyframes overwrite-index3 {\n            0% {\n                transform: translate(0, 0);\n            }\n            50% {\n                transform: translate(0, 0);\n            }\n            100% {\n                transform: translate(-147px, -123px);\n            }\n        } \n\n        @-webkit-keyframes move-left-from-working {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(127px);\n            }\n        } \n\n        @keyframes move-left-from-working {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(127px);\n            }\n        } \n        @-webkit-keyframes move-left-from-index {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(213px);\n            }\n        } \n        @keyframes move-left-from-index {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(213px);\n            }\n        } \n        @-webkit-keyframes move-left-from-index-2 {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(208px);\n            }\n        } \n        @keyframes move-left-from-index-2 {\n            0% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(208px);\n            }\n        } \n\n        @-webkit-keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-115px);\n            }\n        } \n\n        @keyframes move-left {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(-115px);\n            }\n        } \n\n        @-webkit-keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(250px);\n            }\n        } \n\n        @keyframes move-right {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(250px);\n            }\n        } \n        @-webkit-keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(220px);\n            }\n        } \n        @keyframes move-right-merge {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateX(220px);\n            }\n        } \n\n\n        @-webkit-keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-33px);\n            }\n        } \n\n\n        @keyframes move-up {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-33px);\n            }\n        } \n\n        @-webkit-keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-18px);\n            }\n        } \n\n        @keyframes move-up-pull {\n            0% {\n                transform: translateY(0);\n            }\n            70% {\n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-18px);\n            }\n        } \n\n        @-webkit-keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateY(-137px);\n            }\n        } \n\n        @keyframes move-right-fetch {\n            0% {\n                transform: translateX(0);\n            }\n            100% {\n                transform: translateY(-137px);\n            }\n        } \n        @-webkit-keyframes move {\n            0% {\n                transform: translateY(0)\n            }\n            50% {\n                transform: translateY(-50px)\n            }\n            100% {\n                transform: translateY(-108px)\n            }\n        } \n        @keyframes move {\n            0% {\n                transform: translateY(0)\n            }\n            50% {\n                transform: translateY(-50px)\n            }\n            100% {\n                transform: translateY(-108px)\n            }\n        } \n\n    }\n\n.hide{\n    display: none;\n}\n\nul {\n    list-style-type: none;\n    margin: 30px 30px 0 0;\n    padding: 0;\n}\n\nli {\n    padding: 15px;\n    width: 100%;\n    background: #f1f1f1;\n    margin-bottom: 2px;\n    font-weight: bold;\n}\n\n.align-center {\n    align-items: center;\n}\n\n.align-left {\n    align-items: flex-start;\n}\n\n.align-right {\n    align-items: flex-end;\n}\n\n.justify-center {\n    justify-content: center;\n}\n\n.direction-column {\n    flex-direction: column;\n}\n\n.pb-8 {\n    padding-bottom: 8px;\n}\n\n.pb-16 {\n    padding-bottom: 16px;\n}\n\n.pb-24 {\n    padding-bottom: 24px;\n}\n\n.pb-28 {\n    padding-bottom: 28px;\n}\n\n.pb-32 {\n    padding-bottom: 32px;\n}\n\n.pb-42 {\n    padding-bottom: 42px;\n}\n\n.pt-32 {\n    padding-top: 32px;\n}\n\n.pt-54 {\n    padding-top: 54px;\n}\n\n.pt-64 {\n    padding-top: 64px;\n}\n\n.pt-100 {\n    padding-top: 100px;\n}\n\n.pt-4 {\n    padding-top: 4px;\n}\n\n.pr-8{\n    padding-right: 8px;\n}\n\n.pr-16 {\n    padding-right: 16px;\n}\n\n.pr-24 {\n    padding-right: 24px;\n}\n\n.pr-32 {\n    padding-right: 32px;\n}\n\n.pr-48 {\n    padding-right: 48px;\n}\n\n.pr-64 {\n    padding-right: 64px;\n}\n\n.w-quarter {\n    width: 25%;\n}\n\n.w-half {\n    width: 50%;\n}\n\n.w-full {\n    width: 100%;\n}\n\n.order-1 {\n    order: 1;\n}\n\n@media only screen and (min-device-width: 960px) {\n    .image-size-icon {\n        width: 50px;\n    }\n    .image-size {\n        width: 150px;\n    }\n    .image-size--clone {\n        width: 150px;\n    }\n\n    .image-size--fetch {\n        width: 150px;\n    }\n    .pt-change {\n        padding-top: 32px;\n    }\n    .pt-change--clone {\n        padding-top: 32px;\n    }\n    .pt-change--commit {\n        padding-top: 32px;\n    }\n    .pb-change {\n        padding-bottom: 32px;\n    }\n\n    .index_commit {\n        padding-top: 52px;\n    }\n    .order-switch-0 {\n        order: 2;\n    }\n\n    .order-switch-2 {\n        order: 0;\n    }\n\n    .order-switch-stash {\n        order: -1;\n    }\n\n }\n\n@media only screen and (max-device-width: 959px)  and (orientation : portrait) {\n    .image-size-icon {\n        width: 30px;\n    }\n    .image-size {\n        width: 100px;\n    }\n    .font-size-change {\n        font-size: 22px;\n    }\n\n    .pv-change {\n        padding-bottom: 16px;\n        padding-top: 8px;\n    }\n    .pl-change {\n        padding-left: 0px;\n    }\n    .change-direction {\n        flex-direction: column;\n    }\n    .change-direction-stash {\n        flex-direction: column;\n    }\n\n    .height-change {\n        min-height: 100px;\n    }\n\n    .pt-change {\n        padding-top: 16px;\n    }\n    .pt-change--clone {\n        padding-top: 16px;\n    }\n    .pt-change--commit {\n        padding-top: 16px;\n    }\n\n    .pb-change {\n        padding-bottom: 16px;\n    }\n\n    .bl-change {\n        border-left: 2px solid #beaf98;\n    }\n\n    .index_commit {\n        padding-top: 30px;\n    }\n\n    .order-switch-0 {\n        order: 0;\n    }\n    .order-switch-2 {\n        order: 2;\n    }\n\n    .order-switch-stash {\n        order: 3;\n    }\n\n }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFD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Q0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztDQUVIIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi52aXNHaXRBcHAge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LWNoYW5nZS0xNC0xNiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udy00MC0tcmVzZXQge1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuLnBsLWNoYW5nZS1zdGF0dXMge1xuICAgIHBhZGRpbmctbGVmdDogMzIwcHg7XG59XG5cbi5jaGFuZ2UtZGlyZWN0aW9uLXN0YXNoIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucGwtOTItZXhjZXB0LXBvcnRyYWl0e1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnByLTY0LWV4Y2VwdC1wb3J0cmFpdCB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4ucHQtMzItaW4tcG9ydHJhaXQge1xuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuXG4uaW1hZ2Utc2l6ZS1pY29uIHtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuLmZvbnQtc2l6ZS1jaGFuZ2Uge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnB0LWNoYW5nZS1wdWxsIHtcbiAgICBwYWRkaW5nLXRvcDogNzZweDtcbn1cbi5wdC1jaGFuZ2UtcHVsbC0yIHtcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcbn1cbi5tdC1jaGFuZ2UtcHVsbCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuLm10LWNoYW5nZS1wdWxsLTIge1xuICAgIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLm10LWNoYW5nZS1wdWxsLTQge1xuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xufVxuLnBsLWNoYW5nZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4ucGItY2hhbmdlLTE2LTMyIHtcbiBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cblxuLnBjaGFuZ2UtYnJhbmNoIHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLmgtY2hhbmdlLTI4LTQ4IHtcbiAgICBoZWlnaHQ6IDI4cHg7XG59XG5cbi5mbGV4LWRpcmVjdGlvbi1jaGFuZ2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZm9udC1zaXplLTEyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYXQtZmFiIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgIGxpbmUtaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcbn1cblxuLml0YWxpY3Mge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmZvbnQtc2l6ZS0yNCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZm9udC1zaXplLTMyIHtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbi5mb250LXNpemUtNDgge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbn1cbi5oLTI4IHtcbiAgICBoZWlnaHQ6IDI4cHg7XG59XG5cbi5oLTM4IHtcbiAgICBoZWlnaHQ6IDM4cHg7XG59XG5cbi5oLTQ4IHtcbiAgICBoZWlnaHQ6IDQ4cHg7XG59XG4uaC01OCB7XG4gICAgaGVpZ2h0OiA1OHB4O1xufVxuLmgtNjkge1xuICAgIGhlaWdodDogNjlweDtcbn1cbi5tci0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cbi5tci00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5tbC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xufVxuLm1sLTQge1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ubWwtNiB7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbi5tbC04IHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLm1sLXN3aXRjaC0tcmVzZXQge1xuICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xufVxuLm10LTIge1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cbi5tdC00IHtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubXQtOCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuLnBiLTM2IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzZweDtcbn1cbi5wYi00OCB7XG4gICAgcGFkZGluZy1ib3R0b206IDQ4cHg7XG59XG4ucGwtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG4ucGwtNCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4ucGwtOCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4ucGwtMTYge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5wbC0yMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLnBsLTI0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG4ucGwtMzAge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbi5wbC0zMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xufVxuLnBsLTM0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM0cHg7XG59XG4ucGwtMzYge1xuICAgIHBhZGRpbmctbGVmdDogMzZweDtcbn1cbi5wbC00NiB7XG4gICAgcGFkZGluZy1sZWZ0OiA0NnB4O1xufVxuLnBsLTQ4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XG59XG4ucGwtNTAge1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbn1cbi5wbC0xMDAge1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG59XG4ucGwtMTUwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xufVxuLnBsLTIwMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcbn1cbi5wbC0yNTAge1xuICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XG59XG4ucGwtNjQge1xuICAgIHBhZGRpbmctbGVmdDogNjRweDtcbn1cbi5wbC02NC0tcmVzZXQge1xuICAgIHBhZGRpbmctbGVmdDogNjRweDtcbn1cbi5wbC05MiB7XG4gICAgcGFkZGluZy1sZWZ0OiA5MnB4O1xufVxuLnBsLTEwOSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDlweDtcbn1cbi5wbC0zNTAge1xuICAgIHBhZGRpbmctbGVmdDogMzUwcHg7XG59XG4ucGwtNTAwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwMHB4O1xufVxuLnByLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbn1cbi5wci00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG4ucHItOCB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLnByLTE2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4ucHQtOHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLnB0LTE2e1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4ucHQtMTh7XG4gICAgcGFkZGluZy10b3A6IDE4cHg7XG59XG4ucHQtNDh7XG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XG59XG5cbi5wdC01MntcbiAgICBwYWRkaW5nLXRvcDogNTJweDtcbn1cblxuLnB0LTY0e1xuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xufVxuLnB0LTcye1xuICAgIHBhZGRpbmctdG9wOiA3MnB4O1xufVxuLnB0LTc2e1xuICAgIHBhZGRpbmctdG9wOiA3NnB4O1xufVxuXG4ucmVndWxhciwgLm5vcm1hbCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOztcbn1cbi5iYWNrZ3JvdW5kLWJlaWdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVhZjk4O1xufVxuXG4uZG90IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4ucmVkIHtcbiAgICBjb2xvcjogI0NENUM1Qztcbn1cblxuLmJsYWNrIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5ncmVlbiB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uaW5kaWFuUmVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlhblJlZDtcbn1cblxuLnNlYUdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XG59XG4ubGlnaHRDb3JhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbn1cbi5tZWRpdW1QdXJwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXB1cnBsZTtcbn1cblxuLmJhY2tncm91bmQtcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0Q1QzVDO1xufVxuLmJhY2tncm91bmQtZ3JheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JFQkVCRTtcbn1cbi5iYWNrZ3JvdW5kLWJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuLmdvbGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG59XG5cblxuLndoaXRlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udy0xMDAge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4ubWluLXctMTUwIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xufVxuLm1pbi13LTE1MC0tcmVzZXQge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG59XG4ubWluLXctMjUwIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xufVxuLm1pbi13LTM1MCB7XG4gICAgbWluLXdpZHRoOiAzNTBweDtcbn1cblxuLm1heC13LTQ1MCB7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbn1cbi5tYXgtdy02MDAge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG59XG4udy0xNTAge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cbi53LTI1MCB7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4udy0zMDAge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuLnctMzUwIHtcbiAgICB3aWR0aDogMzUwcHg7XG59XG4udy0zNTAtLXJlc2V0IHtcbiAgICB3aWR0aDogMzUwcHg7XG59XG5cbi53LTQ1MCB7XG4gICAgd2lkdGg6IDQ1MHB4O1xufVxuXG4udy01MDAge1xuICAgIHdpZHRoOiA1MDBweDtcbn1cblxuLnctNjAwIHtcbiAgICB3aWR0aDogNjAwcHg7XG59XG5cbi5oLTIwMCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnRleHQtYWxpZ24sIC50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJsdWUge1xuICAgIGNvbG9yOiBibHVlO1xufVxuXG4ua2hha2kge1xuICAgIGNvbG9yOiBkYXJrZ3JlZW47XG59XG5cbi5kYXJrYmx1ZSB7XG4gICAgY29sb3I6IGRhcmtibHVlO1xufVxuXG4ubGltZWdyZWVuIHtcbiAgICBjb2xvcjogIzMyQ0QzMjtcbn1cblxuLmRhcmtyZWQge1xuICAgIGNvbG9yOiBkYXJrcmVkO1xufVxuXG4uYnItYmVpZ2Uge1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZWFmOTg7XG59XG4uYmwtYmVpZ2Uge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2JlYWY5ODtcbn1cbi5idC1iZWlnZSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNiZWFmOTg7XG59XG4uYmItYmVpZ2Uge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYmVhZjk4O1xufVxuXG4ucmVjdGFuZ2xlIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xufVxuLmZsZXgsIC5zaG93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mbG9hdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLnB1bGwtdXB7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cblxuLnB1bGwtbGVmdHtcbiAgICBtYXJnaW4tbGVmdDogLTEyMHB4O1xufVxuXG4ucHVsbC1sZWZ0LTI0e1xuICAgIG1hcmdpbi1sZWZ0OiAtMjRweCAhaW1wb3J0YW50O1xufVxuXG4ucHVsbC1sZWZ0LTI0LS1yZXNldHtcbiAgICBtYXJnaW4tbGVmdDogLTI0cHggIWltcG9ydGFudDtcbn1cblxuLm1vdmVBbmRDb2xvciB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlQW5kQ29sb3IgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmUtaW1hZ2Uge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIxMHB4KTtcbiAgICB9XG59IFxuQGtleWZyYW1lcyBtb3ZlLXVwLWZhc3Qge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zNXB4KTtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIG1vdmUtZG93bi1mYXN0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDc1cHgpO1xuICAgIH1cbn0gXG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA5NjBweCkge1xuICAgICAgICAuZm9udC1zaXplLWNoYW5nZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXgtZGlyZWN0aW9uLWNoYW5nZSB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5wdWxsLXVwLWltYWdle1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE3OHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wdi1jaGFuZ2Uge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZUFuZENvbG9yIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNzIuNXB4KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTQ1cHgpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5NTlweCkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XG4gICAgICAgIC5mbGV4LWRpcmVjdGlvbi1jaGFuZ2Uge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLnB1bGwtbGVmdC0yNC0tcmVzZXQge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBwdWxsLWxlZnQtMjQtLXJlc2V0IDFzIGxpbmVhcjtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsLTY0IHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnctMzUwLS1yZXNldCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5taW4tdy0xNTAtLXJlc2V0IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAudy00MC0tcmVzZXQge1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuICAgICAgICAucGwtOTItZXhjZXB0LXBvcnRyYWl0e1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJsLXN0YXNoIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2JlYWY5ODtcbiAgICAgICAgfVxuICAgICAgICAuZm9udC1jaGFuZ2UtMTQtMTYge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC5wdWxsLXVwLWluLXB1c2gtMiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC5wdC0zMi1kZXNrdG9wLXB1c2gge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgLm10LWluLXBvcnRyYWl0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC03NXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm10LWluLXBvcnRyYWl0LTIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGlkZS1pbi1wb3J0cmFpdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnB0LTMyLWluLXBvcnRyYWl0IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnB0LWNoYW5nZS1wdWxsLTIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjRweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnByLTY0LWV4Y2VwdC1wb3J0cmFpdCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmgtY2hhbmdlLTI4LTQ4IHtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAucHVsbC11cC1pbWFnZXtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIEBrZXlmcmFtZXMgcHVsbC1sZWZ0LTI0LS1yZXNldCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlQW5kQ29sb3Ige1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlVSgtNTBweCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDVweCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuLnNob3ctZmFkZUlue1xuICAgIGFuaW1hdGlvbjogc2hvdy1mYWRlSW4gMnMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uc2hvdy1zbG93LWZhZGVJbntcbiAgICBhbmltYXRpb246IHNob3ctc2xvdy1mYWRlSW4gNHMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uY29tbWl0LWZhZGVJbi0xIHtcbiAgICBhbmltYXRpb246IGNvbW1pdC1mYWRlSW4tMSAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4uY29tbWl0LWZhZGVJbi0yIHtcbiAgICBhbmltYXRpb246IGNvbW1pdC1mYWRlSW4tMiAycyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5jb21taXQtZmFkZUluLTMge1xuICAgIGFuaW1hdGlvbjogY29tbWl0LWZhZGVJbi0zIDNzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmV7XG4gICAgYW5pbWF0aW9uOiBtb3ZlIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcblxufVxuXG4ubW92ZS1pbWFnZSB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWltYWdlIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5tb3ZlLWxlZnQge1xuICAgIGFuaW1hdGlvbjogbW92ZS1sZWZ0IC43NXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1sZWZ0LWZyb20td29ya2luZyB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWxlZnQtZnJvbS13b3JraW5nIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtbGVmdC1mcm9tLWluZGV4IHtcbiAgICBhbmltYXRpb246IG1vdmUtbGVmdC1mcm9tLWluZGV4IDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cbi5tb3ZlLWxlZnQtZnJvbS1pbmRleC0yIHtcbiAgICBhbmltYXRpb246IG1vdmUtbGVmdC1mcm9tLWluZGV4LTIgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1yaWdodCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXJpZ2h0IDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtcmlnaHQtbWVyZ2Uge1xuICAgIGFuaW1hdGlvbjogbW92ZS1yaWdodC1tZXJnZSAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4ubW92ZS1yaWdodC1mZXRjaCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXJpZ2h0LWZldGNoIDFzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtdXAge1xuICAgIGFuaW1hdGlvbjogbW92ZS11cCAxLjNzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLm1vdmUtdXAtcHVsbCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXVwLXB1bGwgMXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS11cC0tcHVzaCB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLXVwLS1wdXNoIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS11cC1mYXN0IHtcbiAgICBhbmltYXRpb246IG1vdmUtdXAtZmFzdCAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1kb3duLWZhc3Qge1xuICAgIGFuaW1hdGlvbjogbW92ZS1kb3duLWZhc3QgMnMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1kb3duLW9uZSB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlLWRvd24tb25lIC41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cblxuLm1vdmUtZG93bi10d28ge1xuICAgIGFuaW1hdGlvbjogbW92ZS1kb3duLXR3byAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ubW92ZS1kb3duLXRocmVlIHtcbiAgICBhbmltYXRpb246IG1vdmUtZG93bi10aHJlZSAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4ub3ZlcndyaXRlLWluZGV4IHtcbiAgICBhbmltYXRpb246IG92ZXJ3cml0ZS1pbmRleCAxcyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5vdmVyd3JpdGUtaW5kZXgxIHtcbiAgICBhbmltYXRpb246IG92ZXJ3cml0ZS1pbmRleDEgMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5vdmVyd3JpdGUtaW5kZXgyIHtcbiAgICBhbmltYXRpb246IG92ZXJ3cml0ZS1pbmRleDIgMS41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG4ub3ZlcndyaXRlLWluZGV4MyB7XG4gICAgYW5pbWF0aW9uOiBvdmVyd3JpdGUtaW5kZXgzIDEuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uaGVhZENvbG9yR3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcbiAgICBhbmltYXRpb246IG1vdmVUb1dvcmtpbmdBcmVhIDJzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuXG4uaGVhZENvbG9yUmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XG4gICAgYW5pbWF0aW9uOiBtb3ZlVG9Xb3JraW5nQXJlYSAyLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmhlYWRDb2xvclB1cnBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtcHVycGxlO1xuICAgIGFuaW1hdGlvbjogbW92ZVRvV29ya2luZ0FyZWEgMi41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5oZWFkQ29sb3JHcmF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkVCRUJFO1xuICAgIGFuaW1hdGlvbjogbW92ZVRvV29ya2luZ0FyZWEgMi41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZVRvV29ya2luZ0FyZWEge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTJweCk7XG4gICAgfVxufSBcblxuQGtleWZyYW1lcyBjb21taXQtZmFkZUluLTEge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE0MHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59IFxuXG5Aa2V5ZnJhbWVzIGNvbW1pdC1mYWRlSW4tMiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTYwcHgpO1xuICAgIH1cbiAgICAzMiUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTYwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn0gXG5cbkBrZXlmcmFtZXMgY29tbWl0LWZhZGVJbi0zIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxODBweCk7XG4gICAgfVxuICAgIDQyJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxODBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufSBcblxuXG5Aa2V5ZnJhbWVzIHNob3ctZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn0gXG5Aa2V5ZnJhbWVzIHNob3ctc2xvdy1mYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufSBcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA5NjBweCkge1xuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDcyLjVweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTU4cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIxNXB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS13b3JraW5nIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEzNXB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI4N3B4LCAyMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleC0yIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjg3cHgsIDQwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNTJweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1mZXRjaCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI4NXB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LW1lcmdlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjIwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtdXAge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zNXB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVsbCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI4cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS11cC0tcHVzaCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTM1cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS11cC1mYXN0IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTM1cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLWZhc3Qge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDc1cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLW9uZSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXR3byB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDgwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi10aHJlZSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBvdmVyd3JpdGUtaW5kZXgge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNDFweCwgLTNweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIzN3B4LCAtNDBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIzN3B4LCAtODNweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MyB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIzN3B4LCAtMTIzcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk1OXB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSAge1xuICAgICAgICAuaGlkZS1pbi1sYW5kc2NhcGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsLWxhbmRzY2FwZS1jbG9uZXtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbC1jaGFuZ2Utc3RhdHVzIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9udC1jaGFuZ2UtMTQtMTYge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoYW5nZS1kaXJlY3Rpb24tc3Rhc2gge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIC5wdWxsLXVwLWluLXB1c2gge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTQ1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHQtMzItaW4tcG9ydHJhaXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucHYtY2hhbmdlIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wdWxsLXVwLWZldGNoIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnB0LWNoYW5nZS1wdWxsIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnB0LWNoYW5nZS1wdWxsLTIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXJnaW4taW4tbGFuZHNjYXBlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm10LWNoYW5nZS1wdWxsLTAge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubXQtY2hhbmdlLXB1bGwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm10LWNoYW5nZS1wdWxsLTIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5tdC1jaGFuZ2UtcHVsbC00IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm10LWNoYW5nZS1wdWxsLTUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm10LWNoYW5nZS1wdWxsLTYge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGItY2hhbmdlLTE2LTMyIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgIH1cblxuICAgICAgICAucGFkZGluZy1sYW5kc2NhcGUtY29tbWl0LXR7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzJweDtcbiAgICAgICAgfVxuICAgICAgICAucGFkZGluZy1sYW5kc2NhcGUtY29tbWl0LWJ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5vcmRlci1zd2l0Y2gtMCB7XG4gICAgICAgICAgICBvcmRlcjogMjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAucHQtY2hhbmdlLS1jbG9uZSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAucHQtY2hhbmdlLS1jb21taXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlLXNpemUge1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnB1bGwtdXAtaW1hZ2V7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZS1zaXplLS1jbG9uZSB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZS1zaXplLS1mZXRjaCB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4LWRpcmVjdGlvbi1jaGFuZ2Uge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAucGwtY2hhbmdlIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAucGNoYW5nZS1icmFuY2gge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi1vbmUge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtZG93bi10d28ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4MHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdGhyZWUge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMjBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjM3cHgsIC0zcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleDEge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMzdweCwgLTQwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleDIge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMzdweCwgLTgzcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleDMge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMzdweCwgLTEyM3B4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLXdvcmtpbmcge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTM1cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdC1mcm9tLWluZGV4IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yODdweCwgMjJweCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleC0yIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjg3cHgsIDQwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtbGVmdCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTExNXB4LCAtM3B4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNTBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LW1lcmdlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjIwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtdXAge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zNnB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtdXAtcHVsbCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE0cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZUFuZENvbG9yIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNzcuNXB4KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTU1cHgpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MHB4LCA1cHgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWZldGNoIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjIwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDk1OXB4KSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpICB7XG4gICAgICAgIC5pbWFnZS1zaXplLS1jbG9uZSB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAucGwtY2hhbmdlLXN0YXR1cyB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wdC1jaGFuZ2UtcHVsbCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm10LWNoYW5nZS1wdWxsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tdC1jaGFuZ2UtcHVsbC00IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC04M3B4O1xuICAgICAgICB9XG4gICAgICAgIC5tdC1jaGFuZ2UtcHVsbC0yIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wdC1mZXRjaCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYi1wb3J0cmFpdC1mZXRjaCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhZC1wb3J0cmFpdC1mZXRjaC0xIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICAgICAgICB9XG4gICAgICAgIC5wYWQtcG9ydHJhaXQtZmV0Y2gtMiB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnB1bGwtdXAtZmV0Y2gge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTcwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2Utc2l6ZS0tZmV0Y2gge1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtaW1hZ2Uge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVgoMTIwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZVRvV29ya2luZ0FyZWEge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNzVweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tb25lIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWRvd24tdHdvIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1kb3duLXRocmVlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBAa2V5ZnJhbWVzIG92ZXJ3cml0ZS1pbmRleCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNDZweCwgLTFweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MHB4LCAtNDBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE0N3B4LCAtODNweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgb3ZlcndyaXRlLWluZGV4MyB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE0N3B4LCAtMTIzcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0LWZyb20td29ya2luZyB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyN3B4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIxM3B4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWxlZnQtZnJvbS1pbmRleC0yIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjA4cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1sZWZ0IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExNXB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtcmlnaHQge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNTBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS1yaWdodC1tZXJnZSB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIyMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS11cCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMzcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIEBrZXlmcmFtZXMgbW92ZS11cC1wdWxsIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA3MCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMThweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG5cbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlLXJpZ2h0LWZldGNoIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzN3B4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgQGtleWZyYW1lcyBtb3ZlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDhweClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcblxuICAgIH1cblxuXG4uaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMzBweCAzMHB4IDAgMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFsaWduLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hbGlnbi1sZWZ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5hbGlnbi1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uanVzdGlmeS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGlyZWN0aW9uLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnBiLTgge1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4ucGItMTYge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLnBiLTI0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cblxuLnBiLTI4IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcbn1cbi5wYi0zMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG5cbi5wYi00MiB7XG4gICAgcGFkZGluZy1ib3R0b206IDQycHg7XG59XG4ucHQtMzIge1xuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuXG4ucHQtNTQge1xuICAgIHBhZGRpbmctdG9wOiA1NHB4O1xufVxuXG4ucHQtNjQge1xuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xufVxuXG4ucHQtMTAwIHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbi5wdC00IHtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4ucHItOHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4ucHItMTYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5wci0yNCB7XG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cbi5wci0zMiB7XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbn1cblxuLnByLTQ4IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xufVxuLnByLTY0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xufVxuLnctcXVhcnRlciB7XG4gICAgd2lkdGg6IDI1JTtcbn1cblxuLnctaGFsZiB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnctZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcmRlci0xIHtcbiAgICBvcmRlcjogMTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogOTYwcHgpIHtcbiAgICAuaW1hZ2Utc2l6ZS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxuICAgIC5pbWFnZS1zaXplIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgICAuaW1hZ2Utc2l6ZS0tY2xvbmUge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgfVxuXG4gICAgLmltYWdlLXNpemUtLWZldGNoIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgICAucHQtY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNsb25lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgfVxuICAgIC5wdC1jaGFuZ2UtLWNvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMnB4O1xuICAgIH1cbiAgICAucGItY2hhbmdlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgfVxuXG4gICAgLmluZGV4X2NvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MnB4O1xuICAgIH1cbiAgICAub3JkZXItc3dpdGNoLTAge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLTIge1xuICAgICAgICBvcmRlcjogMDtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLXN0YXNoIHtcbiAgICAgICAgb3JkZXI6IC0xO1xuICAgIH1cblxuIH1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5NTlweCkgIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIC5pbWFnZS1zaXplLWljb24ge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG4gICAgLmltYWdlLXNpemUge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC5mb250LXNpemUtY2hhbmdlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cblxuICAgIC5wdi1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICB9XG4gICAgLnBsLWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cbiAgICAuY2hhbmdlLWRpcmVjdGlvbiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5jaGFuZ2UtZGlyZWN0aW9uLXN0YXNoIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuaGVpZ2h0LWNoYW5nZSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIH1cblxuICAgIC5wdC1jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICB9XG4gICAgLnB0LWNoYW5nZS0tY2xvbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICB9XG4gICAgLnB0LWNoYW5nZS0tY29tbWl0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgfVxuXG4gICAgLnBiLWNoYW5nZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIC5ibC1jaGFuZ2Uge1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNiZWFmOTg7XG4gICAgfVxuXG4gICAgLmluZGV4X2NvbW1pdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cblxuICAgIC5vcmRlci1zd2l0Y2gtMCB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgIH1cbiAgICAub3JkZXItc3dpdGNoLTIge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAub3JkZXItc3dpdGNoLXN0YXNoIHtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgfVxuXG4gfVxuIl19 */"

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

module.exports = "<div class=\"flex direction-column align-center\">\n  <div class=\"flex direction-column align-center justify-center\">\n    <div class=\"blue h-38 pb-16\">\n      <div [ngClass]=\"{'hide': !hideMessage, 'show': hideMessage}\">Example: the user has main branch checked out</div>\n      <div class=\"flex direction-column pl-32 pr-32 max-w-600 h-change-28-48\" [ngClass]=\"{'hide': hideMessage, 'show-slow-fadeIn text-center': !hideMessage}\">\n        The local main branch now points to the latest commit from the repo main branch. \n        git pull = git fetch + git merge. (A merge conflict may need to be resolved.) \n      </div>\n    </div>\n    <div class=\"flex align-center pt-32-in-portrait\">\n      <button [disabled]=\"!hideMessage\" (click)=\"visualizePull()\" class=\"w-250\" mat-raised-button color=\"warn\">Visualize \"git pull origin main\"</button>\n      <div class=\"pr-8\"></div>\n      <button mat-fab [disabled]=\"!showReset\" (click)=\"reset()\" mat-raised-button color=\"warn\"><span>Reset</span></button>\n    </div>\n  </div>\n  <div class=\"flex pt-32 align-center\"> \n    <section class=\"flex direction-column text-center pr-64-except-portrait\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16\">\n        <div>Remote Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-pull-2 pl-4 mt-change-pull-2 pr-2\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-pull pr-8\">86b5f</div>\n            <div class=\"pt-change-pull pr-8 pull-left\" [ngClass]=\"{'hide': hideMessage, 'show move-right': !hideMessage}\">86b5f</div>\n          </div>\n          <div class=\"flex pr-2\">\n            <div class=\"font-size-32 pr-2 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-pull-0 pr-8 mt-in-portrait\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n    <section class=\"flex direction-column align-center text-center pr-64-except-portrait margin-in-landscape mt-in-portrait-2\"> \n      <div class=\"pl-92-except-portrait flex-direction-change pb-16\">\n        <div>Local Repo</div>\n        <div>main branch</div>\n      </div>\n      <div class=\"flex pr-48\">\n        <div class=\"flex direction-column\">\n          <div class=\"flex\">\n            <div class=\"font-size-32 pt-change-pull-2 mt-change-pull-2 mt-change-pull-3 pr-2 white\">&#10132;</div> <!--arrow right-->\n            <div class=\"pt-change-pull pr-8 white \">86b5f</div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"font-size-32 pr-2 mt-change-pull-4\" [ngClass]=\"{'move-up-pull': !hideMessage}\">&#10132;</div> <!--arrow right-->\n            <div class=\"mt-change-pull-6 pr-8 mt-in-portrait\">e34b2</div>\n          </div>\n        </div>\n        <img  class=\"image-size--fetch\"  src=\"assets/gitRepoGrayCropped.jpeg\" alt=\"repository on GitHub\">\n      </div>\n    </section>\n  </div>\n</div>\n"

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