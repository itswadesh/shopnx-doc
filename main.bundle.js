webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  height: 100vh;\n}\n\n.sidenav {\n  width:300px;\n}\n.active-link {\n  color: #03a9f4;\n}\n\n.z2 {\n      box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n.sidenav-content{\n  margin-left:15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <button type=\"button\" md-icon-button (click)=\"sidenav.toggle()\">\n    <md-icon>menu</md-icon>\n  </button>\n  <h1>Documentation: ShopNx</h1>\n</md-toolbar>\n<md-sidenav-container class=\"container\">\n  <md-sidenav #sidenav class=\"sidenav z2\" mode=\"side\" opened=\"true\">\n    <md-nav-list>\n      <h3 md-subheader>Installation</h3>\n      <md-divider></md-divider>\n      <md-list-item routerLink=\"/\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n            <md-icon md-menu-align-target>computer</md-icon>\n            Step-1. Start\n          </button>\n      </md-list-item>\n\n      <h3 md-subheader>Settings</h3>\n      <md-divider></md-divider>\n      <md-list-item routerLink=\"/settings/environment\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n              <md-icon md-menu-align-target>perm_data_setting</md-icon>\n              Environment Settings\n            </button>\n      </md-list-item>\n      <md-list-item routerLink=\"/settings/client\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n              <md-icon md-menu-align-target>settings_applications</md-icon>\n              Client Settings\n            </button>\n      </md-list-item>\n      <md-list-item routerLink=\"/settings/server\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n              <md-icon md-menu-align-target>settings_applications</md-icon>\n              Server Settings\n            </button>\n      </md-list-item>\n\n      <h3 md-subheader>Usage</h3>\n      <md-divider></md-divider>\n      <md-list-item routerLink=\"/usage/use\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n              <md-icon md-menu-align-target>mouse</md-icon>\n              Usage\n            </button>\n      </md-list-item>\n\n      <h3 md-subheader>Features</h3>\n      <md-divider></md-divider>\n      <md-list-item routerLink=\"/features/new\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n          <md-icon md-menu-align-target>trending_up</md-icon>\n          Features\n        </button>\n      </md-list-item>\n      <md-list-item routerLink=\"/features/front\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n          <md-icon md-menu-align-target>picture_in_picture</md-icon>\n          Font Office Features\n        </button>\n      </md-list-item>\n      <md-list-item routerLink=\"/features/back\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n          <md-icon md-menu-align-target>local_shipping</md-icon>\n          Back Office Features\n        </button>\n      </md-list-item>\n      <md-list-item routerLink=\"/features/future\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n          <md-icon md-menu-align-target>hourglass_full</md-icon>\n          Future Plan\n        </button>\n      </md-list-item>\n\n\n      <h3 md-subheader>Project Overview</h3>\n      <md-divider></md-divider>\n      <md-list-item routerLink=\"/overview/root\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n              <md-icon md-menu-align-target>merge_type</md-icon>\n              Project Root\n            </button>\n      </md-list-item>\n      <md-list-item routerLink=\"/overview/client\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n              <md-icon md-menu-align-target>developer_mode</md-icon>\n              Client\n            </button>\n      </md-list-item>\n\n      <md-list-item routerLink=\"/overview/server\" routerLinkActive=\"active-link\">\n        <button md-icon-button>\n              <md-icon md-menu-align-target>phonelink</md-icon>\n              Server\n            </button>\n      </md-list-item>\n\n    </md-nav-list>\n  </md-sidenav>\n  <div class=\"sidenav-content\">\n    <router-outlet></router-outlet>\n  </div>\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__installation_installation_component__ = __webpack_require__("../../../../../src/app/installation/installation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usage_usage_component__ = __webpack_require__("../../../../../src/app/usage/usage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__overview_client_client_component__ = __webpack_require__("../../../../../src/app/overview/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__overview_server_server_component__ = __webpack_require__("../../../../../src/app/overview/server/server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_client_client_component__ = __webpack_require__("../../../../../src/app/settings/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings_server_server_component__ = __webpack_require__("../../../../../src/app/settings/server/server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__features_features_component__ = __webpack_require__("../../../../../src/app/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings_environment_environment_component__ = __webpack_require__("../../../../../src/app/settings/environment/environment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__features_front_front_component__ = __webpack_require__("../../../../../src/app/features/front/front.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__features_back_back_component__ = __webpack_require__("../../../../../src/app/features/back/back.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__features_future_future_component__ = __webpack_require__("../../../../../src/app/features/future/future.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_prismjs_prism__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_prismjs_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_prismjs_prism__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_prismjs_components_prism_typescript__ = __webpack_require__("../../../../prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_prismjs_components_prism_typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular_prism__ = __webpack_require__("../../../../angular-prism/dist/angular-prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular_prism__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















/* Import prism core */

/* Import the language you need to highlight */


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__installation_installation_component__["a" /* InstallationComponent */], data: { title: 'Installation' } },
    { path: 'overview/root', component: __WEBPACK_IMPORTED_MODULE_8__overview_overview_component__["a" /* OverviewComponent */], data: { title: 'Overview' } },
    { path: 'overview/client', component: __WEBPACK_IMPORTED_MODULE_9__overview_client_client_component__["a" /* OverviewClientComponent */], data: { title: 'Client' } },
    { path: 'overview/server', component: __WEBPACK_IMPORTED_MODULE_10__overview_server_server_component__["a" /* OverviewServerComponent */], data: { title: 'Server' } },
    { path: 'settings/environment', component: __WEBPACK_IMPORTED_MODULE_15__settings_environment_environment_component__["a" /* EnvironmentComponent */], data: { title: 'Environment' } },
    { path: 'settings/client', component: __WEBPACK_IMPORTED_MODULE_12__settings_client_client_component__["a" /* ClientComponent */], data: { title: 'Client' } },
    { path: 'settings/server', component: __WEBPACK_IMPORTED_MODULE_13__settings_server_server_component__["a" /* ServerComponent */], data: { title: 'Server' } },
    { path: 'usage/use', component: __WEBPACK_IMPORTED_MODULE_6__usage_usage_component__["a" /* UsageComponent */], data: { title: 'Usage' } },
    { path: 'features/new', component: __WEBPACK_IMPORTED_MODULE_14__features_features_component__["a" /* FeaturesComponent */], data: { title: 'Features' } },
    { path: 'features/front', component: __WEBPACK_IMPORTED_MODULE_16__features_front_front_component__["a" /* FrontComponent */], data: { title: 'Features: Front Office' } },
    { path: 'features/back', component: __WEBPACK_IMPORTED_MODULE_17__features_back_back_component__["a" /* BackComponent */], data: { title: 'Features: Back Office' } },
    { path: 'features/future', component: __WEBPACK_IMPORTED_MODULE_18__features_future_future_component__["a" /* FutureComponent */], data: { title: 'Features: Future' } },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__installation_installation_component__["a" /* InstallationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__usage_usage_component__["a" /* UsageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__overview_client_client_component__["a" /* OverviewClientComponent */],
                __WEBPACK_IMPORTED_MODULE_10__overview_server_server_component__["a" /* OverviewServerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__settings_client_client_component__["a" /* ClientComponent */],
                __WEBPACK_IMPORTED_MODULE_13__settings_server_server_component__["a" /* ServerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__features_features_component__["a" /* FeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__settings_environment_environment_component__["a" /* EnvironmentComponent */],
                __WEBPACK_IMPORTED_MODULE_16__features_front_front_component__["a" /* FrontComponent */],
                __WEBPACK_IMPORTED_MODULE_17__features_back_back_component__["a" /* BackComponent */],
                __WEBPACK_IMPORTED_MODULE_18__features_future_future_component__["a" /* FutureComponent */],
                __WEBPACK_IMPORTED_MODULE_21_angular_prism__["PrismComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["f" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["h" /* MdCoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/features/back/back.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/back/back.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Back Office Fearures</h2>\n<div class=\"row\">\n  <md-card *ngFor=\"let f of storeBackFeatures\">\n    <md-card-title> {{f.h2}} </md-card-title>\n    <md-card-subtitle>{{f.p}}</md-card-subtitle>\n  </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/back/back.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackComponent = (function () {
    function BackComponent() {
    }
    BackComponent.prototype.ngOnInit = function () {
        this.storeBackFeatures = [
            { h2: 'Manage Backoffice', p: 'Products, Categories, Brand, Order Management from admin panel with easy directives' },
            { h2: 'Order Management', p: 'Manage Order and Change Status from admin panel' },
            { h2: 'Product Variants', p: 'Facility for Multiple product variants (size, color, price, image)' },
            { h2: 'User roles', p: '- Administrator, User, Manager' },
            { h2: 'Quality Code', p: 'Secure and quality code - Takes care all single page web app standards' },
            { h2: 'Secure', p: 'Securely built and prevent security attacks' },
            { h2: 'CRUD Generator', p: 'Generates CRUD(Create, Read, Update, Delete) pages automatically from database.' },
            { h2: 'ReST API', p: 'NodeJS based ReST API architecture' },
            { h2: 'Date picker', p: 'Integrated material designed date picker for date fields' },
            { h2: 'Modular Code', p: 'Code is Modular, Maintainable, Well Structured, Easy to customize, Production Ready' },
            { h2: 'HTML Components Generator', p: 'Automatically generates dropdowns, datepickers, number field, toggle switch based on field types' },
            { h2: 'Exportable', p: 'Easily export the table as Excel, JSON, txt format' }
        ];
    };
    BackComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-back',
            template: __webpack_require__("../../../../../src/app/features/back/back.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/back/back.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackComponent);
    return BackComponent;
}());

