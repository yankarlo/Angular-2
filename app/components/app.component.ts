import { Component, OnInit} from '@angular/core';
// Importo el servicio y lo incluyo en providers
import {CartService} from '../services/cart.service';

import {AuthService} from '../services/auth.service';

@Component({
  selector : 'my-app',
  template:
  `
    <header>
      Cursos Platzi
      <div class="user_bar">
        <a *ngIf="!auth.session" routerLink="login">Inciar session</a>
        <a *ngIf="auth.session"  (click)="logout()">Salir session</a>
      </div>
    </header>
      <nav>
        <a routerLink="">Inicio</a>
        <a routerLink="courses">Cursos</a>
      </nav>
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  providers: [CartService, AuthService]
})

export class AppComponent implements OnInit {

    user: boolean;

    constructor(private auth: AuthService) {

    }
    ngOnInit() {

    }

    logout() {
      this.auth.logout();
    }
 }
