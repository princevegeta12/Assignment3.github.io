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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _booking_details_booking_details_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-details/booking-details.module */ "./src/app/booking-details/booking-details.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _booking_details_booking_details_module__WEBPACK_IMPORTED_MODULE_4__["BookingDetailsModule"],
                _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_9__["AuthenticationModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");





var routes = [
    { path: '', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '**', redirectTo: '/login' }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");










var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthenticationRoutingModule"]
            ],
            exports: [_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/login/getdata.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/getdata.service.ts ***!
  \*********************************************************/
/*! exports provided: GetdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetdataService", function() { return GetdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GetdataService = /** @class */ (function () {
    function GetdataService(http) {
        this.http = http;
    }
    //************check whether the user is there in our database or not.***************
    GetdataService.prototype.checkuser = function (parameters) {
        return this.http.get('http://localhost:3000/User_Details', {
            params: parameters
        });
    };
    GetdataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetdataService);
    return GetdataService;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n  width:40%;\n}\n.panel{\n  \n  background-color:  \t#FFFAFA;\n      box-shadow: 0px 0px 2px 2px gray;\n}\n.hover{\n  cursor:pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7QUFDWDtBQUNBOztFQUVFLDJCQUEyQjtNQUN2QixnQ0FBZ0M7QUFDdEM7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcbiAgd2lkdGg6NDAlO1xufVxuLnBhbmVse1xuICBcbiAgYmFja2dyb3VuZC1jb2xvcjogIFx0I0ZGRkFGQTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCBncmF5O1xufVxuLmhvdmVye1xuICBjdXJzb3I6cG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-4 col-md-offset-3\">\n    <h3 class=\"text-center text-danger\">LOGIN</h3>\n    <br>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <br>\n        <br>\n        <form class=\"form-group\" [formGroup]=\"user_details\">\n\n\n<!-- // ****Validations for email adress***** -->\n\n\n        <input type=\"text\" placeholder=\"Email Id\" class=\"form-control\" formControlName=\"Email\">\n        <div *ngIf=\"user_details.get('Email').invalid && user_details.get('Email').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Email').errors.required\" >**Required</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('Email').errors.pattern\" >**Invalid Email format</span>\n\n      </div>\n        <br>\n        <br>\n\n\n\n<!-- // *********Validations for password******** -->\n\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" formControlName=\"Password\">\n            <div *ngIf=\"user_details.get('Password').invalid && user_details.get('Password').touched\">\n\n              <span class=\"text-danger\" *ngIf=\"user_details.get('Password').errors.required\" >**Required</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('Password').errors.minlength\" >**Password should be between 6 and 12 characters</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('Password').errors.maxlength\" >**Password should be between 10 and 12 characters</span>\n            </div>\n            <br>\n            <br>\n\n\n<!-- //  ********submit button disabled if invalid entries are there******* -->\n\n\n            <input type=\"submit\"[disabled]=\"user_details.invalid\" class=\"btn btn-success col-md-offset-3\" value=\"SUBMIT\" (click)=\"matchdetails($event)\">\n          </form>\n        </div>\n        </div>\n\n\n\n<!-- //  *******If user is invalid a div element will appear asking him to register again if not alreday********** -->\n\n\n\n        <div class=\"panel panel-default\" *ngIf=\"invalid\">\n          <div class=\"panel-body\">\n            <h5>**Invalid Email Id or Password</h5>\n\n            <h5 class=\"hover\" routerLink=\"\">Click to register if not already</h5>\n          </div>\n        </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _getdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getdata.service */ "./src/app/authentication/login/getdata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _booking_details_my_bookings_fetchbookings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../booking-details/my-bookings/fetchbookings.service */ "./src/app/booking-details/my-bookings/fetchbookings.service.ts");






var LoginComponent = /** @class */ (function () {
    // ******injecting service for fetching the data for users after successful login**********
    function LoginComponent(form_builder, getdata, route, count_bookings) {
        this.form_builder = form_builder;
        this.getdata = getdata;
        this.route = route;
        this.count_bookings = count_bookings;
        this.invalid = false;
        // ******A dummy object that will be passed with get request as parameters.***********
        this.credentials = {
            "Email_Id": "ragnar@lothbrok.com",
            "Password": "alpha"
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // ******** count number of bookings of the logged in user past as well as upcomings*********
        var _this = this;
        this.count_bookings.fetch_booking_details().subscribe(function (results) {
            _this.bookingCount = results[0].past.length + results[0].upcoming.length;
        });
        this.user_details = this.form_builder.group({
            // ******* Validations for email and password***********
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]]
        });
    };
    // ************  Function to check whether logged in user is there in our database or not*******
    LoginComponent.prototype.matchdetails = function (e) {
        var _this = this;
        this.credentials.Email_Id = this.user_details.get('Email').value;
        this.credentials.Password = this.user_details.get('Password').value;
        this.getdata.checkuser(this.credentials).subscribe(function (result) {
            if ((Object.keys(result).length) == 0) {
                e.preventDefault();
                _this.invalid = true;
                setTimeout(function () {
                    _this.invalid = false;
                }, 3000);
            }
            else {
                _this.invalid = false;
                // ******** If user is valid store his details on local Storage**********
                localStorage.clear();
                localStorage.setItem("user_info", JSON.stringify(result));
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("no_of_bookings", _this.bookingCount);
                _this.route.navigate(['/profile']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html"),
            providers: [_getdata_service__WEBPACK_IMPORTED_MODULE_3__["GetdataService"], _booking_details_my_bookings_fetchbookings_service__WEBPACK_IMPORTED_MODULE_5__["FetchbookingsService"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _getdata_service__WEBPACK_IMPORTED_MODULE_3__["GetdataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _booking_details_my_bookings_fetchbookings_service__WEBPACK_IMPORTED_MODULE_5__["FetchbookingsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/password_validation/confirm_password.ts":
/*!************************************************************************!*\
  !*** ./src/app/authentication/password_validation/confirm_password.ts ***!
  \************************************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
//************ custom validator to check that two passwords fields match***************
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
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

/***/ "./src/app/authentication/register/post-data.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/authentication/register/post-data.service.ts ***!
  \**************************************************************/
/*! exports provided: PostDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDataService", function() { return PostDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostDataService = /** @class */ (function () {
    function PostDataService(http) {
        this.http = http;
    }
    // *************** Update the details of newly regstered user in our database**********
    PostDataService.prototype.postData = function (new_user) {
        this.http.post("http://localhost:3000/User_Details", new_user).subscribe(function (data) {
        });
    };
    PostDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostDataService);
    return PostDataService;
}());



/***/ }),

/***/ "./src/app/authentication/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text{\n\n  font-family: 'Roboto';\n}\n.panel{\n  \n  background-color:  \t#FFFAFA;\n  box-shadow: 0px 0px 2px 2px gray;\n}\n.hover{\n  cursor: pointer;\n}\n.btn{\n  width:30%;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSwyQkFBMkI7RUFDM0IsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxTQUFTOztBQUVYIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xuXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cbi5wYW5lbHtcbiAgXG4gIGJhY2tncm91bmQtY29sb3I6ICBcdCNGRkZBRkE7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCBncmF5O1xufVxuLmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRue1xuICB3aWR0aDozMCU7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-8 col-md-offset-2\">\n  <br>\n\n<h3 class=\"text-center text-danger\">REGISTER</h3>\n<br>\n\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n  <form class=\"form-group\" [formGroup]=\"user_details\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-1\">\n\n<!-- *********** Validations for FirstName fiels*********** -->\n\n\n        <h4 class=\"text-danger\">FIRSTNAME</h4>\n        <input type=\"text\" class=\"form-control\" formControlName=\"FirstName\">\n        <div *ngIf=\"user_details.get('FirstName').invalid && user_details.get('FirstName').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('FirstName').errors.required\" >**Required</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('FirstName').errors.pattern\" >**Invalid Name format</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('FirstName').errors.minlength\" >**Name should be between 3 and 12 characters</span>\n        </div>\n      </div>\n\n\n\n      <!-- *********** Validations for LastName fiels*********** -->\n\n\n\n\n      <div class=\"col-md-4 col-md-offset-1\">\n        <h4 class=\"text text-danger\"> LASTNAME</h4>\n        <input type=\"text\" class=\"form-control\" formControlName=\"LastName\">\n        <div *ngIf=\"user_details.get('LastName').invalid && user_details.get('LastName').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('LastName').errors.required\" >**Required</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('LastName').errors.pattern\" >**Invalid Name format</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('LastName').errors.minlength\" >**Name should be between 3 and 12 characters</span>\n        </div>\n      </div>\n    </div>\n    <br>\n<br>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-1\">\n\n\n\n        <!-- *********** Validations for Email fiels*********** -->\n\n\n\n        <h4 class=\"text text-danger\">EMAIL ADRESS</h4>\n        <input type=\"text\" class=\"form-control\" formControlName=\"Email\">\n        <div *ngIf=\"user_details.get('Email').invalid && user_details.get('Email').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Email').errors.required\" >**Required</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('Email').errors.pattern\" >**Invalid Email format</span>\n\n      </div>\n    </div>\n\n      <div class=\"col-md-4 col-md-offset-1\">\n\n\n        <!-- *********** Validations for Phone Number fiels*********** -->\n\n\n        <h4 class=\"text text-danger\">PHONE NUMBER</h4>\n        <input type=\"text\" class=\"form-control\" formControlName=\"PhoneNumber\">\n        <div *ngIf=\"user_details.get('PhoneNumber').invalid && user_details.get('PhoneNumber').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('PhoneNumber').errors.required\" >**Required</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('PhoneNumber').errors.pattern\" >**Invalid Number format</span>\n            <span class=\"text-danger\" *ngIf=\"user_details.get('PhoneNumber').errors.minLength\" >**Number should be of 10 digits</span>\n      </div>\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-1\">\n\n\n\n        <!-- *********** Validations for Adress fiels*********** -->\n\n        <h4 class=\"text text-danger\">ADRESS</h4>\n        <input type=\"text\" class=\"form-control\" formControlName=\"Adress\">\n        <div *ngIf=\"user_details.get('Adress').invalid && user_details.get('Adress').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Adress').errors.required\" >**Required</span>\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Adress').errors.minlength\" >**Adress should be between 10 and 20 characters</span>\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Adress').errors.maxlength\" >**Adress should be between 10 and 20 characters</span>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-md-offset-1\">\n\n\n\n        <!-- *********** Validations for Medical History fiels*********** -->\n\n\n        <h4 class=\"text text-danger\">HEALTH ISSUE</h4>\n        <input type=\"text\" class=\"form-control\" formControlName=\"MedicalDetails\">\n\n\n    </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-1\">\n\n\n\n        <!-- *********** Validations for Password fiels*********** -->\n\n\n        <h4 class=\"text text-danger\">PASSWORD</h4>\n        <input type=\"password\" class=\"form-control\" formControlName=\"Password\">\n        <div *ngIf=\"user_details.get('Password').invalid && user_details.get('Password').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Password').errors.required\" >**Required</span>\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Password').errors.minlength\" >**Password should be between 6 and 12 characters</span>\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Password').errors.maxlength\" >**Password should be between 10 and 12 characters</span>\n        </div>\n\n      </div>\n      <div class=\"col-md-4 col-md-offset-1\">\n\n\n\n\n        <!-- *********** Validations for  Confirm Password fiels*********** -->\n\n\n        <h4 class=\"text text-danger\"> CONFIRM PASSWORD</h4>\n        <input type=\"password\" class=\"form-control\" formControlName=\"ConfirmPassword\">\n        <div *ngIf=\"user_details.get('ConfirmPassword').invalid && user_details.get('ConfirmPassword').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('ConfirmPassword').errors.required\" >**Required</span>\n          <span class=\"text-danger\" *ngIf=\"user_details.get('ConfirmPassword').errors.mustMatch\" >**Passwords dont match</span>\n\n        </div>\n      </div>\n    </div>\n    <br>\n    <br>\n    <input type=\"submit\" [disabled]=\"user_details.invalid\" class=\"col-md-offset-4 btn btn-success\" (click)=\"onRegister()\" value=\"REGISTER\">\n  </form>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n\n\n\n      <!-- *********** If user has already registered*********** -->\n\n\n      <h5 class=\"text-success text-center hover\" routerLink=\"login\">Already a user click to login</h5>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validation_confirm_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../password_validation/confirm_password */ "./src/app/authentication/password_validation/confirm_password.ts");
/* harmony import */ var _post_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-data.service */ "./src/app/authentication/register/post-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var RegisterComponent = /** @class */ (function () {
    // ********Injecting service for posting data on the database when a user registers**********
    function RegisterComponent(form_builder, post_data, http, route) {
        this.form_builder = form_builder;
        this.post_data = post_data;
        this.http = http;
        this.route = route;
        // *********** A dummy object that will be passed as arguments for posting form details*****
        this.newUser = {
            "First_Name": "saksham",
            "Last_Name": "gupta",
            "Email_Id": "ragnar@lothbrok.com",
            "Phone_Number": 7006648712,
            "Password": "alpha",
            "adress": "C-14 Talab Tillo Jammu",
            "Medical_Problems": "none"
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // ******Validations for form fields********
        this.user_details = this.form_builder.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            PhoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            Adress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            MedicalDetails: [''],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]],
            ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validator: Object(_password_validation_confirm_password__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('Password', 'ConfirmPassword') });
    };
    RegisterComponent.prototype.onRegister = function () {
        // ********Posting data to database*********
        //
        this.newUser.First_Name = this.user_details.get('FirstName').value;
        this.newUser.Last_Name = this.user_details.get('LastName').value;
        this.newUser.Email_Id = this.user_details.get('Email').value;
        this.newUser.Phone_Number = this.user_details.get('PhoneNumber').value;
        this.newUser.Password = this.user_details.get('Password').value;
        this.newUser.adress = this.user_details.get('Adress').value;
        this.newUser.Medical_Problems = this.user_details.get('MedicalDetails').value;
        this.post_data.postData(this.newUser);
        this.route.navigate(['/login']);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/authentication/register/register.component.html"),
            providers: [_post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"]],
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/authentication/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _post_data_service__WEBPACK_IMPORTED_MODULE_4__["PostDataService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/booking-details/bookdetails-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/booking-details/bookdetails-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: BookdetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailsRoutingModule", function() { return BookdetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/booking-details/profile/profile.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/booking-details/navbar/navbar.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/booking-details/logout/logout.component.ts");
/* harmony import */ var _profile_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/auth.guard */ "./src/app/booking-details/profile/auth.guard.ts");
/* harmony import */ var _my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-bookings/my-bookings.component */ "./src/app/booking-details/my-bookings/my-bookings.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/booking-details/faq/faq.component.ts");
/* harmony import */ var _my_bookings_book_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-bookings/book.guard */ "./src/app/booking-details/my-bookings/book.guard.ts");










var routes = [
    { path: 'navbar', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], canActivate: [_profile_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"] },
    { path: 'bookings', component: _my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_7__["MyBookingsComponent"], canActivate: [_my_bookings_book_guard__WEBPACK_IMPORTED_MODULE_9__["BookGuard"]] },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"] }
];
var BookdetailsRoutingModule = /** @class */ (function () {
    function BookdetailsRoutingModule() {
    }
    BookdetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BookdetailsRoutingModule);
    return BookdetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/booking-details/booking-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/booking-details/booking-details.module.ts ***!
  \***********************************************************/
/*! exports provided: BookingDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailsModule", function() { return BookingDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/booking-details/profile/profile.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/booking-details/navbar/navbar.component.ts");
/* harmony import */ var _bookdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookdetails-routing.module */ "./src/app/booking-details/bookdetails-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/auth.guard */ "./src/app/booking-details/profile/auth.guard.ts");
/* harmony import */ var _my_bookings_book_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-bookings/book.guard */ "./src/app/booking-details/my-bookings/book.guard.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/booking-details/logout/logout.component.ts");
/* harmony import */ var _my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-bookings/my-bookings.component */ "./src/app/booking-details/my-bookings/my-bookings.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/booking-details/faq/faq.component.ts");
/* harmony import */ var _toggle_header_toggle_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toggle-header/toggle-header.component */ "./src/app/booking-details/toggle-header/toggle-header.component.ts");














var BookingDetailsModule = /** @class */ (function () {
    function BookingDetailsModule() {
    }
    BookingDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"], _my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_10__["MyBookingsComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_11__["FaqComponent"], _toggle_header_toggle_header_component__WEBPACK_IMPORTED_MODULE_12__["ToggleHeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _bookdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookdetailsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [_profile_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _my_bookings_book_guard__WEBPACK_IMPORTED_MODULE_8__["BookGuard"]],
            exports: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]]
        })
    ], BookingDetailsModule);
    return BookingDetailsModule;
}());



/***/ }),

