(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/header/header.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/header/header.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"wrapper\">\n    <mat-icon class=\"logo\" (click)=\"goHome()\">play_circle_filled</mat-icon>\n    <div class=\"search-block\">\n      <app-search-field (submit)=\"onSubmit()\"></app-search-field>\n      <button mat-raised-button class=\"sort-btn\" (click)=\"activateSortPanel()\">\n        <mat-icon>filter_list</mat-icon>\n      </button>\n    </div>\n    <div class=\"login\">\n      <p class=\"login-name\">Your Name</p>\n      <button mat-raised-button class=\"login-btn\">\n        <mat-icon class=\"login-icon\">face</mat-icon>\n      </button>\n      <button mat-button *ngIf=\"this.loginService.isAuthorized\" class=\"logout-btn\" (click)=\"logOut()\">\n        <mat-icon class=\"logout-icon\">exit_to_app</mat-icon>\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/header/search-field/search-field.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/header/search-field/search-field.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <form class=\"search-form\">\n    <mat-form-field class=\"search-input\">\n      <input matInput placeholder=\"Search\">\n    </mat-form-field>\n    <button mat-raised-button type=\"submit\" color=\"primary\" class=\"submit-btn\">Submit</button>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/search-item/search-item.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/search-item/search-item.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"card\" [appBorderColor]=\"video.snippet.publishedAt\">\n<img mat-card-image src=\"{{ video.snippet.thumbnails.maxres.url }}\" alt=\"Video thumbnail\">\n  <mat-card-content class=\"card-content\">\n    <app-statistics [statistics]=\"video.statistics\"></app-statistics>\n    <h3 class=\"video-name\">{{ video.snippet.title | slice:0:70 }}</h3>\n  </mat-card-content>\n  <mat-card-actions class=\"more-btn\">\n    <button mat-raised-button color=\"warn\" (click)=\"setVideoId(video.id)\">more</button>\n  </mat-card-actions>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/snack-bar/snack-bar.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/snack-bar/snack-bar.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"message\">\n  {{ data }}\n</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/statistics/statistics.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/statistics/statistics.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"statistics\">\n  <div class=\"statistics-views\">\n    <mat-icon>remove_red_eye</mat-icon>\n    <p>{{ statistics.viewCount | numberConversionPipe }}</p>\n  </div>\n  <div class=\"statistics-likes\">\n    <mat-icon>thumb_up</mat-icon>\n    <p>{{ statistics.likeCount | numberConversionPipe }}</p>\n  </div>\n  <div class=\"statistics-dislikes\">\n    <mat-icon>thumb_down</mat-icon>\n    <p>{{ statistics.dislikeCount | numberConversionPipe }}</p>\n  </div>\n  <div class=\"statistics-comments\">\n    <mat-icon>insert_comment</mat-icon>\n    <p>{{ statistics.commentCount | numberConversionPipe }}</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/components/search-results/search-results.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/components/search-results/search-results.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <app-search-item *ngFor=\"let video of (videos | wordFiltering: searchText | dateSortPipe: dateSort | countOfViews: countSort)\"\n  [video]=\"video\">\n  </app-search-item>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/components/sort-panel/sort-panel.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/components/sort-panel/sort-panel.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"wrapper\">\n    <p>Sorting by:</p>\n    <p class=\"field\"><a href=\"\" (click)=\"dateSort($event)\">date</a><mat-icon *ngIf=\"dateSortCounter > 0\">{{ dateSortCounter % 2 === 0 ? 'arrow_downward' : 'arrow_upward' }}</mat-icon></p>\n    <p class=\"field\"><a href=\"\" (click)=\"countSort($event)\">count of views</a><mat-icon *ngIf=\"countSortCounter > 0\">{{ countSortCounter % 2 === 0 ? 'arrow_upward' : 'arrow_downward' }}</mat-icon></p>\n    <div class=\"search-input\">\n      <p>by word or sentance</p>\n      <form>\n        <input type=\"text\" name=\"textField\" [(ngModel)]=\"userInput\" (keyup)=\"onSearchSubmit()\">\n      </form>\n      <mat-icon *ngIf=\"userInput\" (click)=\"clearField($event)\">clear</mat-icon>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/pages/detailed-information/detailed-information.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/pages/detailed-information/detailed-information.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <mat-card class=\"card\" [appBorderColor]=\"video.snippet.publishedAt\">\n    <img mat-card-image class=\"video-img\" src=\"{{ video.snippet.thumbnails.maxres.url }}\" alt=\"Video thumbnail\">\n    <div class=\"content\">\n      <mat-card-title>\n        <h6 class=\"video-name\">{{ video.snippet.title | slice:0:70 }}</h6>\n      </mat-card-title>\n      <mat-card-subtitle>\n        <p class=\"date\">{{ video.snippet.publishedAt | date:'fullDate' }}</p>\n      </mat-card-subtitle>\n      <mat-card-content class=\"card-content\">\n        <div class=\"description\">\n          <h4>Description:</h4>\n          <p *ngIf=\"shortDesc\" class=\"shortDesc\">{{ video.snippet.description | slice:0:250 }}\n            <a href=\"\" (click)=\"showFullDescription($event)\">\n              <mat-icon>arrow_drop_down</mat-icon>\n            </a>\n          </p>\n          <mat-card *ngIf=\"!shortDesc\" class=\"fullDesc\">\n            <p>{{ video.snippet.description }}\n              <a href=\"\" (click)=\"hideFullDescription($event)\">\n                <mat-icon>arrow_drop_up</mat-icon>\n              </a>\n            </p>\n          </mat-card>\n        </div>\n      </mat-card-content>\n      <mat-card-footer>\n        <app-statistics [statistics]=\"video.statistics\"></app-statistics>\n      </mat-card-footer>\n    </div>\n  </mat-card>\n  <button mat-raised-button class=\"btn\" (click)=\"back()\"><mat-icon>keyboard_arrow_left</mat-icon>Back</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/pages/main-page/main-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/pages/main-page/main-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sort-panel *ngIf=\"this.youtubeService.sortActive\"></app-sort-panel>\n<app-search-results\n  *ngIf=\"this.youtubeService.hasResponse\"\n  [dateSort]=\"this.youtubeService.dateSort\"\n  [countSort]=\"this.youtubeService.countSort\"\n  [searchText]=\"this.youtubeService.searchText\"\n></app-search-results>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/pages/not-found/not-found.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/pages/not-found/not-found.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"container\" color>\n  <div class=\"err404\">404</div>\n  <div class=\"err-desc\">Oops! Somenthing went wrong...</div>\n  <div class=\"btn\">\n    <button mat-stroked-button color=\"primary\" class=\"home-btn\" (click)=\"goHome()\">Home</button>\n  </div>\n</mat-card>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _youtube_pages_detailed_information_detailed_information_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube/pages/detailed-information/detailed-information.component */ "./src/app/youtube/pages/detailed-information/detailed-information.component.ts");
/* harmony import */ var _youtube_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube/pages/main-page/main-page.component */ "./src/app/youtube/pages/main-page/main-page.component.ts");
/* harmony import */ var _youtube_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./youtube/pages/not-found/not-found.component */ "./src/app/youtube/pages/not-found/not-found.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");







