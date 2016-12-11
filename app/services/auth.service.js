"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var USERS = [
    { email: 'yankarlo@hotmail.com', password: '123' },
    { email: 'yank@hotmail.com', password: '123' }
];
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.users = USERS;
        this.session = false;
    }
    AuthService.prototype.redirect = function () {
        var link = ['/login'];
        this.router.navigate(link);
    };
    AuthService.prototype.logout = function () {
        this.session = false;
        localStorage.removeItem('user');
        this.redirect();
    };
    AuthService.prototype.login = function (user) {
        var user_exist = this.users.find(function (u) { return u.email === user.email; });
        if (user_exist && user_exist.password === user.password) {
            localStorage.setItem('user', JSON.stringify(user_exist));
            this.session = true;
            var link = ['/'];
            this.router.navigate(link);
        }
    };
    AuthService.prototype.check = function () {
        if (localStorage.getItem('user') === null) {
            this.session = false;
            this.redirect();
        }
        else {
            this.session = true;
        }
    };
    AuthService.prototype.getSession = function () {
        return this.session;
    };
    AuthService.prototype.user = function () {
        return localStorage.getItem('user');
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map