(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<toaster-container [toasterconfig]=\"toasterConfig\"></toaster-container>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/city/add-city-dialog.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/city/add-city-dialog.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{dialogTitle}}</h1>\n<div mat-dialog-content>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <mat-form-field>\n                <mat-label>Select_Main_Category</mat-label>\n                <mat-select [(value)]=\"selectedroletype\" (selectionChange)=\"roletypeChanged($event)\">\n                    <mat-option *ngFor=\"let role of rolesReference\" [value]=\"role.cat_id\">\n                        {{role.cat_name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <mat-form-field>\n                <input matInput placeholder=\"SubCategory_name\" [(ngModel)]=\"sub_name\" type=\"text\">\n            </mat-form-field>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"save_city_btn\"\n                (click)=\"saveCity()\">Save</button>\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"update_city_btn\"\n                (click)=\"updateCity()\">Update</button>\n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/city/city.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/city/city.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-12 col-md-6 \">\n                                <button type=\"button\" class=\"btn btn-default bg-info pull-right m-3\"\n                                    (click)=\"adduser()\">Add\n                                    Category</button>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <h5 class=\"card-title \">Category Level-2</h5>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"sub_id\">\n                            <th mat-header-cell *matHeaderCellDef> Id </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.sub_id}} </td>\n                        </ng-container>\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"sub_name\">\n                            <th mat-header-cell *matHeaderCellDef> SubCategories Name</th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.sub_name}} </td>\n                        </ng-container>\n\n                        <!-- Role Column -->\n                        <ng-container matColumnDef=\"cat_name\">\n                            <th mat-header-cell *matHeaderCellDef> Main Category Name</th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.cat_name}} </td>\n                        </ng-container>\n\n\n                        <ng-container matColumnDef=\"action\">\n                            <th mat-header-cell *matHeaderCellDef>Actions </th>\n                            <td mat-cell *matCellDef=\"let row\">\n                                <!-- <button mat-raised-button color=\"primary\" (click)=\"edit_low(row)\"> -->\n                                <a (click)=\"edit_low(row) \" style=\"color:blue; cursor:pointer;\">\n                                    <mat-icon aria-label=\"Edit\">edit</mat-icon>\n                                </a>\n                                <!-- <a href=\"\" (click)=\"edit_low(row)\"> <mat-icon aria-label=\"Edit\">edit</mat-icon></a> -->\n                                <!-- <mat-icon>edit</mat-icon>\n                                </button> -->\n                                <!-- <button mat-raised-button class=\"iconbutton\" (click)=\"delete_low(row)\" color=\"warn\"> -->\n                                <a (click)=\"delete_low(row)\" style=\"color:red; cursor:pointer;\">\n                                    <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                                </a>\n                                <!-- <mat-icon>delete</mat-icon>\n                                </button> -->\n                                <!-- </td> -->\n                        </ng-container>\n\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/city/delete-city-dialog.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/city/delete-city-dialog.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete City</h1>\n<div mat-dialog-content>\n    \n    <div class=\"row\">\n        <div class=\"col-md-12\">\n           <p>Are you sure you want to Delete ? </p>\n       </div>\n    </div>\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" [disabled]=\"delete_btn\" (click)=\"deletecity()\">Confirm</button>       \n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://creative-tim.com/about-us\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a ng-click=\"redirectPage()\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n    </div>\n</footer> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/manage-categories/manage-categories.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/manage-categories/manage-categories.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  manage-categories works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/logout/logout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/logout/logout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{header}}</h1>\n<div mat-dialog-content>\n<div class=\"row\">\n<div class=\"col-md-12\">\n<p>Are you sure you want to Logout ? </p>\n</div>\n</div>\n<div class=\"row\">\n<div class=\"col-md-12\">\n<button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\"(click)=\"dashboard()\">Confirm</button>\n<button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\" style=\"background-color: #1f467f !important; color: white;\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\" style=\"font-size:16px ;font-weight:300;\">{{getTitle()}}</a>\n        </div>\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <!-- <form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div> \n            </form>-->\n            <ul class=\"navbar-nav\">\n                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <!-- <i class=\"material-icons\">dashboard</i> -->\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\n                        </p>\n                    </a>\n                </li>\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item\" style=\"font-size: 16px; font-size: 300;\">{{getWelComeMessage()}}\n                        \n                    </li>\n                </ul>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" (click)=\"openPopUp(filterForm.value, true)\">\n                        <i class=\"material-icons\">power_settings_new</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Account</span>\n                        </p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"/#/dashboard\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/VICFLEXLogo.png\" />\n        </div>\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <div *ngIf=\"isMobileMenu()\">\n        <form class=\"navbar-form\">\n            <span class=\"bmd-form-group\">\n            </span>\n        </form>\n    </div>\n    <mat-sidenav #sidenav class=\"example-sidenav\" mode=\"side\" opened=\"true\" (mouseenter)=\"mouseenter()\"\n        (mouseleave)=\"mouseleave()\">\n        <mat-nav-list *ngIf=\"admin_list\">\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\n                <mat-icon mat-list-icon class=\"font-c\">dashboard</mat-icon>\n                <a class=\"full-width font-c\" [routerLink]=\"['/dashboard']\" mat-list-item>Analytics</a>\n            </mat-list-item>\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\n                <mat-icon mat-list-icon class=\"font-c\">cloud_upload</mat-icon>\n                <a class=\"full-width font-c\" [routerLink]=\"['/video-upload']\" mat-list-item>Videos</a>\n            </mat-list-item>\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\n                <mat-icon mat-list-icon class=\"font-c\">person</mat-icon>\n                <a class=\"full-width font-c\" [routerLink]=\"['/portal-users']\" mat-list-item>Portal-Users</a>\n            </mat-list-item>\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\n                <mat-icon mat-list-icon class=\"font-c\">portrait</mat-icon>\n                <a class=\"full-width font-c\" [routerLink]=\"['/mobile-users']\" mat-list-item>Mobile-Users</a>\n            </mat-list-item>\n            <!-- <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\"> -->\n                <!-- <span class=\"full-width\" *ngIf=\"isExpanded || isShowing\">Dashboard Menu</span> -->\n                <!-- <mat-icon mat-list-icon class=\"font-c\">settings</mat-icon>\n                <a class=\"full-width font-c\" [routerLink]=\"['/default-settings']\" mat-list-item>Default-Settings</a>\n            </mat-list-item> -->\n            <mat-list-item (click)=\"showSubmenu = !showSubmenu\" class=\"parent\" [routerLinkActive]=\"['is-active']\">\n                <span class=\"full-width font-c\" style=\"padding-left:6%\" *ngIf=\"isExpanded || isShowing\">Manage\n                    Categories</span>\n                <mat-icon mat-list-icon class=\"font-c\">list</mat-icon>\n                <mat-icon class=\"menu-button font-c\" [ngClass]=\"{'rotated' : showSubmenu}\" *ngIf=\"isExpanded || isShowing\">\n                    expand_more</mat-icon>\n            </mat-list-item>\n            <div class=\"submenu\" [ngClass]=\"{'expanded' : showSubmenu}\" *ngIf=\"isShowing || isExpanded\" >\n                <a mat-list-item class=\"font-c p-right parent\" style=\"padding: 0% 0% 0% 19%;\"\n                 [routerLink]=\"['/state']\">Category</a>\n                <a mat-list-item class=\"font-c p-right parent\" style=\" padding: 0% 0% 0% 19%;\"\n                 [routerLink]=\"['/city']\">Sub Category</a>\n            </div>\n        </mat-nav-list>\n        <mat-nav-list *ngIf=\"uploader\">\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\n                <mat-icon mat-list-icon class=\"font-c\">dashboard</mat-icon>\n                <a class=\"full-width font-c\" [routerLink]=\"['/dashboard']\" mat-list-item>Dashboard</a>\n            </mat-list-item>\n            <mat-list-item class=\"parent\" [routerLinkActive]=\"['is-active']\">\n                <mat-icon mat-list-icon class=\"font-c\">cloud_upload</mat-icon>\n                <a class=\"full-width font-c\" [routerLink]=\"['/video-upload']\" mat-list-item>Video Upload</a>\n            </mat-list-item>\n\n        </mat-nav-list>\n        <mat-nav-list>\n        </mat-nav-list>\n    </mat-sidenav>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\" style=\"margin: -62px;\">\n    <div class=\"col-md-4 offset-md-4\">\n      <div class=\"logo\">\n        <img src=\"/assets/img/VICFLEXLogo.png\" style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\"/>\n        <div class=\"vl\">\n        </div>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video Streaming</h6>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal Management</h6>\n      </div>\n            <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%; height:300px\">\n              <mat-card-content>\n                <div class=\"text-center pb-1\">\n                  <h5 class=\"text-dark1\">Please check your e-mail\n                  </h5>\n                  <h5 class=\"text-dark2\">and click on the link to\n                  </h5>\n                  <h5 class=\"text-dark3\">reset the password.\n                  </h5>\n                </div>\n                <div class=\"text-center pb-1\">\n                  <button mat-raised-button class=\"mat-primary full-width mb-1 \" style=\"width: 40%;border-radius: 0px;margin-top: 12%; background: #1f467f;color: #dae8f7;\">\n                    <a href=\"https://beta.vicflix.com/dashboard\" style=\"color: #dae8f7;\">Sign in</a>\n                  </button>\n                </div>\n              </mat-card-content>\n            </mat-card>\n    </div>\n  </div>\n</div>\n<footer class=\"footer\" style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\n    <nav>\n        <ul>\n            <li>\n                <a href=\"https://beta.vicflix.com\">\n                  @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\n                </a>\n            </li>\n        </ul>\n    </nav>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <!-- <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div> -->\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n    <!-- <div class=\"fixed-plugin\">\n         <div class=\"dropdown show-dropdown open show\">\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <i class=\"fa fa-cog fa-2x\"> </i>\n            </a>  -->\n            <!-- <ul class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\n                <li class=\"header-title\"> Sidebar Filters</li>\n                <li class=\"adjustments-line\">\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <div class=\"ml-auto mr-auto\">\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li class=\"header-title\">Images</li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"active\">\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Download Free\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Buy Pro\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\n                  <div>\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\n                        View Documentation\n                    </a>\n                  </div>\n                </li>\n            </ul> \n        </div> \n    </div>\n</div> -->\n<!-- Buy-Modal-angular -->\n<!-- <div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"margin-top\">\n                Free Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container\">\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                    </div>\n                    Html5\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container image-angular-cli\">\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                    </div>\n                    Angular\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <h4>\n                PRO Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container\">\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                </div>\n                Html5\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        49\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container image-angular-cli\">\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                </div>\n                Angular\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        59\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/forgot-password-dialog.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/forgot-password-dialog.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Enter your email</h1>\n<div mat-dialog-content>\n    \n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <mat-form-field>\n                <input matInput placeholder=\"Enter your email\" [(ngModel)]=\"email\" type=\"email\">\n            </mat-form-field>\n       </div>\n    </div>\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" (click)=\"check_email()\">Confirm</button> \n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button> \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\" style=\"margin: -62px;\">\n    <div class=\"col-md-4 offset-md-4\">\n      <div class=\"logo\">\n        <img src=\"/assets/img/VICFLEXLogo.png\" style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\"/>\n        <div class=\"vl\">\n        </div>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video Streaming</h6>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal Management</h6>\n      </div>\n      <!-- <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\n        <div class=\"page-wrap height-100 mat-bg-primary\">\n          <div class=\"session-form-hold\"> -->\n            <!-- <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar> -->\n            <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%;\">\n              <mat-card-content>\n                <div class=\"text-center pb-1\">\n                  <!-- <img src=\"assets/images/herdman_logo.png\" alt=\"\" class=\"mb-05\"> -->\n                  <h4 class=\"text-dark\">Admin / Manager Login</h4>\n                </div>\n                <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\n                  <div class=\"\">\n                    <mat-form-field class=\"example-full-width\" style=\"padding: 0% 11%;\">\n                      <input matInput name=\"email\" [(ngModel)]=\"email\" [formControl]=\"signinForm.controls['email']\"\n                        placeholder=\"Email*\" value=\"\">\n                    </mat-form-field>\n                    <mat-error style=\"padding-left: 11%;\"\n                      *ngIf=\"signinForm.controls['email'].hasError('required') && signinForm.controls['email'].touched\"\n                      class=\"form-error-msg\"> Email is required\n                    </mat-error>\n                  </div>\n\n                  <div class=\"\">\n                    <mat-form-field class=\"example-full-width\" style=\"padding: 0% 11%;\">\n                      <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" matInput\n                        [formControl]=\"signinForm.controls['password']\" placeholder=\"Password*\" value=\"\">\n                    </mat-form-field>\n\n                    <!-- <small -->\n                    <mat-error style=\"padding-left: 11%;\"\n                      *ngIf=\"signinForm.controls['password'].hasError('required') && signinForm.controls['password'].touched\"\n                      class=\"form-error-msg red-color\"> Password is required </mat-error>\n                    <!-- </small> -->\n                  </div>\n\n                  <div class=\"text-center pb-1\">\n                    <button mat-raised-button class=\"mat-primary full-width mb-1 \" style=\"width: 40%;border-radius: 0px;background: #1f467f;color: #dae8f7;\">\n                      Sign in\n                    </button>\n                  </div>\n                </form>\n              </mat-card-content>\n              <mat-card-footer>\n                <div class=\"stats cursor_show\" (click)=\"open_forgot_dialog()\">\n                  <p class=\"mat-primary text-center full-width\" style=\"color:#1c3d76;overflow:hidden; cursor:pointer\">Forgot password\n                  </p>\n                </div>\n              </mat-card-footer>\n            </mat-card>\n    </div>\n  </div>\n</div>\n<footer class=\"footer\" style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\n    <nav>\n        <ul>\n            <li>\n                <a href=\"https://beta.vicflix.com\">\n                  @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\n                </a>\n            </li>\n        </ul>\n    </nav>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portal-users/add-user-dialog.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portal-users/add-user-dialog.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n<h1 mat-dialog-title>{{dialogTitle}}</h1>\n<div mat-dialog-content>\n            <div class=\"row\">\n               <div class=\"col-md-12\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Name\" [(ngModel)]=\"name\" type=\"text\">\n                        <!-- <mat-error>This field is mandatory.</mat-error> -->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Email\" [disabled]=\"editmode\" (focusout)=\"focusOutemail()\" [(ngModel)]=\"email\" type=\"email\" >\n                        <!-- <mat-error>This field is mandatory.</mat-error> -->\n                    </mat-form-field>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                     <mat-form-field>\n                         <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"mobile\" type=\"number\" >\n                         <!-- <mat-error>This field is mandatory.</mat-error> -->\n                     </mat-form-field>\n                 </div>\n             </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <mat-form-field>\n                        <mat-label>Role Type</mat-label>\n                        <mat-select [(value)]=\"selectedroletype\" (selectionChange)=\"roletypeChanged($event)\">\n                          <mat-option *ngFor=\"let role of rolesReference\" [value]=\"role.id\" >\n                            {{role.role}}\n                          </mat-option>\n                          <!-- <mat-error>This field is mandatory.</mat-error>  -->\n                        </mat-select>\n                    </mat-form-field>\n            </div>\n        </div>\n            <!-- <div class=\"row\">\n                <div class=\"col-md-12 asterisk_input\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Mobile\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"mobile\" type=\"text\" maxlength=\"12\">\n                    </mat-form-field>\n                </div>\n            </div> -->\n            <!-- <div class=\"row\">\n                <div class=\"col-md-12 asterisk_input\">\n                  \n                </div>  <app-reference-data-selector  [placeholder]=\"roleLabel\" [default-value]=\"selectedrole\" [options]=\"rolesReference\" (chosen-value)=\"roleChanged($event)\"></app-reference-data-selector>\n            </div> -->\n          \n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"save_user_btn\" (click)=\"saveUser()\">Save</button>\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"update_user_btn\" (click)=\"updateUser()\">Update</button>        \n                    <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \n                </div>\n            </div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portal-users/delete-user-dialog.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portal-users/delete-user-dialog.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete User</h1>\n<div mat-dialog-content>\n    \n    <div class=\"row\">\n        <div class=\"col-md-12\">\n           <p>Are you sure you want to Delete ? </p>\n       </div>\n    </div>\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" [disabled]=\"delete_btn\" (click)=\"delete()\">Confirm</button>       \n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portal-users/portal-users.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portal-users/portal-users.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-12 col-md-6 \">\n                                <button type=\"button\" class=\"btn btn-default bg-info pull-right m-3\"\n                                    (click)=\"addUser()\">Add New\n                                    User</button>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <h4 class=\"card-title \">Portal Users</h4>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"id\">\n                            <th mat-header-cell *matHeaderCellDef> Id </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n                        </ng-container>\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"name\">\n                            <th mat-header-cell *matHeaderCellDef> Name </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n                        </ng-container>\n\n                        <!-- Email Column -->\n                        <ng-container matColumnDef=\"email\">\n                            <th mat-header-cell *matHeaderCellDef> Email </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n                        </ng-container>\n\n                        <!-- Mobile number Column -->\n                        <ng-container matColumnDef=\"mobile\">\n                            <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.mobile}} </td>\n                        </ng-container>\n\n                        <!-- Role Column -->\n                        <ng-container matColumnDef=\"role\">\n                            <th mat-header-cell *matHeaderCellDef> Permission </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.role}} </td>\n                        </ng-container>\n\n                        <!-- Action Column -->\n                        <ng-container matColumnDef=\"action\">\n                            <th mat-header-cell *matHeaderCellDef>Actions </th>\n                            <td mat-cell *matCellDef=\"let row\">{{row.action}}\n                                <!-- <button mat-raised-button color=\"primary\" (click)=\"edit_low(row)\"> -->\n                                <a (click)=\"edit_low(row) \" style=\"color:blue; cursor:pointer;\">\n                                    <mat-icon aria-label=\"Edit\">edit</mat-icon>\n                                </a>\n                                <!-- <mat-icon>edit</mat-icon>\n                                </button> -->\n                                <!-- <button mat-raised-button class=\"iconbutton\" (click)=\"delete_low(row)\" color=\"warn\"> -->\n                                <a (click)=\"delete_low(row)\" style=\"color:red; cursor:pointer;\">\n                                    <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                                </a>\n                                <!-- <mat-icon>delete</mat-icon>\n                                </button> -->\n\n                                <!-- Default disabled -->\n                                <mat-slide-toggle [checked]=\"row.status\"  [color]=\"color\" (change)=\"toggle(row,$event)\"></mat-slide-toggle>\n                                </td>\n                        </ng-container>\n\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reset-password/reset-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"margin: -62px;\">\n    <div class=\"col-md-4 offset-md-4\">\n      <div class=\"logo\">\n        <img src=\"/assets/img/VICFLEXLogo.png\"\n          style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\" />\n        <div class=\"vl\">\n        </div>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video\n          Streaming</h6>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal\n          Management</h6>\n      </div>\n      <!-- <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\n        <div class=\"page-wrap height-100 mat-bg-primary\">\n          <div class=\"session-form-hold\"> -->\n      <!-- <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar> -->\n      <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%; height:300px\">\n        <mat-card-content>\n          <div class=\"text-center pb-1\">\n            <h5 class=\"text-dark\">Reset Password Here</h5>\n          </div>\n          <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <p>Email: {{email}}</p>\n            <mat-form-field>\n              <input matInput placeholder=\"New password\" formControlName=\"password\" required type=\"password\">\n              <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\n                Please enter Password\n              </mat-error>\n              <mat-error *ngIf=\"password.hasError('required')\">\n                Password is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\n                [errorStateMatcher]=\"matcher\" type=\"password\">\n              <mat-error *ngIf=\"myForm.hasError('notSame')\">\n                Passwords do not match\n              </mat-error>\n            </mat-form-field>\n            <div class=\"text-center pb-1\">\n              <button class=\"btn btn-info pull-right\" type=\"submit\">Reset</button>\n              <a routerLink=\"/\">\n                <button mat-button class=\"btn pull-right\" mat-dialog-close>Cancel</button>\n              </a>\n            </div>\n          </form>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n<footer class=\"footer\"\n  style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\n    <nav>\n      <ul>\n        <li>\n          <a href=\"https://beta.vicflix.com\">\n            @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</footer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <div class=\"container\">\n  <div class=\"row\" style=\"margin: -62px;\">\n    <div class=\"col-md-4 offset-md-4\">\n      <div class=\"logo\">\n        <img src=\"/assets/img/VICFLEXLogo.png\" style=\"justify-content: center;overflow:hidden;width:39%;margin: 3% 4%;\"/>\n        <div class=\"vl\">\n        </div>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-16% 44.5%;font-weight: 400;\">An Online</h6>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-11.5% 44.5%;font-weight: 400;\">Video Streaming</h6>\n        <h6 style=\"position:absolute; overflow:hidden; width: 100%; margin:-7% 44.5%;font-weight: 400;\">Portal Management</h6>\n      </div> -->\n<!-- <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\n        <div class=\"page-wrap height-100 mat-bg-primary\">\n          <div class=\"session-form-hold\"> -->\n<!-- <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar> -->\n<!-- <mat-card style=\"border-radius:0px;width: 92%;margin-left: 4%; height:85%\">\n  <mat-card-content>\n    <div class=\"text-center pb-1\"> -->\n      <!-- <img src=\"assets/images/herdman_logo.png\" alt=\"\" class=\"mb-05\"> -->\n      <!-- <h4 class=\"text-dark\">Reset Password Here</h4>\n                </div>\n                <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                  <p>Email: {{email}}</p>\n                  <mat-form-field>\n                    <input matInput placeholder=\"New password\" formControlName=\"password\" required type=\"password\">\n                    <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\n                      Please enter Password\n                    </mat-error> -->\n      <!-- <mat-error *ngIf=\"password.hasError('required')\">\n                      Password is <strong>required</strong>\n                    </mat-error> -->\n      <!-- </mat-form-field>\n\n                  <mat-form-field>\n                    <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\n                      [errorStateMatcher]=\"matcher\" type=\"password\">\n                    <mat-error *ngIf=\"myForm.hasError('notSame')\">\n                      Passwords do not match\n                    </mat-error>\n                  </mat-form-field> -->\n      <!-- <div class=\"\">\n                    <input matInput placeholder=\"New password\" formControlName=\"password\" required type=\"password\">\n                    <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\n                      Please enter Password\n                    </mat-error>\n                    <mat-error *ngIf=\"password.hasError('required')\">\n                      Password is <strong>required</strong>\n                    </mat-error>\n                  </div>\n\n                  <div class=\"\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\n                        [errorStateMatcher]=\"matcher\" type=\"password\">\n                      <mat-error *ngIf=\"myForm.hasError('notSame')\">\n                        Passwords do not match\n                      </mat-error>\n                    </mat-form-field>\n                  </div> -->\n      <!-- \n                  <button class=\"btn btn-info pull-right\" type=\"submit\">Reset</button>\n                    <a routerLink=\"/\">\n                      <button mat-button class=\"btn pull-right\" mat-dialog-close>Cancel</button>\n                    </a>\n                </form>\n              </mat-card-content>\n            </mat-card>\n    </div>\n  </div>\n</div>\n<footer class=\"footer\" style=\"position: absolute;z-index: 2;bottom: 0%;width: 100%; overflow: hidden;height: 10%; background-color: #1f467f;\">\n  <div class=\"container-fluid\" style=\"color:#dae8f7;font-weight:400;font-size:12px;\">\n    <nav>\n        <ul>\n            <li>\n                <a href=\"https://beta.vicflix.com\">\n                  @Copyright 2020 Nova Nordisk India Pvt.Ltd. All rights reserved.\n                </a>\n            </li>\n        </ul>\n    </nav>\n  </div>\n</footer> -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      <!-- <div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card card-chart col-md-4\" style=\"margin-left: auto; margin-right:auto\">\n          <div class=\"card-header\">\n            <div class=\"ct-chart\" id=\"dailySalesChart\">\n              <h3 class=\"card-title\">Reset Password</h3>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-9\">\n                <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                  <p>Email: {{email}}</p>\n                  <mat-form-field>\n                    <input matInput placeholder=\"New password\" formControlName=\"password\" required type=\"password\">\n                    <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\n                      Please enter Password\n                    </mat-error>\n                    <mat-error *ngIf=\"password.hasError('required')\">\n                      Password is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n\n                  <mat-form-field>\n                    <input matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\n                      [errorStateMatcher]=\"matcher\" type=\"password\">\n                    <mat-error *ngIf=\"myForm.hasError('notSame')\">\n                      Passwords do not match\n                    </mat-error>\n                  </mat-form-field>\n                  <div class=\"col-md-12\">\n\n                    <button class=\"btn btn-info pull-right\" type=\"submit\">Reset</button>\n                    <a routerLink=\"/\">\n                      <button mat-button class=\"btn pull-right\" mat-dialog-close>Cancel</button>\n                    </a>\n                  </div>\n                </form>\n\n              </div>\n            </div>\n\n          </div> -->\n      <!-- <div class=\"card-footer\">\n          <div class=\"stats\">\n              <i class=\"material-icons\">contact_support</i> Forgot password\n          </div>\n      </div> \n        </div>\n      </div>\n    </div>\n  </div>\n</div>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/state/add-state-dialog.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/state/add-state-dialog.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{dialogTitle}}</h1>\n<div mat-dialog-content>\n\n\n            <div class=\"row\">\n               <div class=\"col-md-12\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"category_name\" [(ngModel)]=\"cat_name\" type=\"text\">\n                    </mat-form-field>\n                </div>\n            </div>\n            \n          \n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"save_state_btn\" (click)=\"saveState()\">Save</button>\n                    <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" *ngIf=\"update_state_btn\" (click)=\"updateState()\">Update</button>        \n                    <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \n                </div>\n            </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/state/delete-state-dialog.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/state/delete-state-dialog.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete User</h1>\n<div mat-dialog-content>\n    \n    <div class=\"row\">\n        <div class=\"col-md-12\">\n           <p>Are you sure you want to Delete ? </p>\n       </div>\n    </div>\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" [disabled]=\"delete_btn\" (click)=\"deletestate()\">Confirm</button>       \n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/state/state.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/state/state.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-12 col-md-6 \">\n                                <button type=\"button\" class=\"btn btn-default bg-info pull-right m-3\"\n                                    (click)=\"adduser()\">Add\n                                    Category</button>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                        <h5 class=\"card-title\">Category Level-1</h5>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"cat_id\">\n                            <th mat-header-cell *matHeaderCellDef> Id </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.cat_id}} </td>\n                        </ng-container>\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"cat_name\">\n                            <th mat-header-cell *matHeaderCellDef> Name </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.cat_name}} </td>\n                        </ng-container>\n                        <!-- Action Column -->\n                        <ng-container matColumnDef=\"action\">\n                            <th mat-header-cell *matHeaderCellDef>Actions </th>\n                            <td mat-cell *matCellDef=\"let row\">\n                                <a (click)=\"edit_low(row) \" style=\"color:blue; cursor:pointer;\">\n                                    <mat-icon aria-label=\"Edit\">edit</mat-icon>\n                                </a>\n                                <a (click)=\"delete_low(row)\" style=\"color:red; cursor:pointer;\">\n                                    <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                                </a>\n                        </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/delete-dialog/delete-dialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/delete-dialog/delete-dialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete Video</h1>\n<div mat-dialog-content>\n    \n    <div class=\"row\">\n        <div class=\"col-md-12\">\n           <p>Are you sure you want to Delete ? </p>\n       </div>\n    </div>\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n            <button type=\"button\" class=\"btn btn-default bg-success pull-right m-3\" (click)=\"delete()\">Confirm</button>       \n            <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>   \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-dialog/video-dialog.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/video-dialog/video-dialog.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:relative;\"> \n  <button mat-button class=\"close-icon\" [mat-dialog-close]=\"true\">\n    <mat-icon>close</mat-icon>\n</button>\n<!-- \n<mat-video title=\"Cattle Video\" [autoplay]=\"true\" [preload]=\"true\" [fullscreen]=\"true\" [download]=\"false\" color=\"accent\" spinner=\"spin\" width=\"320\" height=\"240\" poster=\"image.jpg\">\n  <source matVideoSource [src]=\"src_video\"  type=\"video/mp4\">\n</mat-video>\n  \n</div> -->\n<!-- <iframe [class.thumbnail]=\"thumbnail\" [src]=\"src_video\" width=\"560\" height=\"315\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen\n      allowfullscreen></iframe> -->\n  <div class=\"row\" style=\"padding: 2% 3% 0% 3%;\">\n    <iframe width=\"560\" height=\"315\" [src]=\"src_video\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  </div><div class=\"row mtop content_padding\" style=\"width:550px;padding-top:3%;\">\n    <div class=\"col-md-2\" style=\"padding:0%;\">\n      <mat-label >Title : </mat-label>\n    </div>\n    <div class=\"col-md-10\" style=\"padding:0%;\">\n      <p class=\"margin_p\" style=\"text-align: justify;\">&nbsp;{{video_title}}</p>\n    </div>\n    \n  </div>\n  <div class=\"row content_padding\" style=\"width:550px;\">\n    <div class=\"col-md-2\" style=\"padding:0%;\">\n      <mat-label>Description : </mat-label>\n    </div>\n    <div class=\"col-md-10\" style=\"padding:0%;\">\n      <p class=\"margin_p\" style=\"text-align: justify;\">&nbsp;{{video_description}}</p>\n    </div>\n\n\n  \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/video-edit-dialog/video-edit-dialog.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:relative;\">\n  <button mat-button class=\"close-icon\" [mat-dialog-close]=\"true\">\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n\n\n<form action=\"api/upload\" method=\"post\" enctype=\"multipart/form-data\" [formGroup]=\"form\">\n  <div class=\"row\" style=\"margin-top:4%;\">\n    <div class=\"col-md-5\" style=\"padding: left 3%;\">\n      <div clss=\"row\">\n        <img style=\"width: 100%;\" [src]=\"thumbnail_src\">\n        <!-- <label class=\"custom-file-upload\" *ngIf=\"canEditCode\" >\n          Upload Thumbnail Here\n          <th><input type=\"file\" name=\"image\" fileread=\"image\" accept=\".jpg,.png\" (change)=\"onImageChange($event)\">\n          </th>\n        </label> -->\n      </div>\n      <div class=\"row\" style=\"justify-content: center;\">\n        <div class=\"fileUpload btn btn-default bg-success pull-right m-3\" style=\"border-radius: 2.5rem;padding: 15px 50px; background: #1f467f !important;\"  *ngIf=\"canEditCode\">\n          <span>Browse</span>\n          <input type=\"file\" class=\"upload\" fileread=\"image\" accept=\".jpg,.png\" (change)=\"onImageChange($event)\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md-8\" style=\"padding-left: 3%; padding-bottom: 1%;\">\n          <h6 *ngIf=\"!canEditCode\" style=\"float: left; margin-bottom: 0px;\"> {{video_title}}</h6>\n          <mat-form-field class=\"example-full-width\" *ngIf=\"canEditCode\">\n            <mat-label>Title</mat-label>\n            <input matInput formControlName=\"Title\"  placeholder=\"Title\" >\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-4\" align=\"center\" style=\"position:absolute;right:4%;\">\n          <a (click)=\"edit_low() \" style=\"color:blue; cursor:pointer;\">\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\n          </a>\n          \n          <a (click)=\"delete_low()\" style=\"color:red; cursor:pointer;\">\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\n          </a>\n        </div>\n      </div>\n      <hr  class=\"middleline\" *ngIf=\"nohrline\">\n      <div class=\"row\">\n        <p *ngIf=\"!canEditCode\" style=\"padding-left: 3%; font-size:15px\">{{video_description}}</p>\n        <mat-form-field class=\"example-full-width\" style=\"padding-left: 3%;\" *ngIf=\"canEditCode\">\n          <mat-label>Description</mat-label>\n          <textarea matInput rows=\"4\" formControlName=\"Description\" cols=\"70\"  placeholder=\"Description\"></textarea>\n        </mat-form-field>\n      </div>\n      <!-- <div class=\"row\">\n        <div class=\"col-md-3\" style=\"padding-left:0px !important;\">\n          <h5 style=\"float: left;\">Tag :</h5>\n        </div>\n        <div class=\"col-md-6\">\n          <h5 style=\"float:right;\">Launguage :</h5>\n        </div>\n      </div> -->\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"!canEditCode\">\n    <div class=\"col-md-5\">\n\n    </div>\n    <div class=\"col-md-7\" style=\"padding-left:0px !important;\">\n      <h6>{{video_title}} Video Statistics</h6>\n      <hr>\n      <div class=\"row\">\n        <!-- <div class=\"col-md-4\">\n          <p class=\"font_p\">Total Views: </p>\n        </div> -->\n        <div class=\"col-md-4\">\n          <p class=\"font_p\">Total Likes : {{likes}} </p>\n        </div>\n        <div class=\"col-md-4\">\n          <p class=\"font_p\">Total Dislikes : {{dislikes}}</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <!-- <div class=\"col-md-4\"></div> -->\n        <div class=\"col-md-4\">\n          <p class=\"font_p\">Total Shares : {{shares_video}}</p>\n        </div>\n        <div class=\"col-md-4\">\n          <p class=\"font_p\">Total Views : {{views}}</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\" *ngIf=\"canEditCode\" style=\"justify-content: flex-end;\">\n    <button type=\"button\" style=\"float:right;\" class=\"btn btn-default bg-danger pull-right m-3\"\n      (click)=\"cancel()\">Cancel\n      </button>\n    <button type=\"button\" style=\"float:right;\" class=\"btn btn-default bg-success pull-right m-3\"\n    (click)=\"update()\">Update</button>\n  </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-upload-dialog.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/video-upload-dialog.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n<div class=\"col-md-12\">\n<!-- <h1 mat-dialog-title>{{dialogTitle}}</h1> -->\n<div mat-dialog-content>\n  <h4 class=\"upload\">Upload your Video!</h4>\n  <div class=\"progress form-group\" *ngIf=\"progress > 0\">\n    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width.%]=\"progress\">\n    </div>\n  </div>\n  <form action=\"api/upload\" method=\"post\" enctype=\"multipart/form-data\" [formGroup]=\"form\">\n    <div class=\"file-field md-form\">\n      <label class=\"custom-file-upload\">\n        Upload Video Here\n        <td><input type=\"file\" name=\"video\" fileread=\"video\" accept=\".mp4\" (change)=\"onFileChange($event)\">\n        </td>\n      </label>\n    </div>\n    <div class=\"file-field md-form\">\n      <label class=\"custom-file-upload\">\n        Upload Thumbnail Here\n        <th><input type=\"file\" name=\"image\" fileread=\"image\" accept=\".jpg,.png\" (change)=\"onImageChange($event)\">\n        </th>\n      </label>\n    </div>\n    <mat-form-field>\n      <input formControlName=\"title\" name=\"title\" matInput placeholder=\"Title\" required>\n      <mat-error>This field is mandatory.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <textarea formControlName=\"description\" name=\"description\" matInput placeholder=\"Description\" required></textarea>\n      <mat-error>This field is mandatory.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input formControlName=\"author\" name=\"author\" matInput placeholder=\"Author\" required>\n      <mat-error>This field is mandatory.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Select Category</mat-label>\n      <mat-select (selectionChange)=\"cat_nametypeChanged($event)\" required>\n        <mat-option *ngFor=\"let cat_name of cat_namesReference\" [value]=\"cat_name.cat_id\">\n          {{cat_name.cat_name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Select Category</mat-label>\n      <mat-select (selectionChange)=\"sub_nametypeChanged($event)\" required>\n        <mat-option *ngFor=\"let sub_name of sub_namesReference\" [value]=\"sub_name.sub_id\">\n          {{sub_name.sub_name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <button type=\"submit\" class=\"btn btn-default bg-success  pull-right m-3\" (click)=\"onSubmit() \" color=\"warn\">\n      Upload\n    </button>\n    <button type=\"button\" class=\"btn btn-default bg-danger pull-right m-3\" mat-dialog-close>Cancel</button>\n  </form>\n</div>\n</div>\n  <!--  </div> <input type=\"file\" name=\"video\" (change)=\"onFileChange($event)\" /> \n              <button type=\"submit\">Upload</button>       -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video-upload/video-upload.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video-upload/video-upload.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div style=\"position:relative;\">\n        <div class=\"row add_new_video\">\n            <div class=\"col-lg-12 col-md-6 video_btn\">\n                <button type=\"button\" class=\"btn btn-default bg-Info  pull-right m-3\"\n                    style=\"background-color: #1f467f; border-radius: 2.5rem;\" (click)=\"addUser()\">Add New +\n                </button>\n            </div>\n        </div>\n\n        <mat-tab-group (selectedTabChange)=\"cat_nametypeChanged($event)\">\n            <mat-tab style=\"font-weight: 500; font-size: 18px;\" *ngFor=\"let tab of tabs ; let index = index \"\n                [label]=\"tab.cat_name\">\n                <div class=\"col-12\" *ngFor=\"let sub_name of sub_namesReference\"\n                    style=\"height: 337px;overflow-y: hidden;overflow-x: hidden;position: relative;\">\n                    <h4 style=\"font-size: 16px; font-weight: 400; margin-left: 3.8%;\" *ngIf=\"showsubcategory\">\n                        {{sub_name.sub_name}}</h4>\n                    <hr class=\"middel-line\">\n                    <p *ngIf=\"sub_name.video.length == 0 && showsubcategory\" class=\"title-content\">Videos Not Available\n                    </p>\n                    <ngx-slick-carousel *ngIf=\"showsubcategory\" style=\"padding: 2% 3% 0% 3%; width: 100%;\" class=\"carousel\"\n                        #slickModal=\"slick-carousel\" [config]=\"slideConfig\" (init)=\"slickInit($event)\"\n                        (breakpoint)=\"breakpoint($event)\" (afterChange)=\"afterChange($event)\"\n                        (beforeChange)=\"beforeChange($event)\">\n                        <div ngxSlickItem *ngFor=\"let videos of sub_name.video\" class=\"slide\">\n                            <mat-card class=\"example-card\" style=\"padding: 0% 0% 0% 0%; margin:0px 8px;\">\n                                <div class=\"image_size\" (click)=\"open_video_dialog(videos,true)\"\n                                    style=\"padding: 0% 0% 0% 0%; margin:0px 0px; cursor: pointer; height: 258px;background: white;\">\n                                    <!-- <img class=\"imgwdt\" src=\"../../assets/img/Defaultthumbnail.jpg\"\n                                    s hidden=\"{{videos.thumbLoaded}}\"> -->\n                                    <img class=\"imgwdt\" src=\"{{global_url+videos.thumbnail}}\"\n                                        style=\" width: 100%;margin: auto;display:{{videos.thumbLoaded?block:none}}\"\n                                        (load)=\"this.thumLoaded(videos)\">\n                                    <!-- {{videos.action}} -->\n                                </div>\n                                <mat-card-content>\n                                    <div class=\"col-md-10\">\n                                        <p class=\"content-title\">\n                                            <!-- {{videos.title}} -->\n                                            <crystal-text-show-less [maxLength]=\"30\" [data]=\"videos.title\"\n                                                [showTail]=\"true\"> </crystal-text-show-less>\n                                    </div>\n                                </mat-card-content>\n                                <mat-card-actions>\n                                    <div style=\"left: 56%;top: 70%; position: absolute;\">\n                                        <p class=\"Iconbtn\" (click)=\"open_edit_dialog(videos,true)\">\n                                            <mat-icon class=\"icon\" style=\"color:#1c3d76; cursor: pointer;\">\n                                                more_vert\n                                            </mat-icon>\n                                            {{videos.action}}\n                                        </p>\n                                    </div>\n                                </mat-card-actions>\n                            </mat-card>\n\n                        </div>\n                    </ngx-slick-carousel>\n                    <ngx-spinner bdOpacity=0.5 bdColor=\"#1c3d76\" size=\"medium\" color=\"#fff\"\n                        type=\"ball-clip-rotate\" [fullScreen]=\"false\">\n                        <p style=\"color: white\"> Loading... </p>\n                    </ngx-spinner>\n                </div>\n            </mat-tab>\n        </mat-tab-group>\n\n\n\n\n\n\n        <!-- <div class=\"col-lg-12\" style=\"height: 337px;overflow-y: hidden;overflow-x: hidden;position: relative;\"\n                    *ngFor=\"let sub_name of sub_namesReference\">\n\n                    <h4 *ngIf=\"showsubcategory\">{{sub_name.sub_name}}</h4>\n                    <hr class=\"middel-line\">\n                    <p *ngIf=\"sub_name.video.length == 0 && showsubcategory\" class=\"title-content\">Videos Not Available</p>\n\n                    <div class=\"\" style=\"height:300px; width:100%;padding: 2%;\">\n                        <owl-carousel-o [options]=\"customOptions\" *ngIf=\"showsubcategory\">\n                            <ng-container *ngFor=\"let videos of sub_name.video\">\n                                <ng-template carouselSlide>\n                                    <div class=\"card-icon\"\n                                        style=\"padding: 0% 0% 0% 0%; margin:0px 8px; cursor: pointer; height: 258px;background: white;\"\n                                        (click)=\"open_video_dialog(videos,true)\">\n                                        <img src=\"../../assets/img/Defaultthumbnail.jpg\"\n                                            style=\"width: 100%;height: 200px;\" hidden=\"{{videos.thumbLoaded}}\">\n                                        <img class=\"image_size\" src=\"{{global_url+videos.thumbnail}}\"\n                                            style=\"display:{{videos.thumbLoaded?block:none}}\"\n                                            (load)=\"this.thumLoaded(videos)\">\n                                        {{videos.action}}\n                                    </div>\n                                    <div class=\"col-md-10\" style=\"position: absolute;top: 81%;\">\n                                        <p class=\"content-title\">\n                                            {{videos.title}}\n                                        </p>\n                                    </div>\n                                    <div style=\"left: 67%;top: 73%; position: absolute;\">\n                                        <p class=\"Iconbtn\" (click)=\"open_edit_dialog(videos,true)\">\n                                            <mat-icon class=\"icon\" style=\"color:rgb(187, 59, 59); cursor: pointer;\">more_vert\n                                            </mat-icon>\n                                            {{videos.action}}\n                                        </p>\n                                    </div>\n                                </ng-template>\n                            </ng-container>\n                        </owl-carousel-o>\n                    </div> \n                </div>-->"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_helpers_request_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../app/helpers/request.interceptor */ "./src/app/helpers/request.interceptor.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm5/auth0-angular-jwt.js");
/* harmony import */ var _app_helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../app/helpers/ProjectCustomUtils */ "./src/app/helpers/ProjectCustomUtils.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
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
    return localStorage.getItem(_app_helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_29__["ProjectCustomUtils"].projectJWTToken);
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
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
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
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_28__["JwtModule"].forRoot({
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
                _video_upload_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["DeleteDialogComponent"]
                // VideoDetailsDialog,
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HTTP_INTERCEPTORS"],
                    useClass: _app_helpers_request_interceptor__WEBPACK_IMPORTED_MODULE_27__["RequestInterceptor"],
                    multi: true,
                },
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_30__["AuthGuard"],],
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
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/ProjectCustomUtils */ "./src/app/helpers/ProjectCustomUtils.ts");
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
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var expired = _helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_2__["ProjectCustomUtils"].isTokenExpired();
        console.log('auth.guard:canActivate: checking auth guard token expired ? ', expired);
        console.log('auth.guard:canActivate: Token expired redirecting to login ', expired);
        if (!expired) {
            return true;
        }
        else {
            this.router.navigateByUrl('/');
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
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
        console.log(resp, "dbhbd");
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

module.exports = ".card {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5) !important;\n  padding-bottom: 10px !important;\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: xx-large;\n  padding: 0 0 0 0;\n  left: 0%;\n  top: 32%;\n}\n\n.data-table {\n  width: 80%;\n  margin: 20px auto;\n}\n\n.iconbutton {\n  margin: 10px 10px;\n}\n\nbutton.btn.btn-default.bg-info.pull-right.m-3 {\n  margin: -6px 0px !important;\n  background: #1f467f !important;\n  border-radius: 2.45rem !important;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n  padding-left: 86px;\n  width: 35%;\n}\n\na {\n  margin: 0px 4px;\n}\n\n.card-title {\n  margin: 5px 50px !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0eS9HOlxcYmV0YS52aWNmbGl4LmNvbS9zcmNcXGFwcFxcY2l0eVxcY2l0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2l0eS9jaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREdBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FDQUE7O0FERUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNDQTs7QURDQTtFQUNBLGlCQUFBO0FDRUE7O0FEQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUNHQTs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9jaXR5L2NpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuXG4uYXN0ZXJpc2tfaW5wdXQ6YWZ0ZXIge1xuY29udGVudDogXCIgKlwiO1xuY29sb3I6ICNlMzI7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5tYXJnaW46IDBweCAwcHggMHB4IDBweDtcbmZvbnQtc2l6ZTogeHgtbGFyZ2U7XG5wYWRkaW5nOiAwIDAgMCAwO1xubGVmdDogMCU7XG50b3A6MzIlO1xufVxuLmRhdGEtdGFibGV7XG53aWR0aDogODAlO1xubWFyZ2luOiAyMHB4IGF1dG87XG59XG4uaWNvbmJ1dHRvbntcbm1hcmdpbjoxMHB4IDEwcHg7XG59XG5idXR0b24uYnRuLmJ0bi1kZWZhdWx0LmJnLWluZm8ucHVsbC1yaWdodC5tLTMge1xubWFyZ2luOiAtNnB4IDBweCAhaW1wb3J0YW50O1xuYmFja2dyb3VuZDogIzFmNDY3ZiAhaW1wb3J0YW50O1xuYm9yZGVyLXJhZGl1czogMi40NXJlbSAhaW1wb3J0YW50O1xufVxuLy8gbWF0LWljb24ubWF0LWljb24ubm90cmFuc2xhdGUubWF0ZXJpYWwtaWNvbnMubWF0LWljb24tbm8tY29sb3Ige1xuLy8gcGFkZGluZzogMHB4IDI1cHggIWltcG9ydGFudDtcbi8vIH1cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctbGVmdDogODZweDtcbiAgd2lkdGg6IDM1JTtcbn1cbmEge1xuICBtYXJnaW46IDBweCA0cHg7XG59XG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogNXB4IDUwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuIiwiLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hc3Rlcmlza19pbnB1dDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiICpcIjtcbiAgY29sb3I6ICNlMzI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIGxlZnQ6IDAlO1xuICB0b3A6IDMyJTtcbn1cblxuLmRhdGEtdGFibGUge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmljb25idXR0b24ge1xuICBtYXJnaW46IDEwcHggMTBweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tZGVmYXVsdC5iZy1pbmZvLnB1bGwtcmlnaHQubS0zIHtcbiAgbWFyZ2luOiAtNnB4IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMWY0NjdmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIuNDVyZW0gIWltcG9ydGFudDtcbn1cblxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiA4NnB4O1xuICB3aWR0aDogMzUlO1xufVxuXG5hIHtcbiAgbWFyZ2luOiAwcHggNHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogNXB4IDUwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

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
        console.log(this.tableData, "table  city");
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.dataSource.paginator = this.paginator;
    };
    CityComponent.prototype.delete_low = function (row_data) {
        var _this = this;
        console.log(row_data, "row_datarow_data");
        var dialogRef = this.dialog.open(DeleteCityDialog, {
            data: {
                rowdata: row_data
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                console.log(data, "incomingdatafromdelete");
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
            console.log(response, "response get cat_name");
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
        console.log(data, "edit dailogdata");
        if (data) {
            this.sub_name = data.rowdata['sub_name'];
            this.selectedrole = data.rowdata['cat_name'];
            this.dialogTitle = "Update Category";
            this.update_city_btn = true;
            this.save_city_btn = false;
        }
        else {
            this.dialogTitle = "Add Category";
            this.save_City_btn = true;
            this.update_City_btn = false;
        }
    }
    AddCityDialog.prototype.ngOnInit = function () {
        var _this = this;
        var payload = {
            role: localStorage.getItem('cat_name')
        };
        console.log(payload, "payloadpayload roles");
        this.service.getRolesData(payload)
            .subscribe(function (response) {
            console.log(response, "responseresponseresponse roles");
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
        console.log(payload, "payload");
        // return true;
        if ((payload.sub_name != '' && payload.role != '')) {
            console.log(payload, "payload");
            this.service.saveCity(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                console.log(response, "incoming response");
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
            console.log(response, "datadeleting");
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
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    CityService.prototype.getCity = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].getcitylist;
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    CityService.prototype.getRolesData = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].getcats;
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    CityService.prototype.getcat_name = function () {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].getcat;
        return this.httpClient.get(url);
    };
    CityService.prototype.updateCity = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].updateCity;
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    CityService.prototype.deleteCity = function (data1) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].deleteCity;
        console.log(url, "outgoing url");
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

module.exports = ".nav-item:hover{\n    cursor: pointer;\n}\nnav.navbar.navbar-expand-lg.navbar-transparent.navbar-absolute.fixed-top {\n    z-index: 99 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5uYXYubmF2YmFyLm5hdmJhci1leHBhbmQtbGcubmF2YmFyLXRyYW5zcGFyZW50Lm5hdmJhci1hYnNvbHV0ZS5maXhlZC10b3Age1xuICAgIHotaW5kZXg6IDk5ICFpbXBvcnRhbnQ7XG59Il19 */"

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
                console.log("dailog close");
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

module.exports = ".example-container {\n    height: 500px;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n  }\n  .example-sidenav-content {\n    display: -webkit-box;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n  .example-sidenav {\n     -webkit-user-select: none;\n        -moz-user-select: none;\n         -ms-user-select: none;\n             user-select: none;\n  }\n  .full-width {\n    width: 100%;\n  }\n  .font-c{\n    color: white;\n  }\n  .parent{\n    height:30px;\n  }\n  .menu-button {\n    -webkit-transition: 300ms ease-in-out;\n    transition: 300ms ease-in-out;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  .menu-button.rotated {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  .submenu {\n    overflow-y: hidden;\n    -webkit-transition: -webkit-transform 300ms ease;\n    transition: -webkit-transform 300ms ease;\n    transition: transform 300ms ease;\n    transition: transform 300ms ease, -webkit-transform 300ms ease;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n    -webkit-transform-origin: top;\n            transform-origin: top;\n    padding-left: 0px;\n  }\n  .submenu.expanded {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  .is-active {\n    background-color: #4a6e99;\n}\n  .mat-action-list .mat-list-item:focus, .mat-action-list .mat-list-item:hover, .mat-list-option:focus, .mat-list-option:hover, .mat-nav-list .mat-list-item:focus, .mat-nav-list .mat-list-item:hover {\n  background: #4a6e99 !important;\n}\n  .mat-drawer-side {\n  border-right: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtLQUNHLHlCQUFpQjtRQUFqQixzQkFBaUI7U0FBakIscUJBQWlCO2FBQWpCLGlCQUFpQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUNBQTZCO0lBQTdCLDZCQUE2QjtJQUM3QiwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0RBQWdDO0lBQWhDLHdDQUFnQztJQUFoQyxnQ0FBZ0M7SUFBaEMsOERBQWdDO0lBQ2hDLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLDRCQUFvQjtZQUFwQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlCQUF5QjtBQUM3QjtFQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0VBQ0E7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmV4YW1wbGUtc2lkZW5hdiB7XG4gICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIC5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZm9udC1je1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAucGFyZW50e1xuICAgIGhlaWdodDozMHB4O1xuICB9XG4gIC5tZW51LWJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgLm1lbnUtYnV0dG9uLnJvdGF0ZWQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgLnN1Ym1lbnUge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbiAgLnN1Ym1lbnUuZXhwYW5kZWQge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICB9XG4gIC5pcy1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTZlOTk7XG59XG4ubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLCAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLCAubWF0LWxpc3Qtb3B0aW9uOmZvY3VzLCAubWF0LWxpc3Qtb3B0aW9uOmhvdmVyLCAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLCAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRhNmU5OSAhaW1wb3J0YW50O1xufVxuLm1hdC1kcmF3ZXItc2lkZSB7XG4gIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

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
    // { path: '/default-settings', title: 'Default-Settings',  icon:'settings', class: '' },
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
    }
    SidebarComponent.prototype.ngOnInit = function () {
        if (this.service.role_id == 2) {
            this.admin_list = true;
            this.uploader = false;
        }
        else if (this.service.role_id == 1) {
            this.uploader = true;
            this.admin_list = false;
        }
        if (this.service.role_id === undefined) {
            this.service.role_id = localStorage.getItem('role');
            console.log(this.service.role_id, "undefined this.service.role_id");
            if (this.service.role_id == 2) {
                this.admin_list = true;
                this.uploader = false;
            }
            else if (this.service.role_id == 1) {
                this.uploader = true;
                this.admin_list = false;
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

module.exports = ".container {\n  margin-top: 135px;\n}\n\n.text-dark {\n  font-weight: 400;\n  color: #1c3d76 !important;\n  padding: 3%;\n  margin: 5%;\n}\n\n.mat-form-field-label-wrapper {\n  border: 0.2px solid #1f467f !important;\n}\n\n.vl {\n  border-left: 1px solid gray;\n  height: 14%;\n  position: absolute;\n  left: 61%;\n  overflow: hidden;\n  margin: -15.3%;\n}\n\n.footer ul li a {\n  text-transform: none;\n}\n\nh6, .h6 {\n  text-transform: none;\n}\n\n.text-dark1 {\n  margin: 12%;\n}\n\n.text-dark2 {\n  margin-top: -7%;\n}\n\n.text-dark3 {\n  margin-bottom: 1%;\n  margin-top: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0c6XFxiZXRhLnZpY2ZsaXguY29tL3NyY1xcYXBwXFxmb3Jnb3QtcGFzc3dvcmRcXGZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNFSjs7QURBRTtFQUNFLHNDQUFBO0FDR0o7O0FEQUU7RUFDRSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURERTtFQUNFLG9CQUFBO0FDSUo7O0FERkU7RUFDRSxvQkFBQTtBQ0tKOztBREhFO0VBQ0UsV0FBQTtBQ01KOztBREpFO0VBQ0UsZUFBQTtBQ09KOztBRExFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDEzNXB4O1xyXG4gIH1cclxuICAudGV4dC1kYXJre1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMWMzZDc2ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgfVxyXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcclxuICAgIGJvcmRlcjowLjJweCBzb2xpZCAjMWY0NjdmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC52bHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICAgIGhlaWdodDogMTQlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNjElO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgbWFyZ2luOiAtMTUuMyU7XHJcbiAgfVxyXG4gIC5mb290ZXIgdWwgbGkgYXtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICBoNiwgLmg2IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICAudGV4dC1kYXJrMXtcclxuICAgIG1hcmdpbjogMTIlO1xyXG4gIH1cclxuICAudGV4dC1kYXJrMntcclxuICAgIG1hcmdpbi10b3A6IC03JTtcclxuICB9XHJcbiAgLnRleHQtZGFyazN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gIH0iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTM1cHg7XG59XG5cbi50ZXh0LWRhcmsge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzFjM2Q3NiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzJTtcbiAgbWFyZ2luOiA1JTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICBib3JkZXI6IDAuMnB4IHNvbGlkICMxZjQ2N2YgIWltcG9ydGFudDtcbn1cblxuLnZsIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xuICBoZWlnaHQ6IDE0JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2MSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogLTE1LjMlO1xufVxuXG4uZm9vdGVyIHVsIGxpIGEge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuaDYsIC5oNiB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4udGV4dC1kYXJrMSB7XG4gIG1hcmdpbjogMTIlO1xufVxuXG4udGV4dC1kYXJrMiB7XG4gIG1hcmdpbi10b3A6IC03JTtcbn1cblxuLnRleHQtZGFyazMge1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgbWFyZ2luLXRvcDogNyU7XG59Il19 */"

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
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/ProjectCustomUtils */ "./src/app/helpers/ProjectCustomUtils.ts");
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
    function RequestInterceptor(router) {
        this.router = router;
    }
    RequestInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        console.log('RequestInterceptor : intercept : Interceptred request : ', req);
        var authToken = 'Bearer ' + localStorage.getItem(_helpers_ProjectCustomUtils__WEBPACK_IMPORTED_MODULE_4__["ProjectCustomUtils"].projectJWTToken);
        var copiedRequest = req.clone({ headers: req.headers.set('Authorization', authToken) });
        return next.handle(copiedRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigate(['/']);
                }
            }
        }));
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RequestInterceptor);
    return RequestInterceptor;
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

