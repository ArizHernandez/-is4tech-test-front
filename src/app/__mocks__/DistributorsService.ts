import { Injectable } from '@angular/core';

import { Distributor, DistributorBody } from '../interfaces/distributor';

@Injectable({
  providedIn: 'root',
})
export class DistributorsServiceMock {
  private _distributors: Distributor[] = [];

  getDistributors() {
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

  postDistributor(body: DistributorBody) {
    this._distributors.unshift({ ...body, id: Math.floor(Math.random() * 100) });
  }

  putDistributor(body: DistributorBody, id: number) {
    const editedDistributor = this._distributors.findIndex(distributor => distributor.id === id);

    this._distributors[editedDistributor] = { ...body, id };
    return null;
  }

  deleteDistributor(id: number) {
    this._distributors = this._distributors.filter(distributor => distributor.id !== id);
    return null;
  }

  get distributors() {
    return this._distributors;
  }
}
