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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_book_carusel_book_carusel_book_carusel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/book-carusel/book-carusel/book-carusel.component */ "./src/app/components/book-carusel/book-carusel/book-carusel.component.ts");
/* harmony import */ var _components_wish_list_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/wish-list/wish-list/wish-list.component */ "./src/app/components/wish-list/wish-list/wish-list.component.ts");




class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "app-container"], [1, "app-description"], [1, "main-cmps"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Books wish list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add your favorite books to your wish list. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-book-carusel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-wish-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_book_carusel_book_carusel_book_carusel_component__WEBPACK_IMPORTED_MODULE_1__["BookCaruselComponent"], _components_wish_list_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_2__["WishListComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.app-description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 700px;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYWlcXERlc2t0b3BcXFByb2plY3RzXFxKU1xcQW5ndWxhclxcQm9va1dpc2hMaXN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXBwLWRlc2NyaXB0aW9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYXBwLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiIsImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXBwLWRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5hcHAtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHBhZGRpbmc6IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_wish_list_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/wish-list/wish-list/wish-list.component */ "./src/app/components/wish-list/wish-list/wish-list.component.ts");
/* harmony import */ var _components_book_preview_book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/book-preview/book-preview/book-preview.component */ "./src/app/components/book-preview/book-preview/book-preview.component.ts");
/* harmony import */ var _components_book_carusel_book_carusel_book_carusel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/book-carusel/book-carusel/book-carusel.component */ "./src/app/components/book-carusel/book-carusel/book-carusel.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_wish_list_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_4__["WishListComponent"],
        _components_book_preview_book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_5__["BookPreviewComponent"],
        _components_book_carusel_book_carusel_book_carusel_component__WEBPACK_IMPORTED_MODULE_6__["BookCaruselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_wish_list_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_4__["WishListComponent"],
                    _components_book_preview_book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_5__["BookPreviewComponent"],
                    _components_book_carusel_book_carusel_book_carusel_component__WEBPACK_IMPORTED_MODULE_6__["BookCaruselComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/book-carusel/book-carusel/book-carusel.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/book-carusel/book-carusel/book-carusel.component.ts ***!
  \********************************************************************************/
/*! exports provided: BookCaruselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCaruselComponent", function() { return BookCaruselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_book_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/book.service.js */ "./src/app/services/book.service.js");
/* harmony import */ var _book_preview_book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../book-preview/book-preview/book-preview.component */ "./src/app/components/book-preview/book-preview/book-preview.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class BookCaruselComponent {
    constructor(bookService) {
        this.bookService = bookService;
        this.Math = Math;
    }
    onToggleInWishList(book) {
        this.bookService.toggleWishList(book);
    }
    onGetNextBook(diff) {
        this.bookService.getNextBook(diff);
    }
    ngOnInit() {
        this.book$ = this.bookService.currentBook$;
    }
}
BookCaruselComponent.ɵfac = function BookCaruselComponent_Factory(t) { return new (t || BookCaruselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_book_service_js__WEBPACK_IMPORTED_MODULE_1__["BookService"])); };
BookCaruselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookCaruselComponent, selectors: [["app-book-carusel"]], decls: 7, vars: 3, consts: [[1, "book-carusel"], [3, "click"], [3, "book", "onToggleInWishList"]], template: function BookCaruselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookCaruselComponent_Template_button_click_1_listener($event) { return ctx.onGetNextBook(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-book-preview", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onToggleInWishList", function BookCaruselComponent_Template_app_book_preview_onToggleInWishList_3_listener($event) { return ctx.onToggleInWishList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookCaruselComponent_Template_button_click_5_listener($event) { return ctx.onGetNextBook(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("book", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.book$));
    } }, directives: [_book_preview_book_preview_book_preview_component__WEBPACK_IMPORTED_MODULE_2__["BookPreviewComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".book-carusel[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: Transparent;\n  outline: none;\n  border: none;\n  color: #8c8c8c;\n  font-size: 30px;\n  font-family: ZCOOL;\n}\n\n@media (max-width: 480px) {\n  .book-carusel[_ngcontent-%COMP%] {\n    display: grid;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rLWNhcnVzZWwvYm9vay1jYXJ1c2VsL0M6XFxVc2Vyc1xcTWFpXFxEZXNrdG9wXFxQcm9qZWN0c1xcSlNcXEFuZ3VsYXJcXEJvb2tXaXNoTGlzdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYm9vay1jYXJ1c2VsXFxib29rLWNhcnVzZWxcXGJvb2stY2FydXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ib29rLWNhcnVzZWwvYm9vay1jYXJ1c2VsL2Jvb2stY2FydXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsYUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jvb2stY2FydXNlbC9ib29rLWNhcnVzZWwvYm9vay1jYXJ1c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2stY2FydXNlbHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHJnYigxNDAsMTQwLDE0MCk7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBaQ09PTDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo0ODBweCl7XHJcbiAgLmJvb2stY2FydXNlbHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG59IiwiLmJvb2stY2FydXNlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBaQ09PTDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5ib29rLWNhcnVzZWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookCaruselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-carusel',
                templateUrl: './book-carusel.component.html',
                styleUrls: ['./book-carusel.component.scss']
            }]
    }], function () { return [{ type: _services_book_service_js__WEBPACK_IMPORTED_MODULE_1__["BookService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/book-preview/book-preview/book-preview.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/book-preview/book-preview/book-preview.component.ts ***!
  \********************************************************************************/
/*! exports provided: BookPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPreviewComponent", function() { return BookPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_book_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/book.service.js */ "./src/app/services/book.service.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function BookPreviewComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookPreviewComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookPreviewComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookPreviewComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookPreviewComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BookPreviewComponent {
    constructor(bookService) {
        this.bookService = bookService;
        this.onToggleInWishList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isInWishList() {
        return this.bookService.isBookInWishlist(this.book);
    }
    ngOnInit() { }
    roundRating(book) {
        let roundedRating = Math.round(book.rating);
        return roundedRating;
    }
}
BookPreviewComponent.ɵfac = function BookPreviewComponent_Factory(t) { return new (t || BookPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_book_service_js__WEBPACK_IMPORTED_MODULE_1__["BookService"])); };
BookPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookPreviewComponent, selectors: [["app-book-preview"]], inputs: { book: "book" }, outputs: { onToggleInWishList: "onToggleInWishList" }, decls: 19, vars: 10, consts: [[1, "preview-container"], [1, "book-details"], [1, "book-title-and-checkbox"], [1, "book-title"], ["type", "checkbox", 3, "checked", "change"], [1, "book-author"], [1, "book-description"], [1, "rating-and-price"], [4, "ngIf"], ["src", "https://res.cloudinary.com/dtwqtpteb/image/upload/v1583012469/mib5enaxku5dphrljp2k.jpg"], ["src", "https://res.cloudinary.com/dtwqtpteb/image/upload/v1583012425/iixi7vxz2crbvvcqaqrf.jpg"], ["src", "https://res.cloudinary.com/dtwqtpteb/image/upload/v1583012373/ztblp3ldboioghoqoml6.jpg"], ["src", "https://res.cloudinary.com/dtwqtpteb/image/upload/v1583012331/kj4e7wmtm8m1ummtkhlk.jpg"], ["src", "https://res.cloudinary.com/dtwqtpteb/image/upload/v1583012163/eyqltevkbsmdpp7ftlxp.jpg"]], template: function BookPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BookPreviewComponent_Template_input_change_5_listener($event) { return ctx.onToggleInWishList.emit(ctx.book); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BookPreviewComponent_p_12_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookPreviewComponent_p_13_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BookPreviewComponent_p_14_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BookPreviewComponent_p_15_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BookPreviewComponent_p_16_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isInWishList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roundRating(ctx.book) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roundRating(ctx.book) === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roundRating(ctx.book) === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roundRating(ctx.book) === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roundRating(ctx.book) === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: $", ctx.book.price, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".preview-container[_ngcontent-%COMP%] {\n  background-color: white;\n  font-size: 16px;\n  padding: 5px;\n  height: 420px;\n  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.75);\n}\n\n.book-description[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n  background: #978585;\n  border-radius: 10px;\n}\n\n.book-description[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #efefef;\n  border-radius: 10px;\n}\n\n.book-description[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #efefef;\n  border-radius: 10px;\n}\n\n.book-details[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.book-description[_ngcontent-%COMP%] {\n  max-width: 35ch;\n  width: 300px;\n  height: 140px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-right: 20px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  margin-left: 180px;\n  width: 6mm;\n  height: 14mm;\n}\n\n.book-title-and-checkbox[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  padding-top: 20px;\n}\n\n.book-title[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 120px;\n}\n\n.book-author[_ngcontent-%COMP%] {\n  color: #439a92;\n}\n\n.rating-and-price[_ngcontent-%COMP%] {\n  color: #4b6591;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29rLXByZXZpZXcvYm9vay1wcmV2aWV3L0M6XFxVc2Vyc1xcTWFpXFxEZXNrdG9wXFxQcm9qZWN0c1xcSlNcXEFuZ3VsYXJcXEJvb2tXaXNoTGlzdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYm9vay1wcmV2aWV3XFxib29rLXByZXZpZXdcXGJvb2stcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ib29rLXByZXZpZXcvYm9vay1wcmV2aWV3L2Jvb2stcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDUSxpQ0FBQTtFQUNBLG1CQUFBO0FDRVI7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENFO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7QUNFTjs7QURDRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0U7RUFDSSxjQUFBO0FDRU47O0FEQ0U7RUFDSSxjQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jvb2stcHJldmlldy9ib29rLXByZXZpZXcvYm9vay1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuXHJcbi5ib29rLWRlc2NyaXB0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoMTUxLDEzMywxMzMpOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmJvb2stZGVzY3JpcHRpb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICNlZmVmZWY7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5ib29rLWRlc2NyaXB0aW9uOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5ib29rLWRldGFpbHN7XHJcbiAgICBsaW5lLWhlaWdodDogIDEuODtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYm9vay1kZXNjcmlwdGlvbntcclxuICAgIG1heC13aWR0aDogMzVjaDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxODBweDtcclxuICAgIHdpZHRoOiA2bW07XHJcbiAgICBoZWlnaHQ6IDE0bW07XHJcbiAgfVxyXG5cclxuICAuYm9vay10aXRsZS1hbmQtY2hlY2tib3h7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvb2stdGl0bGV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgfVxyXG5cclxuICAuYm9vay1hdXRob3J7XHJcbiAgICAgIGNvbG9yOiAjNDM5YTkyO1xyXG4gIH1cclxuXHJcbiAgLnJhdGluZy1hbmQtcHJpY2V7XHJcbiAgICAgIGNvbG9yOiByZ2IoNzUsMTAxLDE0NSk7XHJcbiAgfSIsIi5wcmV2aWV3LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA0MjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5ib29rLWRlc2NyaXB0aW9uOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA3cHg7XG4gIGJhY2tncm91bmQ6ICM5Nzg1ODU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5ib29rLWRlc2NyaXB0aW9uOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJvb2stZGVzY3JpcHRpb246Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJvb2stZGV0YWlscyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5ib29rLWRlc2NyaXB0aW9uIHtcbiAgbWF4LXdpZHRoOiAzNWNoO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBtYXJnaW4tbGVmdDogMTgwcHg7XG4gIHdpZHRoOiA2bW07XG4gIGhlaWdodDogMTRtbTtcbn1cblxuLmJvb2stdGl0bGUtYW5kLWNoZWNrYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5ib29rLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5ib29rLWF1dGhvciB7XG4gIGNvbG9yOiAjNDM5YTkyO1xufVxuXG4ucmF0aW5nLWFuZC1wcmljZSB7XG4gIGNvbG9yOiAjNGI2NTkxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book-preview',
                templateUrl: './book-preview.component.html',
                styleUrls: ['./book-preview.component.scss']
            }]
    }], function () { return [{ type: _services_book_service_js__WEBPACK_IMPORTED_MODULE_1__["BookService"] }]; }, { book: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onToggleInWishList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/wish-list/wish-list/wish-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/wish-list/wish-list/wish-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: WishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListComponent", function() { return WishListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_book_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/book.service.js */ "./src/app/services/book.service.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function WishListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WishListComponent_div_1_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeBookFromWishList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", book_r1.title);
} }
class WishListComponent {
    constructor(bookService) {
        this.bookService = bookService;
    }
    ngOnInit() {
        this.subscriber = this.bookService.wishList$.subscribe(books => {
            this.books = books;
        });
    }
    removeBookFromWishList(event) {
        this.bookService.toggleWishList(null, event.target.value);
    }
    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }
}
WishListComponent.ɵfac = function WishListComponent_Factory(t) { return new (t || WishListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_service_js__WEBPACK_IMPORTED_MODULE_1__["BookService"])); };
WishListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WishListComponent, selectors: [["app-wish-list"]], decls: 2, vars: 1, consts: [[1, "wishlist"], [4, "ngFor", "ngForOf"], [1, "wishlist-container"], [1, "book-title"], [1, "close-button", 3, "value", "click"]], template: function WishListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WishListComponent_div_1_Template, 6, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".wishlist-container[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 10px;\n  width: 300px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.75);\n  margin-bottom: 20px;\n  margin-left: 35px;\n}\n\n.book-title[_ngcontent-%COMP%] {\n  width: 240px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: white;\n  background-color: #978585;\n  border: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aXNoLWxpc3Qvd2lzaC1saXN0L0M6XFxVc2Vyc1xcTWFpXFxEZXNrdG9wXFxQcm9qZWN0c1xcSlNcXEFuZ3VsYXJcXEJvb2tXaXNoTGlzdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcd2lzaC1saXN0XFx3aXNoLWxpc3RcXHdpc2gtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93aXNoLWxpc3Qvd2lzaC1saXN0L3dpc2gtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dpc2gtbGlzdC93aXNoLWxpc3Qvd2lzaC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpc2hsaXN0LWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcclxufVxyXG5cclxuLmJvb2stdGl0bGV7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b257IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLDEzMywxMzMpOyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6bm9uZTtcclxufSIsIi53aXNobGlzdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxuLmJvb2stdGl0bGUge1xuICB3aWR0aDogMjQwcHg7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTc4NTg1O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WishListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wish-list',
                templateUrl: './wish-list.component.html',
                styleUrls: ['./wish-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_book_service_js__WEBPACK_IMPORTED_MODULE_1__["BookService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/book.service.js":
/*!******************************************!*\
  !*** ./src/app/services/book.service.js ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_data_books_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data/books.js */ "./src/app/services/data/books.js");




