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

module.exports = "<h1 mat-dialog-title>{{dialogTitle}}</h1>\r\n<div mat-dialog-content>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <mat-form-field>\r\n                <mat-label>Select Main Category</mat-label>\r\n                <mat-select [(value)]=\"selectedroletype\" (selectionChange)=\"roletypeChanged($event)\">\r\n                    <mat-option *ngFor=\"let role of rolesReference\" [value]=\"role.cat_id\">\r\n                        {{role.cat_name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Add SubCategory name\" [(ngModel)]=\"sub_name\" type=\"text\">\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"save_city_btn\"\r\n                (click)=\"saveCity()\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"update_city_btn\"\r\n                (click)=\"updateCity()\">Update</button>\r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/city/city.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/city/city.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-10\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-primary\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-md-6 \">\r\n                                <button type=\"button\" class=\"btn btn-default bg-info pull-right m-3\"\r\n                                    (click)=\"adduser()\">Add\r\n                                    Sub Category</button>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <h5 class=\"card-title \">Category Level-2</h5>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"sub_id\">\r\n                            <th mat-header-cell *matHeaderCellDef> Id </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.sub_id}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"sub_name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Sub Categories Name</th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.sub_name}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Role Column -->\r\n                        <ng-container matColumnDef=\"cat_name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Main Category Name</th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.cat_name}} </td>\r\n                        </ng-container>\r\n\r\n\r\n                        <ng-container matColumnDef=\"action\">\r\n                            <th mat-header-cell *matHeaderCellDef>Actions </th>\r\n                            <td mat-cell *matCellDef=\"let row\">\r\n                                <!-- <button mat-raised-button color=\"primary\" (click)=\"edit_low(row)\"> -->\r\n                                <a (click)=\"edit_low(row) \" style=\"color:blue; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n                                </a>\r\n                                <!-- <a href=\"\" (click)=\"edit_low(row)\"> <mat-icon aria-label=\"Edit\">edit</mat-icon></a> -->\r\n                                <!-- <mat-icon>edit</mat-icon>\r\n                                </button> -->\r\n                                <!-- <button mat-raised-button class=\"iconbutton\" (click)=\"delete_low(row)\" color=\"warn\"> -->\r\n                                <a (click)=\"delete_low(row)\" style=\"color:red; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n                                </a>\r\n                                <!-- <mat-icon>delete</mat-icon>\r\n                                </button> -->\r\n                                <!-- </td> -->\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/city/delete-city-dialog.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/city/delete-city-dialog.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete Sub Category</h1>\r\n<div mat-dialog-content>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n           <p>Are you sure you want to Delete ? </p>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" [disabled]=\"delete_btn\" (click)=\"deletecity()\">Confirm</button>       \r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \r\n        </div>\r\n    </div>\r\n</div>"

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

module.exports = "<h1 mat-dialog-title>{{header}}</h1>\r\n<div mat-dialog-content>\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<p>Are you sure you want to Logout ? </p>\r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\"(click)=\"dashboard()\">Confirm</button>\r\n<button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>\r\n</div>\r\n</div>\r\n</div>\r\n"

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

module.exports = "<div class=\"logo\">\r\n    <a href=\"/#/dashboard\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"/assets/img/VICFLEXLogo.png\" />\r\n        </div>\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <div *ngIf=\"isMobileMenu()\">\r\n        <form class=\"navbar-form\">\r\n            <span class=\"bmd-form-group\">\r\n            </span>\r\n        </form>\r\n    </div>\r\n    <mat-sidenav #sidenav class=\"example-sidenav\" mode=\"side\" opened=\"true\" (mouseenter)=\"mouseenter()\"\r\n        (mouseleave)=\"mouseleave()\">\r\n        <!---------------------------- super-admin-list --------------------------------->\r\n        <mat-nav-list *ngIf=\"super_admin_list\">\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">dashboard</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/dashboard']\" mat-list-item>Analytics</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">cloud_upload</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/video-upload']\" mat-list-item>Videos</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">person</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/portal-users']\" mat-list-item>Portal-Users</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">portrait</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/mobile-users']\" mat-list-item>Mobile-Users</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n            <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n            <mat-icon mat-list-icon class=\"font-c\">settings</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/default-settings']\" mat-list-item>Default-Settings</a>\r\n            </mat-list-item>\r\n            <mat-list-item (click)=\"showSubmenu = !showSubmenu\" class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <span class=\"full-width font-c\" style=\"padding-left:6%\" *ngIf=\"isExpanded || isShowing\">Manage\r\n                    Categories</span>\r\n                <mat-icon mat-list-icon class=\"font-c\">list</mat-icon>\r\n                <mat-icon class=\"menu-button font-c\" [ngClass]=\"{'rotated' : showSubmenu}\"\r\n                    *ngIf=\"isExpanded || isShowing\">\r\n                    expand_more</mat-icon>\r\n            </mat-list-item>\r\n            <div class=\"submenu\" [ngClass]=\"{'expanded' : showSubmenu}\" *ngIf=\"isShowing || isExpanded\">\r\n                <a mat-list-item class=\"font-c p-right parent\" style=\"padding: 0% 0% 0% 19%;\"\r\n                    [routerLink]=\"['/category']\">Category</a>\r\n                <a mat-list-item class=\"font-c p-right parent\" style=\" padding: 0% 0% 0% 19%;\"\r\n                    [routerLink]=\"['/subcategory']\">Sub Category</a>\r\n            </div>\r\n        </mat-nav-list>\r\n        <!---------------------------- admin-list --------------------------------->\r\n        <mat-nav-list *ngIf=\"admin_list\">\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">dashboard</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/dashboard']\" mat-list-item>Analytics</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">cloud_upload</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/video-upload']\" mat-list-item>Videos</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">person</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/portal-users']\" mat-list-item>Portal-Users</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n                <mat-icon mat-list-icon class=\"font-c\">portrait</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/mobile-users']\" mat-list-item>Mobile-Users</a>\r\n            </mat-list-item>\r\n            <!-- <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\"> -->\r\n            <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\r\n            <!-- <mat-icon mat-list-icon class=\"font-c\">settings</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/default-settings']\" mat-list-item>Default-Settings</a>\r\n            </mat-list-item> -->\r\n            <mat-list-item (click)=\"showSubmenu = !showSubmenu\" class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <span class=\"full-width font-c\" style=\"padding-left:6%\" *ngIf=\"isExpanded || isShowing\">Manage\r\n                    Categories</span>\r\n                <mat-icon mat-list-icon class=\"font-c\">list</mat-icon>\r\n                <mat-icon class=\"menu-button font-c\" [ngClass]=\"{'rotated' : showSubmenu}\"\r\n                    *ngIf=\"isExpanded || isShowing\">\r\n                    expand_more</mat-icon>\r\n            </mat-list-item>\r\n            <div class=\"submenu\" [ngClass]=\"{'expanded' : showSubmenu}\" *ngIf=\"isShowing || isExpanded\">\r\n                <a mat-list-item class=\"font-c p-right parent\" style=\"padding: 0% 0% 0% 19%;\"\r\n                    [routerLink]=\"['/category']\">Category</a>\r\n                <a mat-list-item class=\"font-c p-right parent\" style=\" padding: 0% 0% 0% 19%;\"\r\n                    [routerLink]=\"['/subcategory']\">Sub Category</a>\r\n            </div>\r\n        </mat-nav-list>\r\n        \r\n        <!---------------------------- uploader-list --------------------------------->\r\n        <mat-nav-list *ngIf=\"uploader\">\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <mat-icon mat-list-icon class=\"font-c\">dashboard</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/dashboard']\" mat-list-item>Dashboard</a>\r\n            </mat-list-item>\r\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\r\n                <mat-icon mat-list-icon class=\"font-c\">cloud_upload</mat-icon>\r\n                <a class=\"full-width font-c\" [routerLink]=\"['/video-upload']\" mat-list-item>Video Upload</a>\r\n            </mat-list-item>\r\n        </mat-nav-list>\r\n        <mat-nav-list>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\" style=\"margin: -62px;\">\r\n    <div class=\"col-md-4 offset-md-4\">\r\n      <div class=\"logo\">\r\n        <img src=\"/assets/img/VICFLEXLogo.png\" style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\"/>\r\n        <div class=\"vl\">\r\n        </div>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video Streaming</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal Management</h6>\r\n      </div>\r\n            <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%; height:300px\">\r\n              <mat-card-content>\r\n                <div class=\"text-center pb-1\">\r\n                  <h5 class=\"text-dark1\">Please check your e-mail\r\n                  </h5>\r\n                  <h5 class=\"text-dark2\">and click on the link to\r\n                  </h5>\r\n                  <h5 class=\"text-dark3\">reset the password.\r\n                  </h5>\r\n                </div>\r\n                <div class=\"text-center pb-1\">\r\n                  <button mat-raised-button class=\"mat-primary full-width mb-1 \" style=\"width: 40%;border-radius: 0px;margin-top: 12%; background: #1f467f;color: #dae8f7;\">\r\n                    <a href=\"https://beta.vicflix.com/dashboard\" style=\"color: #dae8f7;\">Sign in</a>\r\n                  </button>\r\n                </div>\r\n              </mat-card-content>\r\n            </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"footer\" style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\r\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\r\n    <nav>\r\n        <ul>\r\n            <li>\r\n                <a href=\"https://beta.vicflix.com\">\r\n                  @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/helpers/token-expired-dialog.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/helpers/token-expired-dialog.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n                <h4> &nbsp; &nbsp; &nbsp; Your session has expired <br>\r\n                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;please login again</h4>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\" style=\"justify-content: center;\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success\" mat-dialog-close >ok</button>\r\n    </div>\r\n</div>"

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

module.exports = "<h1 mat-dialog-title>Enter your email</h1>\r\n<div mat-dialog-content>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Enter your email\" [(ngModel)]=\"email\" type=\"email\">\r\n            </mat-form-field>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" (click)=\"check_email()\">Confirm</button> \r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button> \r\n        </div>\r\n    </div>\r\n</div>"

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

