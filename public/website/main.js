(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<toaster-container [toasterconfig]=\"toasterConfig\"></toaster-container>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/token-expired-dialog.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/token-expired-dialog.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div mat-dialog-content>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n                <h4> &nbsp; &nbsp; &nbsp; Your session has expired <br>\r\n                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;please login again</h4>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\" style=\"justify-content: center;\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success\" mat-dialog-close >ok</button>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/city/add-city-dialog.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/city/add-city-dialog.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title >{{dialogTitle}}</h1>\r\n<div mat-dialog-content class=\"cardbox\">\r\n\r\n    <div class=\"row container\">\r\n        <div class=\"col-md-12\">\r\n            <mat-form-field>\r\n                <mat-label>Select Main Category</mat-label>\r\n                <mat-select [(value)]=\"selectedroletype\" (selectionChange)=\"roletypeChanged($event)\" required>\r\n                    <mat-option *ngFor=\"let role of rolesReference\" [value]=\"role.cat_id\">\r\n                        {{role.cat_name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n    <div class=\"row container\">\r\n        <div class=\"col-md-12\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Add SubCategory Name\" [(ngModel)]=\"sub_name\" type=\"text\" required>\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"save_city_btn\"\r\n                (click)=\"saveCity()\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"update_city_btn\"\r\n                (click)=\"updateCity()\">Update</button>\r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/city/city.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/city/city.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-10\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-primary\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-md-6 \">\r\n                                <button type=\"button\" class=\"btn btn-default bg-info pull-right m-3\"\r\n                                    (click)=\"adduser()\">Add\r\n                                    Sub Category</button>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <h5 class=\"card-title \">Category Level-2</h5>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"sub_id\">\r\n                            <th mat-header-cell *matHeaderCellDef> Id </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.sub_id}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"sub_name\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"card-container\"> Sub Categories Name</th>\r\n                            <td mat-cell *matCellDef=\"let row\" class=\"card-container\"> {{row.sub_name}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Role Column -->\r\n                        <ng-container matColumnDef=\"cat_name\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"card-container\"> Main Category Name</th>\r\n                            <td mat-cell *matCellDef=\"let row\" class=\"card-container\"> {{row.cat_name}} </td>\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"action\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"card-container\">Actions </th>\r\n                            <td mat-cell *matCellDef=\"let row\" class=\"card-container\">\r\n                                <!-- <button mat-raised-button color=\"primary\" (click)=\"edit_low(row)\"> -->\r\n                                <a (click)=\"edit_low(row) \" style=\"color:blue; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n                                </a>\r\n                                <!-- <a href=\"\" (click)=\"edit_low(row)\"> <mat-icon aria-label=\"Edit\">edit</mat-icon></a> -->\r\n                                <!-- <mat-icon>edit</mat-icon>\r\n                                </button> -->\r\n                                <!-- <button mat-raised-button class=\"iconbutton\" (click)=\"delete_low(row)\" color=\"warn\"> -->\r\n                                <a (click)=\"delete_low(row)\" style=\"color:red; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n                                </a>\r\n                                <!-- <mat-icon>delete</mat-icon>\r\n                                </button> -->\r\n                                <!-- </td> -->\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/city/delete-city-dialog.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/city/delete-city-dialog.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align:center;\">Delete Sub Category</h1>\r\n<div mat-dialog-content>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n           <p style=\"text-align:center;\">Are you sure you want to Delete ? </p>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" [disabled]=\"delete_btn\" (click)=\"deletecity()\">Confirm</button>       \r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"footer \">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com\">\r\n                        Creative Tim\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://creative-tim.com/about-us\">\r\n                        About Us\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://blog.creative-tim.com\">\r\n                        Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a ng-click=\"redirectPage()\">\r\n                        Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com/license\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right\">\r\n            &copy;\r\n            {{test | date: 'yyyy'}}, made with love by\r\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\r\n        </div>\r\n    </div>\r\n</footer> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-categories/manage-categories.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-categories/manage-categories.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  manage-categories works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/logout/logout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/logout/logout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{header}}</h1>\r\n<div mat-dialog-content>\r\n    <div class=\"row container\">\r\n        <div class=\"col-md-12\">\r\n            <p>Are you sure you want to Logout ?\r\n        </div>\r\n    </div>\r\n    <div class=\"row default-btn1\">\r\n        <div class=\"col-md-12 default-btn1\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3 default-btn1\"\r\n                (click)=\"dashboard()\">Confirm</button>\r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3  default-btn1\" mat-dialog-close>Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\" style=\"background-color: #1f467f !important; color: white;\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper\">\r\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\" style=\"font-size:16px ;font-weight:300;\">{{getTitle()}}</a>\r\n        </div>\r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n            <!-- <form class=\"navbar-form\">\r\n                <div class=\"input-group no-border\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </div> \r\n            </form>-->\r\n            <ul class=\"navbar-nav\">\r\n                \r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <!-- <i class=\"material-icons\">dashboard</i> -->\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                        </p>\r\n                    </a>\r\n                </li>\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item\" style=\"font-size: 16px; font-size: 300;\">{{getWelComeMessage()}}\r\n                        \r\n                    </li>\r\n                </ul>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"openPopUp(filterForm.value, true)\">\r\n                        <i class=\"material-icons\">power_settings_new</i>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Account</span>\r\n                        </p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a href=\"/#/dashboard\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"/assets/img/VICFLEXLogo.png\" />\r\n        </div>\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <div *ngIf=\"isMobileMenu()\">\r\n        <form class=\"navbar-form\">\r\n            <span class=\"bmd-form-group\">\r\n            </span>\r\n        </form>\r\n    </div>\r\n    <mat-sidenav #sidenav class=\"example-sidenav\" mode=\"side\" opened=\"true\" (mouseenter)=\"mouseenter()\"\r\n        (mouseleave)=\"mouseleave()\">\r\n        <!---------------------------- super-admin-list --------------------------------->\r\n        <mat-nav-list *ngIf=\"super_admin_list\">\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">dashboard</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/dashboard']\" mat-list-item>Analytics</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">cloud_upload</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/video-upload']\" mat-list-item>Videos</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">person</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/portal-users']\" mat-list-item>Portal-Users</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">portrait</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/mobile-users']\" mat-list-item>Mobile-Users</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n            <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n            <mat-icon mat-list-icon class=\"font-c\">settings</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/default-settings']\" mat-list-item>Default-Settings</a>\r\n            </mat-list-item>\r\n            <mat-list-item (click)=\"showSubmenu = !showSubmenu\" class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <span class=\"full-width font-c\" style=\"padding-left:6%\" *ngIf=\"isExpanded || isShowing\">Manage\r\n                    Categories</span>\r\n                <mat-icon mat-list-icon class=\"font-c\">list</mat-icon>\r\n                <mat-icon class=\"menu-button font-c\" [ngClass]=\"{'rotated' : showSubmenu}\"\r\n                    *ngIf=\"isExpanded || isShowing\">\r\n                    expand_more</mat-icon>\r\n            </mat-list-item>\r\n            <div class=\"submenu\" [ngClass]=\"{'expanded' : showSubmenu}\" *ngIf=\"isShowing || isExpanded\">\r\n                <a mat-list-item class=\"font-c p-right parent\" style=\"padding: 0% 0% 0% 19%;\"\r\n                    [routerLink]=\"['/category']\">Category</a>\r\n                <a mat-list-item class=\"font-c p-right parent\" style=\" padding: 0% 0% 0% 19%;\"\r\n                    [routerLink]=\"['/subcategory']\">Sub Category</a>\r\n            </div>\r\n        </mat-nav-list>\r\n        <!---------------------------- admin-list --------------------------------->\r\n        <mat-nav-list *ngIf=\"admin_list\">\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">dashboard</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/dashboard']\" mat-list-item>Analytics</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">cloud_upload</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/video-upload']\" mat-list-item>Videos</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">person</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/portal-users']\" mat-list-item>Portal-Users</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">portrait</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/mobile-users']\" mat-list-item>Mobile-Users</a>\r\n            </mat-list-item>\r\n            <!-- <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\"> -->\r\n            <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n            <!-- <mat-icon mat-list-icon class=\"font-c\">settings</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/default-settings']\" mat-list-item>Default-Settings</a>\r\n            </mat-list-item> -->\r\n            <mat-list-item (click)=\"showSubmenu = !showSubmenu\" class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <span class=\"full-width font-c\" style=\"padding-left:6%\" *ngIf=\"isExpanded || isShowing\">Manage\r\n                    Categories</span>\r\n                <mat-icon mat-list-icon class=\"font-c\">list</mat-icon>\r\n                <mat-icon class=\"menu-button font-c\" [ngClass]=\"{'rotated' : showSubmenu}\"\r\n                    *ngIf=\"isExpanded || isShowing\">\r\n                    expand_more</mat-icon>\r\n            </mat-list-item>\r\n            <div class=\"submenu\" [ngClass]=\"{'expanded' : showSubmenu}\" *ngIf=\"isShowing || isExpanded\">\r\n                <a class=\"font-c p-right parent\" style=\"padding: 0% 0% 0% 19%;\"\r\n                    [routerLink]=\"['/category']\" mat-list-item>Category</a>\r\n                <a class=\"font-c p-right parent\" style=\" padding: 0% 0% 0% 19%;\"\r\n                    [routerLink]=\"['/subcategory']\" mat-list-item>Sub Category</a>\r\n            </div>\r\n        </mat-nav-list>\r\n        \r\n        <!---------------------------- uploader-list --------------------------------->\r\n        <mat-nav-list *ngIf=\"uploader\">\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <mat-icon mat-list-icon class=\"font-c\">dashboard</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/dashboard']\" mat-list-item>Dashboard</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <mat-icon mat-list-icon class=\"font-c\">cloud_upload</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/video-upload']\" mat-list-item>Video Upload</a>\r\n            </mat-list-item>\r\n        </mat-nav-list>\r\n        <mat-nav-list>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\" style=\"margin: -62px;\">\r\n    <div class=\"col-md-4 offset-md-4\">\r\n      <div class=\"logo\">\r\n        <img src=\"/assets/img/VICFLEXLogo.png\"\r\n          style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\" />\r\n        <div class=\"vl\">\r\n        </div>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video\r\n          Streaming</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal\r\n          Management</h6>\r\n      </div>\r\n      <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%; height:300px\">\r\n        <mat-card-content>\r\n          <div class=\"text-center pb-1\">\r\n            <h5 class=\"text-dark1\">Please check your e-mail\r\n            </h5>\r\n            <h5 class=\"text-dark2\">and click on the link to\r\n            </h5>\r\n            <h5 class=\"text-dark3\">reset the password.\r\n            </h5>\r\n          </div>\r\n          <div class=\"text-center pb-1\">\r\n            <button mat-raised-button class=\"mat-primary full-width mb-1 \"\r\n              style=\"width: 40%;border-radius: 0px;margin-top: 12%; background: #1f467f;color: #dae8f7;\">\r\n              <a href=\"https://beta.vicflix.com/#/dashboard\" style=\"color: #dae8f7;\">Sign in</a>\r\n            </button>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"footer\"\r\n  style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\r\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\r\n    <nav>\r\n      <ul>\r\n        <li>\r\n          <a href=\"https://beta.vicflix.com\">\r\n            @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/helpers/token-expired-dialog.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/helpers/token-expired-dialog.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n    <div class=\"row container\">\r\n        <div class=\"col-md-12\">\r\n                <h4> &nbsp; &nbsp; &nbsp; Your session has expired <br>\r\n                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;please login again</h4>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\" style=\"justify-content: center;\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success\" mat-dialog-close >ok</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <!-- <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div> -->\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"fixed-plugin\">\r\n         <div class=\"dropdown show-dropdown open show\">\r\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n                <i class=\"fa fa-cog fa-2x\"> </i>\r\n            </a>  -->\r\n            <!-- <ul class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\r\n                <li class=\"header-title\"> Sidebar Filters</li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                        <div class=\"ml-auto mr-auto\">\r\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\r\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\r\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\r\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\r\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    <div class=\"ripple-container\"></div></a>\r\n                </li>\r\n                <li class=\"header-title\">Images</li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\r\n                    <div class=\"ripple-container\"></div></a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li class=\"active\">\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li class=\"button-container\">\r\n                    <div>\r\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\r\n                            Download Free\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n                <li class=\"button-container\">\r\n                    <div>\r\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\r\n                            Buy Pro\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\r\n                  <div>\r\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\r\n                        View Documentation\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n            </ul> \r\n        </div> \r\n    </div>\r\n</div> -->\r\n<!-- Buy-Modal-angular -->\r\n<!-- <div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n<div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n            <h4 class=\"margin-top\">\r\n                Free Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Html5\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container image-angular-cli\">\r\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Angular\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <h4>\r\n                PRO Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container\">\r\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                </div>\r\n                Html5\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        49\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container image-angular-cli\">\r\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                </div>\r\n                Angular\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        59\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/forgot-password-dialog.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/forgot-password-dialog.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Enter your email</h1>\r\n<div mat-dialog-content class=\"container_card\">\r\n    <form [formGroup]=\"forgotform\" (ngSubmit)=\"check_email()\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <mat-form-field >\r\n                <input matInput placeholder=\"Enter your email\" required formControlName=\"email\" [(ngModel)]=\"email\" type=\"email\" >\r\n                <mat-error>Please enter valid email.</mat-error>\r\n           </mat-form-field>\r\n       </div>\r\n    </div>\r\n    <div class=\"row default-btn1\">\r\n        <div class=\"col-md-12 default-btn1\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3 default-btn1\" (click)=\"check_email()\">Confirm</button> \r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3 default-btn1\" mat-dialog-close>Cancel</button> \r\n        </div>\r\n    </div>\r\n</form>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\" style=\"margin: -62px;\">\r\n    <div class=\"col-md-4 offset-md-4\">\r\n      <div class=\"logo\">\r\n        <img src=\"/assets/img/VICFLEXLogo.png\" style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\"/>\r\n        <div class=\"vl\">\r\n        </div>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video Streaming</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal Management</h6>\r\n      </div>\r\n      <!-- <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\r\n        <div class=\"page-wrap height-100 mat-bg-primary\">\r\n          <div class=\"session-form-hold\"> -->\r\n            <!-- <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar> -->\r\n            <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%;\">\r\n              <mat-card-content>\r\n                <div class=\"text-center pb-1\">\r\n                  <!-- <img src=\"assets/images/herdman_logo.png\" alt=\"\" class=\"mb-05\"> -->\r\n                  <h4 class=\"text-dark\">Admin / Manager Login</h4>\r\n                </div>\r\n                <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\r\n                  <div class=\"\">\r\n                    <mat-form-field class=\"example-full-width\" style=\"padding: 0% 11%;\">\r\n                      <input matInput name=\"email\" [(ngModel)]=\"email\" [formControl]=\"signinForm.controls['email']\"\r\n                        placeholder=\"Email*\" value=\"\">\r\n                    </mat-form-field>\r\n                    <mat-error style=\"padding-left: 11%;\"\r\n                      *ngIf=\"signinForm.controls['email'].hasError('required') && signinForm.controls['email'].touched\"\r\n                      class=\"form-error-msg\"> Email is required\r\n                    </mat-error>\r\n                  </div>\r\n\r\n                  <div class=\"\">\r\n                    <mat-form-field class=\"example-full-width\" style=\"padding: 0% 11%;\">\r\n                      <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" matInput\r\n                        [formControl]=\"signinForm.controls['password']\" placeholder=\"Password*\" value=\"\">\r\n                    </mat-form-field>\r\n\r\n                    <!-- <small -->\r\n                    <mat-error style=\"padding-left: 11%;\"\r\n                      *ngIf=\"signinForm.controls['password'].hasError('required') && signinForm.controls['password'].touched\"\r\n                      class=\"form-error-msg red-color\"> Password is required </mat-error>\r\n                    <!-- </small> -->\r\n                  </div>\r\n\r\n                  <div class=\"text-center pb-1\">\r\n                    <button mat-raised-button class=\"mat-primary full-width mb-1 \" style=\"width: 40%;border-radius: 0px;background: #1f467f;color: #dae8f7;\">\r\n                      Sign in\r\n                    </button>\r\n                  </div>\r\n                </form>\r\n              </mat-card-content>\r\n              <mat-card-footer>\r\n                <div class=\"stats cursor_show\" (click)=\"open_forgot_dialog()\">\r\n                  <p class=\"mat-primary text-center full-width\" style=\"color:#1c3d76;overflow:hidden; cursor:pointer\">Forgot password\r\n                  </p>\r\n                </div>\r\n              </mat-card-footer>\r\n            </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"footer\" style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\r\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\r\n    <nav>\r\n        <ul>\r\n            <li>\r\n                <a href=\"https://beta.vicflix.com\">\r\n                  @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portal-users/add-user-dialog.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portal-users/add-user-dialog.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n<h1 mat-dialog-title>{{dialogTitle}}</h1>\r\n<div mat-dialog-content class=\"cardbox\">\r\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"saveUser()\">\r\n            <div class=\"row container\">\r\n               <div class=\"col-md-12\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Name\" type=\"text\" formControlName=\"name\" [(ngModel)]=\"name\" required>\r\n                        <mat-error>This field is mandatory.</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"row container\">\r\n                <div class=\"col-md-12\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Email\" [disabled]=\"editmode\" formControlName=\"email\" [(ngModel)]=\"email\"\r\n                        required>\r\n                        <mat-error>Please add valid email.</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"row container\">\r\n                <div class=\"col-md-12\">\r\n                     <mat-form-field>\r\n                         <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"mobile\"\r\n                        (keypress)=\"numberOnly($event)\" formControlName=\"mobile\" type=\"text\" maxlength=\"10\" required>\r\n                         <mat-error>Please add 10 Digit.</mat-error>\r\n                     </mat-form-field>\r\n                 </div>\r\n             </div>\r\n            <div class=\"row container\">\r\n                <div class=\"col-md-12\">\r\n                    <mat-form-field>\r\n                        <mat-label>Role Type</mat-label>\r\n                        <mat-select [(value)]=\"selectedroletype\" (selectionChange)=\"roletypeChanged($event)\" required>\r\n                          <mat-option *ngFor=\"let role of rolesReference\" [value]=\"role.id\" >\r\n                            {{role.role}}\r\n                          </mat-option>\r\n                          <!-- <mat-error>This field is mandatory.</mat-error>  -->\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n            </div>\r\n        </div>\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-md-12 asterisk_input\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Mobile\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"mobile\" type=\"text\" maxlength=\"12\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-md-12 asterisk_input\">\r\n                  \r\n                </div>  <app-reference-data-selector  [placeholder]=\"roleLabel\" [default-value]=\"selectedrole\" [options]=\"rolesReference\" (chosen-value)=\"roleChanged($event)\"></app-reference-data-selector>\r\n            </div> -->\r\n          \r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"save_user_btn\" (click)=\"saveUser()\">Save</button>\r\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"update_user_btn\" (click)=\"updateUser()\">Update</button>        \r\n                    <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \r\n                </div>\r\n            </div>\r\n        </form>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portal-users/delete-user-dialog.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portal-users/delete-user-dialog.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align:center;\">Delete User</h1>\r\n<div mat-dialog-content>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n           <p style=\"text-align:center;\">Are you sure you want to Delete ? </p>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" [disabled]=\"delete_btn\" (click)=\"delete()\">Confirm</button>       \r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portal-users/portal-users.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portal-users/portal-users.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-primary\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-md-6 \">\r\n                                <button type=\"button\" class=\"btn btn-default bg-info pull-right m-3\"\r\n                                    (click)=\"addUser()\">Add New\r\n                                    User</button>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <h4 class=\"card-title \">Portal Users</h4>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"id\">\r\n                            <th mat-header-cell *matHeaderCellDef> Id </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Email Column -->\r\n                        <ng-container matColumnDef=\"email\">\r\n                            <th mat-header-cell *matHeaderCellDef> Email </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Mobile number Column -->\r\n                        <ng-container matColumnDef=\"mobile\">\r\n                            <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.mobile}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Role Column -->\r\n                        <ng-container matColumnDef=\"role\">\r\n                            <th mat-header-cell *matHeaderCellDef> Permission </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.role}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Action Column -->\r\n                        <ng-container matColumnDef=\"action\">\r\n                            <th mat-header-cell *matHeaderCellDef>Actions </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.action}}\r\n                                <a (click)=\"edit_low(row) \" style=\"color:blue; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n                                </a>\r\n                                <a (click)=\"delete_low(row)\" style=\"color:red; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n                                </a>\r\n                                <mat-slide-toggle [checked]=\"row.status\" class=\"toggle\"  [color]=\"color\" (change)=\"toggle(row,$event)\"></mat-slide-toggle>\r\n                                </td>\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reset-password/reset-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\" style=\"margin: -62px;\">\r\n    <div class=\"col-md-4 offset-md-4\">\r\n      <div class=\"logo\">\r\n        <img src=\"/assets/img/VICFLEXLogo.png\"\r\n          style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\" />\r\n        <div class=\"vl\">\r\n        </div>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video\r\n          Streaming</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal\r\n          Management</h6>\r\n      </div>\r\n      <!-- <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\r\n        <div class=\"page-wrap height-100 mat-bg-primary\">\r\n          <div class=\"session-form-hold\"> -->\r\n      <!-- <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar> -->\r\n      <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%; height:300px\">\r\n        <mat-card-content>\r\n          <div class=\"text-center pb-1\">\r\n            <h5 class=\"text-dark\">Reset Password Here</h5>\r\n          </div>\r\n          <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n            <p>Email: {{email}}</p>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"New password\" formControlName=\"password\" required pattern type=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n              <mat-error *ngIf=\"password.hasError('password') && !password.hasError('minlength')\">\r\n                Please enter Password\r\n              </mat-error>\r\n              <mat-error *ngIf=\"password.hasError('required')\">\r\n                Password is <strong>must be at least 8 characters and at least 1 uppercase,lowercase,digit,special characters</strong>\r\n              </mat-error>\r\n              <!-- <mat-error *ngIf=\"password.hasError('required')\">\r\n                Password <strong></strong>\r\n              </mat-error> -->\r\n               <!-- <mat-error *ngIf=\"password.hasError('pattern')\">\r\n                Password <strong>must be </strong>\r\n              </mat-error>  -->\r\n              <!-- <mat-error *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                <mat-error *ngIf=\"f.password.errors.required\">Password is required</mat-error>\r\n                <mat-error *ngIf=\"f.password.errors.minlength\">Password must be at least 8 characters</mat-error>\r\n                <mat-error *ngIf=\"f.password.errors.pattern\">Password must be at least 1 uppercase,lowercase,digit,special characters </mat-error>\r\n            </mat-error> -->\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\r\n                [errorStateMatcher]=\"matcher\" type=\"password\">\r\n              <mat-error *ngIf=\"myForm.hasError('notSame')\">\r\n                Passwords do not match\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <div class=\"text-center pb-1\">\r\n              <button class=\"btn btn-info pull-right\" [disabled]=\"!myForm.valid\" type=\"submit\">Reset</button>\r\n              <a routerLink=\"/\">\r\n                <button mat-button class=\"btn pull-right\" mat-dialog-close>Cancel</button>\r\n              </a>\r\n            </div>\r\n          </form>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"footer\"\r\n  style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\r\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\r\n    <nav>\r\n      <ul>\r\n        <li>\r\n          <a href=\"https://beta.vicflix.com\">\r\n            @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</footer>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"container\">\r\n  <div class=\"row\" style=\"margin: -62px;\">\r\n    <div class=\"col-md-4 offset-md-4\">\r\n      <div class=\"logo\">\r\n        <img src=\"/assets/img/VICFLEXLogo.png\" style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\"/>\r\n        <div class=\"vl\">\r\n        </div>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video Streaming</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal Management</h6>\r\n      </div> -->\r\n<!-- <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\r\n        <div class=\"page-wrap height-100 mat-bg-primary\">\r\n          <div class=\"session-form-hold\"> -->\r\n<!-- <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar> -->\r\n<!-- <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%; height:85%\">\r\n  <mat-card-content>\r\n    <div class=\"text-center pb-1\"> -->\r\n      <!-- <img src=\"assets/images/herdman_logo.png\" alt=\"\" class=\"mb-05\"> -->\r\n      <!-- <h4 class=\"text-dark\">Reset Password Here</h4>\r\n                </div>\r\n                <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n                  <p>Email: {{email}}</p>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"New password\" formControlName=\"password\" required type=\"password\">\r\n                    <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\r\n                      Please enter Password\r\n                    </mat-error> -->\r\n      <!-- <mat-error *ngIf=\"password.hasError('required')\">\r\n                      Password is <strong>required</strong>\r\n                    </mat-error> -->\r\n      <!-- </mat-form-field>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\r\n                      [errorStateMatcher]=\"matcher\" type=\"password\">\r\n                    <mat-error *ngIf=\"myForm.hasError('notSame')\">\r\n                      Passwords do not match\r\n                    </mat-error>\r\n                  </mat-form-field> -->\r\n      <!-- <div class=\"\">\r\n                    <input matInput placeholder=\"New password\" formControlName=\"password\" required type=\"password\">\r\n                    <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\r\n                      Please enter Password\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"password.hasError('required')\">\r\n                      Password is <strong>required</strong>\r\n                    </mat-error>\r\n                  </div>\r\n\r\n                  <div class=\"\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\r\n                        [errorStateMatcher]=\"matcher\" type=\"password\">\r\n                      <mat-error *ngIf=\"myForm.hasError('notSame')\">\r\n                        Passwords do not match\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div> -->\r\n      <!-- \r\n                  <button class=\"btn btn-info pull-right\" type=\"submit\">Reset</button>\r\n                    <a routerLink=\"/\">\r\n                      <button mat-button class=\"btn pull-right\" mat-dialog-close>Cancel</button>\r\n                    </a>\r\n                </form>\r\n              </mat-card-content>\r\n            </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"footer\" style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\r\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\r\n    <nav>\r\n        <ul>\r\n            <li>\r\n                <a href=\"https://beta.vicflix.com\">\r\n                  @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n  </div>\r\n</footer> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <!-- <div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card card-chart col-md-4\" style=\"margin-left: auto; margin-right:auto\">\r\n          <div class=\"card-header\">\r\n            <div class=\"ct-chart\" id=\"dailySalesChart\">\r\n              <h3 class=\"card-title\">Reset Password</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-9\">\r\n                <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n                  <p>Email: {{email}}</p>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"New password\" formControlName=\"password\" required type=\"password\">\r\n                    <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\r\n                      Please enter Password\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"password.hasError('required')\">\r\n                      Password is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\r\n                      [errorStateMatcher]=\"matcher\" type=\"password\">\r\n                    <mat-error *ngIf=\"myForm.hasError('notSame')\">\r\n                      Passwords do not match\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                  <div class=\"col-md-12\">\r\n\r\n                    <button class=\"btn btn-info pull-right\" type=\"submit\">Reset</button>\r\n                    <a routerLink=\"/\">\r\n                      <button mat-button class=\"btn pull-right\" mat-dialog-close>Cancel</button>\r\n                    </a>\r\n                  </div>\r\n                </form>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div> -->\r\n      <!-- <div class=\"card-footer\">\r\n          <div class=\"stats\">\r\n              <i class=\"material-icons\">contact_support</i> Forgot password\r\n          </div>\r\n      </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reset-password/set-password/set-password.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reset-password/set-password/set-password.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"margin: -62px;\">\n    <div class=\"col-md-4 offset-md-4\">\n      <div class=\"logo\">\n        <img src=\"/assets/img/VICFLEXLogo.png\"\n          style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\" />\n        <div class=\"vl\">\n        </div>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video\n          Streaming</h6>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal\n          Management</h6>\n      </div>\n  \n      <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%; height:300px\">\n        <mat-card-content>\n          <div class=\"text-center pb-1\">\n            <h5 class=\"text-dark\">Set Password Here</h5>\n          </div>\n          <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <p>Email: {{email}}</p>\n            <mat-form-field>\n              <input matInput placeholder=\"New password\" formControlName=\"password\" required pattern type=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n              <mat-error *ngIf=\"password.hasError('password') && !password.hasError('minlength')\">\n                Please enter Password\n              </mat-error>\n              <mat-error *ngIf=\"password.hasError('required')\">\n                Password is <strong>must be at least 8 characters and at least 1 uppercase,lowercase,digit,special characters</strong>\n              </mat-error>\n            \n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\n                [errorStateMatcher]=\"matcher\" type=\"password\">\n              <mat-error *ngIf=\"myForm.hasError('notSame')\">\n                Passwords do not match\n              </mat-error>\n            </mat-form-field>\n            <div class=\"text-center pb-1\">\n              <button class=\"btn btn-info pull-right\"  [disabled]=\"!myForm.valid\" type=\"submit\">Set Password</button>\n              <a routerLink=\"/\">\n                <button mat-button class=\"btn pull-right\" mat-dialog-close>Cancel</button>\n              </a>\n            </div>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n<footer class=\"footer\"\n  style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\n    <nav>\n      <ul>\n        <li>\n          <a href=\"https://beta.vicflix.com\">\n            @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</footer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/state/add-state-dialog.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/state/add-state-dialog.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{dialogTitle}}</h1>\r\n<div mat-dialog-content class=\"cardbox\">\r\n\r\n\r\n            <div class=\"row container\">\r\n               <div class=\"col-md-12\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Category Name\"  [(ngModel)]=\"cat_name\" type=\"text\" required>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            \r\n          \r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"save_state_btn\" (click)=\"saveState()\">Save</button>\r\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"update_state_btn\" (click)=\"updateState()\">Update</button>        \r\n                    <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \r\n                </div>\r\n            </div>\r\n</div>\r\n<!-- </div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/state/delete-state-dialog.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/state/delete-state-dialog.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align:center;\">Delete Category</h1>\r\n<div mat-dialog-content>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n           <p style=\"text-align:center;\">Are you sure you want to Delete ? </p>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" [disabled]=\"delete_btn\" (click)=\"deletestate()\">Confirm</button>       \r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/state/state.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/state/state.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-primary\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-md-6 \">\r\n                                <button type=\"button\" class=\"btn btn-default bg-info pull-right m-3\"\r\n                                    (click)=\"adduser()\">Add\r\n                                    Category</button>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <h5 class=\"card-title\">Category Level-1</h5>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"cat_id\">\r\n                            <th mat-header-cell *matHeaderCellDef> Id </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.cat_id}} </td>\r\n                        </ng-container>\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"cat_name\">\r\n                            <th mat-header-cell *matHeaderCellDef  class=\"card-container\"> Name </th>\r\n                            <td mat-cell *matCellDef=\"let row\"  class=\"card-container\"> {{row.cat_name}} </td>\r\n                        </ng-container>\r\n                        <!-- Action Column -->\r\n                        <ng-container matColumnDef=\"action\">\r\n                            <th mat-header-cell *matHeaderCellDef  class=\"card-container\">Actions </th>\r\n                            <td mat-cell *matCellDef=\"let row\"  class=\"card-container\">\r\n                                <a (click)=\"edit_low(row) \" style=\"color:blue; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n                                </a>\r\n                                <a (click)=\"delete_low(row)\" style=\"color:red; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n                                </a>\r\n                        </ng-container>\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/delete-dialog/delete-dialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/delete-dialog/delete-dialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align:center;\">Delete Video</h1>\r\n<div mat-dialog-content style=\"width: 438px;\">\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n           <p style=\"text-align: center;\">Do you want to delete the Video from the Server ?</p>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" style=\"margin-left:20% !important\" class=\"btn btn-default bg-danger m-1\" mat-dialog-close>Cancel</button>   \r\n            <button type=\"button\" style=\"margin-left:3% !important\" class=\"btn btn-default bg-success m-1\" (click)=\"delete()\">Confirm</button>  \r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <p style=\"padding-top: 5%;text-align: center;\">  However, You still need to manually delete it from<br>\r\n                 the Youtube-channel \"Beta-Vicflix\".</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-dialog/video-dialog.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/video-dialog/video-dialog.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:relative;\"> \r\n  <button mat-button class=\"close-icon\" [mat-dialog-close]=\"true\">\r\n    <mat-icon>close</mat-icon>\r\n</button>\r\n<!-- \r\n<mat-video title=\"Cattle Video\" [autoplay]=\"true\" [preload]=\"true\" [fullscreen]=\"true\" [download]=\"false\" color=\"accent\" spinner=\"spin\" width=\"320\" height=\"240\" poster=\"image.jpg\">\r\n  <source matVideoSource [src]=\"src_video\"  type=\"video/mp4\">\r\n</mat-video>\r\n  \r\n</div> -->\r\n<!-- <iframe [class.thumbnail]=\"thumbnail\" [src]=\"src_video\" width=\"560\" height=\"315\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen\r\n      allowfullscreen></iframe> -->\r\n  <div class=\"row\" style=\"padding: 2% 3% 0% 3%;\">\r\n    <iframe width=\"560\" height=\"315\" [src]=\"src_video\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n  </div><div class=\"row mtop content_padding\" style=\"width:550px;padding-top:3%;\">\r\n    <div class=\"col-md-2\" style=\"padding:0%;\">\r\n      <mat-label >Title : </mat-label>\r\n    </div>\r\n    <div class=\"col-md-10\" style=\"padding:0%;\">\r\n      <p class=\"margin_p\" style=\"text-align: justify;\">&nbsp;{{video_title}}</p>\r\n    </div>\r\n    \r\n  </div>\r\n  <div class=\"row content_padding\" style=\"width:550px;\">\r\n    <div class=\"col-md-2\" style=\"padding:0%;\">\r\n      <mat-label>Description : </mat-label>\r\n    </div>\r\n    <div class=\"col-md-10\" style=\"padding:0%;\">\r\n      <p class=\"margin_p\" style=\"text-align: justify;\">&nbsp;{{video_description}}</p>\r\n    </div>\r\n\r\n\r\n  \r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:relative;\">\r\n  <button mat-button class=\"close-icon close-btn\" (click)=\"close_modal()\" [mat-dialog-close]=\"true\">\r\n    <mat-icon>close</mat-icon>\r\n  </button>\r\n</div>\r\n\r\n\r\n<form action=\"api/upload\" method=\"post\" enctype=\"multipart/form-data\" [formGroup]=\"form\">\r\n  <div class=\"row\" style=\"margin-top:4%;\">\r\n    <div class=\"col-md-5\" style=\"padding: left 3%;\">\r\n      <div clss=\"row\">\r\n        <img style=\"width: 100%;\" [src]=\"thumbnail_src\">\r\n        <!-- <label class=\"custom-file-upload\" *ngIf=\"canEditCode\" >\r\n          Upload Thumbnail Here\r\n          <th><input type=\"file\" name=\"image\" fileread=\"image\" accept=\".jpg,.png\" (change)=\"onImageChange($event)\">\r\n          </th>\r\n        </label> -->\r\n      </div>\r\n      <p class=\"brows\"  *ngIf=\"canEditCode\">You can change the thumbnail by browsing</p>\r\n      <div class=\"row\" style=\"justify-content: center;\">\r\n        <div class=\"fileUpload btn btn-default bg-success pull-right m-3\" style=\"border-radius: 2.5rem;padding: 15px 50px; background: #1f467f !important;\"  *ngIf=\"canEditCode\">\r\n           <span>Browse</span>\r\n          <input type=\"file\" class=\"upload\" fileread=\"image\" accept=\".jpg,.png\" (change)=\"onImageChange($event)\" />\r\n          <p  style=\"color:red;font-size:12px;\" *ngIf=\"show_img_format\">Image Format is not supported</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\" style=\"padding-left: 3%; padding-bottom: 1%;\">\r\n          <h6 *ngIf=\"!canEditCode\" style=\"float: left; margin-bottom: 0px;\"> {{video_title}}</h6>\r\n          <mat-form-field class=\"example-full-width\" *ngIf=\"canEditCode\">\r\n            <mat-label>Title</mat-label>\r\n            <input matInput formControlName=\"Title\"  placeholder=\"Title\" required>\r\n            <mat-error>This field is mandatory.</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\" align=\"center\" style=\"position:absolute;right:4%;\">\r\n          <a (click)=\"edit_low() \" style=\"color:blue; cursor:pointer;\">\r\n            <mat-icon class=\"Iconmat\" aria-label=\"Edit\">edit</mat-icon>\r\n          </a>\r\n          &nbsp;&nbsp;\r\n          <a (click)=\"delete_low()\" style=\"color:red; cursor:pointer;\">\r\n            <mat-icon class=\"Iconmat\" aria-label=\"Delete\">delete</mat-icon>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <hr  class=\"middleline\" *ngIf=\"nohrline\">\r\n      <div class=\"row\">\r\n        <p *ngIf=\"!canEditCode\" style=\"padding-left: 3%; font-size:15px\">{{video_description}}</p>\r\n        <mat-form-field class=\"example-full-width\" style=\"padding-left: 3%;\" *ngIf=\"canEditCode\">\r\n          <mat-label>Description</mat-label>\r\n          <textarea matInput rows=\"4\" formControlName=\"Description\" cols=\"70\"  placeholder=\"Description\" required></textarea>\r\n          <mat-error>This field is mandatory.</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- <div class=\"row\">\r\n        <div class=\"col-md-3\" style=\"padding-left:0px !important;\">\r\n          <h5 style=\"float: left;\">Tag :</h5>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <h5 style=\"float:right;\">Launguage :</h5>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"!canEditCode\">\r\n    <div class=\"col-md-5\">\r\n\r\n    </div>\r\n    <div class=\"col-md-7 editpadding\">\r\n      <h6>{{video_title}} Video Statistics</h6>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-md-4\">\r\n          <p class=\"font_p\">Total Views: </p>\r\n        </div> -->\r\n        <div class=\"col-md-4\">\r\n          <p class=\"font_p\">Total Likes : {{likes}} </p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <p class=\"font_p\">Total Dislikes : {{dislikes}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-md-4\"></div> -->\r\n        <div class=\"col-md-4\">\r\n          <p class=\"font_p\">Total Shares : {{shares_video}}</p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <p class=\"font_p\">Total Views : {{views}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"canEditCode\" style=\"justify-content: flex-end;\">\r\n    <button type=\"button\" style=\"float:right;\" class=\"btn btn-default bg-danger pull-right m-3\"\r\n      (click)=\"cancel()\">Cancel\r\n      </button>\r\n    <button type=\"button\" style=\"float:right;\" class=\"btn btn-default bg-success pull-right m-3\"\r\n    (click)=\"update()\">Update</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-upload-dialog.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/video-upload-dialog.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-lg-12\"> -->\r\n<div class=\"col-md-12\">\r\n  <ngx-spinner bdOpacity=0.5 bdColor=\"#dae8f7\" size=\"medium\" color=\"#1c3d76\"\r\n  type=\"ball-clip-rotate\" [fullScreen]=\"false\">\r\n  <p style=\"color: #1c3d76;justify-content: center;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Video is uploading to <br> Youtube-Channel, Please wait... </p>\r\n</ngx-spinner>\r\n<!-- <h1 mat-dialog-title>{{dialogTitle}}</h1> -->\r\n<div mat-dialog-content>\r\n  <h4 class=\"upload\">Upload Your Video!</h4>\r\n  <div class=\"progress form-group\" *ngIf=\"progress > 0\">\r\n    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width.%]=\"progress\">\r\n    </div>\r\n  </div>\r\n  <form action=\"api/upload\" method=\"post\" enctype=\"multipart/form-data\" [formGroup]=\"form\">\r\n    <div class=\"file-field md-form\">\r\n      <label class=\"custom-file-upload\">\r\n        Upload Video Here\r\n        <td><input type=\"file\" name=\"video\" formControlName=\"video\" fileread=\"video\" accept=\".mp4\" (change)=\"onFileChange($event)\" requireFile>\r\n        </td>\r\n        <p  style=\"color:red;font-size:12px;\" *ngIf=\"show_video_format\">Video Format is not supported</p>\r\n      </label>\r\n    </div>\r\n    <div class=\"file-field md-form\">\r\n      <label class=\"custom-file-upload\">\r\n        Upload Thumbnail Here\r\n        <th><input type=\"file\" name=\"image\" formControlName=\"image\" fileread=\"image\" accept=\".jpg,.png\" (change)=\"onImageChange($event)\" requireFile>\r\n        </th>\r\n        <p  style=\"color:red;font-size:12px;\" *ngIf=\"show_img_format\">Image Format is not supported</p>\r\n      </label>\r\n    </div>\r\n    <mat-form-field class=\"\">\r\n      <input formControlName=\"title\" name=\"title\" matInput placeholder=\"Title\" required>\r\n      <mat-error>This field is mandatory.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"\">\r\n      <textarea formControlName=\"description\" name=\"description\" matInput placeholder=\"Description\" required></textarea>\r\n      <mat-error>This field is mandatory.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"\">\r\n      <input formControlName=\"author\" name=\"author\" matInput placeholder=\"Author\" required>\r\n     \r\n    </mat-form-field>\r\n    <mat-form-field class=\"\">\r\n      <mat-label>Select Category</mat-label>\r\n      <mat-select (selectionChange)=\"cat_nametypeChanged($event)\" required>\r\n        <mat-option *ngFor=\"let cat_name of cat_namesReference\" [value]=\"cat_name.cat_id\">\r\n          {{cat_name.cat_name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field style=\"position:relative;\" class=\"\">\r\n      <mat-label>Select Sub Category</mat-label>\r\n      <mat-select formControlName=\"subcat\"  name=\"subcat\"  (selectionChange)=\"sub_nametypeChanged($event)\" required>\r\n        <mat-option *ngFor=\"let sub_name of sub_namesReference\" [value]=\"sub_name.sub_id\">\r\n          {{sub_name.sub_name}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"validate_subcategory\">Sub Category is not present, please add from manage category.</mat-error>\r\n      <!-- <p  style=\"position:absolute;top:80%;color:red;font-size:12px;padding-top:2%\">Sub Category is not present, please add from manage category.</p> -->\r\n      <!-- <mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error> -->\r\n    </mat-form-field>\r\n    \r\n\r\n    <button type=\"submit\" class=\"btn btn-default bg-success  pull-right m-3\" [disabled]=\"btn_disabled\" (click)=\"onSubmit() \" color=\"warn\">\r\n      Upload\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>\r\n  </form>\r\n</div>\r\n</div>\r\n  <!--  </div> <input type=\"file\" name=\"video\" (change)=\"onFileChange($event)\" /> \r\n              <button type=\"submit\">Upload</button>       -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-upload.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/video-upload.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div style=\"position:relative;\">\r\n        <div class=\"row add_new_video\"  *ngIf=\"show_uploader\">\r\n            <div class=\"col-lg-12 col-md-6 video_btn\">\r\n                <button type=\"button\" class=\"btn btn-default bg-Info  pull-right m-3 uploaad_btn_widh\"\r\n                    style=\"background-color: #1f467f; border-radius: 2.5rem;\" (click)=\"addUser()\">Add New +\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <mat-tab-group (selectedTabChange)=\"cat_nametypeChanged($event)\">\r\n            <mat-tab style=\"font-weight: 500; font-size: 18px;\" *ngFor=\"let tab of tabs ; let index = index \"\r\n                [label]=\"tab.cat_name\">\r\n                <div class=\"col-12 cheight\" *ngFor=\"let sub_name of sub_namesReference\">\r\n                    <h4 style=\"font-size: 16px; font-weight: 400; margin-left: 3.8%;\" *ngIf=\"showsubcategory\">\r\n                        {{sub_name.sub_name}}</h4>\r\n                    <hr class=\"middel-line\">\r\n                    <p *ngIf=\"sub_name.video.length == 0 && showsubcategory\" class=\"title-content\">Videos Not Available\r\n                    </p>\r\n                    <ngx-slick-carousel *ngIf=\"showsubcategory\" style=\"padding: 2% 3% 0% 3%; width: 100%;\" class=\"carousel carouselpadding\"\r\n                        #slickModal=\"slick-carousel\" [config]=\"slideConfig\" (init)=\"slickInit($event)\"\r\n                        (breakpoint)=\"breakpoint($event)\" (afterChange)=\"afterChange($event)\"\r\n                        (beforeChange)=\"beforeChange($event)\">\r\n                        <div ngxSlickItem *ngFor=\"let videos of sub_name.video\" class=\"slide\" style=\"width: 266px !important;\">\r\n                            <mat-card class=\"example-card\" style=\"padding: 0% 0% 0% 0%; margin:0px 8px;\">\r\n                                <div class=\"image_size image_width\" (click)=\"open_video_dialog(videos,true)\"\r\n                                    style=\"padding: 0% 0% 0% 0%; margin:0px 0px; cursor: pointer; height: 258px;background: white;\">\r\n                                    <!-- <img class=\"imgwdt\" src=\"../../assets/img/Defaultthumbnail.jpg\"\r\n                                    s hidden=\"{{videos.thumbLoaded}}\"> -->\r\n                                    <img class=\"imgwdt\" src=\"{{global_url+videos.thumbnail}}\"\r\n                                        style=\" width: 100%;margin: auto;display:{{videos.thumbLoaded?block:none}}\"\r\n                                        (load)=\"this.thumLoaded(videos)\">\r\n                                    <!-- {{videos.action}} -->\r\n                                </div>\r\n                                <mat-card-content class=\"carder\" style=\"padding-top: 3%; padding-bottom: 6%;\">\r\n                                    <div class=\"col-md-10 cardht\" style=\"height: 16px;\">\r\n                                        <p class=\"content-title content\">\r\n                                            <crystal-text-show-less [maxLength]=\"30\" [data]=\"videos.title\"\r\n                                                [showTail]=\"true\"> </crystal-text-show-less>\r\n                                            </p>\r\n                                    </div>\r\n                                \r\n                                <mat-card-actions>\r\n                                \r\n                                    <div class=\"actionbtn social-links\">\r\n                                        <p class=\"Iconbtn \" (click)=\"open_edit_dialog(videos,true)\">\r\n                                            <mat-icon class=\"icon\" style=\"color:#1c3d76; cursor: pointer;padding-top: 12%;\">\r\n                                                more_vert\r\n                                            </mat-icon>\r\n                                            {{videos.action}}\r\n                                        </p>\r\n                                    </div>\r\n                                </mat-card-actions>\r\n                            </mat-card-content>\r\n                            </mat-card>\r\n\r\n                        </div>\r\n                    </ngx-slick-carousel>\r\n                    <ngx-spinner bdOpacity=0.5 bdColor=\"#1c3d76\" size=\"medium\" color=\"#fff\"\r\n                        type=\"ball-clip-rotate\" [fullScreen]=\"false\">\r\n                        <p style=\"color: white\"> Loading... </p>\r\n                    </ngx-spinner>\r\n                </div>\r\n            </mat-tab>\r\n        </mat-tab-group>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.toasterConfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_1__["ToasterConfig"]({ positionClass: 'toast-top-center' });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/*! exports provided: jwtTokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/fesm5/mat-video.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _helpers_must_match_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/must-match.directive */ "./src/app/helpers/must-match.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _portal_users_portal_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./portal-users/portal-users.component */ "./src/app/portal-users/portal-users.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _state_state_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./state/state.component */ "./src/app/state/state.component.ts");
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./city/city.component */ "./src/app/city/city.component.ts");
/* harmony import */ var _video_upload_video_upload_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./video-upload/video-upload.component */ "./src/app/video-upload/video-upload.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _video_upload_video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./video-upload/video-dialog/video-dialog.component */ "./src/app/video-upload/video-dialog/video-dialog.component.ts");
/* harmony import */ var _video_upload_video_edit_dialog_video_edit_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./video-upload/video-edit-dialog/video-edit-dialog.component */ "./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.ts");
/* harmony import */ var _video_upload_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./video-upload/delete-dialog/delete-dialog.component */ "./src/app/video-upload/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_helpers_request_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../app/helpers/request.interceptor */ "./src/app/helpers/request.interceptor.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm5/auth0-angular-jwt.js");
/* harmony import */ var _app_helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../app/helpers/ProjectCustomUtils */ "./src/app/helpers/ProjectCustomUtils.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _reset_password_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./reset-password/set-password/set-password.component */ "./src/app/reset-password/set-password/set-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { DashboardComponent, VideoUploadDialog } from './dashboard/dashboard.component';












