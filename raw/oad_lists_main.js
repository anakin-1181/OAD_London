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

/***/ "./src/core/core.module.ts":
/*!*********************************!*\
  !*** ./src/core/core.module.ts ***!
  \*********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipes_new_line_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/new-line.pipe */ "./src/pipes/new-line.pipe.ts");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/safe.pipe */ "./src/pipes/safe.pipe.ts");




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
            // dep modules
            ],
            declarations: [
                _pipes_new_line_pipe__WEBPACK_IMPORTED_MODULE_2__["PipeNewLine"],
                _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["Safe"]
            ],
            exports: [
                _pipes_new_line_pipe__WEBPACK_IMPORTED_MODULE_2__["PipeNewLine"],
                _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["Safe"]
            ]
        })
    ], CoreModule);
    return CoreModule;
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

/***/ "./src/lists/app-routing.module.ts":
/*!*****************************************!*\
  !*** ./src/lists/app-routing.module.ts ***!
  \*****************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.component */ "./src/lists/details.component.ts");
/* harmony import */ var _detailsv2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detailsv2.component */ "./src/lists/detailsv2.component.ts");
/* harmony import */ var _services_old_version_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/old-version.service */ "./src/lists/services/old-version.service.ts");
/* harmony import */ var _services_new_version_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/new-version.service */ "./src/lists/services/new-version.service.ts");







//import { OldVersionMatcher } from './services/old-version.matcher';
//import { NewVersionMatcher } from './services/new-version.matcher';
var appRoutes = [
    //{
    //  path: '',
    //  component: DetailsComponent
    //},
    {
        path: 'lists/:continent/:listType/2019',
        //matcher: OldVersionMatcher,
        component: _details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"],
    },
    {
        path: 'lists/:continent/:listType/2020',
        //matcher: OldVersionMatcher,
        component: _details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"],
    },
    {
        path: 'lists/:continent/:listType/:year',
        //matcher: NewVersionMatcher,
        component: _detailsv2_component__WEBPACK_IMPORTED_MODULE_4__["DetailsV2Component"],
    },
    {
        path: 'lists/:continent/:listType/2019/:previewGuid',
        component: _details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]
    },
    {
        path: 'lists/:continent/:listType/2020/:previewGuid',
        component: _details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]
    },
    {
        path: 'lists/:continent/:listType/:year/:previewGuid',
        component: _detailsv2_component__WEBPACK_IMPORTED_MODULE_4__["DetailsV2Component"]
    },
];
//export const routing = RouterModule.forRoot(routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            providers: [
                _services_old_version_service__WEBPACK_IMPORTED_MODULE_5__["OldVersionService"],
                _services_new_version_service__WEBPACK_IMPORTED_MODULE_6__["NewVersionService"],
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/lists/app.component.css":
/*!*************************************!*\
  !*** ./src/lists/app.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbGlzdHMvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/lists/app.component.html":
/*!**************************************!*\
  !*** ./src/lists/app.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/lists/app.component.ts":
/*!************************************!*\
  !*** ./src/lists/app.component.ts ***!
  \************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/lists/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/lists/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/lists/app.module.ts":
/*!*********************************!*\
  !*** ./src/lists/app.module.ts ***!
  \*********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/lists/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/lists/app.component.ts");
/* harmony import */ var _details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details.component */ "./src/lists/details.component.ts");
/* harmony import */ var _detailsv2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detailsv2.component */ "./src/lists/detailsv2.component.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/core.module */ "./src/core/core.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





//import { routing } from './app-routing.module';






//import { Safe } from '../pipes/safe.pipe';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"],
                _detailsv2_component__WEBPACK_IMPORTED_MODULE_8__["DetailsV2Component"],
            ],
            imports: [
                //routing,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"].forRoot({
                    preset: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["scrollPreset"] // <-- tell LazyLoadImage that you want to use scrollPreset
                }),
                ngx_lightbox__WEBPACK_IMPORTED_MODULE_9__["LightboxModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"]
            ],
            exports: [],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/lists/details.component.css":