module.exports = "<div class=\"col-lg-12\">\r\n<h1 mat-dialog-title>{{dialogTitle}}</h1>\r\n<div mat-dialog-content>\r\n            <div class=\"row\">\r\n               <div class=\"col-md-12\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Name\" [(ngModel)]=\"name\" type=\"text\">\r\n                        <!-- <mat-error>This field is mandatory.</mat-error> -->\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Email\" [disabled]=\"editmode\" (focusout)=\"focusOutemail()\" [(ngModel)]=\"email\" type=\"email\" >\r\n                        <!-- <mat-error>This field is mandatory.</mat-error> -->\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                     <mat-form-field>\r\n                         <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"mobile\" type=\"number\" >\r\n                         <!-- <mat-error>This field is mandatory.</mat-error> -->\r\n                     </mat-form-field>\r\n                 </div>\r\n             </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <mat-form-field>\r\n                        <mat-label>Role Type</mat-label>\r\n                        <mat-select [(value)]=\"selectedroletype\" (selectionChange)=\"roletypeChanged($event)\">\r\n                          <mat-option *ngFor=\"let role of rolesReference\" [value]=\"role.id\" >\r\n                            {{role.role}}\r\n                          </mat-option>\r\n                          <!-- <mat-error>This field is mandatory.</mat-error>  -->\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n            </div>\r\n        </div>\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-md-12 asterisk_input\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Mobile\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"mobile\" type=\"text\" maxlength=\"12\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-md-12 asterisk_input\">\r\n                  \r\n                </div>  <app-reference-data-selector  [placeholder]=\"roleLabel\" [default-value]=\"selectedrole\" [options]=\"rolesReference\" (chosen-value)=\"roleChanged($event)\"></app-reference-data-selector>\r\n            </div> -->\r\n          \r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"save_user_btn\" (click)=\"saveUser()\">Save</button>\r\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"update_user_btn\" (click)=\"updateUser()\">Update</button>        \r\n                    <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \r\n                </div>\r\n            </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portal-users/delete-user-dialog.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portal-users/delete-user-dialog.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete User</h1>\r\n<div mat-dialog-content>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n           <p>Are you sure you want to Delete ? </p>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" [disabled]=\"delete_btn\" (click)=\"delete()\">Confirm</button>       \r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portal-users/portal-users.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portal-users/portal-users.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-primary\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-md-6 \">\r\n                                <button type=\"button\" class=\"btn btn-default bg-info pull-right m-3\"\r\n                                    (click)=\"addUser()\">Add New\r\n                                    User</button>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <h4 class=\"card-title \">Portal Users</h4>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"id\">\r\n                            <th mat-header-cell *matHeaderCellDef> Id </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Email Column -->\r\n                        <ng-container matColumnDef=\"email\">\r\n                            <th mat-header-cell *matHeaderCellDef> Email </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Mobile number Column -->\r\n                        <ng-container matColumnDef=\"mobile\">\r\n                            <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.mobile}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Role Column -->\r\n                        <ng-container matColumnDef=\"role\">\r\n                            <th mat-header-cell *matHeaderCellDef> Permission </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.role}} </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Action Column -->\r\n                        <ng-container matColumnDef=\"action\">\r\n                            <th mat-header-cell *matHeaderCellDef>Actions </th>\r\n                            <td mat-cell *matCellDef=\"let row\">{{row.action}}\r\n                                <!-- <button mat-raised-button color=\"primary\" (click)=\"edit_low(row)\"> -->\r\n                                <a (click)=\"edit_low(row) \" style=\"color:blue; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n                                </a>\r\n                                <!-- <mat-icon>edit</mat-icon>\r\n                                </button> -->\r\n                                <!-- <button mat-raised-button class=\"iconbutton\" (click)=\"delete_low(row)\" color=\"warn\"> -->\r\n                                <a (click)=\"delete_low(row)\" style=\"color:red; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n                                </a>\r\n                                <!-- <mat-icon>delete</mat-icon>\r\n                                </button> -->\r\n\r\n                                <!-- Default disabled -->\r\n                                <mat-slide-toggle [checked]=\"row.status\"  [color]=\"color\" (change)=\"toggle(row,$event)\"></mat-slide-toggle>\r\n                                </td>\r\n                        </ng-container>\r\n\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reset-password/reset-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\" style=\"margin: -62px;\">\r\n    <div class=\"col-md-4 offset-md-4\">\r\n      <div class=\"logo\">\r\n        <img src=\"/assets/img/VICFLEXLogo.png\"\r\n          style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\" />\r\n        <div class=\"vl\">\r\n        </div>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video\r\n          Streaming</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal\r\n          Management</h6>\r\n      </div>\r\n      <!-- <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\r\n        <div class=\"page-wrap height-100 mat-bg-primary\">\r\n          <div class=\"session-form-hold\"> -->\r\n      <!-- <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar> -->\r\n      <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%; height:300px\">\r\n        <mat-card-content>\r\n          <div class=\"text-center pb-1\">\r\n            <h5 class=\"text-dark\">Reset Password Here</h5>\r\n          </div>\r\n          <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n            <p>Email: {{email}}</p>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"New password\" formControlName=\"password\" required type=\"password\">\r\n              <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\r\n                Please enter Password\r\n              </mat-error>\r\n              <mat-error *ngIf=\"password.hasError('required')\">\r\n                Password is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\r\n                [errorStateMatcher]=\"matcher\" type=\"password\">\r\n              <mat-error *ngIf=\"myForm.hasError('notSame')\">\r\n                Passwords do not match\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <div class=\"text-center pb-1\">\r\n              <button class=\"btn btn-info pull-right\" type=\"submit\">Reset</button>\r\n              <a routerLink=\"/\">\r\n                <button mat-button class=\"btn pull-right\" mat-dialog-close>Cancel</button>\r\n              </a>\r\n            </div>\r\n          </form>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"footer\"\r\n  style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\r\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\r\n    <nav>\r\n      <ul>\r\n        <li>\r\n          <a href=\"https://beta.vicflix.com\">\r\n            @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</footer>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"container\">\r\n  <div class=\"row\" style=\"margin: -62px;\">\r\n    <div class=\"col-md-4 offset-md-4\">\r\n      <div class=\"logo\">\r\n        <img src=\"/assets/img/VICFLEXLogo.png\" style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\"/>\r\n        <div class=\"vl\">\r\n        </div>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video Streaming</h6>\r\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal Management</h6>\r\n      </div> -->\r\n<!-- <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\r\n        <div class=\"page-wrap height-100 mat-bg-primary\">\r\n          <div class=\"session-form-hold\"> -->\r\n<!-- <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar> -->\r\n<!-- <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%; height:85%\">\r\n  <mat-card-content>\r\n    <div class=\"text-center pb-1\"> -->\r\n      <!-- <img src=\"assets/images/herdman_logo.png\" alt=\"\" class=\"mb-05\"> -->\r\n      <!-- <h4 class=\"text-dark\">Reset Password Here</h4>\r\n                </div>\r\n                <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n                  <p>Email: {{email}}</p>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"New password\" formControlName=\"password\" required type=\"password\">\r\n                    <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\r\n                      Please enter Password\r\n                    </mat-error> -->\r\n      <!-- <mat-error *ngIf=\"password.hasError('required')\">\r\n                      Password is <strong>required</strong>\r\n                    </mat-error> -->\r\n      <!-- </mat-form-field>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\r\n                      [errorStateMatcher]=\"matcher\" type=\"password\">\r\n                    <mat-error *ngIf=\"myForm.hasError('notSame')\">\r\n                      Passwords do not match\r\n                    </mat-error>\r\n                  </mat-form-field> -->\r\n      <!-- <div class=\"\">\r\n                    <input matInput placeholder=\"New password\" formControlName=\"password\" required type=\"password\">\r\n                    <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\r\n                      Please enter Password\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"password.hasError('required')\">\r\n                      Password is <strong>required</strong>\r\n                    </mat-error>\r\n                  </div>\r\n\r\n                  <div class=\"\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\r\n                        [errorStateMatcher]=\"matcher\" type=\"password\">\r\n                      <mat-error *ngIf=\"myForm.hasError('notSame')\">\r\n                        Passwords do not match\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div> -->\r\n      <!-- \r\n                  <button class=\"btn btn-info pull-right\" type=\"submit\">Reset</button>\r\n                    <a routerLink=\"/\">\r\n                      <button mat-button class=\"btn pull-right\" mat-dialog-close>Cancel</button>\r\n                    </a>\r\n                </form>\r\n              </mat-card-content>\r\n            </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer class=\"footer\" style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\r\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\r\n    <nav>\r\n        <ul>\r\n            <li>\r\n                <a href=\"https://beta.vicflix.com\">\r\n                  @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n  </div>\r\n</footer> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <!-- <div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card card-chart col-md-4\" style=\"margin-left: auto; margin-right:auto\">\r\n          <div class=\"card-header\">\r\n            <div class=\"ct-chart\" id=\"dailySalesChart\">\r\n              <h3 class=\"card-title\">Reset Password</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-9\">\r\n                <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n                  <p>Email: {{email}}</p>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"New password\" formControlName=\"password\" required type=\"password\">\r\n                    <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\r\n                      Please enter Password\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"password.hasError('required')\">\r\n                      Password is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\r\n                      [errorStateMatcher]=\"matcher\" type=\"password\">\r\n                    <mat-error *ngIf=\"myForm.hasError('notSame')\">\r\n                      Passwords do not match\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                  <div class=\"col-md-12\">\r\n\r\n                    <button class=\"btn btn-info pull-right\" type=\"submit\">Reset</button>\r\n                    <a routerLink=\"/\">\r\n                      <button mat-button class=\"btn pull-right\" mat-dialog-close>Cancel</button>\r\n                    </a>\r\n                  </div>\r\n                </form>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div> -->\r\n      <!-- <div class=\"card-footer\">\r\n          <div class=\"stats\">\r\n              <i class=\"material-icons\">contact_support</i> Forgot password\r\n          </div>\r\n      </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/state/add-state-dialog.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/state/add-state-dialog.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{dialogTitle}}</h1>\r\n<div mat-dialog-content>\r\n\r\n\r\n            <div class=\"row\">\r\n               <div class=\"col-md-12\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Category Name\" [(ngModel)]=\"cat_name\" type=\"text\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n            \r\n          \r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"save_state_btn\" (click)=\"saveState()\">Save</button>\r\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"update_state_btn\" (click)=\"updateState()\">Update</button>        \r\n                    <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \r\n                </div>\r\n            </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/state/delete-state-dialog.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/state/delete-state-dialog.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete Category</h1>\r\n<div mat-dialog-content>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n           <p>Are you sure you want to Delete ? </p>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" [disabled]=\"delete_btn\" (click)=\"deletestate()\">Confirm</button>       \r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/state/state.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/state/state.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-primary\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-md-6 \">\r\n                                <button type=\"button\" class=\"btn btn-default bg-info pull-right m-3\"\r\n                                    (click)=\"adduser()\">Add\r\n                                    Category</button>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <h5 class=\"card-title\">Category Level-1</h5>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"cat_id\">\r\n                            <th mat-header-cell *matHeaderCellDef> Id </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.cat_id}} </td>\r\n                        </ng-container>\r\n                        <!-- Name Column -->\r\n                        <ng-container matColumnDef=\"cat_name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                            <td mat-cell *matCellDef=\"let row\"> {{row.cat_name}} </td>\r\n                        </ng-container>\r\n                        <!-- Action Column -->\r\n                        <ng-container matColumnDef=\"action\">\r\n                            <th mat-header-cell *matHeaderCellDef>Actions </th>\r\n                            <td mat-cell *matCellDef=\"let row\">\r\n                                <a (click)=\"edit_low(row) \" style=\"color:blue; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n                                </a>\r\n                                <a (click)=\"delete_low(row)\" style=\"color:red; cursor:pointer;\">\r\n                                    <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n                                </a>\r\n                        </ng-container>\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/delete-dialog/delete-dialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/delete-dialog/delete-dialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete Video</h1>\r\n<div mat-dialog-content>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n           <p>Are you sure you want to Delete ? </p>\r\n       </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" (click)=\"delete()\">Confirm</button>       \r\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \r\n        </div>\r\n    </div>\r\n</div>"

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

