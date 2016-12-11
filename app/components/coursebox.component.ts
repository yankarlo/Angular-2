import {Component, Input, trigger, state, style} from '@angular/core';
// Importo componente
import {Course} from '../common/course';

import {CartService} from '../services/cart.service';

import {Router} from '@angular/router';

@Component({
    selector: 'coursebox',
    template:
    `
        <div class="course" [@courseState] = "course.state">
            <img [src]="course.image" (click)="goToDetails(course)">
            <h2>{{course.name}}</h2>
            <span class="price">
                {{course.price | currency : 'USD': true :'1.2-2'}}
            </span>
            <button (click)="add(course)" >Agregar al carrito</button>
        </div>
    `,
    animations: [
        trigger('courseState', [
            state('inactive', style({
                backgrooundColor: 'none',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(0.9)'
            }))
        ])
    ]
})

export class CourseBoxComponent {
    @Input()
    course: Course;

    constructor(private CartService: CartService, private router: Router) {

    }

    add( course: Course) {
        course.state = 'active';
        setTimeout( () => { course.state = 'inactive'; }, 400);
        this.CartService.addToCart(course);
    }

    goToDetails(course: Course) {
        let link = ['/course', course.id];
        this.router.navigate(link);
    }
}

