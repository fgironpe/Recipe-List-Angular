import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      // Take: Te permite coger el número de valores de la suscripción que le pasas por parámetro y luego de desuscribe.
      take(1),
      /*
      * Espera a que el primer observable termine y después coge el valor del observable anterior y devuelve un nuevo
      * observable que reemplaza el primer observable.
      * */
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedRequest = req.clone({
          params: new HttpParams().set('auth', user.token)
        });
        console.log('modifiedRequest => ', modifiedRequest);
        return next.handle(modifiedRequest);
      })
    );
  }
}