//# sourceMappingURL=back.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/features.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/features.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Features Overview</h2>\n<div class=\"row\">\n  <md-card *ngFor=\"let f of newFeatures\">\n    <md-card-title> {{f.h2}} </md-card-title>\n    <md-card-subtitle>{{f.p}}</md-card-subtitle>\n  </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
        this.topFeatures = [
            { h: 'PayPal Shopping Cart', p: 'Enter your paypal app ID into settings, add products and start selling with no matter of time. This has got inbuilt multi currency support with curency conversion feature', i: 'assets/images/paypal.png' },
            { h: 'MEAN Stack', p: 'Developed using the most popular MEAN(MongoDB + Express + Angular + Node) which has a RestAPI based architecture with high scallability.', i: 'assets/images/mean.png' },
            { h: 'Authentication', p: 'Inbuilt authentication mechanism with role based user access and user management', i: 'assets/images/user-roles.png' },
            { h: 'Material Design', p: 'Most of the components are based on Google Material designe guidelines which gives you a responsive, bold and accessible design with great amount of user interactivity', i: 'assets/images/material-design.png' },
            { h: 'Emails', p: 'Integration of emails at diffent levels like Order Placement, Forgot/Reset password gives a secure as well as informative feeling', i: 'assets/images/email.png' },
            { h: 'Modular Code', p: 'The modular application structure gives you enormous ability to modify, test and deploy easily', i: 'assets/images/code.png' },
            { h: 'Multivendor', p: 'Support for multiple vendors where each vendor will have their own profile to mange their orders', i: 'assets/images/code.png' }
        ];
        this.why = [
            { h: 'Drag and drop category selection', i: 'playlist_add', c: 'fill: #FF5722' },
            { h: 'AngularJS Shopping Cart', i: 'shopping_basket', c: 'fill:#DE140E' },
            { h: 'Local + OAUTH login', i: 'lock_outline', c: 'fill: #2196F3' },
            { h: 'Email integration', i: 'email', c: 'fill: #FABD0E' },
            { h: 'PayPal Checkout', i: 'account_balance_wallet', c: 'fill: #795548' },
            { h: 'Material Design', i: 'devices', c: 'fill: #ab47bc' },
            { h: 'CRUD Generator', i: 'settings', c: 'fill: #3949ab' },
            { h: 'Image uploader', i: 'collections', c: 'fill: #8bc34a' },
            { h: 'ReST API based backend', i: 'http', c: 'fill: #26a69a' }
        ];
        this.newFeatures = [
            { h2: 'Reviews', p: 'Product Reviews and Comments' },
            { h2: 'Ratings', p: 'Product Ratings feature' },
            { h2: 'Coupons', p: 'Ability yo manage discount coupons on cart total', i: 'settings' },
            { h2: 'Media Management', p: 'With integrated drag and drop image upload its easy to manage the images for the whole shop' },
            { h2: 'NodeJS Module', p: 'ES6 module structure for serve side programming.' },
            { h2: 'Order Management', p: 'PayPal integration with orders' },
            { h2: 'User Roles', p: 'Role based user management for both client and server side e.g. User, Manager, Administrator' },
            { h2: 'Email Integration', p: 'Now an email is sent as soon as a order is placed or payment failed' },
            { h2: 'Material Design', p: 'Mobile Centered Material Designed components with accessibility support' },
            { h2: 'New Design Principle', p: 'Flex based page design principle' },
            { h2: 'CRUD Table', p: 'Free Material CRUD Table module comes with this Material Shop' },
            { h2: 'Image Selector', p: 'Directly select image for a product from the media gallery' },
            { h2: 'Cloning', p: 'Now Clone any brand, country, shipping, coupon to save time' },
            { h2: 'Multi Level Category', p: 'Drag and drop category management upto 10 levels' },
            { h2: 'Multi Currency', p: 'Support for additional currencies beyond US Dollars from a single settings page' },
            { h2: 'Forgot Password', p: 'Forgotten password of a user or shop manager can be retrieved with a encryption based email service' },
            { h2: 'Contact Page', p: 'A tiny little popup window for anybody to reach the store owner with any grievance or suggestions' },
            { h2: 'PayPal', p: 'Now PayPal integration is more powerful with the managed payment status' },
            { h2: 'Search', p: 'Instant product search.' }
        ];
    };
    FeaturesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-features',
            template: __webpack_require__("../../../../../src/app/features/features.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/features.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());

//# sourceMappingURL=features.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/front/front.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/front/front.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Front Office Features</h2>\n<div class=\"row\">\n  <md-card *ngFor=\"let f of storeFrontFeatures\">\n    <md-card-title> {{f.h2}} </md-card-title>\n    <md-card-subtitle>{{f.p}}</md-card-subtitle>\n  </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/front/front.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrontComponent = (function () {
    function FrontComponent() {
    }
    FrontComponent.prototype.ngOnInit = function () {
        this.storeFrontFeatures = [
            { h2: 'MEAN', p: 'The MEAN Stack ecommerce with Material Design' },
            { h2: 'AngularJS', p: 'A whole ecommerce application created using AngularJS as front end' },
            { h2: 'NodeJS', p: 'The backend (server side) is backed with the awesome NodeJS framework for better speed and wide extensions support with a very large community base' },
            { h2: 'MongoDB', p: 'The document based No_SQL database used for faster communication and more efficiency' },
            { h2: 'Modular', p: 'Industry standard application module structure' },
            { h2: 'Single Page', p: 'SPA(Single Page App) created with the power of AngularJS and ui-router' },
            { h2: 'One Page Checkout', p: 'Instant and single page advance checkout system' },
            { h2: 'Acive/Inactive', p: 'Option to save inactive product for publishing later' },
            { h2: 'Product Variants', p: 'Option to add multiple variants of a single product with different price, size and image' },
            { h2: 'Product Features', p: 'Additional product details in key/value list' },
            { h2: 'Featured Product Details', p: 'More product details in key/value list which need to be highlighted in the product details page' },
            { h2: 'Cross Platform', p: 'Cross Platform development setup with efficient with gulp, bower, npm' },
            { h2: 'Product Category', p: 'Category wise product details' },
            { h2: 'Filters', p: 'Advanced features like Multiple brands selector, Prodcut type filter, price slider' },
            { h2: 'OAUTH', p: 'Integrated social media login' },
            { h2: 'Passwords', p: 'Reset and Change Password option' },
            { h2: 'Load More', p: 'Load more products on request' },
            { h2: 'Contact Form', p: 'Email service for queries/suggestions/grievances through popup contact form' }
        ];
    };
    FrontComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-front',
            template: __webpack_require__("../../../../../src/app/features/front/front.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/front/front.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrontComponent);
    return FrontComponent;
}());

