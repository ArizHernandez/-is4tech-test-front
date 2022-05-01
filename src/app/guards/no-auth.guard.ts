/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  Router,
} from '@angular/router';
import { StorageService } from '../utilities/storage';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private storage: StorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.storage.getToken();

    if (token) {
      this.router.navigateByUrl('/home');
    }

    return !token;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const token = this.storage.getToken();

    if (token) {
      this.router.navigateByUrl('/home');
    }

    return !token;
  }
}
