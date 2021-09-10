import { TokenStorageService } from './../services/Token/token-storage.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestResponseInterceptorService implements HttpInterceptor {

  constructor(
      private tokenService: TokenStorageService,
      private router: Router
    ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // this.objloaderService.SendShowHide(true);
    if (this.tokenService.isLogin) {
     request = this.addToken(request, this.tokenService.getToken());
    }

    return next.handle(request).pipe(

      tap(evt => {if (evt instanceof HttpResponse) {
        //this.objloaderService.SendShowHide(false);
      }}),
      catchError((error, caught) => {
        if (error instanceof HttpErrorResponse) {
         // this.objloaderService.SendShowHide(false);
          switch (error.status) {
            case 400: return this.handle400Error(error);
            case 401: return this.handle401Error(error);
            case 404: return this.handle404Error(error);
            case 500: return this.handle500Error(error);
            case 504: return this.handle504Error(error);
            default: return this.handledefaultError(error);
          }
        }

        return throwError(error);
      })

      );


  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` ,
      },
    });
  }

  private handle401Error(error:any): Observable<HttpEvent<any>> {
    this.tokenService.signout();
    this.router.navigate(['/login']);
    alertify.error(error.error.appError.description, 3000);
    throw null;
  }

  private handle400Error(error:any): Observable<HttpEvent<any>> {
    var  arrerror=error.error.appError.description.split('--',)
    if(arrerror.length>=2)
   {
      arrerror.forEach( (message, index) => {
      setTimeout(() => {
        if(index>0)
        {
        let arr = message.split(':');

        alertify.success(arr[arr.length - 1],3000);
        }
      },);
  });

   }
   else
   {
    alertify.error(arrerror[arrerror.length - 1],3000);
   }
    throw null;
  }

  private handle404Error(error: any): Observable<HttpEvent<any>> {
    alertify.error(error.error.appError.description,3000);
    throw null;
  }

  private handle500Error(error: any): Observable<HttpEvent<any>> {
    alertify.error(error.error.appError.description,3000);
    throw null;
  }

  private handle504Error(error:any): Observable<HttpEvent<any>> {
    alertify.error(error.error.appError.description,3000);
    throw null;
  }
  private handledefaultError(error:any): Observable<HttpEvent<any>> {
    alertify.error('Something went wrong.',3000);
    throw null;
  }



  // constructor(private token: TokenStorageService) { }
  // intercept(req,next){
  //  let tokanisedRequest = req.clone({
  //    setHeaders:{
  //      Authorization: 'Bearer '+ this.token.getToken()
  //    }
  //  })
  //  return next.handle(tokanisedRequest);
  // }



}