/***/ "./src/app/booking-details/faq/faq.component.css":
/*!*******************************************************!*\
  !*** ./src/app/booking-details/faq/faq.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  color: #6a6c6f;\n  background-color: #f1f3f6;\n  margin-top:30px;\n}\n\n.container {\n  max-width: 960px;\n\n  background-color: #fff;\n    box-shadow: 0px 0px 2px 2px gray;\n\n}\n\n.panel-default>.panel-heading {\n  color: #333;\n  background-color: #fff;\n  border-color: #e4e5e7;\n  padding: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border:1px solid black;\n}\n\n.panel-default>.panel-heading a {\n  display: block;\n  padding: 10px 15px;\n}\n\n.text{\n  font-family:helvetica;\n  font-color: \t#FF7F50;\n\n}\n\n.panel-default>.panel-heading a:after {\n  content: \"\";\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  float: right;\n  transition: -webkit-transform .25s linear;\n  transition: transform .25s linear;\n  transition: transform .25s linear, -webkit-transform .25s linear;\n  -webkit-transition: -webkit-transform .25s linear;\n}\n\n.panel-default>.panel-heading a[aria-expanded=\"true\"] {\n  background-color: #eee;\n}\n\n.panel-default>.panel-heading a[aria-expanded=\"true\"]:after {\n  content: \"\\2212\";\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.panel-default>.panel-heading a[aria-expanded=\"false\"]:after {\n  content: \"\\002b\";\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.panel-body{\n  border:1px solid black;\n  background-color:  \t#F5F5DC;\n}\n\na{\n  background-color:  \t#F8F8FF;\n   text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZy1kZXRhaWxzL2ZhcS9mYXEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjs7RUFFaEIsc0JBQXNCO0lBQ3BCLGdDQUFnQzs7QUFFcEM7O0FBS0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9COztBQUV0Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1oseUNBQWlDO0VBQWpDLGlDQUFpQztFQUFqQyxnRUFBaUM7RUFDakMsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSwyQkFBMkI7R0FDMUIscUJBQXFCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYm9va2luZy1kZXRhaWxzL2ZhcS9mYXEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBjb2xvcjogIzZhNmM2ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNjtcbiAgbWFyZ2luLXRvcDozMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5NjBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDJweCBncmF5O1xuXG59XG5cblxuXG5cbi5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2U0ZTVlNztcbiAgcGFkZGluZzogMDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbn1cblxuLnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWhlYWRpbmcgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4udGV4dHtcbiAgZm9udC1mYW1pbHk6aGVsdmV0aWNhO1xuICBmb250LWNvbG9yOiBcdCNGRjdGNTA7XG5cbn1cbi5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5nIGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiAnR2x5cGhpY29ucyBIYWxmbGluZ3MnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI1cyBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBsaW5lYXI7XG59XG5cbi5wYW5lbC1kZWZhdWx0Pi5wYW5lbC1oZWFkaW5nIGFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4ucGFuZWwtZGVmYXVsdD4ucGFuZWwtaGVhZGluZyBhW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdOmFmdGVyIHtcbiAgY29udGVudDogXCJcXDIyMTJcIjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ucGFuZWwtZGVmYXVsdD4ucGFuZWwtaGVhZGluZyBhW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFwwMDJiXCI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4ucGFuZWwtYm9keXtcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIFx0I0Y1RjVEQztcbn1cbmF7XG4gIGJhY2tncm91bmQtY29sb3I6ICBcdCNGOEY4RkY7XG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/booking-details/faq/faq.component.html":
/*!********************************************************!*\
  !*** ./src/app/booking-details/faq/faq.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<br>\n<br>\n<br>\n<div class=\"col-md-offset-5\">\n<app-toggle-header ></app-toggle-header>\n</div>\n<br>\n<div class=\"container col-md-5 col-md-offset-3\">\n  <br>\n  <br>\n\n  <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n        <h4 class=\"panel-title\">\n        <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n        Lorem Ipsum is simply dummy ?\n        </a>\n      </h4>\n      </div>\n      <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n        <div class=\"panel-body\">\n        <h4 class=\"text\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n</h4>\n        </div>\n\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n        <h4 class=\"panel-title\">\n        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n            Lorem Ipsum is simply dummy ?\n        </a>\n      </h4>\n      </div>\n      <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n        <div class=\"panel-body\">\n          <h4 class=\"text\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n</h4>\n        </div>\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n        <h4 class=\"panel-title\">\n        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n            Lorem Ipsum is simply dummy ?\n        </a>\n      </h4>\n      </div>\n      <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n        <div class=\"panel-body\">\n        <h4 class=\"text\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n</h4>\n        </div>\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n        <h4 class=\"panel-title\">\n        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n          Lorem Ipsum is simply dummy ?\n        </a>\n      </h4>\n      </div>\n      <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n        <div class=\"panel-body\">\n        <h4 class=\"text\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n</h4>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/booking-details/faq/faq.component.ts":
/*!******************************************************!*\
  !*** ./src/app/booking-details/faq/faq.component.ts ***!
  \******************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetchfaq_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchfaq.service */ "./src/app/booking-details/faq/fetchfaq.service.ts");