module.exports = "<div style=\"position:relative;\">\r\n  <button mat-button class=\"close-icon\" [mat-dialog-close]=\"true\">\r\n    <mat-icon>close</mat-icon>\r\n  </button>\r\n</div>\r\n\r\n\r\n<form action=\"api/upload\" method=\"post\" enctype=\"multipart/form-data\" [formGroup]=\"form\">\r\n  <div class=\"row\" style=\"margin-top:4%;\">\r\n    <div class=\"col-md-5\" style=\"padding: left 3%;\">\r\n      <div clss=\"row\">\r\n        <img style=\"width: 100%;\" [src]=\"thumbnail_src\">\r\n        <!-- <label class=\"custom-file-upload\" *ngIf=\"canEditCode\" >\r\n          Upload Thumbnail Here\r\n          <th><input type=\"file\" name=\"image\" fileread=\"image\" accept=\".jpg,.png\" (change)=\"onImageChange($event)\">\r\n          </th>\r\n        </label> -->\r\n      </div>\r\n      <div class=\"row\" style=\"justify-content: center;\">\r\n        <div class=\"fileUpload btn btn-default bg-success pull-right m-3\" style=\"border-radius: 2.5rem;padding: 15px 50px; background: #1f467f !important;\"  *ngIf=\"canEditCode\">\r\n          <span>Browse</span>\r\n          <input type=\"file\" class=\"upload\" fileread=\"image\" accept=\".jpg,.png\" (change)=\"onImageChange($event)\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\" style=\"padding-left: 3%; padding-bottom: 1%;\">\r\n          <h6 *ngIf=\"!canEditCode\" style=\"float: left; margin-bottom: 0px;\"> {{video_title}}</h6>\r\n          <mat-form-field class=\"example-full-width\" *ngIf=\"canEditCode\">\r\n            <mat-label>Title</mat-label>\r\n            <input matInput formControlName=\"Title\"  placeholder=\"Title\" >\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\" align=\"center\" style=\"position:absolute;right:4%;\">\r\n          <a (click)=\"edit_low() \" style=\"color:blue; cursor:pointer;\">\r\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n          </a>\r\n          \r\n          <a (click)=\"delete_low()\" style=\"color:red; cursor:pointer;\">\r\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <hr  class=\"middleline\" *ngIf=\"nohrline\">\r\n      <div class=\"row\">\r\n        <p *ngIf=\"!canEditCode\" style=\"padding-left: 3%; font-size:15px\">{{video_description}}</p>\r\n        <mat-form-field class=\"example-full-width\" style=\"padding-left: 3%;\" *ngIf=\"canEditCode\">\r\n          <mat-label>Description</mat-label>\r\n          <textarea matInput rows=\"4\" formControlName=\"Description\" cols=\"70\"  placeholder=\"Description\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- <div class=\"row\">\r\n        <div class=\"col-md-3\" style=\"padding-left:0px !important;\">\r\n          <h5 style=\"float: left;\">Tag :</h5>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <h5 style=\"float:right;\">Launguage :</h5>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"!canEditCode\">\r\n    <div class=\"col-md-5\">\r\n\r\n    </div>\r\n    <div class=\"col-md-7\" style=\"padding-left:0px !important;\">\r\n      <h6>{{video_title}} Video Statistics</h6>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-md-4\">\r\n          <p class=\"font_p\">Total Views: </p>\r\n        </div> -->\r\n        <div class=\"col-md-4\">\r\n          <p class=\"font_p\">Total Likes : {{likes}} </p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <p class=\"font_p\">Total Dislikes : {{dislikes}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-md-4\"></div> -->\r\n        <div class=\"col-md-4\">\r\n          <p class=\"font_p\">Total Shares : {{shares_video}}</p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <p class=\"font_p\">Total Views : {{views}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"canEditCode\" style=\"justify-content: flex-end;\">\r\n    <button type=\"button\" style=\"float:right;\" class=\"btn btn-default bg-danger pull-right m-3\"\r\n      (click)=\"cancel()\">Cancel\r\n      </button>\r\n    <button type=\"button\" style=\"float:right;\" class=\"btn btn-default bg-success pull-right m-3\"\r\n    (click)=\"update()\">Update</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-upload-dialog.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/video-upload-dialog.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n<div class=\"col-md-12\">\r\n<!-- <h1 mat-dialog-title>{{dialogTitle}}</h1> -->\r\n<div mat-dialog-content>\r\n  <h4 class=\"upload\">Upload your Video!</h4>\r\n  <div class=\"progress form-group\" *ngIf=\"progress > 0\">\r\n    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width.%]=\"progress\">\r\n    </div>\r\n  </div>\r\n  <form action=\"api/upload\" method=\"post\" enctype=\"multipart/form-data\" [formGroup]=\"form\">\r\n    <div class=\"file-field md-form\">\r\n      <label class=\"custom-file-upload\">\r\n        Upload Video Here\r\n        <td><input type=\"file\" name=\"video\" fileread=\"video\" accept=\".mp4\" (change)=\"onFileChange($event)\">\r\n        </td>\r\n      </label>\r\n    </div>\r\n    <div class=\"file-field md-form\">\r\n      <label class=\"custom-file-upload\">\r\n        Upload Thumbnail Here\r\n        <th><input type=\"file\" name=\"image\" fileread=\"image\" accept=\".jpg,.png\" (change)=\"onImageChange($event)\">\r\n        </th>\r\n      </label>\r\n    </div>\r\n    <mat-form-field>\r\n      <input formControlName=\"title\" name=\"title\" matInput placeholder=\"Title\" required>\r\n      <mat-error>This field is mandatory.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <textarea formControlName=\"description\" name=\"description\" matInput placeholder=\"Description\" required></textarea>\r\n      <mat-error>This field is mandatory.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input formControlName=\"author\" name=\"author\" matInput placeholder=\"Author\" required>\r\n      <mat-error>This field is mandatory.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Select Category</mat-label>\r\n      <mat-select (selectionChange)=\"cat_nametypeChanged($event)\" required>\r\n        <mat-option *ngFor=\"let cat_name of cat_namesReference\" [value]=\"cat_name.cat_id\">\r\n          {{cat_name.cat_name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Select Category</mat-label>\r\n      <mat-select (selectionChange)=\"sub_nametypeChanged($event)\" required>\r\n        <mat-option *ngFor=\"let sub_name of sub_namesReference\" [value]=\"sub_name.sub_id\">\r\n          {{sub_name.sub_name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <button type=\"submit\" class=\"btn btn-default bg-success  pull-right m-3\" (click)=\"onSubmit() \" color=\"warn\">\r\n      Upload\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>\r\n  </form>\r\n</div>\r\n</div>\r\n  <!--  </div> <input type=\"file\" name=\"video\" (change)=\"onFileChange($event)\" /> \r\n              <button type=\"submit\">Upload</button>       -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-upload.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/video-upload.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div style=\"position:relative;\">\r\n        <div class=\"row add_new_video\"  *ngIf=\"show_uploader\">\r\n            <div class=\"col-lg-12 col-md-6 video_btn\">\r\n                <button type=\"button\" class=\"btn btn-default bg-Info  pull-right m-3\"\r\n                    style=\"background-color: #1f467f; border-radius: 2.5rem;\" (click)=\"addUser()\">Add New +\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <mat-tab-group (selectedTabChange)=\"cat_nametypeChanged($event)\">\r\n            <mat-tab style=\"font-weight: 500; font-size: 18px;\" *ngFor=\"let tab of tabs ; let index = index \"\r\n                [label]=\"tab.cat_name\">\r\n                <div class=\"col-12\" *ngFor=\"let sub_name of sub_namesReference\"\r\n                    style=\"height: 337px;overflow-y: hidden;overflow-x: hidden;position: relative;\">\r\n                    <h4 style=\"font-size: 16px; font-weight: 400; margin-left: 3.8%;\" *ngIf=\"showsubcategory\">\r\n                        {{sub_name.sub_name}}</h4>\r\n                    <hr class=\"middel-line\">\r\n                    <p *ngIf=\"sub_name.video.length == 0 && showsubcategory\" class=\"title-content\">Videos Not Available\r\n                    </p>\r\n                    <ngx-slick-carousel *ngIf=\"showsubcategory\" style=\"padding: 2% 3% 0% 3%; width: 100%;\" class=\"carousel\"\r\n                        #slickModal=\"slick-carousel\" [config]=\"slideConfig\" (init)=\"slickInit($event)\"\r\n                        (breakpoint)=\"breakpoint($event)\" (afterChange)=\"afterChange($event)\"\r\n                        (beforeChange)=\"beforeChange($event)\">\r\n                        <div ngxSlickItem *ngFor=\"let videos of sub_name.video\" class=\"slide\">\r\n                            <mat-card class=\"example-card\" style=\"padding: 0% 0% 0% 0%; margin:0px 8px;\">\r\n                                <div class=\"image_size\" (click)=\"open_video_dialog(videos,true)\"\r\n                                    style=\"padding: 0% 0% 0% 0%; margin:0px 0px; cursor: pointer; height: 258px;background: white;\">\r\n                                    <!-- <img class=\"imgwdt\" src=\"../../assets/img/Defaultthumbnail.jpg\"\r\n                                    s hidden=\"{{videos.thumbLoaded}}\"> -->\r\n                                    <img class=\"imgwdt\" src=\"{{global_url+videos.thumbnail}}\"\r\n                                        style=\" width: 100%;margin: auto;display:{{videos.thumbLoaded?block:none}}\"\r\n                                        (load)=\"this.thumLoaded(videos)\">\r\n                                    <!-- {{videos.action}} -->\r\n                                </div>\r\n                                <mat-card-content>\r\n                                    <div class=\"col-md-10\">\r\n                                        <p class=\"content-title\">\r\n                                            <!-- {{videos.title}} -->\r\n                                            <crystal-text-show-less [maxLength]=\"30\" [data]=\"videos.title\"\r\n                                                [showTail]=\"true\"> </crystal-text-show-less>\r\n                                    </div>\r\n                                </mat-card-content>\r\n                                <mat-card-actions>\r\n                                    <div class=\"actionbtn\">\r\n                                        <p class=\"Iconbtn\" (click)=\"open_edit_dialog(videos,true)\">\r\n                                            <mat-icon class=\"icon\" style=\"color:#1c3d76; cursor: pointer;\">\r\n                                                more_vert\r\n                                            </mat-icon>\r\n                                            {{videos.action}}\r\n                                        </p>\r\n                                    </div>\r\n                                </mat-card-actions>\r\n                            </mat-card>\r\n\r\n                        </div>\r\n                    </ngx-slick-carousel>\r\n                    <ngx-spinner bdOpacity=0.5 bdColor=\"#1c3d76\" size=\"medium\" color=\"#fff\"\r\n                        type=\"ball-clip-rotate\" [fullScreen]=\"false\">\r\n                        <p style=\"color: white\"> Loading... </p>\r\n                    </ngx-spinner>\r\n                </div>\r\n            </mat-tab>\r\n        </mat-tab-group>"

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
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");





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
        path: 'forgotpassword',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
        pathMatch: 'full',
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
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