const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(m => m.AuthModule) },
    { path: 'home', component: _youtube_pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'video/:id', component: _youtube_pages_detailed_information_detailed_information_component__WEBPACK_IMPORTED_MODULE_1__["DetailedInformationComponent"] },
    { path: '404', component: _youtube_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] },
    { path: '**', redirectTo: '404' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _youtube_youtube_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube/youtube.module */ "./src/app/youtube/youtube.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");

// import { YoutubeRoutingModule } from './youtube/youtube-routing.module';









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _youtube_youtube_module__WEBPACK_IMPORTED_MODULE_1__["YoutubeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/services/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/auth/services/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _youtube_services_youtube_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../youtube/services/youtube.service */ "./src/app/youtube/services/youtube.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/snack-bar/snack-bar.component */ "./src/app/shared/components/snack-bar/snack-bar.component.ts");






let LoginService = class LoginService {
    constructor(_router, _youtubeService, _snackBar) {
        this._router = _router;
        this._youtubeService = _youtubeService;
        this._snackBar = _snackBar;
        this.error = false;
        this.isAuthorized = false;
    }
    setAccessToken(access) {
        if (access) {
            localStorage.setItem('accessToken', 'user-token');
        }
    }
    showSnackBar(message) {
        this._snackBar.openFromComponent(src_app_shared_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__["SnackBarComponent"], {
            duration: 2000,
            data: message
        });
    }
    getAccessToken() {
        return localStorage.getItem('accessToken');
    }
    logOut() {
        localStorage.removeItem('accessToken');
        this.isAuthorized = false;
        this._youtubeService.logOut();
        this.redirectToLogin();
    }
    redirectToHome() {
        this._router.navigateByUrl('/home');
    }
    redirectToLogin() {
        this._router.navigateByUrl('/auth');
    }
    checkUser(formValue) {
        if (formValue.username && formValue.password) {
            this.error = false;
            this.isAuthorized = true;
            this.setAccessToken(true);
            this.redirectToHome();
        }
        else {
            this.error = true;
            this.isAuthorized = false;
        }
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _youtube_services_youtube_service__WEBPACK_IMPORTED_MODULE_2__["YoutubeService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/core/components/header/header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/components/header/header.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  background-color: rgb(235, 238, 243);\r\n  height: 80px;\r\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n.wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  width: 70%;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.logo {\r\n  font-size: 50px;\r\n  width: 50px;\r\n  height: 50px;\r\n  color: #0D2C54;\r\n  cursor: pointer;\r\n}\r\n\r\n.search-block {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: baseline;\r\n          align-items: baseline;\r\n}\r\n\r\napp-search-field {\r\n  position: relative;\r\n  margin-right: 15px;\r\n}\r\n\r\n.sort-btn {\r\n  width: 36px;\r\n  height: 36px;\r\n  min-width: 36px;\r\n  padding: 0;\r\n}\r\n\r\n.login {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.login-name {\r\n  margin-right: 5px;\r\n  font-size: 14px;\r\n}\r\n\r\n.login-btn {\r\n  width: 35px;\r\n  min-width: 35px;\r\n  height: 35px;\r\n  padding: 0;\r\n}\r\n\r\n.login-icon {\r\n  width: 35px;\r\n  height: 35px;\r\n  font-size: 25px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  color: #0D2C54;\r\n}\r\n\r\n.logout-btn {\r\n  width: 35px;\r\n  min-width: 35px;\r\n  height: 35px;\r\n  padding: 0;\r\n  margin-left: 15px;\r\n}\r\n\r\n.logout-icon {\r\n  width: 35px;\r\n  height: 35px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiwyQkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzOCwgMjQzKTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6ICMwRDJDNTQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuYXBwLXNlYXJjaC1maWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnNvcnQtYnRuIHtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgbWluLXdpZHRoOiAzNnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tbmFtZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubG9naW4tYnRuIHtcclxuICB3aWR0aDogMzVweDtcclxuICBtaW4td2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5sb2dpbi1pY29uIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogIzBEMkM1NDtcclxufVxyXG5cclxuLmxvZ291dC1idG4ge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIG1pbi13aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmxvZ291dC1pY29uIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _youtube_services_youtube_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../youtube/services/youtube.service */ "./src/app/youtube/services/youtube.service.ts");
/* harmony import */ var src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/services/login.service */ "./src/app/auth/services/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HeaderComponent = class HeaderComponent {
    constructor(_router, loginService, _youtubeService) {
        this._router = _router;
        this.loginService = loginService;
        this._youtubeService = _youtubeService;
    }
    goHome() {
        this._router.navigateByUrl('/home');
    }
    logOut() {
        this.loginService.logOut();
    }
    onSubmit() {
        if (this._router.url !== '/auth') {
            this._youtubeService.showResults();
        }
    }
    activateSortPanel() {
        if (this._router.url !== '/auth') {
            this._youtubeService.toggleSortPanelState();
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _youtube_services_youtube_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/core/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/core/components/header/search-field/search-field.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/core/components/header/search-field/search-field.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.search-input {\r\n  width: 250px;\r\n  padding-right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaC1maWVsZC9zZWFyY2gtZmllbGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/core/components/header/search-field/search-field.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/core/components/header/search-field/search-field.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFieldComponent", function() { return SearchFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchFieldComponent = class SearchFieldComponent {
};
SearchFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-field',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-field.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/header/search-field/search-field.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-field.component.css */ "./src/app/core/components/header/search-field/search-field.component.css")).default]
    })
], SearchFieldComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/services/login.service */ "./src/app/auth/services/login.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_header_search_field_search_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/search-field/search-field.component */ "./src/app/core/components/header/search-field/search-field.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_header_search_field_search_field_component__WEBPACK_IMPORTED_MODULE_6__["SearchFieldComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
        ],
        exports: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
        ],
        providers: [src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/services/login.service */ "./src/app/auth/services/login.service.ts");




let AuthGuard = class AuthGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate() {
        if (this.loginService.getAccessToken() === 'user-token') {
            this.loginService.isAuthorized = true;
            return Promise.resolve(true);
        }
        else {
            this.router.navigateByUrl('/auth');
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: src_app_auth_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/components/search-item/search-item.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/search-item/search-item.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n  width: 200px;\r\n  padding: 20px;\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,.4), 0 1px 1px 0 rgba(0,0,0,.5), 0 1px 9px -1px rgba(0,0,0,0.6);\r\n}\r\n\r\n.video-name {\r\n  margin-top: 15px;\r\n  text-align: center;\r\n}\r\n\r\n.more-btn {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.card-content {\r\n  min-height: 91px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoLWl0ZW0vc2VhcmNoLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUdBQXFHO0FBQ3ZHOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zZWFyY2gtaXRlbS9zZWFyY2gtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjQpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC41KSwgMCAxcHggOXB4IC0xcHggcmdiYSgwLDAsMCwwLjYpO1xyXG59XHJcblxyXG4udmlkZW8tbmFtZSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb3JlLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogOTFweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/search-item/search-item.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/search-item/search-item.component.ts ***!
  \************************************************************************/
/*! exports provided: SearchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemComponent", function() { return SearchItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _youtube_services_youtube_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../youtube/services/youtube.service */ "./src/app/youtube/services/youtube.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let SearchItemComponent = class SearchItemComponent {
    constructor(_youtubeService, _router) {
        this._youtubeService = _youtubeService;
        this._router = _router;
    }
    setVideoId(id) {
        this._youtubeService.videoId = id;
        this._router.navigate(['video', id]);
    }
};
SearchItemComponent.ctorParameters = () => [
    { type: _youtube_services_youtube_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], SearchItemComponent.prototype, "video", void 0);
SearchItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/search-item/search-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-item.component.css */ "./src/app/shared/components/search-item/search-item.component.css")).default]
    })
], SearchItemComponent);



