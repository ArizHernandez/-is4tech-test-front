import { Component } from '@angular/core';
import { routes } from '../../../routes/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  routesNav = routes;

  constructor() {
    this.routesNav = this.routesNav.filter(route => route.keyword !== 'HOME');
  }
}
