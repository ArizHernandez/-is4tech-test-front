import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import {
  DistributorsResponse,
  DistributorResponse,
  Distributor,
  DistributorBody,
} from '../interfaces/distributor';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class DistributorsService {
  private baseUrl = `${environment.apiUrl}`;

  private _distributors: Distributor[] = [];

  constructor(private http: HttpClient, private notificationService: NotificationService) {}

  getDistributors() {
    this.http.get<DistributorsResponse>(`${this.baseUrl}/distributors`).subscribe({
      next: resp => {
        this._distributors = resp.data;
      },
      error: err => {
        this.notificationService.notificate({ message: err.error.message });
      },
    });
  }

  postDistributor(body: DistributorBody) {
    let error = null;

    this.http.post<DistributorResponse>(`${this.baseUrl}/distributors`, body).subscribe({
      next: resp => {
        this._distributors.unshift(resp.data);

        this.notificationService.notificate({ message: resp.message });
      },
      error: err => {
        error = err;
        this.notificationService.notificate({ message: err.error.message });
      },
    });

    return error;
  }

  putDistributor(body: DistributorBody, id: number) {
    let error = null;

    this.http.put<DistributorResponse>(`${this.baseUrl}/distributors/${id}`, body).subscribe({
      next: resp => {
        const editedDistributor = this._distributors.findIndex(
          distributor => distributor.id === resp.data.id
        );

        this._distributors[editedDistributor] = resp.data;

        this.notificationService.notificate({ message: resp.message });
      },
      error: err => {
        error = err;
        this.notificationService.notificate({ message: err.error.message });
      },
    });

    return error;
  }

  deleteDistributor(id: number) {
    let error = null;

    this.http.delete<DistributorResponse>(`${this.baseUrl}/distributors/${id}`).subscribe({
      next: resp => {
        this._distributors = this._distributors.filter(
          distributor => distributor.id !== resp.data.id
        );

        this.notificationService.notificate({ message: resp.message });
      },
      error: err => {
        error = err;
        this.notificationService.notificate({ message: err.error.message });
      },
    });

    return error;
  }

  getFakeDistributors() {
    this._distributors = [
      {
        id: 1,
        code: 'd1-ar',
        name: 'Distribuidor 1 Argentina',
        email_notificate: 'test@test.com',
        email_alert: 'alert@alert.com',
      },
    ];
  }

  postDistributorFake(body: DistributorBody) {
    this._distributors.unshift({ ...body, id: Math.floor(Math.random() * 100) });
  }

  putDistributorFake(body: DistributorBody, id: number) {
    const editedDistributor = this._distributors.findIndex(distributor => distributor.id === id);

    this._distributors[editedDistributor] = { ...body, id };
    return null;
  }

  deleteDistributorFake(id: number) {
    this._distributors = this._distributors.filter(distributor => distributor.id !== id);
    return null;
  }

  get distributors() {
    return this._distributors;
  }
}
