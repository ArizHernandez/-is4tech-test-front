import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../utilities/storage';

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private storage: StorageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.storage.getToken();

    if (!token) {
      this.router.navigateByUrl('/auth/login');
    }

    return Boolean(token);
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const token = this.storage.getToken();

    if (!token) {
      this.router.navigateByUrl('/auth/login');
    }

    return Boolean(token);
  }
}