//# sourceMappingURL=front.component.js.map

/***/ }),

/***/ "../../../../../src/app/features/future/future.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/future/future.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Future Plan</h2>\n<div class=\"row\">\n  <md-card *ngFor=\"let f of futureFeatures\">\n    <md-card-title> {{f.h2}} </md-card-title>\n    <md-card-subtitle>{{f.p}}</md-card-subtitle>\n  </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/future/future.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FutureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FutureComponent = (function () {
    function FutureComponent() {
    }
    FutureComponent.prototype.ngOnInit = function () {
        this.futureFeatures = [
            { h2: 'Social Media', p: 'Integration of social info profile of each customer' },
            { h2: 'Backorders', p: 'Shoppers can order an item even if stock is 0' },
            { h2: 'Additional Payment Methods', p: 'Support for more payment methods e.g. Stripe, Credit Card.' },
            { h2: 'Inventory Mangement', p: 'The store owner can manage inventory with automated replenishment orders' },
            { h2: 'SMS Integration', p: 'SMS for each important transaction performed' },
            { h2: 'Hotkeys', p: 'Keyboard Shortcuts for regular tasks' },
            { h2: 'Tax Management', p: 'Integrated Tax Manager' },
            { h2: 'Theming', p: 'Advanced theming support for the whole website' },
            { h2: 'Static Page Management', p: 'Create and edit static pages, such as Contact, About, or Support.' },
            { h2: 'Returns and Refunds', p: 'Adminster and manage returns and refunds.' }
        ];
    };
    FutureComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-future',
            template: __webpack_require__("../../../../../src/app/features/future/future.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/future/future.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FutureComponent);
    return FutureComponent;
}());

