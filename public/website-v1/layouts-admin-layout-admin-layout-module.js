(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/angular2-text-show-more-less/text-show-more-less.umd.js":
/*!******************************************************************************!*\
  !*** ./node_modules/angular2-text-show-more-less/text-show-more-less.umd.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js")) :
	undefined;
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TextShowLessComponent = (function () {
    function TextShowLessComponent() {
        this.showTail = false;
        // @Input() textData;
        this.data = '';
        //data = 'Mufthi Mohammed Ali'
        this.tempLength = 0;
        this.readMore = false;
        this.showMoreText = '+ Read More';
        this.showLessText = '- Read Less';
    }
    /**
     * @return {?}
     */
    TextShowLessComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tempLength = this.data.length;
        this.maxLengthCloned = this.maxLength || 0;
        this.data = this.data || '';
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TextShowLessComponent.prototype.swap = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log('read more..readless fired'+ this.data.length);
        // console.log('tempLength ' + this.tempLength);
        // console.log('maxLengthCloned ' + this.maxLengthCloned);
        // console.log('maxLength' + this.maxLength);
        // this.tempLength =  this.data.length + this.maxLengthCloned;
        // this.maxLengthCloned =  this.data.length - this.maxLengthCloned;
        // this.tempLength =  this.data.length - this.maxLengthCloned;
        if (this.maxLengthCloned === this.maxLength) {
            this.maxLengthCloned = this.data.length;
        }
        else {
            this.maxLengthCloned = this.maxLength;
        }
        // console.log('tempLength ' + this.tempLength);
        // console.log('maxLengthCloned ' + this.maxLengthCloned);
        // console.log('maxLength' + this.maxLength);
        // this.readMore = data;
    };
    TextShowLessComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'crystal-text-show-less',
                    template: "<div class=\"text-show-less\" style=\"text-align: justify;\"> <div *ngIf=\"maxLength < data?.length\">   <div *ngIf=\"maxLengthCloned < data?.length\"  > <!-- {{maxLengthCloned}} - {{data?.length}} - {{maxLength}} --> {{ (data  | slice: 0:maxLength) + '...' }}  <div *ngIf=\"showTail\" class=\"custom-end d-inline-block custom-font-size\" style=\"position: relative;\" (click)=\"swap('show more')\"> {{showMoreText}} </div> <!-- {{data.length}} --> </div> <div *ngIf=\"maxLengthCloned >= data?.length\"> {{ data  }}  <div *ngIf=\"maxLengthCloned >= data?.length && showTail\" style=\"position: relative;\" class=\"custom-end d-inline-block custom-font-size\" (click)=\"swap('show less')\"> {{showLessText}}</div>  </div> </div> <div *ngIf=\"maxLength >= data?.length\"  >{{ data }}  </div> </div> <!-- <div class=\"truncate\" [ngClass]=\"{'truncated':readMore}\"> {{data}} <div *ngIf=\"!readMore\" class=\"custom-end d-inline-block custom-font-size\" (click)=\"swap(true)\"> {{showMoreText}} </div> <div *ngIf=\"readMore\" class=\"custom-end d-inline-block custom-font-size\" (click)=\"swap(false)\"> {{showLessText}} </div> </div> --> ",
                    styles: [".custom-end { color: #007bff; text-decoration: none; -ms-touch-action: manipulation; touch-action: manipulation; background-color: transparent; cursor: pointer; } div { line-height: 1.3; font-size: 13px; } .d-inline-block { display: inline-block; } .custom-font-size { font-size: 12px; } .truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; float: left; word-wrap: break-word; width: 300px; } .truncate.truncated { white-space: initial; } .form-control:focus { border-color: transparent; } "]
                },] },
    ];
    /** @nocollapse */
    TextShowLessComponent.ctorParameters = function () { return []; };
    TextShowLessComponent.propDecorators = {
        "maxLength": [{ type: core.Input },],
        "showTail": [{ type: core.Input },],
        "data": [{ type: core.Input },],
    };
    return TextShowLessComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TextShowMoreLessModule = (function () {
    function TextShowMoreLessModule() {
    }
    /**
     * @return {?}
     */
    TextShowMoreLessModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TextShowMoreLessModule,
            providers: []
        };
    };
    TextShowMoreLessModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        TextShowLessComponent,
                    ],
                    exports: [
                        TextShowLessComponent,
                    ]
                },] },
    ];
    return TextShowMoreLessModule;
}());