module.exports = ".card {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5) !important;\n  padding-bottom: 10px !important;\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: xx-large;\n  padding: 0 0 0 0;\n  left: 0%;\n  top: 32%;\n}\n\n.data-table {\n  width: 80%;\n  margin: 20px auto;\n}\n\n.iconbutton {\n  margin: 10px 10px;\n}\n\nbutton.btn.btn-default.bg-info.pull-right.m-3 {\n  margin: -6px 0px !important;\n  background: #1f467f !important;\n  border-radius: 2.45rem !important;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n  padding-left: 86px;\n  width: 35%;\n}\n\na {\n  margin: 0px 4px;\n}\n\n.card-title {\n  margin: 5px 50px !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0eS9DOlxcVXNlcnNcXHdhc2VlbVxcRGVza3RvcFxcYmV0YXZpY2ZsaXhcXG9ubGluZS12aWRlby1zdHJlYW0tZnJvbnRlbmQvc3JjXFxhcHBcXGNpdHlcXGNpdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NpdHkvY2l0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURHQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQ0FBOztBREVBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQ0E7O0FEQ0E7RUFDQSxpQkFBQTtBQ0VBOztBREFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FDR0E7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURBQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvY2l0eS9jaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmFzdGVyaXNrX2lucHV0OmFmdGVyIHtcclxuY29udGVudDogXCIgKlwiO1xyXG5jb2xvcjogI2UzMjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5tYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuZm9udC1zaXplOiB4eC1sYXJnZTtcclxucGFkZGluZzogMCAwIDAgMDtcclxubGVmdDogMCU7XHJcbnRvcDozMiU7XHJcbn1cclxuLmRhdGEtdGFibGV7XHJcbndpZHRoOiA4MCU7XHJcbm1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcbi5pY29uYnV0dG9ue1xyXG5tYXJnaW46MTBweCAxMHB4O1xyXG59XHJcbmJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuYmctaW5mby5wdWxsLXJpZ2h0Lm0tMyB7XHJcbm1hcmdpbjogLTZweCAwcHggIWltcG9ydGFudDtcclxuYmFja2dyb3VuZDogIzFmNDY3ZiAhaW1wb3J0YW50O1xyXG5ib3JkZXItcmFkaXVzOiAyLjQ1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gbWF0LWljb24ubWF0LWljb24ubm90cmFuc2xhdGUubWF0ZXJpYWwtaWNvbnMubWF0LWljb24tbm8tY29sb3Ige1xyXG4vLyBwYWRkaW5nOiAwcHggMjVweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4NnB4O1xyXG4gIHdpZHRoOiAzNSU7XHJcbn1cclxuYSB7XHJcbiAgbWFyZ2luOiAwcHggNHB4O1xyXG59XHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW46IDVweCA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYXN0ZXJpc2tfaW5wdXQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiAqXCI7XG4gIGNvbG9yOiAjZTMyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBsZWZ0OiAwJTtcbiAgdG9wOiAzMiU7XG59XG5cbi5kYXRhLXRhYmxlIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5pY29uYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuYmctaW5mby5wdWxsLXJpZ2h0Lm0tMyB7XG4gIG1hcmdpbjogLTZweCAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzFmNDY3ZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyLjQ1cmVtICFpbXBvcnRhbnQ7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctbGVmdDogODZweDtcbiAgd2lkdGg6IDM1JTtcbn1cblxuYSB7XG4gIG1hcmdpbjogMHB4IDRweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW46IDVweCA1MHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"

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

module.exports = ".container {\n  margin-top: 135px;\n}\n\n.text-dark {\n  font-weight: 400;\n  color: #1c3d76 !important;\n  padding: 3%;\n  margin: 5%;\n}\n\n.mat-form-field-label-wrapper {\n  border: 0.2px solid #1f467f !important;\n}\n\n.vl {\n  border-left: 1px solid gray;\n  height: 14%;\n  position: absolute;\n  left: 61%;\n  overflow: hidden;\n  margin: -15.3%;\n}\n\n.footer ul li a {\n  text-transform: none;\n}\n\nh6, .h6 {\n  text-transform: none;\n}\n\n.text-dark1 {\n  margin: 12%;\n}\n\n.text-dark2 {\n  margin-top: -7%;\n}\n\n.text-dark3 {\n  margin-bottom: 1%;\n  margin-top: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0M6XFxVc2Vyc1xcd2FzZWVtXFxEZXNrdG9wXFxiZXRhdmljZmxpeFxcb25saW5lLXZpZGVvLXN0cmVhbS1mcm9udGVuZC9zcmNcXGFwcFxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQUU7RUFDRSxzQ0FBQTtBQ0dKOztBREFFO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREU7RUFDRSxvQkFBQTtBQ0lKOztBREZFO0VBQ0Usb0JBQUE7QUNLSjs7QURIRTtFQUNFLFdBQUE7QUNNSjs7QURKRTtFQUNFLGVBQUE7QUNPSjs7QURMRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMzVweDtcclxuICB9XHJcbiAgLnRleHQtZGFya3tcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzFjM2Q3NiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6MC4ycHggc29saWQgIzFmNDY3ZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudmx7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBoZWlnaHQ6IDE0JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDYxJTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIG1hcmdpbjogLTE1LjMlO1xyXG4gIH1cclxuICAuZm9vdGVyIHVsIGxpIGF7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgaDYsIC5oNiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgLnRleHQtZGFyazF7XHJcbiAgICBtYXJnaW46IDEyJTtcclxuICB9XHJcbiAgLnRleHQtZGFyazJ7XHJcbiAgICBtYXJnaW4tdG9wOiAtNyU7XHJcbiAgfVxyXG4gIC50ZXh0LWRhcmsze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICB9IiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEzNXB4O1xufVxuXG4udGV4dC1kYXJrIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMxYzNkNzYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMyU7XG4gIG1hcmdpbjogNSU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMWY0NjdmICFpbXBvcnRhbnQ7XG59XG5cbi52bCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAxNCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjElO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IC0xNS4zJTtcbn1cblxuLmZvb3RlciB1bCBsaSBhIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmg2LCAuaDYge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnRleHQtZGFyazEge1xuICBtYXJnaW46IDEyJTtcbn1cblxuLnRleHQtZGFyazIge1xuICBtYXJnaW4tdG9wOiAtNyU7XG59XG5cbi50ZXh0LWRhcmszIHtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIG1hcmdpbi10b3A6IDclO1xufSJdfQ== */"

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

