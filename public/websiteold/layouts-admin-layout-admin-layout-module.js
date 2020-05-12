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

module.exports = "<div class=\"container\">\r\n    <div class=\"row card-container\">\r\n        <div class=\"col-3 card-box\">\r\n            <br><h1>{{total_likes}}</h1>\r\n                <h3>Total Likes</h3>\r\n            </div>\r\n        <div class=\"col-3 card-box\">\r\n               <br><h1>{{total_dislikes}}</h1>\r\n                <h3>Total Dislikes</h3>\r\n            </div>\r\n        <div class=\"col-3 card-box\">\r\n            <br><h1>{{total_viewes}}</h1>\r\n                <h3>Total Views</h3>\r\n        </div>\r\n        <div class=\"col-3 card-box\">\r\n            <br><h1>{{total_shares}}</h1>\r\n                <h3>Total Shares</h3>\r\n        </div>\r\n        <div class=\"col-3 card-box\">\r\n            <br><h1>10</h1>\r\n                <h3>Total Download</h3>\r\n        </div>\r\n        <div class=\"col-3 card-box\">\r\n            <br><h1>{{total_users}}</h1>\r\n                <h3>Total Users</h3>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/default-settings/default-settings.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/default-settings/default-settings.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <mat-slide-toggle [checked]=\"banner\"  [color]=\"color\" (change)=\"toggle($event)\" style=\"margin-top:13%;margin-left:8%;width: 50%;\"><p style=\"margin-top: 5%;font-weight: 400;\">{{most_viewed}}</p></mat-slide-toggle>\r\n\r\n  \r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mobile-users/mobile-users.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mobile-users/mobile-users.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <h4 class=\"card-title\">Mobile Users</h4>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"id\">\r\n              <th mat-header-cell *matHeaderCellDef> Id </th>\r\n              <td mat-cell *matCellDef=\"let row\" > {{row.id}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Name Column -->\r\n            <!-- <ng-container matColumnDef=\"name\">\r\n              <th mat-header-cell *matHeaderCellDef style=\"padding-left:51px !important;\"> Name </th>\r\n              <td mat-cell *matCellDef=\"let row\" style=\"padding-left:51px !important;\"> {{row.name}} </td>\r\n            </ng-container> -->\r\n\r\n            <!-- Email Column -->\r\n            <ng-container matColumnDef=\"email\" *ngIf=\"blur_email\">\r\n              <th mat-header-cell *matHeaderCellDef style=\"padding-left:51px !important;\"> Email </th>\r\n              <td mat-cell *matCellDef=\"let row\"  style=\"padding-left:51px !important;\"> {{row.maskemail}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"email\" *ngIf=\"clear_email\">\r\n              <th mat-header-cell *matHeaderCellDef style=\"padding-left:51px !important;\"> Email </th>\r\n              <td mat-cell *matCellDef=\"let row\" style=\"padding-left:51px !important;\"  > {{row.email}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Mobile number Column -->\r\n            <ng-container matColumnDef=\"gender\">\r\n              <th mat-header-cell *matHeaderCellDef> Gender </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.gender}} </td>\r\n            </ng-container>\r\n\r\n            <!-- Role Column -->\r\n            <ng-container matColumnDef=\"age\">\r\n              <th mat-header-cell *matHeaderCellDef> Age </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.age}} </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n          </table>\r\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload{\r\n    text-align:center; \r\n    color: black; \r\n    font-weight: bolder;\r\n}\r\n.main-content {\r\n    margin-top: 31px;\r\n    padding: 30px 15px;\r\n    height: 69px;\r\n}\r\n.card-stats .card-header.card-header-icon i {\r\n    font-size: 60px;\r\n    line-height: 87px;\r\n    width: 199px;\r\n    height: 88px;\r\n    text-align: center;\r\n}\r\n.card [class*=card-header-] .card-icon, .card [class*=card-header-] .card-text {\r\n    border-radius: 0px;\r\n    background-color: #999999;\r\n    width: 259px;\r\n    padding: 20px;\r\n    margin: 0px -7%; \r\n    background:lightblue; \r\n}\r\n.card-stats .card-header.card-header-icon, .card-stats .card-header.card-header-text {\r\n    text-align: left;\r\n    height: 211px;\r\n}\r\n.card .card-category .material-icons {\r\n    position: absolute;\r\n    font-size: xx-large;\r\n    top: 138px;\r\n    color: black;\r\n    line-height: 1;\r\n    margin: 0px 71%;\r\n}\r\n.card-box {\r\n    margin: 2px 2px;\r\n    border: 1px solid gray;\r\n    text-align: center;\r\n    height: 164px;\r\n    background: #f2f2f2;\r\n    color: #333333;\r\n}\r\n.card-container {\r\n    padding: 6%;\r\n    margin: 80px 0px;\r\n}\r\nh1 {\r\n    padding: 15px;\r\n}\r\nh3{\r\n    margin-top: -22px;\r\n}\r\n@media (min-width:1024px) and (max-width:1279px){\r\n    .card-container {\r\n        width:123%\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtRQUNJO0lBQ0o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWR7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjsgXHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDMxcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDY5cHg7XHJcbn1cclxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24gaSB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogODdweDtcclxuICAgIHdpZHRoOiAxOTlweDtcclxuICAgIGhlaWdodDogODhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZCBbY2xhc3MqPWNhcmQtaGVhZGVyLV0gLmNhcmQtaWNvbiwgLmNhcmQgW2NsYXNzKj1jYXJkLWhlYWRlci1dIC5jYXJkLXRleHQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcclxuICAgIHdpZHRoOiAyNTlweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDBweCAtNyU7IFxyXG4gICAgYmFja2dyb3VuZDpsaWdodGJsdWU7IFxyXG59XHJcbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uLCAuY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAyMTFweDtcclxufVxyXG4uY2FyZCAuY2FyZC1jYXRlZ29yeSAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIHRvcDogMTM4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG1hcmdpbjogMHB4IDcxJTtcclxufVxyXG4uY2FyZC1ib3gge1xyXG4gICAgbWFyZ2luOiAycHggMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTY0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDYlO1xyXG4gICAgbWFyZ2luOiA4MHB4IDBweDtcclxufVxyXG5oMSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbmgze1xyXG4gICAgbWFyZ2luLXRvcDogLTIycHg7XHJcbn0gXHJcbkBtZWRpYSAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTI3OXB4KXtcclxuICAgIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6MTIzJVxyXG4gICAgfVxyXG59Il19 */"

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
            // console.log(response, "response get analytics");
            // this.tableData = response;
            _this.total_likes = response[0].total_likes;
            _this.total_dislikes = response[0].total_dislikes;
            _this.total_viewes = response[0].total_views;
            _this.total_downloads = response[0].total_downloads;
            _this.total_shares = response[0].total_share;
            _this.total_users = response[1].tota_users;
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
        // console.log(url,"outgoing url");
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
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
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
    function DefaultSettingsComponent(service, toasterService) {
        this.service = service;
        this.toasterService = toasterService;
        this.checked = false;
        this.data = [];
        this.banner = false;
    }
    DefaultSettingsComponent.prototype.ngOnInit = function () {
        var payload = {};
        this.defaultsettings(payload);
    };
    DefaultSettingsComponent.prototype.toggle = function (event) {
        var _this = this;
        var Active_state;
        // console.log(event.checked, "vhg");
        if (event.checked == true) {
            Active_state = "Most";
            this.banner = true;
            this.most_viewed = "ON  : Latest 5 videos will be listed on Mobile app banners";
        }
        else {
            Active_state = "Latest";
            this.banner = false;
            this.most_viewed = "OFF :Most viewed 5 videos will be listed in Mobile app banners";
        }
        var payload = {
            Active_status: Active_state,
        };
        // console.log(payload, "ghghjg")
        this.service.defaultsettingStatus(payload)
            .subscribe(function (response) {
            // console.log(response,"settings response");
            _this.toasterService.pop("success", "Default Settings", "Default Settings updated successfully");
        });
    };
    DefaultSettingsComponent.prototype.defaultsettings = function (payload) {
        var _this = this;
        this.service.defaultsettings(payload)
            .subscribe(function (response) {
            console.log(response, "response");
            _this.data = response;
            console.log(_this.data[0].banner, "this.data[0].banner");
            if (_this.data[0].banner == 'Latest') {
                _this.banner = false;
                _this.most_viewed = "OFF :Most viewed 5 videos will be listed in Mobile app banners";
                // this.defaultsettings(payload);
            }
            else {
                _this.banner = true;
                _this.most_viewed = "ON  : Latest 5 videos will be listed on Mobile app banners";
                // this.defaultsettings(payload);
            }
        });
    };
    DefaultSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default-settings',
            template: __webpack_require__(/*! raw-loader!./default-settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/default-settings/default-settings.component.html"),
            styles: [__webpack_require__(/*! ./default-settings.component.scss */ "./src/app/default-settings/default-settings.component.scss")]
        }),
        __metadata("design:paramtypes", [app_default_settings_default_settings_service__WEBPACK_IMPORTED_MODULE_1__["DefaultSettingsService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
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
    { path: 'category', component: app_state_state_component__WEBPACK_IMPORTED_MODULE_2__["StateComponent"] },
    { path: 'subcategory', component: app_city_city_component__WEBPACK_IMPORTED_MODULE_3__["CityComponent"] }
];


/***/ }),