exports.TextShowMoreLessModule = TextShowMoreLessModule;
exports.TextShowLessComponent = TextShowLessComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js ***!
  \*********************************************************************/
/*! exports provided: SlickCarouselComponent, SlickCarouselModule, SlickItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselComponent", function() { return SlickCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselModule", function() { return SlickCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickItemDirective", function() { return SlickItemDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




/**
 * @fileoverview added by tsickle
 * Generated from: slick.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Slick component
 */
var SlickCarouselComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function SlickCarouselComponent(el, zone, platformId) {
        this.el = el;
        this.zone = zone;
        this.platformId = platformId;
        this.afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slides = [];
        this.initialized = false;
        this._removedSlides = [];
        this._addedSlides = [];
    }
    /**
     * On component destroy
     */
    /**
     * On component destroy
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngOnDestroy = /**
     * On component destroy
     * @return {?}
     */
    function () {
        this.unslick();
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.ngAfterViewChecked();
    };
    /**
     * On component view checked
     */
    /**
     * On component view checked
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngAfterViewChecked = /**
     * On component view checked
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
            /** @type {?} */
            var nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;
            if (!this.initialized) {
                if (nextSlidesLength > 0) {
                    this.initSlick();
                }
                // if nextSlidesLength is zere, do nothing
            }
            else if (nextSlidesLength === 0) { // unslick case
                this.unslick();
            }
            else {
                this._addedSlides.forEach((/**
                 * @param {?} slickItem
                 * @return {?}
                 */
                function (slickItem) {
                    _this.slides.push(slickItem);
                    _this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        _this.$instance.slick('slickAdd', slickItem.el.nativeElement);
                    }));
                }));
                this._addedSlides = [];
                this._removedSlides.forEach((/**
                 * @param {?} slickItem
                 * @return {?}
                 */
                function (slickItem) {
                    /** @type {?} */
                    var idx = _this.slides.indexOf(slickItem);
                    _this.slides = _this.slides.filter((/**
                     * @param {?} s
                     * @return {?}
                     */
                    function (s) { return s !== slickItem; }));
                    _this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        _this.$instance.slick('slickRemove', idx);
                    }));
                }));
                this._removedSlides = [];
            }
        }
    };
    /**
     * init slick
     */
    /**
     * init slick
     * @return {?}
     */
    SlickCarouselComponent.prototype.initSlick = /**
     * init slick
     * @return {?}
     */
    function () {
        var _this = this;
        this.slides = this._addedSlides;
        this._addedSlides = [];
        this._removedSlides = [];
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance = jQuery(_this.el.nativeElement);
            _this.$instance.on('init', (/**
             * @param {?} event
             * @param {?} slick
             * @return {?}
             */
            function (event, slick) {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.init.emit({ event: event, slick: slick });
                }));
            }));
            _this.$instance.slick(_this.config);
            _this.zone.run((/**
             * @return {?}
             */
            function () {
                _this.initialized = true;
                _this.currentIndex = (_this.config && _this.config.initialSlide) ? _this.config.initialSlide : 0;
            }));
            _this.$instance.on('afterChange', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} currentSlide
             * @return {?}
             */
            function (event, slick, currentSlide) {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.afterChange.emit({ event: event, slick: slick, currentSlide: currentSlide });
                    _this.currentIndex = currentSlide;
                }));
            }));
            _this.$instance.on('beforeChange', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} currentSlide
             * @param {?} nextSlide
             * @return {?}
             */
            function (event, slick, currentSlide, nextSlide) {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.beforeChange.emit({ event: event, slick: slick, currentSlide: currentSlide, nextSlide: nextSlide });
                    _this.currentIndex = nextSlide;
                }));
            }));
            _this.$instance.on('breakpoint', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} breakpoint
             * @return {?}
             */
            function (event, slick, breakpoint) {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.breakpoint.emit({ event: event, slick: slick, breakpoint: breakpoint });
                }));
            }));
            _this.$instance.on('destroy', (/**
             * @param {?} event
             * @param {?} slick
             * @return {?}
             */
            function (event, slick) {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.destroy.emit({ event: event, slick: slick });
                    _this.initialized = false;
                }));
            }));
        }));
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickCarouselComponent.prototype.addSlide = /**
     * @param {?} slickItem
     * @return {?}
     */
    function (slickItem) {
        this._addedSlides.push(slickItem);
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickCarouselComponent.prototype.removeSlide = /**
     * @param {?} slickItem
     * @return {?}
     */
    function (slickItem) {
        this._removedSlides.push(slickItem);
    };
    /**
     * Slick Method
     */
    /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickGoTo = /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance.slick('slickGoTo', index);
        }));
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickNext = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance.slick('slickNext');
        }));
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickPrev = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance.slick('slickPrev');
        }));
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickPause = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance.slick('slickPause');
        }));
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.slickPlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.$instance.slick('slickPlay');
        }));
    };
    /**
     * @return {?}
     */
    SlickCarouselComponent.prototype.unslick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.$instance) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.$instance.slick('unslick');
            }));
            this.$instance = undefined;
        }
        this.initialized = false;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SlickCarouselComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this.initialized) {
            /** @type {?} */
            var config = changes['config'];
            if (config.previousValue !== config.currentValue && config.currentValue !== undefined) {
                /** @type {?} */
                var refresh_1 = config.currentValue['refresh'];
                /** @type {?} */
                var newOptions_1 = Object.assign({}, config.currentValue);
                delete newOptions_1['refresh'];
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    _this.$instance.slick('slickSetOption', newOptions_1, refresh_1);
                }));
            }
        }
    };
    SlickCarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngx-slick-carousel',
                    exportAs: 'slick-carousel',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return SlickCarouselComponent; })),
                            multi: true
                        }],
                    template: '<ng-content></ng-content>'
                }] }
    ];
    /** @nocollapse */
    SlickCarouselComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    SlickCarouselComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        afterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        beforeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        breakpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        destroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return SlickCarouselComponent;
}());
if (false) {}
var SlickItemDirective = /** @class */ (function () {
    function SlickItemDirective(el, platformId, carousel) {
        this.el = el;
        this.platformId = platformId;
        this.carousel = carousel;
    }
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.addSlide(this);
        }
    };
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.removeSlide(this);
        }
    };
    SlickItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[ngxSlickItem]',
                },] }
    ];
    /** @nocollapse */
    SlickItemDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: SlickCarouselComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
    ]; };
    return SlickItemDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlickCarouselModule = /** @class */ (function () {
    function SlickCarouselModule() {
    }
    SlickCarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                    ],
                    declarations: [
                        SlickCarouselComponent,
                        SlickItemDirective,
                    ],
                    exports: [
                        SlickCarouselComponent,
                        SlickItemDirective,
                    ]
                },] }
    ];
    return SlickCarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-slick-carousel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-slick-carousel.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row card-container\" *ngFor=\"let table of tableData\">\n        <div class=\"col-3 card-box\">\n            <br><h1>{{table.total_likes}}</h1>\n                <h3>Total Likes</h3>\n            </div>\n        <div class=\"col-3 card-box\">\n               <br><h1>{{table.total_dislikes}}</h1>\n                <h3>Total Dislikes</h3>\n            </div>\n        <div class=\"col-3 card-box\">\n            <br><h1>{{table.total_views}}</h1>\n                <h3>Total Views</h3>\n        </div>\n        <div class=\"col-3 card-box\">\n            <br><h1>{{table.total_share}}</h1>\n                <h3>Total Shares</h3>\n        </div>\n        <div class=\"col-3 card-box\">\n            <br><h1>10</h1>\n                <h3>Total Download</h3>\n        </div>\n        <div class=\"col-3 card-box\">\n            <br><h1>2 </h1>\n                <h3>Total Users</h3>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/default-settings/default-settings.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/default-settings/default-settings.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <mat-slide-toggle [checked]=\"banner\"  [color]=\"color\" (change)=\"toggle($event)\" style=\"margin-top:13%;margin-left:8%;width: 32%;\"><p style=\"margin-top: 15%;font-weight: 400;\">{{most_viewed}}</p></mat-slide-toggle>\n\n  \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mobile-users/mobile-users.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mobile-users/mobile-users.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-primary\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h4 class=\"card-title\">Mobile Users</h4>\n              </div>\n            </div>\n          </div>\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"id\">\n              <th mat-header-cell *matHeaderCellDef> Id </th>\n              <td mat-cell *matCellDef=\"let row\" > {{row.id}} </td>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef style=\"padding-left:51px !important;\"> Name </th>\n              <td mat-cell *matCellDef=\"let row\" style=\"padding-left:51px !important;\"> {{row.name}} </td>\n            </ng-container>\n\n            <!-- Email Column -->\n            <ng-container matColumnDef=\"email\">\n              <th mat-header-cell *matHeaderCellDef> Email </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n            </ng-container>\n\n            <!-- Mobile number Column -->\n            <ng-container matColumnDef=\"gender\">\n              <th mat-header-cell *matHeaderCellDef> Gender </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.gender}} </td>\n            </ng-container>\n\n            <!-- Role Column -->\n            <ng-container matColumnDef=\"age\">\n              <th mat-header-cell *matHeaderCellDef> Age </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.age}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload{\n    text-align:center; \n    color: black; \n    font-weight: bolder;\n}\n.main-content {\n    margin-top: 31px;\n    padding: 30px 15px;\n    height: 69px;\n}\n.card-stats .card-header.card-header-icon i {\n    font-size: 60px;\n    line-height: 87px;\n    width: 199px;\n    height: 88px;\n    text-align: center;\n}\n.card [class*=card-header-] .card-icon, .card [class*=card-header-] .card-text {\n    border-radius: 0px;\n    background-color: #999999;\n    width: 259px;\n    padding: 20px;\n    margin: 0px -7%; \n    background:lightblue; \n}\n.card-stats .card-header.card-header-icon, .card-stats .card-header.card-header-text {\n    text-align: left;\n    height: 211px;\n}\n.card .card-category .material-icons {\n    position: absolute;\n    font-size: xx-large;\n    top: 138px;\n    color: black;\n    line-height: 1;\n    margin: 0px 71%;\n}\n.card-box {\n    margin: 2px 2px;\n    border: 1px solid gray;\n    text-align: center;\n    height: 164px;\n    background: #f2f2f2;\n    color: #333333;\n}\n.card-container {\n    padding: 6%;\n    margin: 80px 0px;\n}\nh1 {\n    padding: 15px;\n}\nh3{\n    margin-top: -22px;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjsgXG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLm1haW4tY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMzFweDtcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XG4gICAgaGVpZ2h0OiA2OXB4O1xufVxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24gaSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4N3B4O1xuICAgIHdpZHRoOiAxOTlweDtcbiAgICBoZWlnaHQ6IDg4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQgW2NsYXNzKj1jYXJkLWhlYWRlci1dIC5jYXJkLWljb24sIC5jYXJkIFtjbGFzcyo9Y2FyZC1oZWFkZXItXSAuY2FyZC10ZXh0IHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcbiAgICB3aWR0aDogMjU5cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDBweCAtNyU7IFxuICAgIGJhY2tncm91bmQ6bGlnaHRibHVlOyBcbn1cbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uLCAuY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBoZWlnaHQ6IDIxMXB4O1xufVxuLmNhcmQgLmNhcmQtY2F0ZWdvcnkgLm1hdGVyaWFsLWljb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICB0b3A6IDEzOHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW46IDBweCA3MSU7XG59XG4uY2FyZC1ib3gge1xuICAgIG1hcmdpbjogMnB4IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDE2NHB4O1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG4uY2FyZC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDYlO1xuICAgIG1hcmdpbjogODBweCAwcHg7XG59XG5oMSB7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbmgze1xuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xufSAiXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service) {
        this.service = service;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var payload = {};
        this.getlikes(payload);
    };
    DashboardComponent.prototype.getlikes = function (payload) {
        var _this = this;
        this.service.getlikes(payload)
            .subscribe(function (response) {
            console.log(response, "response get analytics");
            _this.tableData = response;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/urlconstant */ "./src/app/helpers/urlconstant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function () {
    function DashboardService(httpClient) {
        this.httpClient = httpClient;
    }
    DashboardService.prototype.getlikes = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].getlikes;
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/default-settings/default-settings.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/default-settings/default-settings.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQtc2V0dGluZ3MvZGVmYXVsdC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/default-settings/default-settings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/default-settings/default-settings.component.ts ***!
  \****************************************************************/
/*! exports provided: DefaultSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSettingsComponent", function() { return DefaultSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_default_settings_default_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/default-settings/default-settings.service */ "./src/app/default-settings/default-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultSettingsComponent = /** @class */ (function () {
    function DefaultSettingsComponent(service) {
        this.service = service;
        this.checked = false;
        this.data = [];
        this.banner = false;
    }
    DefaultSettingsComponent.prototype.ngOnInit = function () {
        var payload = {};
        this.defaultsettings(payload);
    };
    DefaultSettingsComponent.prototype.toggle = function (event) {
        var Active_state;
        console.log(event.checked, "vhg");
        if (event.checked == true) {
            Active_state = "Most";
        }
        else {
            Active_state = "Latest";
        }
        var payload = {
            Active_status: Active_state,
        };
        console.log(payload, "ghghjg");
        this.service.defaultsettingStatus(payload)
            .subscribe(function (response) {
            console.log(response, "true");
        });
    };
    DefaultSettingsComponent.prototype.defaultsettings = function (payload) {
        var _this = this;
        this.service.defaultsettings(payload)
            .subscribe(function (response) {
            _this.data = response;
            console.log(response, "banner");
            console.log(_this.data[0].banner, "banner");
            if (_this.data[0].banner == 'Latest') {
                _this.banner = false;
                _this.most_viewed = "Latest Videos";
                _this.defaultsettings(payload);
                // this.service.defaultsettings(payload)
                // .subscribe(response => {
                //   console.log(response,"true")
                // });
            }
            else {
                _this.banner = true;
                _this.most_viewed = "Most Viewed Videos";
                _this.defaultsettings(payload);
                // this.service.defaultsettings(payload)
                // .subscribe(response => {
                //   console.log(response,"true")
                // });
            }
        });
    };
    DefaultSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default-settings',
            template: __webpack_require__(/*! raw-loader!./default-settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/default-settings/default-settings.component.html"),
            styles: [__webpack_require__(/*! ./default-settings.component.scss */ "./src/app/default-settings/default-settings.component.scss")]
        }),
        __metadata("design:paramtypes", [app_default_settings_default_settings_service__WEBPACK_IMPORTED_MODULE_1__["DefaultSettingsService"]])
    ], DefaultSettingsComponent);
    return DefaultSettingsComponent;
}());