var FaqComponent = /** @class */ (function () {
    function FaqComponent(faqdetails) {
        this.faqdetails = faqdetails;
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem("state", "FAQs");
        this.faqdetails.fetch_faq_details().subscribe(function (response) {
            _this.faqDetails = response;
        });
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/booking-details/faq/faq.component.html"),
            providers: [_fetchfaq_service__WEBPACK_IMPORTED_MODULE_2__["FetchfaqService"]],
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/booking-details/faq/faq.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetchfaq_service__WEBPACK_IMPORTED_MODULE_2__["FetchfaqService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/booking-details/faq/fetchfaq.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/booking-details/faq/fetchfaq.service.ts ***!
  \*********************************************************/
/*! exports provided: FetchfaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchfaqService", function() { return FetchfaqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FetchfaqService = /** @class */ (function () {
    function FetchfaqService(http) {
        this.http = http;
    }
    FetchfaqService.prototype.fetch_faq_details = function () {
        return this.http.get('http://localhost:3000/faqs');
    };
    ;
    FetchfaqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FetchfaqService);
    return FetchfaqService;
}());



/***/ }),

/***/ "./src/app/booking-details/logout/logout.component.css":
/*!*************************************************************!*\
  !*** ./src/app/booking-details/logout/logout.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmctZGV0YWlscy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/booking-details/logout/logout.component.html":
/*!**************************************************************!*\
  !*** ./src/app/booking-details/logout/logout.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/booking-details/logout/logout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/booking-details/logout/logout.component.ts ***!
  \************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(route) {
        this.route = route;
    }
    // ************ If a user logs out  all stored records will be erased from the local storage*********
    LogoutComponent.prototype.ngOnInit = function () {
        localStorage.clear();
        this.route.navigate(['/']);
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/booking-details/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/booking-details/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/booking-details/my-bookings/book.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/booking-details/my-bookings/book.guard.ts ***!
  \***********************************************************/
/*! exports provided: BookGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookGuard", function() { return BookGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BookGuard = /** @class */ (function () {
    function BookGuard(route) {
        this.route = route;
    }
    BookGuard.prototype.canActivate = function () {
        // ******Only logged in user should be able to view bookings page**********
        if (localStorage.getItem("loggedIn") == "true") {
            return true;
        }
        else {
            this.route.navigate(['/']);
            return false;
        }
    };
    BookGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookGuard);
    return BookGuard;
}());