// import {VideoDialogComponent} from '../app/video-upload/video-dialog/video-dialog.component'













function jwtTokenGetter() {
    return localStorage.getItem(_app_helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_30__["ProjectCustomUtils"].projectJWTToken);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                // MatCardTitleModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                mat_video__WEBPACK_IMPORTED_MODULE_9__["MatVideoModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_32__["NgxSpinnerModule"],
                // CarouselModule,
                angular2_toaster__WEBPACK_IMPORTED_MODULE_18__["ToasterModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["routes"], { useHash: false }),
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                }),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_29__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: jwtTokenGetter,
                        // () => {
                        //     return localStorage.getItem(ProjectCustomUtils.projectJWTToken);
                        // },
                        whitelistedDomains: ['http://localhost:4200'],
                        blacklistedRoutes: ['/login'],
                    }
                }),
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_22__["CarouselModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _helpers_must_match_directive__WEBPACK_IMPORTED_MODULE_13__["MustMatchDirective"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _portal_users_portal_users_component__WEBPACK_IMPORTED_MODULE_16__["DeleteUserDialog"],
                _portal_users_portal_users_component__WEBPACK_IMPORTED_MODULE_16__["AddUserDialog"],
                _video_upload_video_upload_component__WEBPACK_IMPORTED_MODULE_21__["VideoUploadDialog"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__["ResetPasswordComponent"],
                _state_state_component__WEBPACK_IMPORTED_MODULE_19__["AddStateDialog"],
                _state_state_component__WEBPACK_IMPORTED_MODULE_19__["DeleteStateDialog"],
                _city_city_component__WEBPACK_IMPORTED_MODULE_20__["AddCityDialog"],
                _city_city_component__WEBPACK_IMPORTED_MODULE_20__["DeleteCityDialog"],
                // VideoDetailsDialog,
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["forgotDialog"],
                _video_upload_video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_23__["VideoDialogComponent"],
                _video_upload_video_edit_dialog_video_edit_dialog_component__WEBPACK_IMPORTED_MODULE_24__["VideoEditDialogComponent"],
                _video_upload_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["DeleteDialogComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__["ForgotPasswordComponent"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["TokenExpiredDialog"],
                _app_helpers_request_interceptor__WEBPACK_IMPORTED_MODULE_28__["tokenDialog"],
                _reset_password_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_33__["SetPasswordComponent"],
            ],
            entryComponents: [
                _portal_users_portal_users_component__WEBPACK_IMPORTED_MODULE_16__["DeleteUserDialog"],
                _portal_users_portal_users_component__WEBPACK_IMPORTED_MODULE_16__["AddUserDialog"],
                _video_upload_video_upload_component__WEBPACK_IMPORTED_MODULE_21__["VideoUploadDialog"],
                _state_state_component__WEBPACK_IMPORTED_MODULE_19__["AddStateDialog"],
                _state_state_component__WEBPACK_IMPORTED_MODULE_19__["DeleteStateDialog"],
                _city_city_component__WEBPACK_IMPORTED_MODULE_20__["AddCityDialog"],
                _city_city_component__WEBPACK_IMPORTED_MODULE_20__["DeleteCityDialog"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["forgotDialog"],
                _video_upload_video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_23__["VideoDialogComponent"],
                _video_upload_video_edit_dialog_video_edit_dialog_component__WEBPACK_IMPORTED_MODULE_24__["VideoEditDialogComponent"],
                _video_upload_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["DeleteDialogComponent"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["TokenExpiredDialog"],
                _app_helpers_request_interceptor__WEBPACK_IMPORTED_MODULE_28__["tokenDialog"],
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HTTP_INTERCEPTORS"],
                    useClass: _app_helpers_request_interceptor__WEBPACK_IMPORTED_MODULE_28__["RequestInterceptor"],
                    multi: true,
                },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"] },
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"],],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-password/set-password/set-password.component */ "./src/app/reset-password/set-password/set-password.component.ts");





var routes = [
    { path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
        pathMatch: 'full'
    },
    {
        path: 'resetpassword',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"],
        pathMatch: 'full'
    },
    {
        path: 'setpassword',
        component: _reset_password_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_4__["SetPasswordComponent"],
        pathMatch: 'full'
    },
    {
        path: 'forgotpassword',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"],
        pathMatch: 'full',
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        // canActivate:[AuthGuard],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    }
];
// @NgModule({
//   imports: [
//     CommonModule,
//     BrowserModule,
//     RouterModule.forRoot(routes,{
//        useHash: true
//     })
//   ],
//   exports: [
//   ],
// })
// export class AppRoutingModule { }


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard, TokenExpiredDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenExpiredDialog", function() { return TokenExpiredDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/ProjectCustomUtils */ "./src/app/helpers/ProjectCustomUtils.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    // openPopUp() {
    //     let dialogRef: MatDialogRef<any> = this.dialog.open(TokenExpiredDialog, {
    //     width: '300px',
    //     });
    //     dialogRef.afterClosed()
    //     .subscribe(res => {
    //      this.router.navigateByUrl('/')
    //         return false;
    //     });
    // }
    AuthGuard.prototype.canActivate = function (route, state) {
        var expired = _helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_2__["ProjectCustomUtils"].isTokenExpired();
        // console.log('auth.guard:canActivate: checking auth guard token expired ? ', expired);
        // console.log('auth.guard:canActivate: Token expired redirecting to login ', expired);
        if (!expired) {
            return true;
        }
        else {
            // this.openPopUp();
            this.router.navigateByUrl('/');
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AuthGuard);
    return AuthGuard;
}());

var TokenExpiredDialog = /** @class */ (function () {
    function TokenExpiredDialog() {
    }
    TokenExpiredDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'token-expired-dialog',
            template: __webpack_require__(/*! raw-loader!./token-expired-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/auth/token-expired-dialog.html"),
        })
    ], TokenExpiredDialog);
    return TokenExpiredDialog;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isLoggedIn = true;
        this.checkLoginApi = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl + 'portal/users/isAuthenticated';
        this.logoutApi = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl + 'auth/logout';
        this.incidentData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthService.prototype.signin = function (userName, role_id) {
        var resp = this.httpClient.post(this.checkLoginApi, '', { withCredentials: true });
        //  console.log(resp,"dbhbd");
        //validate jwt tokens here
        this.userName = userName;
        this.isLoggedIn = true;
        this.role_id = Number(role_id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.role_id = 100;
        var resp = this.httpClient.post(this.logoutApi, '', { withCredentials: true });
    };
    AuthService.prototype.sendMessage = function (data) {
        this.subject.next(data);
    };
    AuthService.prototype.clearMessage = function () {
        this.subject.next();
    };
    AuthService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/city/city.component.scss":
/*!******************************************!*\
  !*** ./src/app/city/city.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5) !important;\n  padding-bottom: 10px !important;\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: 25px;\n  padding: 0 0 0 0;\n  left: 0%;\n  top: 32%;\n}\n\n.data-table {\n  width: 80%;\n  margin: 20px auto;\n}\n\n.iconbutton {\n  margin: 10px 10px;\n}\n\nbutton.btn.btn-default.bg-info.pull-right.m-3 {\n  margin: -6px 0px !important;\n  background: #1f467f !important;\n  border-radius: 2.45rem !important;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n  padding-left: 86px;\n  width: 35%;\n}\n\na {\n  margin: 0px 4px;\n}\n\n.card-title {\n  margin: 5px 50px !important;\n  color: black;\n}\n\n.cardbox {\n  width: 350px;\n}\n\n@media (min-width: 1024px) and (max-width: 1279px) {\n  table {\n    width: 100% !important;\n  }\n\n  .card-title {\n    width: 129px !important;\n    margin-left: 3% !important;\n  }\n\n  .card-container {\n    padding-left: 10%;\n    padding-left: 50px !important;\n    widows: 36%;\n  }\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  table {\n    width: 100%;\n  }\n\n  .container {\n    width: 310px;\n  }\n}\n\n@supports (-ms-ime-align: auto) {\n  table {\n    width: 100%;\n  }\n\n  .container {\n    width: 310px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0eS9EOlxcdmlkZW8tc3RyZWFtXFxvbmxpbmUtdmlkZW8tc3RyZWFtLWZyb250ZW5kL3NyY1xcYXBwXFxjaXR5XFxjaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaXR5L2NpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzREFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FER0E7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQ0FBOztBREVBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQ0E7O0FEQ0E7RUFDQSxpQkFBQTtBQ0VBOztBREFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FDR0E7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURBQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBO0VBQ0U7SUFDRSxzQkFBQTtFQ0tGOztFREhBO0lBQ0UsdUJBQUE7SUFDQSwwQkFBQTtFQ01GOztFREpGO0lBQ0UsaUJBQUE7SUFDQSw2QkFBQTtJQUNBLFdBQUE7RUNPQTtBQUNGOztBRExBO0VBQ0U7SUFDRSxXQUFBO0VDT0Y7O0VETEE7SUFDRSxZQUFBO0VDUUY7QUFDRjs7QUROQTtFQUNFO0lBQ0UsV0FBQTtFQ1FGOztFRE5BO0lBQ0UsWUFBQTtFQ1NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaXR5L2NpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYXN0ZXJpc2tfaW5wdXQ6YWZ0ZXIge1xyXG5jb250ZW50OiBcIiAqXCI7XHJcbmNvbG9yOiAjZTMyO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbm1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG5mb250LXNpemU6IDI1cHg7XHJcbnBhZGRpbmc6IDAgMCAwIDA7XHJcbmxlZnQ6IDAlO1xyXG50b3A6MzIlO1xyXG59XHJcbi5kYXRhLXRhYmxle1xyXG53aWR0aDogODAlO1xyXG5tYXJnaW46IDIwcHggYXV0bztcclxufVxyXG4uaWNvbmJ1dHRvbntcclxubWFyZ2luOjEwcHggMTBweDtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1kZWZhdWx0LmJnLWluZm8ucHVsbC1yaWdodC5tLTMge1xyXG5tYXJnaW46IC02cHggMHB4ICFpbXBvcnRhbnQ7XHJcbmJhY2tncm91bmQ6ICMxZjQ2N2YgIWltcG9ydGFudDtcclxuYm9yZGVyLXJhZGl1czogMi40NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi8vIG1hdC1pY29uLm1hdC1pY29uLm5vdHJhbnNsYXRlLm1hdGVyaWFsLWljb25zLm1hdC1pY29uLW5vLWNvbG9yIHtcclxuLy8gcGFkZGluZzogMHB4IDI1cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG50ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctbGVmdDogODZweDtcclxuICB3aWR0aDogMzUlO1xyXG59XHJcbmEge1xyXG4gIG1hcmdpbjogMHB4IDRweDtcclxufVxyXG4uY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luOiA1cHggNTBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uY2FyZGJveHtcclxuICB3aWR0aDogMzUwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTI3OXB4KSB7XHJcbiAgdGFibGV7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2FyZC10aXRsZXtcclxuICAgIHdpZHRoOiAxMjlweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtY29udGFpbmVye1xyXG4gIHBhZGRpbmctbGVmdDoxMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkb3dzOiAzNiU7XHJcbn1cclxufVxyXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xyXG4gIHRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDozMTBweDtcclxuICB9XHJcbn1cclxuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgdGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjMxMHB4O1xyXG4gIH1cclxufSIsIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYXN0ZXJpc2tfaW5wdXQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiAqXCI7XG4gIGNvbG9yOiAjZTMyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIGxlZnQ6IDAlO1xuICB0b3A6IDMyJTtcbn1cblxuLmRhdGEtdGFibGUge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmljb25idXR0b24ge1xuICBtYXJnaW46IDEwcHggMTBweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tZGVmYXVsdC5iZy1pbmZvLnB1bGwtcmlnaHQubS0zIHtcbiAgbWFyZ2luOiAtNnB4IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMWY0NjdmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIuNDVyZW0gIWltcG9ydGFudDtcbn1cblxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiA4NnB4O1xuICB3aWR0aDogMzUlO1xufVxuXG5hIHtcbiAgbWFyZ2luOiAwcHggNHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogNXB4IDUwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZGJveCB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYXJkLXRpdGxlIHtcbiAgICB3aWR0aDogMTI5cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMyUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkb3dzOiAzNiU7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAzMTBweDtcbiAgfVxufVxuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAzMTBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/city/city.component.ts":
/*!****************************************!*\
  !*** ./src/app/city/city.component.ts ***!
  \****************************************/
/*! exports provided: CityComponent, AddCityDialog, DeleteCityDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCityDialog", function() { return AddCityDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCityDialog", function() { return DeleteCityDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city.service */ "./src/app/city/city.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ELEMENT_DATA = [];
var CityComponent = /** @class */ (function () {
    function CityComponent(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.tableData = [];
        this.displayedColumns = ['sub_name', 'cat_name', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
    }
    CityComponent.prototype.ngOnInit = function () {
        var payload = {};
        this.getCity(payload);
        // console.log(this.tableData, "table  city")
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.dataSource.paginator = this.paginator;
    };
    CityComponent.prototype.delete_low = function (row_data) {
        var _this = this;
        // console.log(row_data, "row_datarow_data")
        var dialogRef = this.dialog.open(DeleteCityDialog, {
            data: {
                rowdata: row_data
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                // console.log(data, "incomingdatafromdelete");
                // this.get_Portal_users();
                var data1 = {};
                _this.getCity(data1);
            }
        });
    };
    CityComponent.prototype.getCity = function (payload) {
        var _this = this;
        this.service.getCity(payload)
            .subscribe(function (response) {
            // console.log(response, "response get cat_name");
            _this.tableData = response;
            // this.dataSource.push(dataSource);
            _this.dataSource.data = _this.tableData;
        });
    };
    CityComponent.prototype.edit_low = function (row_data) {
        var _this = this;
        var dialogRef = this.dialog.open(AddCityDialog, {
            data: {
                rowdata: row_data
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                // this.get_Portal_users();
                var payload = {};
                _this.getCity(payload);
            }
        });
    };
    CityComponent.prototype.adduser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddCityDialog, {});
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                var payload = {};
                _this.getCity(payload);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CityComponent.prototype, "paginator", void 0);
    CityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! raw-loader!./city.component.html */ "./node_modules/raw-loader/index.js!./src/app/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.scss */ "./src/app/city/city.component.scss")]
        }),
        __metadata("design:paramtypes", [_city_service__WEBPACK_IMPORTED_MODULE_1__["CityService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CityComponent);
    return CityComponent;
}());

var AddCityDialog = /** @class */ (function () {
    function AddCityDialog(data, service, toasterService, dialogRef) {
        this.data = data;
        this.service = service;
        this.toasterService = toasterService;
        this.dialogRef = dialogRef;
        this.sub_name = "";
        this.dialogTitle = "Add New City";
        this.save_city_btn = true;
        this.update_city_btn = false;
        this.roleLabel = "Roles";
        this.rolesReference = [];
        this.selectedroletype = '';
        // console.log(data, "edit dailogdata");
        if (data) {
            this.sub_name = data.rowdata['sub_name'];
            this.selectedrole = data.rowdata['cat_name'];
            this.dialogTitle = "Update Sub Category";
            this.update_city_btn = true;
            this.save_city_btn = false;
        }
        else {
            this.dialogTitle = "Add Sub Category";
            this.save_City_btn = true;
            this.update_City_btn = false;
        }
    }
    AddCityDialog.prototype.ngOnInit = function () {
        var _this = this;
        var payload = {
            role: localStorage.getItem('cat_name')
        };
        // console.log(payload, "payloadpayload roles")
        this.service.getRolesData(payload)
            .subscribe(function (response) {
            // console.log(response, "responseresponseresponse roles")
            _this.rolesReference = response;
        });
    };
    AddCityDialog.prototype.roletypeChanged = function (cat_name) {
        this.selectedrole = cat_name;
    };
    AddCityDialog.prototype.saveCity = function () {
        var _this = this;
        var payload;
        payload = {
            sub_name: this.sub_name,
            role: this.selectedroletype,
        };
        // console.log(payload,"payload");
        // return true;
        if ((payload.sub_name != '' && payload.role != '')) {
            // console.log(payload,"payload");
            this.service.saveCity(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                // console.log(response, "incoming response")
                if (data == "200") {
                    _this.dialogRef.close(data);
                    //  this.getCity(payload);    
                    _this.toasterService.pop("success", "Category", "Category added successfully");
                }
                else {
                    _this.toasterService.pop("error", "error", "Category already exist");
                }
            });
        }
        else {
            this.toasterService.pop("error", "Category", "Please fill all mandatory fields");
            // this.save_user_btn=false;
        }
    };
    AddCityDialog.prototype.updateCity = function () {
        var _this = this;
        var payload = {
            sub_id: this.data.rowdata['sub_id'],
            sub_name: this.sub_name,
            role: this.selectedroletype
        };
        if (payload.sub_name != '' && payload.role != '') {
            this.service.updateCity(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                if (data == "200") {
                    _this.dialogRef.close(data);
                    _this.toasterService.pop("success", "Category", "Category updated successfully");
                }
                else {
                }
            });
        }
        else {
            this.toasterService.pop("error", "Category-Level-1", "Please fill all mandatory fields");
        }
    };
    AddCityDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-city-dialog',
            template: __webpack_require__(/*! raw-loader!./add-city-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/city/add-city-dialog.html"),
            styles: [__webpack_require__(/*! ./city.component.scss */ "./src/app/city/city.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_city_service__WEBPACK_IMPORTED_MODULE_1__["CityService"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])),
        __metadata("design:paramtypes", [Object, _city_service__WEBPACK_IMPORTED_MODULE_1__["CityService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AddCityDialog);
    return AddCityDialog;
}());

var DeleteCityDialog = /** @class */ (function () {
    function DeleteCityDialog(data, service, toasterService, dialogRef) {
        this.data = data;
        this.service = service;
        this.toasterService = toasterService;
        this.dialogRef = dialogRef;
        this.delete_btn = false;
    }
    DeleteCityDialog.prototype.ngOnInit = function () {
    };
    DeleteCityDialog.prototype.deletecity = function () {
        var _this = this;
        var payload = {
            sub_id: this.data.rowdata['sub_id'],
        };
        this.service.deleteCity(payload)
            .subscribe(function (response) {
            // console.log(response, "datadeleting");
            _this.dialogRef.close(response);
            _this.toasterService.pop("success", "SubCategory", "Category-Level-2 Deleted successfully");
        });
    };
    DeleteCityDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-city-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-city-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/city/delete-city-dialog.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_city_service__WEBPACK_IMPORTED_MODULE_1__["CityService"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])),
        __metadata("design:paramtypes", [Object, _city_service__WEBPACK_IMPORTED_MODULE_1__["CityService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DeleteCityDialog);
    return DeleteCityDialog;
}());



/***/ }),

/***/ "./src/app/city/city.service.ts":
/*!**************************************!*\
  !*** ./src/app/city/city.service.ts ***!
  \**************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
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



var CityService = /** @class */ (function () {
    // getPortalColumns() {
    //   throw new Error("Method not implemented.");
    // }
    // portalUserUrl = environment.backendUrl + 'portal/users/getuserlist';
    // portaladdteamUrl = environment.backendUrl + 'portal/users/addupdateuser';
    // portalroleUrl = environment.backendUrl + 'portal/users/getroles';
    // deleteportalUrl = environment.backendUrl + 'portal/users/removeuser';
    function CityService(httpClient) {
        this.httpClient = httpClient;
    }
    CityService.prototype.saveCity = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].saveCity;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    CityService.prototype.getCity = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].getcitylist;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    CityService.prototype.getRolesData = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].getcats;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    CityService.prototype.getcat_name = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].getcat;
        //  console.log(url,"ghftyfhgh")
        return this.httpClient.post(url, payload);
    };
    CityService.prototype.updateCity = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].updateCity;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    CityService.prototype.deleteCity = function (data1) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].deleteCity;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, data1);
    };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/logout/logout.component */ "./src/app/components/navbar/logout/logout.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-categories/manage-categories.component */ "./src/app/components/manage-categories/manage-categories.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _navbar_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"],
                _manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_8__["ManageCategoriesComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            entryComponents: [
                _navbar_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-categories/manage-categories.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/manage-categories/manage-categories.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlLWNhdGVnb3JpZXMvbWFuYWdlLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/manage-categories/manage-categories.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/manage-categories/manage-categories.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ManageCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCategoriesComponent", function() { return ManageCategoriesComponent; });
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

var ManageCategoriesComponent = /** @class */ (function () {
    function ManageCategoriesComponent() {
    }
    ManageCategoriesComponent.prototype.ngOnInit = function () {
    };
    ManageCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-categories',
            template: __webpack_require__(/*! raw-loader!./manage-categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/manage-categories/manage-categories.component.html"),
            styles: [__webpack_require__(/*! ./manage-categories.component.scss */ "./src/app/components/manage-categories/manage-categories.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageCategoriesComponent);
    return ManageCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/logout/logout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/navbar/logout/logout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 310px;\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .container {\n    width: 310px;\n  }\n\n  .default-btn1 {\n    text-transform: none !important;\n  }\n}\n\n@supports (-ms-ime-align: auto) {\n  .container {\n    width: 310px;\n  }\n\n  .default-btn1 {\n    text-transform: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbG9nb3V0L0Q6XFx2aWRlby1zdHJlYW1cXG9ubGluZS12aWRlby1zdHJlYW0tZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbG9nb3V0XFxsb2dvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDSTtJQUNFLFlBQUE7RUNFSjs7RURBRTtJQUNFLCtCQUFBO0VDR0o7QUFDRjs7QURERTtFQUNFO0lBQ0UsWUFBQTtFQ0dKOztFRERFO0lBQ0UsK0JBQUE7RUNJSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgd2lkdGg6MzEwcHg7XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHdpZHRoOjMxMHB4O1xyXG4gICAgfVxyXG4gICAgLmRlZmF1bHQtYnRuMXtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICB3aWR0aDozMTBweDtcclxuICAgIH1cclxuICAgIC5kZWZhdWx0LWJ0bjF7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDMxMHB4O1xufVxuXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzEwcHg7XG4gIH1cblxuICAuZGVmYXVsdC1idG4xIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMxMHB4O1xuICB9XG5cbiAgLmRlZmF1bHQtYnRuMSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/logout/logout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/navbar/logout/logout.component.ts ***!
  \**************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, service, dialogRef) {
        this.router = router;
        this.service = service;
        this.dialogRef = dialogRef;
        this.header = "Logout";
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.dashboard = function () {
        this.dialogRef.close();
        localStorage.clear();
        this.router.navigate(['../']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/components/navbar/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item:hover{\r\n    cursor: pointer;\r\n}\r\nnav.navbar.navbar-expand-lg.navbar-transparent.navbar-absolute.fixed-top {\r\n    z-index: 99 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5uYXYubmF2YmFyLm5hdmJhci1leHBhbmQtbGcubmF2YmFyLXRyYW5zcGFyZW50Lm5hdmJhci1hYnNvbHV0ZS5maXhlZC10b3Age1xyXG4gICAgei1pbmRleDogOTkgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _navbar_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navbar/logout/logout.component */ "./src/app/components/navbar/logout/logout.component.ts");
/* harmony import */ var app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, service, element, router, dialog, fb) {
        this.service = service;
        this.element = element;
        this.router = router;
        this.dialog = dialog;
        this.fb = fb;
        this.mobile_menu_visible = 0;
        this.userName = "Welcome ";
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName += this.service.userName;
        if (this.userName === "Welcome undefined") {
            this.userName = "";
            this.userName = "Welcome ";
            this.userName += localStorage.getItem('user');
        }
        this.filterForm = this.fb.group({
            herd: [''],
        });
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        //   return dashboard
    };
    NavbarComponent.prototype.openPopUp = function (data, isNew) {
        var _this = this;
        if (data === void 0) { data = this.filterForm.value; }
        var title = isNew ? 'Logout' : '';
        var dialogRef = this.dialog.open(_navbar_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"], {
            // width: '720px',
            // disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed()
            .subscribe(function (res) {
            var data;
            data = res;
            if (data == 200) {
                // console.log("dailog close");
                localStorage.clear();
                _this.router.navigate(['../']);
            }
            else {
                _this.dialog.closeAll();
            }
            // this.router.navigate(['/dashboard']);
        });
    };
    NavbarComponent.prototype.getWelComeMessage = function () {
        return this.userName;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    height: 500px;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n  }\r\n  .example-sidenav-content {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n  .example-sidenav {\r\n     -webkit-user-select: none;\r\n        -moz-user-select: none;\r\n         -ms-user-select: none;\r\n             user-select: none;\r\n  }\r\n  .full-width {\r\n    width: 100%;\r\n  }\r\n  .font-c{\r\n    color: white;\r\n  }\r\n  .parent{\r\n    height:30px;\r\n  }\r\n  .menu-button {\r\n    -webkit-transition: 300ms ease-in-out;\r\n    transition: 300ms ease-in-out;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  .menu-button.rotated {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n  }\r\n  .submenu {\r\n    overflow-y: hidden;\r\n    -webkit-transition: -webkit-transform 300ms ease;\r\n    transition: -webkit-transform 300ms ease;\r\n    transition: transform 300ms ease;\r\n    transition: transform 300ms ease, -webkit-transform 300ms ease;\r\n    -webkit-transform: scaleY(0);\r\n            transform: scaleY(0);\r\n    -webkit-transform-origin: top;\r\n            transform-origin: top;\r\n    padding-left: 0px;\r\n  }\r\n  .submenu.expanded {\r\n    -webkit-transform: scaleY(1);\r\n            transform: scaleY(1);\r\n  }\r\n  .is-active {\r\n    background-color: #4a6e99;\r\n}\r\n  .mat-action-list .mat-list-item:focus, .mat-action-list .mat-list-item:hover, .mat-list-option:focus, .mat-list-option:hover, .mat-nav-list .mat-list-item:focus, .mat-nav-list .mat-list-item:hover {\r\n  background: #4a6e99 !important;\r\n}\r\n  .mat-drawer-side {\r\n  border-right: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtLQUNHLHlCQUFpQjtRQUFqQixzQkFBaUI7U0FBakIscUJBQWlCO2FBQWpCLGlCQUFpQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUNBQTZCO0lBQTdCLDZCQUE2QjtJQUM3QiwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0RBQWdDO0lBQWhDLHdDQUFnQztJQUFoQyxnQ0FBZ0M7SUFBaEMsOERBQWdDO0lBQ2hDLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlCQUF5QjtBQUM3QjtFQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0VBQ0E7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuZXhhbXBsZS1zaWRlbmF2IHtcclxuICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5mb250LWN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5wYXJlbnR7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICB9XHJcbiAgLm1lbnUtYnV0dG9uIHtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIC5tZW51LWJ1dHRvbi5yb3RhdGVkIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG4gIC5zdWJtZW51IHtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLnN1Ym1lbnUuZXhwYW5kZWQge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgfVxyXG4gIC5pcy1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNmU5OTtcclxufVxyXG4ubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLCAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLCAubWF0LWxpc3Qtb3B0aW9uOmZvY3VzLCAubWF0LWxpc3Qtb3B0aW9uOmhvdmVyLCAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLCAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNGE2ZTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1kcmF3ZXItc2lkZSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ROUTES = [
    { path: '/dashboard', title: 'Analytics', icon: 'dashboard', class: '' },
    { path: '/video-upload', title: 'Videos', icon: 'cloud_upload', class: '' },
    { path: '/portal-users', title: 'Portal-Users', icon: 'person', class: '' },
    { path: '/mobile-users', title: 'Mobile-Users', icon: 'portrait', class: '' },
    { path: '/default-settings', title: 'Default-Settings', icon: 'settings', class: '' },
    { path: '/state', title: 'Category-Level-1', icon: 'location_on', class: '' },
    { path: '/city', title: 'Category-Level-2', icon: 'location_on', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(service) {
        this.service = service;
        this.isExpanded = true;
        this.showSubmenu = false;
        this.isShowing = false;
        this.showSubSubMenu = false;
        this.admin_list = true;
        this.uploader = false;
        this.super_admin_list = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        if (this.service.role_id == 2) {
            this.admin_list = true;
            this.super_admin_list = false;
            this.uploader = false;
        }
        else if (this.service.role_id == 1 || this.service.role_id == 4) {
            this.uploader = true;
            this.admin_list = false;
            this.super_admin_list = false;
        }
        else if (this.service.role_id == 3) {
            this.super_admin_list = true;
            this.admin_list = false;
            this.uploader = false;
        }
        if (this.service.role_id === undefined) {
            this.service.role_id = localStorage.getItem('role');
            // console.log(this.service.role_id,"undefined this.service.role_id")
            if (this.service.role_id == 2) {
                this.admin_list = true;
                this.uploader = false;
                this.super_admin_list = false;
            }
            else if (this.service.role_id == 1) {
                this.uploader = true;
                this.admin_list = false;
                this.super_admin_list = false;
            }
            else if (this.service.role_id == 3) {
                this.super_admin_list = true;
                this.admin_list = false;
                this.uploader = false;
            }
        }
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.mouseenter = function () {
        if (!this.isExpanded) {
            this.isShowing = true;
        }
    };
    SidebarComponent.prototype.mouseleave = function () {
        if (!this.isExpanded) {
            this.isShowing = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav', { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], SidebarComponent.prototype, "sidenav", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 135px;\n}\n\n.text-dark {\n  font-weight: 400;\n  color: #1c3d76 !important;\n  padding: 3%;\n  margin: 5%;\n}\n\n.mat-form-field-label-wrapper {\n  border: 0.2px solid #1f467f !important;\n}\n\n.vl {\n  border-left: 1px solid gray;\n  height: 14%;\n  position: absolute;\n  left: 61%;\n  overflow: hidden;\n  margin: -15.3%;\n}\n\n.footer ul li a {\n  text-transform: none;\n}\n\nh6, .h6 {\n  text-transform: none;\n}\n\n.text-dark1 {\n  margin: 12%;\n}\n\n.text-dark2 {\n  margin-top: -7%;\n}\n\n.text-dark3 {\n  margin-bottom: 1%;\n  margin-top: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0Q6XFx2aWRlby1zdHJlYW1cXG9ubGluZS12aWRlby1zdHJlYW0tZnJvbnRlbmQvc3JjXFxhcHBcXGZvcmdvdC1wYXNzd29yZFxcZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFFO0VBQ0Usc0NBQUE7QUNHSjs7QURBRTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERFO0VBQ0Usb0JBQUE7QUNJSjs7QURGRTtFQUNFLG9CQUFBO0FDS0o7O0FESEU7RUFDRSxXQUFBO0FDTUo7O0FESkU7RUFDRSxlQUFBO0FDT0o7O0FETEU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMTM1cHg7XHJcbiAgfVxyXG4gIC50ZXh0LWRhcmt7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMxYzNkNzYgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOjAuMnB4IHNvbGlkICMxZjQ2N2YgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnZse1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgaGVpZ2h0OiAxNCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2MSU7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBtYXJnaW46IC0xNS4zJTtcclxuICB9XHJcbiAgLmZvb3RlciB1bCBsaSBhe1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIGg2LCAuaDYge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIC50ZXh0LWRhcmsxe1xyXG4gICAgbWFyZ2luOiAxMiU7XHJcbiAgfVxyXG4gIC50ZXh0LWRhcmsye1xyXG4gICAgbWFyZ2luLXRvcDogLTclO1xyXG4gIH1cclxuICAudGV4dC1kYXJrM3tcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgfSIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMzVweDtcbn1cblxuLnRleHQtZGFyayB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMWMzZDc2ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDMlO1xuICBtYXJnaW46IDUlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIGJvcmRlcjogMC4ycHggc29saWQgIzFmNDY3ZiAhaW1wb3J0YW50O1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG4gIGhlaWdodDogMTQlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYxJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAtMTUuMyU7XG59XG5cbi5mb290ZXIgdWwgbGkgYSB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5oNiwgLmg2IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi50ZXh0LWRhcmsxIHtcbiAgbWFyZ2luOiAxMiU7XG59XG5cbi50ZXh0LWRhcmsyIHtcbiAgbWFyZ2luLXRvcDogLTclO1xufVxuXG4udGV4dC1kYXJrMyB7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBtYXJnaW4tdG9wOiA3JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
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

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/helpers/ProjectCustomUtils.ts":
/*!***********************************************!*\
  !*** ./src/app/helpers/ProjectCustomUtils.ts ***!
  \***********************************************/
/*! exports provided: ProjectCustomUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCustomUtils", function() { return ProjectCustomUtils; });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm5/auth0-angular-jwt.js");

var ProjectCustomUtils = /** @class */ (function () {
    function ProjectCustomUtils() {
    }
    ProjectCustomUtils.decodeTokenAndStoreCredentials = function () {
        var myRawToken = localStorage.getItem(ProjectCustomUtils.projectJWTToken);
        if (myRawToken) {
            var decodedToken = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]().decodeToken(myRawToken);
            var credentialStored = localStorage.getItem(ProjectCustomUtils.localStorageCredentialsStored);
            if (!credentialStored) {
                if (decodedToken.su) {
                    localStorage.setItem(ProjectCustomUtils.superAdminCheckLocalStorageKey, decodedToken.su + '');
                    localStorage.setItem(ProjectCustomUtils.userIdStorageKey, decodedToken.userID.toString());
                    localStorage.setItem(ProjectCustomUtils.usernameStorageKey, decodedToken.username);
                    localStorage.setItem(ProjectCustomUtils.companyNameLocalStorageKey, decodedToken.company);
                }
                else {
                    // normal user
                    // localStorage.setItem(ProjectCustomUtils.userIdStorageKey, decodedToken.userID.toString());
                    localStorage.setItem(ProjectCustomUtils.usernameStorageKey, decodedToken.username);
                    localStorage.setItem(ProjectCustomUtils.companyNameLocalStorageKey, decodedToken.company);
                }
                localStorage.setItem(ProjectCustomUtils.localStorageCredentialsStored, 'true');
            }
            return decodedToken;
        }
        else {
            return undefined;
        }
    };
    ProjectCustomUtils.isTokenExpired = function () {
        var myRawToken = localStorage.getItem(ProjectCustomUtils.projectJWTToken);
        if (myRawToken) {
            return new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]().isTokenExpired(myRawToken);
        }
        else {
            return true;
        }
    };
    ProjectCustomUtils.superAdminCheckLocalStorageKey = 'su';
    ProjectCustomUtils.userIdStorageKey = 'uid';
    ProjectCustomUtils.companyIdLocalStorageKey = 'cid';
    ProjectCustomUtils.companyNameLocalStorageKey = 'cname';
    ProjectCustomUtils.usernameStorageKey = 'username';
    ProjectCustomUtils.featureAccessListKey = 'feature';
    ProjectCustomUtils.projectJWTToken = 'herdmanToken';
    ProjectCustomUtils.localStorageCredentialsStored = 'stored';
    return ProjectCustomUtils;
}());



/***/ }),

/***/ "./src/app/helpers/must-match.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/helpers/must-match.directive.ts ***!
  \*************************************************/
/*! exports provided: MustMatchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatchDirective", function() { return MustMatchDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./must-match.validator */ "./src/app/helpers/must-match.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MustMatchDirective = /** @class */ (function () {
    function MustMatchDirective() {
        this.mustMatch = [];
    }
    MustMatchDirective_1 = MustMatchDirective;
    MustMatchDirective.prototype.validate = function (formGroup) {
        return Object(_must_match_validator__WEBPACK_IMPORTED_MODULE_2__["MustMatch"])(this.mustMatch[0], this.mustMatch[1])(formGroup);
    };
    var MustMatchDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mustMatch'),
        __metadata("design:type", Array)
    ], MustMatchDirective.prototype, "mustMatch", void 0);
    MustMatchDirective = MustMatchDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mustMatch]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: MustMatchDirective_1, multi: true }]
        })
    ], MustMatchDirective);
    return MustMatchDirective;
}());



