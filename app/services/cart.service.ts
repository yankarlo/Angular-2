// Servicios
import {Injectable} from '@angular/core';

import {Course} from '../common/course';

@Injectable()

export class CartService {
    private courses: any;
    private detail: any;

    constructor() {
        this.courses = {};
        this.detail = {total: 0, items: 0};
    }

    getCourses() {
        return this.courses;
    }
    getDetail() {
        return this.detail;
    }

    addToCart(course: Course) {
        // Sino existe curso con el id 
        if (!this.courses[course.id]) {
            // Agrego el curso
            this.courses[course.id] = {
                quantity: 1,
                name: course.name,
                price: course.price
            };
        }else {
            // Si existe le sumo 
            this.courses[course.id].quantity += 1;
        }

        this.detail.total += course.price;
        this.detail.items += 1;
    }
}