class BookService {
    constructor() {
        this._books = _services_data_books_js__WEBPACK_IMPORTED_MODULE_2__["default"];
        this._currentBook$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._books[0]);
        this.currentBook$ = this._currentBook$.asObservable();
        this._wishList$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.wishList$ = this._wishList$.asObservable();
        this.currIndex = 0;
    }
    getNextBook(diff) {
        this.currIndex = this.currIndex + diff;
        this.currIndex = (this.currIndex + this._books.length) % this._books.length;
        this._currentBook$.next(this._books[this.currIndex]);
    }
    isBookInWishlist(currentBook) {
        return this._wishList$.getValue().some(curr => curr.title === currentBook.title);
    }
    toggleWishList(book, title = null) {
        if (book && this.isBookInWishlist(book)) {
            this._wishList$.next(this._wishList$.getValue().filter(curr => {
                return curr.title !== book.title;
            }));
        }
        else if (title) {
            this._wishList$.next(this._wishList$.getValue().filter(curr => {
                return curr.title !== title;
            }));
        }
        else {
            this._wishList$.next([...this._wishList$.getValue(), book]);
        }
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(); };
BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "./src/app/services/data/books.js":
/*!****************************************!*\
  !*** ./src/app/services/data/books.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const BOOKS = [
    {
        "title": "Sea of Death",
        "description": "Written in 1936 when Amado was twenty-four years old, Sea of Death tells the dockside tales of Bahia. Sailors and their wives, steeped in the rich mythology surrounding the goddess Iemanj?, are at the heart of this novel, a lyrical and tragic portrayal of the workers� daily struggle for survival. Sea of Death narrates the story of Guma and L?via, lovers whose triumphs and tribulations mirror the dark imperatives of the world around them.",
        "rating": "4.2",
        "author": "Jorge Amado",
        "price": "16.35"
    },
    {
        "title": "The Hobbit",
        "description": "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
        "rating": "4.7",
        "author": "J.R.R. Tolkien",
        "price": "10.63"
    },
    {
        "title": "Only a Whisper",
        "description": "Called in the night to transcribe the bedridden confession of a dying man, federal agent Rae Phillips lost her heart to a voice in the darkness, a hero whose face she never saw�",
        "rating": "2.1",
        "author": "Gayle Wilson",
        "price": "2.78"
    },
    {
        "title": "Autobiography of a Yogi",
        "description": "Autobiography of a Yogi is at once a beautifully written account of an exceptional life and a profound introduction to the ancient science of Yoga and its time-honored tradition of meditation",
        "rating": "4.6",
        "author": "Paramahansa Yogananda",
        "price": "18"
    },
    {
        "title": "Out There",
        "description": "Out There is a celebration of books that have a made a difference in our lives.",
        "rating": "3.2",
        "author": "Sarah Stark",
        "price": "10.14"
    },
    {
        "title": "One More Day",
        "description": "Carrie Morgan's son disappears. Rumors start to circulate through Carrie's small town. Her husband and friends start to think she's crazy. As the investigation heats up, Carrie must decide what to share, and why.",
        "rating": "3.1",
        "author": "Kelly Simmons",
        "price": "25.82"
    },
    {
        "title": "The Laundry Room",
        "description": "The Laundry Room dramatizes a fascinating moment in the history of the founding of Israel as a self-ruling nation.",
        "rating": "4",
        "author": "Lynda Lippman-Lockhart",
        "price": "17.5"
    }
];

/* harmony default export */ __webpack_exports__["default"] = (BOOKS);

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mai\Desktop\Projects\JS\Angular\BookWishList\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map