/***/ }),

/***/ "./src/app/shared/components/snack-bar/snack-bar.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/snack-bar/snack-bar.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message {\r\n  color: hotpink;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc25hY2stYmFyL3NuYWNrLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NuYWNrLWJhci9zbmFjay1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcclxuICBjb2xvcjogaG90cGluaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/snack-bar/snack-bar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/snack-bar/snack-bar.component.ts ***!
  \********************************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



let SnackBarComponent = class SnackBarComponent {
    constructor(data) {
        this.data = data;
    }
};
SnackBarComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"],] }] }
];
SnackBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-snack-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./snack-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/snack-bar/snack-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./snack-bar.component.css */ "./src/app/shared/components/snack-bar/snack-bar.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]))
], SnackBarComponent);



/***/ }),

/***/ "./src/app/shared/components/statistics/statistics.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/statistics/statistics.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".statistics {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  max-width: 200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.statistics > div {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.statistics > div > mat-icon {\r\n  font-size: 16px;\r\n  width: 16px;\r\n  height: 16px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.statistics > div > p {\r\n  font-size: 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0aXN0aWNzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc3RhdGlzdGljcyA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdGlzdGljcyA+IGRpdiA+IG1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uc3RhdGlzdGljcyA+IGRpdiA+IHAge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/statistics/statistics.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/statistics/statistics.component.ts ***!
  \**********************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatisticsComponent = class StatisticsComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatisticsComponent.prototype, "statistics", void 0);
StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/statistics/statistics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statistics.component.css */ "./src/app/shared/components/statistics/statistics.component.css")).default]
    })
], StatisticsComponent);



/***/ }),

/***/ "./src/app/shared/directives/border-color.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/border-color.directive.ts ***!
  \*************************************************************/
/*! exports provided: BorderColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderColorDirective", function() { return BorderColorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BorderColorDirective = class BorderColorDirective {
    constructor(_elementRef, _renderer2) {
        this._elementRef = _elementRef;
        this._renderer2 = _renderer2;
    }
    setBorderColor(date) {
        let color;
        let publishDate = new Date(date);
        let dateNow = new Date(Date.now());
        let dateDifference = Math.ceil(Math.abs(dateNow.getTime() - publishDate.getTime())
            / (1000 * 3600 * 24));
        if (dateDifference < 7) {
            color = 'blue';
        }
        else if (dateDifference >= 7 && dateDifference < 30) {
            color = 'green';
        }
        else if (dateDifference >= 30 && dateDifference < 180) {
            color = 'yellow';
        }
        else {
            color = 'red';
        }
        this._renderer2.setStyle(this._elementRef.nativeElement, 'border-bottom', `3px solid ${color}`);
    }
    ngOnInit() {
        this.setBorderColor(this.date);
    }
};
BorderColorDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appBorderColor')
], BorderColorDirective.prototype, "date", void 0);
BorderColorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appBorderColor]'
    })
], BorderColorDirective);



/***/ }),

/***/ "./src/app/shared/mocks/youtube-response.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/mocks/youtube-response.ts ***!
  \**************************************************/
