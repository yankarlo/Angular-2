import { Component } from '@angular/core';
// Importo el servicio y lo incluyo en providers
import {CartService} from '../services/cart.service';

@Component({
  selector : 'my-app',
  template: `
    <header>
      Cursos Platzi
    </header>
    <section>
      <courses></courses>
      <cart></cart>
    </section>
  `,
  providers: [CartService]
})

export class AppComponent { }
