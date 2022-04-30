import { Injectable } from '@angular/core';
import { SecurityService } from './security.helper';

@Injectable({
  providedIn: 'root',
})
export class StorageHelper {
  constructor(private security: SecurityService) {}

  set(value: string, key: string) {
    const encrypted = this.security.encrypt(value);

    localStorage.setItem(key, encrypted);
  }

  get(key: string) {
    let item = localStorage.getItem(key);

    if (item) {
      item = this.security.decrypt(item);
    }

    return item;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
