import { Injectable } from '@angular/core';
import { StorageHelper } from '../helpers/storage.helper';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: StorageHelper) {}

  tokenKey = 'AC_D';

  setTheme(theme: 'light' | 'dark') {
    this.storage.set(theme, 'theme');
  }

  getTheme() {
    return this.storage.get('theme');
  }

  setToken(token: string) {
    this.storage.set(token, this.tokenKey);
  }

  getToken() {
    return this.storage.get(this.tokenKey);
  }
}
