import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@ngneat/transloco';

import { AuthBody, LoginResp, RegisterResp } from '../interfaces/auth';
import { environment } from '../../environments/environment';
import { StorageService } from '../utilities/storage';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private storage: StorageService,
    private router: Router
  ) {}

  login(body: AuthBody) {
    return this.http.post<LoginResp>(`${this.baseUrl}/login`, body).subscribe({
      next: (res) => {
        this.storage.setToken(res.data.token);
        this.router.navigateByUrl('/home');

        this.notificationService.notificate({ message: 'WELCOME-BACK' });
      },
      error: (err) => {
        this.notificationService.notificate({ message: err.error.message });
      },
    });
  }

  signUp(body: AuthBody) {
    return this.http
      .post<RegisterResp>(`${this.baseUrl}/sign-up`, body)
      .subscribe({
        next: (_) => {
          this.router.navigateByUrl('/auth/login');

          this.notificationService.notificate({ message: 'USER-CREATED' });
        },
        error: (err) => {
          this.notificationService.notificate({ message: err.error.message });
        },
      });
  }

  fakeLogin() {
    this.storage.setToken('test');
    this.router.navigateByUrl('/home');

    this.notificationService.notificate({ message: 'WELCOME-BACK' });
  }

  fakeSignUp() {
    this.router.navigateByUrl('/auth/login');

    this.notificationService.notificate({ message: 'USER-CREATED' });
  }
}