module.exports = ".container {\n  margin-top: 135px;\n}\n\n.text-dark {\n  font-weight: 400;\n  color: #1c3d76 !important;\n  padding: 5%;\n}\n\n.mat-form-field-label-wrapper {\n  border: 0.2px solid #1f467f !important;\n}\n\n.vl {\n  border-left: 1px solid gray;\n  height: 14%;\n  position: absolute;\n  left: 61%;\n  overflow: hidden;\n  margin: -15.3%;\n}\n\n.footer ul li a {\n  text-transform: none;\n}\n\nh6, .h6 {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRzpcXGJldGEudmljZmxpeC5jb20vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RBO0VBQ0UsaUJBQUE7QUMvQ0Y7O0FEaURBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUM5Q0Y7O0FEZ0RBO0VBQ0Usc0NBQUE7QUM3Q0Y7O0FEZ0RBO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDN0NGOztBRCtDQTtFQUNFLG9CQUFBO0FDNUNGOztBRDhDQTtFQUNFLG9CQUFBO0FDM0NGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXQtY2FyZC5leGFtcGxlLWNhcmQubWF0LWNhcmQge1xuLy8gICAgIHdpZHRoOiAzMCU7XG4vLyAgICAgbWFyZ2luOiA1MHB4IDM1JTtcbi8vIH1cbi8vIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMzdweDtcbi8vIH1cbi8vIG1hdC1jYXJkLXRpdGxlLm1hdC1jYXJkLXRpdGxlIHtcbi8vICAgICBtYXJnaW46IDBweCAxMjJweDtcbi8vIH1cbi8vIC5leGFtcGxlLWZvcm0ge1xuLy8gICAgIG1pbi13aWR0aDogMTUwcHg7XG4vLyAgICAgbWF4LXdpZHRoOiA1MDBweDtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgfVxuICBcbi8vICAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4vLyAgICAgd2lkdGg6IDg0JTtcbi8vICAgICBtYXJnaW46IDdweCA4JTtcbi8vICAgfVxuLy8gICBidXR0b24ubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkge1xuLy8gICAgIG1hcmdpbjogMHB4IDE0MXB4O1xuLy8gICAgIHBhZGRpbmc6IDFweCAzOXB4O1xuLy8gICAgIG1hcmdpbi1ibG9jay1zdGFydDogLTdweDtcbi8vICAgfVxuLy8gICAubWF0LWNhcmQtYWN0aW9ucywgLm1hdC1jYXJkLWNvbnRlbnQsIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTohaW1wb3J0YW50O1xuLy8gfVxuXG4vLyBoM3tcbi8vICAgICBjb2xvcjogYmx1ZTtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuLy8gfVxuLy8gLmNvbnRhaW5ldHJ7XG4vLyAgICAgYm9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7XG4vLyAgICAgd2lkdGg6IDUwJTtcbi8vICAgICBoZWlnaHQ6IGF1dG87XG4vLyAgICAgbWFyZ2luOiAyMHB4IDI1JTtcbi8vIH1cbi8vIC5mb3JtLWdyb3Vwe1xuLy8gICAgIG1hcmdpbjogMHB4IDIxJTsgICBcbi8vIH1cbi8vIGJ1dHRvbntcbi8vICAgICBtYXJnaW46IDEwcHggMCU7XG4vLyB9XG4uY29udGFpbmVye1xuICBtYXJnaW4tdG9wOiAxMzVweDtcbn1cbi50ZXh0LWRhcmt7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMWMzZDc2ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDUlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICBib3JkZXI6MC4ycHggc29saWQgIzFmNDY3ZiAhaW1wb3J0YW50O1xufVxuXG4udmx7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAxNCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjElO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIG1hcmdpbjogLTE1LjMlO1xufVxuLmZvb3RlciB1bCBsaSBhe1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbmg2LCAuaDYge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbiIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMzVweDtcbn1cblxuLnRleHQtZGFyayB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMWMzZDc2ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIGJvcmRlcjogMC4ycHggc29saWQgIzFmNDY3ZiAhaW1wb3J0YW50O1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG4gIGhlaWdodDogMTQlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYxJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAtMTUuMyU7XG59XG5cbi5mb290ZXIgdWwgbGkgYSB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5oNiwgLmg2IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59Il19 */"

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
        this.isViewer = false;
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
            console.log(response, "vbdvj");
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
                            _this.isViewer = _this.authService.role_id == 3 ? true : false;
                            _this.isAdmin = _this.authService.role_id == 2 ? true : false;
                            _this.authService.incidentData.emit(response.RawData[0].role_id);
                            if (response.RawData[0].role_id == 1 || response.RawData[0].role_id == 3 || response.RawData[0].role_id == 2) {
                                _this.toasterService.pop("success", "Login", "Successfully Login");
                                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/dashboard';
                                console.log(redirect, "bdhcbh");
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
            console.log(error.status, "dgbdb");
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
            console.log(response, "csjjhscuyfdas");
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

module.exports = ".card {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5) !important;\n  padding-bottom: 10px !important;\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: xx-large;\n  padding: 0 0 0 0;\n  left: 0%;\n  top: 32%;\n}\n\n.data-table {\n  width: 85%;\n  margin: 20px auto;\n}\n\n.iconbutton {\n  margin: 10px 10px;\n}\n\nbutton.btn.btn-default.bg-info.pull-right.m-3 {\n  margin: -6px 0px !important;\n  background: #1f467f !important;\n  border-radius: 2.5rem !important;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n  padding-left: 51px;\n}\n\n.card-title {\n  margin: 5px 12px !important;\n  color: black;\n}\n\na {\n  margin: 0px 4px;\n}\n\n.mat-slide-toggle-bar.mat-slide-toggle-bar-no-side-margin {\n  margin: 0px 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsLXVzZXJzL0c6XFxiZXRhLnZpY2ZsaXguY29tL3NyY1xcYXBwXFxwb3J0YWwtdXNlcnNcXHBvcnRhbC11c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGFsLXVzZXJzL3BvcnRhbC11c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURHQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQ0FBOztBREVBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQ0E7O0FEQ0E7RUFDQSxpQkFBQTtBQ0VBOztBREFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDR0E7O0FEREE7RUFDSSxrQkFBQTtBQ0lKOztBREZBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0FDTUY7O0FESkE7RUFDRSwwQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsLXVzZXJzL3BvcnRhbC11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG5cbi5hc3Rlcmlza19pbnB1dDphZnRlciB7XG5jb250ZW50OiBcIiAqXCI7XG5jb2xvcjogI2UzMjtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbm1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xuZm9udC1zaXplOiB4eC1sYXJnZTtcbnBhZGRpbmc6IDAgMCAwIDA7XG5sZWZ0OiAwJTtcbnRvcDozMiU7XG59XG4uZGF0YS10YWJsZXtcbndpZHRoOiA4NSU7XG5tYXJnaW46IDIwcHggYXV0bztcbn1cbi5pY29uYnV0dG9ue1xubWFyZ2luOjEwcHggMTBweDtcbn1cbmJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuYmctaW5mby5wdWxsLXJpZ2h0Lm0tMyB7XG5tYXJnaW46IC02cHggMHB4ICFpbXBvcnRhbnQ7XG5iYWNrZ3JvdW5kOiAjMWY0NjdmICFpbXBvcnRhbnQ7XG5ib3JkZXItcmFkaXVzOiAyLjVyZW0gIWltcG9ydGFudDtcbn1cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MXB4O1xufVxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW46IDVweCAxMnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbmEge1xuICBtYXJnaW46IDBweCA0cHg7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZS1iYXIubWF0LXNsaWRlLXRvZ2dsZS1iYXItbm8tc2lkZS1tYXJnaW4ge1xuICBtYXJnaW46IDBweCA1cHggIWltcG9ydGFudDtcbn1cblxuIiwiLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hc3Rlcmlza19pbnB1dDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiICpcIjtcbiAgY29sb3I6ICNlMzI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIGxlZnQ6IDAlO1xuICB0b3A6IDMyJTtcbn1cblxuLmRhdGEtdGFibGUge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmljb25idXR0b24ge1xuICBtYXJnaW46IDEwcHggMTBweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tZGVmYXVsdC5iZy1pbmZvLnB1bGwtcmlnaHQubS0zIHtcbiAgbWFyZ2luOiAtNnB4IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMWY0NjdmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIuNXJlbSAhaW1wb3J0YW50O1xufVxuXG50ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDUxcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiA1cHggMTJweCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmEge1xuICBtYXJnaW46IDBweCA0cHg7XG59XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLWJhci5tYXQtc2xpZGUtdG9nZ2xlLWJhci1uby1zaWRlLW1hcmdpbiB7XG4gIG1hcmdpbjogMHB4IDVweCAhaW1wb3J0YW50O1xufSJdfQ== */"

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
        // checked: boolean;
        /** For the Add user dialog box */
        this.displayedColumns = ['name', 'email', 'mobile', 'role', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
    }
    PortalUsersComponent.prototype.ngOnInit = function () {
        var payload = {};
        this.getPortalUsers(payload);
        // this.ELEMENT_DATA=[
        //   { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
        //   { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
        //   { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
        // ];
        //  this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
        console.log(this.tableData, "table portal users");
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.dataSource.paginator = this.paginator;
    };
    PortalUsersComponent.prototype.toggle = function (row_data, event) {
        var Active_state;
        console.log(event.checked, "vhg");
        if (event.checked == true) {
            Active_state = "Active";
        }
        else {
            Active_state = "Disable";
        }
        var payload = {
            user_id: row_data.email,
            Active_status: Active_state,
        };
        console.log(payload, "ghghjg");
        this.service.statuscheck(payload)
            .subscribe(function (response) {
            var data;
            data = response;
            console.log(data, "true");
        });
    };
    PortalUsersComponent.prototype.delete_low = function (row_data) {
        var _this = this;
        console.log(row_data, "row_datarow_data");
        var dialogRef = this.dialog.open(DeleteUserDialog, {
            data: {
                rowdata: row_data
            }
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                console.log(data, "incomingdatafromdelete");
                // this.get_Portal_users();
                var data1 = {};
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
            console.log(response, "response get portal users");
            // this.tableData = data_resp;
            _this.tableData = response;
            _this.tableData.forEach(function (element, index) {
                console.log(element['status'], "element table data");
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
                var payload = {};
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
        console.log(data, "edit dailogdata");
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
        console.log(payload, "payloadpayload roles");
        this.service.getRolesData(payload)
            .subscribe(function (response) {
            console.log(response, "responseresponseresponse roles");
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
        console.log(payload, "payload");
        if (payload.name != '' && payload.email != '' && payload.mobile != '' && payload.role != '') {
            // this.save_user_btn=true;
            this.service.saveuser(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                console.log(response, "incoming response");
                if (data == "200") {
                    _this.dialogRef.close(data);
                    _this.toasterService.pop("success", "User", "User added successfully");
                    // this.save_user_btn=false;
                }
                else {
                    // this.getPortalUsers(payload);
                    _this.toasterService.pop("error", "error", "User already exist");
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
        console.log(payload, "payloadpayload");
        if (payload.name != '' && payload.email != '' && payload.mobile != '' && payload.role != '') {
            // this.save_user_btn=true;
            this.service.getUpdateUsers(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                console.log(response, "incoming response");
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
        console.log(payload, "payloadpayload");
        // this.delete_btn=true;
        this.service.deleteUser(payload)
            .subscribe(function (response) {
            console.log(response, "datadeleting");
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
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    PortalUserService.prototype.getPortalUsers = function (payload) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].getuserlist;
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    PortalUserService.prototype.statuscheck = function (payload) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].statuscheck;
        return this.httpClient.post(url, payload);
    };
    PortalUserService.prototype.getRolesData = function (payload) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].getroles;
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    PortalUserService.prototype.deleteUser = function (data1) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].deleteportalUrl;
        console.log(url, "outgoing url");
        return this.httpClient.post(url, data1);
    };
    PortalUserService.prototype.getUpdateUsers = function (payload) {
        var url = _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].MAINURL + _helpers_urlconstant__WEBPACK_IMPORTED_MODULE_2__["UrlConstants"].updateUser;
        console.log(url, "outgoing url");
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

module.exports = ".container {\n  margin-top: 135px;\n}\n\n.text-dark {\n  font-weight: 400;\n  color: #1c3d76 !important;\n  padding: 5%;\n}\n\n.mat-form-field-label-wrapper {\n  border: 0.2px solid #1f467f !important;\n}\n\n.vl {\n  border-left: 1px solid gray;\n  height: 14%;\n  position: absolute;\n  left: 61%;\n  overflow: hidden;\n  margin: -15.3%;\n}\n\n.footer ul li a {\n  text-transform: none;\n}\n\nh6, .h6 {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvRzpcXGJldGEudmljZmxpeC5jb20vc3JjXFxhcHBcXHJlc2V0LXBhc3N3b3JkXFxyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RBO0VBQ0ksaUJBQUE7QUMvQ0o7O0FEaURFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUM5Q0o7O0FEZ0RFO0VBQ0Usc0NBQUE7QUM3Q0o7O0FEZ0RFO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDN0NKOztBRCtDRTtFQUNFLG9CQUFBO0FDNUNKOztBRDhDRTtFQUNFLG9CQUFBO0FDM0NKIiwiZmlsZSI6InNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtYXQtY2FyZC5leGFtcGxlLWNhcmQubWF0LWNhcmQge1xyXG4vLyAgICAgd2lkdGg6IDMwJTtcclxuLy8gICAgIG1hcmdpbjogNTBweCAzNSU7XHJcbi8vIH1cclxuLy8gLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMzdweDtcclxuLy8gfVxyXG4vLyBtYXQtY2FyZC10aXRsZS5tYXQtY2FyZC10aXRsZSB7XHJcbi8vICAgICBtYXJnaW46IDBweCAxMjJweDtcclxuLy8gfVxyXG4vLyAuZXhhbXBsZS1mb3JtIHtcclxuLy8gICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbi8vICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4vLyAgICAgd2lkdGg6IDg0JTtcclxuLy8gICAgIG1hcmdpbjogN3B4IDglO1xyXG4vLyAgIH1cclxuLy8gICBidXR0b24ubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkge1xyXG4vLyAgICAgbWFyZ2luOiAwcHggMTQxcHg7XHJcbi8vICAgICBwYWRkaW5nOiAxcHggMzlweDtcclxuLy8gICAgIG1hcmdpbi1ibG9jay1zdGFydDogLTdweDtcclxuLy8gICB9XHJcbi8vICAgLm1hdC1jYXJkLWFjdGlvbnMsIC5tYXQtY2FyZC1jb250ZW50LCAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGgze1xyXG4vLyAgICAgY29sb3I6IGJsdWU7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbi8vIH1cclxuLy8gLmNvbnRhaW5ldHJ7XHJcbi8vICAgICBib3JkZXI6MXB4IHNvbGlkIHNpbHZlcjtcclxuLy8gICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgICBoZWlnaHQ6IGF1dG87XHJcbi8vICAgICBtYXJnaW46IDIwcHggMjUlO1xyXG4vLyB9XHJcbi8vIC5mb3JtLWdyb3Vwe1xyXG4vLyAgICAgbWFyZ2luOiAwcHggMjElOyAgIFxyXG4vLyB9XHJcbi8vIGJ1dHRvbntcclxuLy8gICAgIG1hcmdpbjogMTBweCAwJTtcclxuLy8gfVxyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMTM1cHg7XHJcbiAgfVxyXG4gIC50ZXh0LWRhcmt7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMxYzNkNzYgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6MC4ycHggc29saWQgIzFmNDY3ZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudmx7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBoZWlnaHQ6IDE0JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDYxJTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIG1hcmdpbjogLTE1LjMlO1xyXG4gIH1cclxuICAuZm9vdGVyIHVsIGxpIGF7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgaDYsIC5oNiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEzNXB4O1xufVxuXG4udGV4dC1kYXJrIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMxYzNkNzYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgYm9yZGVyOiAwLjJweCBzb2xpZCAjMWY0NjdmICFpbXBvcnRhbnQ7XG59XG5cbi52bCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAxNCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjElO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IC0xNS4zJTtcbn1cblxuLmZvb3RlciB1bCBsaSBhIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmg2LCAuaDYge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn0iXX0= */"

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
        console.log(this.email, this.key, "incoming email & key");
        // this.orgID= this.route.snapshot.queryParamMap.get('orgID');
        this.router.navigate(['.'], { relativeTo: this.route, queryParams: {} });
        if (this.email && this.key) {
            var payload = {
                email: this.email,
                token: this.key,
            };
            console.log(payload, "incoming email&key");
            this.service.checkReset(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                console.log(data, "incoming key");
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
            console.log(payload, "email,key,password");
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

module.exports = ".card {\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5) !important;\n  padding-bottom: 10px !important;\n}\n\n.asterisk_input:after {\n  content: \" *\";\n  color: #e32;\n  position: absolute;\n  margin: 0px 0px 0px 0px;\n  font-size: xx-large;\n  padding: 0 0 0 0;\n  left: 0%;\n  top: 32%;\n}\n\n.data-table {\n  width: 80%;\n  margin: 20px auto;\n}\n\n.iconbutton {\n  margin: 10px 10px;\n}\n\nbutton.btn.btn-default.bg-info.pull-right.m-3 {\n  margin: -6px 0px !important;\n  background: #1f467f !important;\n  border-radius: 2.5rem !important;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n  padding-left: 92px;\n  width: 36%;\n}\n\na {\n  margin: 0px 4px;\n}\n\n.card-title {\n  margin: 5px 50px !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGUvRzpcXGJldGEudmljZmxpeC5jb20vc3JjXFxhcHBcXHN0YXRlXFxzdGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhdGUvc3RhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzREFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FER0E7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUNBQTs7QURFQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0NBOztBRENBO0VBQ0EsaUJBQUE7QUNFQTs7QURBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQ0dBOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3N0YXRlL3N0YXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLmFzdGVyaXNrX2lucHV0OmFmdGVyIHtcbmNvbnRlbnQ6IFwiICpcIjtcbmNvbG9yOiAjZTMyO1xucG9zaXRpb246IGFic29sdXRlO1xubWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG5mb250LXNpemU6IHh4LWxhcmdlO1xucGFkZGluZzogMCAwIDAgMDtcbmxlZnQ6IDAlO1xudG9wOjMyJTtcbn1cbi5kYXRhLXRhYmxle1xud2lkdGg6IDgwJTtcbm1hcmdpbjogMjBweCBhdXRvO1xufVxuLmljb25idXR0b257XG5tYXJnaW46MTBweCAxMHB4O1xufVxuYnV0dG9uLmJ0bi5idG4tZGVmYXVsdC5iZy1pbmZvLnB1bGwtcmlnaHQubS0zIHtcbm1hcmdpbjogLTZweCAwcHggIWltcG9ydGFudDtcbmJhY2tncm91bmQ6ICMxZjQ2N2YgIWltcG9ydGFudDtcbmJvcmRlci1yYWRpdXM6IDIuNXJlbSAhaW1wb3J0YW50O1xufVxuLy8gbWF0LWljb24ubWF0LWljb24ubm90cmFuc2xhdGUubWF0ZXJpYWwtaWNvbnMubWF0LWljb24tbm8tY29sb3Ige1xuLy8gcGFkZGluZzogMHB4IDI1cHggIWltcG9ydGFudDtcbi8vIH1cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctbGVmdDogOTJweDtcbiAgd2lkdGg6IDM2JTtcbn1cbmEge1xuICBtYXJnaW46IDBweCA0cHg7XG59XG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogNXB4IDUwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufSIsIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYXN0ZXJpc2tfaW5wdXQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiAqXCI7XG4gIGNvbG9yOiAjZTMyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBwYWRkaW5nOiAwIDAgMCAwO1xuICBsZWZ0OiAwJTtcbiAgdG9wOiAzMiU7XG59XG5cbi5kYXRhLXRhYmxlIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5pY29uYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLWRlZmF1bHQuYmctaW5mby5wdWxsLXJpZ2h0Lm0tMyB7XG4gIG1hcmdpbjogLTZweCAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzFmNDY3ZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW0gIWltcG9ydGFudDtcbn1cblxudGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiA5MnB4O1xuICB3aWR0aDogMzYlO1xufVxuXG5hIHtcbiAgbWFyZ2luOiAwcHggNHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogNXB4IDUwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

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
            console.log(response, "response get States");
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
        console.log(data, "edit dailogdata");
        if (data) {
            this.cat_name = data.rowdata['cat_name'];
            this.dialogTitle = "Update State";
            this.update_state_btn = true;
            this.save_state_btn = false;
        }
        else {
            this.dialogTitle = "Add State";
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
        console.log(payload.cat_name, "cdskn");
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
        console.log(payload, "payloadpayload");
        if (payload.cat_name != '') {
            this.service.updateState(payload)
                .subscribe(function (response) {
                var data;
                data = response;
                console.log(response, "incoming response");
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
        console.log(payload, "payloadpayload");
        // this.delete_btn=true;
        this.service.deleteState(payload)
            .subscribe(function (response) {
            console.log(response, "datadeleting");
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
    // getsub_name(payload: { cat_id: string; }) {
    //   throw new Error("Method not implemented.");
    // }
    // getPortalColumns() {
    //   throw new Error("Method not implemented.");
    // }
    // portalUserUrl = environment.backendUrl + 'portal/users/getuserlist';
    // portaladdteamUrl = environment.backendUrl + 'portal/users/addupdateuser';
    // portalroleUrl = environment.backendUrl + 'portal/users/getroles';
    // deleteportalUrl = environment.backendUrl + 'portal/users/removeuser';
    function StateService(httpClient) {
        this.httpClient = httpClient;
    }
    StateService.prototype.saveState = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].saveState;
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    StateService.prototype.getState = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].getstatelist;
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    //   getRolesData(payload):Observable<StateUser[]> {
    //     // return this.httpClient.post<PortalUser[]>(this.portalroleUrl,payload, {withCredentials: true});
    //     const url = UrlConstants.MAINURL + UrlConstants.getcats;
    //     console.log(url,"outgoing url");
    //     return this.httpClient.post<any>(url, payload);
    //  }
    StateService.prototype.updateState = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].updateState;
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    StateService.prototype.deleteState = function (data1) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].deleteState;
        console.log(url, "outgoing url");
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
        console.log(this.data.payload, "delete dialog data");
        var payload = {
            video_id: this.data.payload.video_id,
        };
        console.log(payload, "denjdn");
        this.service.delete_video(payload).
            subscribe(function (response) {
            console.log(response, "delete");
            if (response) {
                _this.toasterService.pop("success", "Video Detele", "Video Deleted successfully");
                _this.dialogRef.close();
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

module.exports = "video {\n  width: 100%;\n  height: auto;\n}\n\n.close-icon {\n  position: absolute;\n  top: 8%;\n  right: 7%;\n  z-index: 99;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n  background: #fff;\n}\n\n.mat-dialog-container {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #000 !important;\n  color: #d2d2d2;\n}\n\n.margin_p {\n  margin-bottom: 0.2rem;\n  font-weight: 400;\n  font-size: 15px;\n}\n\n.mtop[_ngcontent-cyg-c17] {\n  margin-top: 2%;\n  padding: 1% 0% 0% 3%;\n}\n\n.content_padding {\n  padding: 1% 0% 0% 3%;\n}\n\n.font_weight {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLWRpYWxvZy9HOlxcYmV0YS52aWNmbGl4LmNvbS9zcmNcXGFwcFxcdmlkZW8tdXBsb2FkXFx2aWRlby1kaWFsb2dcXHZpZGVvLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLWRpYWxvZy92aWRlby1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLHdIQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NBOztBREVBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXVwbG9hZC92aWRlby1kaWFsb2cvdmlkZW8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLmNsb3NlLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDglO1xuICAgIHJpZ2h0OiA3JTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgfVxuXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgYm94LXNoYWRvdzogMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsMCwwLC4yKSwgMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLDAsMCwuMTIpO1xuICAgIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2QyZDJkMjtcbn1cblxuLm1hcmdpbl9we1xubWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuZm9udC13ZWlnaHQ6NDAwO1xuZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubXRvcFtfbmdjb250ZW50LWN5Zy1jMTddIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHBhZGRpbmc6IDElIDAlIDAlIDMlO1xufVxuXG4uY29udGVudF9wYWRkaW5ne1xuICBwYWRkaW5nOiAxJSAwJSAwJSAzJTtcbn1cblxuLmZvbnRfd2VpZ2h0e1xuICBmb250LXdlaWdodDogNTAwO1xufVxuICBcbiAgLy8gI3ZpZGVvLXZpZXdwb3J0IHtcbiAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICAgIHRvcDogMDtcbiAgLy8gICAgIGxlZnQ6MDtcbiAgLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vICAgICB6LWluZGV4OiAtMTsgLyogZm9yIGFjY2Vzc2luZyB0aGUgdmlkZW8gYnkgY2xpY2sgKi9cbiAgLy8gfSIsInZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNsb3NlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOCU7XG4gIHJpZ2h0OiA3JTtcbiAgei1pbmRleDogOTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2QyZDJkMjtcbn1cblxuLm1hcmdpbl9wIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5tdG9wW19uZ2NvbnRlbnQtY3lnLWMxN10ge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgcGFkZGluZzogMSUgMCUgMCUgMyU7XG59XG5cbi5jb250ZW50X3BhZGRpbmcge1xuICBwYWRkaW5nOiAxJSAwJSAwJSAzJTtcbn1cblxuLmZvbnRfd2VpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"

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
        console.log(data, "dialoggg dataaaaa this.src_video");
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

module.exports = ".font_p {\n  font-size: 14px;\n}\n\n.close-icon {\n  position: absolute;\n  bottom: 0%;\n  right: 2%;\n  z-index: 99;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n  background: #fff;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px;\n}\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.middleline {\n  margin-top: 0rem;\n  margin-bottom: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLWVkaXQtZGlhbG9nL0c6XFxiZXRhLnZpY2ZsaXguY29tL3NyY1xcYXBwXFx2aWRlby11cGxvYWRcXHZpZGVvLWVkaXQtZGlhbG9nXFx2aWRlby1lZGl0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLWVkaXQtZGlhbG9nL3ZpZGVvLWVkaXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0U7RUFDRSxXQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNJSjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXVwbG9hZC92aWRlby1lZGl0LWRpYWxvZy92aWRlby1lZGl0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250X3B7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNsb3NlLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDAlO1xuICAgIHJpZ2h0OiAyJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgfVxuICBcbi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZpbGVVcGxvYWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMTBweDtcbn1cbi5maWxlVXBsb2FkIGlucHV0LnVwbG9hZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xufVxuLm1pZGRsZWxpbmV7XG4gIG1hcmdpbi10b3A6IDByZW07XG4gIG1hcmdpbi1ib3R0b206IDByZW07XG59IiwiLmZvbnRfcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsb3NlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIHJpZ2h0OiAyJTtcbiAgei1pbmRleDogOTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmlsZVVwbG9hZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZmlsZVVwbG9hZCBpbnB1dC51cGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbn1cblxuLm1pZGRsZWxpbmUge1xuICBtYXJnaW4tdG9wOiAwcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufSJdfQ== */"

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
        console.log(this.global_url, 'njdfj');
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
        console.log(this.data, "delete data");
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
        var formData = new FormData();
        formData.append("images", this.uploadedImageFiles[0], this.uploadedImageFiles[0].name);
        formData.append("Title", this.form.get('Title').value);
        formData.append("Description", this.form.get('Description').value);
        formData.append("video_id", this.data.payload.video_id);
        this.http.post(this.global_url + 'portal/users/updatevinfo', formData, {
            observe: 'events',
        })
            .subscribe(function (response) {
            // let data:any;
            // data=response;
            console.log(response, "bcdhhsjh");
            if (response) {
                _this.dialogRef.close(response);
                _this.toasterService.pop("success", "Video Details", "Video Details updated successfully");
                //  this.http.post(this.global_url+'portal/users/updatevinfo', formData, {
                //   observe: 'events',
                // })
            }
            else {
                _this.toasterService.pop("error", "Video Details", "Video Details Not updated successfully");
            }
            console.log("update response");
        });
    };
    VideoEditDialogComponent.prototype.cancel = function () {
        console.log("cancel button called");
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

module.exports = ".upload {\n  text-align: center;\n  color: black;\n  font-weight: bolder;\n}\n\n.main-content {\n  margin-top: 31px;\n  margin: 33px 3%;\n  width: 96%;\n  padding: 30px 15px;\n  height: 69px;\n}\n\n.add_new_video {\n  position: absolute;\n  right: 2%;\n  top: 0%;\n  z-index: 99;\n}\n\nh4 {\n  margin: 10px 2%;\n}\n\n.card.card-stats.ng-star-inserted {\n  margin-left: -33px;\n}\n\n.card-stats .card-header.card-header-icon i {\n  font-size: 60px;\n  line-height: 87px;\n  width: 199px;\n  height: 88px;\n  text-align: center;\n}\n\n.card [class*=card-header-] .card-icon, .card [class*=card-header-] .card-text {\n  border-radius: 0px;\n  background-color: #999999;\n  width: 116%;\n  height: 7.5rem;\n  padding: 20px;\n  margin: 0px -8%;\n  background: lightblue;\n}\n\n.card-stats .card-header.card-header-icon, .card-stats .card-header.card-header-text {\n  text-align: left;\n  height: 211px;\n}\n\n.card .card-category .material-icons {\n  position: absolute;\n  font-size: xx-large;\n  top: 138px;\n  color: black;\n  line-height: 1;\n  margin: 0px 71%;\n}\n\n.Iconbtn {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 22px;\n  width: 24px;\n  margin: 26px 70px;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: -1rem;\n}\n\n.mat-dialog-content {\n  max-height: 91vh;\n  width: 700px !important;\n}\n\nbutton.btn.btn-default.bg-Info.pull-right.m-3[_ngcontent-owk-c18] {\n  margin: 3px 11px !important;\n}\n\n.owl-prev,\n.owl-next {\n  position: absolute !important;\n  top: 50% !important;\n  -webkit-transform: translateY(-50%) !important;\n          transform: translateY(-50%) !important;\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.owl-prev {\n  left: -2rem !important;\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.owl-next {\n  right: -2rem !important;\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.owl-theme .owl-nav [class*=owl-] {\n  color: #868484 !important;\n  font-size: 14px;\n  margin: 5px;\n  padding: 4px 7px;\n  background: none !important;\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n.video_btn {\n  margin: -12px -1% !important;\n}\n\n.title-content {\n  text-align: center;\n  padding: 13.5%;\n}\n\n.middel-line {\n  width: 92.8%;\n  margin: -9px 3.9%;\n  background-color: #1c3d76;\n}\n\n.content-title {\n  width: 100%;\n  font-size: 14px;\n  padding: 8% 2% 6% 2% !important;\n  line-height: 1rem;\n  font-weight: 400;\n  color: #1c3d76;\n  overflow: hidden;\n}\n\n.image_size {\n  width: 100% !important;\n  display: -webkit-box !important;\n  display: flex !important;\n  height: 200px !important;\n  margin: -18px 0px !important;\n}\n\nbody, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\n  line-height: 1rem !important;\n}\n\n.nav-btn {\n  height: 47px !important;\n  position: absolute !important;\n  width: 26px !important;\n  cursor: pointer !important;\n  top: 100px !important;\n}\n\n.prev-slide.slick-disabled,\n.next-slide.slick-disabled {\n  pointer-events: none !important;\n  opacity: 0.2 !important;\n}\n\n.prev-slide:hover {\n  background-position: 0px -53px !important;\n}\n\n.next-slide:hover {\n  background-position: -24px -53px !important;\n}\n\n.imgwdt {\n  width: 100%;\n  margin: auto;\n}\n\n.slick-list draggable {\n  float: left !important;\n}\n\n.slick-track {\n  margin-left: 0% !important;\n}\n\n.qqq {\n  font-size: 16px;\n  line-height: 16px;\n  height: 44px;\n  overflow: hidden;\n}\n\n.show {\n  overflow: visible;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tdXBsb2FkL0c6XFxiZXRhLnZpY2ZsaXguY29tL3NyY1xcYXBwXFx2aWRlby11cGxvYWRcXHZpZGVvLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNPSjs7QURMQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQ1FKOztBRE5BO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNTSjs7QUROQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNTSjs7QUROQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQ1NKOztBRE5BO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQ1NKOztBRE5BO0VBQ0ksMkJBQUE7QUNTSjs7QURMQTs7RUFFRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNRRjs7QURMQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1FGOztBRExBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUUY7O0FETEE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUUo7O0FETEE7RUFDSSw0QkFBQTtBQ1FKOztBRE5BO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDU0o7O0FETkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURKQTtFQUNJLHNCQUFBO0VBQ0EsK0JBQUE7RUFBQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUNPSjs7QURMQTtFQUNJLDRCQUFBO0FDUUo7O0FETkE7RUFDSSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDU0o7O0FETkU7O0VBRUUsK0JBQUE7RUFDQSx1QkFBQTtBQ1NKOztBRE5FO0VBQ0UseUNBQUE7QUNTSjs7QURORTtFQUNFLDJDQUFBO0FDU0o7O0FEUEU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1VOOztBRFJFO0VBQ0ksc0JBQUE7QUNXTjs7QURURTtFQUNJLDBCQUFBO0FDWU47O0FEVEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNZSjs7QURURTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ1lKIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tdXBsb2FkL3ZpZGVvLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWR7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7IFxuICAgIGNvbG9yOiBibGFjazsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5tYWluLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDMxcHg7XG4gICAgbWFyZ2luOiAzM3B4IDMlO1xuICAgIHdpZHRoOiA5NiU7XG4gICAgcGFkZGluZzogMzBweCAxNXB4O1xuICAgIGhlaWdodDogNjlweDtcbn1cbi5hZGRfbmV3X3ZpZGVve1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHJpZ2h0OjIlO1xuICAgIHRvcDowJTtcbiAgICB6LWluZGV4Ojk5O1xufVxuaDR7XG4gICAgbWFyZ2luOiAxMHB4IDIlO1xufVxuLmNhcmQuY2FyZC1zdGF0cy5uZy1zdGFyLWluc2VydGVkIHtcbiAgICBtYXJnaW4tbGVmdDogLTMzcHg7XG59XG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiBpIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDg3cHg7XG4gICAgd2lkdGg6IDE5OXB4O1xuICAgIGhlaWdodDogODhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZCBbY2xhc3MqPWNhcmQtaGVhZGVyLV0gLmNhcmQtaWNvbiwgLmNhcmQgW2NsYXNzKj1jYXJkLWhlYWRlci1dIC5jYXJkLXRleHQge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xuICAgIHdpZHRoOiAxMTYlO1xuICAgIGhlaWdodDogNy41cmVtO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHggLTglO1xuICAgIGJhY2tncm91bmQ6bGlnaHRibHVlOyBcbn1cbi5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci1pY29uLCAuY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBoZWlnaHQ6IDIxMXB4O1xufVxuLmNhcmQgLmNhcmQtY2F0ZWdvcnkgLm1hdGVyaWFsLWljb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICB0b3A6IDEzOHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW46IDBweCA3MSU7XG59XG5cbi5JY29uYnRuIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIG1hcmdpbjogMjZweCA3MHB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtO1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiA5MXZoO1xuICAgIHdpZHRoOiA3MDBweCAhaW1wb3J0YW50O1xuICAgIFxufVxuYnV0dG9uLmJ0bi5idG4tZGVmYXVsdC5iZy1JbmZvLnB1bGwtcmlnaHQubS0zW19uZ2NvbnRlbnQtb3drLWMxOF0ge1xuICAgIG1hcmdpbjogM3B4IDExcHggIWltcG9ydGFudDtcbn1cblxuXG4ub3dsLXByZXYsXG4ub3dsLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODY4NDg0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDRweCA3cHg7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm93bC1wcmV2IHtcbiAgbGVmdDogLTJyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICM4Njg0ODQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNHB4IDdweDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ub3dsLW5leHQge1xuICByaWdodDogLTJyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICM4Njg0ODQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNHB4IDdweDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ub3dsLXRoZW1lIC5vd2wtbmF2IFtjbGFzcyo9b3dsLV0ge1xuICAgIGNvbG9yOiAjODY4NDg0ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDRweCA3cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4udmlkZW9fYnRuIHtcbiAgICBtYXJnaW46IC0xMnB4IC0xJSAhaW1wb3J0YW50O1xufVxuLnRpdGxlLWNvbnRlbnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEzLjUlO1xufVxuXG4ubWlkZGVsLWxpbmV7XG4gICAgd2lkdGg6IDkyLjglO1xuICAgIG1hcmdpbjogLTlweCAzLjklO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzNkNzY7XG59XG4uY29udGVudC10aXRsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzo4JSAyJSA2JSAyJSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMxYzNkNzY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi8vIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZXtcbi8vICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuLy8gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuLy8gfVxuLmltYWdlX3NpemUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IC0xOHB4IDBweCAhaW1wb3J0YW50O1xufVxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLmgxLCAuaDIsIC5oMywgLmg0e1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG4ubmF2LWJ0biB7XG4gICAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDI2cHggIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICB0b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgIFxuICAucHJldi1zbGlkZS5zbGljay1kaXNhYmxlZCxcbiAgLm5leHQtc2xpZGUuc2xpY2stZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMC4yICFpbXBvcnRhbnQ7XG4gIH1cbiAgICAgIFxuICAucHJldi1zbGlkZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC01M3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgIFxuICAubmV4dC1zbGlkZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0cHggLTUzcHggIWltcG9ydGFudDtcbiAgfVxuICAuaW1nd2R0e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLnNsaWNrLWxpc3QgZHJhZ2dhYmxle1xuICAgICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICAuc2xpY2stdHJhY2t7XG4gICAgICBtYXJnaW4tbGVmdDogMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5xcXEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLnNob3cge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfSIsIi51cGxvYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDMxcHg7XG4gIG1hcmdpbjogMzNweCAzJTtcbiAgd2lkdGg6IDk2JTtcbiAgcGFkZGluZzogMzBweCAxNXB4O1xuICBoZWlnaHQ6IDY5cHg7XG59XG5cbi5hZGRfbmV3X3ZpZGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMiU7XG4gIHRvcDogMCU7XG4gIHotaW5kZXg6IDk5O1xufVxuXG5oNCB7XG4gIG1hcmdpbjogMTBweCAyJTtcbn1cblxuLmNhcmQuY2FyZC1zdGF0cy5uZy1zdGFyLWluc2VydGVkIHtcbiAgbWFyZ2luLWxlZnQ6IC0zM3B4O1xufVxuXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiBpIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogODdweDtcbiAgd2lkdGg6IDE5OXB4O1xuICBoZWlnaHQ6IDg4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQgW2NsYXNzKj1jYXJkLWhlYWRlci1dIC5jYXJkLWljb24sIC5jYXJkIFtjbGFzcyo9Y2FyZC1oZWFkZXItXSAuY2FyZC10ZXh0IHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xuICB3aWR0aDogMTE2JTtcbiAgaGVpZ2h0OiA3LjVyZW07XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMHB4IC04JTtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufVxuXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiwgLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBoZWlnaHQ6IDIxMXB4O1xufVxuXG4uY2FyZCAuY2FyZC1jYXRlZ29yeSAubWF0ZXJpYWwtaWNvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHRvcDogMTM4cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMHB4IDcxJTtcbn1cblxuLkljb25idG4ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luOiAyNnB4IDcwcHg7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDkxdmg7XG4gIHdpZHRoOiA3MDBweCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24uYnRuLmJ0bi1kZWZhdWx0LmJnLUluZm8ucHVsbC1yaWdodC5tLTNbX25nY29udGVudC1vd2stYzE4XSB7XG4gIG1hcmdpbjogM3B4IDExcHggIWltcG9ydGFudDtcbn1cblxuLm93bC1wcmV2LFxuLm93bC1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzg2ODQ4NCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA0cHggN3B4O1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5vd2wtcHJldiB7XG4gIGxlZnQ6IC0ycmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODY4NDg0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDRweCA3cHg7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm93bC1uZXh0IHtcbiAgcmlnaHQ6IC0ycmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODY4NDg0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDRweCA3cHg7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLm93bC10aGVtZSAub3dsLW5hdiBbY2xhc3MqPW93bC1dIHtcbiAgY29sb3I6ICM4Njg0ODQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNHB4IDdweDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4udmlkZW9fYnRuIHtcbiAgbWFyZ2luOiAtMTJweCAtMSUgIWltcG9ydGFudDtcbn1cblxuLnRpdGxlLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEzLjUlO1xufVxuXG4ubWlkZGVsLWxpbmUge1xuICB3aWR0aDogOTIuOCU7XG4gIG1hcmdpbjogLTlweCAzLjklO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMzZDc2O1xufVxuXG4uY29udGVudC10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDglIDIlIDYlIDIlICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzFjM2Q3NjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltYWdlX3NpemUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAtMThweCAwcHggIWltcG9ydGFudDtcbn1cblxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLmgxLCAuaDIsIC5oMywgLmg0IHtcbiAgbGluZS1oZWlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm5hdi1idG4ge1xuICBoZWlnaHQ6IDQ3cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNnB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICB0b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmV2LXNsaWRlLnNsaWNrLWRpc2FibGVkLFxuLm5leHQtc2xpZGUuc2xpY2stZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjIgIWltcG9ydGFudDtcbn1cblxuLnByZXYtc2xpZGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTUzcHggIWltcG9ydGFudDtcbn1cblxuLm5leHQtc2xpZGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjRweCAtNTNweCAhaW1wb3J0YW50O1xufVxuXG4uaW1nd2R0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNsaWNrLWxpc3QgZHJhZ2dhYmxlIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLnNsaWNrLXRyYWNrIHtcbiAgbWFyZ2luLWxlZnQ6IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5xcXEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaG93IHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"

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
        this.SpinnerService.show();
        setTimeout(function () {
            _this.SpinnerService.hide();
        }, 5000);
        console.log(this.global_url, "dsdfsd");
        // this.isReadMore(this.videos)
        this.Service.getcat_name().
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
        console.log(videos, "bdhjsbhj");
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
        // console.log(videos,"open video dialog");
    };
    VideoUploadComponent.prototype.cat_nametypeChanged = function (cat_id) {
        var _this = this;
        this.SpinnerService.show();
        this.sub_category = true;
        console.log(cat_id, "hvs");
        this.selectedcat_nametype = this.tabs[cat_id.index].cat_id;
        // this.selectedcat_nametype = cat_id.value;
        var payload = {
            cat_id: this.selectedcat_nametype
        };
        console.log(this.tabs, "cghhjv");
        this.service.getvideos(payload).
            subscribe(function (response) {
            console.log(response['video'], "sub_name");
            if (response.length != 0) {
                _this.showsubcategory = true;
                _this.sub_namesReference = (response);
                _this.sub_namesReference.forEach(function (data, index) {
                    console.log(data.video.length, "novideos");
                    if (data.video.length != 0) {
                        _this.shownovideo = false;
                    }
                    else {
                        _this.shownovideo = true;
                    }
                });
                console.log(_this.sub_namesReference, "resuuuuuu");
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
        this.Service.getcat_name().
            subscribe(function (response) {
            console.log(response, "cat_name");
            _this.cat_namesReference = response;
        });
    };
    VideoUploadDialog.prototype.cat_nametypeChanged = function (cat_id) {
        var _this = this;
        console.log(cat_id, "hdhjsvhj");
        this.selectedcat_nametype = cat_id.value;
        var payload = {
            cat_id: this.selectedcat_nametype
        };
        console.log(this.selectedcat_nametype, "payloadpayload");
        this.service.getsub_name(payload).
            subscribe(function (response) {
            console.log(response, "sub_name");
            var subName = response.filter(function (sub) { return sub.cat_id === cat_id.value; });
            _this.sub_namesReference = subName;
            console.log(subName, "resuuuuuu");
        });
    };
    VideoUploadDialog.prototype.sub_nametypeChanged = function (sub_id) {
        console.log(sub_id, "vsdghvd");
        this.selectedsub_nametype = sub_id.value;
    };
    VideoUploadDialog.prototype.onFileChange = function (event) {
        this.uploadedvideoFiles = event.target.files;
        console.log(this.uploadedvideoFiles, "fftyf");
    };
    VideoUploadDialog.prototype.onImageChange = function (event) {
        this.uploadedImageFiles = event.target.files;
        console.log(this.uploadedImageFiles);
    };
    VideoUploadDialog.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form.value);
        var formData = new FormData();
        console.log(this.cat_namesReference, "bhhjd");
        console.log(this.sub_namesReference, "bhhjd");
        console.log(this.selectedcat_nametype, "cjdh");
        console.log(this.selectedsub_nametype, "cjdh");
        // for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads", this.uploadedvideoFiles[0], this.uploadedvideoFiles[0].name);
        formData.append("images", this.uploadedImageFiles[0], this.uploadedImageFiles[0].name);
        formData.append("title", this.form.get('title').value);
        formData.append("description", this.form.get('description').value);
        formData.append("author", this.form.get('author').value);
        formData.append("cat_id", this.selectedcat_nametype);
        formData.append("sub_id", this.selectedsub_nametype);
        console.log(this.data.globalurl, "hjhjhjhjhjh");
        this.http.post('https://beta.vicflix.com/upload', formData, {
            reportProgress: true,
            observe: 'events',
        })
            .subscribe(function (events) {
            if (events.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                _this.progress = Math.round(events.loaded / events.total * 100);
                console.log('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
                _this.Service.getcat_name();
            }
            else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response) {
                console.log(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response, "HttpEventType.Response");
                console.log(events);
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
        console.log(url, "outgoing url");
        return this.httpClient.post(url, payload);
    };
    VideoUploadService.prototype.getvideos = function (payload) {
        var url = app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].MAINURL + app_helpers_urlconstant__WEBPACK_IMPORTED_MODULE_1__["UrlConstants"].getvideos;
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

module.exports = __webpack_require__(/*! G:\beta.vicflix.com\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map