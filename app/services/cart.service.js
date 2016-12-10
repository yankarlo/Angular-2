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
// Servicios
var core_1 = require('@angular/core');
var CartService = (function () {
    function CartService() {
        this.courses = {};
        this.detail = { total: 0, items: 0 };
    }
    CartService.prototype.getCourses = function () {
        return this.courses;
    };
    CartService.prototype.getDetail = function () {
        return this.detail;
    };
    CartService.prototype.addToCart = function (course) {
        // Sino existe curso con el id 
        if (!this.courses[course.id]) {
            // Agrego el curso
            this.courses[course.id] = {
                quantity: 1,
                name: course.name,
                price: course.price
            };
        }
        else {
            // Si existe le sumo 
            this.courses[course.id].quantity += 1;
        }
        this.detail.total += course.price;
        this.detail.items += 1;
    };
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
;
//# sourceMappingURL=cart.service.js.map