/*!*****************************************!*\
  !*** ./src/lists/details.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumbs .dropdown {\r\n  font-size: 12px;\r\n}\r\n\r\n.breadcrumbs .btn-drop {\r\n  display: block;\r\n  width: 100%;\r\n  background-color: transparent;\r\n  border: 0;\r\n  text-decoration: none;\r\n}\r\n\r\n.breadcrumbs .btn-drop:focus {\r\n    border: 0;\r\n    box-shadow: unset;\r\n    outline: unset;\r\n  }\r\n\r\n.breadcrumbs .btn-drop span {\r\n    display: inline-block;\r\n    position: relative;\r\n  }\r\n\r\n.breadcrumbs .btn-drop span:nth-child(2):after {\r\n      content: '';\r\n      position: absolute;\r\n      right: -22px;\r\n      top: 0px;\r\n      width: 8px;\r\n      height: 8px;\r\n      border: 2px solid #000;\r\n      border-top: 0;\r\n      border-left: 0;\r\n      transform: rotate(45deg);\r\n      transition: transform .3s ease;\r\n    }\r\n\r\n.breadcrumbs .show span:nth-child(2):after {\r\n  transform: rotate(-135deg);\r\n}\r\n\r\n.breadcrumbs .dropdown-item {\r\n  text-decoration: none;\r\n}\r\n\r\n.breadcrumbs .ico-arrow-black {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.breadcrumbs .ico-arrow-black svg {\r\n    width: 16px;\r\n    height: 16px;\r\n    transform: scale(0.6);\r\n  }\r\n\r\n.tabs .tabs__sort--view{\r\n  max-width: 300px;\r\n  flex: 0 0 500px;\r\n}\r\n\r\n.tabs .tabs__head{\r\n  margin: 0 0 20px;\r\n}\r\n\r\n.tab.list-view .card-details-details p {\r\n  padding: 0px;\r\n  font-size: 14px;\r\n  font-style: normal;\r\n  flex: 0 0 15%;\r\n  max-width: 15%;\r\n  color: #000;\r\n}\r\n\r\n.tab.list-view .card-details-details p.cityP {\r\n    flex: 0 0 16% !important;\r\n    max-width: 16%;\r\n  }\r\n\r\n.tab.list-view .card-details-details .state p.cityP {\r\n    flex: 0 0 13.4% !important;\r\n    max-width: 13.4%;\r\n  }\r\n\r\n.tab.list-view .card-details-details .state p.stateP {\r\n    flex: 0 0 13% !important;\r\n    max-width: 13%;\r\n  }\r\n\r\ntab.list-view .card-details-details p.countryP {\r\n  max-width: 17.5%\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-content {\r\n  /*padding: 21px 3px;*/\r\n  padding: 14px 3px;\r\n  font-size: 17px;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-title {\r\n  margin-bottom: 0;\r\n  -ms-flex: 0 0 30.5%;\r\n  max-width: 30.5%;\r\n  flex: 0 0 30.5%;\r\n  font-size: 17px;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-title a {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-title a:hover {\r\n      color: unset;\r\n    }\r\n\r\n.tab.list-view .card-details-details .state .card-details-title {\r\n  max-width: 28%;\r\n  flex: 0 0 28%\r\n}\r\n\r\n.tab.list-view .card-details-details .state .card-details-actions {\r\n  margin: 0 4.8% 0 0;\r\n}\r\n\r\n.tab.list-view .card-details-details .state .card-details-actions a:first-child {\r\n    max-width: 61%;\r\n    flex: 0 0 61%\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-actions a:nth-child(2) {\r\n  max-width: none;\r\n  flex: 0 0 auto;\r\n  width: 170px;\r\n  text-align: left;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-actions {\r\n  margin: 0 14% 0 0;\r\n  text-transform: initial;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-actions span {\r\n    font-size: 14px;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-actions a:first-child {    \r\n    font-size: 14px;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-actions-mob {\r\n  display: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-actions-mob a {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-actions-mob a:nth-child(2) {\r\n    opacity: 0.41;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-actions-mob a:nth-child(2):before {\r\n    content: \" / \";\r\n  }\r\n\r\n.list-filters li {\r\n  padding-bottom: 7px;\r\n  font-family: \"Neuzeit Grotesk\";\r\n}\r\n\r\n.list-filters li::after {\r\n    height: 2px;\r\n  }\r\n\r\n.list-filters li:nth-child(2) {\r\n  flex: 0 0 27.5%;\r\n  max-width: 27.5%;\r\n}\r\n\r\n.list-filters.state li:nth-child(2) {\r\n  flex: 0 0 25.3%;\r\n  max-width: 25.3%;\r\n}\r\n\r\n.list-filters li:nth-child(3) {\r\n  -ms-flex: 0 0 21.1%;\r\n  max-width: 21.1%;\r\n  flex: 0 0 21.1%;\r\n}\r\n\r\n.list-filters.state li:nth-child(3) {\r\n  flex: 0 0 15.6%;\r\n  max-width: 15.6%;\r\n}\r\n\r\n.list-filters li:nth-child(4) {\r\n  flex: 0 0 16.6%;\r\n  max-width: 16.6%;\r\n}\r\n\r\n.list-filters.state li:nth-child(4) {\r\n  flex: 0 0 13.8%;\r\n  max-width: 13.8%;\r\n}\r\n\r\n.list-filters li:nth-child(5) {\r\n  -ms-flex: 0 0 14.4%;\r\n  max-width: 14.4%;\r\n  flex: 0 0 14.4%;\r\n}\r\n\r\n.list-filters li:nth-child(6) {\r\n  /*-ms-flex: 0 0 13.8%;\r\n  max-width: 13.8%;\r\n  flex: 0 0 13.8%;*/\r\n  max-width: 100%;\r\n  flex: 1 1;\r\n}\r\n\r\n.list-filters li.current {\r\n  font-weight: 700;\r\n}\r\n\r\n.list-filters.state li:nth-child(5), .list-filters.state li:nth-child(6) {\r\n  flex: 0 0 12.0%;\r\n  max-width: 12.0%;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-actions a:first-child {\r\n  flex: 0 0 82%;\r\n  max-width: 82%;\r\n}\r\n\r\n.tab.list-view{\r\n  padding-right: 0px;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-entry {\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n  }\r\n\r\n@media (max-width: 1200px) {\r\n  .list-filters {\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n/*@media (max-width: 1023px) and (min-width: 768px) {\r\n  .breadcrumbs {\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n}*/\r\n\r\n@media (max-width: 1199px) {\r\n  .list-filters li:nth-child(2) {\r\n    max-width: 26.1% !important;\r\n    flex: 0 0 26.1% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(3) {\r\n    max-width: 19.1% !important;\r\n    flex: 0 0 19.1% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(4) {\r\n    max-width: 20.1% !important;\r\n    flex: 0 0 20.1% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(5) {\r\n    max-width: 13.7% !important;\r\n    flex: 0 0 13.7% !important;\r\n  }\r\n\r\n  .list-filters.state li:nth-child(2) {\r\n    max-width: 24.3% !important;\r\n    flex: 0 0 24.3% !important;\r\n  }\r\n  .list-filters.state li:nth-child(3) {\r\n    max-width: 13.6% !important;\r\n    flex: 0 0 13.6% !important;\r\n  }\r\n  .list-filters.state li:nth-child(4) {\r\n    max-width: 14.6% !important;\r\n    flex: 0 0 14.6% !important;\r\n  }\r\n  .list-filters.state li:nth-child(6) {\r\n    max-width: 13.5% !important;\r\n    flex: 0 0 13.5% !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 1023px)  {\r\n  .tabs .tabs__head {\r\n    justify-content: flex-start;\r\n  }\r\n  .breadcrumbs {\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-entry {\r\n    padding-right: 0;\r\n  }\r\n\r\n\r\n  .list-filters li:nth-child(2) {\r\n    max-width: 25.7% !important;\r\n    flex: 0 0 25.7% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(3) {\r\n    max-width: 19.5% !important;\r\n    flex: 0 0 19.5% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(4) {\r\n    max-width: 18.2% !important;\r\n    flex: 0 0 18.2% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(5) {\r\n    max-width: 15% !important;\r\n    flex: 0 0 15% !important;\r\n  }\r\n\r\n  .list-filters.state li:nth-child(2) {\r\n    max-width: 20.2% !important;\r\n    flex: 0 0 20.2% !important;\r\n  }\r\n  .list-filters.state li:nth-child(3) {\r\n    max-width: 15.6% !important;\r\n    flex: 0 0 15.6% !important;\r\n  }\r\n  .list-filters.state li:nth-child(4) {\r\n    max-width: 14.8% !important;\r\n    flex: 0 0 14.8% !important;\r\n  }\r\n  .list-filters.state li:nth-child(6) {\r\n    max-width: 14.8% !important;\r\n    flex: 0 0 14.8% !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 784px) {\r\n  .tab.list-view .card-details-details .card-details-actions {\r\n    width: 100px;\r\n  }\r\n\r\n  .list-filters li:nth-child(2) {\r\n    max-width: 23.3% !important;\r\n    flex: 0 0 23.3% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(3) {\r\n    max-width: 17.9% !important;\r\n    flex: 0 0 17.9% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(4) {\r\n    max-width: 16.7% !important;\r\n    flex: 0 0 16.7% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(5) {\r\n    max-width: 13.9% !important;\r\n    flex: 0 0 13.9% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(6) {\r\n    max-width: 13% !important;\r\n    flex: 0 0 13% !important;\r\n  }\r\n\r\n  .list-filters.state li:nth-child(2) {\r\n    max-width: 18.4% !important;\r\n    flex: 0 0 18.4% !important;\r\n  }\r\n  .list-filters.state li:nth-child(3) {\r\n    max-width: 14.5% !important;\r\n    flex: 0 0 14.5% !important;\r\n  }\r\n  .list-filters.state li:nth-child(4) {\r\n    max-width: 13.4% !important;\r\n    flex: 0 0 13.4% !important;\r\n  }\r\n  .list-filters.state li:nth-child(6) {\r\n    max-width: 13.8% !important;\r\n    flex: 0 0 13.8% !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {    \r\n  .tab.list-view .card-details-details p.cityP {\r\n    flex: none!important;\r\n  }\r\n\r\n  .sponsor-image {\r\n    width: 352px;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-content {\r\n    padding: 6px 0px 0;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-entry {\r\n    padding: 0px 10px 10px 0;\r\n  }\r\n\r\n  .col-md-header {\r\n    margin: 0 auto;\r\n    max-width: 374px;\r\n  }\r\n\r\n  .tabs .tabs__head p {\r\n    margin-bottom: 0;\r\n    display: block !important;\r\n  }\r\n\r\n  .tabs .tabs__head p.list-info-sort {\r\n    display: none !important;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-actions {\r\n    display: none;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-actions-mob {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .tab.list-view .card-details-details .card-details-title {\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saXN0cy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFRTtJQUNFLFNBQVM7SUFFVCxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0FBRUU7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixRQUFRO01BQ1IsVUFBVTtNQUNWLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLGNBQWM7TUFHZCx3QkFBd0I7TUFJeEIsOEJBQThCO0lBRWhDOztBQUVKO0VBR0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBR0Usd0JBQXdCO0FBQzFCOztBQUVFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFHWixxQkFBcUI7RUFDdkI7O0FBR0Y7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBRWxCLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVFO0lBRUUsd0JBQXdCO0lBQ3hCLGNBQWM7RUFDaEI7O0FBRUE7SUFFRSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBRUUsd0JBQXdCO0lBQ3hCLGNBQWM7RUFDaEI7O0FBRUY7RUFDRTtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUU7SUFDRSxxQkFBcUI7SUFDckIs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QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwyQkFBMkI7SUFFM0IsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwyQkFBMkI7SUFFM0IsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwyQkFBMkI7SUFFM0IsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwyQkFBMkI7SUFFM0IsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0FBQ0YiLCJmaWxlIjoic3JjL2xpc3RzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1icyAuZHJvcGRvd24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJyZWFkY3J1bWJzIC5idG4tZHJvcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuICAuYnJlYWRjcnVtYnMgLmJ0bi1kcm9wOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgIG91dGxpbmU6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzIC5idG4tZHJvcCBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICAgLmJyZWFkY3J1bWJzIC5idG4tZHJvcCBzcGFuOm50aC1jaGlsZCgyKTphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtMjJweDtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICBib3JkZXItbGVmdDogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2U7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gICAgfVxyXG5cclxuLmJyZWFkY3J1bWJzIC5zaG93IHNwYW46bnRoLWNoaWxkKDIpOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxufVxyXG5cclxuLmJyZWFkY3J1bWJzIC5kcm9wZG93bi1pdGVtIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5icmVhZGNydW1icyAuaWNvLWFycm93LWJsYWNrIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuICAuYnJlYWRjcnVtYnMgLmljby1hcnJvdy1ibGFjayBzdmcge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbiAgfVxyXG5cclxuXHJcbi50YWJzIC50YWJzX19zb3J0LS12aWV3e1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgZmxleDogMCAwIDUwMHB4O1xyXG59XHJcblxyXG4udGFicyAudGFic19faGVhZHtcclxuICBtYXJnaW46IDAgMCAyMHB4O1xyXG59XHJcblxyXG4udGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgcCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgLW1zLWZsZXg6IDAgMCAxNSU7XHJcbiAgZmxleDogMCAwIDE1JTtcclxuICBtYXgtd2lkdGg6IDE1JTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgcC5jaXR5UCB7XHJcbiAgICAtbXMtZmxleDogMCAwIDE2JTtcclxuICAgIGZsZXg6IDAgMCAxNiUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTYlO1xyXG4gIH1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5zdGF0ZSBwLmNpdHlQIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTMuNCU7XHJcbiAgICBmbGV4OiAwIDAgMTMuNCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTMuNCU7XHJcbiAgfVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLnN0YXRlIHAuc3RhdGVQIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTMlO1xyXG4gICAgZmxleDogMCAwIDEzJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMyU7XHJcbiAgfVxyXG5cclxudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgcC5jb3VudHJ5UCB7XHJcbiAgbWF4LXdpZHRoOiAxNy41JVxyXG59XHJcblxyXG4udGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1jb250ZW50IHtcclxuICAvKnBhZGRpbmc6IDIxcHggM3B4OyovXHJcbiAgcGFkZGluZzogMTRweCAzcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAtbXMtZmxleDogMCAwIDMwLjUlO1xyXG4gIG1heC13aWR0aDogMzAuNSU7XHJcbiAgZmxleDogMCAwIDMwLjUlO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy10aXRsZSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtdGl0bGUgYTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiB1bnNldDtcclxuICAgIH1cclxuXHJcblxyXG4udGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLnN0YXRlIC5jYXJkLWRldGFpbHMtdGl0bGUge1xyXG4gIG1heC13aWR0aDogMjglO1xyXG4gIGZsZXg6IDAgMCAyOCVcclxufVxyXG5cclxuXHJcbi50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuc3RhdGUgLmNhcmQtZGV0YWlscy1hY3Rpb25zIHtcclxuICBtYXJnaW46IDAgNC44JSAwIDA7XHJcbn1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5zdGF0ZSAuY2FyZC1kZXRhaWxzLWFjdGlvbnMgYTpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXgtd2lkdGg6IDYxJTtcclxuICAgIGZsZXg6IDAgMCA2MSVcclxuICB9XHJcblxyXG4udGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1hY3Rpb25zIGE6bnRoLWNoaWxkKDIpIHtcclxuICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4udGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1hY3Rpb25zIHtcclxuICBtYXJnaW46IDAgMTQlIDAgMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxufVxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWFjdGlvbnMgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1hY3Rpb25zIGE6Zmlyc3QtY2hpbGQgeyAgICBcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4udGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1hY3Rpb25zLW1vYiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWFjdGlvbnMtbW9iIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWFjdGlvbnMtbW9iIGE6bnRoLWNoaWxkKDIpIHtcclxuICAgIG9wYWNpdHk6IDAuNDE7XHJcbiAgfVxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWFjdGlvbnMtbW9iIGE6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIiAvIFwiO1xyXG4gIH1cclxuXHJcbi5saXN0LWZpbHRlcnMgbGkge1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTmV1emVpdCBHcm90ZXNrXCI7XHJcbn1cclxuXHJcbiAgLmxpc3QtZmlsdGVycyBsaTo6YWZ0ZXIge1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgfVxyXG5cclxuLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoMikge1xyXG4gIC1tcy1mbGV4OiAwIDAgMjcuNSU7XHJcbiAgZmxleDogMCAwIDI3LjUlO1xyXG4gIG1heC13aWR0aDogMjcuNSU7XHJcbn1cclxuXHJcbi5saXN0LWZpbHRlcnMuc3RhdGUgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAtbXMtZmxleDogMCAwIDI1LjMlO1xyXG4gIGZsZXg6IDAgMCAyNS4zJTtcclxuICBtYXgtd2lkdGg6IDI1LjMlO1xyXG59XHJcblxyXG4ubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgLW1zLWZsZXg6IDAgMCAyMS4xJTtcclxuICBtYXgtd2lkdGg6IDIxLjElO1xyXG4gIGZsZXg6IDAgMCAyMS4xJTtcclxufVxyXG5cclxuLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoMykge1xyXG4gIC1tcy1mbGV4OiAwIDAgMTUuNiU7XHJcbiAgZmxleDogMCAwIDE1LjYlO1xyXG4gIG1heC13aWR0aDogMTUuNiU7XHJcbn1cclxuXHJcbi5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDQpIHtcclxuICAtbXMtZmxleDogMCAwIDE2LjYlO1xyXG4gIGZsZXg6IDAgMCAxNi42JTtcclxuICBtYXgtd2lkdGg6IDE2LjYlO1xyXG59XHJcblxyXG4ubGlzdC1maWx0ZXJzLnN0YXRlIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgLW1zLWZsZXg6IDAgMCAxMy44JTtcclxuICBmbGV4OiAwIDAgMTMuOCU7XHJcbiAgbWF4LXdpZHRoOiAxMy44JTtcclxufVxyXG5cclxuLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoNSkge1xyXG4gIC1tcy1mbGV4OiAwIDAgMTQuNCU7XHJcbiAgbWF4LXdpZHRoOiAxNC40JTtcclxuICBmbGV4OiAwIDAgMTQuNCU7XHJcbn1cclxuXHJcbi5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDYpIHtcclxuICAvKi1tcy1mbGV4OiAwIDAgMTMuOCU7XHJcbiAgbWF4LXdpZHRoOiAxMy44JTtcclxuICBmbGV4OiAwIDAgMTMuOCU7Ki9cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAtbXMtZmxleDogMSAxO1xyXG4gIGZsZXg6IDEgMTtcclxufVxyXG5cclxuLmxpc3QtZmlsdGVycyBsaS5jdXJyZW50IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubGlzdC1maWx0ZXJzLnN0YXRlIGxpOm50aC1jaGlsZCg1KSwgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoNikge1xyXG4gIGZsZXg6IDAgMCAxMi4wJTtcclxuICBtYXgtd2lkdGg6IDEyLjAlO1xyXG59XHJcblxyXG4udGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1hY3Rpb25zIGE6Zmlyc3QtY2hpbGQge1xyXG4gIC1tcy1mbGV4OiAwIDAgODIlO1xyXG4gIGZsZXg6IDAgMCA4MiU7XHJcbiAgbWF4LXdpZHRoOiA4MiU7XHJcbn1cclxuXHJcblxyXG5cclxuLnRhYi5saXN0LXZpZXd7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1lbnRyeSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubGlzdC1maWx0ZXJzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJyZWFkY3J1bWJzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufSovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbWF4LXdpZHRoOiAyNi4xJSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAyNi4xJSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDI2LjElICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICBtYXgtd2lkdGg6IDE5LjElICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDE5LjElICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTkuMSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDQpIHtcclxuICAgIG1heC13aWR0aDogMjAuMSUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMjAuMSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAyMC4xJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoNSkge1xyXG4gICAgbWF4LXdpZHRoOiAxMy43JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxMy43JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDEzLjclICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubGlzdC1maWx0ZXJzLnN0YXRlIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXgtd2lkdGg6IDI0LjMlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDI0LjMlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMjQuMyUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoMykge1xyXG4gICAgbWF4LXdpZHRoOiAxMy42JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxMy42JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDEzLjYlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5saXN0LWZpbHRlcnMuc3RhdGUgbGk6bnRoLWNoaWxkKDQpIHtcclxuICAgIG1heC13aWR0aDogMTQuNiUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTQuNiUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNC42JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC1maWx0ZXJzLnN0YXRlIGxpOm50aC1jaGlsZCg2KSB7XHJcbiAgICBtYXgtd2lkdGg6IDEzLjUlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDEzLjUlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTMuNSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpICB7XHJcbiAgLnRhYnMgLnRhYnNfX2hlYWQge1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbiAgLmJyZWFkY3J1bWJzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtZW50cnkge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcblxyXG5cclxuICAubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXgtd2lkdGg6IDI1LjclICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDI1LjclICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMjUuNyUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgIG1heC13aWR0aDogMTkuNSUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTkuNSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxOS41JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgbWF4LXdpZHRoOiAxOC4yJSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxOC4yJSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE4LjIlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCg1KSB7XHJcbiAgICBtYXgtd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMuc3RhdGUgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1heC13aWR0aDogMjAuMiUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMjAuMiUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAyMC4yJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC1maWx0ZXJzLnN0YXRlIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICBtYXgtd2lkdGg6IDE1LjYlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDE1LjYlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTUuNiUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgbWF4LXdpZHRoOiAxNC44JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxNC44JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE0LjglICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5saXN0LWZpbHRlcnMuc3RhdGUgbGk6bnRoLWNoaWxkKDYpIHtcclxuICAgIG1heC13aWR0aDogMTQuOCUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTQuOCUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNC44JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4NHB4KSB7XHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtYWN0aW9ucyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXgtd2lkdGg6IDIzLjMlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDIzLjMlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMjMuMyUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgIG1heC13aWR0aDogMTcuOSUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTcuOSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNy45JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgbWF4LXdpZHRoOiAxNi43JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxNi43JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE2LjclICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCg1KSB7XHJcbiAgICBtYXgtd2lkdGg6IDEzLjklICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDEzLjklICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTMuOSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDYpIHtcclxuICAgIG1heC13aWR0aDogMTMlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDEzJSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDEzJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbWF4LXdpZHRoOiAxOC40JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxOC40JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE4LjQlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5saXN0LWZpbHRlcnMuc3RhdGUgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgIG1heC13aWR0aDogMTQuNSUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTQuNSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNC41JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC1maWx0ZXJzLnN0YXRlIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICBtYXgtd2lkdGg6IDEzLjQlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDEzLjQlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTMuNCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoNikge1xyXG4gICAgbWF4LXdpZHRoOiAxMy44JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxMy44JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDEzLjglICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgICAgXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIHAuY2l0eVAge1xyXG4gICAgZmxleDogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc3BvbnNvci1pbWFnZSB7XHJcbiAgICB3aWR0aDogMzUycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDZweCAwcHggMDtcclxuICB9XHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWVudHJ5IHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMDtcclxuICB9XHJcblxyXG4gIC5jb2wtbWQtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzNzRweDtcclxuICB9XHJcblxyXG4gIC50YWJzIC50YWJzX19oZWFkIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGFicyAudGFic19faGVhZCBwLmxpc3QtaW5mby1zb3J0IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWFjdGlvbnMtbW9iIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy10aXRsZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/lists/details.component.html":
/*!******************************************!*\
  !*** ./src/lists/details.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main background--grey-alt\">\r\n\r\n  <!--<div class=\"breadcrumbs\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n          <ul>\r\n            <li><a href=\"/\">the lists</a></li>\r\n            <li *ngIf=\"continent !== null\"><a href=\"/\">{{continent.name}}</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn-drop text-left text-md-right\" type=\"button\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <span>\r\n                <i class=\"ico-arrow-black\">\r\n\r\n                </i>\r\n              </span>\r\n              <span>\r\n                <strong>{{selectedLanguage.name}}</strong>\r\n              </span>\r\n            </button>\r\n\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"onLanguageChange(option.code)\"\r\n                 *ngFor=\"let option of languages; let i = index\">{{option.name}}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n\r\n  <section class=\"section-details\" style=\"padding-top:0px;\">\r\n    <div class=\"container\">\r\n\r\n      <div class=\"section-details__body\">\r\n        <div class=\"tabs\">\r\n          <div class=\"row pt-5\">\r\n            <div class=\"col-md-8 col-lg-9\">\r\n              <div class=\"breadcrumbs mt-0\">\r\n                <ul>\r\n                  <!--<li><a href=\"/\">the lists</a></li>-->\r\n                  <!--<li *ngIf=\"continent !== null\"><a href=\"/\">{{continent.name}}</a></li>-->\r\n                  <li><a href=\"https://www.oadlists.com/\">the lists</a></li>\r\n                  <li *ngIf=\"continent !== null\"><a href=\"https://www.oadlists.com/\">{{continent.name}}</a></li>\r\n                </ul>\r\n              </div>\r\n              <h1 *ngIf=\"continent !== null && listType !== null\">{{selectedYear}} {{continent.name}} {{selectedList ? selectedList.listTypeName : listType.name}}</h1>\r\n              <div class=\"tabs__head\">\r\n                <div class=\"breadcrumbs mt-0\" style=\"margin-right:70px\">\r\n                  <div class=\"d-inline-block mr-2\">\r\n                    <span class=\"language-text\">Language</span>\r\n                    <div class=\"dropdown d-inline-block\">\r\n                      <button class=\"btn-drop text-left text-md-right\" type=\"button\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span>\r\n                          <i class=\"ico-arrow-black\">\r\n\r\n                          </i>\r\n                        </span>\r\n                        <span>\r\n                          <strong>{{selectedLanguage.name}}</strong>\r\n                        </span>\r\n                      </button>\r\n\r\n                      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"onLanguageChange(option.code)\"\r\n                           *ngFor=\"let option of languages; let i = index\">{{option.name}}</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"d-inline-block\" *ngIf=\"yearFilter && yearFilter.length > 1\">\r\n                    <span class=\"language-text\">Year</span>\r\n                    <div class=\"dropdown d-inline-block\">\r\n                      <button class=\"btn-drop text-left text-md-right\" type=\"button\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <span>\r\n                          <i class=\"ico-arrow-black\">\r\n\r\n                          </i>\r\n                        </span>\r\n                        <span>\r\n                          <strong>{{selectedYear}}</strong>\r\n                        </span>\r\n                      </button>\r\n\r\n                      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"onYearFilterChange(option.value)\"\r\n                           *ngFor=\"let option of yearFilter; let i = index\">{{option.name}}</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!--<p class=\"list-info\">R = Additional recommended restaurants | Click on table headings to sort</p>-->\r\n                <p class=\"list-info list-info-sort d-inline-block\" style=\"margin-right:12px;\">Sort list by clicking on column titles</p>\r\n                <p class=\"list-info d-inline-block\">\r\n                  <!--<ng-container *ngIf=\"selectedList && selectedList.hasRankTypeHR\"><span>HR</span> - Highly Recommended</ng-container>\r\n                  <ng-container *ngIf=\"selectedList && selectedList.hasRankTypeR\"><span>R</span> - Recommended</ng-container>-->\r\n                  <span>R</span> - Recommended\r\n                </p>\r\n                <nav class=\"tabs__nav\">\r\n                  <!--<ul *ngIf=\"listTypes !== null\">\r\n                    <li  [ngClass]=\"{'active-tab': listType.id === list.id}\" *ngFor=\"let list of listTypes\">\r\n                      <a (click)=\"listTypeChange(list.friendlyUrl)\" href=\"javascript:void(0);\"\r\n                         class=\"btn btn--border-grey btn--hover-{{list.color}}\">{{list.name}}</a>\r\n                    </li>\r\n                  </ul>-->\r\n                </nav><!-- /.tabs__nav -->\r\n                <!--<div class=\"tabs__sort tabs__sort tabs__sort--view\">\r\n                  <p style=\"margin: 15px 0px;\">R = Additional recommended restaurants | Click on table headings to sort</p>\r\n                </div>-->\r\n              </div><!-- /.tabs__head -->\r\n            </div>\r\n            <div class=\"col-md-4 col-lg-3 col-sponsor text-center mb-5 mb-md-0\" *ngIf=\"selectedList\"\r\n                 [ngClass]=\"{'d-none': selectedList.sponsorImageFileurl == null || !selectedList.sponsorImageFileurl}\">\r\n              <!--<img src=\"/images/temp/pocket-concierge.jpg\" class=\"sponsor-image\" style=\"margin-left: 1px;\" />-->\r\n              <img [src]=\"selectedList.sponsorImageFileurl  | safe : 'url'\" class=\"sponsor-image\"\r\n                   style=\"margin-left: 1px;\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"tabs__body\">\r\n            <ul class=\"list-filters\" *ngIf=\"data != null\">\r\n              <!--[ngClass]=\"{'state': continent != null && continent.name == 'North America'}\"-->\r\n              <li class=\"text-center\" [ngClass]=\"{'current': selectedSortByFilter===1}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(1)\">rank</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter===2}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(2)\">name</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter===3}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(3)\">chef</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter===4}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(4)\">cuisine type</a>\r\n              </li>\r\n\r\n              <!--<li [ngClass]=\"{'current': selectedSortByFilter===6}\">\r\n    <a href=\"javascript:void(0);\" (click)=\"onSortByChange(6)\">City</a>\r\n  </li>-->\r\n              <!--<li [ngClass]=\"{'current': selectedSortByFilter===8}\" *ngIf=\"continent != null && continent.name == 'North America'\">\r\n    <a href=\"javascript:void(0);\" (click)=\"onSortByChange(8)\">State</a>\r\n  </li>\r\n\r\n  <li [ngClass]=\"{'current': selectedSortByFilter===7}\" *ngIf=\"continent != null && continent.name != 'Japan'\">\r\n    <a href=\"javascript:void(0);\" (click)=\"onSortByChange(7)\">Country</a>\r\n  </li>\r\n\r\n  <li [ngClass]=\"{'current': selectedSortByFilter===8}\" *ngIf=\"continent != null && continent.name == 'Japan'\">\r\n    <a href=\"javascript:void(0);\" (click)=\"onSortByChange(8)\">Region</a>\r\n  </li>-->\r\n\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter===9}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(9)\">{{data.location1}}</a>\r\n              </li>\r\n\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter===10}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(10)\">{{data.location2}}</a>\r\n              </li>\r\n            </ul>\r\n\r\n            <div class=\"tab list-view\">\r\n              <div class=\"row\" *ngIf=\"listRestaurants !== null && listRestaurants.length && cardViewSelected\">\r\n                <div class=\"col-12 col-sm-12 col-md-6\" *ngFor=\"let rest of listRestaurants\">\r\n                  <div class=\"card-details-details\">\r\n                    <div class=\"card-details-image-holder\" *ngIf=\"mobile\">\r\n                      <div class=\"card-details-image\" *ngIf=\"rest.image !== null && rest.image !== ''\"\r\n                           [defaultImage]=\"'https://via.placeholder.com/82x102'\" [lazyLoad]=\"rest.image\" [errorImage]=\"'https://via.placeholder.com/82x102'\">\r\n                      </div>\r\n                      <!--<div class=\"card-details-image\" *ngIf=\"rest.image === null || rest.image === ''\"\r\n                          [style.background-image]=\"'url(' + rest.image + ')'\"\r\n                           style=\"background-image:url(https://via.placeholder.com/82x102);\">\r\n                      </div>-->\r\n                    </div>\r\n\r\n                    <div class=\"card-details-body\">\r\n                      <div class=\"card-details-content\">\r\n                        <span *ngIf=\"rest.rank <= 200\">{{rest.rank}}</span>\r\n                        <span *ngIf=\"rest.rank > 200\" tooltip=\"Additional recommended restaurant\" placement=\"top\">R</span>\r\n                      </div><!-- /.card-details-content -->\r\n\r\n                      <div class=\"card-details-entry\">\r\n                        <!--[ngClass]=\"{'state': continent != null && continent.name == 'North America'}\"-->\r\n\r\n                        <h3 class=\"card-details-title\" *ngIf=\"rest.friendlyUrl\">\r\n                            <a href=\"/restaurant/{{rest.friendlyUrl}}\">{{rest.name}}</a>\r\n                        </h3>\r\n                        <h3 class=\"card-details-title\" *ngIf=\"!rest.friendlyUrl\">\r\n                            {{rest.name}}\r\n                        </h3>\r\n\r\n                        <p class=\"cityP\">{{rest.location1}}</p>\r\n\r\n                        <!--<p style=\"max-width:17.5%\" class=\"stateP\" *ngIf=\"continent != null && continent.name == 'North America'\">{{rest.state}}</p>\r\n  <p style=\"\" class=\"countryP\" *ngIf=\"continent != null && continent.name != 'Japan'\">{{rest.country}}</p>\r\n  <p style=\"\" class=\"countryP\" *ngIf=\"continent != null && continent.name == 'Japan'\">{{rest.state}}</p>-->\r\n\r\n                        <p style=\"\" class=\"countryP\">{{rest.location2}}</p>\r\n\r\n                        <div class=\"card-details-actions\">\r\n                          <a href=\"javascript:void(0);\">{{rest.chef}}</a>\r\n\r\n                          <a href=\"javascript:void(0);\">\r\n                            <span>{{rest.cuisine}}</span>\r\n                          </a>\r\n                        </div><!-- /.card-details-actions -->\r\n                        <div class=\"card-details-actions-mob\">\r\n                          <a href=\"javascript:void(0);\">{{rest.chef}}</a>\r\n\r\n                          <a href=\"javascript:void(0);\">\r\n                            <span>{{rest.cuisine}}</span>\r\n                          </a>\r\n                        </div>\r\n                      </div><!-- /.card-details-entry -->\r\n                    </div>\r\n\r\n                    <!--<a href=\"javascript:void(0);\" class=\"card-details-details__link\"></a>-->\r\n                  </div>\r\n                </div><!-- /.col-12 col-sm-12 col-md-6 -->\r\n\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"listRestaurants !== null && !listRestaurants.length\">\r\n                <p>No restaurants found</p>\r\n              </div>\r\n              <img src=\"/images/loading.gif\" *ngIf=\"listRestaurants === null\" width=\"20\" />\r\n              <!--<div class=\"tab__actions\">\r\n                <a href=\"#\">list continues</a>\r\n              </div>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"filter-info\" *ngIf=\"listRestaurants !== null && listRestaurants.length\">\r\n        <!--<p style=\"font-size: 13px; letter-spacing: 0.05em; line-height: 1; padding-top: 20px; text-align:right;\">R = Additional recommended restaurants <br /> Click on table headings to sort</p>-->\r\n        <p class=\"list-info list-info-sort mt-2 mb-0 text-right\">Sort list by clicking on column titles</p>\r\n        <p class=\"list-info mb-0 text-right\"><span>R</span> - Recommended</p>\r\n      </div>\r\n\r\n      <div class=\"section-details__foot\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"#\">Sort</a>\r\n            <div class=\"section-details__submenu\">\r\n              <h3>Sort</h3>\r\n              <a href=\"#\" class=\"close sortClose\">x</a>\r\n              <ul>\r\n                <li *ngFor=\"let option of sortByFilter; let i = index\">\r\n                  <a href=\"javascript:void();\" (click)=\"onSortByChange(option.value)\">{{option.displayName}}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <!--<div class=\"section-details__foot\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"#\">Language: <strong>{{selectedLanguage.name}}</strong></a>\r\n\r\n            <div class=\"section-details__submenu\">\r\n              <h3>Language</h3>\r\n\r\n              <a href=\"#\" class=\"close sortClose\">x</a>\r\n\r\n              <ul>\r\n                <li *ngFor=\"let option of languages; let i = index\">\r\n                  <a href=\"javascript:void();\" (click)=\"onLanguageChange(option.code)\">{{option.name}}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>-->\r\n    </div><!-- /.container -->\r\n  </section><!-- /.section-details -->\r\n  <!--<div class=\"background--grey\" *ngIf=\"listRestaurants !== null && listRestaurants.length\">\r\n    <section class=\"section-slider section-slider-border--sponsors\">\r\n      <div class=\"container\">\r\n        <div class=\"section-slider__inner\">\r\n          <div class=\"section-slider__body\">\r\n            <div class=\"row text-center\">\r\n              <div class=\"mx-auto w-100\">\r\n                <div class=\"col-centered\">\r\n                  <img src=\"https://via.placeholder.com/300x120\" />\r\n                </div>\r\n                <div class=\"col-centered\">\r\n                  <img src=\"https://via.placeholder.com/300x120\" />\r\n                </div>\r\n                <div class=\"col-centered\">\r\n                  <img src=\"https://via.placeholder.com/300x120\" />\r\n                </div>\r\n                <div class=\"col-centered\">\r\n                  <img src=\"https://via.placeholder.com/300x120\" />\r\n                </div>\r\n                <div class=\"col-centered\">\r\n                  <img src=\"https://via.placeholder.com/300x120\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <p class=\"m-0 text-center text-uppercase sponsored\" style=\"padding-top:10px;\">Sponsored by</p>\r\n  </div>\r\n\r\n  <section class=\"section-slider section-slider-divider background--grey\"></section>-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/lists/details.component.ts":
/*!****************************************!*\
  !*** ./src/lists/details.component.ts ***!
  \****************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_new_version_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/new-version.service */ "./src/lists/services/new-version.service.ts");






var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_http, router, _lightbox, route, newVersionService) {
        this._http = _http;
        this.router = router;
        this._lightbox = _lightbox;
        this.route = route;
        this.newVersionService = newVersionService;
        this.continentFriendlyUrl = "europe";
        this.continent = null;
        this.lists = null;
        this.listTypes = [];
        this.languages = [];
        this.data = null;
        this.listRestaurants = null;
        this.selectedListId = 0;
        this.selectedList = null;
        this.selectedLanguage = {};
        this.cardViewSelected = true;
        this.yearFilter = [];
        this.selectedYear = 2019;
        this.sortByFilter = [
            { value: 1, displayName: "Rank", urlValue: 'rank' },
            { value: 2, displayName: "Restaurant", urlValue: 'restaurant' },
            { value: 3, displayName: "Chef", urlValue: 'chef' },
            { value: 4, displayName: "Cuisine", urlValue: 'cuisine' },
        ];
        this.selectedSortByFilter = 1;
        this.listTypeFriendlyUrl = 'top100';
        this.listType = null;
        this.sortByDirection = 'ASC';
        this.mobile = false;
        this.previewGuid = null;
    }
    DetailsComponent.prototype.onResize = function (event) {
        var $tabNavSlider = $('.tabs .tabs__nav ul');
        var $win = $(window);
        var tabNavSliderOptions = {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: false,
            speed: 500,
            variableWidth: true
        };
        if ($win.width() < 768) {
            this.mobile = true;
            this.initSlider($tabNavSlider, tabNavSliderOptions);
            $tabNavSlider.find('.slick-slide').on('click', function (event) {
                var $thisSlide = $(this);
                var thisIndex = $thisSlide.attr('data-slick-index');
                var $thisParent = $thisSlide.closest('.section-slider ul');
                var activeSlides = $thisParent.find('.slick-active').length;
                var goToSlide = thisIndex - activeSlides - 1;
                $tabNavSlider.slick('slickGoTo', goToSlide);
            });
        }
        else if ($win.width() > 767) {
            this.mobile = false;
            this.destroySlider($tabNavSlider);
        }
    };
    DetailsComponent.prototype.initSlider = function ($selector, options) {
        if ($selector.length && !$selector.hasClass('slick-initialized')) {
            $selector.slick(options);
        }
    };
    DetailsComponent.prototype.destroySlider = function ($selector) {
        if ($selector.length && $selector.hasClass('slick-initialized')) {
            $selector.slick('unslick');
        }
    };
    DetailsComponent.prototype.open = function (src) {
        // open lightbox
        //var albums = [
        //  {
        //    src: src.replace("82-102", "original"),
        //    thumb: src
        //  }];
        //this._lightbox.open(albums, 0);
    };
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //since this is hard-coded and so can't be routed as "year" param from app-routing, this is a workaround
        this.selectedYear = parseInt(this.route.snapshot.url[3].toString());
        //console.log("OLD COMPONENT > selectedYear", this.selectedYear);
        //console.log("route", this.route);
        //console.log("route.snapshot", this.route.snapshot);
        //console.log("route.queryParams", this.route.queryParams);
        //console.log("router", this.router);
        this.route.queryParams.subscribe(function (params) {
            _this.setQueryParams(params);
        });
        this.route.params.subscribe(function (params) {
            _this.setRouteArgs(params);
        });
        this.newVersionService.getWebProjectPath().toPromise().then(function (path) {
            _this.webProjectPath = path;
        });
    };
    DetailsComponent.prototype.setRouteArgs = function (params) {
        if (params) {
            //this won't work because year 2019 & 2020 is hard-coded in app-routing, so it's not in params
            if (params.year) {
                this.selectedYear = +params.year;
            }
            //but these ones will
            this.listTypeFriendlyUrl = params.listType;
            this.continentFriendlyUrl = params.continent;
            if (params.previewGuid != undefined) {
                this.previewGuid = params.previewGuid;
            }
        }
        //if (params !== undefined && params !== null && params.year !== undefined) {
        //  this.selectedYear = +params.year;
        //  this.listFriendlyUrl = params.listType;
        //  this.continentFriendlyUrl = params.continent;
        //  if (params.previewGuid != undefined) {
        //    this.previewGuid = params.previewGuid;
        //  }
        //}
        this.getContinent();
    };
    DetailsComponent.prototype.setQueryParams = function (params) {
        if (params['sort'] !== undefined && params['sort'] !== null) {
            var sort = params["sort"];
            if (sort == 'city') {
                this.selectedSortByFilter = 9;
            }
            else {
                var filter = this.sortByFilter.filter(function (o) {
                    return (o.urlValue == sort);
                })[0];
                if (!filter) {
                    this.selectedSortByFilter = 10;
                }
                else {
                    this.selectedSortByFilter = filter.value;
                }
            }
        }
        if (params["sortByDir"] !== undefined && params['sortByDir'] !== null) {
            this.sortByDirection == params["sortByDir"];
        }
        //  if (params["view"] !== undefined && params['sort'] !== null) {
        //    var type = params["view"];
        //    if (type === 'list') {
        //      $('.tabs__sort-view .list').closest('.tabs').find('.tab').addClass('list-view');
        //      $('.list-filters').removeClass('hidden');
        //    }      
        //  }
        //  else {
        //    $('.tabs__sort-view .list').closest('.tabs').find('.tab').removeClass('list-view');
        //    $('.list-filters').addClass('hidden');
        //  }
    };
    DetailsComponent.prototype.viewChanged = function (type) {
        this.router.navigate(['/lists/' + this.continentFriendlyUrl + '/' + this.listTypeFriendlyUrl + '/' + this.selectedYear], {
            queryParams: {
                view: type === 'list' ? type : null
            }, queryParamsHandling: 'merge'
        });
    };
    DetailsComponent.prototype.getContinent = function () {
        var _this = this;
        this._http.get("continent/getbyfriendlyurl/" + this.continentFriendlyUrl).toPromise().then(function (data) {
            _this.continent = data.json();
            //if (this.continent.name == "North America") {
            //  this.sortByFilter.push(
            //    { value: 8, displayName: "State", urlValue: 'state' },
            //  );
            //}
            _this.getListType();
        }).catch();
    };
    DetailsComponent.prototype.getListType = function () {
        var _this = this;
        this._http.get("lists/getlisttypebyfriendlyurl/" + this.listTypeFriendlyUrl).toPromise().then(function (data) {
            _this.listType = data.json();
            _this.getLanguages();
            _this.getLists();
        }).catch();
    };
    DetailsComponent.prototype.onLanguageChange = function (languageId) {
        //this.router.navigate(['/lists/' + this.continentFriendlyUrl + '/' + this.listTypeFriendlyUrl + '/' + this.selectedYear],
        //  {
        //    queryParams: {
        //      lang: languageId
        //    }, queryParamsHandling: 'merge'
        //  });
        window.location.href = window.location.pathname + "?lang=" + languageId;
    };
    DetailsComponent.prototype.getLists = function () {
        var _this = this;
        this.lists = null;
        this._http.get("/lists/getpublishedtypesbycontinent/" + this.continent.id).toPromise().then(function (data) {
            _this.listTypes = data.json().filter(function (x) {
                return x.isSpeciality === _this.listType.isSpeciality;
            });
        });
        this._http.get("lists/getAllByContinentIdAndSpeciality/" + this.continent.id + "/" + this.listType.isSpeciality).toPromise().then(function (data) {
            _this.lists = data.json();
            _this.selectedListId = 0;
            var filteredList = _this.lists.filter(function (o) {
                return (o.year == _this.selectedYear && o.continentId == _this.continent.id
                    && o.listTypeId == _this.listType.id);
            });
            var listsWithinContinentAndType = _this.lists.filter(function (o) {
                return (o.continentId == _this.continent.id
                    && o.listTypeId == _this.listType.id && o.isPublished);
            });
            if (listsWithinContinentAndType.length > 1) {
                _this.yearFilter = [];
                for (var i = 0; i < listsWithinContinentAndType.length; i++) {
                    _this.yearFilter.push({ value: listsWithinContinentAndType[i].year, name: listsWithinContinentAndType[i].year.toString() });
                }
                _this.yearFilter = _this.yearFilter.sort(function (obj1, obj2) {
                    if (obj1.value > obj2.value) {
                        return -1;
                    }
                    if (obj1.value < obj2.value) {
                        return 1;
                    }
                    return 0;
                });
            }
            if (filteredList !== undefined && filteredList[0] !== undefined) {
                _this.selectedListId = filteredList[0].id;
                _this.selectedList = filteredList[0];
                //console.log("this.selectedList", this.selectedList);
            }
            _this.getListRestaurants(_this.selectedListId);
            setTimeout(function () {
                _this.onResize(null);
            }, 5);
        }).catch();
    };
    DetailsComponent.prototype.getLanguages = function () {
        var _this = this;
        this._http.get("/languages").toPromise().then(function (data) {
            _this.languages = data.json();
            console.log(_this.languages);
            _this.selectedLanguage = _this.languages.find(function (x) { return x.selected; });
        });
    };
    DetailsComponent.prototype.onYearFilterChange = function (value) {
        this.selectedYear = value;
        //this.getListRestaurants(this.selectedListId);
        this.router.navigate(['/lists/' + this.continentFriendlyUrl + '/' + this.listTypeFriendlyUrl + '/' + this.selectedYear]);
    };
    DetailsComponent.prototype.onSortByChange = function (value) {
        //if (this.selectedSortByFilter == value) {
        //  if (this.sortByDirection == "ASC") {
        //    this.sortByDirection = "DESC";
        //  }
        //  else {
        //    this.sortByDirection = "ASC";
        //  }
        //}
        //else {
        //  this.sortByDirection = "ASC";
        //}
        var _this = this;
        this.selectedSortByFilter = value;
        //this.getListRestaurants(this.selectedListId);
        if ($(".sortClose").is(":visible")) {
            $(".sortClose").click();
        }
        var url = '/lists/' + this.continentFriendlyUrl + '/' + this.listTypeFriendlyUrl + '/' + this.selectedYear;
        if (this.previewGuid != undefined && this.previewGuid != null) {
            url += "/" + this.previewGuid.toString();
        }
        this.router.navigate([url], {
            queryParams: {
                sort: this.sortByFilter.filter(function (o) {
                    return (o.value == _this.selectedSortByFilter);
                })[0].urlValue,
                sortByDir: this.sortByDirection === "ASC" ? null : this.sortByDirection
            }, queryParamsHandling: 'merge'
        });
        this.sort();
        //this.getListRestaurants(this.selectedListId);
    };
    DetailsComponent.prototype.sort = function () {
        //rank
        if (this.selectedSortByFilter == 1) {
            this.listRestaurants = this.listRestaurants.sort(function (obj1, obj2) {
                if (obj1.rank > obj2.rank) {
                    return 1;
                }
                if (obj1.rank < obj2.rank) {
                    return -1;
                }
                return 0;
            });
        }
        //name
        if (this.selectedSortByFilter == 2) {
            this.listRestaurants = this.listRestaurants.sort(function (obj1, obj2) {
                if (obj1.name > obj2.name) {
                    return 1;
                }
                if (obj1.name < obj2.name) {
                    return -1;
                }
                return 0;
            });
        }
        //chef
        if (this.selectedSortByFilter == 3) {
            this.listRestaurants = this.listRestaurants.sort(function (obj1, obj2) {
                if (obj1.chef > obj2.chef) {
                    return 1;
                }
                if (obj1.chef < obj2.chef) {
                    return -1;
                }
                return 0;
            });
        }
        //cuisine
        if (this.selectedSortByFilter == 4) {
            this.listRestaurants = this.listRestaurants.sort(function (obj1, obj2) {
                if (obj1.cuisine > obj2.cuisine) {
                    return 1;
                }
                if (obj1.cuisine < obj2.cuisine) {
                    return -1;
                }
                return 0;
            });
        }
        //city
        if (this.selectedSortByFilter == 6) {
            this.listRestaurants = this.listRestaurants.sort(function (obj1, obj2) {
                if (obj1.city > obj2.city) {
                    return 1;
                }
                if (obj1.city < obj2.city) {
                    return -1;
                }
                if (obj1.rank > obj2.rank) {
                    return 1;
                }
                if (obj1.rank < obj2.rank) {
                    return -1;
                }
                return 0;
            });
        }
        //country
        if (this.selectedSortByFilter == 7 || this.selectedSortByFilter == 5) {
            this.listRestaurants = this.listRestaurants.sort(function (obj1, obj2) {
                if (obj1.country > obj2.country) {
                    return 1;
                }
                if (obj1.country < obj2.country) {
                    return -1;
                }
                if (obj1.state > obj2.state) {
                    return 1;
                }
                if (obj1.state < obj2.state) {
                    return -1;
                }
                if (obj1.city > obj2.city) {
                    return 1;
                }
                if (obj1.city < obj2.city) {
                    return -1;
                }
                if (obj1.rank > obj2.rank) {
                    return 1;
                }
                if (obj1.rank < obj2.rank) {
                    return -1;
                }
                return 0;
            });
        }
        //region
        if (this.selectedSortByFilter == 8) {
            this.listRestaurants = this.listRestaurants.sort(function (obj1, obj2) {
                if (obj1.state > obj2.state) {
                    return 1;
                }
                if (obj1.state < obj2.state) {
                    return -1;
                }
                if (obj1.rank > obj2.rank) {
                    return 1;
                }
                if (obj1.rank < obj2.rank) {
                    return -1;
                }
                return 0;
            });
        }
        //location1
        if (this.selectedSortByFilter == 9) {
            this.listRestaurants = this.listRestaurants.sort(function (obj1, obj2) {
                if (obj1.location1 > obj2.location1) {
                    return 1;
                }
                if (obj1.location1 < obj2.location1) {
                    return -1;
                }
                if (obj1.rank > obj2.rank) {
                    return 1;
                }
                if (obj1.rank < obj2.rank) {
                    return -1;
                }
                return 0;
            });
        }
        //location2
        if (this.selectedSortByFilter == 10) {
            this.listRestaurants = this.listRestaurants.sort(function (obj1, obj2) {
                if (obj1.location2 > obj2.location2) {
                    return 1;
                }
                if (obj1.location2 < obj2.location2) {
                    return -1;
                }
                if (obj1.rank > obj2.rank) {
                    return 1;
                }
                if (obj1.rank < obj2.rank) {
                    return -1;
                }
                return 0;
            });
        }
    };
    DetailsComponent.prototype.listTypeChange = function (friendlyUrl) {
        this.listTypeFriendlyUrl = friendlyUrl;
        this.router.navigate(['/lists/' + this.continentFriendlyUrl + '/' + this.listTypeFriendlyUrl + '/' + this.selectedYear]);
    };
    DetailsComponent.prototype.getListRestaurants = function (id) {
        var _this = this;
        this.selectedListId = id;
        this.listRestaurants = null;
        var postData = {
            ListId: this.selectedListId,
            Year: this.selectedYear,
            SortByDirection: this.sortByDirection,
            SortBy: this.selectedSortByFilter,
            PreviewGuid: this.previewGuid
        };
        if (this.selectedListId !== 0) {
            this._http.post("/lists/getrestaurantsbylistIdAndYear", JSON.stringify(postData), { headers: new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' }) }).toPromise()
                .then(function (data) {
                _this.data = data.json();
                _this.listRestaurants = _this.data.data0;
                //console.log("listRestaurants[0]", this.listRestaurants[0]);
                _this.sortByFilter.push({ value: 9, displayName: _this.data.location1, urlValue: _this.data.location1.replace(" ", "").replace(" ", "").replace("/", "-").toLowerCase() }, { value: 10, displayName: _this.data.location2, urlValue: _this.data.location2.replace(" ", "").replace(" ", "").replace("/", "-").toLowerCase() });
            }).catch();
        }
        else {
            this.listRestaurants = [];
        }
    };
    DetailsComponent.prototype.getRestaurantUrl = function (friendlyUrl) {
        //return `${this.webProjectPath}restaurant/${friendlyUrl}`;
        return "/restaurant/" + friendlyUrl;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DetailsComponent.prototype, "onResize", null);
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./details.component.html */ "./src/lists/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/lists/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["Lightbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_new_version_service__WEBPACK_IMPORTED_MODULE_5__["NewVersionService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/lists/detailsv2.component.css":
/*!*******************************************!*\
  !*** ./src/lists/detailsv2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumbs .dropdown {\r\n  font-size: 12px;\r\n}\r\n\r\n.breadcrumbs .btn-drop {\r\n  display: block;\r\n  width: 100%;\r\n  background-color: transparent;\r\n  border: 0;\r\n  text-decoration: none;\r\n}\r\n\r\n.breadcrumbs .btn-drop:focus {\r\n    border: 0;\r\n    box-shadow: unset;\r\n    outline: unset;\r\n  }\r\n\r\n.breadcrumbs .btn-drop span {\r\n    display: inline-block;\r\n    position: relative;\r\n  }\r\n\r\n.breadcrumbs .btn-drop span:nth-child(2):after {\r\n      content: '';\r\n      position: absolute;\r\n      right: -22px;\r\n      top: 0px;\r\n      width: 8px;\r\n      height: 8px;\r\n      border: 2px solid #000;\r\n      border-top: 0;\r\n      border-left: 0;\r\n      transform: rotate(45deg);\r\n      transition: transform .3s ease;\r\n    }\r\n\r\n.breadcrumbs .show span:nth-child(2):after {\r\n  transform: rotate(-135deg);\r\n}\r\n\r\n.breadcrumbs .dropdown-item {\r\n  text-decoration: none;\r\n}\r\n\r\n.breadcrumbs .ico-arrow-black {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.breadcrumbs .ico-arrow-black svg {\r\n    width: 16px;\r\n    height: 16px;\r\n    transform: scale(0.6);\r\n  }\r\n\r\n.tabs .tabs__sort--view{\r\n  max-width: 300px;\r\n  flex: 0 0 500px;\r\n}\r\n\r\n.tabs .tabs__head {\r\n  margin: 22px 0 35px;\r\n  display: block;\r\n}\r\n\r\n.tabs .tabs__head p{\r\n    margin-bottom: 0;\r\n  }\r\n\r\n.tabs .tabs__head {\r\n    font-family: 'GTAmericaStandardRegular', sans-serif;\r\n    align-items: center;\r\n  }\r\n\r\n.tabs .tabs__head .breadcrumbs {\r\n      color: #4f4f4f;\r\n  }\r\n\r\n.tabs .tabs__head .dropdown-wrapper {\r\n      margin-right: 32px;\r\n      display: inline-block;\r\n    }\r\n\r\n.tabs .tabs__head .list-info {\r\n        font-size: 14px;\r\n        margin-right: 32px;\r\n    }\r\n\r\n.tabs .tabs__head .list-info:last-child {\r\n        margin-right: 0;\r\n    }\r\n\r\n.tabs .tabs__head .breadcrumbs .language-text {\r\n      color: #4f4f4f;\r\n      opacity: 1;\r\n      text-transform: uppercase;\r\n      font-weight:  700;\r\n      font-size: 12px;\r\n  }\r\n\r\n.tabs .tabs__head .breadcrumbs .dropdown {\r\n      font-size: 15px;      \r\n      font-family: 'GTAmericaStandardThin', sans-serif;\r\n    }\r\n\r\n.tabs .tabs__head .breadcrumbs .btn-drop span:nth-child(2):after {\r\n      top: 7px !important;\r\n    }\r\n\r\n.tabs__header-top {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.tabs__header-bottom {\r\n    margin-top: 22px;\r\n}\r\n\r\n.btn-outline-secondary {\r\n  border: 1px solid #111010;\r\n  padding: 7px 15px;\r\n  font-size: 14px;\r\n  color: #000;\r\n}\r\n\r\n.btn-outline-secondary:hover,\r\n  .btn-outline-secondary:focus,\r\n  .btn-outline-secondary:active,\r\n  .btn-outline-secondary:not(:disabled):not(.disabled):active {\r\n    background: none;\r\n    color: #f00000;\r\n  }\r\n\r\n.btn-toggle-filter {\r\n  min-width: 106px;\r\n}\r\n\r\n.tabs__header-bottom .form-control {\r\n  background-color: #fff;\r\n}\r\n\r\n.tabs__header-bottom label {\r\n    color: #4f4f4f;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n  }\r\n\r\n.tabs-v2 {\r\n  padding: 29px 0 73px;\r\n  position: relative;\r\n  background-color: #FF6E4F;\r\n}\r\n\r\n.tabs-v2.top100 {\r\n    background-color: #FF6E4F;\r\n  }\r\n\r\n.tabs-v2.classical {\r\n    background-color: #FFB612;\r\n  }\r\n\r\n.tabs-v2.casual {\r\n    background-color: #A384ED;\r\n  }\r\n\r\n.tabs-v2.cheap-eats {\r\n    background-color: #93D1AC;\r\n  }\r\n\r\n.tabs-v2 h1 {\r\n    margin-top: 37px;\r\n    margin-bottom: 0;\r\n    font-family: 'GTSuperDisplayRegular', serif;\r\n  }\r\n\r\n.tabs-v2 .breadcrumbs {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 12px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-size: 13px;\r\n    text-transform: none;\r\n    font-weight: 400;\r\n    color: #111010;\r\n  }\r\n\r\n.tabs-v2 .breadcrumbs .home {\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n\r\n.tabs-v2 .breadcrumbs ul {\r\n        opacity: 1;\r\n    }\r\n\r\n.tabs-v2 .breadcrumbs ul li:after {\r\n        margin-left: 5px;\r\n      }\r\n\r\n.tabs-v2 .ico-arrow-black {\r\n    content: \"\";\r\n    background: url(\"/images/arrow-left.png\") 0 0 no-repeat;\r\n    width: 9px;\r\n    height: 17px;\r\n    background-size: contain;\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    position: relative;\r\n    transform: none;\r\n  }\r\n\r\n.tabs-v2 .selected-details {\r\n    margin-top: 7px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n.tabs-v2 .selected-details h2 {\r\n      font-family: 'GTAmericaStandardRegular';\r\n      color: #111010;\r\n      font-size: 23px;\r\n      margin-bottom: 0;\r\n      text-transform: uppercase;\r\n      border: 1px solid #111010;\r\n      padding: 4px 13px;\r\n      letter-spacing: 0.09em;\r\n    }\r\n\r\n.tabs-v2 .selected-details h2:first-child {\r\n        border-right: 0;\r\n        font-family: 'GTAmericaStandardMedium';\r\n        letter-spacing: 0.05em;\r\n      }\r\n\r\n.tabs-v2--pinned {\r\n  padding: 10px 0;\r\n  top: 49px;\r\n  position: fixed;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 19;\r\n  opacity: 0;\r\n  transition: opacity .3s,transform .3s;\r\n  -webkit-transition: opacity .3s,transform .3s;\r\n  transform: translateY(-45px);\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .tabs-v2--pinned.nav-down {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n.tabs__body h2 {\r\n  font-family: 'GTAmericaStandardMedium', sans-serif;\r\n  background-color: #FF6E4F;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  color: #111010;\r\n  padding-bottom: 5px;\r\n  padding: 6px 20px 7px;\r\n  text-transform: uppercase;\r\n  letter-spacing: .05em;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.tabs__body h2 span {\r\n    font-family: \"GTAmericaStandardThin\",sans-serif;\r\n  }\r\n\r\n.tabs__body h2.border-top100 {\r\n    background-color: #FF6E4F;\r\n  }\r\n\r\n.tabs__body h2.border-classical {\r\n    background-color: #FFB612;\r\n  }\r\n\r\n.tabs__body h2.border-casual {\r\n    background-color: #A384ED;\r\n  }\r\n\r\n.tabs__body h2.border-cheap-eats {\r\n    background-color: #93D1AC;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-content {\r\n  color: #FF6E4F;\r\n  padding: 12px 3px;\r\n  font-size: 22px;\r\n  line-height: 1em;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-content.top100 {\r\n    color: #FF6E4F;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-content.classical {\r\n    color: #FFB612;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-content.casual {\r\n    color: #A384ED;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-content.cheap-eats {\r\n    color: #93D1AC;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-entry {\r\n  font-family: \"GTAmericaStandardRegular\",sans-serif;\r\n}\r\n\r\n.tab.list-view .card-details-details p {\r\n  padding: 0px;\r\n  font-size: 14px;\r\n  font-style: normal;\r\n  flex: 0 0 15%;\r\n  max-width: 15%;\r\n  color: #000;\r\n  font-family: \"GTAmericaStandardRegular\",sans-serif;\r\n}\r\n\r\n.tab.list-view .card-details-details p.cityCountryP {\r\n    font-size: 15px;\r\n    /*font-family: 'GTAmericaStandardThin', sans-serif;*/\r\n    opacity: 0.8;\r\n    color: #111010;\r\n  }\r\n\r\n.tab.list-view .card-details-details p.cityP {\r\n    flex: 0 0 16% !important;\r\n    max-width: 16%;\r\n  }\r\n\r\n.tab.list-view .card-details-details .state p.cityP {\r\n    flex: 0 0 13.4% !important;\r\n    max-width: 13.4%;\r\n  }\r\n\r\n.tab.list-view .card-details-details .state p.stateP {\r\n    flex: 0 0 13% !important;\r\n    max-width: 13%;\r\n  }\r\n\r\ntab.list-view .card-details-details p.countryP {\r\n  max-width: 17.5%\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-title {\r\n  margin-bottom: 0;\r\n  -ms-flex: 0 0 30.5%;\r\n  max-width: 30.5%;\r\n  flex: 0 0 30.5%;\r\n  position: relative;\r\n  letter-spacing: 0.04em;\r\n  font-size: 20px;\r\n  top: 2px;\r\n  /*font-size: 22px;\r\n  top: 0;*/\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-title a {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-title a:hover {\r\n    color: unset;\r\n  }\r\n\r\n.tab.list-view .card-details-details .state .card-details-title {\r\n  max-width: 28%;\r\n  flex: 0 0 28%\r\n}\r\n\r\n.tab.list-view .card-details-details .state .card-details-actions {\r\n  margin: 0 4.8% 0 0;\r\n}\r\n\r\n.tab.list-view .card-details-details .state .card-details-actions a:first-child {\r\n    max-width: 61%;\r\n    flex: 0 0 61%\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-actions a:nth-child(2) {\r\n  max-width: none;\r\n  flex: 0 0 auto;\r\n  width: 170px;\r\n  text-align: left;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-actions {\r\n  margin: 0 14% 0 0;\r\n  text-transform: initial;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-actions span {\r\n    font-size: 14px;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-actions a:first-child {    \r\n    font-size: 14px;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-actions-mob {\r\n  display: none;\r\n  font-size: 13px;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-actions-mob a {\r\n    text-decoration: none;\r\n    color: #333;\r\n    font-family: 'GTAmericaStandardThin', sans-serif;\r\n  }\r\n\r\n.tab.list-view .card-details-details .card-details-actions-mob a:nth-child(2):before {\r\n    content: \" / \";\r\n  }\r\n\r\n.list-filters {\r\n  border-bottom: 0;\r\n  color: #BDBDBD;\r\n}\r\n\r\n.list-filters li {\r\n    padding-bottom: 7px;\r\n    font-family: 'GTAmericaStandardRegular', sans-serif;\r\n    border-bottom: 1px solid rgba(0,0,0,0);\r\n  }\r\n\r\n.list-filters li::after {\r\n    height: 2px;\r\n  }\r\n\r\n.list-filters li:first-child {\r\n      flex: 0 0 79px;\r\n      max-width: 79px;\r\n      padding-right: 0;\r\n    }\r\n\r\n.list-filters li:nth-child(2) {\r\n      flex: 0 0 27.5%;\r\n      max-width: 27.5%;\r\n    }\r\n\r\n.list-filters.state li:nth-child(2) {\r\n      flex: 0 0 25.3%;\r\n      max-width: 25.3%;\r\n    }\r\n\r\n.list-filters li:nth-child(3) {\r\n    -ms-flex: 0 0 21.1%;\r\n    max-width: 21.1%;\r\n    flex: 0 0 21.1%;\r\n    position: relative;\r\n    left: -7px;\r\n  }\r\n\r\n.list-filters.state li:nth-child(3) {\r\n      flex: 0 0 15.6%;\r\n      max-width: 15.6%;\r\n    }\r\n\r\n.list-filters li:nth-child(4) {\r\n      flex: 0 0 16.6%;\r\n      max-width: 16.6%;\r\n    }\r\n\r\n.list-filters.state li:nth-child(4) {\r\n      flex: 0 0 13.8%;\r\n      max-width: 13.8%;\r\n    }\r\n\r\n.list-filters li:nth-child(5) {\r\n    -ms-flex: 0 0 14.4%;\r\n    max-width: 14.4%;\r\n    flex: 0 0 14.4%;\r\n    position: relative;\r\n    left: -4px;\r\n  }\r\n\r\n.list-filters li:nth-child(6) {\r\n      /*-ms-flex: 0 0 13.8%;\r\n      max-width: 13.8%;\r\n      flex: 0 0 13.8%;*/\r\n      max-width: 100%;\r\n      flex: 1 1;\r\n    }\r\n\r\n.list-filters li.current {\r\n    color: #111010;\r\n    border-color: #FF6E4F;\r\n  }\r\n\r\n.list-filters.top100 li.current {\r\n      border-color: #FF6E4F;\r\n    }\r\n\r\n.list-filters.classical li.current {\r\n      border-color: #FFB612;\r\n    }\r\n\r\n.list-filters.casual li.current {\r\n      border-color: #A384ED;\r\n    }\r\n\r\n.list-filters.cheap-eats li.current {\r\n      border-color: #93D1AC;\r\n    }\r\n\r\n.list-filters.state li:nth-child(5), .list-filters.state li:nth-child(6) {\r\n  flex: 0 0 12.0%;\r\n  max-width: 12.0%;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-actions a:first-child {\r\n  flex: 0 0 82%;\r\n  max-width: 82%;\r\n}\r\n\r\n.tab.list-view{\r\n  padding-right: 0px;\r\n}\r\n\r\n.tab.list-view .card-details-details .card-details-entry {\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n  }\r\n\r\n@media (max-width: 1200px) {\r\n  .list-filters {\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n/*@media (max-width: 1023px) and (min-width: 768px) {\r\n  .breadcrumbs {\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n}*/\r\n\r\n@media (max-width: 1199px) {\r\n  .list-filters li:nth-child(2) {\r\n    max-width: 26.1% !important;\r\n    flex: 0 0 26.1% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(3) {\r\n    max-width: 19.1% !important;\r\n    flex: 0 0 19.1% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(4) {\r\n    max-width: 20.1% !important;\r\n    flex: 0 0 20.1% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(5) {\r\n    max-width: 13.7% !important;\r\n    flex: 0 0 13.7% !important;\r\n  }\r\n\r\n  .list-filters.state li:nth-child(2) {\r\n    max-width: 24.3% !important;\r\n    flex: 0 0 24.3% !important;\r\n  }\r\n  .list-filters.state li:nth-child(3) {\r\n    max-width: 13.6% !important;\r\n    flex: 0 0 13.6% !important;\r\n  }\r\n  .list-filters.state li:nth-child(4) {\r\n    max-width: 14.6% !important;\r\n    flex: 0 0 14.6% !important;\r\n  }\r\n  .list-filters.state li:nth-child(6) {\r\n    max-width: 13.5% !important;\r\n    flex: 0 0 13.5% !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 1023px)  {\r\n  .breadcrumbs {\r\n    /*width: 100%;*/\r\n    margin: 0;\r\n  }\r\n  .card-details-details .card-details-actions a ~ a {\r\n      padding-left: 0;\r\n  }\r\n    .card-details-details .card-details-actions a ~ a:before {\r\n        content: none;\r\n    }\r\n\r\n  .tab.list-view .card-details-details .card-details-body {\r\n    padding: 0;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-entry {\r\n    padding-right: 0;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-content {\r\n    flex: 0 0 48px;\r\n    max-width: 48px;\r\n    text-align: center;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-actions {\r\n      margin: 0!important;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-actions a:first-child {\r\n    flex: 0 0 100% !important;\r\n    -ms-flex: 0 0 100% !important;\r\n  }\r\n\r\n  .list-filters li:first-child {\r\n    flex: 0 0 48px;\r\n    -ms-flex: 0 0 48px;\r\n    max-width: 48px;\r\n  } \r\n\r\n  .list-filters li:nth-child(2) {\r\n    max-width: 25.7% !important;\r\n    flex: 0 0 25.7% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(3) {\r\n    max-width: 19.5% !important;\r\n    flex: 0 0 19.5% !important;\r\n    left: 0;\r\n  }\r\n\r\n  .list-filters li:nth-child(4) {\r\n    max-width: 18.2% !important;\r\n    flex: 0 0 18.2% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(5) {\r\n    max-width: 15% !important;\r\n    flex: 0 0 15% !important;\r\n    left: 0;\r\n  }\r\n\r\n  .list-filters.state li:nth-child(2) {\r\n    max-width: 20.2% !important;\r\n    flex: 0 0 20.2% !important;\r\n  }\r\n  .list-filters.state li:nth-child(3) {\r\n    max-width: 15.6% !important;\r\n    flex: 0 0 15.6% !important;\r\n  }\r\n  .list-filters.state li:nth-child(4) {\r\n    max-width: 14.8% !important;\r\n    flex: 0 0 14.8% !important;\r\n  }\r\n  .list-filters.state li:nth-child(6) {\r\n    max-width: 14.8% !important;\r\n    flex: 0 0 14.8% !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 784px) {\r\n  .tab.list-view .card-details-details .card-details-actions {\r\n    width: 100px;\r\n  }\r\n\r\n  .list-filters li:nth-child(2) {\r\n    max-width: 27% !important;\r\n    flex: 0 0 27% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(3) {\r\n    max-width: 17.9% !important;\r\n    flex: 0 0 17.9% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(4) {\r\n    max-width: 18.2% !important;\r\n    flex: 0 0 18.2% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(5) {\r\n    max-width: 15.7% !important;\r\n    flex: 0 0 15.7% !important;\r\n  }\r\n\r\n  .list-filters li:nth-child(6) {\r\n    max-width: 13% !important;\r\n    flex: 0 0 13% !important;\r\n  }\r\n\r\n  .list-filters.state li:nth-child(2) {\r\n    max-width: 18.4% !important;\r\n    flex: 0 0 18.4% !important;\r\n  }\r\n  .list-filters.state li:nth-child(3) {\r\n    max-width: 14.5% !important;\r\n    flex: 0 0 14.5% !important;\r\n  }\r\n  .list-filters.state li:nth-child(4) {\r\n    max-width: 13.4% !important;\r\n    flex: 0 0 13.4% !important;\r\n  }\r\n  .list-filters.state li:nth-child(6) {\r\n    max-width: 13.8% !important;\r\n    flex: 0 0 13.8% !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 1023px) {\r\n  .tabs-v2 .selected-details {\r\n    align-items: initial;\r\n  }\r\n\r\n    .tabs-v2 .selected-details h2 {\r\n      font-size: 18px;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .tabs-v2 {\r\n    padding: 17px 0 55px;\r\n  }\r\n\r\n    .tabs-v2 h1 {\r\n      margin-top: 21px;\r\n      margin-bottom: 5px;\r\n      line-height: 1em;\r\n      font-size: 38px;\r\n    }\r\n\r\n    .tabs-v2 .selected-details {\r\n      margin-top: 0;\r\n    }\r\n\r\n      .tabs-v2 .selected-details h2 {\r\n        font-size: 20px;\r\n      }\r\n\r\n        .tabs-v2 .selected-details h2:last-child {\r\n          padding: 4px 23px;\r\n        }\r\n\r\n    .tabs-v2 .breadcrumbs {\r\n      position: relative;\r\n      top: 0;\r\n      left: 0;\r\n    }\r\n\r\n      .tabs-v2 .breadcrumbs ul {\r\n        justify-content: center;\r\n      }\r\n\r\n        .tabs-v2 .breadcrumbs ul li {\r\n          text-transform: uppercase;\r\n        }\r\n\r\n          .tabs-v2 .breadcrumbs ul li:after {\r\n            content: none;\r\n          }\r\n\r\n          .tabs-v2 .breadcrumbs ul li:last-child {\r\n            display: none;\r\n          }\r\n\r\n      .tabs-v2 .breadcrumbs .ico-arrow-black {\r\n        display: none;\r\n      }\r\n\r\n  .tabs-v2--pinned {\r\n    padding: 20px 15px;\r\n    display: block;\r\n  }\r\n\r\n    .tabs-v2--pinned.sticky {\r\n      opacity: 1;\r\n      transform: translateY(0);\r\n    }\r\n\r\n    .tabs-v2--pinned h1 {\r\n      margin-top: 0;\r\n      font-size: 20px;\r\n    }\r\n\r\n    .tabs-v2--pinned .selected-details h2 {\r\n      font-size: 14px;\r\n    }\r\n\r\n  .tabs .tabs__head {\r\n    display: block;\r\n    padding-right: 0;\r\n    margin: 13px 0 38px;\r\n  }\r\n\r\n    .tabs .tabs__head .breadcrumbs .dropdown {\r\n      color: #111010;\r\n      font-family: 'Source Sans Pro',sans-serif;\r\n      font-size: 16px;\r\n    }\r\n\r\n    .tabs .tabs__head .list-info {\r\n      margin-right: 0;\r\n    }\r\n\r\n  .btn-toggle-filter {\r\n    margin-left: 32px;\r\n  }\r\n\r\n  .tabs__header-top {\r\n      justify-content: center;\r\n  }\r\n\r\n  .tab.list-view .card-details-details p.cityP {\r\n    flex: none !important;\r\n  }\r\n\r\n  .sponsor-image {\r\n    width: 352px;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-body {\r\n    padding: 16px 0;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-content {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    line-height: 21px;\r\n  }\r\n\r\n    .tab.list-view .card-details-details .card-details-content span {\r\n      top: 2px;\r\n      position: relative;\r\n    }\r\n\r\n  .tab.list-view .card-details-details .card-details-entry {\r\n    padding: 0px 10px 0 0;\r\n  }\r\n\r\n  .col-md-header {\r\n    margin: 0 auto;\r\n    max-width: 374px;\r\n  }\r\n\r\n  .tabs .tabs__head p {\r\n    margin-bottom: 0;\r\n    display: block !important;\r\n  }\r\n\r\n    .tabs .tabs__head p.list-info-sort {\r\n      display: none !important;\r\n    }\r\n\r\n  .tab.list-view .card-details-details .card-details-actions {\r\n    display: none;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-actions-mob {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.new-label {\r\n  color: #FF6E4F;\r\n  font-style: italic;\r\n}\r\n\r\n.new-label.casual {\r\n    color: #A384ED;\r\n  }\r\n\r\n.new-label.cheap-eats {\r\n    color: #93D1AC;\r\n  }\r\n\r\n.new-label.classical {\r\n    color: #FFB612;\r\n  }\r\n\r\n.new-label.top100 {\r\n    color: #FF6E4F;\r\n  }\r\n\r\n.new-label-asterisk {\r\n  color: #212529;\r\n  font-size: 18px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .tab.list-view .card-details-details .card-details-title {\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n  }\r\n}\r\n\r\n.tab.list-view .card-details-details--no-rank {\r\n  min-height: 46px;\r\n}\r\n\r\n.tab.list-view .card-details-details--no-rank .card-details-entry {\r\n      padding: 0;\r\n  }\r\n\r\n.tab.list-view .card-details-details--no-rank p {\r\n  order: initial;\r\n}\r\n\r\n.tab.list-view .card-details-details--no-rank p.cityP {\r\n    flex: 0 0 15%!important;\r\n    max-width: 15%;\r\n  }\r\n\r\n.tab.list-view .card-details-details--no-rank .card-details-title {\r\n    font-size: 0.875rem;\r\n  }\r\n\r\n.tab.list-view .card-details-details--no-rank .card-details-body {\r\n    padding: 16px 20px;\r\n  }\r\n\r\n.tab.list-view .card-details-details--no-rank .card-details-title {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n.tab.list-view .card-details-details--no-rank .card-details-actions {\r\n    margin: 0;\r\n    flex: 0 0 15%;\r\n    max-width: 15%;\r\n  }\r\n\r\n.tab.list-view .card-details-details--no-rank .card-details-actions a {\r\n      flex: 0 0 100%;\r\n      max-width: 100%;\r\n    }\r\n\r\n.list-filters--no-rank {\r\n  justify-content: space-between;\r\n  padding: 12px 20px 0;\r\n}\r\n\r\n.list-filters--no-rank li {\r\n    padding-right: 0;\r\n  }\r\n\r\n/*name*/\r\n\r\n.list-filters--no-rank li:first-child {\r\n      max-width: 30.5% !important;\r\n      flex: 0 0 30.5% !important;\r\n    }\r\n\r\n/*chef name*/\r\n\r\n.list-filters--no-rank li:nth-child(2) {\r\n      max-width: 15% !important;\r\n      flex: 0 0 15% !important;\r\n    }\r\n\r\n/*cuisine*/\r\n\r\n.list-filters--no-rank li:nth-child(3) {\r\n      max-width: 15% !important;\r\n      flex: 0 0 15% !important;\r\n      left: 0;\r\n    }\r\n\r\n/*city*/\r\n\r\n.list-filters--no-rank li:nth-child(4) {\r\n      padding-right: 30px;\r\n      flex: 0 0 15%;\r\n      max-width: 15%;\r\n    }\r\n\r\n.list-filters--no-rank li:nth-child(5) {\r\n      padding-right: 30px;\r\n      flex: 0 0 15%;\r\n      max-width: 15%;\r\n      left: 0;\r\n    }\r\n\r\n@media (max-width: 1200px) {\r\n  /*name*/\r\n  .list-filters--no-rank li:first-child {\r\n    max-width: 30.5% !important;\r\n    flex: 0 0 30.5% !important;\r\n  }\r\n  .tab.list-view .card-details-details--no-rank .card-details-actions {\r\n    margin-right: 0!important;\r\n  }\r\n  .tab.list-view .card-details-details--no-rank .card-details-actions a:first-child {\r\n    flex: 0 0 100%!important;\r\n    max-width: 100%!important;\r\n  }\r\n\r\n  .tab.list-view .card-details-details .card-details-title {\r\n    flex: 0 0 30.5% !important;\r\n    max-width: 30.5% !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 1199px) {\r\n  /*name*/\r\n  .list-filters--no-rank li:first-child {\r\n    max-width: 30.5% !important;\r\n    flex: 0 0 30.5% !important;\r\n  }\r\n\r\n  /*chef name*/\r\n  .list-filters--no-rank li:nth-child(2) {\r\n    max-width: 15% !important;\r\n    flex: 0 0 15% !important;\r\n  }\r\n\r\n  /*cuisine*/\r\n  .list-filters--no-rank li:nth-child(3) {\r\n    max-width: 15% !important;\r\n    flex: 0 0 15% !important;\r\n  }\r\n  /*city*/\r\n  .list-filters--no-rank li:nth-child(4) {\r\n    flex: 0 0 15% !important;\r\n    max-width: 15% !important;\r\n  }\r\n  /*country*/\r\n  .list-filters--no-rank li:nth-child(5) {\r\n    flex: 0 0 15% !important;\r\n    max-width: 15% !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 1023px) {\r\n  /*country*/\r\n  .list-filters--no-rank li:first-child {\r\n    max-width: 30.5% !important;\r\n    flex: 0 0 30.5% !important;\r\n  }\r\n\r\n  /*chef name*/\r\n  .list-filters--no-rank li:nth-child(2) {\r\n    max-width: 15% !important;\r\n    flex: 0 0 15% !important;\r\n  }\r\n\r\n  /*cuisine*/\r\n  .list-filters--no-rank li:nth-child(3) {\r\n    max-width: 15% !important;\r\n    flex: 0 0 15% !important;\r\n  }\r\n  /*city*/\r\n  .list-filters--no-rank li:nth-child(4) {\r\n    flex: 0 0 15% !important;\r\n    max-width: 15% !important;\r\n  }\r\n  /*country*/\r\n  .list-filters--no-rank li:nth-child(5) {\r\n    flex: 0 0 15% !important;\r\n    max-width: 15% !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 784px) {\r\n  /*country*/\r\n  .list-filters--no-rank li:first-child {\r\n    max-width: 30.5% !important;\r\n    flex: 0 0 30.5% !important;\r\n  }\r\n\r\n  /*city*/\r\n  .list-filters--no-rank li:nth-child(2) {\r\n    max-width: 15% !important;\r\n    flex: 0 0 15% !important;\r\n  }\r\n\r\n  /*category*/\r\n  .list-filters--no-rank li:nth-child(3) {\r\n    max-width: 15% !important;\r\n    flex: 0 0 15% !important;\r\n  }\r\n  /*name*/\r\n  .list-filters--no-rank li:nth-child(4) {\r\n    flex: 0 0 15% !important;\r\n    max-width: 15% !important;\r\n  }\r\n  /*country*/\r\n  .list-filters--no-rank li:nth-child(5) {\r\n    flex: 0 0 15% !important;\r\n    max-width: 15% !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .tab.list-view .card-details-details .card-details-title {\r\n    max-width: initial !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saXN0cy9kZXRhaWxzdjIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCOztBQUVFO0lBQ0UsU0FBUztJQUVULGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjs7QUFFRTtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFFBQVE7TUFDUixVQUFVO01BQ1YsV0FBVztNQUNYLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsY0FBYztNQUdkLHdCQUF3QjtNQUl4Qiw4QkFBOEI7SUFFaEM7O0FBRUo7RUFHRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFHRSx3QkFBd0I7QUFDMUI7O0FBRUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUdaLHFCQUFxQjtFQUN2Qjs7QUFHRjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUU7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxtREFBbUQ7SUFDbkQsbUJBQW1CO0VBQ3JCOztBQUVBO01BQ0ksY0FBYztFQUNsQjs7QUFDRTtNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUI7SUFDdkI7O0FBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztBQUNBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFRjtNQUNJLGNBQWM7TUFDZCxVQUFVO01BQ1YseUJBQXlCO01BQ3pCLGlCQUFpQjtNQUNqQixlQUFlO0VBQ25COztBQUVFO01BQ0UsZUFBZTtNQUNmLGdEQUFnRDtJQUNsRDs7QUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7QUFFSjtFQUNFLGFBQWE7RUFDYix1QkFB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O0FBRUE7RUFDRSxPQUFPO0VBQ1A7SUFDRSwyQkFBMkI7SUFFM0IsMEJBQTBCO0VBQzVCOztFQUVBLFlBQVk7RUFDWjtJQUNFLHlCQUF5QjtJQUV6Qix3QkFBd0I7RUFDMUI7O0VBRUEsVUFBVTtFQUNWO0lBQ0UseUJBQXlCO0lBRXpCLHdCQUF3QjtFQUMxQjtFQUNBLE9BQU87RUFDUDtJQUVFLHdCQUF3QjtJQUN4Qix5QkFBeUI7RUFDM0I7RUFDQSxVQUFVO0VBQ1Y7SUFFRSx3QkFBd0I7SUFDeEIseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Y7SUFDRSwyQkFBMkI7SUFFM0IsMEJBQTBCO0VBQzVCOztFQUVBLFlBQVk7RUFDWjtJQUNFLHlCQUF5QjtJQUV6Qix3QkFBd0I7RUFDMUI7O0VBRUEsVUFBVTtFQUNWO0lBQ0UseUJBQXlCO0lBRXpCLHdCQUF3QjtFQUMxQjtFQUNBLE9BQU87RUFDUDtJQUVFLHdCQUF3QjtJQUN4Qix5QkFBeUI7RUFDM0I7RUFDQSxVQUFVO0VBQ1Y7SUFFRSx3QkFBd0I7SUFDeEIseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Y7SUFDRSwyQkFBMkI7SUFFM0IsMEJBQTBCO0VBQzVCOztFQUVBLE9BQU87RUFDUDtJQUNFLHlCQUF5QjtJQUV6Qix3QkFBd0I7RUFDMUI7O0VBRUEsV0FBVztFQUNYO0lBQ0UseUJBQXlCO0lBRXpCLHdCQUF3QjtFQUMxQjtFQUNBLE9BQU87RUFDUDtJQUVFLHdCQUF3QjtJQUN4Qix5QkFBeUI7RUFDM0I7RUFDQSxVQUFVO0VBQ1Y7SUFFRSx3QkFBd0I7SUFDeEIseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGIiwiZmlsZSI6InNyYy9saXN0cy9kZXRhaWxzdjIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1icyAuZHJvcGRvd24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJyZWFkY3J1bWJzIC5idG4tZHJvcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuICAuYnJlYWRjcnVtYnMgLmJ0bi1kcm9wOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgIG91dGxpbmU6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzIC5idG4tZHJvcCBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICAgLmJyZWFkY3J1bWJzIC5idG4tZHJvcCBzcGFuOm50aC1jaGlsZCgyKTphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtMjJweDtcclxuICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICBib3JkZXItbGVmdDogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuM3MgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjNzIGVhc2U7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gICAgfVxyXG5cclxuLmJyZWFkY3J1bWJzIC5zaG93IHNwYW46bnRoLWNoaWxkKDIpOmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxufVxyXG5cclxuLmJyZWFkY3J1bWJzIC5kcm9wZG93bi1pdGVtIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5icmVhZGNydW1icyAuaWNvLWFycm93LWJsYWNrIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuICAuYnJlYWRjcnVtYnMgLmljby1hcnJvdy1ibGFjayBzdmcge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbiAgfVxyXG5cclxuXHJcbi50YWJzIC50YWJzX19zb3J0LS12aWV3e1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgZmxleDogMCAwIDUwMHB4O1xyXG59XHJcblxyXG4udGFicyAudGFic19faGVhZCB7XHJcbiAgbWFyZ2luOiAyMnB4IDAgMzVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuICAudGFicyAudGFic19faGVhZCBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLnRhYnMgLnRhYnNfX2hlYWQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHVEFtZXJpY2FTdGFuZGFyZFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50YWJzIC50YWJzX19oZWFkIC5icmVhZGNydW1icyB7XHJcbiAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIH1cclxuICAgIC50YWJzIC50YWJzX19oZWFkIC5kcm9wZG93bi13cmFwcGVyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYnMgLnRhYnNfX2hlYWQgLmxpc3QtaW5mbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgIH1cclxuICAgIC50YWJzIC50YWJzX19oZWFkIC5saXN0LWluZm86bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAudGFicyAudGFic19faGVhZCAuYnJlYWRjcnVtYnMgLmxhbmd1YWdlLXRleHQge1xyXG4gICAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6ICA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gICAgLnRhYnMgLnRhYnNfX2hlYWQgLmJyZWFkY3J1bWJzIC5kcm9wZG93biB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDsgICAgICBcclxuICAgICAgZm9udC1mYW1pbHk6ICdHVEFtZXJpY2FTdGFuZGFyZFRoaW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJzIC50YWJzX19oZWFkIC5icmVhZGNydW1icyAuYnRuLWRyb3Agc3BhbjpudGgtY2hpbGQoMik6YWZ0ZXIge1xyXG4gICAgICB0b3A6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuLnRhYnNfX2hlYWRlci10b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi50YWJzX19oZWFkZXItYm90dG9tIHtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMTEwMTA7XHJcbiAgcGFkZGluZzogN3B4IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4gIC5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIsXHJcbiAgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpmb2N1cyxcclxuICAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmFjdGl2ZSxcclxuICAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6ICNmMDAwMDA7XHJcbiAgfVxyXG5cclxuLmJ0bi10b2dnbGUtZmlsdGVyIHtcclxuICBtaW4td2lkdGg6IDEwNnB4O1xyXG59XHJcblxyXG4udGFic19faGVhZGVyLWJvdHRvbSAuZm9ybS1jb250cm9sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4gIC50YWJzX19oZWFkZXItYm90dG9tIGxhYmVsIHtcclxuICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuLnRhYnMtdjIge1xyXG4gIHBhZGRpbmc6IDI5cHggMCA3M3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RTRGO1xyXG59XHJcblxyXG4gIC50YWJzLXYyLnRvcDEwMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RTRGO1xyXG4gIH1cclxuXHJcbiAgLnRhYnMtdjIuY2xhc3NpY2FsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkI2MTI7XHJcbiAgfVxyXG5cclxuICAudGFicy12Mi5jYXN1YWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EzODRFRDtcclxuICB9XHJcblxyXG4gIC50YWJzLXYyLmNoZWFwLWVhdHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzRDFBQztcclxuICB9XHJcblxyXG4gIC50YWJzLXYyIGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDM3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHVFN1cGVyRGlzcGxheVJlZ3VsYXInLCBzZXJpZjtcclxuICB9XHJcblxyXG4gIC50YWJzLXYyIC5icmVhZGNydW1icyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMxMTEwMTA7XHJcbiAgfVxyXG4gICAgLnRhYnMtdjIgLmJyZWFkY3J1bWJzIC5ob21lIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGFicy12MiAuYnJlYWRjcnVtYnMgdWwge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAgIC50YWJzLXYyIC5icmVhZGNydW1icyB1bCBsaTphZnRlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG5cclxuICAudGFicy12MiAuaWNvLWFycm93LWJsYWNrIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaW1hZ2VzL2Fycm93LWxlZnQucG5nXCIpIDAgMCBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogOXB4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuXHJcblxyXG4gIC50YWJzLXYyIC5zZWxlY3RlZC1kZXRhaWxzIHtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAgIC50YWJzLXYyIC5zZWxlY3RlZC1kZXRhaWxzIGgyIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHVEFtZXJpY2FTdGFuZGFyZFJlZ3VsYXInO1xyXG4gICAgICBjb2xvcjogIzExMTAxMDtcclxuICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTExMDEwO1xyXG4gICAgICBwYWRkaW5nOiA0cHggMTNweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDllbTtcclxuICAgIH1cclxuXHJcbiAgICAgIC50YWJzLXYyIC5zZWxlY3RlZC1kZXRhaWxzIGgyOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHVEFtZXJpY2FTdGFuZGFyZE1lZGl1bSc7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICAgICAgfVxyXG5cclxuLnRhYnMtdjItLXBpbm5lZCB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIHRvcDogNDlweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxOTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzLHRyYW5zZm9ybSAuM3M7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyx0cmFuc2Zvcm0gLjNzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDVweCk7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnRhYnMtdjItLXBpbm5lZC5uYXYtZG93biB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGFic19fYm9keSBoMiB7XHJcbiAgZm9udC1mYW1pbHk6ICdHVEFtZXJpY2FTdGFuZGFyZE1lZGl1bScsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkU0RjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzExMTAxMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmc6IDZweCAyMHB4IDdweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMDVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4gIC50YWJzX19ib2R5IGgyIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR1RBbWVyaWNhU3RhbmRhcmRUaGluXCIsc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC50YWJzX19ib2R5IGgyLmJvcmRlci10b3AxMDAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkU0RjtcclxuICB9XHJcbiAgLnRhYnNfX2JvZHkgaDIuYm9yZGVyLWNsYXNzaWNhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCNjEyO1xyXG4gIH1cclxuICAudGFic19fYm9keSBoMi5ib3JkZXItY2FzdWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMzg0RUQ7XHJcbiAgfVxyXG4gIC50YWJzX19ib2R5IGgyLmJvcmRlci1jaGVhcC1lYXRzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M0QxQUM7XHJcbiAgfVxyXG5cclxuLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtY29udGVudCB7XHJcbiAgY29sb3I6ICNGRjZFNEY7XHJcbiAgcGFkZGluZzogMTJweCAzcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1jb250ZW50LnRvcDEwMCB7XHJcbiAgICBjb2xvcjogI0ZGNkU0RjtcclxuICB9XHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtY29udGVudC5jbGFzc2ljYWwge1xyXG4gICAgY29sb3I6ICNGRkI2MTI7XHJcbiAgfVxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWNvbnRlbnQuY2FzdWFsIHtcclxuICAgIGNvbG9yOiAjQTM4NEVEO1xyXG4gIH1cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1jb250ZW50LmNoZWFwLWVhdHMge1xyXG4gICAgY29sb3I6ICM5M0QxQUM7XHJcbiAgfVxyXG5cclxuLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtZW50cnkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdUQW1lcmljYVN0YW5kYXJkUmVndWxhclwiLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyBwIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAtbXMtZmxleDogMCAwIDE1JTtcclxuICBmbGV4OiAwIDAgMTUlO1xyXG4gIG1heC13aWR0aDogMTUlO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkdUQW1lcmljYVN0YW5kYXJkUmVndWxhclwiLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIHAuY2l0eUNvdW50cnlQIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIC8qZm9udC1mYW1pbHk6ICdHVEFtZXJpY2FTdGFuZGFyZFRoaW4nLCBzYW5zLXNlcmlmOyovXHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBjb2xvcjogIzExMTAxMDtcclxuICB9XHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyBwLmNpdHlQIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTYlO1xyXG4gICAgZmxleDogMCAwIDE2JSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxNiU7XHJcbiAgfVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLnN0YXRlIHAuY2l0eVAge1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxMy40JTtcclxuICAgIGZsZXg6IDAgMCAxMy40JSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMy40JTtcclxuICB9XHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuc3RhdGUgcC5zdGF0ZVAge1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxMyU7XHJcbiAgICBmbGV4OiAwIDAgMTMlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEzJTtcclxuICB9XHJcblxyXG50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyBwLmNvdW50cnlQIHtcclxuICBtYXgtd2lkdGg6IDE3LjUlXHJcbn1cclxuXHJcbi50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIC1tcy1mbGV4OiAwIDAgMzAuNSU7XHJcbiAgbWF4LXdpZHRoOiAzMC41JTtcclxuICBmbGV4OiAwIDAgMzAuNSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRvcDogMnB4O1xyXG4gIC8qZm9udC1zaXplOiAyMnB4O1xyXG4gIHRvcDogMDsqL1xyXG59XHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLXRpdGxlIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtdGl0bGUgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogdW5zZXQ7XHJcbiAgfVxyXG5cclxuLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5zdGF0ZSAuY2FyZC1kZXRhaWxzLXRpdGxlIHtcclxuICBtYXgtd2lkdGg6IDI4JTtcclxuICBmbGV4OiAwIDAgMjglXHJcbn1cclxuXHJcblxyXG4udGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLnN0YXRlIC5jYXJkLWRldGFpbHMtYWN0aW9ucyB7XHJcbiAgbWFyZ2luOiAwIDQuOCUgMCAwO1xyXG59XHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuc3RhdGUgLmNhcmQtZGV0YWlscy1hY3Rpb25zIGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWF4LXdpZHRoOiA2MSU7XHJcbiAgICBmbGV4OiAwIDAgNjElXHJcbiAgfVxyXG5cclxuLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtYWN0aW9ucyBhOm50aC1jaGlsZCgyKSB7XHJcbiAgbWF4LXdpZHRoOiBub25lO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5cclxuLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtYWN0aW9ucyB7XHJcbiAgbWFyZ2luOiAwIDE0JSAwIDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbn1cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1hY3Rpb25zIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtYWN0aW9ucyBhOmZpcnN0LWNoaWxkIHsgICAgXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtYWN0aW9ucy1tb2Ige1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWFjdGlvbnMtbW9iIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LWZhbWlseTogJ0dUQW1lcmljYVN0YW5kYXJkVGhpbicsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWFjdGlvbnMtbW9iIGE6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIiAvIFwiO1xyXG4gIH1cclxuXHJcbi5saXN0LWZpbHRlcnMge1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbiAgY29sb3I6ICNCREJEQkQ7XHJcbn1cclxuXHJcbiAgLmxpc3QtZmlsdGVycyBsaSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHVEFtZXJpY2FTdGFuZGFyZFJlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMCk7XHJcbiAgfVxyXG5cclxuICAubGlzdC1maWx0ZXJzIGxpOjphZnRlciB7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICB9XHJcblxyXG4gICAgLmxpc3QtZmlsdGVycyBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGZsZXg6IDAgMCA3OXB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDc5cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgICAtbXMtZmxleDogMCAwIDI3LjUlO1xyXG4gICAgICBmbGV4OiAwIDAgMjcuNSU7XHJcbiAgICAgIG1heC13aWR0aDogMjcuNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgICAtbXMtZmxleDogMCAwIDI1LjMlO1xyXG4gICAgICBmbGV4OiAwIDAgMjUuMyU7XHJcbiAgICAgIG1heC13aWR0aDogMjUuMyU7XHJcbiAgICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgMjEuMSU7XHJcbiAgICBtYXgtd2lkdGg6IDIxLjElO1xyXG4gICAgZmxleDogMCAwIDIxLjElO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTdweDtcclxuICB9XHJcblxyXG4gICAgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoMykge1xyXG4gICAgICAtbXMtZmxleDogMCAwIDE1LjYlO1xyXG4gICAgICBmbGV4OiAwIDAgMTUuNiU7XHJcbiAgICAgIG1heC13aWR0aDogMTUuNiU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgICAtbXMtZmxleDogMCAwIDE2LjYlO1xyXG4gICAgICBmbGV4OiAwIDAgMTYuNiU7XHJcbiAgICAgIG1heC13aWR0aDogMTYuNiU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgICAtbXMtZmxleDogMCAwIDEzLjglO1xyXG4gICAgICBmbGV4OiAwIDAgMTMuOCU7XHJcbiAgICAgIG1heC13aWR0aDogMTMuOCU7XHJcbiAgICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDUpIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTQuNCU7XHJcbiAgICBtYXgtd2lkdGg6IDE0LjQlO1xyXG4gICAgZmxleDogMCAwIDE0LjQlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTRweDtcclxuICB9XHJcblxyXG4gICAgLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoNikge1xyXG4gICAgICAvKi1tcy1mbGV4OiAwIDAgMTMuOCU7XHJcbiAgICAgIG1heC13aWR0aDogMTMuOCU7XHJcbiAgICAgIGZsZXg6IDAgMCAxMy44JTsqL1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgIC1tcy1mbGV4OiAxIDE7XHJcbiAgICAgIGZsZXg6IDEgMTtcclxuICAgIH1cclxuXHJcbiAgLmxpc3QtZmlsdGVycyBsaS5jdXJyZW50IHtcclxuICAgIGNvbG9yOiAjMTExMDEwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkY2RTRGO1xyXG4gIH1cclxuXHJcbiAgICAubGlzdC1maWx0ZXJzLnRvcDEwMCBsaS5jdXJyZW50IHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjRkY2RTRGO1xyXG4gICAgfVxyXG4gICAgLmxpc3QtZmlsdGVycy5jbGFzc2ljYWwgbGkuY3VycmVudCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGQjYxMjtcclxuICAgIH1cclxuICAgIC5saXN0LWZpbHRlcnMuY2FzdWFsIGxpLmN1cnJlbnQge1xyXG4gICAgICBib3JkZXItY29sb3I6ICNBMzg0RUQ7XHJcbiAgICB9XHJcbiAgICAubGlzdC1maWx0ZXJzLmNoZWFwLWVhdHMgbGkuY3VycmVudCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzkzRDFBQztcclxuICAgIH1cclxuXHJcbi5saXN0LWZpbHRlcnMuc3RhdGUgbGk6bnRoLWNoaWxkKDUpLCAubGlzdC1maWx0ZXJzLnN0YXRlIGxpOm50aC1jaGlsZCg2KSB7XHJcbiAgZmxleDogMCAwIDEyLjAlO1xyXG4gIG1heC13aWR0aDogMTIuMCU7XHJcbn1cclxuXHJcbi50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWFjdGlvbnMgYTpmaXJzdC1jaGlsZCB7XHJcbiAgLW1zLWZsZXg6IDAgMCA4MiU7XHJcbiAgZmxleDogMCAwIDgyJTtcclxuICBtYXgtd2lkdGg6IDgyJTtcclxufVxyXG5cclxuXHJcblxyXG4udGFiLmxpc3Qtdmlld3tcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWVudHJ5IHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5saXN0LWZpbHRlcnMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLypAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuYnJlYWRjcnVtYnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59Ki9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXgtd2lkdGg6IDI2LjElICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDI2LjElICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMjYuMSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgIG1heC13aWR0aDogMTkuMSUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTkuMSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxOS4xJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgbWF4LXdpZHRoOiAyMC4xJSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAyMC4xJSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDIwLjElICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCg1KSB7XHJcbiAgICBtYXgtd2lkdGg6IDEzLjclICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDEzLjclICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTMuNyUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMuc3RhdGUgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1heC13aWR0aDogMjQuMyUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMjQuMyUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAyNC4zJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC1maWx0ZXJzLnN0YXRlIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICBtYXgtd2lkdGg6IDEzLjYlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDEzLjYlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTMuNiUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgbWF4LXdpZHRoOiAxNC42JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxNC42JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE0LjYlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5saXN0LWZpbHRlcnMuc3RhdGUgbGk6bnRoLWNoaWxkKDYpIHtcclxuICAgIG1heC13aWR0aDogMTMuNSUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTMuNSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxMy41JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkgIHtcclxuICAuYnJlYWRjcnVtYnMge1xyXG4gICAgLyp3aWR0aDogMTAwJTsqL1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1hY3Rpb25zIGEgfiBhIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxuICAgIC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWFjdGlvbnMgYSB+IGE6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1lbnRyeSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtY29udGVudCB7XHJcbiAgICAtbXMtZmxleDogMCAwIDQwcHg7XHJcbiAgICBmbGV4OiAwIDAgNDhweDtcclxuICAgIG1heC13aWR0aDogNDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLWFjdGlvbnMge1xyXG4gICAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtYWN0aW9ucyBhOmZpcnN0LWNoaWxkIHtcclxuICAgIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgZmxleDogMCAwIDQ4cHg7XHJcbiAgICAtbXMtZmxleDogMCAwIDQ4cHg7XHJcbiAgICBtYXgtd2lkdGg6IDQ4cHg7XHJcbiAgfSBcclxuXHJcbiAgLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbWF4LXdpZHRoOiAyNS43JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAyNS43JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDI1LjclICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICBtYXgtd2lkdGg6IDE5LjUlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDE5LjUlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTkuNSUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICBtYXgtd2lkdGg6IDE4LjIlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDE4LjIlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTguMiUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDUpIHtcclxuICAgIG1heC13aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMuc3RhdGUgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1heC13aWR0aDogMjAuMiUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMjAuMiUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAyMC4yJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC1maWx0ZXJzLnN0YXRlIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICBtYXgtd2lkdGg6IDE1LjYlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDE1LjYlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTUuNiUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgbWF4LXdpZHRoOiAxNC44JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxNC44JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE0LjglICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5saXN0LWZpbHRlcnMuc3RhdGUgbGk6bnRoLWNoaWxkKDYpIHtcclxuICAgIG1heC13aWR0aDogMTQuOCUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTQuOCUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNC44JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc4NHB4KSB7XHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtYWN0aW9ucyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXgtd2lkdGg6IDI3JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAyNyUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAyNyUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgIG1heC13aWR0aDogMTcuOSUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTcuOSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNy45JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZmlsdGVycyBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgbWF4LXdpZHRoOiAxOC4yJSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxOC4yJSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE4LjIlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubGlzdC1maWx0ZXJzIGxpOm50aC1jaGlsZCg1KSB7XHJcbiAgICBtYXgtd2lkdGg6IDE1LjclICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDE1LjclICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTUuNyUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saXN0LWZpbHRlcnMgbGk6bnRoLWNoaWxkKDYpIHtcclxuICAgIG1heC13aWR0aDogMTMlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDEzJSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDEzJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbWF4LXdpZHRoOiAxOC40JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxOC40JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE4LjQlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5saXN0LWZpbHRlcnMuc3RhdGUgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgIG1heC13aWR0aDogMTQuNSUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTQuNSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNC41JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC1maWx0ZXJzLnN0YXRlIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICBtYXgtd2lkdGg6IDEzLjQlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDEzLjQlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTMuNCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxpc3QtZmlsdGVycy5zdGF0ZSBsaTpudGgtY2hpbGQoNikge1xyXG4gICAgbWF4LXdpZHRoOiAxMy44JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxMy44JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDEzLjglICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgLnRhYnMtdjIgLnNlbGVjdGVkLWRldGFpbHMge1xyXG4gICAgYWxpZ24taXRlbXM6IGluaXRpYWw7XHJcbiAgfVxyXG5cclxuICAgIC50YWJzLXYyIC5zZWxlY3RlZC1kZXRhaWxzIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAudGFicy12MiB7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDAgNTVweDtcclxuICB9XHJcblxyXG4gICAgLnRhYnMtdjIgaDEge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIH1cclxuXHJcbiAgICAudGFicy12MiAuc2VsZWN0ZWQtZGV0YWlscyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgICAudGFicy12MiAuc2VsZWN0ZWQtZGV0YWlscyBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAgIC50YWJzLXYyIC5zZWxlY3RlZC1kZXRhaWxzIGgyOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDIzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIC50YWJzLXYyIC5icmVhZGNydW1icyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICAgLnRhYnMtdjIgLmJyZWFkY3J1bWJzIHVsIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgICAudGFicy12MiAuYnJlYWRjcnVtYnMgdWwgbGkge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYnMtdjIgLmJyZWFkY3J1bWJzIHVsIGxpOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGFicy12MiAuYnJlYWRjcnVtYnMgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAudGFicy12MiAuYnJlYWRjcnVtYnMgLmljby1hcnJvdy1ibGFjayB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAudGFicy12Mi0tcGlubmVkIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgICAudGFicy12Mi0tcGlubmVkLnN0aWNreSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuXHJcbiAgICAudGFicy12Mi0tcGlubmVkIGgxIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJzLXYyLS1waW5uZWQgLnNlbGVjdGVkLWRldGFpbHMgaDIge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gIC50YWJzIC50YWJzX19oZWFkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIG1hcmdpbjogMTNweCAwIDM4cHg7XHJcbiAgfVxyXG5cclxuICAgIC50YWJzIC50YWJzX19oZWFkIC5icmVhZGNydW1icyAuZHJvcGRvd24ge1xyXG4gICAgICBjb2xvcjogIzExMTAxMDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAudGFicyAudGFic19faGVhZCAubGlzdC1pbmZvIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAuYnRuLXRvZ2dsZS1maWx0ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgfVxyXG5cclxuICAudGFic19faGVhZGVyLXRvcCB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIHAuY2l0eVAge1xyXG4gICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNwb25zb3ItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDM1MnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgfVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMgLmNhcmQtZGV0YWlscy1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICB9XHJcblxyXG4gICAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtY29udGVudCBzcGFuIHtcclxuICAgICAgdG9wOiAycHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtZW50cnkge1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggMCAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tZC1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDM3NHB4O1xyXG4gIH1cclxuXHJcbiAgLnRhYnMgLnRhYnNfX2hlYWQgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICAgLnRhYnMgLnRhYnNfX2hlYWQgcC5saXN0LWluZm8tc29ydCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtYWN0aW9ucy1tb2Ige1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ubmV3LWxhYmVsIHtcclxuICBjb2xvcjogI0ZGNkU0RjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbiAgLm5ldy1sYWJlbC5jYXN1YWwge1xyXG4gICAgY29sb3I6ICNBMzg0RUQ7XHJcbiAgfVxyXG5cclxuICAubmV3LWxhYmVsLmNoZWFwLWVhdHMge1xyXG4gICAgY29sb3I6ICM5M0QxQUM7XHJcbiAgfVxyXG5cclxuICAubmV3LWxhYmVsLmNsYXNzaWNhbCB7XHJcbiAgICBjb2xvcjogI0ZGQjYxMjtcclxuICB9XHJcblxyXG4gIC5uZXctbGFiZWwudG9wMTAwIHtcclxuICAgIGNvbG9yOiAjRkY2RTRGO1xyXG4gIH1cclxuXHJcbi5uZXctbGFiZWwtYXN0ZXJpc2sge1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzIC5jYXJkLWRldGFpbHMtdGl0bGUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbn1cclxuXHJcbi50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscy0tbm8tcmFuayB7XHJcbiAgbWluLWhlaWdodDogNDZweDtcclxufVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMtLW5vLXJhbmsgLmNhcmQtZGV0YWlscy1lbnRyeSB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzLS1uby1yYW5rIHAge1xyXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IGluaXRpYWw7XHJcbiAgLW1zLWZsZXgtb3JkZXI6IGluaXRpYWw7XHJcbiAgb3JkZXI6IGluaXRpYWw7XHJcbn1cclxuXHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzLS1uby1yYW5rIHAuY2l0eVAge1xyXG4gICAgZmxleDogMCAwIDE1JSFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDE1JTtcclxuICB9XHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscy0tbm8tcmFuayAuY2FyZC1kZXRhaWxzLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgfVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMtLW5vLXJhbmsgLmNhcmQtZGV0YWlscy1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICB9XHJcblxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMtLW5vLXJhbmsgLmNhcmQtZGV0YWlscy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMtLW5vLXJhbmsgLmNhcmQtZGV0YWlscy1hY3Rpb25zIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsZXg6IDAgMCAxNSU7XHJcbiAgICBtYXgtd2lkdGg6IDE1JTtcclxuICB9XHJcblxyXG4gICAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzLS1uby1yYW5rIC5jYXJkLWRldGFpbHMtYWN0aW9ucyBhIHtcclxuICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcblxyXG4ubGlzdC1maWx0ZXJzLS1uby1yYW5rIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTJweCAyMHB4IDA7XHJcbn1cclxuXHJcbiAgLmxpc3QtZmlsdGVycy0tbm8tcmFuayBsaSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuICAgIC8qbmFtZSovXHJcbiAgICAubGlzdC1maWx0ZXJzLS1uby1yYW5rIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWF4LXdpZHRoOiAzMC41JSAhaW1wb3J0YW50O1xyXG4gICAgICAtbXMtZmxleDogMCAwIDMwLjUlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXg6IDAgMCAzMC41JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qY2hlZiBuYW1lKi9cclxuICAgIC5saXN0LWZpbHRlcnMtLW5vLXJhbmsgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICAgICAgLW1zLWZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICAgICAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qY3Vpc2luZSovXHJcbiAgICAubGlzdC1maWx0ZXJzLS1uby1yYW5rIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIG1heC13aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC1tcy1mbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC8qY2l0eSovXHJcbiAgICAubGlzdC1maWx0ZXJzLS1uby1yYW5rIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgIC1tcy1mbGV4OiAwIDAgMTUlO1xyXG4gICAgICBmbGV4OiAwIDAgMTUlO1xyXG4gICAgICBtYXgtd2lkdGg6IDE1JTtcclxuICAgIH1cclxuICAgIC5saXN0LWZpbHRlcnMtLW5vLXJhbmsgbGk6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgLW1zLWZsZXg6IDAgMCAxNSU7XHJcbiAgICAgIGZsZXg6IDAgMCAxNSU7XHJcbiAgICAgIG1heC13aWR0aDogMTUlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC8qbmFtZSovXHJcbiAgLmxpc3QtZmlsdGVycy0tbm8tcmFuayBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwLjUlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDMwLjUlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMzAuNSUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRhYi5saXN0LXZpZXcgLmNhcmQtZGV0YWlscy1kZXRhaWxzLS1uby1yYW5rIC5jYXJkLWRldGFpbHMtYWN0aW9ucyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudGFiLmxpc3QtdmlldyAuY2FyZC1kZXRhaWxzLWRldGFpbHMtLW5vLXJhbmsgLmNhcmQtZGV0YWlscy1hY3Rpb25zIGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgZmxleDogMCAwIDEwMCUhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLXRpdGxlIHtcclxuICAgIGZsZXg6IDAgMCAzMC41JSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAzMC41JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC8qbmFtZSovXHJcbiAgLmxpc3QtZmlsdGVycy0tbm8tcmFuayBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwLjUlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDMwLjUlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMzAuNSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8qY2hlZiBuYW1lKi9cclxuICAubGlzdC1maWx0ZXJzLS1uby1yYW5rIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXgtd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8qY3Vpc2luZSovXHJcbiAgLmxpc3QtZmlsdGVycy0tbm8tcmFuayBsaTpudGgtY2hpbGQoMykge1xyXG4gICAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qY2l0eSovXHJcbiAgLmxpc3QtZmlsdGVycy0tbm8tcmFuayBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qY291bnRyeSovXHJcbiAgLmxpc3QtZmlsdGVycy0tbm8tcmFuayBsaTpudGgtY2hpbGQoNSkge1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgLypjb3VudHJ5Ki9cclxuICAubGlzdC1maWx0ZXJzLS1uby1yYW5rIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIG1heC13aWR0aDogMzAuNSUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMzAuNSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAzMC41JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLypjaGVmIG5hbWUqL1xyXG4gIC5saXN0LWZpbHRlcnMtLW5vLXJhbmsgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1heC13aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLypjdWlzaW5lKi9cclxuICAubGlzdC1maWx0ZXJzLS1uby1yYW5rIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICBtYXgtd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLypjaXR5Ki9cclxuICAubGlzdC1maWx0ZXJzLS1uby1yYW5rIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICAtbXMtZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLypjb3VudHJ5Ki9cclxuICAubGlzdC1maWx0ZXJzLS1uby1yYW5rIGxpOm50aC1jaGlsZCg1KSB7XHJcbiAgICAtbXMtZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODRweCkge1xyXG4gIC8qY291bnRyeSovXHJcbiAgLmxpc3QtZmlsdGVycy0tbm8tcmFuayBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwLjUlICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMCAwIDMwLjUlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMzAuNSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8qY2l0eSovXHJcbiAgLmxpc3QtZmlsdGVycy0tbm8tcmFuayBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAvKmNhdGVnb3J5Ki9cclxuICAubGlzdC1maWx0ZXJzLS1uby1yYW5rIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICBtYXgtd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLypuYW1lKi9cclxuICAubGlzdC1maWx0ZXJzLS1uby1yYW5rIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICAtbXMtZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLypjb3VudHJ5Ki9cclxuICAubGlzdC1maWx0ZXJzLS1uby1yYW5rIGxpOm50aC1jaGlsZCg1KSB7XHJcbiAgICAtbXMtZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC50YWIubGlzdC12aWV3IC5jYXJkLWRldGFpbHMtZGV0YWlscyAuY2FyZC1kZXRhaWxzLXRpdGxlIHtcclxuICAgIG1heC13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/lists/detailsv2.component.html":
/*!********************************************!*\
  !*** ./src/lists/detailsv2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main background--grey-alt\">\r\n\r\n  <section class=\"section-details\" style=\"padding-top:0px;\">\r\n\r\n\r\n    <div *ngIf=\"listType\" class=\"tabs tabs-v2 tabs-v2--pinned {{listType.cssTag}}\"\r\n         [class.sticky]=\"isSticky\" [class.nav-down]=\"isScrollDown\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h1 class=\"text-center\" *ngIf=\"continent && listType\">{{continent.name}}</h1>\r\n            <div class=\"selected-details\">\r\n              <h2>{{selectedYear}}</h2>\r\n              <h2 *ngIf=\"listType\">{{selectedList ? selectedList.listTypeName : listType.name}}</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section-details__body\">\r\n      <div *ngIf=\"listType\" id=\"myHeader\" class=\"tabs tabs-v2 {{listType.cssTag}}\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <div class=\"breadcrumbs mt-0\">\r\n                <ul>\r\n                  <li class=\"home\"><i class=\"ico-arrow-black\"></i><a href=\"https://www.oadlists.com/\"><span class=\"d-inline d-md-none\">The </span>Lists</a></li>\r\n                  <li *ngIf=\"continent !== null\"><a href=\"https://www.oadlists.com/\">{{continent.name}}</a></li>\r\n                </ul>\r\n              </div>\r\n              <h1 class=\"text-center\" *ngIf=\"continent && listType\">{{continent.name}}</h1>\r\n              <div *ngIf=\"listType\" class=\"selected-details\">\r\n                <h2>{{selectedYear}}</h2>\r\n                <h2>{{selectedList ? selectedList.listTypeName : listType.name}}</h2>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"selectedList && selectedList.listStyleId === 1\" class=\"container\">\r\n      <div class=\"section-details__body\">\r\n        <div class=\"tabs\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <div class=\"tabs__head\">\r\n                <div class=\"tabs__header-top\">\r\n                  <div class=\"breadcrumbs mt-0\" *ngIf=\"selectedList.isMultiLingual\">\r\n                    <div class=\"dropdown-wrapper\">\r\n                      <span class=\"language-text\">Language</span>\r\n                      <div class=\"dropdown d-inline-block\">\r\n                        <button class=\"btn-drop text-left text-md-right\" type=\"button\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                          <span>\r\n                            <i class=\"ico-arrow-black\">\r\n\r\n                            </i>\r\n                          </span>\r\n                          <span>\r\n                            <strong>{{selectedLanguage.name}}</strong>\r\n                          </span>\r\n                        </button>\r\n\r\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\r\n                          <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"onLanguageChange(option.code)\"\r\n                             *ngFor=\"let option of languages; let i = index\">{{option.name}}</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <p class=\"list-info list-info-sort d-inline-block\">Sort list by clicking on a column title</p>\r\n                  <a href=\"https://www.oadlists.com/prior-lists\" class=\"list-info d-inline-block\">View prior years</a>\r\n\r\n                  <a *ngIf=\"getLegacyRestaurant()\" class=\"list-info d-inline-block\" href=\"/restaurant/{{legacyRestaurant.friendlyUrl}}\">Legacy restaurants</a>\r\n\r\n                  <button class=\"btn btn-outline-secondary btn-toggle-filter\" (click)=\"toggleFilters()\">{{isFiltersShown ? 'Hide filters' : 'Show filters'}}</button>\r\n                </div>\r\n                <div class=\"tabs__header-bottom\" [class.d-none]=\"!isFiltersShown\">\r\n                  <form (ngSubmit)=\"onFilterSubmit()\">\r\n                    <div class=\"row align-items-end\">\r\n                      <div class=\"col-6 col-lg\">\r\n                        <label for=\"filterName\">Name</label>\r\n                        <input id=\"filterName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"filterValues.name\" name=\"filterName\" />\r\n                      </div>\r\n                      <div class=\"col-6 col-lg\">\r\n                        <label for=\"filterChef\">Chef name</label>\r\n                        <input id=\"filterChef\" type=\"text\" class=\"form-control\" [(ngModel)]=\"filterValues.chef\" name=\"filterChef\" />\r\n                      </div>\r\n                      <div class=\"col-6 col-lg\">\r\n                        <label for=\"filterCuisine\">Cuisine type</label>\r\n                        <input id=\"filterCuisine\" type=\"text\" class=\"form-control\" [(ngModel)]=\"filterValues.cuisine\" name=\"filterCuisine\" />\r\n                      </div>\r\n                      <div class=\"col-6 col-lg\">\r\n                        <label for=\"filterCity\">City</label>\r\n                        <input id=\"filterCity\" type=\"text\" class=\"form-control\" [(ngModel)]=\"filterValues.location1\" name=\"location1\" />\r\n                      </div>\r\n                      <div class=\"col-6 col-lg\">\r\n                        <label for=\"filterCountry\">State/country</label>\r\n                        <input id=\"filterCountry\" type=\"text\" class=\"form-control\" [(ngModel)]=\"filterValues.location2\" name=\"location2\" />\r\n                      </div>\r\n                      <div class=\"col-auto\">\r\n                        <input class=\"btn btn-outline-secondary mb-1\" type=\"submit\" value=\"Search\" />\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <LIST3_FEATURED> -->\r\n          <!--<div *ngIf=\"listRestaurants3 && listRestaurants3.length\" class=\"container mb-5\">\r\n            <div class=\"section-details__body\">\r\n              <div class=\"tabs\">\r\n\r\n              </div>\r\n            </div>\r\n          </div>-->\r\n\r\n          <div *ngIf=\"listRestaurants3 && listRestaurants3.length > 1\" class=\"tabs__body mb-5\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <h2 *ngIf=\"listType\" class=\"border-{{listType.cssTag}}\">Legacy Restaurants</h2>\r\n              </div>\r\n            </div>\r\n            <ul *ngIf=\"listType && data\" class=\"list-filters list-filters--no-rank {{listType.cssTag}}\">\r\n\r\n              <!--<li class=\"text-center\" [ngClass]=\"{'current': selectedSortByFilter[2]===1}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(3, 1)\">rank</a>\r\n              </li>-->\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[2]===2}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(3, 2)\">name</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[2]===3}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(3, 3)\">chef name</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[2]===4}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(3, 4)\">cuisine type</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[2]===9}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(3, 9)\">{{data.location1}}</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[2]===10}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(3, 10)\">{{data.location2}}</a>\r\n              </li>\r\n            </ul>\r\n\r\n            <div class=\"tab list-view\">\r\n              <div class=\"row\" *ngIf=\"listRestaurants3 !== null && listRestaurants3.length && cardViewSelected && listType\">\r\n                <div class=\"col-12 col-sm-12 col-md-6\" *ngFor=\"let rest of listRestaurants3\">\r\n                  <div class=\"card-details-details card-details-details--no-rank\">\r\n                    <div class=\"card-details-body\">\r\n                      <!--<div class=\"card-details-content {{listType.cssTag}}\">\r\n                        <span *ngIf=\"rest.listRankTypeId == 8\" tooltip=\"Featured restaurant\" placement=\"top\">{{rest.listRankTypeCode}}</span>\r\n                      </div>-->\r\n                      <div class=\"card-details-entry\">\r\n                        <h3 class=\"card-details-title\" *ngIf=\"rest.friendlyUrl\">\r\n                          <a href=\"/restaurant/{{rest.friendlyUrl}}\" title=\"{{rest.name}}{{rest.openingStatusId == 4 ? ' (Chef change)' : ''}}{{rest.listRestaurantTypeId ? ' (' + rest.listRestaurantTypeName + ')' : ''}}\">{{rest.name}} <span *ngIf=\"rest.openingStatusId == 4\">(Chef change) </span> <span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label {{listType.cssTag}}\">({{rest.listRestaurantTypeName}})</span></a>\r\n                        </h3>\r\n                        <h3 class=\"card-details-title\" title=\"{{rest.name}}{{rest.openingStatusId == 4 ? ' (Chef change)' : ''}}{{rest.listRestaurantTypeId ? ' (' + rest.listRestaurantTypeName + ')' : ''}}\" *ngIf=\"!rest.friendlyUrl\">\r\n                          {{rest.name}} <span *ngIf=\"rest.openingStatusId == 4\">(Chef change) </span> <span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label {{listType.cssTag}}\">({{rest.listRestaurantTypeName}})</span>\r\n                        </h3>\r\n                        <div class=\"card-details-actions\">\r\n                          <a href=\"javascript:void(0);\">{{rest.chef}}</a>\r\n                        </div>\r\n                        <div class=\"card-details-actions\">\r\n                          <a href=\"javascript:void(0);\">\r\n                            <span>{{rest.cuisine}}</span>\r\n                          </a>\r\n                        </div>\r\n                        <p class=\"cityCountryP d-block d-md-none\">\r\n                          <ng-container *ngIf=\"rest.location1 != ''\">{{rest.location1}}</ng-container>\r\n                          <span *ngIf=\"rest.location2 != ''\"><ng-container *ngIf=\"rest.location1 != ''\">,</ng-container> {{rest.location2}}</span>\r\n                        </p>\r\n                        <p class=\"cityP d-none d-md-block\">{{rest.location1}}</p>\r\n\r\n                        <p class=\"countryP d-none d-md-block\">{{rest.location2}}</p>\r\n                        <div class=\"card-details-actions-mob\">\r\n                          <a href=\"javascript:void(0);\">{{rest.chef}}</a>\r\n                          <a href=\"javascript:void(0);\">\r\n                            <span>{{rest.cuisine}}</span>\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <img src=\"/images/loading.gif\" *ngIf=\"listRestaurants3 === null\" width=\"20\" />\r\n            </div>\r\n          </div>\r\n          <!-- </LIST3_FEATURED> -->\r\n\r\n\r\n          <!-- <LIST0> -->\r\n          <div *ngIf=\"listRestaurants0 && listRestaurants0.length\" class=\"tabs__body mb-5\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <h2 *ngIf=\"listType && listRestaurants0\" class=\"border-{{listType.cssTag}}\">Top {{listRestaurants0.length}} restaurants</h2>\r\n              </div>\r\n            </div>\r\n            <ul *ngIf=\"listType && data\" class=\"list-filters {{listType.cssTag}}\">\r\n\r\n              <li class=\"text-center\" [ngClass]=\"{'current': selectedSortByFilter[0]===1}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(0, 1)\">rank</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[0]===2}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(0, 2)\">name</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[0]===3}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(0, 3)\">chef name</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[0]===4}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(0, 4)\">cuisine type</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[0]===9}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(0, 9)\">{{data.location1}}</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[0]===10}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(0, 10)\">{{data.location2}}</a>\r\n              </li>\r\n            </ul>\r\n\r\n            <div class=\"tab list-view\">\r\n              <div class=\"row\" *ngIf=\"listRestaurants0 !== null && listRestaurants0.length && cardViewSelected && listType\">\r\n                <div class=\"col-12 col-sm-12 col-md-6\" *ngFor=\"let rest of listRestaurants0\">\r\n                  <div class=\"card-details-details\">\r\n                    <div class=\"card-details-body\">\r\n                      <div class=\"card-details-content {{listType.cssTag}}\">\r\n                        <span *ngIf=\"rest.listRankTypeId == 1\">{{rest.rank}}<span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label-asterisk {{listType.cssTag}}\">*</span></span>\r\n                        <span *ngIf=\"rest.listRankTypeId == 2\" tooltip=\"Highly recommended restaurant\" placement=\"top\">{{rest.listRankTypeCode}}<span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label-asterisk {{listType.cssTag}}\">*</span></span>\r\n                        <span *ngIf=\"rest.listRankTypeId == 3\" tooltip=\"Additional recommended restaurant\" placement=\"top\">{{rest.listRankTypeCode}}<span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label-asterisk {{listType.cssTag}}\">*</span></span>\r\n                      </div>\r\n                      <div class=\"card-details-entry\">\r\n                        <h3 class=\"card-details-title\" *ngIf=\"rest.friendlyUrl\">\r\n                          <a href=\"/restaurant/{{rest.friendlyUrl}}\" title=\"{{rest.name}}{{rest.openingStatusId == 4 ? ' (Chef change)' : ''}}{{rest.listRestaurantTypeId ? ' (' + rest.listRestaurantTypeName + ')' : ''}}\">{{rest.name}} <span *ngIf=\"rest.openingStatusId == 4\">(Chef change) </span> <span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label {{listType.cssTag}}\">({{rest.listRestaurantTypeName}})</span></a>\r\n                        </h3>\r\n                        <h3 class=\"card-details-title\" title=\"{{rest.name}}{{rest.openingStatusId == 4 ? ' (Chef change)' : ''}}{{rest.listRestaurantTypeId ? ' (' + rest.listRestaurantTypeName + ')' : ''}}\" *ngIf=\"!rest.friendlyUrl\">\r\n                          {{rest.name}} <span *ngIf=\"rest.openingStatusId == 4\">(Chef change) </span> <span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label {{listType.cssTag}}\">({{rest.listRestaurantTypeName}})</span>\r\n                        </h3>\r\n                        <p class=\"cityCountryP d-block d-md-none\">{{rest.location1}}<span *ngIf=\"rest.location2 != ''\">, {{rest.location2}}</span></p>\r\n                        <p class=\"cityP d-none d-md-block\">{{rest.location1}}</p>\r\n\r\n                        <p class=\"countryP d-none d-md-block\">{{rest.location2}}</p>\r\n\r\n                        <div class=\"card-details-actions\">\r\n                          <a href=\"javascript:void(0);\">{{rest.chef}}</a>\r\n\r\n                          <a href=\"javascript:void(0);\">\r\n                            <span>{{rest.cuisine}}</span>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"card-details-actions-mob\">\r\n                          <a href=\"javascript:void(0);\">{{rest.chef}}</a>\r\n\r\n                          <a href=\"javascript:void(0);\">\r\n                            <span>{{rest.cuisine}}</span>\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <!--<div class=\"row\" *ngIf=\"listRestaurants0 !== null && !listRestaurants0.length && !listType\">\r\n        <p>No restaurants found</p>\r\n      </div>-->\r\n              <img src=\"/images/loading.gif\" *ngIf=\"listRestaurants0 === null\" width=\"20\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- </LIST0> -->\r\n    <!-- <LIST1> class \"mt-5\" -->\r\n    <div *ngIf=\"listRestaurants1 && listRestaurants1.length\" class=\"container mb-5\">\r\n      <div class=\"section-details__body\">\r\n        <div class=\"tabs\">\r\n          <div class=\"tabs__body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <h2 *ngIf=\"listType\" class=\"border-{{listType.cssTag}}\">Highly recommended restaurants</h2>\r\n              </div>\r\n            </div>\r\n            <ul *ngIf=\"listType && data\" class=\"list-filters {{listType.cssTag}}\">\r\n\r\n              <li class=\"text-center\" [ngClass]=\"{'current': selectedSortByFilter[1]===1}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(1, 1)\">rank</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[1]===2}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(1, 2)\">name</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[1]===3}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(1, 3)\">chef name</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[1]===4}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(1, 4)\">cuisine type</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[1]===9}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(1, 9)\">{{data.location1}}</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[1]===10}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(1, 10)\">{{data.location2}}</a>\r\n              </li>\r\n            </ul>\r\n\r\n            <div class=\"tab list-view\">\r\n              <div class=\"row\" *ngIf=\"listRestaurants1 !== null && listRestaurants1.length && cardViewSelected && listType\">\r\n                <div class=\"col-12 col-sm-12 col-md-6\" *ngFor=\"let rest of listRestaurants1\">\r\n                  <div class=\"card-details-details\">\r\n                    <div class=\"card-details-body\">\r\n                      <div class=\"card-details-content {{listType.cssTag}}\">\r\n                        <span *ngIf=\"rest.listRankTypeId == 1\">{{rest.rank}}<span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label-asterisk {{listType.cssTag}}\">*</span></span>\r\n                        <span *ngIf=\"rest.listRankTypeId == 2\" tooltip=\"Highly recommended restaurant\" placement=\"top\">{{rest.listRankTypeCode}}</span>\r\n                        <span *ngIf=\"rest.listRankTypeId == 3\" tooltip=\"Additional recommended restaurant\" placement=\"top\">{{rest.listRankTypeCode}}</span>\r\n                      </div>\r\n                      <div class=\"card-details-entry\">\r\n                        <h3 class=\"card-details-title\" *ngIf=\"rest.friendlyUrl\">\r\n                          <a href=\"/restaurant/{{rest.friendlyUrl}}\" title=\"{{rest.name}}{{rest.openingStatusId == 4 ? ' (Chef change)' : ''}}{{rest.listRestaurantTypeId ? ' (' + rest.listRestaurantTypeName + ')' : ''}}\">{{rest.name}} <span *ngIf=\"rest.openingStatusId == 4\">(Chef change) </span> <span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label {{listType.cssTag}}\">({{rest.listRestaurantTypeName}})</span></a>\r\n                        </h3>\r\n                        <h3 class=\"card-details-title\" title=\"{{rest.name}}{{rest.openingStatusId == 4 ? ' (Chef change)' : ''}}{{rest.listRestaurantTypeId ? ' (' + rest.listRestaurantTypeName + ')' : ''}}\" *ngIf=\"!rest.friendlyUrl\">\r\n                          {{rest.name}} <span *ngIf=\"rest.openingStatusId == 4\">(Chef change) </span> <span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label {{listType.cssTag}}\">({{rest.listRestaurantTypeName}})</span>\r\n                        </h3>\r\n                        <p class=\"cityCountryP d-block d-md-none\">{{rest.location1}}<span *ngIf=\"rest.location2 != ''\">, {{rest.location2}}</span></p>\r\n                        <p class=\"cityP d-none d-md-block\">{{rest.location1}}</p>\r\n\r\n                        <p class=\"countryP d-none d-md-block\">{{rest.location2}}</p>\r\n\r\n                        <div class=\"card-details-actions\">\r\n                          <a href=\"javascript:void(0);\">{{rest.chef}}</a>\r\n\r\n                          <a href=\"javascript:void(0);\">\r\n                            <span>{{rest.cuisine}}</span>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"card-details-actions-mob\">\r\n                          <a href=\"javascript:void(0);\">{{rest.chef}}</a>\r\n\r\n                          <a href=\"javascript:void(0);\">\r\n                            <span>{{rest.cuisine}}</span>\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"listRestaurants1 !== null && !listRestaurants1.length && !listType\">\r\n                <p>No restaurants found</p>\r\n              </div>\r\n              <img src=\"/images/loading.gif\" *ngIf=\"listRestaurants1 === null\" width=\"20\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- </LIST1> -->\r\n    <!-- <LIST2> class \"mt-5\" -->\r\n    <div *ngIf=\"listRestaurants2 && listRestaurants2.length\" class=\"container\">\r\n      <div class=\"section-details__body\">\r\n        <div class=\"tabs\">\r\n          <div class=\"tabs__body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <h2 *ngIf=\"listType\" class=\"border-{{listType.cssTag}}\">Recommended restaurants</h2>\r\n              </div>\r\n            </div>\r\n            <ul *ngIf=\"listType && data\" class=\"list-filters {{listType.cssTag}}\">\r\n\r\n              <li class=\"text-center\" [ngClass]=\"{'current': selectedSortByFilter[2]===1}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(2, 1)\">rank</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[2]===2}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(2, 2)\">name</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[2]===3}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(2, 3)\">chef name</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[2]===4}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(2, 4)\">cuisine type</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[2]===9}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(2, 9)\">{{data.location1}}</a>\r\n              </li>\r\n\r\n              <li [ngClass]=\"{'current': selectedSortByFilter[2]===10}\">\r\n                <a href=\"javascript:void(0);\" (click)=\"onSortByChange(2, 10)\">{{data.location2}}</a>\r\n              </li>\r\n            </ul>\r\n\r\n            <div class=\"tab list-view\">\r\n              <div class=\"row\" *ngIf=\"listRestaurants2 !== null && listRestaurants2.length && cardViewSelected && listType\">\r\n                <div class=\"col-12 col-sm-12 col-md-6\" *ngFor=\"let rest of listRestaurants2\">\r\n                  <div class=\"card-details-details\">\r\n                    <div class=\"card-details-body\">\r\n                      <div class=\"card-details-content {{listType.cssTag}}\">\r\n                        <span *ngIf=\"rest.listRankTypeId == 1\">{{rest.rank}}<span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label-asterisk {{listType.cssTag}}\">*</span></span>\r\n                        <span *ngIf=\"rest.listRankTypeId == 2\" tooltip=\"Highly recommended restaurant\" placement=\"top\">{{rest.listRankTypeCode}}</span>\r\n                        <span *ngIf=\"rest.listRankTypeId == 3\" tooltip=\"Additional recommended restaurant\" placement=\"top\">{{rest.listRankTypeCode}}</span>\r\n                      </div>\r\n                      <div class=\"card-details-entry\">\r\n                        <h3 class=\"card-details-title\" *ngIf=\"rest.friendlyUrl\">\r\n                          <a href=\"/restaurant/{{rest.friendlyUrl}}\" title=\"{{rest.name}}{{rest.openingStatusId == 4 ? ' (Chef change)' : ''}}{{rest.listRestaurantTypeId ? ' (' + rest.listRestaurantTypeName + ')' : ''}}\">{{rest.name}} <span *ngIf=\"rest.openingStatusId == 4\">(Chef change) </span> <span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label {{listType.cssTag}}\">({{rest.listRestaurantTypeName}})</span></a>\r\n                        </h3>\r\n                        <h3 class=\"card-details-title\" title=\"{{rest.name}}{{rest.openingStatusId == 4 ? ' (Chef change)' : ''}}{{rest.listRestaurantTypeId ? ' (' + rest.listRestaurantTypeName + ')' : ''}}\" *ngIf=\"!rest.friendlyUrl\">\r\n                          {{rest.name}} <span *ngIf=\"rest.openingStatusId == 4\">(Chef change) </span> <span *ngIf=\"rest.listRestaurantTypeId\" class=\"new-label {{listType.cssTag}}\">({{rest.listRestaurantTypeName}})</span>\r\n                        </h3>\r\n                        <p class=\"cityCountryP d-block d-md-none\">{{rest.location1}}<span *ngIf=\"rest.location2 != ''\">, {{rest.location2}}</span></p>\r\n                        <p class=\"cityP d-none d-md-block\">{{rest.location1}}</p>\r\n\r\n                        <p class=\"countryP d-none d-md-block\">{{rest.location2}}</p>\r\n\r\n                        <div class=\"card-details-actions\">\r\n                          <a href=\"javascript:void(0);\">{{rest.chef}}</a>\r\n\r\n                          <a href=\"javascript:void(0);\">\r\n                            <span>{{rest.cuisine}}</span>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"card-details-actions-mob\">\r\n                          <a href=\"javascript:void(0);\">{{rest.chef}}</a>\r\n                          <a href=\"javascript:void(0);\">\r\n                            <span>{{rest.cuisine}}</span>\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"listRestaurants2 !== null && !listRestaurants2.length && !listType\">\r\n                <p>No restaurants found</p>\r\n              </div>\r\n              <img src=\"/images/loading.gif\" *ngIf=\"listRestaurants2 === null\" width=\"20\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- </LIST2> -->\r\n    <div class=\"container container--reviewer d-none d-md-block\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-12\">\r\n          <div class=\"reviewer-signup\">\r\n            <h2>Become a Reviewer</h2>\r\n            <a class=\"btn\" href=\"https://reviews.oadguides.com/register\">Join OAD</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/lists/detailsv2.component.ts":
/*!******************************************!*\
  !*** ./src/lists/detailsv2.component.ts ***!
  \******************************************/
/*! exports provided: DetailsV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsV2Component", function() { return DetailsV2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_new_version_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/new-version.service */ "./src/lists/services/new-version.service.ts");






var DetailsV2Component = /** @class */ (function () {
    function DetailsV2Component(_http, router, _lightbox, route, newVersionService) {
        this._http = _http;
        this.router = router;
        this._lightbox = _lightbox;
        this.route = route;
        this.newVersionService = newVersionService;
        this.continentFriendlyUrl = "europe";
        this.continent = null;
        this.lists = null;
        this.listTypes = [];
        this.languages = [];
        this.data = null;
        this.originalListRestaurants0 = null;
        this.filterValues = {
            name: '',
            chef: '',
            cuisine: '',
            location1: '',
            location2: ''
        };
        this.listRestaurants0 = null;
        this.listRestaurants1 = null;
        this.listRestaurants2 = null;
        this.listRestaurants3 = null;
        this.legacyRestaurant = null;
        this.selectedListId = 0;
        this.selectedList = null;
        this.selectedLanguage = {};
        this.cardViewSelected = true;
        this.isSticky = false;
        this.isScrollDown = false;
        this.isFiltersShown = false;
        this.yearFilter = [];
        this.selectedYear = 2021;
        this.sortByFilter = [
            { value: 1, displayName: "Rank", urlValue: 'rank' },
            { value: 2, displayName: "Restaurant", urlValue: 'restaurant' },
            { value: 3, displayName: "Chef", urlValue: 'chef' },
            { value: 4, displayName: "Cuisine", urlValue: 'cuisine' },
        ];
        this.selectedSortByFilter = [1, 1, 1];
        //let's keep this on default ascending sorting
        this.sortByDirection = 'ASC';
        this.listFriendlyUrl = 'top100';
        this.listType = null;
        this.mobile = false;
        this.previewGuid = null;
    }
    DetailsV2Component.prototype.checkScroll = function () {
        var headerHeight = document.getElementById("myHeader").offsetHeight;
        this.isSticky = window.pageYOffset >= headerHeight;
        this.startPosition = window.pageYOffset;
        var scroll = window.pageYOffset;
        if (scroll > this.currentPosition) {
            this.isScrollDown = true;
        }
        else {
            this.isScrollDown = false;
        }
        this.currentPosition = scroll;
    };
    DetailsV2Component.prototype.onResize = function (event) {
        //var $tabNavSlider = $('.tabs .tabs__nav ul');
        //var $win = $(window);
        //var tabNavSliderOptions = {
        //  dots: false,
        //  infinite: true,
        //  slidesToShow: 1,
        //  //slidesToScroll: 1,
        //  arrows: true,
        //  //autoplay: false,
        //  //speed: 500,
        //  //variableWidth: true
        //  adaptiveHeight: true,
        //  responsive: [
        //      {
        //          breakpoint: 768,
        //          settings: {
        //              slidesToShow: 1,
        //              infinite: true,
        //              dots: false
        //          }
        //      },
        //  ]
        //};
        //this.initSlider($tabNavSlider, tabNavSliderOptions);
        //$tabNavSlider.find('.slick-slide').on('click', function (event) {
        //  var $thisSlide = $(this);
        //  var thisIndex = $thisSlide.attr('data-slick-index');
        //  var $thisParent = $thisSlide.closest('.section-slider ul');
        //  var activeSlides = $thisParent.find('.slick-active').length;
        //  var goToSlide = thisIndex - activeSlides - 1;
        //  $tabNavSlider.slick('slickGoTo', goToSlide);
        //});
        /*
          this.destroySlider($tabNavSlider);
        }
        */
    };
    //initSlider($selector, options) {
    //  if ($selector.length && !$selector.hasClass('slick-initialized')) {
    //    $selector.slick(options);
    //  }
    //}
    /*
    destroySlider($selector) {
      if ($selector.length && $selector.hasClass('slick-initialized')) {
        $selector.slick('unslick');
      }
    }
    */
    DetailsV2Component.prototype.open = function (src) {
        // open lightbox
        //var albums = [
        //  {
        //    src: src.replace("82-102", "original"),
        //    thumb: src
        //  }];
        //this._lightbox.open(albums, 0);
    };
    DetailsV2Component.prototype.ngOnInit = function () {
        //since this is hard-coded and so can't be routed as "year" param from app-routing, this is a workaround
        //this.selectedYear = parseInt(this.route.snapshot.url[3].toString());
        var _this = this;
        //console.log("selectedYear", this.selectedYear);
        //console.log("route", this.route);
        //console.log("route.snapshot", this.route.snapshot);
        //console.log("route.queryParams", this.route.queryParams);
        //console.log("router", this.router);
        //this.route.queryParams.subscribe(params => {
        //  this.setQueryParams(params);
        //});
        this.route.params.subscribe(function (params) {
            _this.setRouteArgs(params);
        });
        this.newVersionService.getWebProjectPath().toPromise().then(function (path) {
            _this.webProjectPath = path;
        });
        //this.initSlick();
    };
    DetailsV2Component.prototype.setRouteArgs = function (params) {
        if (params) {
            this.selectedYear = +params.year;
            this.listFriendlyUrl = params.listType;
            this.continentFriendlyUrl = params.continent;
            if (params.previewGuid != undefined) {
                this.previewGuid = params.previewGuid;
            }
            //console.log("NEW COMPONENT (V2); selectedYear", this.selectedYear);
            //console.log("route", this.route);
            //console.log("route.snapshot", this.route.snapshot);
            //console.log("route.queryParams", this.route.queryParams);
            //console.log("router", this.router);
        }
        //if (params !== undefined && params !== null && params.year !== undefined) {
        //  this.selectedYear = +params.year;
        //  this.listFriendlyUrl = params.listType;
        //  this.continentFriendlyUrl = params.continent;
        //  if (params.previewGuid != undefined) {
        //    this.previewGuid = params.previewGuid;
        //  }
        //}
        this.getContinent();
    };
    /*initSlick() {
  
      var $slickElement = $('.slider__slides');
  
      if ($slickElement) {
  
        var $slideCount = $('.slideCount');
        var $currentSlideIndex = $('.currentSlide');
  
        //console.log("about to initialise $slickElement=,$slideCount=,$currentSlideIndex=", $slickElement, $slideCount, $currentSlideIndex);
  
        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $currentSlideIndex.text(i);
          $slideCount.text(' / ' + slick.slideCount);
        });
  
        $slickElement.slick({
          dots: false,
          infinite: true,
          slidesToShow: 1,
          arrows: true,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                infinite: true,
                dots: false
              }
            },
          ]
        });
  
      }
  
    }*/
    //setQueryParams(params) {
    //  if (params['sort'] !== undefined && params['sort'] !== null) {
    //    var sort = params["sort"];
    //    if (sort == 'city') {
    //      this.selectedSortByFilter = 9;
    //    }
    //    else {
    //      var filter = this.sortByFilter.filter((o) => {
    //        return (o.urlValue == sort);
    //      })[0]
    //      if (!filter) {
    //        this.selectedSortByFilter = 10;
    //      }
    //      else {
    //        this.selectedSortByFilter = filter.value;
    //      }      
    //    }
    //  }
    //  if (params["sortByDir"] !== undefined && params['sortByDir'] !== null) {    
    //    this.sortByDirection == params["sortByDir"];
    //  }
    ////  if (params["view"] !== undefined && params['sort'] !== null) {
    ////    var type = params["view"];
    ////    if (type === 'list') {
    ////      $('.tabs__sort-view .list').closest('.tabs').find('.tab').addClass('list-view');
    ////      $('.list-filters').removeClass('hidden');
    ////    }      
    ////  }
    ////  else {
    ////    $('.tabs__sort-view .list').closest('.tabs').find('.tab').removeClass('list-view');
    ////    $('.list-filters').addClass('hidden');
    ////  }
    //}
    DetailsV2Component.prototype.viewChanged = function (type) {
        this.router.navigate(['/lists/' + this.continentFriendlyUrl + '/' + this.listFriendlyUrl + '/' + this.selectedYear], {
            queryParams: {
                view: type === 'list' ? type : null
            }, queryParamsHandling: 'merge'
        });
    };
    DetailsV2Component.prototype.getContinent = function () {
        var _this = this;
        this._http.get("continent/getbyfriendlyurl/" + this.continentFriendlyUrl).toPromise().then(function (data) {
            _this.continent = data.json();
            //if (this.continent.name == "North America") {
            //  this.sortByFilter.push(
            //    { value: 8, displayName: "State", urlValue: 'state' },
            //  );
            //}
            _this.getListType();
        }).catch();
    };
    DetailsV2Component.prototype.getListType = function () {
        var _this = this;
        this._http.get("lists/GetListTypeByListFriendlyUrl/" + this.listFriendlyUrl).toPromise().then(function (data) {
            _this.listType = data.json();
            _this.getLanguages();
            _this.getLists();
        }).catch();
    };
    DetailsV2Component.prototype.onLanguageChange = function (languageId) {
        //this.router.navigate(['/lists/' + this.continentFriendlyUrl + '/' + this.listFriendlyUrl + '/' + this.selectedYear],
        //  {
        //    queryParams: {
        //      lang: languageId
        //    }, queryParamsHandling: 'merge'
        //  });
        window.location.href = window.location.pathname + "?lang=" + languageId;
    };
    DetailsV2Component.prototype.getLists = function () {
        var _this = this;
        this.lists = null;
        this._http.get("/lists/getpublishedtypesbycontinent/" + this.continent.id).toPromise().then(function (data) {
            _this.listTypes = data.json().filter(function (x) {
                return x.isSpeciality === _this.listType.isSpeciality;
            });
        });
        this._http.get("lists/getAllByContinentIdAndSpeciality/" + this.continent.id + "/" + this.listType.isSpeciality).toPromise().then(function (data) {
            _this.lists = data.json();
            _this.selectedListId = 0;
            //console.log("this.lists=", this.lists);
            var filteredList = _this.lists.filter(function (o) {
                return (o.year == _this.selectedYear && o.continentId == _this.continent.id
                    && o.listTypeId == _this.listType.id);
            });
            //console.log("filteredList", filteredList);
            var listsWithinContinentAndType = _this.lists.filter(function (o) {
                return (o.continentId == _this.continent.id
                    && o.listTypeId == _this.listType.id && o.isPublished);
            });
            //console.log("listsWithinContinentAndType", listsWithinContinentAndType);
            if (listsWithinContinentAndType.length > 1) {
                _this.yearFilter = [];
                for (var i = 0; i < listsWithinContinentAndType.length; i++) {
                    _this.yearFilter.push({ value: listsWithinContinentAndType[i].year, name: listsWithinContinentAndType[i].year.toString() });
                }
                _this.yearFilter = _this.yearFilter.sort(function (obj1, obj2) {
                    if (obj1.value > obj2.value) {
                        return -1;
                    }
                    if (obj1.value < obj2.value) {
                        return 1;
                    }
                    return 0;
                });
            }
            if (filteredList !== undefined && filteredList[0] !== undefined) {
                _this.selectedListId = filteredList[0].id;
                _this.selectedList = filteredList[0];
                //console.log("this.selectedList=", this.selectedList);
            }
            _this.getListRestaurants(_this.selectedListId);
            setTimeout(function () {
                _this.onResize(null);
            }, 5);
        }).catch();
    };
    DetailsV2Component.prototype.getLanguages = function () {
        var _this = this;
        this._http.get("/languages").toPromise().then(function (data) {
            _this.languages = data.json();
            _this.selectedLanguage = _this.languages.find(function (x) { return x.selected; });
        });
    };
    DetailsV2Component.prototype.onYearFilterChange = function (value) {
        this.selectedYear = value;
        //this.getListRestaurants(this.selectedListId);
        this.router.navigate(['/lists/' + this.continentFriendlyUrl + '/' + this.listFriendlyUrl + '/' + this.selectedYear]);
    };
    DetailsV2Component.prototype.onSortByChange = function (listRankTypeIndex, value) {
        this.selectedSortByFilter[listRankTypeIndex] = value;
        if ($(".sortClose").is(":visible")) {
            $(".sortClose").click();
        }
        var url = '/lists/' + this.continentFriendlyUrl + '/' + this.listFriendlyUrl + '/' + this.selectedYear;
        if (this.previewGuid != undefined && this.previewGuid != null) {
            url += "/" + this.previewGuid.toString();
        }
        //this.router.navigate([url],
        //  {
        //    queryParams: {
        //      sort: this.sortByFilter.filter((o) => {
        //        return (o.value == this.selectedSortByFilter);
        //      })[0].urlValue,
        //      sortByDir: this.sortByDirection === "ASC" ? null : this.sortByDirection
        //    }, queryParamsHandling: 'merge'
        //  });
        this.sort(listRankTypeIndex);
    };
    DetailsV2Component.prototype.sort = function (listRankTypeIndex) {
        var list = this.listRestaurants0;
        switch (listRankTypeIndex) {
            case 1:
                list = this.listRestaurants1;
                break;
            case 2:
                list = this.listRestaurants2;
                break;
            case 3:
                list = this.listRestaurants3;
                break;
        }
        //rank (in fact, let's use display order as returned originally from SP - the reason being, HR's and R's may have a certain ranking, but we're overriding
        //it via search by grouping by country>city>name in each group regardless of a potential value of rank)
        if (this.selectedSortByFilter[listRankTypeIndex] == 1) {
            //console.log("sorting by rank..");
            list = list.sort(function (obj1, obj2) {
                if (obj1.displayOrder > obj2.displayOrder) {
                    return 1;
                }
                if (obj1.displayOrder < obj2.displayOrder) {
                    return -1;
                }
                return 0;
            });
        }
        //name
        if (this.selectedSortByFilter[listRankTypeIndex] == 2) {
            //console.log("sorting by name..");
            list = list.sort(function (obj1, obj2) {
                if (obj1.name > obj2.name) {
                    return 1;
                }
                if (obj1.name < obj2.name) {
                    return -1;
                }
                return 0;
            });
        }
        //chef
        if (this.selectedSortByFilter[listRankTypeIndex] == 3) {
            list = list.sort(function (obj1, obj2) {
                if (obj1.chef > obj2.chef) {
                    return 1;
                }
                if (obj1.chef < obj2.chef) {
                    return -1;
                }
                return 0;
            });
        }
        //cuisine
        if (this.selectedSortByFilter[listRankTypeIndex] == 4) {
            list = list.sort(function (obj1, obj2) {
                if (obj1.cuisine > obj2.cuisine) {
                    return 1;
                }
                if (obj1.cuisine < obj2.cuisine) {
                    return -1;
                }
                return 0;
            });
        }
        //city
        if (this.selectedSortByFilter[listRankTypeIndex] == 6) {
            list = list.sort(function (obj1, obj2) {
                if (obj1.city > obj2.city) {
                    return 1;
                }
                if (obj1.city < obj2.city) {
                    return -1;
                }
                if (obj1.rank > obj2.rank) {
                    return 1;
                }
                if (obj1.rank < obj2.rank) {
                    return -1;
                }
                return 0;
            });
        }
        //country
        if (this.selectedSortByFilter[listRankTypeIndex] == 7 || this.selectedSortByFilter[listRankTypeIndex] == 5) {
            list = list.sort(function (obj1, obj2) {
                if (obj1.country > obj2.country) {
                    return 1;
                }
                if (obj1.country < obj2.country) {
                    return -1;
                }
                if (obj1.state > obj2.state) {
                    return 1;
                }
                if (obj1.state < obj2.state) {
                    return -1;
                }
                if (obj1.city > obj2.city) {
                    return 1;
                }
                if (obj1.city < obj2.city) {
                    return -1;
                }
                if (obj1.rank > obj2.rank) {
                    return 1;
                }
                if (obj1.rank < obj2.rank) {
                    return -1;
                }
                return 0;
            });
        }
        //region
        if (this.selectedSortByFilter[listRankTypeIndex] == 8) {
            list = list.sort(function (obj1, obj2) {
                if (obj1.state > obj2.state) {
                    return 1;
                }
                if (obj1.state < obj2.state) {
                    return -1;
                }
                if (obj1.rank > obj2.rank) {
                    return 1;
                }
                if (obj1.rank < obj2.rank) {
                    return -1;
                }
                return 0;
            });
        }
        //location1
        if (this.selectedSortByFilter[listRankTypeIndex] == 9) {
            list = list.sort(function (obj1, obj2) {
                if (obj1.location1 > obj2.location1) {
                    return 1;
                }
                if (obj1.location1 < obj2.location1) {
                    return -1;
                }
                if (obj1.rank > obj2.rank) {
                    return 1;
                }
                if (obj1.rank < obj2.rank) {
                    return -1;
                }
                return 0;
            });
        }
        //location2
        if (this.selectedSortByFilter[listRankTypeIndex] == 10) {
            list = list.sort(function (obj1, obj2) {
                if (obj1.location2 > obj2.location2) {
                    return 1;
                }
                if (obj1.location2 < obj2.location2) {
                    return -1;
                }
                if (obj1.rank > obj2.rank) {
                    return 1;
                }
                if (obj1.rank < obj2.rank) {
                    return -1;
                }
                return 0;
            });
        }
    };
    DetailsV2Component.prototype.listTypeChange = function (friendlyUrl) {
        this.listFriendlyUrl = friendlyUrl;
        this.router.navigate(['/lists/' + this.continentFriendlyUrl + '/' + this.listFriendlyUrl + '/' + this.selectedYear]);
    };
    DetailsV2Component.prototype.getListRestaurants = function (id) {
        var _this = this;
        this.selectedListId = id;
        this.listRestaurants0 = null;
        this.listRestaurants1 = null;
        this.listRestaurants2 = null;
        this.listRestaurants3 = null;
        var postData = {
            ListId: this.selectedListId,
            Year: this.selectedYear,
            SortByDirection: this.sortByDirection,
            SortBy: this.selectedSortByFilter[0],
            PreviewGuid: this.previewGuid
        };
        if (this.selectedListId !== 0) {
            this._http.post("/lists/getrestaurantsbylistIdAndYear", JSON.stringify(postData), { headers: new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' }) }).toPromise()
                .then(function (data) {
                _this.data = data.json();
                _this.listRestaurants0 = _this.data.data0;
                _this.listRestaurants1 = _this.data.data1;
                _this.listRestaurants2 = _this.data.data2;
                _this.listRestaurants3 = _this.data.data3;
                _this.sortByFilter.push({ value: 9, displayName: _this.data.location1, urlValue: _this.data.location1.replace(" ", "").replace(" ", "").replace("/", "-").toLowerCase() }, { value: 10, displayName: _this.data.location2, urlValue: _this.data.location2.replace(" ", "").replace(" ", "").replace("/", "-").toLowerCase() });
            }).catch();
        }
        else {
            this.listRestaurants0 = [];
            this.listRestaurants1 = [];
            this.listRestaurants2 = [];
            this.listRestaurants3 = [];
        }
    };
    DetailsV2Component.prototype.getLegacyRestaurant = function () {
        if (this.listRestaurants3 && this.listRestaurants3.length == 1) {
            this.legacyRestaurant = this.listRestaurants3[0];
        }
        else {
            this.legacyRestaurant = null;
        }
        return this.legacyRestaurant;
    };
    DetailsV2Component.prototype.getRestaurantUrl = function (friendlyUrl) {
        //return `${this.webProjectPath}restaurant/${friendlyUrl}`;
        return "/restaurant/" + friendlyUrl;
    };
    DetailsV2Component.prototype.toggleFilters = function () {
        this.isFiltersShown = !this.isFiltersShown;
    };
    DetailsV2Component.prototype.onFilterSubmit = function () {
        var _this = this;
        if (!this.originalListRestaurants0) {
            this.originalListRestaurants0 = this.listRestaurants0.slice();
        }
        this.listRestaurants0 = this.originalListRestaurants0.filter(function (item) {
            return (!_this.filterValues.name || item.name.toLowerCase().includes(_this.filterValues.name.toLowerCase()))
                && (!_this.filterValues.chef || item.chef.toLowerCase().includes(_this.filterValues.chef.toLowerCase()))
                && (!_this.filterValues.cuisine || item.cuisine.toLowerCase().includes(_this.filterValues.cuisine.toLowerCase()))
                && (!_this.filterValues.location1 || item.location1.toLowerCase().includes(_this.filterValues.location1.toLowerCase()))
                && (!_this.filterValues.location2 || item.location2.toLowerCase().includes(_this.filterValues.location2.toLowerCase()));
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DetailsV2Component.prototype, "checkScroll", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DetailsV2Component.prototype, "onResize", null);
    DetailsV2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./detailsv2.component.html */ "./src/lists/detailsv2.component.html"),
            styles: [__webpack_require__(/*! ./detailsv2.component.css */ "./src/lists/detailsv2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["Lightbox"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_new_version_service__WEBPACK_IMPORTED_MODULE_5__["NewVersionService"]])
    ], DetailsV2Component);
    return DetailsV2Component;
}());



/***/ }),

/***/ "./src/lists/services/new-version.service.ts":
/*!***************************************************!*\
  !*** ./src/lists/services/new-version.service.ts ***!
  \***************************************************/
/*! exports provided: NewVersionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVersionService", function() { return NewVersionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var NewVersionService = /** @class */ (function () {
    function NewVersionService(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.apiUrl = 'baseConfig/webProjectPath'; // Define your API endpoint here
    }
    NewVersionService.prototype.getWebProjectPath = function () {
        return this.http.get(this.apiUrl);
    };
    NewVersionService.prototype.canActivate = function (route, state) {
        var year = parseInt(route.params.year);
        var isNewVersion = year >= 2021;
        return isNewVersion;
    };
    NewVersionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], NewVersionService);
    return NewVersionService;
}());



/***/ }),

/***/ "./src/lists/services/old-version.service.ts":
/*!***************************************************!*\
  !*** ./src/lists/services/old-version.service.ts ***!
  \***************************************************/
/*! exports provided: OldVersionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldVersionService", function() { return OldVersionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var OldVersionService = /** @class */ (function () {
    function OldVersionService(router, route) {
        this.router = router;
        this.route = route;
    }
    OldVersionService.prototype.canActivate = function (route, state) {
        console.log("OldVersionService -> ActivatedRouteSnapshot -> route=", route);
        var year = parseInt(route.params.year);
        console.log(year);
        var isOldVersion = year < 2021;
        return isOldVersion;
    };
    OldVersionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OldVersionService);
    return OldVersionService;
}());



/***/ }),

/***/ "./src/main-lists.ts":
/*!***************************!*\
  !*** ./src/main-lists.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _lists_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists/app.module */ "./src/lists/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_lists_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/pipes/new-line.pipe.ts":
/*!************************************!*\
  !*** ./src/pipes/new-line.pipe.ts ***!
  \************************************/
/*! exports provided: PipeNewLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeNewLine", function() { return PipeNewLine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/*
DESCRIPTION::
-> a custom "pipe" that replaces \r and \n with <br /> -> used for displaying multi-line texts in read-only pages

EXAMPLE USAGE::
-> diningguidedetails/details.component.html
This syntax doesn't work because <br /> is decoded and displayed literally:
<p class="d-none d-lg-block" style="width:unset;">{{region.primaryDescription | newLine}}</p>
So use this one:
<p class="d-none d-lg-block" style="width:unset;" [innerHTML]="region.primaryDescription | newLine"></p>

FURTHER READ::
-> default in-built pipes:
https://medium.com/front-end-weekly/angular-2-let-s-talk-about-pipes-ng-filter-in-angular-1-f46319edaf73
json, slice:[startIndex]:[numberOfChars], uppercase, lowercase, number[:digitInfo], percent, date[:displayFormat], async, currency:'[CURR_CODE]'

<p>{{ dateOfBirthday | date:'ddMMyyyy' }}</p><!-- will display '13/06/1985' -->
<p>{{ dateOfBirthday | date:'longDate' }}</p><!-- will display 'June 13, 1985' -->
<p>{{ dateOfBirthday | date:'HHmmss' }}</p><!-- will display '03:45:15' -->
<p>{{ dateOfBirthday | date:'shortTime' }}</p><!-- will display '03:45 AM' -->

<p>{{ 51.5 | currency:'EUR' }}</p><! — will display 'EUR51.5' →
<p>{{ 51.5 | currency:'USD':true }}</p><! — will display '$51.5' →
<p>{{ 51.5 | currency:'USD':true:'.2' }}</p><! — will display '$51.50' →

-> creating custom pipes (add ref to app.module.ts to make it globally accessible in all .html component templates)
https://scotch.io/tutorials/create-a-globally-available-custom-pipe-in-angular-2
https://stackoverflow.com/questions/42576420/how-to-declare-a-pipe-globally-to-use-in-different-modules
https://medium.com/@riccardopolacci/angular-custom-pipes-best-practices-3de9ca77f01b
https://www.concretepage.com/angular-2/angular-2-custom-pipe-example
https://www.oodlestechnologies.com/blogs/How-to-share-component-to-multiple-modules-in-Angular2/

*/
var PipeNewLine = /** @class */ (function () {
    function PipeNewLine() {
    }
    PipeNewLine.prototype.transform = function (value) {
        //transform(value: any, [arg1, arg2, ...]): any {
        if (!value || !value.length) {
            return value;
        }
        //value = value.replace(/(\r\n)/gmi, '<br />');
        //value = value.replace(/([\r\n])/gmi, '<br />');
        //return value;
        return value.replace(/(\r\n)|([\r\n])/gmi, '<br />');
    };
    PipeNewLine = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'newLine'
        })
    ], PipeNewLine);
    return PipeNewLine;
}());



/***/ }),

/***/ "./src/pipes/safe.pipe.ts":
/*!********************************!*\
  !*** ./src/pipes/safe.pipe.ts ***!
  \********************************/
/*! exports provided: Safe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Safe", function() { return Safe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");

//our root app component


var Safe = /** @class */ (function () {
    function Safe(sanitizer) {
        this.sanitizer = sanitizer;
        this.sanitizer = sanitizer;
    }
    Safe.prototype.transform = function (value, type) {
        if (value == null) {
            return "";
        }
        value = value.replace('"', "").replace('"', "");
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle('url(' + value + ')');
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    Safe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], Safe);
    return Safe;
}());



/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/main-lists.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\repos\webigence\opinionated\Opinionated\Portals\Opinionated.PublicSiteNewBeta\ClientApp\src\main-lists.ts */"./src/main-lists.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map