/***/ }),

/***/ "./src/app/helpers/must-match.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/helpers/must-match.validator.ts ***!
  \*************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/helpers/request.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/helpers/request.interceptor.ts ***!
  \************************************************/
/*! exports provided: RequestInterceptor, tokenDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenDialog", function() { return tokenDialog; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/ProjectCustomUtils */ "./src/app/helpers/ProjectCustomUtils.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    RequestInterceptor.prototype.openPopUp = function () {
        var _this = this;
        var dialogRef = this.dialog.open(tokenDialog, {
            width: '300px'
        });
        dialogRef.afterClosed()
            .subscribe(function (res) {
            _this.router.navigateByUrl('/');
            localStorage.clear();
            return false;
        });
    };
    RequestInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // console.log('RequestInterceptor : intercept : Interceptred request : ', req);
        var authToken = 'Bearer ' + localStorage.getItem(_helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_4__["ProjectCustomUtils"].projectJWTToken);
        var copiedRequest = req.clone({ headers: req.headers.set('Authorization', authToken) });
        return next.handle(copiedRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.openPopUp();
                    // console.log(err.status,"frgugd")
                    // this.router.navigate(['/']);
                }
                // else if(err.status === 404) {
                // this.openPopUp();
                // }
            }
        }));
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], RequestInterceptor);
    return RequestInterceptor;
}());