//# sourceMappingURL=future.component.js.map

/***/ }),

/***/ "../../../../../src/app/installation/installation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/installation/installation.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Installation Instructions</h2>\n<div>\n  <h3>Softwares</h3>\n  <ul>\n    <li><a href=\"https://nodejs.org/en/\">NodeJS (Web Server)</a></li>\n    <li><a href=\"https://www.mongodb.com/\">MongoDB (Database)</a></li>\n  </ul>\n  <h3>Start mongodb in a separate shell</h3>\n  <p>In Windows operating system we can start it by opening the following file</p>\n  <prism-block [language]=\"'javascript'\">\n    {{mongo}}\n  </prism-block>\n\n  <h3>Run the following 2 commands</h3>\n  <p>This will install the required node dependencies and start the Server at <a href=\"http://localhost:4200\">http://localhost:4200</a></p>\n  <prism-block [language]=\"'javascript'\">\n    {{cli}}\n  </prism-block>\n</div>"

/***/ }),

/***/ "../../../../../src/app/installation/installation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstallationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstallationComponent = (function () {
    function InstallationComponent() {
    }
    InstallationComponent.prototype.ngOnInit = function () {
        this.mongo = "C:/Program Files/MongoDB/Server/3.2/bin/mongod.exe";
        this.cli = "npm i\nnpm run dev";
    };
    InstallationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-installation',
            template: __webpack_require__("../../../../../src/app/installation/installation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/installation/installation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InstallationComponent);
    return InstallationComponent;
}());

//# sourceMappingURL=installation.component.js.map

/***/ }),

/***/ "../../../../../src/app/overview/client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Client Directory Structure</h2>\n<prism-block [code]=\"clientStructure\" [language]=\"'text'\"></prism-block>"

/***/ }),

/***/ "../../../../../src/app/overview/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewClientComponent = (function () {
    function OverviewClientComponent() {
    }
    OverviewClientComponent.prototype.ngOnInit = function () {
        this.clientStructure = "\u251C\u2500\u2500\u2500app\n\u2502   \u251C\u2500\u2500\u2500account\n\u2502   \u2502   \u251C\u2500\u2500\u2500cp\n\u2502   \u2502   \u251C\u2500\u2500\u2500login\n\u2502   \u2502   \u251C\u2500\u2500\u2500password\n\u2502   \u2502   \u2514\u2500\u2500\u2500profile\n\u2502   \u251C\u2500\u2500\u2500admin\n\u2502   \u2502   \u251C\u2500\u2500\u2500address\n\u2502   \u2502   \u251C\u2500\u2500\u2500brands\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500brand-detail\n\u2502   \u2502   \u251C\u2500\u2500\u2500categories\n\u2502   \u2502   \u251C\u2500\u2500\u2500coupons\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500coupon-detail\n\u2502   \u2502   \u251C\u2500\u2500\u2500dashboard\n\u2502   \u2502   \u251C\u2500\u2500\u2500features\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500feature-detail\n\u2502   \u2502   \u251C\u2500\u2500\u2500media\n\u2502   \u2502   \u251C\u2500\u2500\u2500my-orders\n\u2502   \u2502   \u251C\u2500\u2500\u2500my-reviews\n\u2502   \u2502   \u251C\u2500\u2500\u2500order\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500order-content\n\u2502   \u2502   \u251C\u2500\u2500\u2500product\n\u2502   \u2502   \u2502   \u251C\u2500\u2500\u2500features\n\u2502   \u2502   \u2502   \u251C\u2500\u2500\u2500product-detail\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500variants\n\u2502   \u2502   \u251C\u2500\u2500\u2500reviews\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500review-detail\n\u2502   \u2502   \u251C\u2500\u2500\u2500shipping\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500shipping-detail\n\u2502   \u2502   \u251C\u2500\u2500\u2500user\n\u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500user-detail\n\u2502   \u2502   \u2514\u2500\u2500\u2500wishlist\n\u2502   \u251C\u2500\u2500\u2500home\n\u2502   \u2502   \u251C\u2500\u2500\u2500banner\n\u2502   \u2502   \u251C\u2500\u2500\u2500checkout\n\u2502   \u2502   \u251C\u2500\u2500\u2500featured-products\n\u2502   \u2502   \u251C\u2500\u2500\u2500home\n\u2502   \u2502   \u251C\u2500\u2500\u2500megamenu\n\u2502   \u2502   \u251C\u2500\u2500\u2500news-banner\n\u2502   \u2502   \u251C\u2500\u2500\u2500owl-carousel\n\u2502   \u2502   \u251C\u2500\u2500\u2500product\n\u2502   \u2502   \u251C\u2500\u2500\u2500product-card\n\u2502   \u2502   \u251C\u2500\u2500\u2500shop\n\u2502   \u2502   \u251C\u2500\u2500\u2500success\n\u2502   \u2502   \u2514\u2500\u2500\u2500wish-button\n\u2502   \u251C\u2500\u2500\u2500modal\n\u2502   \u2514\u2500\u2500\u2500shared\n\u2502       \u251C\u2500\u2500\u2500404\n\u2502       \u251C\u2500\u2500\u2500address\n\u2502       \u251C\u2500\u2500\u2500cart-buttons\n\u2502       \u251C\u2500\u2500\u2500dialogs\n\u2502       \u251C\u2500\u2500\u2500edit\n\u2502       \u251C\u2500\u2500\u2500export\n\u2502       \u251C\u2500\u2500\u2500footer\n\u2502       \u251C\u2500\u2500\u2500guards\n\u2502       \u251C\u2500\u2500\u2500header\n\u2502       \u251C\u2500\u2500\u2500list\n\u2502       \u251C\u2500\u2500\u2500list-image\n\u2502       \u251C\u2500\u2500\u2500media\n\u2502       \u251C\u2500\u2500\u2500oauth-buttons\n\u2502       \u251C\u2500\u2500\u2500pipes\n\u2502       \u251C\u2500\u2500\u2500search\n\u2502       \u251C\u2500\u2500\u2500services\n\u2502       \u2514\u2500\u2500\u2500submit-button\n\u251C\u2500\u2500\u2500assets\n\u2502   \u251C\u2500\u2500\u2500fashion\n\u2502   \u2514\u2500\u2500\u2500img\n\u2514\u2500\u2500\u2500environments\n|   hmr.ts\n|   index.html\n|   main.ts\n|   output.txt\n|   polyfills.ts\n|   test.ts\n|   tsconfig.app.json\n|   tsconfig.spec.json\n|   typings.d.ts";
    };
    OverviewClientComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client',
            template: __webpack_require__("../../../../../src/app/overview/client/client.component.html"),
            styles: [__webpack_require__("../../../../../src/app/overview/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverviewClientComponent);
    return OverviewClientComponent;
}());