module.exports = ".container {\n  margin-top: 135px;\n}\n\n.text-dark {\n  font-weight: 400;\n  color: #1c3d76 !important;\n  padding: 5%;\n}\n\n.mat-form-field-label-wrapper {\n  border: 0.2px solid #1f467f !important;\n}\n\n.vl {\n  border-left: 1px solid gray;\n  height: 14%;\n  position: absolute;\n  left: 61%;\n  overflow: hidden;\n  margin: -15.3%;\n}\n\n.footer ul li a {\n  text-transform: none;\n}\n\nh6, .h6 {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFx3YXNlZW1cXERlc2t0b3BcXGJldGF2aWNmbGl4XFxvbmxpbmUtdmlkZW8tc3RyZWFtLWZyb250ZW5kL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEQTtFQUNFLGlCQUFBO0FDL0NGOztBRGlEQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDOUNGOztBRGdEQTtFQUNFLHNDQUFBO0FDN0NGOztBRGdEQTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQzdDRjs7QUQrQ0E7RUFDRSxvQkFBQTtBQzVDRjs7QUQ4Q0E7RUFDRSxvQkFBQTtBQzNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWF0LWNhcmQuZXhhbXBsZS1jYXJkLm1hdC1jYXJkIHtcclxuLy8gICAgIHdpZHRoOiAzMCU7XHJcbi8vICAgICBtYXJnaW46IDUwcHggMzUlO1xyXG4vLyB9XHJcbi8vIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbi8vICAgICBmb250LXNpemU6IDM3cHg7XHJcbi8vIH1cclxuLy8gbWF0LWNhcmQtdGl0bGUubWF0LWNhcmQtdGl0bGUge1xyXG4vLyAgICAgbWFyZ2luOiAwcHggMTIycHg7XHJcbi8vIH1cclxuLy8gLmV4YW1wbGUtZm9ybSB7XHJcbi8vICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4vLyAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuLy8gICAgIHdpZHRoOiA4NCU7XHJcbi8vICAgICBtYXJnaW46IDdweCA4JTtcclxuLy8gICB9XHJcbi8vICAgYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5IHtcclxuLy8gICAgIG1hcmdpbjogMHB4IDE0MXB4O1xyXG4vLyAgICAgcGFkZGluZzogMXB4IDM5cHg7XHJcbi8vICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IC03cHg7XHJcbi8vICAgfVxyXG4vLyAgIC5tYXQtY2FyZC1hY3Rpb25zLCAubWF0LWNhcmQtY29udGVudCwgLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTohaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBoM3tcclxuLy8gICAgIGNvbG9yOiBibHVlO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4vLyB9XHJcbi8vIC5jb250YWluZXRye1xyXG4vLyAgICAgYm9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7XHJcbi8vICAgICB3aWR0aDogNTAlO1xyXG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4IDI1JTtcclxuLy8gfVxyXG4vLyAuZm9ybS1ncm91cHtcclxuLy8gICAgIG1hcmdpbjogMHB4IDIxJTsgICBcclxuLy8gfVxyXG4vLyBidXR0b257XHJcbi8vICAgICBtYXJnaW46IDEwcHggMCU7XHJcbi8vIH1cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAxMzVweDtcclxufVxyXG4udGV4dC1kYXJre1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICMxYzNkNzYgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1JTtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XHJcbiAgYm9yZGVyOjAuMnB4IHNvbGlkICMxZjQ2N2YgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZse1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICBoZWlnaHQ6IDE0JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNjElO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICBtYXJnaW46IC0xNS4zJTtcclxufVxyXG4uZm9vdGVyIHVsIGxpIGF7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuaDYsIC5oNiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEzNXB4O1xufVxuXG4udGV4dC1kYXJrIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMxYzNkNzYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMWY0NjdmICFpbXBvcnRhbnQ7XG59XG5cbi52bCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAxNCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjElO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IC0xNS4zJTtcbn1cblxuLmZvb3RlciB1bCBsaSBhIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmg2LCAuaDYge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn0iXX0= */"

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
        // if(this.username == "admin" && this.password == "admin"){
        //    this.router.navigate(["dashboard"]);
        //    alert('success');
        // } else {
        //     alert('login failed');
        this.signininbutton_disable = true;
        this.service.signin(this.signinForm.value.email, this.signinForm.value.password)
            .subscribe(function (response) {
            // console.log(response, "vbdvj");     
            if (response.success && response.token) {
                localStorage.setItem("user", response.RawData[0].email);
                localStorage.setItem("userID", response.RawData[0].user_id);
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
                                _this.toasterService.pop("success", "Login", "Login Successfully");
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
    function forgotDialog(data, service, toasterService, router, dialogRef) {
        this.data = data;
        this.service = service;
        this.toasterService = toasterService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.email = "";
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
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])),
        __metadata("design:paramtypes", [Object, _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
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

module.exports = ".card {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5) !important;\n  padding-bottom: 10px !important;\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: xx-large;\n  padding: 0 0 0 0;\n  left: 0%;\n  top: 32%;\n}\n\n.data-table {\n  width: 85%;\n  margin: 20px auto;\n}\n\n.iconbutton {\n  margin: 10px 10px;\n}\n\nbutton.btn.btn-default.bg-info.pull-right.m-3 {\n  margin: -6px 0px !important;\n  background: #1f467f !important;\n  border-radius: 2.5rem !important;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n  padding-left: 51px;\n}\n\n.card-title {\n  margin: 5px 12px !important;\n  color: black;\n}\n\na {\n  margin: 0px 4px;\n}\n\n.mat-slide-toggle-bar.mat-slide-toggle-bar-no-side-margin {\n  margin: 0px 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsLXVzZXJzL0M6XFxVc2Vyc1xcd2FzZWVtXFxEZXNrdG9wXFxiZXRhdmljZmxpeFxcb25saW5lLXZpZGVvLXN0cmVhbS1mcm9udGVuZC9zcmNcXGFwcFxccG9ydGFsLXVzZXJzXFxwb3J0YWwtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRhbC11c2Vycy9wb3J0YWwtdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzREFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FER0E7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUNBQTs7QURFQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0NBOztBRENBO0VBQ0EsaUJBQUE7QUNFQTs7QURBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQ0dBOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QURGQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREhBO0VBQ0UsZUFBQTtBQ01GOztBREpBO0VBQ0UsMEJBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC11c2Vycy9wb3J0YWwtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYXN0ZXJpc2tfaW5wdXQ6YWZ0ZXIge1xyXG5jb250ZW50OiBcIiAqXCI7XHJcbmNvbG9yOiAjZTMyO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbm1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG5mb250LXNpemU6IHh4LWxhcmdlO1xyXG5wYWRkaW5nOiAwIDAgMCAwO1xyXG5sZWZ0OiAwJTtcclxudG9wOjMyJTtcclxufVxyXG4uZGF0YS10YWJsZXtcclxud2lkdGg6IDg1JTtcclxubWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuLmljb25idXR0b257XHJcbm1hcmdpbjoxMHB4IDEwcHg7XHJcbn1cclxuYnV0dG9uLmJ0bi5idG4tZGVmYXVsdC5iZy1pbmZvLnB1bGwtcmlnaHQubS0zIHtcclxubWFyZ2luOiAtNnB4IDBweCAhaW1wb3J0YW50O1xyXG5iYWNrZ3JvdW5kOiAjMWY0NjdmICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1yYWRpdXM6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUxcHg7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbjogNXB4IDEycHggIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuYSB7XHJcbiAgbWFyZ2luOiAwcHggNHB4O1xyXG59XHJcbi5tYXQtc2xpZGUtdG9nZ2xlLWJhci5tYXQtc2xpZGUtdG9nZ2xlLWJhci1uby1zaWRlLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwcHggNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYXN0ZXJpc2tfaW5wdXQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiAqXCI7XG4gIGNvbG9yOiAjZTMyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBsZWZ0OiAwJTtcbiAgdG9wOiAzMiU7XG59XG5cbi5kYXRhLXRhYmxlIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5pY29uYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuYmctaW5mby5wdWxsLXJpZ2h0Lm0tMyB7XG4gIG1hcmdpbjogLTZweCAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzFmNDY3ZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW0gIWltcG9ydGFudDtcbn1cblxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiA1MXB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogNXB4IDEycHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5hIHtcbiAgbWFyZ2luOiAwcHggNHB4O1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS1iYXIubWF0LXNsaWRlLXRvZ2dsZS1iYXItbm8tc2lkZS1tYXJnaW4ge1xuICBtYXJnaW46IDBweCA1cHggIWltcG9ydGFudDtcbn0iXX0= */"

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
    function AddUserDialog(data, service, 
    // @Inject(OnboardingService) public onboardservice:OnboardingService,
    toasterService, dialogRef) {
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
    AddUserDialog.prototype.numberOnly = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    AddUserDialog.prototype.focusOutemail = function () {
        var _this = this;
        var email_payload = {
            email: this.email
            // orgID:localStorage.getItem("org_id"),
        };
        this.onboardservice.checkEmailexist(email_payload)
            .subscribe(function (response) {
            if (response == "404") {
                // this.emaildisabled=true;
                _this.toasterService.pop("error", "Email", "Email already exist");
                _this.save_user_btn = true;
            }
            else {
                _this.save_user_btn = false;
            }
            //48870d105beeea41b38dda4b1add8ac3
        });
    };
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
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_portal_users_service__WEBPACK_IMPORTED_MODULE_1__["PortalUserService"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])),
        __metadata("design:paramtypes", [Object, _portal_users_service__WEBPACK_IMPORTED_MODULE_1__["PortalUserService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
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
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])),
        __metadata("design:paramtypes", [Object, _portal_users_service__WEBPACK_IMPORTED_MODULE_1__["PortalUserService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
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

module.exports = ".container {\n  margin-top: 135px;\n}\n\n.text-dark {\n  font-weight: 400;\n  color: #1c3d76 !important;\n  padding: 5%;\n}\n\n.mat-form-field-label-wrapper {\n  border: 0.2px solid #1f467f !important;\n}\n\n.vl {\n  border-left: 1px solid gray;\n  height: 14%;\n  position: absolute;\n  left: 61%;\n  overflow: hidden;\n  margin: -15.3%;\n}\n\n.footer ul li a {\n  text-transform: none;\n}\n\nh6, .h6 {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvQzpcXFVzZXJzXFx3YXNlZW1cXERlc2t0b3BcXGJldGF2aWNmbGl4XFxvbmxpbmUtdmlkZW8tc3RyZWFtLWZyb250ZW5kL3NyY1xcYXBwXFxyZXNldC1wYXNzd29yZFxccmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEQTtFQUNJLGlCQUFBO0FDL0NKOztBRGlERTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDOUNKOztBRGdERTtFQUNFLHNDQUFBO0FDN0NKOztBRGdERTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQzdDSjs7QUQrQ0U7RUFDRSxvQkFBQTtBQzVDSjs7QUQ4Q0U7RUFDRSxvQkFBQTtBQzNDSiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWF0LWNhcmQuZXhhbXBsZS1jYXJkLm1hdC1jYXJkIHtcclxuLy8gICAgIHdpZHRoOiAzMCU7XHJcbi8vICAgICBtYXJnaW46IDUwcHggMzUlO1xyXG4vLyB9XHJcbi8vIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbi8vICAgICBmb250LXNpemU6IDM3cHg7XHJcbi8vIH1cclxuLy8gbWF0LWNhcmQtdGl0bGUubWF0LWNhcmQtdGl0bGUge1xyXG4vLyAgICAgbWFyZ2luOiAwcHggMTIycHg7XHJcbi8vIH1cclxuLy8gLmV4YW1wbGUtZm9ybSB7XHJcbi8vICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4vLyAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuLy8gICAgIHdpZHRoOiA4NCU7XHJcbi8vICAgICBtYXJnaW46IDdweCA4JTtcclxuLy8gICB9XHJcbi8vICAgYnV0dG9uLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5IHtcclxuLy8gICAgIG1hcmdpbjogMHB4IDE0MXB4O1xyXG4vLyAgICAgcGFkZGluZzogMXB4IDM5cHg7XHJcbi8vICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IC03cHg7XHJcbi8vICAgfVxyXG4vLyAgIC5tYXQtY2FyZC1hY3Rpb25zLCAubWF0LWNhcmQtY29udGVudCwgLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTohaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBoM3tcclxuLy8gICAgIGNvbG9yOiBibHVlO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4vLyB9XHJcbi8vIC5jb250YWluZXRye1xyXG4vLyAgICAgYm9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7XHJcbi8vICAgICB3aWR0aDogNTAlO1xyXG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4IDI1JTtcclxuLy8gfVxyXG4vLyAuZm9ybS1ncm91cHtcclxuLy8gICAgIG1hcmdpbjogMHB4IDIxJTsgICBcclxuLy8gfVxyXG4vLyBidXR0b257XHJcbi8vICAgICBtYXJnaW46IDEwcHggMCU7XHJcbi8vIH1cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDEzNXB4O1xyXG4gIH1cclxuICAudGV4dC1kYXJre1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMWMzZDc2ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOjAuMnB4IHNvbGlkICMxZjQ2N2YgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnZse1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgaGVpZ2h0OiAxNCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2MSU7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBtYXJnaW46IC0xNS4zJTtcclxuICB9XHJcbiAgLmZvb3RlciB1bCBsaSBhe1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIGg2LCAuaDYge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gICIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMzVweDtcbn1cblxuLnRleHQtZGFyayB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMWMzZDc2ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIGJvcmRlcjogMC4ycHggc29saWQgIzFmNDY3ZiAhaW1wb3J0YW50O1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG4gIGhlaWdodDogMTQlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYxJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAtMTUuMyU7XG59XG5cbi5mb290ZXIgdWwgbGkgYSB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5oNiwgLmg2IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59Il19 */"

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
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
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
                    _this.toasterService.pop("error", "Reset Password", "set password");
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

/***/ "./src/app/state/state.component.scss":
/*!********************************************!*\
  !*** ./src/app/state/state.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5) !important;\n  padding-bottom: 10px !important;\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: xx-large;\n  padding: 0 0 0 0;\n  left: 0%;\n  top: 32%;\n}\n\n.data-table {\n  width: 80%;\n  margin: 20px auto;\n}\n\n.iconbutton {\n  margin: 10px 10px;\n}\n\nbutton.btn.btn-default.bg-info.pull-right.m-3 {\n  margin: -6px 0px !important;\n  background: #1f467f !important;\n  border-radius: 2.5rem !important;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n  padding-left: 92px;\n  width: 36%;\n}\n\na {\n  margin: 0px 4px;\n}\n\n.card-title {\n  margin: 5px 50px !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGUvQzpcXFVzZXJzXFx3YXNlZW1cXERlc2t0b3BcXGJldGF2aWNmbGl4XFxvbmxpbmUtdmlkZW8tc3RyZWFtLWZyb250ZW5kL3NyY1xcYXBwXFxzdGF0ZVxcc3RhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0YXRlL3N0YXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREdBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FDQUE7O0FERUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNDQTs7QURDQTtFQUNBLGlCQUFBO0FDRUE7O0FEQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUNHQTs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9zdGF0ZS9zdGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5hc3Rlcmlza19pbnB1dDphZnRlciB7XHJcbmNvbnRlbnQ6IFwiICpcIjtcclxuY29sb3I6ICNlMzI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbmZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbnBhZGRpbmc6IDAgMCAwIDA7XHJcbmxlZnQ6IDAlO1xyXG50b3A6MzIlO1xyXG59XHJcbi5kYXRhLXRhYmxle1xyXG53aWR0aDogODAlO1xyXG5tYXJnaW46IDIwcHggYXV0bztcclxufVxyXG4uaWNvbmJ1dHRvbntcclxubWFyZ2luOjEwcHggMTBweDtcclxufVxyXG5idXR0b24uYnRuLmJ0bi1kZWZhdWx0LmJnLWluZm8ucHVsbC1yaWdodC5tLTMge1xyXG5tYXJnaW46IC02cHggMHB4ICFpbXBvcnRhbnQ7XHJcbmJhY2tncm91bmQ6ICMxZjQ2N2YgIWltcG9ydGFudDtcclxuYm9yZGVyLXJhZGl1czogMi41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gbWF0LWljb24ubWF0LWljb24ubm90cmFuc2xhdGUubWF0ZXJpYWwtaWNvbnMubWF0LWljb24tbm8tY29sb3Ige1xyXG4vLyBwYWRkaW5nOiAwcHggMjVweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA5MnB4O1xyXG4gIHdpZHRoOiAzNiU7XHJcbn1cclxuYSB7XHJcbiAgbWFyZ2luOiAwcHggNHB4O1xyXG59XHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW46IDVweCA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59IiwiLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hc3Rlcmlza19pbnB1dDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiICpcIjtcbiAgY29sb3I6ICNlMzI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIGxlZnQ6IDAlO1xuICB0b3A6IDMyJTtcbn1cblxuLmRhdGEtdGFibGUge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmljb25idXR0b24ge1xuICBtYXJnaW46IDEwcHggMTBweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tZGVmYXVsdC5iZy1pbmZvLnB1bGwtcmlnaHQubS0zIHtcbiAgbWFyZ2luOiAtNnB4IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMWY0NjdmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIuNXJlbSAhaW1wb3J0YW50O1xufVxuXG50ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDkycHg7XG4gIHdpZHRoOiAzNiU7XG59XG5cbmEge1xuICBtYXJnaW46IDBweCA0cHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiA1cHggNTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"

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
    function AddStateDialog(data, service, toasterService, dialogRef) {
        this.data = data;
        this.service = service;
        this.toasterService = toasterService;
        this.dialogRef = dialogRef;
        this.cat_name = "";
        this.dialogTitle = "Add new state";
        this.save_state_btn = true;
        this.update_state_btn = false;
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
        // console.log(payload.cat_name, "cdskn")
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
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"])),
        __metadata("design:paramtypes", [Object, _state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"],
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

module.exports = "video {\n  width: 100%;\n  height: auto;\n}\n\n.close-icon {\n  position: absolute;\n  top: 8%;\n  right: 7%;\n  z-index: 99;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n  background: #fff;\n}\n\n.mat-dialog-container {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #000 !important;\n  color: #d2d2d2;\n}\n\n.margin_p {\n  margin-bottom: 0.2rem;\n  font-weight: 400;\n  font-size: 15px;\n}\n\n.mtop[_ngcontent-cyg-c17] {\n  margin-top: 2%;\n  padding: 1% 0% 0% 3%;\n}\n\n.content_padding {\n  padding: 1% 0% 0% 3%;\n}\n\n.font_weight {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLWRpYWxvZy9DOlxcVXNlcnNcXHdhc2VlbVxcRGVza3RvcFxcYmV0YXZpY2ZsaXhcXG9ubGluZS12aWRlby1zdHJlYW0tZnJvbnRlbmQvc3JjXFxhcHBcXHZpZGVvLXVwbG9hZFxcdmlkZW8tZGlhbG9nXFx2aWRlby1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvLXVwbG9hZC92aWRlby1kaWFsb2cvdmlkZW8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSx3SEFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDQTs7QURFQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWRlby11cGxvYWQvdmlkZW8tZGlhbG9nL3ZpZGVvLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2UtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDglO1xyXG4gICAgcmlnaHQ6IDclO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksIDAgMjRweCAzOHB4IDNweCByZ2JhKDAsMCwwLC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZDJkMmQyO1xyXG59XHJcblxyXG4ubWFyZ2luX3B7XHJcbm1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuZm9udC13ZWlnaHQ6NDAwO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5tdG9wW19uZ2NvbnRlbnQtY3lnLWMxN10ge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHBhZGRpbmc6IDElIDAlIDAlIDMlO1xyXG59XHJcblxyXG4uY29udGVudF9wYWRkaW5ne1xyXG4gIHBhZGRpbmc6IDElIDAlIDAlIDMlO1xyXG59XHJcblxyXG4uZm9udF93ZWlnaHR7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4gIFxyXG4gIC8vICN2aWRlby12aWV3cG9ydCB7XHJcbiAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgICAgdG9wOiAwO1xyXG4gIC8vICAgICBsZWZ0OjA7XHJcbiAgLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLy8gICAgIHotaW5kZXg6IC0xOyAvKiBmb3IgYWNjZXNzaW5nIHRoZSB2aWRlbyBieSBjbGljayAqL1xyXG4gIC8vIH0iLCJ2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDglO1xuICByaWdodDogNyU7XG4gIHotaW5kZXg6IDk5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNkMmQyZDI7XG59XG5cbi5tYXJnaW5fcCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubXRvcFtfbmdjb250ZW50LWN5Zy1jMTddIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHBhZGRpbmc6IDElIDAlIDAlIDMlO1xufVxuXG4uY29udGVudF9wYWRkaW5nIHtcbiAgcGFkZGluZzogMSUgMCUgMCUgMyU7XG59XG5cbi5mb250X3dlaWdodCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

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

module.exports = ".font_p {\n  font-size: 14px;\n}\n\n.close-icon {\n  position: absolute;\n  bottom: 0%;\n  right: 2%;\n  z-index: 99;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n  background: #fff;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px;\n}\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.middleline {\n  margin-top: 0rem;\n  margin-bottom: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLWVkaXQtZGlhbG9nL0M6XFxVc2Vyc1xcd2FzZWVtXFxEZXNrdG9wXFxiZXRhdmljZmxpeFxcb25saW5lLXZpZGVvLXN0cmVhbS1mcm9udGVuZC9zcmNcXGFwcFxcdmlkZW8tdXBsb2FkXFx2aWRlby1lZGl0LWRpYWxvZ1xcdmlkZW8tZWRpdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvLXVwbG9hZC92aWRlby1lZGl0LWRpYWxvZy92aWRlby1lZGl0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENFO0VBQ0UsV0FBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FDSUo7O0FERkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC92aWRlby11cGxvYWQvdmlkZW8tZWRpdC1kaWFsb2cvdmlkZW8tZWRpdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udF9we1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jbG9zZS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICByaWdodDogMiU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgfVxyXG4gIFxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5maWxlVXBsb2FkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmZpbGVVcGxvYWQgaW5wdXQudXBsb2FkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbn1cclxuLm1pZGRsZWxpbmV7XHJcbiAgbWFyZ2luLXRvcDogMHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG59IiwiLmZvbnRfcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsb3NlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIHJpZ2h0OiAyJTtcbiAgei1pbmRleDogOTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmlsZVVwbG9hZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZmlsZVVwbG9hZCBpbnB1dC51cGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cblxuLm1pZGRsZWxpbmUge1xuICBtYXJnaW4tdG9wOiAwcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufSJdfQ== */"

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
        this.nohrline = true;
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
            _this.dialogRef.close();
        });
        // console.log(videos,"open video dialog");
    };
    VideoEditDialogComponent.prototype.onImageChange = function (event) {
        var _this = this;
        this.uploadedImageFiles = event.target.files;
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
    };
    VideoEditDialogComponent.prototype.cancel = function () {
        // console.log("cancel button called")
        this.canEditCode = false;
        this.hr_hide = true;
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

module.exports = ".upload {\n  text-align: center;\n  color: black;\n  font-weight: bolder;\n}\n\n.main-content {\n  margin-top: 31px;\n  margin: 33px 3%;\n  width: 96%;\n  padding: 30px 15px;\n  height: 69px;\n}\n\n.add_new_video {\n  position: absolute;\n  right: 2%;\n  top: 0%;\n  z-index: 99;\n}\n\nh4 {\n  margin: 10px 2%;\n}\n\n.card.card-stats.ng-star-inserted {\n  margin-left: -33px;\n}\n\n.card-stats .card-header.card-header-icon i {\n  font-size: 60px;\n  line-height: 87px;\n  width: 199px;\n  height: 88px;\n  text-align: center;\n}\n\n.card [class*=card-header-] .card-icon, .card [class*=card-header-] .card-text {\n  border-radius: 0px;\n  background-color: #999999;\n  width: 116%;\n  height: 7.5rem;\n  padding: 20px;\n  margin: 0px -8%;\n  background: lightblue;\n}\n\n.card-stats .card-header.card-header-icon, .card-stats .card-header.card-header-text {\n  text-align: left;\n  height: 211px;\n}\n\n.card .card-category .material-icons {\n  position: absolute;\n  font-size: xx-large;\n  top: 138px;\n  color: black;\n  line-height: 1;\n  margin: 0px 71%;\n}\n\n.Iconbtn {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 22px;\n  width: 24px;\n  margin: 26px 70px;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: -1rem;\n}\n\n.mat-dialog-content {\n  max-height: 91vh;\n  width: 700px !important;\n}\n\nbutton.btn.btn-default.bg-Info.pull-right.m-3[_ngcontent-owk-c18] {\n  margin: 3px 11px !important;\n}\n\n.owl-prev,\n.owl-next {\n  position: absolute !important;\n  top: 50% !important;\n  -webkit-transform: translateY(-50%) !important;\n          transform: translateY(-50%) !important;\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.owl-prev {\n  left: -2rem !important;\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.owl-next {\n  right: -2rem !important;\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.owl-theme .owl-nav [class*=owl-] {\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.video_btn {\n  margin: -12px -1% !important;\n}\n\n.title-content {\n  text-align: center;\n  padding: 13.5%;\n}\n\n.middel-line {\n  width: 92.8%;\n  margin: -9px 3.9%;\n  background-color: #1c3d76;\n}\n\n.content-title {\n  width: 100%;\n  font-size: 14px;\n  padding: 8% 2% 6% 2% !important;\n  line-height: 1rem;\n  font-weight: 400;\n  color: #1c3d76;\n  overflow: hidden;\n}\n\n.image_size {\n  width: 100% !important;\n  display: -webkit-box !important;\n  display: flex !important;\n  height: 200px !important;\n  margin: -18px 0px !important;\n}\n\nbody, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\n  line-height: 1rem !important;\n}\n\n.nav-btn {\n  height: 47px !important;\n  position: absolute !important;\n  width: 26px !important;\n  cursor: pointer !important;\n  top: 100px !important;\n}\n\n.prev-slide.slick-disabled,\n.next-slide.slick-disabled {\n  pointer-events: none !important;\n  opacity: 0.2 !important;\n}\n\n.prev-slide:hover {\n  background-position: 0px -53px !important;\n}\n\n.next-slide:hover {\n  background-position: -24px -53px !important;\n}\n\n.imgwdt {\n  width: 100%;\n  margin: auto;\n}\n\n.slick-list draggable {\n  float: left !important;\n}\n\n.slick-track {\n  margin-left: 0% !important;\n}\n\n.qqq {\n  font-size: 16px;\n  line-height: 16px;\n  height: 44px;\n  overflow: hidden;\n}\n\n.show {\n  overflow: visible;\n  height: auto;\n}\n\n.slick, .slick-wrapper {\n  width: 100% !important;\n}\n\n.actionbtn {\n  left: 56%;\n  top: 70%;\n  position: absolute;\n}\n\n@media (min-width: 992px) and (max-width: 1023px) {\n  .imgwdt {\n    height: 200px;\n  }\n\n  .content-title {\n    margin-top: 6%;\n  }\n\n  .actionbtn {\n    left: 64%;\n    top: 72%;\n  }\n}\n\n@media (min-width: 1024px) and (max-width: 1279px) {\n  .imgwdt {\n    margin-top: 9% !important;\n  }\n\n  .content-title {\n    -webkit-margin-top-collapse: separate;\n    width: 109%;\n  }\n\n  .actionbtn {\n    left: 51%;\n    top: 68%;\n  }\n}\n\n@media (min-width: 1280px) and (max-width: 1340px) {\n  .imgwdt {\n    margin-top: 9%;\n  }\n\n  .content-title {\n    -webkit-margin-top-collapse: separate;\n    width: 109%;\n  }\n\n  .actionbtn {\n    left: 51%;\n    top: 68%;\n  }\n}\n\n@media (min-width: 1441px) and (max-width: 1680px) {\n  .content-title {\n    padding: 23% 2% 6% 2% !important;\n  }\n\n  .actionbtn {\n    left: 64%;\n    top: 73%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tdXBsb2FkL0M6XFxVc2Vyc1xcd2FzZWVtXFxEZXNrdG9wXFxiZXRhdmljZmxpeFxcb25saW5lLXZpZGVvLXN0cmVhbS1mcm9udGVuZC9zcmNcXGFwcFxcdmlkZW8tdXBsb2FkXFx2aWRlby11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvLXVwbG9hZC92aWRlby11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDT0o7O0FETEE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDU0o7O0FETkE7RUFDSSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDU0o7O0FETkE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUNTSjs7QUROQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUNTSjs7QUROQTtFQUNJLDJCQUFBO0FDU0o7O0FETEE7O0VBRUUsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUUY7O0FETEE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNRRjs7QURMQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1FGOztBRExBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRExBO0VBQ0ksNEJBQUE7QUNRSjs7QUROQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ1NKOztBRE5BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNTSjs7QURQQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDVUo7O0FESkE7RUFDSSxzQkFBQTtFQUNBLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDT0o7O0FETEE7RUFDSSw0QkFBQTtBQ1FKOztBRE5BO0VBQ0ksdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ1NKOztBRE5FOztFQUVFLCtCQUFBO0VBQ0EsdUJBQUE7QUNTSjs7QURORTtFQUNFLHlDQUFBO0FDU0o7O0FETkU7RUFDRSwyQ0FBQTtBQ1NKOztBRFBFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNVTjs7QURSRTtFQUNJLHNCQUFBO0FDV047O0FEVEU7RUFDSSwwQkFBQTtBQ1lOOztBRFRFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDWUo7O0FEVEU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNZSjs7QURURTtFQUNFLHNCQUFBO0FDWUo7O0FEVkU7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDYUo7O0FEVEE7RUFDSTtJQUNJLGFBQUE7RUNZTjs7RURWRTtJQUNJLGNBQUE7RUNhTjs7RURYRTtJQUNJLFNBQUE7SUFDQSxRQUFBO0VDY047QUFDRjs7QURYQTtFQUNJO0lBQ0kseUJBQUE7RUNhTjs7RURYRTtJQUNJLHFDQUFBO0lBQ0EsV0FBQTtFQ2NOOztFRFpFO0lBQ0ksU0FBQTtJQUNBLFFBQUE7RUNlTjtBQUNGOztBRFpBO0VBQ0k7SUFDSSxjQUFBO0VDY047O0VEWkU7SUFDSSxxQ0FBQTtJQUNBLFdBQUE7RUNlTjs7RURiRTtJQUNJLFNBQUE7SUFDQSxRQUFBO0VDZ0JOO0FBQ0Y7O0FEZEE7RUFDSTtJQUNJLGdDQUFBO0VDZ0JOOztFRGRFO0lBQ0ksU0FBQTtJQUNBLFFBQUE7RUNpQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXVwbG9hZC92aWRlby11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2Fke1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7IFxyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMXB4O1xyXG4gICAgbWFyZ2luOiAzM3B4IDMlO1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcclxuICAgIGhlaWdodDogNjlweDtcclxufVxyXG4uYWRkX25ld192aWRlb3tcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgcmlnaHQ6MiU7XHJcbiAgICB0b3A6MCU7XHJcbiAgICB6LWluZGV4Ojk5O1xyXG59XHJcbmg0e1xyXG4gICAgbWFyZ2luOiAxMHB4IDIlO1xyXG59XHJcbi5jYXJkLmNhcmQtc3RhdHMubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMzcHg7XHJcbn1cclxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24gaSB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogODdweDtcclxuICAgIHdpZHRoOiAxOTlweDtcclxuICAgIGhlaWdodDogODhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZCBbY2xhc3MqPWNhcmQtaGVhZGVyLV0gLmNhcmQtaWNvbiwgLmNhcmQgW2NsYXNzKj1jYXJkLWhlYWRlci1dIC5jYXJkLXRleHQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcclxuICAgIHdpZHRoOiAxMTYlO1xyXG4gICAgaGVpZ2h0OiA3LjVyZW07XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggLTglO1xyXG4gICAgYmFja2dyb3VuZDpsaWdodGJsdWU7IFxyXG59XHJcbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uLCAuY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAyMTFweDtcclxufVxyXG4uY2FyZCAuY2FyZC1jYXRlZ29yeSAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIHRvcDogMTM4cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG1hcmdpbjogMHB4IDcxJTtcclxufVxyXG5cclxuLkljb25idG4ge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgbWFyZ2luOiAyNnB4IDcwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDkxdmg7XHJcbiAgICB3aWR0aDogNzAwcHggIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcbmJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuYmctSW5mby5wdWxsLXJpZ2h0Lm0tM1tfbmdjb250ZW50LW93ay1jMThdIHtcclxuICAgIG1hcmdpbjogM3B4IDExcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5vd2wtcHJldixcclxuLm93bC1uZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjODY4NDg0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDRweCA3cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ub3dsLXByZXYge1xyXG4gIGxlZnQ6IC0ycmVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM4Njg0ODQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4IDdweDtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5vd2wtbmV4dCB7XHJcbiAgcmlnaHQ6IC0ycmVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM4Njg0ODQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4IDdweDtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5vd2wtdGhlbWUgLm93bC1uYXYgW2NsYXNzKj1vd2wtXSB7XHJcbiAgICBjb2xvcjogIzg2ODQ4NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggN3B4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4udmlkZW9fYnRuIHtcclxuICAgIG1hcmdpbjogLTEycHggLTElICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpdGxlLWNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMy41JTtcclxufVxyXG5cclxuLm1pZGRlbC1saW5le1xyXG4gICAgd2lkdGg6IDkyLjglO1xyXG4gICAgbWFyZ2luOiAtOXB4IDMuOSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMzZDc2O1xyXG59XHJcbi5jb250ZW50LXRpdGxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOjglIDIlIDYlIDIlICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzFjM2Q3NjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLy8gLm1hdC10YWItbGFiZWwtYWN0aXZle1xyXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuLy8gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5pbWFnZV9zaXplIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IC0xOHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbmJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC5oMSwgLmgyLCAuaDMsIC5oNHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi1idG4ge1xyXG4gICAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgIHRvcDogMTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgIFxyXG4gIC5wcmV2LXNsaWRlLnNsaWNrLWRpc2FibGVkLFxyXG4gIC5uZXh0LXNsaWRlLnNsaWNrLWRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgICAgIFxyXG4gIC5wcmV2LXNsaWRlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNTNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAgXHJcbiAgLm5leHQtc2xpZGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0cHggLTUzcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmltZ3dkdHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLnNsaWNrLWxpc3QgZHJhZ2dhYmxle1xyXG4gICAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2xpY2stdHJhY2t7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnFxcSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5zaG93IHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnNsaWNrLCAuc2xpY2std3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYWN0aW9uYnRue1xyXG4gICAgbGVmdDogNTYlO1xyXG4gICAgdG9wOiA3MCU7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbi8vICAgLS0tLS0tLS0tLS0tLS0tLS0tLW1lZGlhIHF1ZXJ5IGZvciBkaWZmZXJlbnQgcmV2b2x1dGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOjEwMjNweCkge1xyXG4gICAgLmltZ3dkdHtcclxuICAgICAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudC10aXRsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2JTtcclxuICAgIH1cclxuICAgIC5hY3Rpb25idG57XHJcbiAgICAgICAgbGVmdDogNjQlO1xyXG4gICAgICAgIHRvcDogNzIlOyAgXHJcbiAgICB9XHJcblxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyNzlweCkge1xyXG4gICAgLmltZ3dkdHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA5JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtdGl0bGV7XHJcbiAgICAgICAgLXdlYmtpdC1tYXJnaW4tdG9wLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgICAgICB3aWR0aDogMTA5JTtcclxuICAgIH1cclxuICAgIC5hY3Rpb25idG57XHJcbiAgICAgICAgbGVmdDogNTElO1xyXG4gICAgICAgIHRvcDogNjglOyAgXHJcbiAgICB9XHJcblxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOjEzNDBweCkge1xyXG4gICAgLmltZ3dkdHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA5JTtcclxuICAgIH1cclxuICAgIC5jb250ZW50LXRpdGxle1xyXG4gICAgICAgIC13ZWJraXQtbWFyZ2luLXRvcC1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICAgICAgd2lkdGg6IDEwOSU7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uYnRue1xyXG4gICAgICAgIGxlZnQ6IDUxJTtcclxuICAgICAgICB0b3A6IDY4JTsgIFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNDQxcHgpIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpe1xyXG4gICAgLmNvbnRlbnQtdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZzogMjMlIDIlIDYlIDIlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uYnRue1xyXG4gICAgICAgIGxlZnQ6IDY0JTtcclxuICAgICAgICB0b3A6IDczJTsgIFxyXG4gICAgfVxyXG59IiwiLnVwbG9hZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMzFweDtcbiAgbWFyZ2luOiAzM3B4IDMlO1xuICB3aWR0aDogOTYlO1xuICBwYWRkaW5nOiAzMHB4IDE1cHg7XG4gIGhlaWdodDogNjlweDtcbn1cblxuLmFkZF9uZXdfdmlkZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyJTtcbiAgdG9wOiAwJTtcbiAgei1pbmRleDogOTk7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAxMHB4IDIlO1xufVxuXG4uY2FyZC5jYXJkLXN0YXRzLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBtYXJnaW4tbGVmdDogLTMzcHg7XG59XG5cbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uIGkge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA4N3B4O1xuICB3aWR0aDogMTk5cHg7XG4gIGhlaWdodDogODhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCBbY2xhc3MqPWNhcmQtaGVhZGVyLV0gLmNhcmQtaWNvbiwgLmNhcmQgW2NsYXNzKj1jYXJkLWhlYWRlci1dIC5jYXJkLXRleHQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG4gIHdpZHRoOiAxMTYlO1xuICBoZWlnaHQ6IDcuNXJlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAwcHggLTglO1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG59XG5cbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uLCAuY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGhlaWdodDogMjExcHg7XG59XG5cbi5jYXJkIC5jYXJkLWNhdGVnb3J5IC5tYXRlcmlhbC1pY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgdG9wOiAxMzhweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAwcHggNzElO1xufVxuXG4uSWNvbmJ0biB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmlsbDogY3VycmVudENvbG9yO1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW46IDI2cHggNzBweDtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IC0xcmVtO1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogOTF2aDtcbiAgd2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuYmctSW5mby5wdWxsLXJpZ2h0Lm0tM1tfbmdjb250ZW50LW93ay1jMThdIHtcbiAgbWFyZ2luOiAzcHggMTFweCAhaW1wb3J0YW50O1xufVxuXG4ub3dsLXByZXYsXG4ub3dsLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODY4NDg0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDRweCA3cHg7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm93bC1wcmV2IHtcbiAgbGVmdDogLTJyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICM4Njg0ODQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNHB4IDdweDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ub3dsLW5leHQge1xuICByaWdodDogLTJyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICM4Njg0ODQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNHB4IDdweDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ub3dsLXRoZW1lIC5vd2wtbmF2IFtjbGFzcyo9b3dsLV0ge1xuICBjb2xvcjogIzg2ODQ4NCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA0cHggN3B4O1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi52aWRlb19idG4ge1xuICBtYXJnaW46IC0xMnB4IC0xJSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTMuNSU7XG59XG5cbi5taWRkZWwtbGluZSB7XG4gIHdpZHRoOiA5Mi44JTtcbiAgbWFyZ2luOiAtOXB4IDMuOSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzNkNzY7XG59XG5cbi5jb250ZW50LXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOCUgMiUgNiUgMiUgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMWMzZDc2O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1hZ2Vfc2l6ZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IC0xOHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG5ib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCAuaDEsIC5oMiwgLmgzLCAuaDQge1xuICBsaW5lLWhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWJ0biB7XG4gIGhlaWdodDogNDdweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI2cHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIHRvcDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLnByZXYtc2xpZGUuc2xpY2stZGlzYWJsZWQsXG4ubmV4dC1zbGlkZS5zbGljay1kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuMiAhaW1wb3J0YW50O1xufVxuXG4ucHJldi1zbGlkZTpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtNTNweCAhaW1wb3J0YW50O1xufVxuXG4ubmV4dC1zbGlkZTpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNHB4IC01M3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWd3ZHQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2xpY2stbGlzdCBkcmFnZ2FibGUge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uc2xpY2stdHJhY2sge1xuICBtYXJnaW4tbGVmdDogMCUgIWltcG9ydGFudDtcbn1cblxuLnFxcSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGhlaWdodDogNDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNob3cge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc2xpY2ssIC5zbGljay13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmFjdGlvbmJ0biB7XG4gIGxlZnQ6IDU2JTtcbiAgdG9wOiA3MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5pbWd3ZHQge1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAuY29udGVudC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogNiU7XG4gIH1cblxuICAuYWN0aW9uYnRuIHtcbiAgICBsZWZ0OiA2NCU7XG4gICAgdG9wOiA3MiU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgLmltZ3dkdCB7XG4gICAgbWFyZ2luLXRvcDogOSUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250ZW50LXRpdGxlIHtcbiAgICAtd2Via2l0LW1hcmdpbi10b3AtY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIHdpZHRoOiAxMDklO1xuICB9XG5cbiAgLmFjdGlvbmJ0biB7XG4gICAgbGVmdDogNTElO1xuICAgIHRvcDogNjglO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTM0MHB4KSB7XG4gIC5pbWd3ZHQge1xuICAgIG1hcmdpbi10b3A6IDklO1xuICB9XG5cbiAgLmNvbnRlbnQtdGl0bGUge1xuICAgIC13ZWJraXQtbWFyZ2luLXRvcC1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgd2lkdGg6IDEwOSU7XG4gIH1cblxuICAuYWN0aW9uYnRuIHtcbiAgICBsZWZ0OiA1MSU7XG4gICAgdG9wOiA2OCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQxcHgpIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcbiAgLmNvbnRlbnQtdGl0bGUge1xuICAgIHBhZGRpbmc6IDIzJSAyJSA2JSAyJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmFjdGlvbmJ0biB7XG4gICAgbGVmdDogNjQlO1xuICAgIHRvcDogNzMlO1xuICB9XG59Il19 */"

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
        this.customOptions = {
            loop: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            navSpeed: 700,
            // navText: ['prev', 'next'],
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            // navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 3
                }
            },
            nav: true
        };
        this.slides = [];
        this.slideConfig = {
            slidesToShow: 4,
            centerMode: false,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            dots: true,
            infinite: true,
            nextArrow: "<div class='nav-btn next-slide' style='cursor:pointer;position: absolute;width: 30%;top: 100px !important; height: 48px;background: url(../../assets/img/75.png) no-repeat scroll 0 0;left: -3%;'></div>",
            prevArrow: "<div class='nav-btn prev-slide' style='cursor:pointer;position: absolute;width: 30%;top: 100px !important; height: 48px;background: url(../../assets/img/76.png) no-repeat scroll 0 0;left: 96%;'></div>",
            responsive: [
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
            // width: '1024px',
            // height:'500px',
            disableClose: true,
            data: { title: title, payload: videos },
        });
        dialogRef.afterClosed()
            .subscribe(function (res) {
        });
    };
    VideoUploadComponent.prototype.open_edit_dialog = function (videos, isNew) {
        // console.log(videos,"bdhjsbhj")
        if (this.user_role != 4) {
            var title = isNew ? 'Edit Video Details' : 'Update Video';
            var dialogRef = this.dialog.open(_video_edit_dialog_video_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["VideoEditDialogComponent"], {
                width: '1024px',
                // height:'500px',
                disableClose: true,
                data: { title: title, payload: videos },
            });
            dialogRef.afterClosed()
                .subscribe(function (res) {
                // this.Service.getcat_name().
                // subscribe(response => {
                //   this.tabs = (response);
                // });    
            });
        }
        // console.log(videos,"open video dialog");
    };
    VideoUploadComponent.prototype.cat_nametypeChanged = function (cat_id) {
        var _this = this;
        this.SpinnerService.show();
        this.sub_category = true;
        // console.log(cat_id, "hvs");
        this.selectedcat_nametype = this.tabs[cat_id.index].cat_id;
        // this.selectedcat_nametype = cat_id.value;
        var payload = {
            cat_id: this.selectedcat_nametype
        };
        // console.log(this.tabs, "cghhjv")
        this.service.getvideos(payload).
            subscribe(function (response) {
            // console.log(response['video'], "sub_name");
            if (response.length != 0) {
                _this.showsubcategory = true;
                _this.sub_namesReference = (response);
                _this.sub_namesReference.forEach(function (data, index) {
                    // console.log(data.video.length,"novideos")
                    if (data.video.length != 0) {
                        _this.shownovideo = false;
                    }
                    else {
                        _this.shownovideo = true;
                    }
                });
                // console.log(this.sub_namesReference, "resuuuuuu");
            }
            else {
                _this.showsubcategory = false;
                _this.shownovideo = false;
            }
            _this.SpinnerService.hide();
            // let subName = response.filter(sub => sub.cat_id === this.selectedcat_nametype);
        });
    };
    // isReadMore(title: string) {
    //   this.dataLength = !(title.length > 100)
    // }
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
    function VideoUploadDialog(formBuilder, service, Service, data, toasterService, http) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.Service = Service;
        this.data = data;
        this.toasterService = toasterService;
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
        this.form = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    VideoUploadDialog.prototype.ngOnInit = function () {
        var _this = this;
        var payload = {};
        this.Service.getcat_name(payload).
            subscribe(function (response) {
            // console.log(response, "cat_name");
            _this.cat_namesReference = response;
        });
    };
    VideoUploadDialog.prototype.cat_nametypeChanged = function (cat_id) {
        var _this = this;
        // console.log(cat_id, "hdhjsvhj");
        this.selectedcat_nametype = cat_id.value;
        var payload = {
            cat_id: this.selectedcat_nametype
        };
        // console.log(this.selectedcat_nametype, "payloadpayload");
        this.service.getsub_name(payload).
            subscribe(function (response) {
            // console.log(response, "sub_name");
            var subName = response.filter(function (sub) { return sub.cat_id === cat_id.value; });
            _this.sub_namesReference = subName;
            // console.log(subName, "resuuuuuu");
        });
    };
    VideoUploadDialog.prototype.sub_nametypeChanged = function (sub_id) {
        // console.log(sub_id, "vsdghvd");
        this.selectedsub_nametype = sub_id.value;
    };
    VideoUploadDialog.prototype.onFileChange = function (event) {
        this.uploadedvideoFiles = event.target.files;
        // console.log(this.uploadedvideoFiles, "fftyf")
    };
    VideoUploadDialog.prototype.onImageChange = function (event) {
        this.uploadedImageFiles = event.target.files;
        // console.log(this.uploadedImageFiles)
    };
    VideoUploadDialog.prototype.onSubmit = function () {
        // console.log(this.form.value);
        var _this = this;
        var formData = new FormData();
        // console.log(this.cat_namesReference, "bhhjd");
        // console.log(this.sub_namesReference, "bhhjd");
        // console.log(this.selectedcat_nametype, "cjdh");
        // console.log(this.selectedsub_nametype, "cjdh");
        // for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads", this.uploadedvideoFiles[0], this.uploadedvideoFiles[0].name);
        formData.append("images", this.uploadedImageFiles[0], this.uploadedImageFiles[0].name);
        formData.append("title", this.form.get('title').value);
        formData.append("description", this.form.get('description').value);
        formData.append("author", this.form.get('author').value);
        formData.append("cat_id", this.selectedcat_nametype);
        formData.append("sub_id", this.selectedsub_nametype);
        // console.log(this.data.globalurl,"hjhjhjhjhjh");
        this.http.post('https://beta.vicflix.com/upload', formData, {
            reportProgress: true,
            observe: 'events',
        })
            .subscribe(function (events) {
            if (events.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                _this.progress = Math.round(events.loaded / events.total * 100);
                // console.log('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
                var payload = {};
                _this.Service.getcat_name(payload);
            }
            else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response) {
                // console.log(HttpEventType.Response, "HttpEventType.Response");
                // console.log(events);
                window.location = events.body.url;
            }
        });
    };
    VideoUploadDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-dialog',
            template: __webpack_require__(/*! raw-loader!./video-upload-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-upload-dialog.html"),
            styles: [__webpack_require__(/*! ./video-upload.component.scss */ "./src/app/video-upload/video-upload.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _video_upload_video_upload_service__WEBPACK_IMPORTED_MODULE_3__["VideoUploadService"],
            app_city_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"], Object, angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"],
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

module.exports = __webpack_require__(/*! C:\Users\waseem\Desktop\betavicflix\online-video-stream-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map