/*! exports provided: youtubeResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "youtubeResponse", function() { return youtubeResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const youtubeResponse = {
    'kind': 'youtube#videoListResponse',
    'etag': '"Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4"',
    'pageInfo': {
        'totalResults': 10,
        'resultsPerPage': 10
    },
    'items': [
        {
            'kind': 'youtube#video',
            'etag': '"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI"',
            'id': 'YN8zNnV0sK8',
            'snippet': {
                'publishedAt': '2019-05-30T12:42:19.000Z',
                'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
                'title': 'Angular 8 - Быстрый курс за 60 минут',
                'description': 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    },
                    'standard': {
                        'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/sddefault.jpg',
                        'width': 640,
                        'height': 480
                    },
                    'maxres': {
                        'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/maxresdefault.jpg',
                        'width': 1280,
                        'height': 720
                    }
                },
                'channelTitle': 'Владилен Минин',
                'tags': [
                    'angular',
                    'angular 8',
                    'angularjs',
                    'js',
                    'javascript',
                    'rxjs',
                    'angular 60 минут',
                    'angular 1 час',
                    'angular 8 1 час',
                    'владилен минин',
                    'уроки javascript',
                    'angular 2',
                    'angular 4',
                    'angular уроки',
                    'курс angular',
                    'основы angular',
                    'angular фреймворк',
                    'angular уроки для начинающих',
                    'уроки angular',
                    'angular практика',
                    'ангуляр',
                    'angular изучение',
                    'angular курс',
                    'ангуляр 4 уроки',
                    'angular уроки на русском'
                ],
                'categoryId': '27',
                'liveBroadcastContent': 'none',
                'localized': {
                    'title': 'Angular 8 - Быстрый курс за 60 минут',
                    'description': 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут'
                },
                'defaultAudioLanguage': 'en-US'
            },
            'statistics': {
                'viewCount': '33265',
                'likeCount': '1173',
                'dislikeCount': '26',
                'favoriteCount': '0',
                'commentCount': '170'
            }
        },
        {
            'kind': 'youtube#video',
            'etag': '"Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ"',
            'id': 'Fdf5aTYRW0E',
            'snippet': {
                'publishedAt': '2019-01-23T17:46:58.000Z',
                'channelId': 'UC29ju8bIPH5as8OGnQzwJyA',
                'title': 'Angular Crash Course',
                'description': 'In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc\n\nSponsor:\nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n💖 Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\nhttps://www.instagram.com/traversymedia',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    },
                    'standard': {
                        'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/sddefault.jpg',
                        'width': 640,
                        'height': 480
                    },
                    'maxres': {
                        'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/maxresdefault.jpg',
                        'width': 1280,
                        'height': 720
                    }
                },
                'channelTitle': 'Traversy Media',
                'tags': [
                    'angular',
                    'angular 7',
                    'angular tutorial',
                    'angularjs'
                ],
                'categoryId': '28',
                'liveBroadcastContent': 'none',
                'localized': {
                    'title': 'Angular Crash Course',
                    'description': 'In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc\n\nSponsor:\nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n💖 Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\nhttps://www.instagram.com/traversymedia'
                },
                'defaultAudioLanguage': 'en'
            },
            'statistics': {
                'viewCount': '456979',
                'likeCount': '8213',
                'dislikeCount': '131',
                'favoriteCount': '0',
                'commentCount': '555'
            }
        },
        {
            'kind': 'youtube#video',
            'etag': '"Fznwjl6JEQdo1MGvHOGaz_YanRU/6e0k9ik7TThWpqueHGOhTRIN1-A"',
            'id': 'k5E2AVpwsko',
            'snippet': {
                'publishedAt': '2017-09-05T16:48:15.000Z',
                'channelId': 'UCWv7vMbMWH4-V0ZXdmDpPBA',
                'title': 'Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh',
                'description': '🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    },
                    'standard': {
                        'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/sddefault.jpg',
                        'width': 640,
                        'height': 480
                    },
                    'maxres': {
                        'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg',
                        'width': 1280,
                        'height': 720
                    }
                },
                'channelTitle': 'Programming with Mosh',
                'tags': [
                    'learn angular 4',
                    'learn angular 4 from scratch',
                    'angular4',
                    'learn angular',
                    'angular tutorial',
                    'angular 4',
                    'Angular',
                    'angular 5',
                    'angular 5 course',
                    'angular course',
                    'angular.js',
                    'angularjs',
                    'angular 2',
                    'angular2',
                    'angular 4 tutorial',
                    'angular 4 tutorial for beginners',
                    'angular tutorial for beginners',
                    'angular 4 crash course',
                    'angular 4 in 60 minutes',
                    'angularjs 4',
                    'angular 4 tutorial for beginners step by step',
                    'angular js',
                    'angularjs tutorial for beginners',
                    'angular 6',
                    'angular 7'
                ],
                'categoryId': '22',
                'liveBroadcastContent': 'none',
                'localized': {
                    'title': 'Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh',
                    'description': '🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani'
                },
                'defaultAudioLanguage': 'en-US'
            },
            'statistics': {
                'viewCount': '1266085',
                'likeCount': '18342',
                'dislikeCount': '473',
                'favoriteCount': '0',
                'commentCount': '1255'
            }
        },
        {
            'kind': 'youtube#video',
            'etag': '"Fznwjl6JEQdo1MGvHOGaz_YanRU/cDwx4Ds5-J9CmiqmazUetzrLZKY"',
            'id': 'Rf54BH35yrY',
            'snippet': {
                'publishedAt': '2019-09-04T15:00:12.000Z',
                'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
                'title': 'Angular 8 Основы. Полный Курс для начинающих',
                'description': 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nУрок по Angular. В этом курсе вы познакомитесь со всеми основными элементами, которые есть в Angular с полного нуля\n\nAngular 8 Основы. Полный Курс. Урок для Новичков',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    },
                    'standard': {
                        'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/sddefault.jpg',
                        'width': 640,
                        'height': 480
                    },
                    'maxres': {
                        'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/maxresdefault.jpg',
                        'width': 1280,
                        'height': 720
                    }
                },
                'channelTitle': 'Владилен Минин',
                'tags': [
                    'angular',
                    'angularjs',
                    'js',
                    'javascript',
                    'уроки angular',
                    'angular уроки',
                    'angular 8',
                    'курс angular',
                    'angular основы',
                    'владилен',
                    'владилен минин',
                    'минин',
                    'основы angular',
                    'ангуляр',
                    'angular 6',
                    'angular js',
                    'angular уроки для начинающих',
                    'angular фреймворк',
                    'angular практика',
                    'что такое angular',
                    'angular cli',
                    'angular уроки на русском',
                    'курсы программирования',
                    'angular tutorial'
                ],
                'categoryId': '27',
                'liveBroadcastContent': 'none',
                'localized': {
                    'title': 'Angular 8 Основы. Полный Курс для начинающих',
                    'description': 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nУрок по Angular. В этом курсе вы познакомитесь со всеми основными элементами, которые есть в Angular с полного нуля\n\nAngular 8 Основы. Полный Курс. Урок для Новичков'
                },
                'defaultAudioLanguage': 'en-US'
            },
            'statistics': {
                'viewCount': '14544',
                'likeCount': '573',
                'dislikeCount': '11',
                'favoriteCount': '0',
                'commentCount': '88'
            }
        },
        {
            'kind': 'youtube#video',
            'etag': '"Fznwjl6JEQdo1MGvHOGaz_YanRU/_99tEunMszVYvCj2-1aUTKgOoSY"',
            'id': 'm0yGx2MGZWg',
            'snippet': {
                'publishedAt': '2018-05-13T07:44:08.000Z',
                'channelId': 'UCe_H8hzx9WV7Ca7Ps5gt72Q',
                'title': 'Что такое Angular. Обзор возможностей',
                'description': 'В этом видео речь пойдет про javascript фреймворк Angular. Я расскажу что такое Angular, где и когда его применяют, а так же сделаю небольшой обзор его возможностей. Расскажу чем фреймворк сложен для новичков и чем он действительно хорош для новых проектов. Сейчас для того что б стать junior javascript разработчиком нужно обязательно знать хотя бы один фреймворк js и ангуляр будет отличным выбором.',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    },
                    'standard': {
                        'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/sddefault.jpg',
                        'width': 640,
                        'height': 480
                    },
                    'maxres': {
                        'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/maxresdefault.jpg',
                        'width': 1280,
                        'height': 720
                    }
                },
                'channelTitle': 'Web Developer Blog',
                'tags': [
                    'angular',
                    'ангуляр',
                    'angular js',
                    'уроки angular',
                    'angular уроки',
                    'angular tutorial',
                    'что такое angular',
                    'angular обзор',
                    'angular фреймворк',
                    'js',
                    'javascript',
                    'web development',
                    'angular 6',
                    'angular примеры',
                    'angular практика',
                    'стоит ли учить angular',
                    'angular учить',
                    'программирование'
                ],
                'categoryId': '27',
                'liveBroadcastContent': 'none',
                'defaultLanguage': 'ru',
                'localized': {
                    'title': 'Что такое Angular. Обзор возможностей',
                    'description': 'В этом видео речь пойдет про javascript фреймворк Angular. Я расскажу что такое Angular, где и когда его применяют, а так же сделаю небольшой обзор его возможностей. Расскажу чем фреймворк сложен для новичков и чем он действительно хорош для новых проектов. Сейчас для того что б стать junior javascript разработчиком нужно обязательно знать хотя бы один фреймворк js и ангуляр будет отличным выбором.'
                },
                'defaultAudioLanguage': 'ru'
            },
            'statistics': {
                'viewCount': '43470',
                'likeCount': '1047',
                'dislikeCount': '198',
                'favoriteCount': '0',
                'commentCount': '96'
            }
        },
        {
            'kind': 'youtube#video',
            'etag': '"Fznwjl6JEQdo1MGvHOGaz_YanRU/GuGydXnkvpl-L4ntYhAaLNiseZ4"',
            'id': 'VAkio68d51A',
            'snippet': {
                'publishedAt': '2019-02-25T00:09:23.000Z',
                'channelId': 'UCZ9qFEC82qM6Pk-54Q4TVWA',
                'title': 'What is Angular? (Explained for Beginners)',
                'description': "When you're just starting out you are probably wondering \"What is Angular exactly? When you ask that question it leads to a lot of concepts that are over your head and don't make sense. So in this video I really want to cover what exactly Angular is and why it's even necessary... all from a beginners point of view.\n\n*** DOWNLOAD THE FREE REPORT ***\nFor my free report on the five best programming languages in 2019 (for beginners) go to: https://andysterkowitz.com/report",
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/VAkio68d51A/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/VAkio68d51A/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/VAkio68d51A/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    },
                    'standard': {
                        'url': 'https://i.ytimg.com/vi/VAkio68d51A/sddefault.jpg',
                        'width': 640,
                        'height': 480
                    },
                    'maxres': {
                        'url': 'https://i.ytimg.com/vi/VAkio68d51A/maxresdefault.jpg',
                        'width': 1280,
                        'height': 720
                    }
                },
                'channelTitle': 'Andy Sterkowitz',
                'tags': [
                    'angular',
                    'angular 7',
                    'angularjs',
                    'learn angular',
                    'angular.js',
                    'angular tutorial for beginners',
                    'angular for beginners',
                    'angular for dummies',
                    'what is angular',
                    'what is angular 7',
                    'angular2',
                    'angular 2',
                    'javascript',
                    'front end framework',
                    'web development',
                    'web development 2019',
                    'front end framework 2019',
                    'what is a front end framework',
                    'software development',
                    'programming',
                    'front end software developer',
                    'web developer'
                ],
                'categoryId': '28',
                'liveBroadcastContent': 'none',
                'defaultLanguage': 'en',
                'localized': {
                    'title': 'What is Angular? (Explained for Beginners)',
                    'description': "When you're just starting out you are probably wondering \"What is Angular exactly? When you ask that question it leads to a lot of concepts that are over your head and don't make sense. So in this video I really want to cover what exactly Angular is and why it's even necessary... all from a beginners point of view.\n\n*** DOWNLOAD THE FREE REPORT ***\nFor my free report on the five best programming languages in 2019 (for beginners) go to: https://andysterkowitz.com/report"
                },
                'defaultAudioLanguage': 'en'
            },
            'statistics': {
                'viewCount': '57997',
                'likeCount': '1662',
                'dislikeCount': '34',
                'favoriteCount': '0',
                'commentCount': '114'
            }
        },
        {
            'kind': 'youtube#video',
            'etag': '"Fznwjl6JEQdo1MGvHOGaz_YanRU/u2qq5ltpXouoIrpkJgGLu8YOIeg"',
            'id': 'u1VCxpvDgsk',
            'snippet': {
                'publishedAt': '2018-12-01T15:00:05.000Z',
                'channelId': 'UCvuY904el7JvBlPbdqbfguw',
                'title': 'Уроки Angular для начинающих / #1 - Введение в Angular',
                'description': 'Приступаем к изучению библиотеки Angular. В ходе курса мы создадим небольшой сайт и научимся всем основным концепциям библиотеки Angular. Мы рассмотрим события, компоненты, создание форм и многое другое, чтобы вы в дальнейшем сами могли создавать веб сайты на Angular.\n\n1) Курс на сайте itProger: https://itproger.com/course/angular\n2) Node JS: https://nodejs.org/\n3) Редактор кода: https://atom.io/\n4) Angular CLI: https://cli.angular.io/\n\n✔ Сообщество программистов: https://itproger.com/\n\n✔ -------------\nВступай в группу Вк - https://vk.com/prog_life 🚀\nГруппа FaceBook - https://goo.gl/XW0aaP\n\nInstagram: https://www.instagram.com/gosha_dudar/\nTelegram: http://t.me/itProger_official\nTwitter - https://twitter.com/GoshaDudar\n\n- Уроки от #GoshaDudar 👨🏼\u200d💻\n- Все уроки по хештегу #goshaAngular',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    },
                    'standard': {
                        'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/sddefault.jpg',
                        'width': 640,
                        'height': 480
                    },
                    'maxres': {
                        'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/maxresdefault.jpg',
                        'width': 1280,
                        'height': 720
                    }
                },
                'channelTitle': 'Гоша Дударь',
                'tags': [
                    'angular',
                    'angular 6',
                    'angular уроки',
                    'angular node js',
                    'angularjs',
                    'angularjs уроки',
                    'для начинающих',
                    'angular уроки на русском',
                    'Введение в Angular',
                    'что такое angular',
                    'установка angular',
                    '#GoshaDudar',
                    '#goshaAngular'
                ],
                'categoryId': '27',
                'liveBroadcastContent': 'none',
                'defaultLanguage': 'ru',
                'localized': {
                    'title': 'Уроки Angular для начинающих / #1 - Введение в Angular',
                    'description': 'Приступаем к изучению библиотеки Angular. В ходе курса мы создадим небольшой сайт и научимся всем основным концепциям библиотеки Angular. Мы рассмотрим события, компоненты, создание форм и многое другое, чтобы вы в дальнейшем сами могли создавать веб сайты на Angular.\n\n1) Курс на сайте itProger: https://itproger.com/course/angular\n2) Node JS: https://nodejs.org/\n3) Редактор кода: https://atom.io/\n4) Angular CLI: https://cli.angular.io/\n\n✔ Сообщество программистов: https://itproger.com/\n\n✔ -------------\nВступай в группу Вк - https://vk.com/prog_life 🚀\nГруппа FaceBook - https://goo.gl/XW0aaP\n\nInstagram: https://www.instagram.com/gosha_dudar/\nTelegram: http://t.me/itProger_official\nTwitter - https://twitter.com/GoshaDudar\n\n- Уроки от #GoshaDudar 👨🏼\u200d💻\n- Все уроки по хештегу #goshaAngular'
                },
                'defaultAudioLanguage': 'ru'
            },
            'statistics': {
                'viewCount': '33896',
                'likeCount': '612',
                'dislikeCount': '37',
                'favoriteCount': '0',
                'commentCount': '50'
            }
        },
        {
            'kind': 'youtube#video',
            'etag': '"Fznwjl6JEQdo1MGvHOGaz_YanRU/96JEWzuOaAgaHrcnKhmatlZzPME"',
            'id': 'rc3E4tplFCU',
            'snippet': {
                'publishedAt': '2019-10-29T15:00:14.000Z',
                'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
                'title': 'Angular 40 вопросов для собеседования',
                'description': 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nAngular 40 вопросов для собеседования. Подготовка к интервью',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    },
                    'standard': {
                        'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/sddefault.jpg',
                        'width': 640,
                        'height': 480
                    },
                    'maxres': {
                        'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/maxresdefault.jpg',
                        'width': 1280,
                        'height': 720
                    }
                },
                'channelTitle': 'Владилен Минин',
                'tags': [
                    'angular',
                    'angularjs',
                    'js',
                    'javascript',
                    'уроки angular',
                    'angular уроки',
                    'angular 8',
                    'курс angular',
                    'angular основы',
                    'владилен',
                    'владилен минин',
                    'минин',
                    'основы angular',
                    'angular вопросы',
                    'angular интервью',
                    'собеседование',
                    'angular собеседование',
                    'вопросы на собеседование',
                    'angular 6',
                    'angular для начинающих',
                    'angular уроки на русском'
                ],
                'categoryId': '27',
                'liveBroadcastContent': 'none',
                'localized': {
                    'title': 'Angular 40 вопросов для собеседования',
                    'description': 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nAngular 40 вопросов для собеседования. Подготовка к интервью'
                },
                'defaultAudioLanguage': 'en-US'
            },
            'statistics': {
                'viewCount': '6824',
                'likeCount': '595',
                'dislikeCount': '10',
                'favoriteCount': '0',
                'commentCount': '126'
            }
        },
        {
            'kind': 'youtube#video',
            'etag': '"Fznwjl6JEQdo1MGvHOGaz_YanRU/pvVvPt5cchXjCoSYxodr18lOaEg"',
            'id': 'NaZwVUHnmfE',
            'snippet': {
                'publishedAt': '2019-06-19T16:06:13.000Z',
                'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
                'title': 'Angular 8 + RxJS. Приложение Органайзер С Нуля (Для Опытных!)',
                'description': 'Курс по Angular 8+: \nhttps://clc.to/angular \n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nВ видео я покажу разработку приложения органайзера с нуля.\nВ видео я не буду пояснять базовые моменты, так как это практика для опытных разработчиков\n\nВ результате вы получите приложение, в котором будет использоваться много RxJS, Firebase, MomentJS и Angular 8\nНе будет никаких CSS фреймворков - все стили будут написаны с нуля с использованием CSS переменных\n\nИсходный код:\nhttps://github.com/vladilenm/angular-organizer\n\nAngular 8 + RxJS. Приложение Целиком (Для Опытных!)\nhttps://youtu.be/NaZwVUHnmfE',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    },
                    'standard': {
                        'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/sddefault.jpg',
                        'width': 640,
                        'height': 480
                    },
                    'maxres': {
                        'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/maxresdefault.jpg',
                        'width': 1280,
                        'height': 720
                    }
                },
                'channelTitle': 'Владилен Минин',
                'tags': [
                    'angular',
                    'angular 8',
                    'vladilen',
                    'владилен',
                    'владилен минин',
                    'angularjs',
                    'angular практика',
                    'уроки angular',
                    'rxjs',
                    'rxjs уроки',
                    'momentjs',
                    'js',
                    'javascript',
                    'web',
                    'frontend',
                    'ангуляр',
                    'angular уроки',
                    'angular уроки для начинающих',
                    'создание приложения на angular 4',
                    'angular 60 минут',
                    'изучение angular',
                    'angular 6',
                    'ангуляр 7 уроки',
                    'реактивное программирование'
                ],
                'categoryId': '27',
                'liveBroadcastContent': 'none',
                'localized': {
                    'title': 'Angular 8 + RxJS. Приложение Органайзер С Нуля (Для Опытных!)',
                    'description': 'Курс по Angular 8+: \nhttps://clc.to/angular \n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nВ видео я покажу разработку приложения органайзера с нуля.\nВ видео я не буду пояснять базовые моменты, так как это практика для опытных разработчиков\n\nВ результате вы получите приложение, в котором будет использоваться много RxJS, Firebase, MomentJS и Angular 8\nНе будет никаких CSS фреймворков - все стили будут написаны с нуля с использованием CSS переменных\n\nИсходный код:\nhttps://github.com/vladilenm/angular-organizer\n\nAngular 8 + RxJS. Приложение Целиком (Для Опытных!)\nhttps://youtu.be/NaZwVUHnmfE'
                },
                'defaultAudioLanguage': 'en-US'
            },
            'statistics': {
                'viewCount': '12128',
                'likeCount': '665',
                'dislikeCount': '11',
                'favoriteCount': '0',
                'commentCount': '156'
            }
        },
        {
            'kind': 'youtube#video',
            'etag': '"Fznwjl6JEQdo1MGvHOGaz_YanRU/KuFm1jGNMzgjE2VlAEsPgRVra4o"',
            'id': 'G0bBLvWXBvc',
            'snippet': {
                'publishedAt': '2019-09-16T16:53:41.000Z',
                'channelId': 'UCsBjURrPoezykLs9EqgamOA',
                'title': "Angular for Beginners - Let's build a Tic-Tac-Toe PWA",
                'description': 'Learn the basics of Angular 8 🚀 by building a tic-tac-toe game 🕹️ from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics 👉https://fireship.io/courses/angular/\n\nFull Source Code: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Docs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular quizzes 🤓\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAndroid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fireship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment.',
                'thumbnails': {
                    'default': {
                        'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/default.jpg',
                        'width': 120,
                        'height': 90
                    },
                    'medium': {
                        'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/mqdefault.jpg',
                        'width': 320,
                        'height': 180
                    },
                    'high': {
                        'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg',
                        'width': 480,
                        'height': 360
                    },
                    'standard': {
                        'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/sddefault.jpg',
                        'width': 640,
                        'height': 480
                    },
                    'maxres': {
                        'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/maxresdefault.jpg',
                        'width': 1280,
                        'height': 720
                    }
                },
                'channelTitle': 'Fireship',
                'tags': [
                    'webdev',
                    'app development',
                    'lesson',
                    'tutorial',
                    'beginners',
                    'beginner',
                    'basic',
                    'angular tutorial',
                    'angular basics',
                    'angular for beginners',
                    'angular 8',
                    'angular components',
                    'learn angular'
                ],
                'categoryId': '28',
                'liveBroadcastContent': 'none',
                'localized': {
                    'title': "Angular for Beginners - Let's build a Tic-Tac-Toe PWA",
                    'description': 'Learn the basics of Angular 8 🚀 by building a tic-tac-toe game 🕹️ from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics 👉https://fireship.io/courses/angular/\n\nFull Source Code: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Docs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular quizzes 🤓\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAndroid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fireship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment.'
                },
                'defaultAudioLanguage': 'en'
            },
            'statistics': {
                'viewCount': '56657',
                'likeCount': '2092',
                'dislikeCount': '36',
                'favoriteCount': '0',
                'commentCount': '128'
            }
        }
    ]
};


/***/ }),