//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Directory Structure for project</h2>\n<prism-block [code]=\"overview\" [language]=\"'text'\"></prism-block>"

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.overview = "+---client\n+---node_modules\n+---server\n+---uploads\n|   .angular-cli.json\n|   .editorconfig\n|   .env\n|   .gitignore\n|   karma.conf.js\n|   package.json\n|   protractor.conf.js\n|   proxy.conf.json\n|   tsconfig.json\n|   tslint.json";
    };
    OverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__("../../../../../src/app/overview/overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());

//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/overview/server/server.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/server/server.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Server Directory Structure</h2>\n<prism-block [code]=\"serverStructure\" [language]=\"'text'\"></prism-block>"

/***/ }),

/***/ "../../../../../src/app/overview/server/server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewServerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewServerComponent = (function () {
    function OverviewServerComponent() {
    }
    OverviewServerComponent.prototype.ngOnInit = function () {
        this.serverStructure = "\u251C\u2500\u2500\u2500api\n\u2502   \u251C\u2500\u2500\u2500address\n\u2502   \u251C\u2500\u2500\u2500brand\n\u2502   \u251C\u2500\u2500\u2500category\n\u2502   \u251C\u2500\u2500\u2500contact\n\u2502   \u251C\u2500\u2500\u2500coupon\n\u2502   \u251C\u2500\u2500\u2500customer\n\u2502   \u251C\u2500\u2500\u2500feature\n\u2502   \u251C\u2500\u2500\u2500media\n\u2502   \u251C\u2500\u2500\u2500order\n\u2502   \u251C\u2500\u2500\u2500orderHistory\n\u2502   \u251C\u2500\u2500\u2500pay\n\u2502   \u251C\u2500\u2500\u2500payment-method\n\u2502   \u251C\u2500\u2500\u2500product\n\u2502   \u251C\u2500\u2500\u2500review\n\u2502   \u251C\u2500\u2500\u2500sendmail\n\u2502   \u251C\u2500\u2500\u2500shipping\n\u2502   \u251C\u2500\u2500\u2500upload\n\u2502   \u251C\u2500\u2500\u2500user\n\u2502   \u2514\u2500\u2500\u2500wishlist\n\u251C\u2500\u2500\u2500auth\n\u2502   \u251C\u2500\u2500\u2500facebook\n\u2502   \u251C\u2500\u2500\u2500google\n\u2502   \u251C\u2500\u2500\u2500local\n\u2502   \u2502   \u2514\u2500\u2500\u2500.git\n\u2502   \u2502       \u251C\u2500\u2500\u2500hooks\n\u2502   \u2502       \u251C\u2500\u2500\u2500info\n\u2502   \u2502       \u251C\u2500\u2500\u2500objects\n\u2502   \u2502       \u2502   \u251C\u2500\u2500\u250040\n\u2502   \u2502       \u2502   \u251C\u2500\u2500\u250097\n\u2502   \u2502       \u2502   \u251C\u2500\u2500\u2500info\n\u2502   \u2502       \u2502   \u2514\u2500\u2500\u2500pack\n\u2502   \u2502       \u2514\u2500\u2500\u2500refs\n\u2502   \u2502           \u251C\u2500\u2500\u2500heads\n\u2502   \u2502           \u2514\u2500\u2500\u2500tags\n\u2502   \u2514\u2500\u2500\u2500twitter\n\u2514\u2500\u2500\u2500components\n    \u2514\u2500\u2500\u2500errors\n|   app.ts\n|   config.ts\n|   routes.ts\n|   seed.ts\n|   tsconfig.json";
    };
    OverviewServerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-server',
            template: __webpack_require__("../../../../../src/app/overview/server/server.component.html"),
            styles: [__webpack_require__("../../../../../src/app/overview/server/server.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverviewServerComponent);
    return OverviewServerComponent;
}());

//# sourceMappingURL=server.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Client Settings</h2>\n<md-divider></md-divider><br/>\n<p>Path: <em>client/app/settings.ts</em></p>\n<h3 md-line>Enable / Disable demo mode</h3>\n<p>Restricts users from saving data if enabled</p>\n<prism-block [code]=\"demo\" [language]=\"'javascript'\"></prism-block>\n<h3 md-line>List of order status for Order Management</h3>\n<prism-block [code]=\"orderStatus\" [language]=\"'javascript'\"></prism-block>\n<h3 md-line>Enabled Payment Methods for ecommerce</h3>\n<prism-block [code]=\"paymentMethods\" [language]=\"'javascript'\"></prism-block>\n<h3 md-line>Regional Settings</h3>\n<prism-block [code]=\"regionalSettings\" [language]=\"'javascript'\"></prism-block>\n<h3 md-line>Menu for Dashboad and Header</h3>\n<prism-block [code]=\"menu\" [language]=\"'javascript'\"></prism-block>"