var tokenDialog = /** @class */ (function () {
    function tokenDialog() {
    }
    tokenDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'token-expired-dialog',
            template: __webpack_require__(/*! raw-loader!./token-expired-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/helpers/token-expired-dialog.html"),
        })
    ], tokenDialog);
    return tokenDialog;
}());



/***/ }),

/***/ "./src/app/helpers/urlconstant.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/urlconstant.ts ***!
  \****************************************/
/*! exports provided: UrlConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlConstants", function() { return UrlConstants; });
var UrlConstants = /** @class */ (function () {
    function UrlConstants() {
    }
    UrlConstants.MAINURL = 'https://beta.vicflix.com/';
    // static usersGetTableItems = 'ex/register/submit';
    UrlConstants.saveUser = 'portal/users/addupdateuser';
    UrlConstants.updateUser = 'portal/users/updateportal';
    UrlConstants.getroles = 'portal/users/getroles';
    UrlConstants.getuserlist = 'portal/users/getuserlist';
    UrlConstants.deleteportalUrl = 'portal/users/deleteuser';
    UrlConstants.checkresetUrl = 'portal/users/verifyreset';
    UrlConstants.updatepasswordUrl = 'portal/users/updatepassword';
    UrlConstants.signin = 'portal/users/signin';
    // static loginuserUrl ='portal/users/loginuserUrl';
    UrlConstants.saveState = 'portal/users/addcat';
    UrlConstants.getstatelist = 'portal/users/getcatlist';
    UrlConstants.updateState = 'portal/users/updatecat';
    UrlConstants.deleteState = 'portal/users/deletecat';
    UrlConstants.saveCity = 'portal/users/addsubcat';
    UrlConstants.getcitylist = 'portal/users/getsubcatlist';
    UrlConstants.updateCity = 'portal/users/updatesubcat';
    UrlConstants.deleteCity = 'portal/users/deletesubcat';
    UrlConstants.getcats = 'portal/users/getcat';
    UrlConstants.getcat = 'portal/users/get';
    UrlConstants.statuscheck = 'portal/users/status';
    UrlConstants.getsub = 'portal/users/getsub';
    UrlConstants.getvideos = 'portal/users/dashboardvideolist';
    UrlConstants.deletevideo = 'portal/users/deletevideo';
    UrlConstants.uploadVideo = 'upload';
    UrlConstants.getlikes = 'portal/users/analytics';
    UrlConstants.getMobileUsers = 'portal/users/mobusr';
    UrlConstants.defaultsetting = 'portal/users/radio';
    UrlConstants.defaultsettings = 'portal/users/defaultsetting';
    return UrlConstants;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_5__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_5__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_5__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_5__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_5__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 135px;\n}\n\n.text-dark {\n  font-weight: 400;\n  color: #1c3d76 !important;\n  padding: 5%;\n}\n\n.mat-form-field-label-wrapper {\n  border: 0.2px solid #1f467f !important;\n}\n\n.vl {\n  border-left: 1px solid gray;\n  height: 14%;\n  position: absolute;\n  left: 61%;\n  overflow: hidden;\n  margin: -15.3%;\n}\n\n.footer ul li a {\n  text-transform: none;\n}\n\nh6, .h6 {\n  text-transform: none;\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .container_card {\n    width: 350px !important;\n  }\n}\n\n@supports (-ms-ime-align: auto) {\n  .container_card {\n    width: 350px !important;\n  }\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: 25px;\n  padding: 0 0 0 0;\n  left: 0%;\n  top: 32%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXHZpZGVvLXN0cmVhbVxcb25saW5lLXZpZGVvLXN0cmVhbS1mcm9udGVuZC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnREE7RUFDRSxpQkFBQTtBQy9DRjs7QURpREE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQzlDRjs7QURnREE7RUFDRSxzQ0FBQTtBQzdDRjs7QURnREE7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUM3Q0Y7O0FEK0NBO0VBQ0Usb0JBQUE7QUM1Q0Y7O0FEOENBO0VBQ0Usb0JBQUE7QUMzQ0Y7O0FENkNBO0VBQ0U7SUFDRSx1QkFBQTtFQzFDRjtBQUNGOztBRDZDQTtFQUNJO0lBQ0EsdUJBQUE7RUMzQ0Y7QUFDRjs7QUQ2Q0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQzNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWF0LWNhcmQuZXhhbXBsZS1jYXJkLm1hdC1jYXJkIHtcclxuLy8gICAgIHdpZHRoOiAzMCU7XHJcbi8vICAgICBtYXJnaW46IDUwcHggMzUlO1xyXG4vLyB9XHJcbi8vIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbi8vICAgICBmb250LXNpemU6IDM3cHg7XHJcbi8vIH1cclxuLy8gbWF0LWNhcmQtdGl0bGUubWF0LWNhcmQtdGl0bGUge1xyXG4vLyAgICAgbWFyZ2luOiAwcHggMTIycHg7XHJcbi8vIH1cclxuLy8gLmV4YW1wbGUtZm9ybSB7XHJcbi8vICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4vLyAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuLy8gICAgIHdpZHRoOiA4NCU7XHJcbi8vICAgICBtYXJnaW46IDdweCA4JTtcclxuLy8gICB9XHJcbi8vICAgYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5IHtcclxuLy8gICAgIG1hcmdpbjogMHB4IDE0MXB4O1xyXG4vLyAgICAgcGFkZGluZzogMXB4IDM5cHg7XHJcbi8vICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IC03cHg7XHJcbi8vICAgfVxyXG4vLyAgIC5tYXQtY2FyZC1hY3Rpb25zLCAubWF0LWNhcmQtY29udGVudCwgLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTohaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBoM3tcclxuLy8gICAgIGNvbG9yOiBibHVlO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4vLyB9XHJcbi8vIC5jb250YWluZXRye1xyXG4vLyAgICAgYm9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7XHJcbi8vICAgICB3aWR0aDogNTAlO1xyXG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4IDI1JTtcclxuLy8gfVxyXG4vLyAuZm9ybS1ncm91cHtcclxuLy8gICAgIG1hcmdpbjogMHB4IDIxJTsgICBcclxuLy8gfVxyXG4vLyBidXR0b257XHJcbi8vICAgICBtYXJnaW46IDEwcHggMCU7XHJcbi8vIH1cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAxMzVweDtcclxufVxyXG4udGV4dC1kYXJre1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICMxYzNkNzYgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XHJcbiAgYm9yZGVyOjAuMnB4IHNvbGlkICMxZjQ2N2YgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZse1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICBoZWlnaHQ6IDE0JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNjElO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBtYXJnaW46IC0xNS4zJTtcclxufVxyXG4uZm9vdGVyIHVsIGxpIGF7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuaDYsIC5oNiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcclxuICAuY29udGFpbmVyX2NhcmR7XHJcbiAgICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgICBcclxufVxyXG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcclxuICAgIC5jb250YWluZXJfY2FyZHtcclxuICAgIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uYXN0ZXJpc2tfaW5wdXQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiICpcIjtcclxuICBjb2xvcjogI2UzMjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgbGVmdDogMCU7XHJcbiAgdG9wOjMyJTtcclxuICB9IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEzNXB4O1xufVxuXG4udGV4dC1kYXJrIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMxYzNkNzYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMWY0NjdmICFpbXBvcnRhbnQ7XG59XG5cbi52bCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAxNCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjElO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IC0xNS4zJTtcbn1cblxuLmZvb3RlciB1bCBsaSBhIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmg2LCAuaDYge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLmNvbnRhaW5lcl9jYXJkIHtcbiAgICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gIC5jb250YWluZXJfY2FyZCB7XG4gICAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5hc3Rlcmlza19pbnB1dDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiICpcIjtcbiAgY29sb3I6ICNlMzI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZzogMCAwIDAgMDtcbiAgbGVmdDogMCU7XG4gIHRvcDogMzIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, forgotDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotDialog", function() { return forgotDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var app_helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/helpers/ProjectCustomUtils */ "./src/app/helpers/ProjectCustomUtils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router, authService, dialog, toasterService) {
        this.service = service;
        this.router = router;
        this.authService = authService;
        this.dialog = dialog;
        this.toasterService = toasterService;
        this.isUploader = false;
        this.isSuperAdmin = false;
        this.isAdmin = false;
        this.signininbutton_disable = false;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
    };
    LoginComponent.prototype.signin = function () {
        var _this = this;
        this.signininbutton_disable = true;
        this.service.signin(this.signinForm.value.email, this.signinForm.value.password)
            .subscribe(function (response) {
            // console.log(response, "vbdvj");     
            if (response.success && response.token) {
                localStorage.setItem("user", response.RawData[0].email);
                localStorage.setItem("userID", response.RawData[0].id);
                localStorage.setItem("role", response.RawData[0].role_id);
                localStorage.setItem("status", response.RawData[0].status);
                localStorage.setItem("token", response.token);
                localStorage.setItem(app_helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_7__["ProjectCustomUtils"].projectJWTToken, response.token);
                var decodedToken = app_helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_7__["ProjectCustomUtils"].decodeTokenAndStoreCredentials();
                if (decodedToken) {
                    _this.authService.signin(response.RawData[0].email, response.RawData[0].role_id)
                        .subscribe(function () {
                        if (_this.authService.isLoggedIn) {
                            _this.isUploader = _this.authService.role_id == 1 ? true : false;
                            _this.isSuperAdmin = _this.authService.role_id == 3 ? true : false;
                            _this.isAdmin = _this.authService.role_id == 2 ? true : false;
                            _this.authService.incidentData.emit(response.RawData[0].role_id);
                            if (response.RawData[0].role_id == 1 || response.RawData[0].role_id == 3 || response.RawData[0].role_id == 2 || response.RawData[0].role_id == 4) {
                                _this.toasterService.pop("success", "Login", "Login Successfull");
                                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/dashboard';
                                // console.log(redirect,"bdhcbh")
                                _this.router.navigate([redirect]);
                            }
                            //   if(response.RawData[0].role_id == 2){
                            //     this.toasterService.pop(
                            //       "success",
                            //       "Login",
                            //       "Successfully Login"
                            //     );
                            //     let redirect = this.authService.redirectUrl ? this.authService.redirectUrl: '/dashboard';
                            //     console.log(redirect,"bdhcbh")
                            //     this.router.navigate([redirect]);
                            //   }
                            //  this.signininbutton_disable=false;
                        }
                    });
                }
            }
            else {
                _this.errorMessage = 'responce.message';
                _this.toasterService.pop("error", "login failed", "Invalid credentials");
            }
        }, function (error) {
            // console.log(error.status,"dgbdb");
            if (error.status == 0) {
                _this.errorMessage = 'Not found';
            }
            else {
                _this.toasterService.pop("error", "login failed", "please fill all credentials");
                _this.errorMessage = 'Unexpected error occured';
            }
            _this.signininbutton_disable = false;
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        localStorage.removeItem("status");
        localStorage.removeItem("token");
        this.service.clearMessage();
    };
    LoginComponent.prototype.open_forgot_dialog = function () {
        this.dialog.open(forgotDialog, {
            data: {
                rework: "Payload"
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], LoginComponent);
    return LoginComponent;
}());

var forgotDialog = /** @class */ (function () {
    function forgotDialog(formBuilder, data, service, toasterService, router, dialogRef) {
        this.formBuilder = formBuilder;
        this.data = data;
        this.service = service;
        this.toasterService = toasterService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.email = "";
        this.forgotform = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
        });
    }
    forgotDialog.prototype.check_email = function () {
        var _this = this;
        var payload = {
            email: this.email
        };
        this.service.checkemail(payload)
            .subscribe(function (response) {
            // console.log(response,"csjjhscuyfdas");
            var data;
            data = response;
            if (data == "200") {
                _this.router.navigate(['./forgotpassword']);
                _this.toasterService.pop("success", "Email", "Email has been sent");
                _this.dialogRef.close();
            }
            else {
                _this.toasterService.pop("error", "Email", "Email does not exist");
            }
        });
    };
    forgotDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'forgot-password-dialog',
            template: __webpack_require__(/*! raw-loader!./forgot-password-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/login/forgot-password-dialog.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], Object, _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]])
    ], forgotDialog);
    return forgotDialog;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/urlconstant */ "./src/app/helpers/urlconstant.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    // loginuserUrl = environment.backendUrl + 'portal/users/loginuserdata';
    function LoginService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.checkemailUrl = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + 'portal/users/forgotpassword';
        this.signinUrl = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + 'portal/users/login';
        // addCC(model): Observable<any> {
        //     const url = UrlConstants.MAINURL + UrlConstants.usersGetTableItems;
        //     return this.http.post<any>(url, model);
        //     }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]),
        });
    }
    LoginService.prototype.initializeFormGroup = function () {
        this.form.setValue({
            $key: null,
            email: '',
            password: '',
        });
    };
    LoginService.prototype.clearMessage = function () {
        this.subject.next();
    };
    LoginService.prototype.signin = function (email, password) {
        var Payload = {
            email: email,
            password: password,
            withCredentials: true
        };
        return this.httpClient.post(this.signinUrl, Payload, { withCredentials: true });
    };
    LoginService.prototype.checkemail = function (subdata) {
        return this.httpClient.post(this.checkemailUrl, subdata);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/portal-users/portal-users.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/portal-users/portal-users.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5) !important;\n  padding-bottom: 10px !important;\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: 25px;\n  padding: 0 0 0 0;\n  left: 0%;\n  top: 32%;\n}\n\n.data-table {\n  width: 85%;\n  margin: 20px auto;\n}\n\n.iconbutton {\n  margin: 10px 10px;\n}\n\nbutton.btn.btn-default.bg-info.pull-right.m-3 {\n  margin: -6px 0px !important;\n  background: #1f467f !important;\n  border-radius: 2.5rem !important;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n  padding-left: 51px;\n}\n\n.card-title {\n  margin: 5px 12px !important;\n  color: black;\n}\n\na {\n  margin: 0px 4px;\n}\n\n.mat-slide-toggle-bar.mat-slide-toggle-bar-no-side-margin {\n  margin: 0px 5px !important;\n}\n\n.cardbox {\n  width: 350px;\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  table {\n    width: 100%;\n  }\n\n  .container {\n    width: 310px;\n  }\n\n  .toggle {\n    margin: 0px 5px !important;\n  }\n}\n\n@supports (-ms-ime-align: auto) {\n  table {\n    width: 100%;\n  }\n\n  .container {\n    width: 310px;\n  }\n\n  .toggle {\n    margin: 0px 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsLXVzZXJzL0Q6XFx2aWRlby1zdHJlYW1cXG9ubGluZS12aWRlby1zdHJlYW0tZnJvbnRlbmQvc3JjXFxhcHBcXHBvcnRhbC11c2Vyc1xccG9ydGFsLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0YWwtdXNlcnMvcG9ydGFsLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREdBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUNBQTs7QURFQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0NBOztBRENBO0VBQ0EsaUJBQUE7QUNFQTs7QURBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQ0dBOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QURGQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREhBO0VBQ0UsZUFBQTtBQ01GOztBREpBO0VBQ0UsMEJBQUE7QUNPRjs7QURMQTtFQUNFLFlBQUE7QUNRRjs7QUROQTtFQUNFO0lBQ0UsV0FBQTtFQ1NGOztFRFBBO0lBQ0UsWUFBQTtFQ1VGOztFRFJBO0lBQ0UsMEJBQUE7RUNXRjtBQUNGOztBRFRBO0VBQ0U7SUFDRSxXQUFBO0VDV0Y7O0VEVEE7SUFDRSxZQUFBO0VDWUY7O0VEVkE7SUFDRSwwQkFBQTtFQ2FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwtdXNlcnMvcG9ydGFsLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmFzdGVyaXNrX2lucHV0OmFmdGVyIHtcclxuY29udGVudDogXCIgKlwiO1xyXG5jb2xvcjogI2UzMjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5tYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuZm9udC1zaXplOiAyNXB4O1xyXG5wYWRkaW5nOiAwIDAgMCAwO1xyXG5sZWZ0OiAwJTtcclxudG9wOjMyJTtcclxufVxyXG4uZGF0YS10YWJsZXtcclxud2lkdGg6IDg1JTtcclxubWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuLmljb25idXR0b257XHJcbm1hcmdpbjoxMHB4IDEwcHg7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tZGVmYXVsdC5iZy1pbmZvLnB1bGwtcmlnaHQubS0zIHtcclxubWFyZ2luOiAtNnB4IDBweCAhaW1wb3J0YW50O1xyXG5iYWNrZ3JvdW5kOiAjMWY0NjdmICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1yYWRpdXM6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUxcHg7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbjogNXB4IDEycHggIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuYSB7XHJcbiAgbWFyZ2luOiAwcHggNHB4O1xyXG59XHJcbi5tYXQtc2xpZGUtdG9nZ2xlLWJhci5tYXQtc2xpZGUtdG9nZ2xlLWJhci1uby1zaWRlLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmRib3h7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XHJcbiAgdGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjMxMHB4O1xyXG4gIH1cclxuICAudG9nZ2xle1xyXG4gICAgbWFyZ2luOiAwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gIHRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDozMTBweDtcclxuICB9XHJcbiAgLnRvZ2dsZXtcclxuICAgIG1hcmdpbjogMHB4IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmFzdGVyaXNrX2lucHV0OmFmdGVyIHtcbiAgY29udGVudDogXCIgKlwiO1xuICBjb2xvcjogI2UzMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBsZWZ0OiAwJTtcbiAgdG9wOiAzMiU7XG59XG5cbi5kYXRhLXRhYmxlIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5pY29uYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuYmctaW5mby5wdWxsLXJpZ2h0Lm0tMyB7XG4gIG1hcmdpbjogLTZweCAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzFmNDY3ZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW0gIWltcG9ydGFudDtcbn1cblxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiA1MXB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogNXB4IDEycHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5hIHtcbiAgbWFyZ2luOiAwcHggNHB4O1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS1iYXIubWF0LXNsaWRlLXRvZ2dsZS1iYXItbm8tc2lkZS1tYXJnaW4ge1xuICBtYXJnaW46IDBweCA1cHggIWltcG9ydGFudDtcbn1cblxuLmNhcmRib3gge1xuICB3aWR0aDogMzUwcHg7XG59XG5cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAzMTBweDtcbiAgfVxuXG4gIC50b2dnbGUge1xuICAgIG1hcmdpbjogMHB4IDVweCAhaW1wb3J0YW50O1xuICB9XG59XG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMxMHB4O1xuICB9XG5cbiAgLnRvZ2dsZSB7XG4gICAgbWFyZ2luOiAwcHggNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/portal-users/portal-users.component.ts":
/*!********************************************************!*\
  !*** ./src/app/portal-users/portal-users.component.ts ***!
  \********************************************************/
/*! exports provided: PortalUsersComponent, AddUserDialog, DeleteUserDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalUsersComponent", function() { return PortalUsersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserDialog", function() { return AddUserDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserDialog", function() { return DeleteUserDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portal_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal-users.service */ "./src/app/portal-users/portal-users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ELEMENT_DATA = [];
var PortalUsersComponent = /** @class */ (function () {
    // showSearchComp:boolean=true;
    // portalUserColumns = PortalUserColumns;
    // displayedColumns: string[] = PortalUserColumns.map(column => column.name);
    // tableData: PortalUser[] = [];
    // dataSource = new MatTableDataSource(this.tableData);
    // showportalusers:boolean=false;
    // ELEMENT_DATA= [];
    function PortalUsersComponent(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.tableData = [];
        // rowData = null;
        this.checked = false;
        this.role_id = localStorage.getItem('role');
        // checked: boolean;
        /** For the Add user dialog box */
        this.displayedColumns = ['name', 'email', 'mobile', 'role', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
    }
    PortalUsersComponent.prototype.ngOnInit = function () {
        var payload = {
            role: this.role_id
        };
        this.getPortalUsers(payload);
        // this.ELEMENT_DATA=[
        //   { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
        //   { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
        //   { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
        // ];
        //  this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
        // console.log(this.tableData, "table portal users")
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.dataSource.paginator = this.paginator;
    };
    PortalUsersComponent.prototype.toggle = function (row_data, event) {
        var Active_state;
        // console.log(event.checked, "vhg");
        if (event.checked == true) {
            Active_state = "Active";
        }
        else {
            Active_state = "Disable";
        }
        var payload = {
            user_id: row_data.id,
            Active_status: Active_state,
        };
        // console.log(payload, "ghghjg")
        this.service.statuscheck(payload)
            .subscribe(function (response) {
            var data;
            data = response;
            // console.log(data,"true")
        });
    };
    PortalUsersComponent.prototype.delete_low = function (row_data) {
        var _this = this;
        // console.log(row_data, "row_datarow_data")
        var dialogRef = this.dialog.open(DeleteUserDialog, {
            data: {
                rowdata: row_data
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                // console.log(data, "incomingdatafromdelete");
                // this.get_Portal_users();
                var data1 = {
                    role: _this.role_id
                };
                _this.getPortalUsers(data1);
            }
        });
    };
    PortalUsersComponent.prototype.getPortalUsers = function (payload) {
        var _this = this;
        this.service.getPortalUsers(payload)
            .subscribe(function (response) {
            // let data_resp:any;
            // data_resp=response['data']
            // console.log(data_resp, "response get portal users");
            // console.log(response, "response get portal users");
            // this.tableData = data_resp;
            _this.tableData = response;
            _this.tableData.forEach(function (element, index) {
                // console.log(element['status'],"element table data");
                if (element['status'] == "Active") {
                    _this.tableData[index]['status'] = true;
                }
                else {
                    _this.tableData[index]['status'] = false;
                }
            });
            _this.dataSource.data = _this.tableData;
        });
    };
    // cellClicked(cell){
    //   if(cell.action ==='edit') {
    //     const dialogRef = this.dialog.open(AddUserDialog, {
    //       data: cell.data
    //     });
    //     dialogRef.afterClosed().subscribe(
    //       data => {
    //         if(data) {
    //           // this.get_Portal_users();
    //         }
    //       }
    //     ); 
    //   } else {
    //   }
    //  }
    PortalUsersComponent.prototype.edit_low = function (row_data) {
        var _this = this;
        var dialogRef = this.dialog.open(AddUserDialog, {
            data: {
                rowdata: row_data
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                // this.get_Portal_users();
                var payload = {
                    role: _this.role_id
                };
                _this.getPortalUsers(payload);
            }
        });
    };
    PortalUsersComponent.prototype.addUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddUserDialog, {});
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                var payload = {};
                _this.getPortalUsers(payload);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], PortalUsersComponent.prototype, "paginator", void 0);
    PortalUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portal-users',
            template: __webpack_require__(/*! raw-loader!./portal-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/portal-users/portal-users.component.html"),
            styles: [__webpack_require__(/*! ./portal-users.component.scss */ "./src/app/portal-users/portal-users.component.scss")]
        }),
        __metadata("design:paramtypes", [_portal_users_service__WEBPACK_IMPORTED_MODULE_1__["PortalUserService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], PortalUsersComponent);
    return PortalUsersComponent;
}());

var AddUserDialog = /** @class */ (function () {
    function AddUserDialog(formBuilder, data, service, 
    // @Inject(OnboardingService) public onboardservice:OnboardingService,
    toasterService, dialogRef) {
        this.formBuilder = formBuilder;
        this.data = data;
        this.service = service;
        this.toasterService = toasterService;
        this.dialogRef = dialogRef;
        this.name = "";
        this.email = "";
        this.mobile = "";
        this.dialogTitle = "Add new user";
        this.save_user_btn = true;
        this.update_user_btn = false;
        this.roleLabel = "Roles";
        this.rolesReference = [];
        this.selectedroletype = '';
        // console.log(data, "edit dailogdata");
        if (data) {
            this.name = data.rowdata['name'];
            this.email = data.rowdata['email'];
            this.mobile = data.rowdata['mobile'];
            this.selectedrole = data.rowdata['role'];
            // console.log(this.selectedrole,"hhd")
            // if(this.email && this.email.length > 0) {
            this.dialogTitle = "Update user";
            this.update_user_btn = true;
            this.save_user_btn = false;
            //   this.portal_user_id = data.portal_user_id;
            //   this.editmode=true;
            //   } else {
            //   this.dialogTitle="Add new user";
            //   this.editmode=false;
            // }
        }
        else {
            this.dialogTitle = "Add User";
            this.save_user_btn = true;
            this.update_user_btn = false;
        }
        this.myForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(?=\\D*\\d).{10,10}')]]
        });
    }
    AddUserDialog.prototype.ngOnInit = function () {
        var _this = this;
        var payload = {
            role: localStorage.getItem('role')
        };
        // console.log(payload, "payloadpayload roles")
        this.service.getRolesData(payload)
            .subscribe(function (response) {
            // console.log(response, "responseresponseresponse roles")
            _this.rolesReference = response;
        });
    };
    // numberOnly(event: any) {
    //   const pattern = /[0-9\+\-\ ]/;
    //   let inputChar = String.fromCharCode(event.charCode);
    //   if (!pattern.test(inputChar)) {
    //     // invalid character, prevent input
    //     event.preventDefault();
    //   }
    // }
    AddUserDialog.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    // focusOutemail() {
    //   let email_payload = {
    //     email: this.email
    //     // orgID:localStorage.getItem("org_id"),
    //   }
    //   this.onboardservice.checkEmailexist(email_payload)
    //     .subscribe(response => {
    //       if (response == "404") {
    //         // this.emaildisabled=true;
    //         this.toasterService.pop(
    //           "error",
    //           "Email",
    //           "Email already exist"
    //         );
    //         this.save_user_btn = true;
    //       } else {
    //         this.save_user_btn = false;
    //       }
    //       //48870d105beeea41b38dda4b1add8ac3
    //     });
    // }
    AddUserDialog.prototype.roletypeChanged = function (role) {
        this.selectedrole = role;
    };
    AddUserDialog.prototype.saveUser = function () {
        var _this = this;
        // alert('saving');
        var payload;
        payload = {
            name: this.name,
            email: this.email,
            mobile: this.mobile,
            role: this.selectedroletype,
        };
        // console.log(payload, "payload");
        if (payload.name != '' && payload.email != '' && payload.mobile != '' && payload.role != '') {
            // this.save_user_btn=true;
            this.service.saveuser(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                // console.log(response, "incoming response")
                if (data == "200") {
                    _this.dialogRef.close(data);
                    _this.toasterService.pop("success", "User", "User added successfully");
                    // this.save_user_btn=false;
                }
                else {
                    // this.getPortalUsers(payload);
                    _this.toasterService.pop("error", "User", "User already exist");
                }
            });
        }
        else {
            this.toasterService.pop("error", "User", "Please fill all mandatory fields");
            // this.save_user_btn=false;
        }
    };
    AddUserDialog.prototype.updateUser = function () {
        var _this = this;
        var payload = {
            userid: this.data.rowdata['id'],
            name: this.name,
            email: this.email,
            mobile: this.mobile,
            role: this.selectedroletype,
        };
        // console.log(payload, "payloadpayload");
        if (payload.name != '' && payload.email != '' && payload.mobile != '' && payload.role != '') {
            // this.save_user_btn=true;
            this.service.getUpdateUsers(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                // console.log(response, "incoming response")
                if (data == "200") {
                    _this.dialogRef.close(data);
                    _this.toasterService.pop("success", "User", "User updated successfully");
                }
                else {
                    // this.getUpdateUsers(payload);  
                }
            });
        }
        else {
            this.toasterService.pop("error", "User", "Please fill all mandatory fields");
        }
    };
    AddUserDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-user-dialog',
            template: __webpack_require__(/*! raw-loader!./add-user-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/portal-users/add-user-dialog.html"),
            styles: [__webpack_require__(/*! ./portal-users.component.scss */ "./src/app/portal-users/portal-users.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_portal_users_service__WEBPACK_IMPORTED_MODULE_1__["PortalUserService"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], Object, _portal_users_service__WEBPACK_IMPORTED_MODULE_1__["PortalUserService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AddUserDialog);
    return AddUserDialog;
}());