/***/ }),

/***/ "./src/app/booking-details/my-bookings/fetchbookings.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/booking-details/my-bookings/fetchbookings.service.ts ***!
  \**********************************************************************/
/*! exports provided: FetchbookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchbookingsService", function() { return FetchbookingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FetchbookingsService = /** @class */ (function () {
    function FetchbookingsService(http) {
        this.http = http;
    }
    // ********* Fetch Booking details from the database ********
    FetchbookingsService.prototype.fetch_booking_details = function () {
        return this.http.get('http://localhost:3000/Bookings');
    };
    ;
    FetchbookingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FetchbookingsService);
    return FetchbookingsService;
}());



/***/ }),

/***/ "./src/app/booking-details/my-bookings/my-bookings.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/booking-details/my-bookings/my-bookings.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".po{\n  border:1px solid gray;\n  margin-bottom: 3px;\n  margin-left: 7px;\n  background-color: \t#F0FFFF;\n}\n.panel-body{\n  margin-left: 15px;\n  margin-right: 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.co{\n  color:blue;\n}\n.coe{\n  color:red;\n}\n.bor{\n  border:1px solid black;\nheight:20%;\nwidth:20%;\nbackground-color:#FFEBCD;\npadding-left: 3px;\npadding-right: 3px;\npadding-top: 6px;\npadding-bottom: 6px;\n\n}\n.btn1{\n  border:1px solid black;\nbackground-color:MediumSeaGreen;\nmargin-left: 2px;\nmargin-right: 2px;\nheight:40px;\nwidth:20%;\n}\n.btn2{\n  border:1px solid black;\nbackground-color:#FFEBCD;\n\nmargin-right: 2px;\nheight:40px;\nwidth:20%;\n}\n.nova{\n  border-bottom:1px solid gray;\n  margin-bottom:3px;\n\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZy1kZXRhaWxzL215LWJvb2tpbmdzL215LWJvb2tpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QixVQUFVO0FBQ1YsU0FBUztBQUNULHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixtQkFBbUI7O0FBRW5CO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEIsK0JBQStCO0FBQy9CLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCLHdCQUF3Qjs7QUFFeEIsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixpQkFBaUI7OztBQUduQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmctZGV0YWlscy9teS1ib29raW5ncy9teS1ib29raW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBve1xuICBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogXHQjRjBGRkZGO1xufVxuLnBhbmVsLWJvZHl7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb3tcbiAgY29sb3I6Ymx1ZTtcbn1cbi5jb2V7XG4gIGNvbG9yOnJlZDtcbn1cbi5ib3J7XG4gIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG5oZWlnaHQ6MjAlO1xud2lkdGg6MjAlO1xuYmFja2dyb3VuZC1jb2xvcjojRkZFQkNEO1xucGFkZGluZy1sZWZ0OiAzcHg7XG5wYWRkaW5nLXJpZ2h0OiAzcHg7XG5wYWRkaW5nLXRvcDogNnB4O1xucGFkZGluZy1ib3R0b206IDZweDtcblxufVxuLmJ0bjF7XG4gIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOk1lZGl1bVNlYUdyZWVuO1xubWFyZ2luLWxlZnQ6IDJweDtcbm1hcmdpbi1yaWdodDogMnB4O1xuaGVpZ2h0OjQwcHg7XG53aWR0aDoyMCU7XG59XG4uYnRuMntcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbmJhY2tncm91bmQtY29sb3I6I0ZGRUJDRDtcblxubWFyZ2luLXJpZ2h0OiAycHg7XG5oZWlnaHQ6NDBweDtcbndpZHRoOjIwJTtcbn1cbi5ub3Zhe1xuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmF5O1xuICBtYXJnaW4tYm90dG9tOjNweDtcblxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/booking-details/my-bookings/my-bookings.component.html":
/*!************************************************************************!*\
  !*** ./src/app/booking-details/my-bookings/my-bookings.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<br>\n<br>\n<br>\n<div class=\"col-md-offset-5\">\n<app-toggle-header ></app-toggle-header>\n</div>\n<hr>\n<div class=\"container col-md-10 col-md-offset-2\">\n  <div class=\"pack\">\n\n<!-- ************The buttons to toggle between past and upcoming bookings********** -->\n\n\n<div class=\"col-md-offset-2\">\n    <button  id=\"upcoming\" class=\"btn1\" (click)=\"up_bookings()\">UPCOMING</button>\n    <button  id=\"past\" class=\"btn2\" (click)=\"toggle_bookings()\">PAST</button>\n</div>\n<!--\n**************If user selects upcoming bookings**************** -->\n\n\n<br>\n<div *ngIf=\"toggle_upcoming\">\n<div class=\"po col-md-8\"*ngFor=\"let upcoming_details of upcoming_bookings\">\n  <h5 class=\"text-success\">{{upcoming_details.date}}</h5>\n<br>\n  <h3>{{upcoming_details.name}}</h3>\n\n<h4 *ngIf=\"upcoming_details.status=='PENDING'\" class=\"text-danger text-center col-md-offset-8 bor\"><span class=\"glyphicon glyphicon-time\"></span>  {{upcoming_details.status}}</h4>\n<h4 *ngIf=\"upcoming_details.status=='On The Way'\" class=\"text-primary text-center col-md-offset-8 bor\">  {{upcoming_details.status}}</h4>\n  <h5 class=\"text-success\">{{upcoming_details.adress}}</h5>\n\n\n</div>\n</div>\n\n\n<!--\n**************If user selects past bookings**************** -->\n\n<div *ngIf=\"toggle_past\">\n  <div class=\"po col-md-8\"*ngFor=\"let past_details of past_bookings\">\n    <h5 class=\"text-success\">{{past_details.date}}</h5>\n  <br>\n    <h3>{{past_details.name}}</h3>\n\n  <h4 *ngIf=\"past_details.status=='PENDING'\" class=\"text-danger text-center col-md-offset-8 bor\"><span class=\"glyphicon glyphicon-time\"></span>  {{past_details.status}}</h4>\n  <h4 *ngIf=\"past_details.status=='On The Way'\" class=\"text-primary text-center col-md-offset-8 bor\">  {{past_details.status}}</h4>\n    <h5 class=\"text-success\">{{past_details.adress}}</h5>\n\n\n  </div>\n\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/booking-details/my-bookings/my-bookings.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/booking-details/my-bookings/my-bookings.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyBookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBookingsComponent", function() { return MyBookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetchbookings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchbookings.service */ "./src/app/booking-details/my-bookings/fetchbookings.service.ts");



