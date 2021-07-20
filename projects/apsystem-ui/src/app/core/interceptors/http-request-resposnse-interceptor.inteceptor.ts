import { HttpInterceptor ,HttpEvent,  HttpHandler, HttpRequest, HttpHeaders, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestResposnseInterceptor implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('access-token') != null)
   {
      const token =  localStorage.getItem('access-token');
   // if the token is  stored in localstorage add it to http header
   const headers = new HttpHeaders().set("access-token", token);
      //clone http to the custom AuthRequest and send it to the server
   const AuthRequest = request.clone( { headers: headers});
   return next.handle(AuthRequest)
      }else {
        return next.handle(request);
      }
     }
}

export const HttpRequestResposnseInterceptorProviders=
[
  {provider:HTTP_INTERCEPTORS,useClass:HttpRequestResposnseInterceptor,multi:true}
]
