import {Component, OnInit} from '@angular/core';

import {CartService} from '../services/cart.service';

@Component({
    selector: 'cart',
    template: `
        <div class="cart">
            <h2>Carrito</h2>
            <span>{{detail.items}} articulos agregados</span>
            <div *ngFor="let key of keys()" class="detail">
                {{courses[key].name}}
                {{courses[key].price | currency : 'USD' : true : '1.2-2'}}
                x
                {{courses[key].quantity}}
                <span class="total">
                    {{(courses[key].quantity * courses[key].price | currency : 'USD' : true : '1.2-2')}}
                </span>
            </div>
            <span class="total">{{detail.total | currency : 'USD' : true : '1.2-2'}} </span>
        </div>
    `
})

export class CartComponent implements OnInit {
    // Defino variables del servicio
    courses: any;
    detail: any;
    // Asigno a variable el servicio a consumir
    constructor(private CartService: CartService) {

    }
    // Crear llaves para poder usar nfFor
    keys() {
        return Object.keys(this.courses);
    }
    // Necesari para la implentacion de oninit 
    ngOnInit() {
        this.courses = this.CartService.getCourses();
        this.detail = this.CartService.getDetail();
    }
}