/***/ }),

/***/ "./src/app/default-settings/default-settings.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/default-settings/default-settings.service.ts ***!
  \**************************************************************/
/*! exports provided: DefaultSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSettingsService", function() { return DefaultSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/helpers/urlconstant */ "./src/app/helpers/urlconstant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefaultSettingsService = /** @class */ (function () {
    function DefaultSettingsService(httpClient) {
        this.httpClient = httpClient;
    }
    DefaultSettingsService.prototype.defaultsettingStatus = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].defaultsetting;
        return this.httpClient.post(url, payload);
    };
    DefaultSettingsService.prototype.defaultsettings = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].defaultsettings;
        return this.httpClient.post(url, payload);
    };
    DefaultSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DefaultSettingsService);
    return DefaultSettingsService;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var app_portal_users_portal_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/portal-users/portal-users.component */ "./src/app/portal-users/portal-users.component.ts");
/* harmony import */ var app_state_state_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/state/state.component */ "./src/app/state/state.component.ts");
/* harmony import */ var app_city_city_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/city/city.component */ "./src/app/city/city.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var app_video_upload_video_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/video-upload/video-upload.component */ "./src/app/video-upload/video-upload.component.ts");
/* harmony import */ var app_read_more_read_more__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/read-more/read-more */ "./src/app/read-more/read-more.ts");
/* harmony import */ var app_mobile_users_mobile_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/mobile-users/mobile-users.component */ "./src/app/mobile-users/mobile-users.component.ts");
/* harmony import */ var app_default_settings_default_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/default-settings/default-settings.component */ "./src/app/default-settings/default-settings.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var angular2_text_show_more_less__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-text-show-more-less */ "./node_modules/angular2-text-show-more-less/text-show-more-less.umd.js");
/* harmony import */ var angular2_text_show_more_less__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angular2_text_show_more_less__WEBPACK_IMPORTED_MODULE_21__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import {} from '@angular/material/grid-tile';