var MyBookingsComponent = /** @class */ (function () {
    function MyBookingsComponent(booking_details) {
        this.booking_details = booking_details;
        // **********Boolean variables to toggle between displaying upcoming or past bookings***************
        this.toggle_upcoming = true;
        this.toggle_past = false;
    }
    MyBookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem("state", "MY BOOKINGS");
        this.booking_details.fetch_booking_details().subscribe(function (result) {
            //
            // **************Storing fetched bookings from service in  variables**********
            _this.upcoming_bookings = result[0].upcoming;
            _this.past_bookings = result[0].past;
        });
    };
    MyBookingsComponent.prototype.up_bookings = function () {
        this.toggle_past = false;
        this.toggle_upcoming = true;
        document.getElementById("upcoming").style.backgroundColor = "MediumSeaGreen";
        document.getElementById("past").style.backgroundColor = "#FFEBCD";
    };
    // **************If user toggles between upcomings and past bookings****************
    MyBookingsComponent.prototype.toggle_bookings = function () {
        this.toggle_upcoming = false;
        this.toggle_past = true;
        document.getElementById("upcoming").style.backgroundColor = "#FFEBCD";
        document.getElementById("past").style.backgroundColor = "MediumSeaGreen";
    };
    MyBookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-bookings',
            template: __webpack_require__(/*! ./my-bookings.component.html */ "./src/app/booking-details/my-bookings/my-bookings.component.html"),
            providers: [_fetchbookings_service__WEBPACK_IMPORTED_MODULE_2__["FetchbookingsService"]],
            styles: [__webpack_require__(/*! ./my-bookings.component.css */ "./src/app/booking-details/my-bookings/my-bookings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetchbookings_service__WEBPACK_IMPORTED_MODULE_2__["FetchbookingsService"]])
    ], MyBookingsComponent);
    return MyBookingsComponent;
}());



