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
var cart_service_1 = require('../services/cart.service');
var CartComponent = (function () {
    // Asigno a variable el servicio a consumir
    function CartComponent(CartService) {
        this.CartService = CartService;
    }
    // Crear llaves para poder usar nfFor
    CartComponent.prototype.keys = function () {
        return Object.keys(this.courses);
    };
    // Necesari para la implentacion de oninit 
    CartComponent.prototype.ngOnInit = function () {
        this.courses = this.CartService.getCourses();
        this.detail = this.CartService.getDetail();
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            template: "\n        <div class=\"cart\">\n            <h2>Carrito</h2>\n            <span>{{detail.items}} articulos agregados</span>\n            <div *ngFor=\"let key of keys()\" class=\"detail\">\n                {{courses[key].name}}\n                {{courses[key].price | currency : 'USD' : true : '1.2-2'}}\n                x\n                {{courses[key].quantity}}\n                <span class=\"total\">\n                    {{(courses[key].quantity * courses[key].price | currency : 'USD' : true : '1.2-2')}}\n                </span>\n            </div>\n            <span class=\"total\">{{detail.total | currency : 'USD' : true : '1.2-2'}} </span>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
;
//# sourceMappingURL=cart.component.js.map