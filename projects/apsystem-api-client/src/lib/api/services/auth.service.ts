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
import { EmailConfirmationResponse as ApSystemModelsAuthEmailConfirmationResponse } from '../models/APSystem/Models.Auth/email-confirmation-response';
import { GenderResponse as ApSystemModelsAuthGenderResponse } from '../models/APSystem/Models.Auth/gender-response';
import { RegisterUserRequest as ApSystemModelsAuthRegisterUserRequest } from '../models/APSystem/Models.Auth/register-user-request';
import { RegisterUserResponse as ApSystemModelsAuthRegisterUserResponse } from '../models/APSystem/Models.Auth/register-user-response';
import { RoleResponse as ApSystemModelsAuthRoleResponse } from '../models/APSystem/Models.Auth/role-response';
import { UserDetailsRequest as ApSystemModelsAuthUserDetailsRequest } from '../models/APSystem/Models.Auth/user-details-request';
import { UserDetailsResponse as ApSystemModelsAuthUserDetailsResponse } from '../models/APSystem/Models.Auth/user-details-response';

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

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllUsersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>;
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

  }): Observable<Array<ApSystemModelsAuthUserDetailsResponse>> {

    return this.apiV1AuthGetAllUsersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>) => r.body as Array<ApSystemModelsAuthUserDetailsResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetAllUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllUsersGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllUsersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>;
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

  }): Observable<Array<ApSystemModelsAuthUserDetailsResponse>> {

    return this.apiV1AuthGetAllUsersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>) => r.body as Array<ApSystemModelsAuthUserDetailsResponse>)
    );
  }

  /**
   * Path part for operation apiV1AuthUserbyIdGet
   */
  static readonly ApiV1AuthUserbyIdGetPath = '/api/v1/Auth/UserbyID';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUserbyIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUserbyIdGet$Plain$Response(params?: {
    userID?: number;

  }): Observable<StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthUserbyIdGetPath, 'get');
    if (params) {

      rb.query('userID', params.userID, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUserbyIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUserbyIdGet$Plain(params?: {
    userID?: number;

  }): Observable<ApSystemModelsAuthUserDetailsResponse> {

    return this.apiV1AuthUserbyIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>) => r.body as ApSystemModelsAuthUserDetailsResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUserbyIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUserbyIdGet$Json$Response(params?: {
    userID?: number;

  }): Observable<StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthUserbyIdGetPath, 'get');
    if (params) {

      rb.query('userID', params.userID, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUserbyIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUserbyIdGet$Json(params?: {
    userID?: number;

  }): Observable<ApSystemModelsAuthUserDetailsResponse> {

    return this.apiV1AuthUserbyIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>) => r.body as ApSystemModelsAuthUserDetailsResponse)
    );
  }

  /**
   * Path part for operation apiV1AuthUsersbyRoleIdGet
   */
  static readonly ApiV1AuthUsersbyRoleIdGetPath = '/api/v1/Auth/UsersbyRoleID';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUsersbyRoleIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUsersbyRoleIdGet$Plain$Response(params?: {
    roleID?: number;

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthUsersbyRoleIdGetPath, 'get');
    if (params) {

      rb.query('roleID', params.roleID, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUsersbyRoleIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUsersbyRoleIdGet$Plain(params?: {
    roleID?: number;

  }): Observable<Array<ApSystemModelsAuthUserDetailsResponse>> {

    return this.apiV1AuthUsersbyRoleIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>) => r.body as Array<ApSystemModelsAuthUserDetailsResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUsersbyRoleIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUsersbyRoleIdGet$Json$Response(params?: {
    roleID?: number;

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthUsersbyRoleIdGetPath, 'get');
    if (params) {

      rb.query('roleID', params.roleID, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUsersbyRoleIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthUsersbyRoleIdGet$Json(params?: {
    roleID?: number;

  }): Observable<Array<ApSystemModelsAuthUserDetailsResponse>> {

    return this.apiV1AuthUsersbyRoleIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>) => r.body as Array<ApSystemModelsAuthUserDetailsResponse>)
    );
  }

  /**
   * Path part for operation apiV1AuthGetDoctorsandNursesGet
   */
  static readonly ApiV1AuthGetDoctorsandNursesGetPath = '/api/v1/Auth/GetDoctorsandNurses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetDoctorsandNursesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetDoctorsandNursesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetDoctorsandNursesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthGetDoctorsandNursesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetDoctorsandNursesGet$Plain(params?: {

  }): Observable<Array<ApSystemModelsAuthUserDetailsResponse>> {

    return this.apiV1AuthGetDoctorsandNursesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>) => r.body as Array<ApSystemModelsAuthUserDetailsResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetDoctorsandNursesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetDoctorsandNursesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetDoctorsandNursesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthGetDoctorsandNursesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetDoctorsandNursesGet$Json(params?: {

  }): Observable<Array<ApSystemModelsAuthUserDetailsResponse>> {

    return this.apiV1AuthGetDoctorsandNursesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthUserDetailsResponse>>) => r.body as Array<ApSystemModelsAuthUserDetailsResponse>)
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

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthRoleResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllRolesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthRoleResponse>>;
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

  }): Observable<Array<ApSystemModelsAuthRoleResponse>> {

    return this.apiV1AuthGetAllRolesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthRoleResponse>>) => r.body as Array<ApSystemModelsAuthRoleResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetAllRolesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllRolesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthRoleResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllRolesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthRoleResponse>>;
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

  }): Observable<Array<ApSystemModelsAuthRoleResponse>> {

    return this.apiV1AuthGetAllRolesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthRoleResponse>>) => r.body as Array<ApSystemModelsAuthRoleResponse>)
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

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthGenderResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllGendersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthGenderResponse>>;
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

  }): Observable<Array<ApSystemModelsAuthGenderResponse>> {

    return this.apiV1AuthGetAllGendersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthGenderResponse>>) => r.body as Array<ApSystemModelsAuthGenderResponse>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetAllGendersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAllGendersGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAuthGenderResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthGetAllGendersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAuthGenderResponse>>;
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

  }): Observable<Array<ApSystemModelsAuthGenderResponse>> {

    return this.apiV1AuthGetAllGendersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAuthGenderResponse>>) => r.body as Array<ApSystemModelsAuthGenderResponse>)
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

  }): Observable<StrictHttpResponse<ApSystemModelsAuthEmailConfirmationResponse>> {

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
        return r as StrictHttpResponse<ApSystemModelsAuthEmailConfirmationResponse>;
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

  }): Observable<ApSystemModelsAuthEmailConfirmationResponse> {

    return this.apiV1AuthEmailConfirmationPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthEmailConfirmationResponse>) => r.body as ApSystemModelsAuthEmailConfirmationResponse)
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

  }): Observable<StrictHttpResponse<ApSystemModelsAuthEmailConfirmationResponse>> {

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
        return r as StrictHttpResponse<ApSystemModelsAuthEmailConfirmationResponse>;
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

  }): Observable<ApSystemModelsAuthEmailConfirmationResponse> {

    return this.apiV1AuthEmailConfirmationPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthEmailConfirmationResponse>) => r.body as ApSystemModelsAuthEmailConfirmationResponse)
    );
  }

  /**
   * Path part for operation apiV1AuthUpdateUserDetailsPost
   */
  static readonly ApiV1AuthUpdateUserDetailsPostPath = '/api/v1/Auth/UpdateUserDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUpdateUserDetailsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthUpdateUserDetailsPost$Plain$Response(params?: {
    id?: number;
      body?: ApSystemModelsAuthUserDetailsRequest
  }): Observable<StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthUpdateUserDetailsPostPath, 'post');
    if (params) {

      rb.query('id', params.id, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUpdateUserDetailsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthUpdateUserDetailsPost$Plain(params?: {
    id?: number;
      body?: ApSystemModelsAuthUserDetailsRequest
  }): Observable<ApSystemModelsAuthUserDetailsResponse> {

    return this.apiV1AuthUpdateUserDetailsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>) => r.body as ApSystemModelsAuthUserDetailsResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUpdateUserDetailsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthUpdateUserDetailsPost$Json$Response(params?: {
    id?: number;
      body?: ApSystemModelsAuthUserDetailsRequest
  }): Observable<StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiV1AuthUpdateUserDetailsPostPath, 'post');
    if (params) {

      rb.query('id', params.id, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUpdateUserDetailsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthUpdateUserDetailsPost$Json(params?: {
    id?: number;
      body?: ApSystemModelsAuthUserDetailsRequest
  }): Observable<ApSystemModelsAuthUserDetailsResponse> {

    return this.apiV1AuthUpdateUserDetailsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAuthUserDetailsResponse>) => r.body as ApSystemModelsAuthUserDetailsResponse)
    );
  }

}