/***/ "./src/app/shared/pipes/number-conversion-pipe.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/pipes/number-conversion-pipe.pipe.ts ***!
  \*************************************************************/
/*! exports provided: NumberConversionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberConversionPipe", function() { return NumberConversionPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumberConversionPipe = class NumberConversionPipe {
    transform(value) {
        let num = Number(value);
        if (num <= 999) {
            return `${num}`;
        }
        else if (num >= 1000 && num <= 999999) {
            return `${Math.round(num / 1000)}k`;
        }
        else if (num >= 1000000) {
            return `${Math.round(num / 1000000)}m`;
        }
    }
};
NumberConversionPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'numberConversionPipe'
    })
], NumberConversionPipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _directives_border_color_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/border-color.directive */ "./src/app/shared/directives/border-color.directive.ts");
/* harmony import */ var _pipes_number_conversion_pipe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/number-conversion-pipe.pipe */ "./src/app/shared/pipes/number-conversion-pipe.pipe.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/snack-bar/snack-bar.component */ "./src/app/shared/components/snack-bar/snack-bar.component.ts");
/* harmony import */ var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/statistics/statistics.component */ "./src/app/shared/components/statistics/statistics.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search-item/search-item.component */ "./src/app/shared/components/search-item/search-item.component.ts");










let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["SnackBarComponent"],
            _pipes_number_conversion_pipe_pipe__WEBPACK_IMPORTED_MODULE_2__["NumberConversionPipe"],
            _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__["StatisticsComponent"],
            _components_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_9__["SearchItemComponent"],
            _directives_border_color_directive__WEBPACK_IMPORTED_MODULE_1__["BorderColorDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]
        ],
        exports: [
            _components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["SnackBarComponent"],
            _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__["StatisticsComponent"],
            _components_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_9__["SearchItemComponent"],
            _directives_border_color_directive__WEBPACK_IMPORTED_MODULE_1__["BorderColorDirective"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/youtube/components/search-results/search-results.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/youtube/components/search-results/search-results.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  padding-top: 30px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\napp-search-item {\r\n  margin: 20px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQThCO1VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5hcHAtc2VhcmNoLWl0ZW0ge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/youtube/components/search-results/search-results.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/youtube/components/search-results/search-results.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_youtube_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/youtube.service */ "./src/app/youtube/services/youtube.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SearchResultsComponent = class SearchResultsComponent {
    constructor(_youtubeService) {
        this._youtubeService = _youtubeService;
    }
    ngOnInit() {
        this.videos = this._youtubeService.videos;
    }
};
SearchResultsComponent.ctorParameters = () => [
    { type: _services_youtube_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], SearchResultsComponent.prototype, "dateSort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], SearchResultsComponent.prototype, "countSort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], SearchResultsComponent.prototype, "searchText", void 0);
SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-search-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/components/search-results/search-results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-results.component.css */ "./src/app/youtube/components/search-results/search-results.component.css")).default]
    })
], SearchResultsComponent);



