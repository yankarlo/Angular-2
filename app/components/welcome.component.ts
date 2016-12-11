import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'welcome',
    template: '<h2>BIENVENIDO A NUESTRA TIENDA</h2>'
})

export class WelcomeComponent implements OnInit {
    constructor(private auth: AuthService) {

    }

    ngOnInit() {
        this.auth.check();
    }
}
