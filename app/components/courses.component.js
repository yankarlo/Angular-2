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
var api_service_1 = require('../services/api.service');
var auth_service_1 = require('../services/auth.service');
var apiobservable_1 = require('../services/apiobservable');
/*
const COURSES: Course[] =[
 {
    id : 1,
    name : 'Angular ',
    image : '/artefactos/angularjs.png',
    price : 100
  },
  {
    id : 2,
    name : 'Python',
    image : '/artefactos/python.png',
    price : 120
  }
]
*/
// En el div se emplea entre corchetes la variable definida en coursebox
var CoursesComponent = (function () {
    // courses: Course [] = COURSES;
    function CoursesComponent(ApiService, auth, ApiObservable) {
        this.ApiService = ApiService;
        this.auth = auth;
        this.ApiObservable = ApiObservable;
        this.title = 'Cursos disponibles';
    }
    CoursesComponent.prototype.getCourses = function () {
        /*this.ApiService.getCourses().then(
          courses => this.courses = courses
        );*/
        var _this = this;
        this.ApiObservable.getCourses().subscribe(function (data) { _this.courses = data; }, function (error) { return console.log(error); });
    };
    CoursesComponent.prototype.ngOnInit = function () {
        this.auth.check();
        this.getCourses();
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n    <h2>{{title}}</h2>\n    <div class=\"courses_list\">\n        <coursebox\n        [course]=\"course_info\"\n        *ngFor=\"let course_info of courses\"\n        ></coursebox>\n    </div>\n    <cart></cart>\n  ",
            providers: [api_service_1.ApiService, auth_service_1.AuthService, apiobservable_1.ApiOservable]
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, auth_service_1.AuthService, apiobservable_1.ApiOservable])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map