function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login-form/login-form.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login-form/login-form.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthComponentsLoginFormLoginFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"container\">\n  <mat-card-title>Login</mat-card-title>\n  <mat-card-subtitle class=\"subtitle\">\n    <p class=\"error\" *ngIf=\"errorMessage\">Please enter any data in both fields.</p>\n  </mat-card-subtitle>\n  <mat-card-content>\n    <form class=\"login-form\" [formGroup]=\"form\" (ngSubmit)=\"submit(form.value)\">\n      <p>\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\">\n        </mat-form-field>\n      </p>\n      <p>\n        <mat-form-field>\n          <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n        </mat-form-field>\n      </p>\n      <div class=\"button\">\n        <button type=\"submit\" mat-stroked-button color=\"primary\">Login</button>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login-page/login-page.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login-page/login-page.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthPagesLoginPageLoginPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-login-form></app-login-form>\n";
    /***/
  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/login-page/login-page.component */
    "./src/app/auth/pages/login-page/login-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__["LoginPageComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _shared_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../shared/components/snack-bar/snack-bar.component */
    "./src/app/shared/components/snack-bar/snack-bar.component.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/login-form/login-form.component */
    "./src/app/auth/components/login-form/login-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/login-page/login-page.component */
    "./src/app/auth/pages/login-page/login-page.component.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
      declarations: [_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_11__["LoginPageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
      providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]],
      entryComponents: [_shared_components_snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_4__["SnackBarComponent"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/auth/components/login-form/login-form.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/auth/components/login-form/login-form.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthComponentsLoginFormLoginFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  margin: 100px 0px;\r\n}\r\n\r\n.container {\r\n  height: 250px;\r\n  width: 320px;\r\n}\r\n\r\n.subtitle {\r\n  width: 100%;\r\n  height: 17px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n.login-form {\r\n  width: 100%;\r\n}\r\n\r\nmat-card-content {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\nmat-card-title {\r\n  align-self: start;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.button {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: end;\r\n          justify-content: flex-end;\r\n  margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMDBweCAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTdweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/components/login-form/login-form.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/auth/components/login-form/login-form.component.ts ***!
    \********************************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppAuthComponentsLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LoginFormComponent =
    /*#__PURE__*/
    function () {
      function LoginFormComponent(_formBuilder, _loginService) {
        _classCallCheck(this, LoginFormComponent);

        this._formBuilder = _formBuilder;
        this._loginService = _loginService;
        this.errorMessage = false;
        this.form = this._formBuilder.group({
          username: '',
          password: ''
        });
      }

      _createClass(LoginFormComponent, [{
        key: "hideError",
        value: function hideError() {
          this.errorMessage = false;
        }
      }, {
        key: "submit",
        value: function submit(formValue) {
          this.hideError();

          if (this.form.valid) {
            this._loginService.checkUser(formValue);

            if (!this._loginService.error) {
              this._loginService.showSnackBar('You have succesfully logged in.');

              this.form.reset();
            } else {
              this.errorMessage = true;
            }
          }
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
      }];
    };

    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login-form/login-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-form.component.css */
      "./src/app/auth/components/login-form/login-form.component.css")).default]
    })], LoginFormComponent);
    /***/
  },

  /***/
  "./src/app/auth/pages/login-page/login-page.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/auth/pages/login-page/login-page.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthPagesLoginPageLoginPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/auth/pages/login-page/login-page.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/auth/pages/login-page/login-page.component.ts ***!
    \***************************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppAuthPagesLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginPageComponent = function LoginPageComponent() {
      _classCallCheck(this, LoginPageComponent);
    };

    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/pages/login-page/login-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-page.component.css */
      "./src/app/auth/pages/login-page/login-page.component.css")).default]
    })], LoginPageComponent);
    /***/
  }
}]);
//# sourceMappingURL=auth-auth-module-es5.js.map