/***/ }),

/***/ "./src/app/youtube/components/sort-panel/sort-panel.component.css":
/*!************************************************************************!*\
  !*** ./src/app/youtube/components/sort-panel/sort-panel.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  height: 40px;\r\n  font-size: 14px;\r\n  background-color: rgb(235, 238, 243);\r\n  border-top: 1px solid #c4c4c4;\r\n}\r\n\r\n.wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  width: 35%;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.field {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.field > mat-icon {\r\n  width: 18px;\r\n  height: 18px;\r\n  font-size: 18px;\r\n  color: cornflowerblue;\r\n  margin-left: 5px;\r\n}\r\n\r\n.search-input {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  color: #0016ee;\r\n}\r\n\r\n.search-input > p {\r\n  margin-right: 5px;\r\n  align-self: flex-end;\r\n}\r\n\r\n.search-input > mat-icon {\r\n  width: 18px;\r\n  height: 18px;\r\n  font-size: 18px;\r\n  color: cornflowerblue;\r\n  margin-left: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .wrapper {\r\n    width: 60%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS9jb21wb25lbnRzL3NvcnQtcGFuZWwvc29ydC1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC95b3V0dWJlL2NvbXBvbmVudHMvc29ydC1wYW5lbC9zb3J0LXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzOCwgMjQzKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmllbGQgPiBtYXQtaWNvbiB7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogIzAwMTZlZTtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCA+IHAge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0ID4gbWF0LWljb24ge1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/youtube/components/sort-panel/sort-panel.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/youtube/components/sort-panel/sort-panel.component.ts ***!
  \***********************************************************************/
