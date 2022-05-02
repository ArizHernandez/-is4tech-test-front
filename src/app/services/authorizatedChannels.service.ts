import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import {
  AuthorizatedChannelsResponse,
  AuthorizatedChannel,
  AuthorizatedChannelBody,
  AuthorizatedChannelResponse,
} from '../interfaces/authorizatedChannel';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizatedChannelsService {
  private baseUrl = `${environment.apiUrl}/authorizated-channels`;

  private _authorizatedChannels: AuthorizatedChannel[] = [];

  constructor(private http: HttpClient, private notificationService: NotificationService) {}

  getAuthorizatedChannels() {
    this.http.get<AuthorizatedChannelsResponse>(`${this.baseUrl}`).subscribe({
      next: resp => {
        this._authorizatedChannels = resp.data;
      },
      error: err => {
        const error = err.error.message ? err.error.message : err.message;

        this.notificationService.notificate({ message: error });
      },
    });
  }

  postAuthorizatedChannel(body: AuthorizatedChannelBody) {
    let error = null;

    this.http.post<AuthorizatedChannelResponse>(`${this.baseUrl}`, body).subscribe({
      next: resp => {
        this._authorizatedChannels.unshift(resp.data);

        this.notificationService.notificate({ message: resp.message });
      },
      error: err => {
        error = err.error.message ? err.error.message : err.message;

        this.notificationService.notificate({ message: error });
      },
    });

    return error;
  }

  putAuthorizatedChannel(body: AuthorizatedChannelBody, id: number) {
    let error = null;

    this.http.put<AuthorizatedChannelResponse>(`${this.baseUrl}/${id}`, body).subscribe({
      next: resp => {
        const editedauthorizatedChannels = this._authorizatedChannels.findIndex(
          authorizatedChannel => authorizatedChannel.id === resp.data.id
        );

        this._authorizatedChannels[editedauthorizatedChannels] = resp.data;

        this.notificationService.notificate({ message: resp.message });
      },
      error: err => {
        error = err.error.message ? err.error.message : err.message;

        this.notificationService.notificate({ message: error });
      },
    });

    return error;
  }

  deleteAuthorizatedChannel(id: number) {
    let error = null;

    this.http.delete<AuthorizatedChannelResponse>(`${this.baseUrl}/${id}`).subscribe({
      next: resp => {
        this._authorizatedChannels = this._authorizatedChannels.filter(
          authorizatedChannel => authorizatedChannel.id !== resp.data.id
        );

        this.notificationService.notificate({ message: resp.message });
      },
      error: err => {
        error = err.error.message ? err.error.message : err.message;

        this.notificationService.notificate({ message: error });
      },
    });

    return error;
  }

  getFakeAuthorizatedChannels() {
    this._authorizatedChannels = [
      {
        id: 1,
        code: 'd1-ar',
        name: 'Distribuidor 1 Argentina',
        distributor_id: 1,
        distributor: {
          id: 1,
          code: 'd1-ar',
          name: 'Distribuidor 1 Argentina',
          email_notificate: 'test@test.com',
          email_alert: 'alert@alert.com',
        },
      },
    ];
  }

  postAuthorizatedChannelFake(body: AuthorizatedChannelBody) {
    this._authorizatedChannels.unshift({
      ...body,
      id: Math.floor(Math.random() * 100),
      distributor: {
        id: 1,
        code: 'd1-ar',
        name: 'Distribuidor 1 Argentina',
        email_notificate: 'test@test.com',
        email_alert: 'alert@alert.com',
      },
    });
  }

  putAuthorizatedChannelFake(body: AuthorizatedChannelBody, id: number) {
    const editedauthorizatedChannels = this._authorizatedChannels.findIndex(
      authorizatedChannel => authorizatedChannel.id === id
    );

    this._authorizatedChannels[editedauthorizatedChannels] = {
      ...body,
      id,
      distributor: {
        id: 1,
        code: 'd1-ar',
        name: 'Distribuidor 1 Argentina',
        email_notificate: 'test@test.com',
        email_alert: 'alert@alert.com',
      },
    };
    return null;
  }

  deleteAuthorizatedChannelFake(id: number) {
    this._authorizatedChannels = this._authorizatedChannels.filter(
      authorizatedChannel => authorizatedChannel.id !== id
    );
    return null;
  }

  get authorizatedChannels() {
    return this._authorizatedChannels;
  }
}
