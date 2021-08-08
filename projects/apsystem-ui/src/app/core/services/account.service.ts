import { UserModel } from './../models/user-model';
import { AppError } from './../models/common/base-response';
import { EmailModel } from './../models/email-model';
import { RoleModel } from './../models/role-model';
import { GenderModel } from './../models/gender-model';
import { StrictHttpResponse } from './../../../../../apsystem-api-client/src/lib/api/strict-http-response';
import { AuthUserRequest } from './../models/auth-user-request';
import { AuthResponse } from '@core/models/auth-response';
import { Observable, throwError } from 'rxjs';
import { RegisterUserRequest } from '@core/models/register-user-request';
import { RegisterUserResponse } from '@core/models/register-user-response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '@environments/environment';
import { AuthService } from '@api';
import { catchError } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiBaseUrl;
  constructor(
  private http: HttpClient
  ) {}

  login(user: AuthUserRequest): Observable<AuthResponse>{
    return this.http.post(this.baseUrl + '/api/v1/Auth/login', user)
    .pipe(
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse){
   console.warn(error.error);
   return throwError(error);

  }

  register(newUser: RegisterUserRequest): Observable<RegisterUserResponse>{
    return this.http.post(this.baseUrl + '/api/v1/Auth/signup', newUser);
  }

  gender(): Observable<GenderModel[]>{
    return this.http.get<GenderModel[]>(this.baseUrl + '/api/v1/Auth/GetAllGenders');
  }

  roles(): Observable<RoleModel[]>{
    return this.http.get<RoleModel[]>(this.baseUrl + '/api/v1/Auth/GetAllRoles');
  }

  emailConfirmation(emailActivationCode: string): Observable<any>{

     // tslint:disable-next-line: max-line-length
     return this.http.post<any>(this.baseUrl + '/api/v1/Auth/EmailConfirmation',
     {params:{emailActivationCode: emailActivationCode}})
    .pipe(
      catchError(this.handleError)
    );
  }

  UserProfile(userID:number):Observable<UserModel>{
   return this.http.get<UserModel>(this.baseUrl + '​/api​/v1​/Auth​/UserbyID',{params:{userID:userID}});

  }




}