var DeleteUserDialog = /** @class */ (function () {
    function DeleteUserDialog(data, service, toasterService, dialogRef) {
        this.data = data;
        this.service = service;
        this.toasterService = toasterService;
        this.dialogRef = dialogRef;
        this.delete_btn = false;
    }
    DeleteUserDialog.prototype.ngOnInit = function () {
    };
    DeleteUserDialog.prototype.delete = function () {
        var _this = this;
        var payload = {
            userid: this.data.rowdata['id'],
        };
        // console.log(payload, "payloadpayload");
        // this.delete_btn=true;
        this.service.deleteUser(payload)
            .subscribe(function (response) {
            // console.log(response, "datadeleting");
            _this.dialogRef.close(response);
            // this.delete_btn=false;   
            _this.toasterService.pop("success", "User", "User Deleted successfully");
        });
    };
    DeleteUserDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-user-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-user-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/portal-users/delete-user-dialog.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_portal_users_service__WEBPACK_IMPORTED_MODULE_1__["PortalUserService"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])),
        __metadata("design:paramtypes", [Object, _portal_users_service__WEBPACK_IMPORTED_MODULE_1__["PortalUserService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DeleteUserDialog);
    return DeleteUserDialog;
}());



/***/ }),

/***/ "./src/app/portal-users/portal-users.service.ts":
/*!******************************************************!*\
  !*** ./src/app/portal-users/portal-users.service.ts ***!
  \******************************************************/
/*! exports provided: PortalUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalUserService", function() { return PortalUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/urlconstant */ "./src/app/helpers/urlconstant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { PortalUserColumns } from '../mock/mock-portaluser'
// import { environment } from 'app/environments/environment';

var PortalUserService = /** @class */ (function () {
    function PortalUserService(httpClient) {
        this.httpClient = httpClient;
    }
    PortalUserService.prototype.getPortalColumns = function () {
        throw new Error("Method not implemented.");
    };
    PortalUserService.prototype.saveuser = function (payload) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].saveUser;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    PortalUserService.prototype.getPortalUsers = function (payload) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].getuserlist;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    PortalUserService.prototype.statuscheck = function (payload) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].statuscheck;
        return this.httpClient.post(url, payload);
    };
    PortalUserService.prototype.getRolesData = function (payload) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].getroles;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    PortalUserService.prototype.deleteUser = function (data1) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].deleteportalUrl;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, data1);
    };
    PortalUserService.prototype.getUpdateUsers = function (payload) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].updateUser;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    PortalUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PortalUserService);
    return PortalUserService;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 135px;\n}\n\n.text-dark {\n  font-weight: 400;\n  color: #1c3d76 !important;\n  padding: 5%;\n}\n\n.mat-form-field-label-wrapper {\n  border: 0.2px solid #1f467f !important;\n}\n\n.vl {\n  border-left: 1px solid gray;\n  height: 14%;\n  position: absolute;\n  left: 61%;\n  overflow: hidden;\n  margin: -15.3%;\n}\n\n.footer ul li a {\n  text-transform: none;\n}\n\nh6, .h6 {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvRDpcXHZpZGVvLXN0cmVhbVxcb25saW5lLXZpZGVvLXN0cmVhbS1mcm9udGVuZC9zcmNcXGFwcFxccmVzZXQtcGFzc3dvcmRcXHJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnREE7RUFDSSxpQkFBQTtBQy9DSjs7QURpREU7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQzlDSjs7QURnREU7RUFDRSxzQ0FBQTtBQzdDSjs7QURnREU7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUM3Q0o7O0FEK0NFO0VBQ0Usb0JBQUE7QUM1Q0o7O0FEOENFO0VBQ0Usb0JBQUE7QUMzQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1hdC1jYXJkLmV4YW1wbGUtY2FyZC5tYXQtY2FyZCB7XHJcbi8vICAgICB3aWR0aDogMzAlO1xyXG4vLyAgICAgbWFyZ2luOiA1MHB4IDM1JTtcclxuLy8gfVxyXG4vLyAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAzN3B4O1xyXG4vLyB9XHJcbi8vIG1hdC1jYXJkLXRpdGxlLm1hdC1jYXJkLXRpdGxlIHtcclxuLy8gICAgIG1hcmdpbjogMHB4IDEyMnB4O1xyXG4vLyB9XHJcbi8vIC5leGFtcGxlLWZvcm0ge1xyXG4vLyAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuLy8gICAgIG1heC13aWR0aDogNTAwcHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbi8vICAgICB3aWR0aDogODQlO1xyXG4vLyAgICAgbWFyZ2luOiA3cHggOCU7XHJcbi8vICAgfVxyXG4vLyAgIGJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSB7XHJcbi8vICAgICBtYXJnaW46IDBweCAxNDFweDtcclxuLy8gICAgIHBhZGRpbmc6IDFweCAzOXB4O1xyXG4vLyAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAtN3B4O1xyXG4vLyAgIH1cclxuLy8gICAubWF0LWNhcmQtYWN0aW9ucywgLm1hdC1jYXJkLWNvbnRlbnQsIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gaDN7XHJcbi8vICAgICBjb2xvcjogYmx1ZTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuLy8gfVxyXG4vLyAuY29udGFpbmV0cntcclxuLy8gICAgIGJvcmRlcjoxcHggc29saWQgc2lsdmVyO1xyXG4vLyAgICAgd2lkdGg6IDUwJTtcclxuLy8gICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgIG1hcmdpbjogMjBweCAyNSU7XHJcbi8vIH1cclxuLy8gLmZvcm0tZ3JvdXB7XHJcbi8vICAgICBtYXJnaW46IDBweCAyMSU7ICAgXHJcbi8vIH1cclxuLy8gYnV0dG9ue1xyXG4vLyAgICAgbWFyZ2luOiAxMHB4IDAlO1xyXG4vLyB9XHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMzVweDtcclxuICB9XHJcbiAgLnRleHQtZGFya3tcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzFjM2Q3NiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcclxuICAgIGJvcmRlcjowLjJweCBzb2xpZCAjMWY0NjdmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC52bHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICAgIGhlaWdodDogMTQlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNjElO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgbWFyZ2luOiAtMTUuMyU7XHJcbiAgfVxyXG4gIC5mb290ZXIgdWwgbGkgYXtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICBoNiwgLmg2IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICAiLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTM1cHg7XG59XG5cbi50ZXh0LWRhcmsge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzFjM2Q3NiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICBib3JkZXI6IDAuMnB4IHNvbGlkICMxZjQ2N2YgIWltcG9ydGFudDtcbn1cblxuLnZsIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICBoZWlnaHQ6IDE0JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2MSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogLTE1LjMlO1xufVxuXG4uZm9vdGVyIHVsIGxpIGEge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuaDYsIC5oNiB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: MyErrorStateMatcher, ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reset_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password.service */ "./src/app/reset-password/reset-password.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// import { AuthService } from 'src/app/auth/auth.service';
// import { checkAndUpdateElementInline } from '@angular/core/src/view/element';


/** Error when invalid control is dirty, touched, or submitted. */
// export class LoginErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return MyErrorStateMatcher;
}());

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(formBuilder, service, 
    // public authService: AuthService,
    router, toasterService, route) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.toasterService = toasterService;
        this.route = route;
        this.email = "";
        this.key = "";
        // orgID="";
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.myForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=[^!@#$%^&*?]*[!@#$%^&*?]).{8,30}')]],
            confirmPassword: ['']
        }, { validator: this.checkPasswords });
    }
    ResetPasswordComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = this.route.snapshot.queryParamMap.get('email');
        this.key = this.route.snapshot.queryParamMap.get('id');
        // console.log(this.email, this.key, "incoming email & key");
        // this.orgID= this.route.snapshot.queryParamMap.get('orgID');
        this.router.navigate(['.'], { relativeTo: this.route, queryParams: {} });
        if (this.email && this.key) {
            var payload = {
                email: this.email,
                token: this.key,
            };
            // console.log(payload, "incoming email&key");
            this.service.checkReset(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                // console.log(data, "incoming key")
                if (data == 200) {
                    _this.router.navigate(['../']);
                }
                else {
                    // this.toasterService.pop(
                    //   "error",
                    //   "Reset Password",
                    //   "set password",
                    // );
                }
            });
        }
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var payload = {
            email: this.email,
            token: this.key,
            // orgID:this.orgID,
            password: this.myForm.value.password
        };
        if (payload.password != '') {
            // console.log(payload, "email,key,password");
            this.service.updatePassword(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                if (data == "200") {
                    _this.toasterService.pop("success", "Reset Password", "Password updated successfully");
                    _this.router.navigate(['../']);
                }
                else {
                    _this.toasterService.pop("error", "Reset Password", "Password Not updated successfully");
                }
            });
        }
        else {
            this.toasterService.pop("error", "User", "Please fill all mandatory fields");
        }
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/reset-password/reset-password.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _reset_password_service__WEBPACK_IMPORTED_MODULE_2__["resetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/reset-password/reset-password.service.ts ***!
  \**********************************************************/
/*! exports provided: resetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetService", function() { return resetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/urlconstant */ "./src/app/helpers/urlconstant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var resetService = /** @class */ (function () {
    function resetService(httpClient) {
        this.httpClient = httpClient;
    }
    // checkresetUrl = environment.backendUrl + 'portal/users/verifyreset';
    // updatepasswordUrl = environment.backendUrl + 'portal/users/updatepassword';
    resetService.prototype.checkReset = function (subdata) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].checkresetUrl;
        return this.httpClient.post(url, subdata);
    };
    resetService.prototype.updatePassword = function (subdata) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].updatepasswordUrl;
        return this.httpClient.post(url, subdata);
    };
    resetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], resetService);
    return resetService;
}());



/***/ }),

/***/ "./src/app/reset-password/set-password/set-password.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/reset-password/set-password/set-password.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 135px;\n}\n\n.text-dark {\n  font-weight: 400;\n  color: #1c3d76 !important;\n  padding: 5%;\n}\n\n.mat-form-field-label-wrapper {\n  border: 0.2px solid #1f467f !important;\n}\n\n.vl {\n  border-left: 1px solid gray;\n  height: 14%;\n  position: absolute;\n  left: 61%;\n  overflow: hidden;\n  margin: -15.3%;\n}\n\n.footer ul li a {\n  text-transform: none;\n}\n\nh6, .h6 {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvc2V0LXBhc3N3b3JkL0Q6XFx2aWRlby1zdHJlYW1cXG9ubGluZS12aWRlby1zdHJlYW0tZnJvbnRlbmQvc3JjXFxhcHBcXHJlc2V0LXBhc3N3b3JkXFxzZXQtcGFzc3dvcmRcXHNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvc2V0LXBhc3N3b3JkL3NldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFFO0VBQ0Usc0NBQUE7QUNHSjs7QURBRTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERFO0VBQ0Usb0JBQUE7QUNJSjs7QURGRTtFQUNFLG9CQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9yZXNldC1wYXNzd29yZC9zZXQtcGFzc3dvcmQvc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDEzNXB4O1xyXG4gIH1cclxuICAudGV4dC1kYXJre1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMWMzZDc2ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOjAuMnB4IHNvbGlkICMxZjQ2N2YgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnZse1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgaGVpZ2h0OiAxNCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2MSU7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBtYXJnaW46IC0xNS4zJTtcclxuICB9XHJcbiAgLmZvb3RlciB1bCBsaSBhe1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIGg2LCAuaDYge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gICIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMzVweDtcbn1cblxuLnRleHQtZGFyayB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMWMzZDc2ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIGJvcmRlcjogMC4ycHggc29saWQgIzFmNDY3ZiAhaW1wb3J0YW50O1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG4gIGhlaWdodDogMTQlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYxJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAtMTUuMyU7XG59XG5cbi5mb290ZXIgdWwgbGkgYSB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5oNiwgLmg2IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/reset-password/set-password/set-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/reset-password/set-password/set-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: MyErrorStateMatcher, SetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordComponent", function() { return SetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _set_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-password.service */ "./src/app/reset-password/set-password/set-password.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// import { AuthService } from 'src/app/auth/auth.service';
// import { checkAndUpdateElementInline } from '@angular/core/src/view/element';


var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return MyErrorStateMatcher;
}());

var SetPasswordComponent = /** @class */ (function () {
    function SetPasswordComponent(service, formBuilder, router, toasterService, route) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toasterService = toasterService;
        this.route = route;
        this.email = "";
        this.key = "";
        // orgID="";
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.myForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=[^!@#$%^&*?]*[!@#$%^&*?]).{8,30}')]],
            confirmPassword: ['']
        }, { validator: this.checkPasswords });
    }
    SetPasswordComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    SetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.email = this.route.snapshot.queryParamMap.get('email');
        this.key = this.route.snapshot.queryParamMap.get('id');
        this.router.navigate(['.'], { relativeTo: this.route, queryParams: {} });
        if (this.email && this.key) {
            var payload = {
                email: this.email,
                token: this.key,
            };
            // console.log(payload, "incoming email&key");
            this.service.checkReset(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                // console.log(data, "incoming key")
                if (data == 200) {
                    _this.router.navigate(['../']);
                }
                else {
                    // this.toasterService.pop(
                    //   "error",
                    //   "Warning",
                    //   "Set password",
                    // );
                }
            });
        }
    };
    SetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var payload = {
            email: this.email,
            token: this.key,
            password: this.myForm.value.password
        };
        if (payload.password != '') {
            this.service.updatePassword(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                if (data == "200") {
                    _this.toasterService.pop("success", "Set Password", "Password updated successfully");
                    _this.router.navigate(['../']);
                }
                else {
                    _this.toasterService.pop("error", "Warning", "Password Not updated successfully");
                }
            });
        }
        else {
            this.toasterService.pop("error", "User", "Please fill all mandatory fields");
        }
    };
    SetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-set-password',
            template: __webpack_require__(/*! raw-loader!./set-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/reset-password/set-password/set-password.component.html"),
            styles: [__webpack_require__(/*! ./set-password.component.scss */ "./src/app/reset-password/set-password/set-password.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])),
        __metadata("design:paramtypes", [_set_password_service__WEBPACK_IMPORTED_MODULE_2__["setService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SetPasswordComponent);
    return SetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/set-password/set-password.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/reset-password/set-password/set-password.service.ts ***!
  \*********************************************************************/
/*! exports provided: setService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setService", function() { return setService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/urlconstant */ "./src/app/helpers/urlconstant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var setService = /** @class */ (function () {
    function setService(httpClient) {
        this.httpClient = httpClient;
    }
    // checkresetUrl = environment.backendUrl + 'portal/users/verifyreset';
    // updatepasswordUrl = environment.backendUrl + 'portal/users/updatepassword';
    setService.prototype.checkReset = function (subdata) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].checkresetUrl;
        return this.httpClient.post(url, subdata);
    };
    setService.prototype.updatePassword = function (subdata) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].updatepasswordUrl;
        return this.httpClient.post(url, subdata);
    };
    setService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], setService);
    return setService;
}());



/***/ }),

/***/ "./src/app/state/state.component.scss":
/*!********************************************!*\
  !*** ./src/app/state/state.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5) !important;\n  padding-bottom: 10px !important;\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: 25px;\n  padding: 0 0 0 0;\n  left: 0%;\n  top: 32%;\n}\n\n.data-table {\n  width: 80%;\n  margin: 20px auto;\n}\n\n.iconbutton {\n  margin: 10px 10px;\n}\n\nbutton.btn.btn-default.bg-info.pull-right.m-3 {\n  margin: -6px 0px !important;\n  background: #1f467f !important;\n  border-radius: 2.5rem !important;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n  padding-left: 92px;\n  width: 36%;\n}\n\na {\n  margin: 0px 4px;\n}\n\n.card-title {\n  margin: 5px 50px !important;\n  color: black;\n}\n\n.cardbox {\n  width: 350px;\n}\n\n@media (min-width: 1024px) and (max-width: 1279px) {\n  table {\n    width: 100% !important;\n  }\n\n  .card-title {\n    width: 129px !important;\n    margin-left: 3% !important;\n  }\n\n  .card-container {\n    padding-left: 10%;\n    padding-left: 50px !important;\n    widows: 36%;\n  }\n}\n\n@media (min-width: 1280px) and (max-width: 1365px) {\n  .card-title {\n    width: 129px !important;\n    margin-left: 3% !important;\n  }\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  table {\n    width: 100%;\n  }\n\n  .container {\n    width: 310px;\n  }\n}\n\n@supports (-ms-ime-align: auto) {\n  table {\n    width: 100%;\n  }\n\n  .container {\n    width: 310px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGUvRDpcXHZpZGVvLXN0cmVhbVxcb25saW5lLXZpZGVvLXN0cmVhbS1mcm9udGVuZC9zcmNcXGFwcFxcc3RhdGVcXHN0YXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGF0ZS9zdGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURHQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FDQUE7O0FERUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNDQTs7QURDQTtFQUNBLGlCQUFBO0FDRUE7O0FEQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUNHQTs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FERkE7RUFDRTtJQUNFLHNCQUFBO0VDS0Y7O0VESEE7SUFDRSx1QkFBQTtJQUNBLDBCQUFBO0VDTUY7O0VESkY7SUFDRSxpQkFBQTtJQUNBLDZCQUFBO0lBQ0EsV0FBQTtFQ09BO0FBQ0Y7O0FETEE7RUFDRTtJQUNFLHVCQUFBO0lBQ0EsMEJBQUE7RUNPRjtBQUNGOztBRExBO0VBQ0U7SUFDRSxXQUFBO0VDT0Y7O0VETEE7SUFDRSxZQUFBO0VDUUY7QUFDRjs7QUROQTtFQUNFO0lBQ0UsV0FBQTtFQ1FGOztFRE5BO0lBQ0UsWUFBQTtFQ1NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zdGF0ZS9zdGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5hc3Rlcmlza19pbnB1dDphZnRlciB7XHJcbmNvbnRlbnQ6IFwiICpcIjtcclxuY29sb3I6ICNlMzI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbmZvbnQtc2l6ZTogMjVweDtcclxucGFkZGluZzogMCAwIDAgMDtcclxubGVmdDogMCU7XHJcbnRvcDozMiU7XHJcbn1cclxuLmRhdGEtdGFibGV7XHJcbndpZHRoOiA4MCU7XHJcbm1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcbi5pY29uYnV0dG9ue1xyXG5tYXJnaW46MTBweCAxMHB4O1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuYmctaW5mby5wdWxsLXJpZ2h0Lm0tMyB7XHJcbm1hcmdpbjogLTZweCAwcHggIWltcG9ydGFudDtcclxuYmFja2dyb3VuZDogIzFmNDY3ZiAhaW1wb3J0YW50O1xyXG5ib3JkZXItcmFkaXVzOiAyLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4vLyBtYXQtaWNvbi5tYXQtaWNvbi5ub3RyYW5zbGF0ZS5tYXRlcmlhbC1pY29ucy5tYXQtaWNvbi1uby1jb2xvciB7XHJcbi8vIHBhZGRpbmc6IDBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDkycHg7XHJcbiAgd2lkdGg6IDM2JTtcclxufVxyXG5hIHtcclxuICBtYXJnaW46IDBweCA0cHg7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbjogNXB4IDUwcHggIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNhcmRib3h7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyNzlweCkge1xyXG4gIHRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNhcmQtdGl0bGV7XHJcbiAgICB3aWR0aDogMTI5cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJSAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWNvbnRhaW5lcntcclxuICBwYWRkaW5nLWxlZnQ6MTAlO1xyXG4gIHBhZGRpbmctbGVmdDogNTBweCAhaW1wb3J0YW50O1xyXG4gIHdpZG93czogMzYlO1xyXG59XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6MTM2NXB4KSB7XHJcbiAgLmNhcmQtdGl0bGV7XHJcbiAgICB3aWR0aDogMTI5cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJSAhaW1wb3J0YW50O1xyXG59XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcclxuICB0YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6MzEwcHg7XHJcbiAgfVxyXG59XHJcbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gIHRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDozMTBweDtcclxuICB9XHJcbn0iLCIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmFzdGVyaXNrX2lucHV0OmFmdGVyIHtcbiAgY29udGVudDogXCIgKlwiO1xuICBjb2xvcjogI2UzMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBsZWZ0OiAwJTtcbiAgdG9wOiAzMiU7XG59XG5cbi5kYXRhLXRhYmxlIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5pY29uYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuYmctaW5mby5wdWxsLXJpZ2h0Lm0tMyB7XG4gIG1hcmdpbjogLTZweCAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzFmNDY3ZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW0gIWltcG9ydGFudDtcbn1cblxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiA5MnB4O1xuICB3aWR0aDogMzYlO1xufVxuXG5hIHtcbiAgbWFyZ2luOiAwcHggNHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogNXB4IDUwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZGJveCB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYXJkLXRpdGxlIHtcbiAgICB3aWR0aDogMTI5cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMyUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkb3dzOiAzNiU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzY1cHgpIHtcbiAgLmNhcmQtdGl0bGUge1xuICAgIHdpZHRoOiAxMjlweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzEwcHg7XG4gIH1cbn1cbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzEwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/state/state.component.ts":
/*!******************************************!*\
  !*** ./src/app/state/state.component.ts ***!
  \******************************************/
