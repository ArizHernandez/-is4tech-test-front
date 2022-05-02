import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ProductsResponse, Product, ProductBody, ProductResponse } from '../interfaces/product';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = `${environment.apiUrl}/products`;

  private _products: Product[] = [];

  constructor(private http: HttpClient, private notificationService: NotificationService) {}

  getProducts() {
    this.http.get<ProductsResponse>(`${this.baseUrl}`).subscribe({
      next: resp => {
        this._products = resp.data;
      },
      error: err => {
        const error = err.error.message ? err.error.message : err.message;

        this.notificationService.notificate({ message: error });
      },
    });
  }

  postProduct(body: ProductBody) {
    let error = null;

    this.http.post<ProductResponse>(`${this.baseUrl}`, body).subscribe({
      next: resp => {
        this._products.unshift(resp.data);

        this.notificationService.notificate({ message: resp.message });
      },
      error: err => {
        error = err.error.message ? err.error.message : err.message;

        this.notificationService.notificate({ message: error });
      },
    });

    return error;
  }

  putProduct(body: ProductBody, id: number) {
    let error = null;

    this.http.put<ProductResponse>(`${this.baseUrl}/${id}`, body).subscribe({
      next: resp => {
        const editedProducts = this._products.findIndex(product => product.id === resp.data.id);

        this._products[editedProducts] = resp.data;

        this.notificationService.notificate({ message: resp.message });
      },
      error: err => {
        error = err.error.message ? err.error.message : err.message;

        this.notificationService.notificate({ message: error });
      },
    });

    return error;
  }

  deleteProduct(id: number) {
    let error = null;

    this.http.delete<ProductResponse>(`${this.baseUrl}/${id}`).subscribe({
      next: resp => {
        this._products = this._products.filter(product => product.id !== resp.data.id);

        this.notificationService.notificate({ message: resp.message });
      },
      error: err => {
        error = err.error.message ? err.error.message : err.message;

        this.notificationService.notificate({ message: error });
      },
    });

    return error;
  }

  getFakeProducts() {
    this._products = [
      {
        id: 1,
        distributor_id: 1,
        code: 'RTX-380-01',
        description: 'test',
        amount: 8000.0,
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

  postProductFake(body: ProductBody) {
    this._products.unshift({
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

  putProductFake(body: ProductBody, id: number) {
    const editedProducts = this._products.findIndex(product => product.id === id);

    this._products[editedProducts] = {
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

  deleteProductFake(id: number) {
    this._products = this._products.filter(product => product.id !== id);
    return null;
  }

  get products() {
    return this._products;
  }
}
