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
import { RegisterUserRequest as ApSystemModelsAuthRegisterUserRequest } from '../models/APSystem/Models.Auth/register-user-request';
import { RegisterUserResponse as ApSystemModelsAuthRegisterUserResponse } from '../models/APSystem/Models.Auth/register-user-response';

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

}
