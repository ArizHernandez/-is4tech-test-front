import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../utilities/storage';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private storage: StorageService) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let transformedRequest = httpRequest;
    const token = this.storage.getToken();

    if (token) {
      transformedRequest = httpRequest.clone({
        headers: transformedRequest.headers.set('Authorization', `Bearer ${token}`),
      });
    }

    return next.handle(transformedRequest);
  }
}