/***/ }),

/***/ "../../../../../src/app/settings/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientComponent = (function () {
    function ClientComponent() {
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.demo = "static demo: boolean = false;";
        this.orderStatus = "static orderStatus: string[] = ['Payment Pending', 'Order Placed', 'Paid', 'Order Accepted', 'Order Executed', 'Shipped', 'Delivered', 'Not in Stock', 'Cancellation Requested', 'Cancelled'];";
        this.paymentMethods = "static paymentMethods: any = ['PayPal', 'COD'];";
        this.regionalSettings = "static country: any = { name: 'India', code: 'IN' };\n    static currency: any = {\n        symbol: 'Rs', //Required only for sort icons at homepage\n        code: 'INR', // Shop currency\n        paypal: 'USD',// Paypal currency code *** Please choose from https://developer.paypal.com/docs/classic/api/currency_codes/\n        exchange_rate: '0.015' // Paypal currency code(USD) / Shop currency (INR) ***  exchange_rate should not be 0 else it will generate divided by 0 error\n    };";
        this.menu = "static menu: any[] = [\n        { name: 'Products', url: '/admin/product', icon: 'store', authenticate: 'admin', color: 'black', dashboard: true },\n        { name: 'My Orders', url: '/admin/my-orders', icon: 'watch_later', authenticate: 'user', color: 'grey', dashboard: true },\n        { name: 'Manage Orders', url: '/admin/manage-orders', icon: 'history', authenticate: 'manager', color: 'orange', dashboard: true },\n        { name: 'Address', url: '/admin/address', icon: 'location_city', authenticate: 'user', color: 'yellow', dashboard: true },\n        { name: 'Reviews', url: '/admin/reviews', icon: 'stars', authenticate: 'manager', color: 'blue', dashboard: true },\n        { name: 'My Reviews', url: '/admin/my-reviews', icon: 'star_rate', authenticate: 'user', color: 'green', dashboard: true },\n        { name: 'My Wishlist', url: '/admin/wishlist', icon: 'favorite', authenticate: 'user', color: 'purple', dashboard: true },\n        { name: 'Media Library', url: '/admin/media-library', icon: 'perm_media', authenticate: 'manager', color: 'teal', dashboard: true },\n        { name: 'Brands', url: '/admin/brands', icon: 'wb_auto', authenticate: 'manager', color: 'purple', dashboard: true },\n        { name: 'Categories', url: '/admin/categories', icon: 'view_comfy', authenticate: 'manager', color: 'light-blue', dashboard: true },\n        { name: 'Features', url: '/admin/features', icon: 'check_circle', authenticate: 'manager', color: 'brown', dashboard: true },\n        { name: 'Coupons', url: '/admin/coupons', icon: 'style', authenticate: 'admin', color: 'pink', dashboard: true },\n        { name: 'Shippings', url: '/admin/shippings', icon: 'local_shipping', authenticate: 'admin', color: 'red', dashboard: true },\n        { name: 'Users', url: '/admin/users', icon: 'face', img: 'auth.png', authenticate: 'admin', color: 'lime', dashboard: true },\n        { name: 'Media Library', url: '/admin/media-library', authenticate: 'user', icon: 'perm_media' },\n        { name: 'Profile', url: '/account/edit-profile', authenticate: 'user', icon: 'face' },\n        { name: 'Change Password', url: '/account/change-password', authenticate: 'user', icon: 'lock' },\n        { name: 'Logout', url: '/account/logout', authenticate: 'user', icon: 'vpn_key' },\n    ];";
    };
    ClientComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-client',
            template: __webpack_require__("../../../../../src/app/settings/client/client.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientComponent);
    return ClientComponent;
}());

//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/environment/environment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/environment/environment.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Environment Settings</h2>\n<md-divider></md-divider><br/>\n<p>Rename <em>.env.sample</em> to <em>.env</em> and change according to your generated credentials</p>\n<p>Generate the following APIs and input the credentials into .env file present at the root of the project</p>\n\n<md-card>\n  <md-card-content>\n    <md-list>\n      <h3 md-subheader>Email Config</h3>\n      <md-list-item>\n        <md-icon md-list-icon>email</md-icon>\n        <h4 md-line><a routerLink=\"http://www.sendgrid.com/\">Sendgrid</a></h4>\n        <p md-line> Used for sending emails efficiently </p>\n      </md-list-item>\n      <h3 md-subheader>Payment Config</h3>\n      <md-list-item>\n        <md-icon md-list-icon>payment</md-icon>\n        <h4 md-line><a routerLink=\"http://developer.paypal.com/\">Paypal Developer</a></h4>\n        <p md-line> Payment Gateway </p>\n      </md-list-item>\n      <h3 md-subheader>Auth Config</h3>\n      <md-list-item>\n        <md-icon md-list-icon>fingerprint</md-icon>\n        <h4 md-line><a routerLink=\"http://developer.facebook.com/\">Facebook Developer</a></h4>\n        <p md-line> Login through Facebook </p>\n      </md-list-item>\n      <md-list-item>\n        <md-icon md-list-icon>fingerprint</md-icon>\n        <h4 md-line><a routerLink=\"http://developer.facebook.com/\">Google Developer Console</a></h4>\n        <p md-line> Google Auth Login </p>\n      </md-list-item>\n      <md-list-item>\n        <md-icon md-list-icon>fingerprint</md-icon>\n        <h4 md-line><a routerLink=\"https://dev.twitter.com/\">Twitter Developer</a></h4>\n        <p md-line> Use twitter account to login to ShopNx </p>\n      </md-list-item>\n    </md-list>\n  </md-card-content>\n</md-card>\n\n<prism-block [code]=\"code\" [language]=\"'javascript'\"></prism-block>"

