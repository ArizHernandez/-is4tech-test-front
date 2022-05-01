import { Component } from '@angular/core';
import { routes } from '../../utilities/routes';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  routesNav = routes;
}
