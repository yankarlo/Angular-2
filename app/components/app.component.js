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
// Importo el servicio y lo incluyo en providers
var cart_service_1 = require('../services/cart.service');
var auth_service_1 = require('../services/auth.service');
var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <header>\n      Cursos Platzi\n      <div class=\"user_bar\">\n        <a *ngIf=\"!auth.session\" routerLink=\"login\">Inciar session</a>\n        <a *ngIf=\"auth.session\"  (click)=\"logout()\">Salir session</a>\n      </div>\n    </header>\n      <nav>\n        <a routerLink=\"\">Inicio</a>\n        <a routerLink=\"courses\">Cursos</a>\n      </nav>\n    <section>\n      <router-outlet></router-outlet>\n    </section>\n  ",
            providers: [cart_service_1.CartService, auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map