/***/ }),

/***/ "../../../../../src/app/settings/environment/environment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnvironmentComponent = (function () {
    function EnvironmentComponent() {
    }
    EnvironmentComponent.prototype.ngOnInit = function () {
        this.code = "\nMONGODB_URI=mongodb://localhost:27017/shopnx-dev\nDOMAIN=http://localhost:4200\nSESSION_SECRET=shopnx-secret\nPAYPAL_MODE=sandbox\nPAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID\nPAYPAL_CLIENT_SECRET=YOUR_PAYPAL_CLIENT_SECRET\nSTRIPE_APIKEY=sk_test_REST_OF_YOUR_KEY\nSENDGRID_APIKEY=YOUR_SENDGRID_API_KEY\nFACEBOOK_ID=YOUR_FACEBOOK_ID\nFACEBOOK_SECRET=YOUR_FACEBOOK_SECRET\nTWITTER_ID=YOUR_TWITTER_ID\nTWITTER_SECRET=YOUR_TWITTER_SECRET\nGOOGLE_ID=YOUR_GOOGLE_ID\nGOOGLE_SECRET=YOUR_GOOGLE_SECRET\nGOOGLE_MAPS_API=YOUR_GOOGLE_MAPS_API\n";
    };
    EnvironmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-environment',
            template: __webpack_require__("../../../../../src/app/settings/environment/environment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/environment/environment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnvironmentComponent);
    return EnvironmentComponent;
}());

//# sourceMappingURL=environment.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/server/server.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/server/server.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Server Settings</h2>\n<md-divider></md-divider><br/>\n<p>Path: <em>server/config.ts</em></p>\n<h3 md-line> Website Settings</h3>\n<prism-block [code]=\"siteSettings\" [language]=\"'javascript'\"></prism-block>\n<h3 md-line> Review Settings</h3>\n<prism-block [code]=\"reviewSettings\" [language]=\"'javascript'\"></prism-block>\n<h3 md-line> Product Settings</h3>\n<prism-block [code]=\"productSettings\" [language]=\"'javascript'\"></prism-block>\n<h3 md-line> User Roles</h3>\n<prism-block [code]=\"userRoles\" [language]=\"'javascript'\"></prism-block>\n<h3 md-line> Forgot Password Email Settings</h3>\n<prism-block [code]=\"forgotPasswordEmail\" [language]=\"'javascript'\"></prism-block>\n<h3 md-line> Reset Password Email Settings</h3>\n<prism-block [code]=\"resetPasswordEmail\" [language]=\"'javascript'\"></prism-block>\n<h3 md-line> Order Placed Email Settings</h3>\n<prism-block [code]=\"orderPlacedEmail\" [language]=\"'javascript'\"></prism-block>\n<h3 md-line> Order Updated Email Settings</h3>\n<prism-block [code]=\"orderUpdatedEmail\" [language]=\"'javascript'\"></prism-block>"

/***/ }),

/***/ "../../../../../src/app/settings/server/server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerComponent = (function () {
    function ServerComponent() {
    }
    ServerComponent.prototype.ngOnInit = function () {
        this.siteSettings = "smsEnabled = true;\nemailEnabled = true;";
        this.reviewSettings = "reviewSettings = {\n  enabled: true, // Enables review for products\n  moderate: false // If enabled, the review will be visible to public after admin approval\n};";
        this.productSettings = "product = { moderate: false };";
        this.userRoles = "userRoles = ['user', 'manager', 'admin']; // This should be in ascending order of authority. e.g. In this case guest will not have access to any other role, where as admin will have the role of guest+user+vendor+manager+admin";
        this.forgotPasswordEmail = "forgotPasswordEmail = (body) => { // Expects email id and password reset token\n  return {\n    from: 'passwordreset@codenx.com',\n    to: body.email,\n    subject: 'ShopNx Password Reset Request',\n    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +\n    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +\n    process.env.DOMAIN + '/account/reset-password/' + body.token + '\n\n' +\n    'If you did not request this, please ignore this email and your password will remain unchanged.\n'\n  }\n}";
        this.resetPasswordEmail = "\nresetPasswordEmail = (body) => { // Expects email id and name\n  return {\n    from: 'passwordreset@codenx.com',\n    to: body.email,\n    subject: 'ShopNx Password Changed',\n    text: 'Hello,\n\n' +\n    'This is a confirmation that the password for your account ' + body.to + ' has just been changed.\n'\n  };\n}";
        this.orderPlacedEmail = "\norderPlacedEmail = (body) => { // Expects email id, orderNo, ...\n  return {\n    from: 'CodeNx <admin@codenx.com>',\n    to: body.to,\n    subject: 'Order Placed Successfully',\n    text: 'Order No: ' + body.orderNo\n    + '\n Status: ' + body.status\n    + '\n\n Payment Method: ' + body.payment_method\n    + '\n\n Payment ID: ' + body.id\n    + '\n Amount: ' + body.amount.currency + ' ' + Math.round(body.amount.total * 100 / body.amount.exchange_rate) / 100\n    + '\n\n Name: ' + body.address.recipient_name\n    + '\n Address: ' + body.address.line1\n    + '\n City: ' + body.address.city\n    + '\n Zip: ' + body.address.postal_code\n  };\n}";
        this.orderUpdatedEmail = "\norderUpdatedEmail = (body) => {\n  return {\n    from: 'CodeNx <admin@codenx.com>',\n    to: body.to,\n    subject: 'Your Order Status Updated',\n    text: 'Order No: ' + body.orderNo\n    + '\n Status: ' + body.status\n    + '\n\n Payment Method: ' + body.payment_method\n    + '\n\n Payment ID: ' + body.id\n    + '\n Amount: ' + body.amount.currency + ' ' + Math.round(body.amount.total * 100 / body.amount.exchange_rate) / 100\n    + '\n\n \n Name: ' + body.address.recipient_name\n    + '\n Address: ' + body.address.line1\n    + '\n City: ' + body.address.city\n    + '\n State: ' + body.address.state\n    + '\n Zip: ' + body.address.postal_code\n  };\n}\n";
    };
    ServerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-server',
            template: __webpack_require__("../../../../../src/app/settings/server/server.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/server/server.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServerComponent);
    return ServerComponent;
}());