/*! exports provided: SortPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPanelComponent", function() { return SortPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_youtube_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/youtube.service */ "./src/app/youtube/services/youtube.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SortPanelComponent = class SortPanelComponent {
    constructor(_youtubeService) {
        this._youtubeService = _youtubeService;
        this.dateSortCounter = 0;
        this.countSortCounter = 0;
    }
    ngOnInit() {
    }
    dateSort($event) {
        $event.preventDefault();
        this.dateSortCounter++;
        this.countSortCounter = 0;
        if (this.dateSortCounter % 2 !== 0) {
            this._youtubeService.dateSort = true;
        }
        else {
            this._youtubeService.dateSort = false;
        }
    }
    countSort($event) {
        $event.preventDefault();
        this.countSortCounter++;
        this.dateSortCounter = 0;
        if (this.countSortCounter % 2 !== 0) {
            this._youtubeService.countSort = true;
        }
        else {
            this._youtubeService.countSort = false;
        }
    }
    onSearchSubmit() {
        this.dateSortCounter = 0;
        this.countSortCounter = 0;
        this._youtubeService.dateSort = false;
        this._youtubeService.countSort = false;
        this._youtubeService.searchText = this.userInput;
    }
    clearField($event) {
        this.userInput = '';
        this.dateSortCounter = 0;
        this.countSortCounter = 0;
        this._youtubeService.dateSort = false;
        this._youtubeService.countSort = false;
        this._youtubeService.searchText = this.userInput;
    }
};
SortPanelComponent.ctorParameters = () => [
    { type: _services_youtube_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], SortPanelComponent.prototype, "userInput", void 0);
SortPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sort-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sort-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/components/sort-panel/sort-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sort-panel.component.css */ "./src/app/youtube/components/sort-panel/sort-panel.component.css")).default]
    })
], SortPanelComponent);



/***/ }),

/***/ "./src/app/youtube/pages/detailed-information/detailed-information.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/youtube/pages/detailed-information/detailed-information.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  max-width: 900px;\r\n  max-height: 400px;\r\n  margin: 50px auto;\r\n  box-shadow: 0 2px 1px -1px rgba(0,0,0,.4), 0 1px 1px 0 rgba(0,0,0,.5), 0 1px 12px -1px rgba(0,0,0,0.6);\r\n}\r\n\r\n.content {\r\n  margin-left: 10px;\r\n  max-width: 280px;\r\n}\r\n\r\n.video-img {\r\n  margin: -16px 0 -19px -16px;\r\n  max-width: 600px;\r\n}\r\n\r\n.wrapper {\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.btn {\r\n  width: 120px;\r\n}\r\n\r\n.card-content {\r\n  margin-bottom: 65px;\r\n}\r\n\r\n.fullDesc {\r\n  position: absolute;\r\n  width: 250px;\r\n  max-height: 400px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS9wYWdlcy9kZXRhaWxlZC1pbmZvcm1hdGlvbi9kZXRhaWxlZC1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsc0dBQXNHO0FBQ3hHOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC95b3V0dWJlL3BhZ2VzL2RldGFpbGVkLWluZm9ybWF0aW9uL2RldGFpbGVkLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjQpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC41KSwgMCAxcHggMTJweCAtMXB4IHJnYmEoMCwwLDAsMC42KTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1heC13aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi52aWRlby1pbWcge1xyXG4gIG1hcmdpbjogLTE2cHggMCAtMTlweCAtMTZweDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICBtYXJnaW4tYm90dG9tOiA2NXB4O1xyXG59XHJcblxyXG4uZnVsbERlc2Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/youtube/pages/detailed-information/detailed-information.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/youtube/pages/detailed-information/detailed-information.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DetailedInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedInformationComponent", function() { return DetailedInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_youtube_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/youtube.service */ "./src/app/youtube/services/youtube.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let DetailedInformationComponent = class DetailedInformationComponent {
    constructor(_youtubeService, _location) {
        this._youtubeService = _youtubeService;
        this._location = _location;
        this.shortDesc = true;
    }
    ngOnInit() {
        this._youtubeService.findVideo();
        this.video = this._youtubeService.video;
    }
    showFullDescription($event) {
        $event.preventDefault();
        this.shortDesc = false;
    }
    hideFullDescription($event) {
        $event.preventDefault();
        this.shortDesc = true;
    }
    back() {
        this._location.back();
    }
};
DetailedInformationComponent.ctorParameters = () => [
    { type: _services_youtube_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
DetailedInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-detailed-information',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detailed-information.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/pages/detailed-information/detailed-information.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detailed-information.component.css */ "./src/app/youtube/pages/detailed-information/detailed-information.component.css")).default]
    })
], DetailedInformationComponent);



/***/ }),