/*! exports provided: StateComponent, AddStateDialog, DeleteStateDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStateDialog", function() { return AddStateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStateDialog", function() { return DeleteStateDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.service */ "./src/app/state/state.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ELEMENT_DATA = [];
var StateComponent = /** @class */ (function () {
    function StateComponent(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.tableData = [];
        this.displayedColumns = ['cat_name', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
    }
    StateComponent.prototype.ngOnInit = function () {
        var payload = {};
        this.getState(payload);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.dataSource.paginator = this.paginator;
    };
    StateComponent.prototype.delete_low = function (row_data) {
        var _this = this;
        var dialogRef = this.dialog.open(DeleteStateDialog, {
            data: {
                rowdata: row_data
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                var data1 = {};
                _this.getState(data1);
            }
        });
    };
    StateComponent.prototype.getState = function (payload) {
        var _this = this;
        this.service.getState(payload)
            .subscribe(function (response) {
            // console.log(response, "response get States");
            _this.tableData = response;
            _this.dataSource.data = _this.tableData;
        });
    };
    StateComponent.prototype.edit_low = function (row_data) {
        var _this = this;
        var dialogRef = this.dialog.open(AddStateDialog, {
            data: {
                rowdata: row_data
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                var payload = {};
                _this.getState(payload);
            }
        });
    };
    StateComponent.prototype.adduser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddStateDialog, {});
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                var payload = {};
                _this.getState(payload);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StateComponent.prototype, "paginator", void 0);
    StateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-state',
            template: __webpack_require__(/*! raw-loader!./state.component.html */ "./node_modules/raw-loader/index.js!./src/app/state/state.component.html"),
            styles: [__webpack_require__(/*! ./state.component.scss */ "./src/app/state/state.component.scss")]
        }),
        __metadata("design:paramtypes", [_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], StateComponent);
    return StateComponent;
}());

var AddStateDialog = /** @class */ (function () {
    function AddStateDialog(formBuilder, data, service, toasterService, dialogRef) {
        // this.myForm = this.formBuilder.group({
        //   category: ['',[Validators.required]],
        this.formBuilder = formBuilder;
        this.data = data;
        this.service = service;
        this.toasterService = toasterService;
        this.dialogRef = dialogRef;
        this.cat_name = "";
        this.dialogTitle = "Add new state";
        this.save_state_btn = true;
        this.update_state_btn = false;
        //  });
        // console.log(data, "edit dailogdata");
        if (data) {
            this.cat_name = data.rowdata['cat_name'];
            this.dialogTitle = "Update Category";
            this.update_state_btn = true;
            this.save_state_btn = false;
        }
        else {
            this.dialogTitle = "Add Category";
            this.save_state_btn = true;
            this.update_state_btn = false;
        }
    }
    AddStateDialog.prototype.ngOnInit = function () {
    };
    AddStateDialog.prototype.saveState = function () {
        var _this = this;
        var payload;
        payload = {
            cat_name: this.cat_name
        };
        if (payload.cat_name != '') {
            this.service.saveState(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                if (data == "200") {
                    _this.dialogRef.close(data);
                    _this.toasterService.pop("success", "Category-Level-1", "Category-Level-1 added successfully");
                }
                else {
                    _this.toasterService.pop("error", "Category-Level-1", "Category-Level-1 Not Added Successfully");
                }
            });
        }
        else {
            this.toasterService.pop("error", "Category-Level-1", "Please Add Category-Level-1");
        }
    };
    AddStateDialog.prototype.updateState = function () {
        var _this = this;
        var payload = {
            cat_id: this.data.rowdata['cat_id'],
            cat_name: this.cat_name,
        };
        // console.log(payload, "payloadpayload");
        if (payload.cat_name != '') {
            this.service.updateState(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                // console.log(response, "incoming response")
                if (data == "200") {
                    _this.dialogRef.close(data);
                    _this.toasterService.pop("success", "Category-Level-1", "Category-Level-1 Edited successfully");
                }
                else {
                    _this.toasterService.pop("success", "Category-Level-1", "Category-Level-1 Not Edited successfully");
                }
            });
        }
        else {
            this.toasterService.pop("error", "Category-Level-1", "Please Add Category-Level-1");
        }
    };
    AddStateDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-state-dialog',
            template: __webpack_require__(/*! raw-loader!./add-state-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/state/add-state-dialog.html"),
            styles: [__webpack_require__(/*! ./state.component.scss */ "./src/app/state/state.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], Object, _state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AddStateDialog);
    return AddStateDialog;
}());

var DeleteStateDialog = /** @class */ (function () {
    function DeleteStateDialog(data, service, toasterService, dialogRef) {
        this.data = data;
        this.service = service;
        this.toasterService = toasterService;
        this.dialogRef = dialogRef;
        this.delete_btn = false;
    }
    DeleteStateDialog.prototype.ngOnInit = function () {
    };
    DeleteStateDialog.prototype.deletestate = function () {
        var _this = this;
        var payload = {
            cat_id: this.data.rowdata['cat_id'],
        };
        // console.log(payload, "payloadpayload");
        // this.delete_btn=true;
        this.service.deleteState(payload)
            .subscribe(function (response) {
            // console.log(response, "datadeleting");
            _this.dialogRef.close(response);
            // this.delete_btn=false;   
            _this.toasterService.pop("success", "Category-Level-1", "Category-Level-1 deleted successfully");
        });
    };
    DeleteStateDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-state-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-state-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/state/delete-state-dialog.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])),
        __metadata("design:paramtypes", [Object, _state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DeleteStateDialog);
    return DeleteStateDialog;
}());



/***/ }),

/***/ "./src/app/state/state.service.ts":
/*!****************************************!*\
  !*** ./src/app/state/state.service.ts ***!
  \****************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
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



var StateService = /** @class */ (function () {
    function StateService(httpClient) {
        this.httpClient = httpClient;
    }
    StateService.prototype.saveState = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].saveState;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    StateService.prototype.getState = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].getstatelist;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    StateService.prototype.updateState = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].updateState;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    StateService.prototype.deleteState = function (data1) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].deleteState;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, data1);
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/video-upload/delete-dialog/delete-dialog.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/video-upload/delete-dialog/delete-dialog.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXVwbG9hZC9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/video-upload/delete-dialog/delete-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/video-upload/delete-dialog/delete-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _video_upload_video_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../video-upload/video-upload.service */ "./src/app/video-upload/video-upload.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


// import {HerdService} from '../herd.service';