//# sourceMappingURL=server.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/usage/usage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usage/usage.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Home</h2>\n<md-divider></md-divider><br/> This is the main page of our AngularJS e-commerce store. Here we get\n<ul>\n  <li>- List of all products</li>\n  <li>- Filter Products: based on `Price (Price Slider), Brand, Features (Color, Type, Fit, Fabric, Neck)`</li>\n  <li>- Sort: Based on Price and Name</li>\n</ul>\n\n\n\nEach product contains a add to cart button. Once the product is added into the cart, we get the increase or decrease cart\nquantity option By clicking each product we arrive at the product detail page\n\n<h2>Product Details</h2>\n<md-divider></md-divider><br/> This page presents the complete details of the product\n<ol>\n  <li>Product name</li>\n  <li>Description</li>\n  <li>Price, MRP</li>\n  <li>Product Image (Including additional images)</li>\n  <li>Brand</li>\n  <li>Category</li>\n  <li>Quantity in cart</li>\n  <li>Size</li>\n  <li>Features</li>\n</ol>\n\n<h2>Search</h2>\n<md-divider></md-divider><br/> The top navigation bar of the website has a search box which autocompletes with product info while user\nstarts typing. By clicking a suggested item in the search bar, the page navigates to the product details page of the selected\nproduct.\n\n<h2>Category</h2>\n<md-divider></md-divider><br/> Get the current category name with all products under it<br/> This page also has all the filter and sort\noptions.\n\n<h2 id=\"shopping-cart\">Shopping Cart</h2>\n<md-divider></md-divider><br/>\n<p>This store is featured with a shopping cart facility which is easy to use and fast.</p>\n<ul>\n  <li>Get quick summary of what is there in Cart</li>\n  <li>Modify the cart quantity</li>\n  <li>Checkout using Paypal</li>\n</ul>\n\n\n<h2>Login / Signup</h2>\n<md-divider></md-divider><br/>\n<p>Features like Signup / SignIn / Change Password / Logout is integrated into this application already with high level of security,\n  so that you no longer need to be worry about implementing all those features into the application</p>\n\nA user need <b>not</b> have to navigate to a separate page to login or signup. It comes as a popup which is a huge ui improvement.\nThis login popup has a advantage of poping out for any route when a guest user tries to access a restricted page Both the\nlogin and signup page has the option for connect using facebook, twitter, google as well\n\n<h2>Checkout</h2>\n<md-divider></md-divider><br/>\n<ul>\n  <li>The checkout page Displays the Order Amount + Shipping Charge</li>\n  <li>This also has an option discount coupons which is applied if valid.</li>\n  <li>Here the user can choose the Payment options (Cash On Delivery, Paypal)</li>\n  <li>This page automatically choose the best available Shipping Options based on the total order weight and the shipper availability.</li>\n  <li>While checkout the user can choose from any saved address.</li>\n</ul>\n\n<h2>Address Management</h2>\n<md-divider></md-divider><br/> The address management is integrated into the checkout page to make the checkout experience single view\nand easy. Here the user can store and manage different addresses.\n\n<h2>Order Management</h2>\n<md-divider></md-divider><br/> The user has the facility to view the order history. Administrators can change order status + payment\nstatus\n<p><em>Users:</em> All the orders placed by the logged in user is available in this view. </p>\n<p><em>Administrators:</em> This view presents all orders placed by users with the option to change order status and shipping</p>\n\n<h2>User Management</h2>\n<md-divider></md-divider><br/>\n<em>Users: </em><br/> Change Password<br/> Forgot Password<br/>\n<em>Administrators: </em>User role management\n\n<h2>Media Library</h2>\n<md-divider></md-divider><br/>\n<ul>\n  <li>Now the shop has a new media library where the shop managers can upload any image that is to be used in the shopping application</li>\n  <li>Clicking on each image displays the details about it as well as an option to delete it</li>\n</ul>\n\n\n<h2>Products (Role: Managers, Administrators)</h2>\n<md-divider></md-divider><br/> Product details can be added, modified and deleted using this page. Each product can be associated into\na single Brand, Category A product can have\n<ul>\n  <li>+ Multiple features</li>\n  <li>+ Multiple key features</li>\n  <li>+ Multiple product images</li>\n</ul>\n<ul>\n  <li>The list contains all the available products with a search box to filter the list.</li>\n  <li>Clicking on a product at the product list will populate the details of the product at the right sidebar</li>\n  <li>The right sidebar has option to change product name, details, brand, category</li>\n  <li>This sidebar also contains a module to manage product images</li>\n</ul>\n\n<h2>Manage Brands</h2>\n<md-divider></md-divider><br/>\n<p>Administrators can add, edit, delete, filter brands of their store from this view</p>\n\n<h2>Manage Categories</h2>\n<md-divider></md-divider><br/>\n<ul>\n  <li>Categories are presented in Parent-Child manner in this store for better organisation of products.</li>\n  <li>Store's navigation bar at top contains all the categories arranged in parent-child fashion.</li>\n  <li>This view provides facility to add both parent and child categories, re-arrange category association according to their\n    requirement.\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/usage/usage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsageComponent = (function () {
    function UsageComponent() {
    }
    UsageComponent.prototype.ngOnInit = function () {
    };
    UsageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usage',
            template: __webpack_require__("../../../../../src/app/usage/usage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/usage/usage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsageComponent);
    return UsageComponent;
}());

//# sourceMappingURL=usage.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map