/***/ "./src/app/youtube/pages/main-page/main-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/youtube/pages/main-page/main-page.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  padding-top: 30px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\napp-search-item {\r\n  margin: 20px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQThCO1VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5hcHAtc2VhcmNoLWl0ZW0ge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/youtube/pages/main-page/main-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/youtube/pages/main-page/main-page.component.ts ***!
  \****************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_youtube_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/youtube.service */ "./src/app/youtube/services/youtube.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MainPageComponent = class MainPageComponent {
    constructor(youtubeService) {
        this.youtubeService = youtubeService;
    }
};
MainPageComponent.ctorParameters = () => [
    { type: _services_youtube_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeService"] }
];
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-main-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/pages/main-page/main-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.css */ "./src/app/youtube/pages/main-page/main-page.component.css")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/youtube/pages/not-found/not-found.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/youtube/pages/not-found/not-found.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  width: 60vw;\r\n  height: 400px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  margin: 100px auto 0 auto;\r\n}\r\n\r\n.err404 {\r\n  font-size: 100px;\r\n  font-weight: bold;\r\n}\r\n\r\n.err-desc {\r\n  margin-left: 50px;\r\n  font-size: 50px;\r\n  text-transform: uppercase;\r\n  color: grey;\r\n  max-width: 476px;\r\n  padding-bottom: 25px;\r\n  border-bottom: 5px solid #3f51b5;\r\n}\r\n\r\n.btn {\r\n  flex-basis: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.home-btn {\r\n  width: 150px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveW91dHViZS9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAveW91dHViZS9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogNjB2dztcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDAgYXV0bztcclxufVxyXG5cclxuLmVycjQwNCB7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVyci1kZXNjIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogZ3JleTtcclxuICBtYXgtd2lkdGg6IDQ3NnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjM2Y1MWI1O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob21lLWJ0biB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/youtube/pages/not-found/not-found.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/youtube/pages/not-found/not-found.component.ts ***!
  \****************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let NotFoundComponent = class NotFoundComponent {
    constructor(_router) {
        this._router = _router;
    }
    goHome() {
        this._router.navigateByUrl('/home');
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/youtube/pages/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/youtube/pages/not-found/not-found.component.css")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/youtube/pipes/count-of-views.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/youtube/pipes/count-of-views.pipe.ts ***!
  \******************************************************/
/*! exports provided: CountOfViewsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountOfViewsPipe", function() { return CountOfViewsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CountOfViewsPipe = class CountOfViewsPipe {
    transform(allCards, countSort) {
        switch (countSort) {
            case undefined:
                return allCards;
            case true:
                return allCards.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
            case false:
                return allCards.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
            default:
                break;
        }
    }
};
CountOfViewsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'countOfViews'
    })
], CountOfViewsPipe);



/***/ }),

/***/ "./src/app/youtube/pipes/date-sort.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/youtube/pipes/date-sort.pipe.ts ***!
  \*************************************************/
/*! exports provided: DateSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateSortPipe", function() { return DateSortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateSortPipe = class DateSortPipe {
    transform(allCards, dateSort) {
        switch (dateSort) {
            case undefined:
                return allCards;
            case true:
                return allCards.sort((a, b) => new Date(b.snippet.publishedAt).getTime()
                    - new Date(a.snippet.publishedAt).getTime());
            case false:
                return allCards.sort((a, b) => new Date(a.snippet.publishedAt).getTime()
                    - new Date(b.snippet.publishedAt).getTime());
            default:
                break;
        }
    }
};
DateSortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateSortPipe'
    })
], DateSortPipe);



/***/ }),

/***/ "./src/app/youtube/pipes/word-filtering.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/youtube/pipes/word-filtering.pipe.ts ***!
  \******************************************************/
/*! exports provided: WordFilteringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordFilteringPipe", function() { return WordFilteringPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WordFilteringPipe = class WordFilteringPipe {
    transform(allCards, searchText) {
        if (searchText) {
            return allCards.filter((item) => item.snippet.title.toLowerCase()
                .indexOf(searchText.toLowerCase()) !== -1);
        }
        return allCards;
    }
};
WordFilteringPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'wordFiltering'
    })
], WordFilteringPipe);



/***/ }),

/***/ "./src/app/youtube/services/youtube.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/youtube/services/youtube.service.ts ***!
  \*****************************************************/
/*! exports provided: YoutubeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeService", function() { return YoutubeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_mocks_youtube_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/mocks/youtube-response */ "./src/app/shared/mocks/youtube-response.ts");



const videos = src_app_shared_mocks_youtube_response__WEBPACK_IMPORTED_MODULE_2__["youtubeResponse"].items;
let YoutubeService = class YoutubeService {
    constructor() {
        this.videos = src_app_shared_mocks_youtube_response__WEBPACK_IMPORTED_MODULE_2__["youtubeResponse"].items;
        this.sortActive = false;
        this.hasResponse = false;
    }
    findVideo() {
        // tslint:disable-next-line: no-inferrable-types
        for (let i = 0; i < this.videos.length; i++) {
            if (this.videos[i].id === this.videoId) {
                this.video = this.videos[i];
            }
        }
    }
    toggleSortPanelState() {
        if (this.hasResponse) {
            this.sortActive ? this.sortActive = false : this.sortActive = true;
        }
    }
    showResults() {
        this.hasResponse = true;
    }
    logOut() {
        this.sortActive = false;
        this.hasResponse = false;
    }
};
YoutubeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], YoutubeService);



/***/ }),

/***/ "./src/app/youtube/youtube.module.ts":
/*!*******************************************!*\
  !*** ./src/app/youtube/youtube.module.ts ***!
  \*******************************************/
/*! exports provided: YoutubeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeModule", function() { return YoutubeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_detailed_information_detailed_information_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/detailed-information/detailed-information.component */ "./src/app/youtube/pages/detailed-information/detailed-information.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pipes_word_filtering_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/word-filtering.pipe */ "./src/app/youtube/pipes/word-filtering.pipe.ts");
/* harmony import */ var _pipes_date_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/date-sort.pipe */ "./src/app/youtube/pipes/date-sort.pipe.ts");
/* harmony import */ var _pipes_count_of_views_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/count-of-views.pipe */ "./src/app/youtube/pipes/count-of-views.pipe.ts");
/* harmony import */ var _components_sort_panel_sort_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sort-panel/sort-panel.component */ "./src/app/youtube/components/sort-panel/sort-panel.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/youtube/components/search-results/search-results.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/youtube/pages/not-found/not-found.component.ts");
/* harmony import */ var _services_youtube_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/youtube.service */ "./src/app/youtube/services/youtube.service.ts");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "./src/app/youtube/pages/main-page/main-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");















let YoutubeModule = class YoutubeModule {
};
YoutubeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [
            _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
            _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_7__["SearchResultsComponent"],
            _components_sort_panel_sort_panel_component__WEBPACK_IMPORTED_MODULE_6__["SortPanelComponent"],
            _pipes_count_of_views_pipe__WEBPACK_IMPORTED_MODULE_5__["CountOfViewsPipe"],
            _pipes_date_sort_pipe__WEBPACK_IMPORTED_MODULE_4__["DateSortPipe"],
            _pipes_word_filtering_pipe__WEBPACK_IMPORTED_MODULE_3__["WordFilteringPipe"],
            _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__["MainPageComponent"],
            _pipes_date_sort_pipe__WEBPACK_IMPORTED_MODULE_4__["DateSortPipe"],
            _pipes_word_filtering_pipe__WEBPACK_IMPORTED_MODULE_3__["WordFilteringPipe"],
            _pipes_count_of_views_pipe__WEBPACK_IMPORTED_MODULE_5__["CountOfViewsPipe"],
            _pages_detailed_information_detailed_information_component__WEBPACK_IMPORTED_MODULE_1__["DetailedInformationComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
        ],
        providers: [
            _services_youtube_service__WEBPACK_IMPORTED_MODULE_12__["YoutubeService"]
        ]
    })
], YoutubeModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ilia\Desktop\angular\youtube-client\youtube-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map