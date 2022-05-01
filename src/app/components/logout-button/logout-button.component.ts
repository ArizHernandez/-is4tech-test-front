import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../../utilities/storage';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent {
  constructor(private storage: StorageService, private router: Router) {}

  logout() {
    this.storage.removeToken();

    this.router.navigateByUrl('/auth/login');
  }
}
