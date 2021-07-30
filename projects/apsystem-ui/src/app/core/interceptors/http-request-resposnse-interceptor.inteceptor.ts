import { catchError } from 'rxjs/operators';
import { HttpInterceptor , HttpEvent,  HttpHandler, HttpRequest, HttpHeaders, HTTP_INTERCEPTORS, HttpErrorResponse} from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestResposnseInterceptor implements HttpInterceptor {

  constructor() { }
  handleError(error: HttpErrorResponse){
    console.warn(error.error);
    return throwError(error);
   }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.warn("interceptor ")
    return next.handle(request).pipe(
      catchError(this.handleError)
    );

    if(localStorage.getItem('access_Token') != null)
    {
      console.warn("interceptor ")
      const token =  localStorage.getItem('access_Token');
   // if the token is  stored in localstorage add it to http header
      const headers = new HttpHeaders().set('access_Token', token);
  // clone http to the custom AuthRequest and send it to the server
      const AuthRequest = request.clone({headers: headers});
      return next.handle(AuthRequest);
      }else {
        return next.handle(request);

      }

     }

}


export const HttpRequestResposnseInterceptorProviders =
[
  {provider: HTTP_INTERCEPTORS, useClass: HttpRequestResposnseInterceptor, multi: true}
];
