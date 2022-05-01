import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  encrypt(value: string | CryptoJS.lib.WordArray) {
    const encryptValue = AES.encrypt(value, environment.secretKey);

    return encryptValue.toString();
  }

  decrypt(value: string | CryptoJS.lib.CipherParams) {
    const decriptedValue = AES.decrypt(value, environment.secretKey);

    return decriptedValue.toString(enc.Utf8);
  }
}
