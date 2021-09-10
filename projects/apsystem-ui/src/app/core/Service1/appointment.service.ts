import { BaseService } from '../../shared/layout/base-service';
import { environment } from '../../../environments/environment';
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { StrictHttpResponse } from '../../shared/layout/strict-http-response';
import { RequestBuilder } from '../../shared/layout/request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AppointmentSlots as ApSystemModelsAppointmentAppointmentSlots } from './Service1Models/appointment-slots';
import { Appointments as ApSystemModelsAppointmentAppointments } from './Service1Models/appointments';
import { AppointmentwithSlotsjoin as ApSystemModelsAppointmentAppointmentwithSlotsjoin } from './Service1Models/appointmentwith-slotsjoin';
import { ApiConfiguration } from '../../shared/layout/api-configuration';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }
  baseUrl = environment.apiBaseUrl;
  /**
   * Path part for operation apiV1AuthAddSlotsPost
   */
  static readonly ApiV1AuthAddSlotsPostPath = '/api/v1/Auth/AddSlots';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthAddSlotsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthAddSlotsPost$Plain$Response(params?: {
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthAddSlotsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthAddSlotsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthAddSlotsPost$Plain(params?: {
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AuthAddSlotsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthAddSlotsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthAddSlotsPost$Json$Response(params?: {
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthAddSlotsPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthAddSlotsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthAddSlotsPost$Json(params?: {
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AuthAddSlotsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * Path part for operation apiV1AuthApSlotsGet
   */
  static readonly ApiV1AuthApSlotsGetPath = '/api/v1/Auth/ApSlots';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthApSlotsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthApSlotsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentSlots>>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthApSlotsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentSlots>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthApSlotsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthApSlotsGet$Plain(params?: {

  }): Observable<Array<ApSystemModelsAppointmentAppointmentSlots>> {

    return this.apiV1AuthApSlotsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentSlots>>) => r.body as Array<ApSystemModelsAppointmentAppointmentSlots>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthApSlotsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthApSlotsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentSlots>>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthApSlotsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentSlots>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthApSlotsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthApSlotsGet$Json(params?: {

  }): Observable<Array<ApSystemModelsAppointmentAppointmentSlots>> {

    return this.apiV1AuthApSlotsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentSlots>>) => r.body as Array<ApSystemModelsAppointmentAppointmentSlots>)
    );
  }

  /**
   * Path part for operation apiV1AuthApSlotsbyidPost
   */
  static readonly ApiV1AuthApSlotsbyidPostPath = '/api/v1/Auth/ApSlotsbyid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthApSlotsbyidPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthApSlotsbyidPost$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthApSlotsbyidPostPath, 'post');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthApSlotsbyidPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthApSlotsbyidPost$Plain(params?: {
    id?: number;

  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AuthApSlotsbyidPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthApSlotsbyidPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthApSlotsbyidPost$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthApSlotsbyidPostPath, 'post');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthApSlotsbyidPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthApSlotsbyidPost$Json(params?: {
    id?: number;

  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AuthApSlotsbyidPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * Path part for operation apiV1AuthUpdateApSlotPut
   */
  static readonly ApiV1AuthUpdateApSlotPutPath = '/api/v1/Auth/UpdateApSlot';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUpdateApSlotPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthUpdateApSlotPut$Plain$Response(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthUpdateApSlotPutPath, 'put');
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
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUpdateApSlotPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthUpdateApSlotPut$Plain(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AuthUpdateApSlotPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthUpdateApSlotPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthUpdateApSlotPut$Json$Response(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthUpdateApSlotPutPath, 'put');
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
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthUpdateApSlotPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthUpdateApSlotPut$Json(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AuthUpdateApSlotPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * Path part for operation apiV1AuthDeleteSlotDelete
   */
  static readonly ApiV1AuthDeleteSlotDeletePath = '/api/v1/Auth/DeleteSlot';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthDeleteSlotDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthDeleteSlotDelete$Response(params?: {
      body?: number
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthDeleteSlotDeletePath, 'delete');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthDeleteSlotDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthDeleteSlotDelete(params?: {
      body?: number
  }): Observable<void> {

    return this.apiV1AuthDeleteSlotDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1AuthCreateApPost
   */
  static readonly ApiV1AuthCreateApPostPath = '/api/v1/Auth/CreateAp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthCreateApPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthCreateApPost$Plain$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointments>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthCreateApPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointments>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthCreateApPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthCreateApPost$Plain(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointments> {

    return this.apiV1AuthCreateApPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointments>) => r.body as ApSystemModelsAppointmentAppointments)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthCreateApPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthCreateApPost$Json$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointments>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthCreateApPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointments>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthCreateApPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthCreateApPost$Json(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointments> {

    return this.apiV1AuthCreateApPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointments>) => r.body as ApSystemModelsAppointmentAppointments)
    );
  }

  /**
   * Path part for operation apiV1AuthGetAppointmentGet
   */
  static readonly ApiV1AuthGetAppointmentGetPath = '/api/v1/Auth/GetAppointment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetAppointmentGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAppointmentGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthGetAppointmentGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthGetAppointmentGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAppointmentGet$Plain(params?: {

  }): Observable<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    return this.apiV1AuthGetAppointmentGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>) => r.body as Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthGetAppointmentGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAppointmentGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthGetAppointmentGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthGetAppointmentGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthGetAppointmentGet$Json(params?: {

  }): Observable<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    return this.apiV1AuthGetAppointmentGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>) => r.body as Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>)
    );
  }

  /**
   * Path part for operation apiV1AuthApbyDocIdPost
   */
  static readonly ApiV1AuthApbyDocIdPostPath = '/api/v1/Auth/ApbyDocId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthApbyDocIdPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthApbyDocIdPost$Plain$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthApbyDocIdPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthApbyDocIdPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthApbyDocIdPost$Plain(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    return this.apiV1AuthApbyDocIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>) => r.body as Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthApbyDocIdPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthApbyDocIdPost$Json$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthApbyDocIdPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthApbyDocIdPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthApbyDocIdPost$Json(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    return this.apiV1AuthApbyDocIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>) => r.body as Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>)
    );
  }

  /**
   * Path part for operation apiV1AuthAppointmentByIdPost
   */
  static readonly ApiV1AuthAppointmentByIdPostPath = '/api/v1/Auth/AppointmentById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthAppointmentByIdPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthAppointmentByIdPost$Plain$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthAppointmentByIdPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointmentwithSlotsjoin>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthAppointmentByIdPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthAppointmentByIdPost$Plain(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointmentwithSlotsjoin> {

    return this.apiV1AuthAppointmentByIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentwithSlotsjoin>) => r.body as ApSystemModelsAppointmentAppointmentwithSlotsjoin)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthAppointmentByIdPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthAppointmentByIdPost$Json$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthAppointmentByIdPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointmentwithSlotsjoin>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthAppointmentByIdPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthAppointmentByIdPost$Json(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointmentwithSlotsjoin> {

    return this.apiV1AuthAppointmentByIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentwithSlotsjoin>) => r.body as ApSystemModelsAppointmentAppointmentwithSlotsjoin)
    );
  }

  /**
   * Path part for operation apiV1AuthEditAppointmentPut
   */
  static readonly ApiV1AuthEditAppointmentPutPath = '/api/v1/Auth/EditAppointment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthEditAppointmentPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthEditAppointmentPut$Plain$Response(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointments>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthEditAppointmentPutPath, 'put');
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
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointments>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthEditAppointmentPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthEditAppointmentPut$Plain(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointments> {

    return this.apiV1AuthEditAppointmentPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointments>) => r.body as ApSystemModelsAppointmentAppointments)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthEditAppointmentPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthEditAppointmentPut$Json$Response(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointments>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthEditAppointmentPutPath, 'put');
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
        return r as StrictHttpResponse<ApSystemModelsAppointmentAppointments>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthEditAppointmentPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AuthEditAppointmentPut$Json(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointments> {

    return this.apiV1AuthEditAppointmentPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointments>) => r.body as ApSystemModelsAppointmentAppointments)
    );
  }

  /**
   * Path part for operation apiV1AuthDeleteAppointmentDelete
   */
  static readonly ApiV1AuthDeleteAppointmentDeletePath = '/api/v1/Auth/DeleteAppointment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AuthDeleteAppointmentDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthDeleteAppointmentDelete$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.baseUrl, AppointmentService.ApiV1AuthDeleteAppointmentDeletePath, 'delete');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1AuthDeleteAppointmentDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AuthDeleteAppointmentDelete(params?: {
    id?: number;

  }): Observable<void> {

    return this.apiV1AuthDeleteAppointmentDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
