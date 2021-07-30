/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AuthRequest as ApSystemModelsAuthAuthRequest } from '../models/APSystem/Models.Auth/auth-request';
import { AuthResponse as ApSystemModelsAuthAuthResponse } from '../models/APSystem/Models.Auth/auth-response';
import { GenderService as ApSystemModelsAuthGenderService } from '../models/APSystem/Models.Auth/gender-service';
import { RegisterUserRequest as ApSystemModelsAuthRegisterUserRequest } from '../models/APSystem/Models.Auth/register-user-request';
import { RegisterUserResponse as ApSystemModelsAuthRegisterUserResponse } from '../models/APSystem/Models.Auth/register-user-response';
import { RoleService as ApSystemModelsAuthRoleService } from '../models/APSystem/Models.Auth/role-service';
import { UserService as ApSystemModelsAuthUserService } from '../models/APSystem/Models.Auth/user-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiV1AuthSignupPost
   */
  static readonly ApiV1AuthSignupPostPath = '/api/v1/Auth/signup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthSignupPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthSignupPost$Plain$Response(params?: {
      body?: ApSystemModelsAuthRegisterUserRequest
  }): Observable<StrictHttpResponse<ApSystemModelsAuthRegisterUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthSignupPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAuthRegisterUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthSignupPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthSignupPost$Plain(params?: {
      body?: ApSystemModelsAuthRegisterUserRequest
  }): Observable<ApSystemModelsAuthRegisterUserResponse> {

    return this.apiV1AuthSignupPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthRegisterUserResponse>) => r.body as ApSystemModelsAuthRegisterUserResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthSignupPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthSignupPost$Json$Response(params?: {
      body?: ApSystemModelsAuthRegisterUserRequest
  }): Observable<StrictHttpResponse<ApSystemModelsAuthRegisterUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthSignupPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAuthRegisterUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthSignupPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthSignupPost$Json(params?: {
      body?: ApSystemModelsAuthRegisterUserRequest
  }): Observable<ApSystemModelsAuthRegisterUserResponse> {

    return this.apiV1AuthSignupPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthRegisterUserResponse>) => r.body as ApSystemModelsAuthRegisterUserResponse)
    );
  }

  /**
   * Path part for operation apiV1AuthLoginPost
   */
  static readonly ApiV1AuthLoginPostPath = '/api/v1/Auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthLoginPost$Plain$Response(params?: {
      body?: ApSystemModelsAuthAuthRequest
  }): Observable<StrictHttpResponse<ApSystemModelsAuthAuthResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthLoginPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAuthAuthResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthLoginPost$Plain(params?: {
      body?: ApSystemModelsAuthAuthRequest
  }): Observable<ApSystemModelsAuthAuthResponse> {

    return this.apiV1AuthLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthAuthResponse>) => r.body as ApSystemModelsAuthAuthResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthLoginPost$Json$Response(params?: {
      body?: ApSystemModelsAuthAuthRequest
  }): Observable<StrictHttpResponse<ApSystemModelsAuthAuthResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthLoginPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAuthAuthResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthLoginPost$Json(params?: {
      body?: ApSystemModelsAuthAuthRequest
  }): Observable<ApSystemModelsAuthAuthResponse> {

    return this.apiV1AuthLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthAuthResponse>) => r.body as ApSystemModelsAuthAuthResponse)
    );
  }

  /**
   * Path part for operation apiV1AuthGetAllUsersGet
   */
  static readonly ApiV1AuthGetAllUsersGetPath = '/api/v1/Auth/GetAllUsers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetAllUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllUsersGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthUserService>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllUsersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthUserService>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthGetAllUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllUsersGet$Plain(params?: {

  }): Observable<Array<ApSystemModelsAuthUserService>> {

    return this.apiV1AuthGetAllUsersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthUserService>>) => r.body as Array<ApSystemModelsAuthUserService>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetAllUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllUsersGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthUserService>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllUsersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthUserService>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthGetAllUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllUsersGet$Json(params?: {

  }): Observable<Array<ApSystemModelsAuthUserService>> {

    return this.apiV1AuthGetAllUsersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthUserService>>) => r.body as Array<ApSystemModelsAuthUserService>)
    );
  }

  /**
   * Path part for operation apiV1AuthUserbyIdPost
   */
  static readonly ApiV1AuthUserbyIdPostPath = '/api/v1/Auth/UserbyID';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUserbyIdPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUserbyIdPost$Plain$Response(params?: {
    userID?: number;

  }): Observable<StrictHttpResponse<ApSystemModelsAuthUserService>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthUserbyIdPostPath, 'post');
    if (params) {

      rb.query('userID', params.userID, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAuthUserService>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUserbyIdPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUserbyIdPost$Plain(params?: {
    userID?: number;

  }): Observable<ApSystemModelsAuthUserService> {

    return this.apiV1AuthUserbyIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthUserService>) => r.body as ApSystemModelsAuthUserService)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUserbyIdPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUserbyIdPost$Json$Response(params?: {
    userID?: number;

  }): Observable<StrictHttpResponse<ApSystemModelsAuthUserService>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthUserbyIdPostPath, 'post');
    if (params) {

      rb.query('userID', params.userID, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAuthUserService>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUserbyIdPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUserbyIdPost$Json(params?: {
    userID?: number;

  }): Observable<ApSystemModelsAuthUserService> {

    return this.apiV1AuthUserbyIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthUserService>) => r.body as ApSystemModelsAuthUserService)
    );
  }

  /**
   * Path part for operation apiV1AuthUsersbyRoleIdPost
   */
  static readonly ApiV1AuthUsersbyRoleIdPostPath = '/api/v1/Auth/UsersbyRoleID';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUsersbyRoleIdPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUsersbyRoleIdPost$Plain$Response(params?: {
    roleID?: number;

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthUserService>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthUsersbyRoleIdPostPath, 'post');
    if (params) {

      rb.query('roleID', params.roleID, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthUserService>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUsersbyRoleIdPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUsersbyRoleIdPost$Plain(params?: {
    roleID?: number;

  }): Observable<Array<ApSystemModelsAuthUserService>> {

    return this.apiV1AuthUsersbyRoleIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthUserService>>) => r.body as Array<ApSystemModelsAuthUserService>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUsersbyRoleIdPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUsersbyRoleIdPost$Json$Response(params?: {
    roleID?: number;

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthUserService>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthUsersbyRoleIdPostPath, 'post');
    if (params) {

      rb.query('roleID', params.roleID, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthUserService>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUsersbyRoleIdPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUsersbyRoleIdPost$Json(params?: {
    roleID?: number;

  }): Observable<Array<ApSystemModelsAuthUserService>> {

    return this.apiV1AuthUsersbyRoleIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthUserService>>) => r.body as Array<ApSystemModelsAuthUserService>)
    );
  }

  /**
   * Path part for operation apiV1AuthGetAllRolesGet
   */
  static readonly ApiV1AuthGetAllRolesGetPath = '/api/v1/Auth/GetAllRoles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetAllRolesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllRolesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthRoleService>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllRolesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthRoleService>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthGetAllRolesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllRolesGet$Plain(params?: {

  }): Observable<Array<ApSystemModelsAuthRoleService>> {

    return this.apiV1AuthGetAllRolesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthRoleService>>) => r.body as Array<ApSystemModelsAuthRoleService>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetAllRolesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllRolesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthRoleService>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllRolesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthRoleService>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthGetAllRolesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllRolesGet$Json(params?: {

  }): Observable<Array<ApSystemModelsAuthRoleService>> {

    return this.apiV1AuthGetAllRolesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthRoleService>>) => r.body as Array<ApSystemModelsAuthRoleService>)
    );
  }

  /**
   * Path part for operation apiV1AuthGetAllGendersGet
   */
  static readonly ApiV1AuthGetAllGendersGetPath = '/api/v1/Auth/GetAllGenders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetAllGendersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllGendersGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthGenderService>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllGendersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthGenderService>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthGetAllGendersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllGendersGet$Plain(params?: {

  }): Observable<Array<ApSystemModelsAuthGenderService>> {

    return this.apiV1AuthGetAllGendersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthGenderService>>) => r.body as Array<ApSystemModelsAuthGenderService>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetAllGendersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllGendersGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthGenderService>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllGendersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthGenderService>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthGetAllGendersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllGendersGet$Json(params?: {

  }): Observable<Array<ApSystemModelsAuthGenderService>> {

    return this.apiV1AuthGetAllGendersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthGenderService>>) => r.body as Array<ApSystemModelsAuthGenderService>)
    );
  }

  /**
   * Path part for operation apiV1AuthEmailConfirmationPost
   */
  static readonly ApiV1AuthEmailConfirmationPostPath = '/api/v1/Auth/EmailConfirmation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthEmailConfirmationPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthEmailConfirmationPost$Plain$Response(params?: {
    emailActivationCode?: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthEmailConfirmationPostPath, 'post');
    if (params) {

      rb.query('emailActivationCode', params.emailActivationCode, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthEmailConfirmationPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthEmailConfirmationPost$Plain(params?: {
    emailActivationCode?: string;

  }): Observable<string> {

    return this.apiV1AuthEmailConfirmationPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthEmailConfirmationPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthEmailConfirmationPost$Json$Response(params?: {
    emailActivationCode?: string;

  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthEmailConfirmationPostPath, 'post');
    if (params) {

      rb.query('emailActivationCode', params.emailActivationCode, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthEmailConfirmationPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthEmailConfirmationPost$Json(params?: {
    emailActivationCode?: string;

  }): Observable<string> {

    return this.apiV1AuthEmailConfirmationPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