// import { FileUploader } from 'ng2-file-upload';
// import { MatFileUploadModule ,FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
// import { BrowserModule } from '@angular/platform-browser';
// import { MatFileUploadModule } from '@webacad/ng-mat-file-upload';
// import { MatFileUploadModule,BrowserModule }







var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // FontAwesomeModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_19__["SlickCarouselModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
                angular2_text_show_more_less__WEBPACK_IMPORTED_MODULE_21__["TextShowMoreLessModule"],
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                app_portal_users_portal_users_component__WEBPACK_IMPORTED_MODULE_10__["PortalUsersComponent"],
                app_state_state_component__WEBPACK_IMPORTED_MODULE_11__["StateComponent"],
                app_city_city_component__WEBPACK_IMPORTED_MODULE_12__["CityComponent"],
                app_video_upload_video_upload_component__WEBPACK_IMPORTED_MODULE_15__["VideoUploadComponent"],
                app_read_more_read_more__WEBPACK_IMPORTED_MODULE_16__["ReadMoreComponent"],
                app_mobile_users_mobile_users_component__WEBPACK_IMPORTED_MODULE_17__["MobileUsersComponent"],
                app_default_settings_default_settings_component__WEBPACK_IMPORTED_MODULE_18__["DefaultSettingsComponent"]
                // VideoDetailsDialog
                // VideouploadComponent
                // ResetPasswordComponent
            ],
            entryComponents: [
            // VideoDetailsDialog
            ],
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var app_portal_users_portal_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/portal-users/portal-users.component */ "./src/app/portal-users/portal-users.component.ts");
/* harmony import */ var app_state_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/state/state.component */ "./src/app/state/state.component.ts");
/* harmony import */ var app_city_city_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/city/city.component */ "./src/app/city/city.component.ts");
/* harmony import */ var app_video_upload_video_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/video-upload/video-upload.component */ "./src/app/video-upload/video-upload.component.ts");
/* harmony import */ var app_mobile_users_mobile_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/mobile-users/mobile-users.component */ "./src/app/mobile-users/mobile-users.component.ts");
/* harmony import */ var app_default_settings_default_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/default-settings/default-settings.component */ "./src/app/default-settings/default-settings.component.ts");







