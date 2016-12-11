import {Component} from '@angular/core';
import {AuthService, User} from '../services/auth.service';

@Component({
    selector: 'login-form',
    template:
    `
        <p> La tienda es privada </p>
        <form (ngSubmit) = "login()" #loginForm="ngForm">

            <div *ngIf="error" class="error">
                {{error}}
            </div>
            <label>Tu email:</label>
            <input type="text"
                required
                autocomplete="off"
                [(ngModel)]= "user.email"
                placeholder="Email"
                name="email"
            >

            <label>Tu password:</label>
            <input type="password"
                required
                autocomplete="off"
                [(ngModel)]= "user.password"
                placeholder="Contraseña"
                name="password"
            >
            <button type = "submit">Ingresar</button>
        </form>
    `
})

export class LoginComponent {
    user: User;
    error: string;

    constructor(private auth: AuthService) {
        this.user = {email: null, password: null};
    }

    login() {
        if (!this.auth.login(this.user)) {
            this.error = 'Contraseña es incorrecta';
        }
    }
}