/***/ }),

/***/ "./src/app/booking-details/navbar/navbar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/booking-details/navbar/navbar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".glyphicon{\n  margin-right:5px;\n}\n.count{\n  margin-left: 2px;\n}\nnav{\n  position: fixed;\ntop: 0;\nwidth: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZy1kZXRhaWxzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCLE1BQU07QUFDTixXQUFXO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9ib29raW5nLWRldGFpbHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdseXBoaWNvbntcbiAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cbi5jb3VudHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cbm5hdntcbiAgcG9zaXRpb246IGZpeGVkO1xudG9wOiAwO1xud2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/booking-details/navbar/navbar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/booking-details/navbar/navbar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">\n<img src=\"https://res.cloudinary.com/candidbusiness/image/upload/v1455406304/dispute-bills-chicago.png\" width=\"200px\" height=\"30px\">\n\n        </a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li routerLinkActive=\"active\"><a routerLink=\"/bookings\"><span class=\"glyphicon glyphicon-list-alt\"></span>    MY BOOKINGS <span class=\"count\">({{booking_count}})</span></a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/profile\"><span class=\"glyphicon glyphicon-user\"></span> {{name}}</a></li>\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">MORE <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li routerLinkActive=\"active\"><a> <span class=\"glyphicon glyphicon-envelope\"></span>NOTIFICATIONS</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/faq\"><span class=\"glyphicon glyphicon-pencil\"></span>FAQs</a></li>\n          <li routerLinkActive=\"active\"><a><span class=\"glyphicon glyphicon-comment\"></span>CONTACT US</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/logout\"><span class=\"glyphicon glyphicon-log-out\"></span>   LOGOUT</a></li>\n        </ul>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/booking-details/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/booking-details/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        //
        // ***********Display name and no_of_bookings of logged in user**********
        this.name = JSON.parse(localStorage.getItem("user_info"))[0].First_Name;
        this.booking_count = JSON.parse(localStorage.getItem("no_of_bookings"));
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/booking-details/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/booking-details/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/booking-details/profile/auth.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/booking-details/profile/auth.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(route) {
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function () {
        // ******* Only logged in user should view Profile page****************
        if (localStorage.getItem("loggedIn") == "true") {
            return true;
        }
        else {
            this.route.navigate(['/']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/booking-details/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/booking-details/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmctZGV0YWlscy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/booking-details/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/booking-details/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<br>\n<br>\n<br>\n<div class=\"col-md-offset-5\">\n<app-toggle-header ></app-toggle-header>\n</div>\n<div class=\"container col-md-8 col-md-offset-2\">\n\n\n\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n  <form class=\"form-group\" [formGroup]=\"user_details\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-1\">\n\n\n        <!-- ******* Validations for First Name********* -->\n\n\n\n        <h4 class=\"text-danger\">FIRSTNAME</h4>\n        <input type=\"text\" class=\"form-control\" formControlName=\"FirstName\">\n        <div *ngIf=\"user_details.get('FirstName').invalid && user_details.get('FirstName').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('FirstName').errors.required\" >**Required</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('FirstName').errors.pattern\" >**Invalid Name format</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('FirstName').errors.minlength\" >**Name should be between 3 and 12 characters</span>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-md-offset-1\">\n\n\n\n                <!-- ******* Validations for Last Name********* -->\n\n\n        <h4 class=\"text text-danger\"> LASTNAME</h4>\n        <input type=\"text\" class=\"form-control\" formControlName=\"LastName\">\n        <div *ngIf=\"user_details.get('LastName').invalid && user_details.get('LastName').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('LastName').errors.required\" >**Required</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('LastName').errors.pattern\" >**Invalid Name format</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('LastName').errors.minlength\" >**Name should be between 3 and 12 characters</span>\n        </div>\n      </div>\n    </div>\n    <br>\n<br>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-1\">\n\n\n\n                <!-- ******* Validations for  E-mail********* -->\n\n\n        <h4 class=\"text text-danger\">EMAIL ADRESS</h4>\n        <input type=\"text\" class=\"form-control\" formControlName=\"Email\">\n        <div *ngIf=\"user_details.get('Email').invalid && user_details.get('Email').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Email').errors.required\" >**Required</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('Email').errors.pattern\" >**Invalid Email format</span>\n\n      </div>\n    </div>\n\n      <div class=\"col-md-4 col-md-offset-1\">\n        <h4 class=\"text text-danger\">PHONE NUMBER</h4>\n\n\n\n\n                <!-- ******* Validations for Phone Number********* -->\n\n\n        <input type=\"text\" class=\"form-control\" formControlName=\"PhoneNumber\">\n        <div *ngIf=\"user_details.get('PhoneNumber').invalid && user_details.get('PhoneNumber').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('PhoneNumber').errors.required\" >**Required</span>\n              <span class=\"text-danger\" *ngIf=\"user_details.get('PhoneNumber').errors.pattern\" >**Invalid Number format</span>\n            <span class=\"text-danger\" *ngIf=\"user_details.get('PhoneNumber').errors.minLength\" >**Number should be of 10 digits</span>\n      </div>\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-1\">\n        <h4 class=\"text text-danger\">ADRESS</h4>\n\n\n\n                <!-- ******* Validations for First Name********* -->\n\n\n        <input type=\"text\" class=\"form-control\" formControlName=\"Adress\">\n        <div *ngIf=\"user_details.get('Adress').invalid && user_details.get('Adress').touched\">\n\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Adress').errors.required\" >**Required</span>\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Adress').errors.minlength\" >**Adress should be between 10 and 20 characters</span>\n          <span class=\"text-danger\" *ngIf=\"user_details.get('Adress').errors.maxlength\" >**Adress should be between 10 and 20 characters</span>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-md-offset-1\">\n\n\n\n                <!-- ******* Validations for First Name********* -->\n\n\n        <h4 class=\"text text-danger\">HEALTH ISSUE</h4>\n        <input type=\"text\" class=\"form-control\" formControlName=\"MedicalDetails\">\n\n\n    </div>\n    </div>\n\n\n    <br>\n    <br>\n    <input type=\"submit\" class=\"col-md-offset-4 btn btn-success\" value=\"UPDATE INFO\" (click)=\"update_info()\">\n  </form>\n\n\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/booking-details/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/booking-details/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _updateinfo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateinfo.service */ "./src/app/booking-details/profile/updateinfo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProfileComponent = /** @class */ (function () {
    // ************** Injecting service that will update the user details********************
    function ProfileComponent(form_builder, updateuser, route) {
        this.form_builder = form_builder;
        this.updateuser = updateuser;
        this.route = route;
        // ************ A dummy object that will hold updated data and send it to database************
        this.newUser = {
            "First_Name": "saksham",
            "Last_Name": "gupta",
            "Email_Id": "ragnar@lothbrok.com",
            "Phone_Number": 7006648712,
            "Password": "alpha",
            "adress": "C-14 Talab Tillo Jammu",
            "Medical_Problems": "none",
            "id": 1
        };
        this.store_user = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        localStorage.setItem("state", "PROFILE");
        // *********** Creating the form******************
        this.user_details = this.form_builder.group({
            FirstName: [JSON.parse(localStorage.getItem("user_info"))[0].First_Name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            LastName: [JSON.parse(localStorage.getItem("user_info"))[0].Last_Name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            Email: [JSON.parse(localStorage.getItem("user_info"))[0].Email_Id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            PhoneNumber: [JSON.parse(localStorage.getItem("user_info"))[0].Phone_Number, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            Adress: [JSON.parse(localStorage.getItem("user_info"))[0].adress, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            MedicalDetails: [JSON.parse(localStorage.getItem("user_info"))[0].Medical_Problems]
        });
    };
    // ******************** Initializing the object that will be sent to database****************
    ProfileComponent.prototype.update_info = function () {
        this.newUser.First_Name = this.user_details.get('FirstName').value;
        this.newUser.Last_Name = this.user_details.get('LastName').value;
        this.newUser.Email_Id = this.user_details.get('Email').value;
        this.newUser.Phone_Number = this.user_details.get('PhoneNumber').value;
        this.newUser.adress = this.user_details.get('Adress').value;
        this.newUser.Medical_Problems = this.user_details.get('MedicalDetails').value;
        this.newUser.Password = JSON.parse(localStorage.getItem("user_info"))[0].Password;
        this.newUser.id = JSON.parse(localStorage.getItem("user_info"))[0].id;
        this.updateuser.update_user(this.newUser, JSON.parse(localStorage.getItem("user_info"))[0].id);
        this.store_user[0] = this.newUser;
        localStorage.setItem("user_info", JSON.stringify(this.store_user));
        // setTimeout(()=>{
        // window.location.reload();
        // }, 1000);
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/booking-details/profile/profile.component.html"),
            providers: [_updateinfo_service__WEBPACK_IMPORTED_MODULE_3__["UpdateinfoService"]],
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/booking-details/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _updateinfo_service__WEBPACK_IMPORTED_MODULE_3__["UpdateinfoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/booking-details/profile/updateinfo.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/booking-details/profile/updateinfo.service.ts ***!
  \***************************************************************/
/*! exports provided: UpdateinfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateinfoService", function() { return UpdateinfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UpdateinfoService = /** @class */ (function () {
    function UpdateinfoService(http) {
        this.http = http;
    }
    // *******************Service that will update the records in database********************
    UpdateinfoService.prototype.update_user = function (par, id) {
        this.http.put('http://localhost:3000/User_Details' + "/" + id, par).subscribe(function (data) {
        });
    };
    UpdateinfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UpdateinfoService);
    return UpdateinfoService;
}());



/***/ }),

/***/ "./src/app/booking-details/toggle-header/toggle-header.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/booking-details/toggle-header/toggle-header.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmctZGV0YWlscy90b2dnbGUtaGVhZGVyL3RvZ2dsZS1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/booking-details/toggle-header/toggle-header.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/booking-details/toggle-header/toggle-header.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-danger\">{{state}}</h3>\n"

/***/ }),

/***/ "./src/app/booking-details/toggle-header/toggle-header.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/booking-details/toggle-header/toggle-header.component.ts ***!
  \**************************************************************************/
/*! exports provided: ToggleHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleHeaderComponent", function() { return ToggleHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToggleHeaderComponent = /** @class */ (function () {
    function ToggleHeaderComponent() {
    }
    ToggleHeaderComponent.prototype.ngOnInit = function () {
        // *************Dynamically switching between the state headers********************
        this.state = localStorage.getItem("state");
    };
    ToggleHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toggle-header',
            template: __webpack_require__(/*! ./toggle-header.component.html */ "./src/app/booking-details/toggle-header/toggle-header.component.html"),
            styles: [__webpack_require__(/*! ./toggle-header.component.css */ "./src/app/booking-details/toggle-header/toggle-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleHeaderComponent);
    return ToggleHeaderComponent;
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/saksham/Bookings/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map