// import { AdminLayoutComponent } from './admin-layout.component';
var AdminLayoutRoutes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'video-upload', component: app_video_upload_video_upload_component__WEBPACK_IMPORTED_MODULE_4__["VideoUploadComponent"] },
    { path: 'portal-users', component: app_portal_users_portal_users_component__WEBPACK_IMPORTED_MODULE_1__["PortalUsersComponent"] },
    { path: 'mobile-users', component: app_mobile_users_mobile_users_component__WEBPACK_IMPORTED_MODULE_5__["MobileUsersComponent"] },
    { path: 'default-settings', component: app_default_settings_default_settings_component__WEBPACK_IMPORTED_MODULE_6__["DefaultSettingsComponent"] },
    { path: 'state', component: app_state_state_component__WEBPACK_IMPORTED_MODULE_2__["StateComponent"] },
    { path: 'city', component: app_city_city_component__WEBPACK_IMPORTED_MODULE_3__["CityComponent"] }
];


/***/ }),

/***/ "./src/app/mobile-users/mobile-users.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/mobile-users/mobile-users.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin: 5px 12px !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlLXVzZXJzL0c6XFxiZXRhLnZpY2ZsaXguY29tL3NyY1xcYXBwXFxtb2JpbGUtdXNlcnNcXG1vYmlsZS11c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9iaWxlLXVzZXJzL21vYmlsZS11c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlLXVzZXJzL21vYmlsZS11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxle1xyXG4gICAgbWFyZ2luOiA1cHggMTJweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsIi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiA1cHggMTJweCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/mobile-users/mobile-users.component.ts":
/*!********************************************************!*\
  !*** ./src/app/mobile-users/mobile-users.component.ts ***!
  \********************************************************/