var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(data, toasterService, dialogRef, sanitizer, formBuilder, service, dialog, router) {
        this.data = data;
        this.toasterService = toasterService;
        this.dialogRef = dialogRef;
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.service = service;
        this.dialog = dialog;
        this.router = router;
    }
    DeleteDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteDialogComponent.prototype.delete = function () {
        var _this = this;
        // console.log(this.data.payload,"delete dialog data")
        var payload = {
            video_id: this.data.payload.video_id,
        };
        // console.log(payload,"denjdn")
        this.service.delete_video(payload).
            subscribe(function (response) {
            // console.log(response,"delete");
            if (response) {
                _this.toasterService.pop("success", "Video Detele", "Video Deleted successfully");
                _this.dialogRef.close(response);
            }
            else {
                _this.toasterService.pop("error", "Video Detele", "Video Detele Not updated successfully");
            }
        });
    };
    DeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-dialog',
            template: __webpack_require__(/*! raw-loader!./delete-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-upload/delete-dialog/delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.scss */ "./src/app/video-upload/delete-dialog/delete-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"])),
        __metadata("design:paramtypes", [Object, angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _video_upload_video_upload_service__WEBPACK_IMPORTED_MODULE_5__["VideoUploadService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/video-upload/video-dialog/video-dialog.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/video-upload/video-dialog/video-dialog.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "video {\n  width: 100%;\n  height: auto;\n}\n\n.close-icon {\n  position: absolute;\n  top: 8%;\n  right: 7%;\n  z-index: 99;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n  background: #fff;\n}\n\n.mat-dialog-container {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #000 !important;\n  color: #d2d2d2;\n}\n\n.margin_p {\n  margin-bottom: 0.2rem;\n  font-weight: 400;\n  font-size: 15px;\n}\n\n.mtop[_ngcontent-cyg-c17] {\n  margin-top: 2%;\n  padding: 1% 0% 0% 3%;\n}\n\n.content_padding {\n  padding: 1% 0% 0% 3%;\n}\n\n.font_weight {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLWRpYWxvZy9EOlxcdmlkZW8tc3RyZWFtXFxvbmxpbmUtdmlkZW8tc3RyZWFtLWZyb250ZW5kL3NyY1xcYXBwXFx2aWRlby11cGxvYWRcXHZpZGVvLWRpYWxvZ1xcdmlkZW8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby11cGxvYWQvdmlkZW8tZGlhbG9nL3ZpZGVvLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0Usd0hBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0E7O0FERUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLWRpYWxvZy92aWRlby1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ2aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4JTtcclxuICAgIHJpZ2h0OiA3JTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICB9XHJcblxyXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwwLDAsLjIpLCAwIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2QyZDJkMjtcclxufVxyXG5cclxuLm1hcmdpbl9we1xyXG5tYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbmZvbnQtd2VpZ2h0OjQwMDtcclxuZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ubXRvcFtfbmdjb250ZW50LWN5Zy1jMTddIHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBwYWRkaW5nOiAxJSAwJSAwJSAzJTtcclxufVxyXG5cclxuLmNvbnRlbnRfcGFkZGluZ3tcclxuICBwYWRkaW5nOiAxJSAwJSAwJSAzJTtcclxufVxyXG5cclxuLmZvbnRfd2VpZ2h0e1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuICBcclxuICAvLyAjdmlkZW8tdmlld3BvcnQge1xyXG4gIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICAgIHRvcDogMDtcclxuICAvLyAgICAgbGVmdDowO1xyXG4gIC8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vICAgICB6LWluZGV4OiAtMTsgLyogZm9yIGFjY2Vzc2luZyB0aGUgdmlkZW8gYnkgY2xpY2sgKi9cclxuICAvLyB9IiwidmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4JTtcbiAgcmlnaHQ6IDclO1xuICB6LWluZGV4OiA5OTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZDJkMmQyO1xufVxuXG4ubWFyZ2luX3Age1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm10b3BbX25nY29udGVudC1jeWctYzE3XSB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBwYWRkaW5nOiAxJSAwJSAwJSAzJTtcbn1cblxuLmNvbnRlbnRfcGFkZGluZyB7XG4gIHBhZGRpbmc6IDElIDAlIDAlIDMlO1xufVxuXG4uZm9udF93ZWlnaHQge1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/video-upload/video-dialog/video-dialog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/video-upload/video-dialog/video-dialog.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDialogComponent", function() { return VideoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import {HerdService} from '../herd.service';


var VideoDialogComponent = /** @class */ (function () {
    function VideoDialogComponent(data, dialogRef, sanitizer) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.sanitizer = sanitizer;
        // console.log(data,"dialoggg dataaaaa this.src_video");
        var video_link = data.payload.video_link;
        var video_display = "https://www.youtube.com/embed/" + video_link + "?controls=0&showinfo=0";
        // console.log(video_display,"video_displayvideo_display");
        // this.src_video="https://www.youtube.com/embed/EI8kGZOqsRg";
        // console.log(this.src_video,"dialoggg dataaaaa this.src_video");
        this.src_video = this.sanitizer.bypassSecurityTrustResourceUrl(video_display);
        this.video_title = data.payload.title;
        this.video_description = data.payload.description;
    }
    VideoDialogComponent.prototype.ngOnInit = function () {
    };
    VideoDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    VideoDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-dialog',
            template: __webpack_require__(/*! raw-loader!./video-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-dialog/video-dialog.component.html"),
            styles: [__webpack_require__(/*! ./video-dialog.component.scss */ "./src/app/video-upload/video-dialog/video-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], VideoDialogComponent);
    return VideoDialogComponent;
}());



/***/ }),

/***/ "./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font_p {\n  font-size: 14px;\n}\n\n.close-icon {\n  position: absolute;\n  bottom: 0%;\n  right: 2%;\n  z-index: 99;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n  background: #fff;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: 25px;\n  padding: 0 0 0 0;\n  left: -5%;\n  top: 32%;\n}\n\n.asterisk_input1:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: 25px;\n  padding: 0 0 0 0;\n  left: 0%;\n  top: 32%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px;\n}\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.middleline {\n  margin-top: 0rem;\n  margin-bottom: 0rem;\n}\n\n.brows {\n  text-align: center;\n  padding-top: 5%;\n  margin-bottom: 0%;\n  font-size: 12px;\n  color: #333333f0;\n  font-weight: 400;\n}\n\n.editpadding {\n  padding-left: 2% !important;\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .close-btn {\n    position: absolute !important;\n    top: 5% !important;\n  }\n\n  .Iconmat {\n    margin-top: -6% !important;\n  }\n}\n\n@supports (-ms-ime-align: auto) {\n  .close-btn {\n    position: absolute !important;\n    top: 5% !important;\n  }\n\n  .Iconmat {\n    margin-top: -6% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLWVkaXQtZGlhbG9nL0Q6XFx2aWRlby1zdHJlYW1cXG9ubGluZS12aWRlby1zdHJlYW0tZnJvbnRlbmQvc3JjXFxhcHBcXHZpZGVvLXVwbG9hZFxcdmlkZW8tZWRpdC1kaWFsb2dcXHZpZGVvLWVkaXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby11cGxvYWQvdmlkZW8tZWRpdC1kaWFsb2cvdmlkZW8tZWRpdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDRUo7O0FEQ0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQ0VOOztBRENFO0VBQ0UsV0FBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FDSUo7O0FERkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FESEE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSwyQkFBQTtBQ09GOztBRExBO0VBQ0U7SUFDRSw2QkFBQTtJQUNBLGtCQUFBO0VDUUY7O0VETkE7SUFDRSwwQkFBQTtFQ1NGO0FBQ0Y7O0FEUEE7RUFDRTtJQUNFLDZCQUFBO0lBQ0Esa0JBQUE7RUNTRjs7RURQQTtJQUNFLDBCQUFBO0VDVUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXVwbG9hZC92aWRlby1lZGl0LWRpYWxvZy92aWRlby1lZGl0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250X3B7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNsb3NlLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIHJpZ2h0OiAyJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICB9XHJcbiAgXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5hc3Rlcmlza19pbnB1dDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiAqXCI7XHJcbiAgICBjb2xvcjogI2UzMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICAgIGxlZnQ6IC01JTtcclxuICAgIHRvcDozMiU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFzdGVyaXNrX2lucHV0MTphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiICpcIjtcclxuICAgICAgY29sb3I6ICNlMzI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgcGFkZGluZzogMCAwIDAgMDtcclxuICAgICAgbGVmdDogMCU7XHJcbiAgICAgIHRvcDozMiU7XHJcbiAgICAgIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZmlsZVVwbG9hZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5maWxlVXBsb2FkIGlucHV0LnVwbG9hZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG59XHJcbi5taWRkbGVsaW5le1xyXG4gIG1hcmdpbi10b3A6IDByZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxufVxyXG4uYnJvd3N7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiAwJTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMzMzMzMzNmMDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5lZGl0cGFkZGluZ3tcclxuICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcclxuICAuY2xvc2UtYnRue1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHRvcDo1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuSWNvbm1hdHtcclxuICAgIG1hcmdpbi10b3A6LTYlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gIC5jbG9zZS1idG57XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOjUlICFpbXBvcnRhbnQ7XHJcbiAgfSAgXHJcbiAgLkljb25tYXR7XHJcbiAgICBtYXJnaW4tdG9wOi02JSAhaW1wb3J0YW50O1xyXG4gIH1cclxufSIsIi5mb250X3Age1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAlO1xuICByaWdodDogMiU7XG4gIHotaW5kZXg6IDk5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hc3Rlcmlza19pbnB1dDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiICpcIjtcbiAgY29sb3I6ICNlMzI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZzogMCAwIDAgMDtcbiAgbGVmdDogLTUlO1xuICB0b3A6IDMyJTtcbn1cblxuLmFzdGVyaXNrX2lucHV0MTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiICpcIjtcbiAgY29sb3I6ICNlMzI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZzogMCAwIDAgMDtcbiAgbGVmdDogMCU7XG4gIHRvcDogMzIlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWxlVXBsb2FkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5maWxlVXBsb2FkIGlucHV0LnVwbG9hZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xufVxuXG4ubWlkZGxlbGluZSB7XG4gIG1hcmdpbi10b3A6IDByZW07XG4gIG1hcmdpbi1ib3R0b206IDByZW07XG59XG5cbi5icm93cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzMzMzMzM2YwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZWRpdHBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDIlICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5jbG9zZS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogNSUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5JY29ubWF0IHtcbiAgICBtYXJnaW4tdG9wOiAtNiUgIWltcG9ydGFudDtcbiAgfVxufVxuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gIC5jbG9zZS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogNSUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5JY29ubWF0IHtcbiAgICBtYXJnaW4tdG9wOiAtNiUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VideoEditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoEditDialogComponent", function() { return VideoEditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/urlconstant */ "./src/app/helpers/urlconstant.ts");
/* harmony import */ var _video_upload_video_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../video-upload/video-upload.service */ "./src/app/video-upload/video-upload.service.ts");
/* harmony import */ var _delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../delete-dialog/delete-dialog.component */ "./src/app/video-upload/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


// import {HerdService} from '../herd.service';








var VideoEditDialogComponent = /** @class */ (function () {
    function VideoEditDialogComponent(data, toasterService, dialogRef, sanitizer, formBuilder, service, dialog, http, router) {
        this.data = data;
        this.toasterService = toasterService;
        this.dialogRef = dialogRef;
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.service = service;
        this.dialog = dialog;
        this.http = http;
        this.router = router;
        this.Title = "";
        this.Description = "";
        this.canEditCode = false;
        this.canEditlabel = true;
        this.nohrline = true;
        this.hr_hide = true;
        this.show_img_format = false;
        //  console.log(this.global_url,'njdfj')
        this.global_url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_5__["UrlConstants"].MAINURL;
        this.video_title = data.payload.title;
        this.video_description = data.payload.description;
        this.thumbnail_src = this.global_url + data.payload.thumbnail;
        this.likes = data.payload.likes;
        this.dislikes = data.payload.dislikes;
        this.views = data.payload.views;
        this.shares_video = data.payload.share;
        this.form = this.formBuilder.group({
            Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    VideoEditDialogComponent.prototype.ngOnInit = function () {
        // this.service.getsub_name(payload).
        //   subscribe(response => {
        //     console.log(response, "sub_name");
        //     let subName = response.filter(sub => sub.cat_id === cat_id.value);
        //     this.sub_namesReference = subName;
        //     console.log(subName, "resuuuuuu");
        //   });
    };
    VideoEditDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    VideoEditDialogComponent.prototype.edit_low = function () {
        this.form = this.formBuilder.group({
            Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.video_title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.video_description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        // this.canEditCode=true;
        // this.canEditlabel=false;
        this.canEditCode = !this.canEditCode;
        this.hr_hide = false;
        this.nohrline = !this.nohrline;
        // this.Title=this.video_title;
        // this.Description=this.video_description;
    };
    VideoEditDialogComponent.prototype.delete_low = function (isNew) {
        var _this = this;
        // console.log(this.data,"delete data");
        var title = isNew ? 'Edit Video Details' : 'Update video';
        var dialogRef = this.dialog.open(_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDialogComponent"], {
            // width: '1024px',
            // height:'500px',
            disableClose: true,
            data: { title: title, payload: this.data.payload },
        });
        dialogRef.afterClosed()
            .subscribe(function (res) {
            _this.router.navigate(['/video-upload']);
            _this.dialogRef.close();
        });
        // console.log(videos,"open video dialog");
    };
    VideoEditDialogComponent.prototype.onImageChange = function (event) {
        var _this = this;
        this.uploadedImageFiles = event.target.files;
        if (event.target.files[0].type != "image/png" && event.target.files[0].type != "image/jpg" && event.target.files[0].type != "image/jpeg" && event.target.files[0].type != "image/ttf") {
            this.show_img_format = true;
        }
        else {
            this.show_img_format = false;
        }
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                // this.canEditCode=true;
                _this.thumbnail_src = "";
                _this.thumbnail_src = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    VideoEditDialogComponent.prototype.update = function () {
        var _this = this;
        this.nohrline = false;
        console.log(this.uploadedImageFiles, "this.uploadedImageFiles[0]");
        // console.log(this.uploadedImageFiles[0].name,"this.uploadedImageFiles[0].name");
        var formData = new FormData();
        if (this.uploadedImageFiles != undefined) {
            formData.append("images", this.uploadedImageFiles[0], this.uploadedImageFiles[0].name);
        }
        console.log(this.form.get('Title').value, this.form.get('Title').value, "title description");
        if (this.form.get('Title').value != "" && this.form.get('Description').value != "") {
            formData.append("Title", this.form.get('Title').value);
            formData.append("Description", this.form.get('Description').value);
            formData.append("video_id", this.data.payload.video_id);
            console.log(formData, "formDataformData");
            // return true;
            this.http.post(this.global_url + 'portal/users/updatevinfo', formData).subscribe((function (response) {
                if (response) {
                    // console.log(response,"response");
                    _this.video_title = response['title'];
                    _this.video_description = response['des'];
                    _this.canEditCode = false;
                    _this.toasterService.pop("success", "Video Details", "Video Details updated successfully");
                }
            }));
        }
        else {
            this.toasterService.pop("error", "Video Details", "Please fill all mandatory fields");
        }
    };
    VideoEditDialogComponent.prototype.cancel = function () {
        // console.log("cancel button called")
        this.canEditCode = false;
        this.hr_hide = true;
        this.nohrline = !this.nohrline;
    };
    VideoEditDialogComponent.prototype.close_modal = function () {
        this.router.navigate(['./video-upload']);
    };
    VideoEditDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-edit-dialog',
            template: __webpack_require__(/*! raw-loader!./video-edit-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./video-edit-dialog.component.scss */ "./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_9__["ToasterService"])),
        __metadata("design:paramtypes", [Object, angular2_toaster__WEBPACK_IMPORTED_MODULE_9__["ToasterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _video_upload_video_upload_service__WEBPACK_IMPORTED_MODULE_6__["VideoUploadService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], VideoEditDialogComponent);
    return VideoEditDialogComponent;
}());



/***/ }),

/***/ "./src/app/video-upload/video-upload.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/video-upload/video-upload.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload {\n  text-align: center;\n  color: black;\n  font-weight: bolder;\n}\n\n.main-content {\n  margin-top: 31px;\n  margin: 33px 3%;\n  width: 96%;\n  padding: 30px 15px;\n  height: 69px;\n}\n\n.add_new_video {\n  position: absolute;\n  right: 2%;\n  top: 0%;\n  z-index: 99;\n}\n\nh4 {\n  margin: 10px 2%;\n}\n\n.card.card-stats.ng-star-inserted {\n  margin-left: -33px;\n}\n\n.card-stats .card-header.card-header-icon i {\n  font-size: 60px;\n  line-height: 87px;\n  width: 199px;\n  height: 88px;\n  text-align: center;\n}\n\n.card [class*=card-header-] .card-icon, .card [class*=card-header-] .card-text {\n  border-radius: 0px;\n  background-color: #999999;\n  width: 116%;\n  height: 7.5rem;\n  padding: 20px;\n  margin: 0px -8%;\n  background: lightblue;\n}\n\n.card-stats .card-header.card-header-icon, .card-stats .card-header.card-header-text {\n  text-align: left;\n  height: 211px;\n}\n\n.card .card-category .material-icons {\n  position: absolute;\n  font-size: xx-large;\n  top: 138px;\n  color: black;\n  line-height: 1;\n  margin: 0px 71%;\n}\n\n.Iconbtn {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 22px;\n  width: 24px;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: -1rem;\n}\n\n.mat-dialog-content {\n  max-height: 91vh;\n  width: 700px !important;\n}\n\nbutton.btn.btn-default.bg-Info.pull-right.m-3[_ngcontent-owk-c18] {\n  margin: 3px 11px !important;\n}\n\n.owl-prev,\n.owl-next {\n  position: absolute !important;\n  top: 50% !important;\n  -webkit-transform: translateY(-50%) !important;\n          transform: translateY(-50%) !important;\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.owl-prev {\n  left: -2rem !important;\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.owl-next {\n  right: -2rem !important;\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.owl-theme .owl-nav [class*=owl-] {\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.video_btn {\n  margin: -12px -1% !important;\n}\n\n.title-content {\n  text-align: center;\n  padding: 13.5%;\n}\n\n.middel-line {\n  width: 92.8%;\n  margin: -9px 3.9%;\n  background-color: #1c3d76;\n}\n\n.content-title {\n  width: 100%;\n  font-size: 14px;\n  padding: 0% 2% 0% 2% !important;\n  line-height: 1rem;\n  font-weight: 400;\n  color: #1c3d76;\n  overflow: hidden;\n}\n\n.image_size {\n  width: 100% !important;\n  display: -webkit-box !important;\n  display: flex !important;\n  height: 173px !important;\n  margin: 0px 0px !important;\n}\n\nbody, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\n  line-height: 1rem !important;\n}\n\n.nav-btn {\n  height: 47px !important;\n  position: absolute !important;\n  width: 26px !important;\n  cursor: pointer !important;\n  top: 100px !important;\n}\n\n.prev-slide.slick-disabled,\n.next-slide.slick-disabled {\n  pointer-events: none !important;\n  opacity: 0.2 !important;\n}\n\n.prev-slide:hover {\n  background-position: 0px -53px !important;\n}\n\n.next-slide:hover {\n  background-position: -24px -53px !important;\n}\n\n.imgwdt {\n  width: 100%;\n  margin-top: 0px;\n  margin-bottom: 2%;\n}\n\n.slick-list draggable {\n  float: left !important;\n}\n\n.slick-track {\n  margin-left: 0% !important;\n}\n\n.qqq {\n  font-size: 16px;\n  line-height: 16px;\n  height: 44px;\n  overflow: hidden;\n}\n\n.show {\n  overflow: visible;\n  height: auto;\n}\n\n.slick, .slick-wrapper {\n  width: 100% !important;\n}\n\n.actionbtn {\n  left: 80%;\n  top: 79%;\n  position: absolute;\n}\n\n.social-links p {\n  text-align: center;\n  float: left;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #909090;\n  border-radius: 100%;\n  z-index: 99999;\n  /* margin-right: 7px; */\n}\n\n.cheight {\n  height: 300px;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  position: relative;\n}\n\n@media (min-width: 992px) and (max-width: 1023px) {\n  .imgwdt {\n    height: 200px;\n  }\n\n  .content-title {\n    margin-top: 6%;\n  }\n\n  .actionbtn {\n    left: 64%;\n    top: 72%;\n  }\n}\n\n@media (min-width: 1024px) and (max-width: 1279px) {\n  .imgwdt {\n    margin-top: 0% !important;\n  }\n\n  .content-title {\n    -webkit-margin-top-collapse: separate;\n    width: 111%;\n    margin-left: -6% !important;\n  }\n\n  .cardht {\n    height: 16px !important;\n  }\n\n  .actionbtn {\n    top: 80% !important;\n  }\n\n  .nav-btn .next-slide {\n    left: 95% !important;\n    width: 30px !important;\n  }\n\n  .nav-btn .prev-slide {\n    left: -5% !important;\n    width: 30px !important;\n  }\n}\n\n@media (min-width: 1280px) and (max-width: 1340px) {\n  .imgwdt {\n    margin-top: 0%;\n  }\n\n  .content-title {\n    -webkit-margin-top-collapse: separate;\n    width: 109%;\n    margin-left: -6% !important;\n  }\n\n  .actionbtn {\n    top: 79%;\n  }\n}\n\n@media (min-width: 1441px) and (max-width: 1535px) {\n  .content-title {\n    padding: 1% 2% 6% 0% !important;\n  }\n\n  .actionbtn {\n    left: 82%;\n    top: 79%;\n  }\n\n  .card-size {\n    height: 16px;\n  }\n}\n\n@media (min-width: 1536px) and (max-width: 1679px) {\n  .example-card {\n    height: 230px;\n  }\n\n  .content-title {\n    padding: 1% 2% 6% 2% !important;\n  }\n\n  .actionbtn {\n    top: 78%;\n    left: 82%;\n  }\n\n  .card-size {\n    height: 16px;\n  }\n\n  .cheight {\n    height: 315px !important;\n  }\n}\n\n@media (min-width: 1680px) and (max-width: 1919px) {\n  .actionbtn {\n    top: 79%;\n    left: 82%;\n  }\n\n  .card-size {\n    height: 16px;\n  }\n\n  .video_btn {\n    margin: -12px -9% !important;\n  }\n}\n\n@media (min-width: 1920px) and (max-width: 2559px) {\n  .actionbtn {\n    top: 79%;\n    left: 82%;\n  }\n\n  .card-size {\n    height: 16px;\n  }\n\n  .video_btn {\n    margin: -12px -12% !important;\n  }\n}\n\n@media (min-width: 2560px) and (max-width: 3839px) {\n  .actionbtn {\n    top: 79%;\n    left: 85%;\n  }\n\n  .card-size {\n    height: 16px;\n  }\n\n  .video_btn {\n    margin: -12px -23% !important;\n  }\n}\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /* IE10+ CSS styles go here */\n  .uploaad_btn_widh {\n    width: 130px !important;\n  }\n\n  .slide {\n    padding-left: 12% !important;\n    width: 251px !important;\n  }\n\n  .carouselpadding {\n    padding-left: 0% !important;\n  }\n\n  .threedot {\n    margin-top: 23% !important;\n  }\n}\n\n@media (-ms-high-contrast: none) and (min-width: 992px) and (max-width: 1023px), (-ms-high-contrast: active) and (min-width: 992px) and (max-width: 1023px) {\n  .imgwdt {\n    height: 200px;\n  }\n\n  .content-title {\n    margin-top: 6%;\n  }\n\n  .actionbtn {\n    left: 64%;\n    top: 72%;\n  }\n}\n\n@media (-ms-high-contrast: none) and (min-width: 1024px) and (max-width: 1279px), (-ms-high-contrast: active) and (min-width: 1024px) and (max-width: 1279px) {\n  .imgwdt {\n    margin-top: 0% !important;\n  }\n\n  .content-title {\n    -webkit-margin-top-collapse: separate;\n    width: 111%;\n    margin-left: -6% !important;\n  }\n\n  .cardht {\n    height: 16px !important;\n  }\n\n  .actionbtn {\n    top: 77% !important;\n  }\n\n  .nav-btn .next-slide {\n    left: 95% !important;\n    width: 30px !important;\n  }\n\n  .nav-btn .prev-slide {\n    left: -5% !important;\n    width: 30px !important;\n  }\n}\n\n@media (-ms-high-contrast: none) and (min-width: 1280px) and (max-width: 1340px), (-ms-high-contrast: active) and (min-width: 1280px) and (max-width: 1340px) {\n  .imgwdt {\n    margin-top: 0%;\n  }\n\n  .content-title {\n    -webkit-margin-top-collapse: separate;\n    width: 109%;\n    margin-left: -6% !important;\n  }\n\n  .actionbtn {\n    top: 77%;\n  }\n}\n\n@media (-ms-high-contrast: none) and (min-width: 1441px) and (max-width: 1535px), (-ms-high-contrast: active) and (min-width: 1441px) and (max-width: 1535px) {\n  .content-title {\n    padding: 23% 2% 6% 2% !important;\n  }\n\n  .actionbtn {\n    left: 64%;\n    top: 73%;\n  }\n\n  .card-size {\n    height: 16px;\n  }\n}\n\n@media (-ms-high-contrast: none) and (min-width: 1536px) and (max-width: 1679px), (-ms-high-contrast: active) and (min-width: 1536px) and (max-width: 1679px) {\n  .example-card {\n    height: 246px;\n  }\n\n  .content-title {\n    padding: 1% 2% 6% 2% !important;\n  }\n\n  .actionbtn {\n    top: 80%;\n    left: 82%;\n  }\n\n  .card-size {\n    height: 16px;\n  }\n}\n\n@media (-ms-high-contrast: none) and (min-width: 1680px) and (max-width: 1919px), (-ms-high-contrast: active) and (min-width: 1680px) and (max-width: 1919px) {\n  .actionbtn {\n    top: 79%;\n    left: 84%;\n  }\n\n  .card-size {\n    height: 16px;\n  }\n}\n\n@media (-ms-high-contrast: none) and (min-width: 1920px) and (max-width: 2559px), (-ms-high-contrast: active) and (min-width: 1920px) and (max-width: 2559px) {\n  .actionbtn {\n    top: 78%;\n    left: 87%;\n  }\n\n  .card-size {\n    height: 16px;\n  }\n}\n\n@supports (-ms-ime-align: auto) {\n  .threedot {\n    margin-top: 20% !important;\n  }\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: 25px;\n  padding: 0 0 0 0;\n  left: -2%;\n  top: 32%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tdXBsb2FkL0Q6XFx2aWRlby1zdHJlYW1cXG9ubGluZS12aWRlby1zdHJlYW0tZnJvbnRlbmQvc3JjXFxhcHBcXHZpZGVvLXVwbG9hZFxcdmlkZW8tdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby11cGxvYWQvdmlkZW8tdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1NKOztBRE5BO0VBQ0ksNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNTSjs7QURMQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQ1FKOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQ1FKOztBRExBO0VBQ0ksMkJBQUE7QUNRSjs7QURKQTs7RUFFRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURKQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ09GOztBREpBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDT0Y7O0FESkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDT0o7O0FESkE7RUFDSSw0QkFBQTtBQ09KOztBRExBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDUUo7O0FETEE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNTSjs7QURIQTtFQUNJLHNCQUFBO0VBQ0EsK0JBQUE7RUFBQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUNNSjs7QURKQTtFQUNJLDRCQUFBO0FDT0o7O0FETEE7RUFDSSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDUUo7O0FETEU7O0VBRUUsK0JBQUE7RUFDQSx1QkFBQTtBQ1FKOztBRExFO0VBQ0UseUNBQUE7QUNRSjs7QURMRTtFQUNFLDJDQUFBO0FDUUo7O0FETkU7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDU047O0FETkU7RUFDSSxzQkFBQTtBQ1NOOztBRFBFO0VBQ0ksMEJBQUE7QUNVTjs7QURQRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1VKOztBRFBFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUEU7RUFDRSxzQkFBQTtBQ1VKOztBRFJFO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ1dKOztBRFJHO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDV0o7O0FEVEE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDWUo7O0FETEE7RUFDSTtJQUNJLGFBQUE7RUNRTjs7RURORTtJQUNJLGNBQUE7RUNTTjs7RURQRTtJQUNJLFNBQUE7SUFDQSxRQUFBO0VDVU47QUFDRjs7QUROQTtFQUNJO0lBQ0kseUJBQUE7RUNRTjs7RURORTtJQUNJLHFDQUFBO0lBQ0EsV0FBQTtJQUNBLDJCQUFBO0VDU047O0VEUEU7SUFDSSx1QkFBQTtFQ1VOOztFRFJFO0lBRUksbUJBQUE7RUNVTjs7RURQRTtJQUNJLG9CQUFBO0lBQ0Esc0JBQUE7RUNVTjs7RURSQztJQUNDLG9CQUFBO0lBQ0Esc0JBQUE7RUNXRjtBQUNGOztBRFRBO0VBQ0k7SUFDSSxjQUFBO0VDV047O0VEVEU7SUFDSSxxQ0FBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtFQ1lOOztFRFZFO0lBRUksUUFBQTtFQ1lOO0FBQ0Y7O0FEVEE7RUFDSTtJQUNJLCtCQUFBO0VDV047O0VEVEU7SUFDSSxTQUFBO0lBQ0EsUUFBQTtFQ1lOOztFRFRFO0lBQ0ksWUFBQTtFQ1lOO0FBQ0Y7O0FEVkE7RUFDSTtJQUNJLGFBQUE7RUNZTjs7RURWRTtJQUNJLCtCQUFBO0VDYU47O0VEWEU7SUFDSSxRQUFBO0lBQ0EsU0FBQTtFQ2NOOztFRFhFO0lBQ0ksWUFBQTtFQ2NOOztFRFpFO0lBQ0ksd0JBQUE7RUNlTjtBQUNGOztBRGJBO0VBQ0k7SUFDSSxRQUFBO0lBQ0EsU0FBQTtFQ2VOOztFRFpFO0lBQ0ksWUFBQTtFQ2VOOztFRGJFO0lBQ0ksNEJBQUE7RUNnQk47QUFDRjs7QURkQTtFQUNJO0lBQ0ksUUFBQTtJQUNBLFNBQUE7RUNnQk47O0VEYkU7SUFDSSxZQUFBO0VDZ0JOOztFRGRFO0lBQ0ksNkJBQUE7RUNpQk47QUFDRjs7QURmQTtFQUNJO0lBQ0ksUUFBQTtJQUNBLFNBQUE7RUNpQk47O0VEZEU7SUFDSSxZQUFBO0VDaUJOOztFRGZFO0lBQ0ksNkJBQUE7RUNrQk47QUFDRjs7QURoQkE7RUFDSSw2QkFBQTtFQUNBO0lBQ0UsdUJBQUE7RUNrQko7O0VEYkU7SUFDSSw0QkFBQTtJQUNBLHVCQUFBO0VDZ0JOOztFRGRFO0lBQ0ksMkJBQUE7RUNpQk47O0VEWkk7SUFDRSwwQkFBQTtFQ2VOO0FBQ0Y7O0FEUk07RUFDRTtJQUNJLGFBQUE7RUNVVjs7RURSTTtJQUNJLGNBQUE7RUNXVjs7RURUTTtJQUNJLFNBQUE7SUFDQSxRQUFBO0VDWVY7QUFDRjs7QURSSTtFQUNJO0lBQ0kseUJBQUE7RUNVVjs7RURSTTtJQUNJLHFDQUFBO0lBQ0EsV0FBQTtJQUNBLDJCQUFBO0VDV1Y7O0VEVE07SUFDSSx1QkFBQTtFQ1lWOztFRFZNO0lBRUksbUJBQUE7RUNZVjs7RURUTTtJQUNJLG9CQUFBO0lBQ0Esc0JBQUE7RUNZVjs7RURWSztJQUNDLG9CQUFBO0lBQ0Esc0JBQUE7RUNhTjtBQUNGOztBRFhJO0VBQ0k7SUFDSSxjQUFBO0VDYVY7O0VEWE07SUFDSSxxQ0FBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtFQ2NWOztFRFpNO0lBRUksUUFBQTtFQ2NWO0FBQ0Y7O0FEWEk7RUFDSTtJQUNJLGdDQUFBO0VDYVY7O0VEWE07SUFDSSxTQUFBO0lBQ0EsUUFBQTtFQ2NWOztFRFhNO0lBQ0ksWUFBQTtFQ2NWO0FBQ0Y7O0FEWkk7RUFDSTtJQUNJLGFBQUE7RUNjVjs7RURaTTtJQUNJLCtCQUFBO0VDZVY7O0VEYk07SUFDSSxRQUFBO0lBQ0EsU0FBQTtFQ2dCVjs7RURiTTtJQUNJLFlBQUE7RUNnQlY7QUFDRjs7QURkSTtFQUNJO0lBQ0ksUUFBQTtJQUNBLFNBQUE7RUNnQlY7O0VEYk07SUFDSSxZQUFBO0VDZ0JWO0FBQ0Y7O0FEZEk7RUFDSTtJQUNBLFFBQUE7SUFDQSxTQUFBO0VDZ0JOOztFRGJNO0lBQ0ksWUFBQTtFQ2dCVjtBQUNGOztBRGJJO0VBS0U7SUFDRSwwQkFBQTtFQ1dOO0FBQ0Y7O0FETEE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWR7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjsgXHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDMxcHg7XHJcbiAgICBtYXJnaW46IDMzcHggMyU7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgcGFkZGluZzogMzBweCAxNXB4O1xyXG4gICAgaGVpZ2h0OiA2OXB4O1xyXG59XHJcbi5hZGRfbmV3X3ZpZGVve1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICByaWdodDoyJTtcclxuICAgIHRvcDowJTtcclxuICAgIHotaW5kZXg6OTk7XHJcbn1cclxuaDR7XHJcbiAgICBtYXJnaW46IDEwcHggMiU7XHJcbn1cclxuLmNhcmQuY2FyZC1zdGF0cy5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzNweDtcclxufVxyXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA4N3B4O1xyXG4gICAgd2lkdGg6IDE5OXB4O1xyXG4gICAgaGVpZ2h0OiA4OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYXJkIFtjbGFzcyo9Y2FyZC1oZWFkZXItXSAuY2FyZC1pY29uLCAuY2FyZCBbY2xhc3MqPWNhcmQtaGVhZGVyLV0gLmNhcmQtdGV4dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xyXG4gICAgd2lkdGg6IDExNiU7XHJcbiAgICBoZWlnaHQ6IDcuNXJlbTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDBweCAtOCU7XHJcbiAgICBiYWNrZ3JvdW5kOmxpZ2h0Ymx1ZTsgXHJcbn1cclxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24sIC5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDIxMXB4O1xyXG59XHJcbi5jYXJkIC5jYXJkLWNhdGVnb3J5IC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgdG9wOiAxMzhweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luOiAwcHggNzElO1xyXG59XHJcblxyXG4uSWNvbmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICAvLyBtYXJnaW46IDlweCA2MHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MXZoO1xyXG4gICAgd2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5idXR0b24uYnRuLmJ0bi1kZWZhdWx0LmJnLUluZm8ucHVsbC1yaWdodC5tLTNbX25nY29udGVudC1vd2stYzE4XSB7XHJcbiAgICBtYXJnaW46IDNweCAxMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ub3dsLXByZXYsXHJcbi5vd2wtbmV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzg2ODQ4NCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiA0cHggN3B4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLm93bC1wcmV2IHtcclxuICBsZWZ0OiAtMnJlbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjODY4NDg0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDRweCA3cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ub3dsLW5leHQge1xyXG4gIHJpZ2h0OiAtMnJlbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjODY4NDg0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDRweCA3cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ub3dsLXRoZW1lIC5vd2wtbmF2IFtjbGFzcyo9b3dsLV0ge1xyXG4gICAgY29sb3I6ICM4Njg0ODQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNHB4IDdweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnZpZGVvX2J0biB7XHJcbiAgICBtYXJnaW46IC0xMnB4IC0xJSAhaW1wb3J0YW50O1xyXG59XHJcbi50aXRsZS1jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTMuNSU7XHJcbn1cclxuXHJcbi5taWRkZWwtbGluZXtcclxuICAgIHdpZHRoOiA5Mi44JTtcclxuICAgIG1hcmdpbjogLTlweCAzLjklO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjM2Q3NjtcclxufVxyXG4uY29udGVudC10aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzowJSAyJSAwJSAyJSAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMxYzNkNzY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi8vIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZXtcclxuLy8gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbi8vICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuLy8gfVxyXG4uaW1hZ2Vfc2l6ZSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNzNweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLmgxLCAuaDIsIC5oMywgLmg0e1xyXG4gICAgbGluZS1oZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG4ubmF2LWJ0biB7XHJcbiAgICBoZWlnaHQ6IDQ3cHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDI2cHggIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAgXHJcbiAgLnByZXYtc2xpZGUuc2xpY2stZGlzYWJsZWQsXHJcbiAgLm5leHQtc2xpZGUuc2xpY2stZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAuMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAgICAgXHJcbiAgLnByZXYtc2xpZGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC01M3B4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICBcclxuICAubmV4dC1zbGlkZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjRweCAtNTNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW1nd2R0e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICBcclxuICB9XHJcbiAgLnNsaWNrLWxpc3QgZHJhZ2dhYmxle1xyXG4gICAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2xpY2stdHJhY2t7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnFxcSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5zaG93IHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnNsaWNrLCAuc2xpY2std3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYWN0aW9uYnRuIHtcclxuICAgIGxlZnQ6IDgwJTtcclxuICAgIHRvcDogNzklO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gei1pbmRleDo5OTk5O1xyXG4gICB9XHJcbiAgIC5zb2NpYWwtbGlua3MgcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTA5MDkwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHotaW5kZXg6OTk5OTk7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDdweDsgKi9cclxuICAgfSAgIFxyXG4uY2hlaWdodHtcclxuICAgIGhlaWdodDozMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4vLyAgIC5zbGljay1pbml0aWFsaXplZCAuc2xpY2stc2xpZGV7XHJcbi8vICAgICB3aWR0aDogMjU2cHggIWltcG9ydGFudDtcclxuLy8gICB9XHJcblxyXG4vLyAgIC0tLS0tLS0tLS0tLS0tLS0tLS1tZWRpYSBxdWVyeSBmb3IgZGlmZmVyZW50IHJldm9sdXRpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAgIC5pbWd3ZHR7XHJcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uYnRue1xyXG4gICAgICAgIGxlZnQ6IDY0JTtcclxuICAgICAgICB0b3A6IDcyJTsgIFxyXG4gICAgICAgIC8vIHotaW5kZXg6OTk5OTtcclxuICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTI3OXB4KSB7XHJcbiAgICAuaW1nd2R0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC10aXRsZXtcclxuICAgICAgICAtd2Via2l0LW1hcmdpbi10b3AtY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMTElO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNiUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jYXJkaHR7XHJcbiAgICAgICAgaGVpZ2h0OjE2cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hY3Rpb25idG57XHJcbiAgICAgICAgLy8gbGVmdDogODAlO1xyXG4gICAgICAgIHRvcDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gei1pbmRleDo5OTk5O1xyXG4gICAgfVxyXG4gICAgLm5hdi1idG4gLm5leHQtc2xpZGUge1xyXG4gICAgICAgIGxlZnQ6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgIC5uYXYtYnRuIC5wcmV2LXNsaWRle1xyXG4gICAgbGVmdDogLTUlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6MTM0MHB4KSB7XHJcbiAgICAuaW1nd2R0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtdGl0bGV7XHJcbiAgICAgICAgLXdlYmtpdC1tYXJnaW4tdG9wLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICB3aWR0aDogMTA5JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uYnRue1xyXG4gICAgICAgIC8vIGxlZnQ6IDUxJTtcclxuICAgICAgICB0b3A6IDc5JTsgIFxyXG4gICAgICAgIC8vIHotaW5kZXg6OTk5OTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MXB4KSBhbmQgKG1heC13aWR0aDogMTUzNXB4KXtcclxuICAgIC5jb250ZW50LXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmc6IDElIDIlIDYlIDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uYnRue1xyXG4gICAgICAgIGxlZnQ6IDgyJTtcclxuICAgICAgICB0b3A6IDc5JTsgXHJcbiAgICAgICAgLy8gei1pbmRleDo5OTk5O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtc2l6ZXtcclxuICAgICAgICBoZWlnaHQ6MTZweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSBhbmQgKG1heC13aWR0aDogMTY3OXB4KXtcclxuICAgIC5leGFtcGxlLWNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OjIzMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZzogMSUgMiUgNiUgMiUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hY3Rpb25idG57XHJcbiAgICAgICAgdG9wOiA3OCU7XHJcbiAgICAgICAgbGVmdDogODIlOyBcclxuICAgICAgICAvLyB6LWluZGV4Ojk5OTk7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmNhcmQtc2l6ZXtcclxuICAgICAgICBoZWlnaHQ6MTZweDtcclxuICAgIH1cclxuICAgIC5jaGVpZ2h0e1xyXG4gICAgICAgIGhlaWdodDozMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpe1xyXG4gICAgLmFjdGlvbmJ0bntcclxuICAgICAgICB0b3A6IDc5JTtcclxuICAgICAgICBsZWZ0OiA4MiU7ICAgICAgXHJcbiAgICAgICAgLy8gei1pbmRleDo5OTk5O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtc2l6ZXtcclxuICAgICAgICBoZWlnaHQ6MTZweDtcclxuICAgIH1cclxuICAgIC52aWRlb19idG57XHJcbiAgICAgICAgbWFyZ2luOiAtMTJweCAtOSUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogMjU1OXB4KXtcclxuICAgIC5hY3Rpb25idG57XHJcbiAgICAgICAgdG9wOiA3OSU7XHJcbiAgICAgICAgbGVmdDogODIlOyAgXHJcbiAgICAgICAgLy8gei1pbmRleDo5OTk5O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtc2l6ZXtcclxuICAgICAgICBoZWlnaHQ6MTZweDtcclxuICAgIH1cclxuICAgIC52aWRlb19idG57XHJcbiAgICAgICAgbWFyZ2luOiAtMTJweCAtMTIlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDI1NjBweCkgYW5kIChtYXgtd2lkdGg6IDM4MzlweCl7XHJcbiAgICAuYWN0aW9uYnRue1xyXG4gICAgICAgIHRvcDogNzklO1xyXG4gICAgICAgIGxlZnQ6IDg1JTsgIFxyXG4gICAgICAgIC8vIHotaW5kZXg6OTk5OTtcclxuICAgIH1cclxuICAgIC5jYXJkLXNpemV7XHJcbiAgICAgICAgaGVpZ2h0OjE2cHg7XHJcbiAgICB9XHJcbiAgICAudmlkZW9fYnRue1xyXG4gICAgICAgIG1hcmdpbjogLTEycHggLTIzJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XHJcbiAgICAvKiBJRTEwKyBDU1Mgc3R5bGVzIGdvIGhlcmUgKi9cclxuICAgIC51cGxvYWFkX2J0bl93aWRoe1xyXG4gICAgICB3aWR0aDoxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLy8gLmV4YW1wbGUtY2FyZHtcclxuICAgIC8vICAgICBwYWRkaW5nOjEwJSAhaW1wb3J0YW50O1xyXG4gICAgLy8gfVxyXG4gICAgLnNsaWRle1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTIlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6MjUxcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbHBhZGRpbmd7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLy8gLmNvbnRlbnR7XHJcbiAgICAvLyAgICAgcGFkZGluZzoxOSUgMiUgNiUgMiUgIWltcG9ydGFudDtcclxuICAgIC8vICAgfVxyXG4gICAgICAudGhyZWVkb3R7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjMlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIC8vICAgLmltYWdlX3dpZHRoe1xyXG4gICAgLy8gICAgIHBhZGRpbmc6IDglIDAlIDAlIDAlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgLmNhcmRlcntcclxuICAgIC8vICAgICAgIG1hcmdpbi10b3A6IDElICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAgICAgICAuaW1nd2R0e1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50LXRpdGxle1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbmJ0bntcclxuICAgICAgICAgICAgbGVmdDogNjQlO1xyXG4gICAgICAgICAgICB0b3A6IDcyJTsgIFxyXG4gICAgICAgICAgICAvLyB6LWluZGV4Ojk5OTk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDoxMjc5cHgpIHtcclxuICAgICAgICAuaW1nd2R0e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudC10aXRsZXtcclxuICAgICAgICAgICAgLXdlYmtpdC1tYXJnaW4tdG9wLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDExMSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNiUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRodHtcclxuICAgICAgICAgICAgaGVpZ2h0OjE2cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbmJ0bntcclxuICAgICAgICAgICAgLy8gbGVmdDogODAlO1xyXG4gICAgICAgICAgICB0b3A6IDc3JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvLyB6LWluZGV4Ojk5OTk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtYnRuIC5uZXh0LXNsaWRlIHtcclxuICAgICAgICAgICAgbGVmdDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLm5hdi1idG4gLnByZXYtc2xpZGV7XHJcbiAgICAgICAgbGVmdDogLTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOjEzNDBweCkge1xyXG4gICAgICAgIC5pbWd3ZHR7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudC10aXRsZXtcclxuICAgICAgICAgICAgLXdlYmtpdC1tYXJnaW4tdG9wLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwOSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNiUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbmJ0bntcclxuICAgICAgICAgICAgLy8gbGVmdDogNTElO1xyXG4gICAgICAgICAgICB0b3A6IDc3JTsgIFxyXG4gICAgICAgICAgICAvLyB6LWluZGV4Ojk5OTk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0NDFweCkgYW5kIChtYXgtd2lkdGg6IDE1MzVweCl7XHJcbiAgICAgICAgLmNvbnRlbnQtdGl0bGV7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIzJSAyJSA2JSAyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aW9uYnRue1xyXG4gICAgICAgICAgICBsZWZ0OiA2NCU7XHJcbiAgICAgICAgICAgIHRvcDogNzMlOyAgXHJcbiAgICAgICAgICAgIC8vIHotaW5kZXg6OTk5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtc2l6ZXtcclxuICAgICAgICAgICAgaGVpZ2h0OjE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkgYW5kIChtYXgtd2lkdGg6IDE2NzlweCl7XHJcbiAgICAgICAgLmV4YW1wbGUtY2FyZHtcclxuICAgICAgICAgICAgaGVpZ2h0OjI0NnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudC10aXRsZXtcclxuICAgICAgICAgICAgcGFkZGluZzogMSUgMiUgNiUgMiUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbmJ0bntcclxuICAgICAgICAgICAgdG9wOiA4MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDgyJTsgICAgIFxyXG4gICAgICAgICAgICAvLyB6LWluZGV4Ojk5OTk7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLXNpemV7XHJcbiAgICAgICAgICAgIGhlaWdodDoxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpe1xyXG4gICAgICAgIC5hY3Rpb25idG57XHJcbiAgICAgICAgICAgIHRvcDogNzklO1xyXG4gICAgICAgICAgICBsZWZ0OiA4NCU7ICAgICAgXHJcbiAgICAgICAgICAgIC8vIHotaW5kZXg6OTk5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtc2l6ZXtcclxuICAgICAgICAgICAgaGVpZ2h0OjE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDI1NTlweCl7XHJcbiAgICAgICAgLmFjdGlvbmJ0bntcclxuICAgICAgICB0b3A6IDc4JTtcclxuICAgICAgICBsZWZ0OiA4NyU7ICAgXHJcbiAgICAgICAgLy8gei1pbmRleDo5OTk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1zaXple1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcclxuICAgICAgICBcclxuICAgIC8vIC5jb250ZW50e1xyXG4gICAgLy8gICAgIHBhZGRpbmc6MCUgMiUgNiUgMiUgIWltcG9ydGFudDtcclxuICAgIC8vICAgfVxyXG4gICAgICAudGhyZWVkb3R7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIC8vICAgLmltYWdlX3dpZHRoe1xyXG4gICAgLy8gICAgIHBhZGRpbmc6IDglIDAlIDAlIDAlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgIH1cclxuICAgIH1cclxuICAgIFxyXG4uYXN0ZXJpc2tfaW5wdXQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgKlwiO1xyXG4gICAgY29sb3I6ICNlMzI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgICBsZWZ0OiAtMiU7XHJcbiAgICB0b3A6MzIlO1xyXG4gICAgfVxyXG4iLCIudXBsb2FkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAzMXB4O1xuICBtYXJnaW46IDMzcHggMyU7XG4gIHdpZHRoOiA5NiU7XG4gIHBhZGRpbmc6IDMwcHggMTVweDtcbiAgaGVpZ2h0OiA2OXB4O1xufVxuXG4uYWRkX25ld192aWRlbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xuICB0b3A6IDAlO1xuICB6LWluZGV4OiA5OTtcbn1cblxuaDQge1xuICBtYXJnaW46IDEwcHggMiU7XG59XG5cbi5jYXJkLmNhcmQtc3RhdHMubmctc3Rhci1pbnNlcnRlZCB7XG4gIG1hcmdpbi1sZWZ0OiAtMzNweDtcbn1cblxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDg3cHg7XG4gIHdpZHRoOiAxOTlweDtcbiAgaGVpZ2h0OiA4OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIFtjbGFzcyo9Y2FyZC1oZWFkZXItXSAuY2FyZC1pY29uLCAuY2FyZCBbY2xhc3MqPWNhcmQtaGVhZGVyLV0gLmNhcmQtdGV4dCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcbiAgd2lkdGg6IDExNiU7XG4gIGhlaWdodDogNy41cmVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDBweCAtOCU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn1cblxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24sIC5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgaGVpZ2h0OiAyMTFweDtcbn1cblxuLmNhcmQgLmNhcmQtY2F0ZWdvcnkgLm1hdGVyaWFsLWljb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB0b3A6IDEzOHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDBweCA3MSU7XG59XG5cbi5JY29uYnRuIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDI0cHg7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDkxdmg7XG4gIHdpZHRoOiA3MDBweCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24uYnRuLmJ0bi1kZWZhdWx0LmJnLUluZm8ucHVsbC1yaWdodC5tLTNbX25nY29udGVudC1vd2stYzE4XSB7XG4gIG1hcmdpbjogM3B4IDExcHggIWltcG9ydGFudDtcbn1cblxuLm93bC1wcmV2LFxuLm93bC1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzg2ODQ4NCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA0cHggN3B4O1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5vd2wtcHJldiB7XG4gIGxlZnQ6IC0ycmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODY4NDg0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDRweCA3cHg7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm93bC1uZXh0IHtcbiAgcmlnaHQ6IC0ycmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODY4NDg0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDRweCA3cHg7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm93bC10aGVtZSAub3dsLW5hdiBbY2xhc3MqPW93bC1dIHtcbiAgY29sb3I6ICM4Njg0ODQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNHB4IDdweDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4udmlkZW9fYnRuIHtcbiAgbWFyZ2luOiAtMTJweCAtMSUgIWltcG9ydGFudDtcbn1cblxuLnRpdGxlLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEzLjUlO1xufVxuXG4ubWlkZGVsLWxpbmUge1xuICB3aWR0aDogOTIuOCU7XG4gIG1hcmdpbjogLTlweCAzLjklO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMzZDc2O1xufVxuXG4uY29udGVudC10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAlIDIlIDAlIDIlICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzFjM2Q3NjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltYWdlX3NpemUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTczcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC5oMSwgLmgyLCAuaDMsIC5oNCB7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtYnRuIHtcbiAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjZweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgdG9wOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4ucHJldi1zbGlkZS5zbGljay1kaXNhYmxlZCxcbi5uZXh0LXNsaWRlLnNsaWNrLWRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC4yICFpbXBvcnRhbnQ7XG59XG5cbi5wcmV2LXNsaWRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC01M3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5uZXh0LXNsaWRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0cHggLTUzcHggIWltcG9ydGFudDtcbn1cblxuLmltZ3dkdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuXG4uc2xpY2stbGlzdCBkcmFnZ2FibGUge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uc2xpY2stdHJhY2sge1xuICBtYXJnaW4tbGVmdDogMCUgIWltcG9ydGFudDtcbn1cblxuLnFxcSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGhlaWdodDogNDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNob3cge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc2xpY2ssIC5zbGljay13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmFjdGlvbmJ0biB7XG4gIGxlZnQ6IDgwJTtcbiAgdG9wOiA3OSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnNvY2lhbC1saW5rcyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkwOTA5MDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgei1pbmRleDogOTk5OTk7XG4gIC8qIG1hcmdpbi1yaWdodDogN3B4OyAqL1xufVxuXG4uY2hlaWdodCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuaW1nd2R0IHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLmNvbnRlbnQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDYlO1xuICB9XG5cbiAgLmFjdGlvbmJ0biB7XG4gICAgbGVmdDogNjQlO1xuICAgIHRvcDogNzIlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gIC5pbWd3ZHQge1xuICAgIG1hcmdpbi10b3A6IDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGVudC10aXRsZSB7XG4gICAgLXdlYmtpdC1tYXJnaW4tdG9wLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICB3aWR0aDogMTExJTtcbiAgICBtYXJnaW4tbGVmdDogLTYlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2FyZGh0IHtcbiAgICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hY3Rpb25idG4ge1xuICAgIHRvcDogODAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmF2LWJ0biAubmV4dC1zbGlkZSB7XG4gICAgbGVmdDogOTUlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXYtYnRuIC5wcmV2LXNsaWRlIHtcbiAgICBsZWZ0OiAtNSUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTM0MHB4KSB7XG4gIC5pbWd3ZHQge1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICB9XG5cbiAgLmNvbnRlbnQtdGl0bGUge1xuICAgIC13ZWJraXQtbWFyZ2luLXRvcC1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgd2lkdGg6IDEwOSU7XG4gICAgbWFyZ2luLWxlZnQ6IC02JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFjdGlvbmJ0biB7XG4gICAgdG9wOiA3OSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTM1cHgpIHtcbiAgLmNvbnRlbnQtdGl0bGUge1xuICAgIHBhZGRpbmc6IDElIDIlIDYlIDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWN0aW9uYnRuIHtcbiAgICBsZWZ0OiA4MiU7XG4gICAgdG9wOiA3OSU7XG4gIH1cblxuICAuY2FyZC1zaXplIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIGFuZCAobWF4LXdpZHRoOiAxNjc5cHgpIHtcbiAgLmV4YW1wbGUtY2FyZCB7XG4gICAgaGVpZ2h0OiAyMzBweDtcbiAgfVxuXG4gIC5jb250ZW50LXRpdGxlIHtcbiAgICBwYWRkaW5nOiAxJSAyJSA2JSAyJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFjdGlvbmJ0biB7XG4gICAgdG9wOiA3OCU7XG4gICAgbGVmdDogODIlO1xuICB9XG5cbiAgLmNhcmQtc2l6ZSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG5cbiAgLmNoZWlnaHQge1xuICAgIGhlaWdodDogMzE1cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2ODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAuYWN0aW9uYnRuIHtcbiAgICB0b3A6IDc5JTtcbiAgICBsZWZ0OiA4MiU7XG4gIH1cblxuICAuY2FyZC1zaXplIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cblxuICAudmlkZW9fYnRuIHtcbiAgICBtYXJnaW46IC0xMnB4IC05JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogMjU1OXB4KSB7XG4gIC5hY3Rpb25idG4ge1xuICAgIHRvcDogNzklO1xuICAgIGxlZnQ6IDgyJTtcbiAgfVxuXG4gIC5jYXJkLXNpemUge1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuXG4gIC52aWRlb19idG4ge1xuICAgIG1hcmdpbjogLTEycHggLTEyJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjU2MHB4KSBhbmQgKG1heC13aWR0aDogMzgzOXB4KSB7XG4gIC5hY3Rpb25idG4ge1xuICAgIHRvcDogNzklO1xuICAgIGxlZnQ6IDg1JTtcbiAgfVxuXG4gIC5jYXJkLXNpemUge1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuXG4gIC52aWRlb19idG4ge1xuICAgIG1hcmdpbjogLTEycHggLTIzJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAvKiBJRTEwKyBDU1Mgc3R5bGVzIGdvIGhlcmUgKi9cbiAgLnVwbG9hYWRfYnRuX3dpZGgge1xuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNsaWRlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEyJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAyNTFweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNhcm91c2VscGFkZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRocmVlZG90IHtcbiAgICBtYXJnaW4tdG9wOiAyMyUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkgYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuaW1nd2R0IHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLmNvbnRlbnQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDYlO1xuICB9XG5cbiAgLmFjdGlvbmJ0biB7XG4gICAgbGVmdDogNjQlO1xuICAgIHRvcDogNzIlO1xuICB9XG59XG5AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgLmltZ3dkdCB7XG4gICAgbWFyZ2luLXRvcDogMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250ZW50LXRpdGxlIHtcbiAgICAtd2Via2l0LW1hcmdpbi10b3AtY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIHdpZHRoOiAxMTElO1xuICAgIG1hcmdpbi1sZWZ0OiAtNiUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jYXJkaHQge1xuICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFjdGlvbmJ0biB7XG4gICAgdG9wOiA3NyUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXYtYnRuIC5uZXh0LXNsaWRlIHtcbiAgICBsZWZ0OiA5NSUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdi1idG4gLnByZXYtc2xpZGUge1xuICAgIGxlZnQ6IC01JSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzQwcHgpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkgYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDEzNDBweCkge1xuICAuaW1nd2R0IHtcbiAgICBtYXJnaW4tdG9wOiAwJTtcbiAgfVxuXG4gIC5jb250ZW50LXRpdGxlIHtcbiAgICAtd2Via2l0LW1hcmdpbi10b3AtY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIHdpZHRoOiAxMDklO1xuICAgIG1hcmdpbi1sZWZ0OiAtNiUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hY3Rpb25idG4ge1xuICAgIHRvcDogNzclO1xuICB9XG59XG5AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSBhbmQgKG1pbi13aWR0aDogMTQ0MXB4KSBhbmQgKG1heC13aWR0aDogMTUzNXB4KSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTM1cHgpIHtcbiAgLmNvbnRlbnQtdGl0bGUge1xuICAgIHBhZGRpbmc6IDIzJSAyJSA2JSAyJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFjdGlvbmJ0biB7XG4gICAgbGVmdDogNjQlO1xuICAgIHRvcDogNzMlO1xuICB9XG5cbiAgLmNhcmQtc2l6ZSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSBhbmQgKG1pbi13aWR0aDogMTUzNnB4KSBhbmQgKG1heC13aWR0aDogMTY3OXB4KSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIGFuZCAobWluLXdpZHRoOiAxNTM2cHgpIGFuZCAobWF4LXdpZHRoOiAxNjc5cHgpIHtcbiAgLmV4YW1wbGUtY2FyZCB7XG4gICAgaGVpZ2h0OiAyNDZweDtcbiAgfVxuXG4gIC5jb250ZW50LXRpdGxlIHtcbiAgICBwYWRkaW5nOiAxJSAyJSA2JSAyJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFjdGlvbmJ0biB7XG4gICAgdG9wOiA4MCU7XG4gICAgbGVmdDogODIlO1xuICB9XG5cbiAgLmNhcmQtc2l6ZSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSBhbmQgKG1pbi13aWR0aDogMTY4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcbiAgLmFjdGlvbmJ0biB7XG4gICAgdG9wOiA3OSU7XG4gICAgbGVmdDogODQlO1xuICB9XG5cbiAgLmNhcmQtc2l6ZSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogMjU1OXB4KSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiAyNTU5cHgpIHtcbiAgLmFjdGlvbmJ0biB7XG4gICAgdG9wOiA3OCU7XG4gICAgbGVmdDogODclO1xuICB9XG5cbiAgLmNhcmQtc2l6ZSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG59XG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgLnRocmVlZG90IHtcbiAgICBtYXJnaW4tdG9wOiAyMCUgIWltcG9ydGFudDtcbiAgfVxufVxuLmFzdGVyaXNrX2lucHV0OmFmdGVyIHtcbiAgY29udGVudDogXCIgKlwiO1xuICBjb2xvcjogI2UzMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBsZWZ0OiAtMiU7XG4gIHRvcDogMzIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/video-upload/video-upload.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-upload/video-upload.component.ts ***!
  \********************************************************/
/*! exports provided: VideoUploadComponent, VideoUploadDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadComponent", function() { return VideoUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadDialog", function() { return VideoUploadDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _video_upload_video_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../video-upload/video-upload.service */ "./src/app/video-upload/video-upload.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_city_city_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/city/city.service */ "./src/app/city/city.service.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/urlconstant */ "./src/app/helpers/urlconstant.ts");
/* harmony import */ var _video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./video-dialog/video-dialog.component */ "./src/app/video-upload/video-dialog/video-dialog.component.ts");
/* harmony import */ var _video_edit_dialog_video_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./video-edit-dialog/video-edit-dialog.component */ "./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var VideoUploadComponent = /** @class */ (function () {
    function VideoUploadComponent(dialog, Service, service, SpinnerService) {
        this.dialog = dialog;
        this.Service = Service;
        this.service = service;
        this.SpinnerService = SpinnerService;
        this.tabs = [];
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0);
        this.sub_namesReference = [];
        this.sub_category = false;
        this.videos = "";
        this.title = "";
        this.showsubcategory = false;
        this.shownovideo = true;
        this.global_url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_7__["UrlConstants"].MAINURL;
        this.showMore = false;
        this.showLess = false;
        this.user_role = localStorage.getItem('role');
        this.show_uploader = true;
        // openDetails() {
        //   // console.log(, "row_datarow_data")
        //   let dialogRef: MatDialogRef<any> = this.dialog.open(VideoDetailsDialog, {
        //   });
        //   dialogRef.afterClosed()
        //     .subscribe(res => {
        //     });
        // }
        // customOptions: OwlOptions = {
        //   loop: false,
        //   mouseDrag: false,
        //   touchDrag: false,
        //   pullDrag: false,
        //   dots: true,
        //   navSpeed: 700,
        //   // navText: ['prev', 'next'],
        //   navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        //   // navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        //   responsive: {
        //     0: {
        //       items: 1
        //     },
        //     400: {
        //       items: 2
        //     },
        //     740: {
        //       items: 3
        //     },
        //     940: {
        //       items: 3
        //     }
        //   },
        //   nav: true
        // }
        this.slides = [];
        this.slideConfig = {
            slidesToShow: 7,
            centerMode: false,
            slidesToScroll: 4,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000,
            speed: 3000,
            // accessibility: false,
            infinite: true,
            // changeDir: true,
            nextArrow: "<div class='nav-btn  next-slide' style='cursor:pointer;position: absolute;top: 100px !important; height: 48px;background: url(../../assets/img/75.png) no-repeat scroll 0 0;left: -3%; width:64px;'></div>",
            prevArrow: "<div class='nav-btn prev-slide ' style='cursor:pointer;position: absolute;top: 100px !important; height: 48px;background: url(../../assets/img/76.png) no-repeat scroll 0 0;left: 96%; width:64px;'></div>",
            dots: true,
            // rtl:true,
            // asNavFor: '.slider-nav',
            responsive: [
                {
                    breakpoint: 2560,
                    settings: {
                        centerMode: false,
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 1920,
                    settings: {
                        centerMode: false,
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1680,
                    settings: {
                        centerMode: false,
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1440,
                    settings: {
                        centerMode: false,
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        centerMode: false,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        centerMode: false,
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerMode: false,
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                    }
                }
            ]
        };
    }
    VideoUploadComponent.prototype.slickInit = function ($event) {
    };
    VideoUploadComponent.prototype.breakpoint = function ($event) {
    };
    VideoUploadComponent.prototype.beforeChange = function ($event) {
    };
    VideoUploadComponent.prototype.afterChange = function ($event) {
    };
    VideoUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.user_role == 4) {
            this.show_uploader = false;
        }
        else {
            this.show_uploader = true;
        }
        this.SpinnerService.show();
        setTimeout(function () {
            _this.SpinnerService.hide();
        }, 5000);
        // console.log(this.global_url,"dsdfsd")
        // this.isReadMore(this.videos)
        var payload = {};
        this.Service.getcat_name(payload).
            subscribe(function (response) {
            _this.tabs = (response);
        });
    };
    //   openPopUp(data: any = {}, isNew?) {
    //     let title = isNew ? 'Preview Video' : 'Update Herd';
    //     let dialogRef: MatDialogRef<any> = this.dialog.open(VideoDetailsDialog, {
    //         width: '1024px',
    //         height:'500px',
    //         disableClose: true,
    //         data: {title: title, payload: 'this.videos'}
    //     });
    //     dialogRef.afterClosed()
    //         .subscribe(res => {
    //         });
    // }
    VideoUploadComponent.prototype.open_video_dialog = function (videos, isNew) {
        var title = isNew ? 'Preview Video' : 'Update Video';
        var dialogRef = this.dialog.open(_video_dialog_video_dialog_component__WEBPACK_IMPORTED_MODULE_8__["VideoDialogComponent"], {
            disableClose: true,
            data: { title: title, payload: videos },
        });
        dialogRef.afterClosed()
            .subscribe(function (res) {
        });
    };
    VideoUploadComponent.prototype.open_edit_dialog = function (videos, isNew) {
        if (this.user_role != 4) {
            var title = isNew ? 'Edit Video Details' : 'Update Video';
            var dialogRef = this.dialog.open(_video_edit_dialog_video_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["VideoEditDialogComponent"], {
                width: '1024px',
                disableClose: true,
                data: { title: title, payload: videos },
            });
            dialogRef.afterClosed()
                .subscribe(function (res) {
            });
        }
    };
    VideoUploadComponent.prototype.cat_nametypeChanged = function (cat_id) {
        var _this = this;
        this.SpinnerService.show();
        this.sub_category = true;
        this.selectedcat_nametype = this.tabs[cat_id.index].cat_id;
        var payload = {
            cat_id: this.selectedcat_nametype
        };
        this.service.getvideos(payload).
            subscribe(function (response) {
            if (response.length != 0) {
                _this.showsubcategory = true;
                _this.sub_namesReference = (response);
                _this.sub_namesReference.forEach(function (data, index) {
                    if (data.video.length != 0) {
                        _this.shownovideo = false;
                    }
                    else {
                        _this.shownovideo = true;
                    }
                });
            }
            else {
                _this.showsubcategory = false;
                _this.shownovideo = false;
            }
            _this.SpinnerService.hide();
        });
    };
    VideoUploadComponent.prototype.thumLoaded = function (video) {
        video['thumbLoaded'] = true;
    };
    VideoUploadComponent.prototype.addUser = function () {
        var dialogRef = this.dialog.open(VideoUploadDialog, {
            data: {
                urldata: this.global_url
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                var payload = {};
            }
        });
    };
    VideoUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-upload',
            template: __webpack_require__(/*! raw-loader!./video-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-upload.component.html"),
            styles: [__webpack_require__(/*! ./video-upload.component.scss */ "./src/app/video-upload/video-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            app_city_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"],
            _video_upload_video_upload_service__WEBPACK_IMPORTED_MODULE_3__["VideoUploadService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]])
    ], VideoUploadComponent);
    return VideoUploadComponent;
}());

var VideoUploadDialog = /** @class */ (function () {
    function VideoUploadDialog(formBuilder, service, Service, data, toasterService, SpinnerService, http) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.Service = Service;
        this.data = data;
        this.toasterService = toasterService;
        this.SpinnerService = SpinnerService;
        this.http = http;
        this.cat_name = "";
        this.cat_id = "";
        this.sub_name = "";
        this.cat_namesReference = [];
        this.sub_namesReference = [];
        this.cat_nameLabel = "cat_names";
        this.sub_nameLabel = 'sub_names';
        this.progress = 0;
        this.show = false;
        this.btn_disabled = true;
        this.validate_subcategory = false;
        this.show_img_format = false;
        this.show_video_format = false;
        this.form = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            subcat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            video: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    VideoUploadDialog.prototype.ngOnInit = function () {
        var _this = this;
        var payload = {};
        this.Service.getcat_name(payload).
            subscribe(function (response) {
            _this.cat_namesReference = response;
        });
    };
    VideoUploadDialog.prototype.cat_nametypeChanged = function (cat_id) {
        var _this = this;
        this.selectedcat_nametype = cat_id.value;
        var payload = {
            cat_id: this.selectedcat_nametype
        };
        this.service.getsub_name(payload).
            subscribe(function (response) {
            var subName = response.filter(function (sub) { return sub.cat_id === cat_id.value; });
            _this.sub_namesReference = subName;
            // console.log(this.sub_namesReference,"this.sub_namesReference")
            if (_this.sub_namesReference.length == 0) {
                _this.btn_disabled = true;
                _this.validate_subcategory = true;
            }
            else {
                _this.btn_disabled = false;
                _this.validate_subcategory = false;
            }
            // if(this.global_flag!="1"){
            //   this.btn_disabled=false;
            // }else{
            //   this.btn_disabled=true;
            // }
        });
    };
    VideoUploadDialog.prototype.sub_nametypeChanged = function (sub_id) {
        this.selectedsub_nametype = sub_id.value;
    };
    VideoUploadDialog.prototype.onFileChange = function (event) {
        this.uploadedvideoFiles = event.target.files;
        console.log(event.target.files, "event.target.files video");
        // console.log(event.target.files,"video typee");
        if (event.target.files[0].type != "video/mp4" && event.target.files[0].type != "video/mpeg4" && event.target.files[0].type != "video/avi" && event.target.files[0].type != "video/wmv") {
            this.show_video_format = true;
            this.btn_disabled = true;
            this.video_flag = "0";
        }
        else {
            this.show_video_format = false;
            this.btn_disabled = false;
            this.video_flag = "1";
        }
    };
    VideoUploadDialog.prototype.onImageChange = function (event) {
        this.uploadedImageFiles = event.target.files;
        // console.log(event.target.files[0].type,"image typee");
        // console.log(event.target.files, "event.target.files image");
        if (event.target.files[0].type != "image/png" && event.target.files[0].type != "image/jpg" && event.target.files[0].type != "image/jpeg" && event.target.files[0].type != "image/ttf") {
            this.show_img_format = true;
            this.btn_disabled = true;
            this.global_flag = "0";
        }
        else {
            this.show_img_format = false;
            this.btn_disabled = false;
            this.global_flag = "1";
        }
    };
    VideoUploadDialog.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.selectedsub_nametype,"this.selectedsub_nametype");
        if (this.selectedsub_nametype === undefined) {
            this.validate_subcategory = true;
        }
        // console.log(this.uploadedImageFiles, "image length");
        // console.log(this.uploadedvideoFiles,"video file image")
        // console.log(this.selectedcat_nametype,"cat");
        // console.log(this.selectedsub_nametype,"sub cat");
        console.log(this.global_flag, "global flag");
        // return true;
        if (this.global_flag == 0 || this.video_flag == 0) {
            this.toasterService.pop("error", "Warning", "Please select correct Video and Image format");
        }
        else {
            if (this.uploadedImageFiles === undefined || this.uploadedvideoFiles === undefined) {
                this.toasterService.pop("error", "Warning", "Please select Video and Image");
            }
            else {
                if (this.form.get('title').value != "" && this.form.get('description').value != "" && this.form.get('author').value != "" && this.selectedcat_nametype !== undefined && this.selectedsub_nametype !== undefined) {
                    this.btn_disabled = false;
                    var formData = new FormData();
                    formData.append("uploads", this.uploadedvideoFiles[0], this.uploadedvideoFiles[0].name);
                    formData.append("images", this.uploadedImageFiles[0], this.uploadedImageFiles[0].name);
                    formData.append("title", this.form.get('title').value);
                    formData.append("description", this.form.get('description').value);
                    formData.append("author", this.form.get('author').value);
                    formData.append("cat_id", this.selectedcat_nametype);
                    formData.append("sub_id", this.selectedsub_nametype);
                    formData.append("user_id", localStorage.getItem('userID'));
                    this.http.post('https://beta.vicflix.com/upload', formData, {
                        reportProgress: true,
                        observe: 'events',
                    })
                        .subscribe(function (events) {
                        console.log(events, "events response");
                        if (events.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                            _this.progress = Math.round(events.loaded / events.total * 100);
                            if (_this.progress == 100) {
                                _this.SpinnerService.show();
                            }
                            var payload = {};
                            _this.Service.getcat_name(payload);
                        }
                        else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response) {
                            window.location = events.body.url;
                        }
                    });
                }
                else {
                    this.toasterService.pop("error", "Warning", "Please select mandatory fields");
                }
            }
        }
    };
    VideoUploadDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-dialog',
            template: __webpack_require__(/*! raw-loader!./video-upload-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-upload-dialog.html"),
            styles: [__webpack_require__(/*! ./video-upload.component.scss */ "./src/app/video-upload/video-upload.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"])),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _video_upload_video_upload_service__WEBPACK_IMPORTED_MODULE_3__["VideoUploadService"],
            app_city_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"], Object, angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], VideoUploadDialog);
    return VideoUploadDialog;
}());



/***/ }),

/***/ "./src/app/video-upload/video-upload.service.ts":
/*!******************************************************!*\
  !*** ./src/app/video-upload/video-upload.service.ts ***!
  \******************************************************/
/*! exports provided: VideoUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadService", function() { return VideoUploadService; });
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



var VideoUploadService = /** @class */ (function () {
    function VideoUploadService(httpClient) {
        this.httpClient = httpClient;
    }
    VideoUploadService.prototype.getsub_name = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].getsub;
        // console.log(url,"outgoing url");
        return this.httpClient.post(url, payload);
    };
    VideoUploadService.prototype.getvideos = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].getvideos;
        // console.log(url,"incoming data")
        return this.httpClient.post(url, payload);
    };
    VideoUploadService.prototype.delete_video = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].deletevideo;
        return this.httpClient.post(url, payload);
    };
    VideoUploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VideoUploadService);
    return VideoUploadService;
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
var environment = {
    production: false,
    // backendUrl: "/",
    backendUrl: "http://192.168.1.8:3000/",
    apiBase: '/assets/data/',
    playStoreUrl: '',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\video-stream\online-video-stream-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map