/***/ "./src/app/mobile-users/mobile-users.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/mobile-users/mobile-users.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  margin: 5px 12px !important;\n  color: black;\n}\n\n.blur_text {\n  color: transparent;\n  text-shadow: 0 0 8px #000;\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  table {\n    width: 100%;\n  }\n}\n\n@supports (-ms-ime-align: auto) {\n  table {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlLXVzZXJzL0Q6XFx2aWRlby1zdHJlYW1cXG9ubGluZS12aWRlby1zdHJlYW0tZnJvbnRlbmQvc3JjXFxhcHBcXG1vYmlsZS11c2Vyc1xcbW9iaWxlLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2JpbGUtdXNlcnMvbW9iaWxlLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNKLHlCQUFBO0FDQ0E7O0FEQ0E7RUFDSTtJQUNFLFdBQUE7RUNFSjtBQUNGOztBREFBO0VBQ0k7SUFDRSxXQUFBO0VDRUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS11c2Vycy9tb2JpbGUtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZXtcclxuICAgIG1hcmdpbjogNXB4IDEycHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJsdXJfdGV4dHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxudGV4dC1zaGFkb3c6IDAgMCA4cHggIzAwMDtcclxufVxyXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xyXG4gICAgdGFibGV7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICB0YWJsZXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiA1cHggMTJweCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ibHVyX3RleHQge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiAwIDAgOHB4ICMwMDA7XG59XG5cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
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
    function MobileUsersComponent(service, authservice) {
        this.service = service;
        this.authservice = authservice;
        this.tableData = [];
        this.blur_email = false;
        this.clear_email = false;
        this.displayedColumns = ['email', 'gender', 'age'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData);
    }
    MobileUsersComponent.prototype.ngOnInit = function () {
        console.log(this.authservice.role_id, "mobile role id");
        var payload = {};
        this.getMobileUsers(payload);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData);
        this.dataSource.paginator = this.paginator;
        if (this.authservice.role_id == 2) {
            this.blur_email = true;
            this.clear_email = false;
        }
        else if (this.authservice.role_id == 3) {
            this.clear_email = true;
            this.blur_email = false;
        }
        if (this.authservice.role_id === undefined) {
            this.authservice.role_id = localStorage.getItem('role');
            if (this.authservice.role_id == 2) {
                this.blur_email = true;
                this.clear_email = false;
            }
            else if (this.authservice.role_id == 3) {
                this.clear_email = true;
                this.blur_email = false;
            }
        }
    };
    MobileUsersComponent.prototype.getMobileUsers = function (payload) {
        var _this = this;
        this.service.getMobileUsers(payload)
            .subscribe(function (response) {
            _this.tableData = response;
            _this.tableData.forEach(function (element, index) {
                var maskid = "";
                var myemailId = element['email'];
                var prefix = myemailId.substring(0, myemailId.lastIndexOf("@"));
                var postfix = myemailId.substring(myemailId.lastIndexOf("@"));
                for (var i = 0; i < prefix.length; i++) {
                    if (i == 0 || i == prefix.length - 1) {
                        maskid = maskid + prefix[i].toString();
                    }
                    else {
                        maskid = maskid + "*";
                    }
                }
                maskid = maskid + postfix;
                element['maskemail'] = maskid;
            });
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
        __metadata("design:paramtypes", [app_mobile_users_mobile_users_service__WEBPACK_IMPORTED_MODULE_2__["MobileUserService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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
        // console.log(url,"outgoing url");
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

module.exports = "div.collapsed {\n  display: -webkit-inline-box;\n  display: inline-block;\n  font-size: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 85%;\n}\n\n.readMore {\n  margin-top: -3px !important;\n  line-height: 1.4 !important;\n}\n\n.isCollapsed {\n  width: 85%;\n}\n\n.cb {\n  clear: both;\n  height: 0;\n}\n\n.pull-right {\n  float: right;\n}\n\n.pull-left {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZC1tb3JlL0Q6XFx2aWRlby1zdHJlYW1cXG9ubGluZS12aWRlby1zdHJlYW0tZnJvbnRlbmQvc3JjXFxhcHBcXHJlYWQtbW9yZVxccmVhZC1tb3JlLnNjc3MiLCJzcmMvYXBwL3JlYWQtbW9yZS9yZWFkLW1vcmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQVBTO0VBUVQsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQ0hGOztBRE1BO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtBQ0hKOztBRE1BO0VBQ0ksVUFBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLFNBQUE7QUNISjs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3JlYWQtbW9yZS9yZWFkLW1vcmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250LXNpemU6MTAwJTtcclxuJGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiRsaW5lcy10by1zaG93OiAxO1xyXG5cclxuZGl2LmNvbGxhcHNlZCB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6ICRmb250LXNpemU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdpZHRoOiA4NSU7XHJcbn1cclxuXHJcbi5yZWFkTW9yZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS40ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pc0NvbGxhcHNlZCB7XHJcbiAgICB3aWR0aDogODUlO1xyXG59XHJcblxyXG4uY2Ige1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wdWxsLWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59IiwiZGl2LmNvbGxhcHNlZCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogODUlO1xufVxuXG4ucmVhZE1vcmUge1xuICBtYXJnaW4tdG9wOiAtM3B4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjQgIWltcG9ydGFudDtcbn1cblxuLmlzQ29sbGFwc2VkIHtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLmNiIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGhlaWdodDogMDtcbn1cblxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */"

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