/*! exports provided: MobileUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileUsersComponent", function() { return MobileUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_mobile_users_mobile_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/mobile-users/mobile-users.service */ "./src/app/mobile-users/mobile-users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MobileUsersComponent = /** @class */ (function () {
    function MobileUsersComponent(service) {
        this.service = service;
        this.tableData = [];
        this.displayedColumns = ['name', 'email', 'gender', 'age'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData);
    }
    MobileUsersComponent.prototype.ngOnInit = function () {
        var payload = {};
        this.getMobileUsers(payload);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData);
        this.dataSource.paginator = this.paginator;
    };
    MobileUsersComponent.prototype.getMobileUsers = function (payload) {
        var _this = this;
        this.service.getMobileUsers(payload)
            .subscribe(function (response) {
            _this.tableData = response;
            _this.dataSource.data = _this.tableData;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], MobileUsersComponent.prototype, "paginator", void 0);
    MobileUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mobile-users',
            template: __webpack_require__(/*! raw-loader!./mobile-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/mobile-users/mobile-users.component.html"),
            styles: [__webpack_require__(/*! ./mobile-users.component.scss */ "./src/app/mobile-users/mobile-users.component.scss")]
        }),
        __metadata("design:paramtypes", [app_mobile_users_mobile_users_service__WEBPACK_IMPORTED_MODULE_2__["MobileUserService"]])
    ], MobileUsersComponent);
    return MobileUsersComponent;
}());



/***/ }),

/***/ "./src/app/mobile-users/mobile-users.service.ts":
/*!******************************************************!*\
  !*** ./src/app/mobile-users/mobile-users.service.ts ***!
  \******************************************************/
/*! exports provided: MobileUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileUserService", function() { return MobileUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/helpers/urlconstant */ "./src/app/helpers/urlconstant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MobileUserService = /** @class */ (function () {
    function MobileUserService(httpClient) {
        this.httpClient = httpClient;
    }
    MobileUserService.prototype.getMobileUsers = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].getMobileUsers;
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    MobileUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MobileUserService);
    return MobileUserService;
}());



/***/ }),

/***/ "./src/app/read-more/read-more.scss":
/*!******************************************!*\
  !*** ./src/app/read-more/read-more.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.collapsed {\n  display: -webkit-inline-box;\n  display: inline-block;\n  font-size: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 85%;\n}\n\n.readMore {\n  margin-top: -3px !important;\n  line-height: 1.4 !important;\n}\n\n.isCollapsed {\n  width: 85%;\n}\n\n.cb {\n  clear: both;\n  height: 0;\n}\n\n.pull-right {\n  float: right;\n}\n\n.pull-left {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZC1tb3JlL0c6XFxiZXRhLnZpY2ZsaXguY29tL3NyY1xcYXBwXFxyZWFkLW1vcmVcXHJlYWQtbW9yZS5zY3NzIiwic3JjL2FwcC9yZWFkLW1vcmUvcmVhZC1tb3JlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFQUztFQVFULG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUNIRjs7QURNQTtFQUNJLDJCQUFBO0VBQ0EsMkJBQUE7QUNISjs7QURNQTtFQUNJLFVBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0FDSEo7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9yZWFkLW1vcmUvcmVhZC1tb3JlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1zaXplOjEwMCU7XG4kbGluZS1oZWlnaHQ6IDEuNTtcbiRsaW5lcy10by1zaG93OiAxO1xuXG5kaXYuY29sbGFwc2VkIHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5yZWFkTW9yZSB7XG4gICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQgIWltcG9ydGFudDtcbn1cblxuLmlzQ29sbGFwc2VkIHtcbiAgICB3aWR0aDogODUlO1xufVxuXG4uY2Ige1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGhlaWdodDogMDtcbn1cblxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn0iLCJkaXYuY29sbGFwc2VkIHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5yZWFkTW9yZSB7XG4gIG1hcmdpbi10b3A6IC0zcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNCAhaW1wb3J0YW50O1xufVxuXG4uaXNDb2xsYXBzZWQge1xuICB3aWR0aDogODUlO1xufVxuXG4uY2Ige1xuICBjbGVhcjogYm90aDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4ucHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnB1bGwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/read-more/read-more.ts":
/*!****************************************!*\
  !*** ./src/app/read-more/read-more.ts ***!
  \****************************************/
/*! exports provided: ReadMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadMoreComponent", function() { return ReadMoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadMoreComponent = /** @class */ (function () {
    function ReadMoreComponent(elementRef) {
        this.elementRef = elementRef;
        this.isCollapsed = true;
        this.isCollapsable = false;
    }
    ReadMoreComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReadMoreComponent.prototype, "dataLength", void 0);
    ReadMoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "read-more",
            template: "\n        <div [class.collapsed]=\"isCollapsed\" [ngClass]=\"{'isCollapsed': !isCollapsed}\" class=\"pull-left pt-2 readMore\">\n            <ng-content></ng-content>\n        </div>\n        <div class='cb'></div>\n    ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./read-more.scss */ "./src/app/read-more/read-more.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ReadMoreComponent);
    return ReadMoreComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map