/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AppointmentSlots as ApSystemModelsAppointmentAppointmentSlots } from '../models/APSystem/Models.Appointment/appointment-slots';
import { Appointments as ApSystemModelsAppointmentAppointments } from '../models/APSystem/Models.Appointment/appointments';
import { AppointmentwithSlotsjoin as ApSystemModelsAppointmentAppointmentwithSlotsjoin } from '../models/APSystem/Models.Appointment/appointmentwith-slotsjoin';

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

  /**
   * Path part for operation apiV1AppointmentAddSlotsPost
   */
  static readonly ApiV1AppointmentAddSlotsPostPath = '/api/v1/Appointment/AddSlots';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentAddSlotsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentAddSlotsPost$Plain$Response(params?: {
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentAddSlotsPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1AppointmentAddSlotsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentAddSlotsPost$Plain(params?: {
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AppointmentAddSlotsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentAddSlotsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentAddSlotsPost$Json$Response(params?: {
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentAddSlotsPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1AppointmentAddSlotsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentAddSlotsPost$Json(params?: {
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AppointmentAddSlotsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * Path part for operation apiV1AppointmentApSlotsGet
   */
  static readonly ApiV1AppointmentApSlotsGetPath = '/api/v1/Appointment/ApSlots';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentApSlotsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AppointmentApSlotsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentSlots>>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentApSlotsGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiV1AppointmentApSlotsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AppointmentApSlotsGet$Plain(params?: {

  }): Observable<Array<ApSystemModelsAppointmentAppointmentSlots>> {

    return this.apiV1AppointmentApSlotsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentSlots>>) => r.body as Array<ApSystemModelsAppointmentAppointmentSlots>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentApSlotsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AppointmentApSlotsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentSlots>>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentApSlotsGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiV1AppointmentApSlotsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AppointmentApSlotsGet$Json(params?: {

  }): Observable<Array<ApSystemModelsAppointmentAppointmentSlots>> {

    return this.apiV1AppointmentApSlotsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentSlots>>) => r.body as Array<ApSystemModelsAppointmentAppointmentSlots>)
    );
  }

  /**
   * Path part for operation apiV1AppointmentApSlotsbyidPost
   */
  static readonly ApiV1AppointmentApSlotsbyidPostPath = '/api/v1/Appointment/ApSlotsbyid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentApSlotsbyidPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentApSlotsbyidPost$Plain$Response(params?: {
      body?: number
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentApSlotsbyidPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1AppointmentApSlotsbyidPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentApSlotsbyidPost$Plain(params?: {
      body?: number
  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AppointmentApSlotsbyidPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentApSlotsbyidPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentApSlotsbyidPost$Json$Response(params?: {
      body?: number
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentApSlotsbyidPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1AppointmentApSlotsbyidPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentApSlotsbyidPost$Json(params?: {
      body?: number
  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AppointmentApSlotsbyidPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * Path part for operation apiV1AppointmentUpdateApSlotPut
   */
  static readonly ApiV1AppointmentUpdateApSlotPutPath = '/api/v1/Appointment/UpdateApSlot';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentUpdateApSlotPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentUpdateApSlotPut$Plain$Response(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentUpdateApSlotPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiV1AppointmentUpdateApSlotPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentUpdateApSlotPut$Plain(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AppointmentUpdateApSlotPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentUpdateApSlotPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentUpdateApSlotPut$Json$Response(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentUpdateApSlotPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiV1AppointmentUpdateApSlotPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentUpdateApSlotPut$Json(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointmentSlots
  }): Observable<ApSystemModelsAppointmentAppointmentSlots> {

    return this.apiV1AppointmentUpdateApSlotPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentSlots>) => r.body as ApSystemModelsAppointmentAppointmentSlots)
    );
  }

  /**
   * Path part for operation apiV1AppointmentDeleteSlotDelete
   */
  static readonly ApiV1AppointmentDeleteSlotDeletePath = '/api/v1/Appointment/DeleteSlot';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentDeleteSlotDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentDeleteSlotDelete$Response(params?: {
      body?: number
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentDeleteSlotDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiV1AppointmentDeleteSlotDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentDeleteSlotDelete(params?: {
      body?: number
  }): Observable<void> {

    return this.apiV1AppointmentDeleteSlotDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1AppointmentCreateApPost
   */
  static readonly ApiV1AppointmentCreateApPostPath = '/api/v1/Appointment/CreateAp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentCreateApPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentCreateApPost$Plain$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointments>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentCreateApPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1AppointmentCreateApPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentCreateApPost$Plain(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointments> {

    return this.apiV1AppointmentCreateApPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointments>) => r.body as ApSystemModelsAppointmentAppointments)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentCreateApPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentCreateApPost$Json$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointments>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentCreateApPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1AppointmentCreateApPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentCreateApPost$Json(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointments> {

    return this.apiV1AppointmentCreateApPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointments>) => r.body as ApSystemModelsAppointmentAppointments)
    );
  }

  /**
   * Path part for operation apiV1AppointmentGetAppointmentGet
   */
  static readonly ApiV1AppointmentGetAppointmentGetPath = '/api/v1/Appointment/GetAppointment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentGetAppointmentGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AppointmentGetAppointmentGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentGetAppointmentGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiV1AppointmentGetAppointmentGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AppointmentGetAppointmentGet$Plain(params?: {

  }): Observable<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    return this.apiV1AppointmentGetAppointmentGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>) => r.body as Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentGetAppointmentGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AppointmentGetAppointmentGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentGetAppointmentGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiV1AppointmentGetAppointmentGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AppointmentGetAppointmentGet$Json(params?: {

  }): Observable<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    return this.apiV1AppointmentGetAppointmentGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>) => r.body as Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>)
    );
  }

  /**
   * Path part for operation apiV1AppointmentApbyDocIdPost
   */
  static readonly ApiV1AppointmentApbyDocIdPostPath = '/api/v1/Appointment/ApbyDocId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentApbyDocIdPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentApbyDocIdPost$Plain$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentApbyDocIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1AppointmentApbyDocIdPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentApbyDocIdPost$Plain(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    return this.apiV1AppointmentApbyDocIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>) => r.body as Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentApbyDocIdPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentApbyDocIdPost$Json$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentApbyDocIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1AppointmentApbyDocIdPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentApbyDocIdPost$Json(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    return this.apiV1AppointmentApbyDocIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>>) => r.body as Array<ApSystemModelsAppointmentAppointmentwithSlotsjoin>)
    );
  }

  /**
   * Path part for operation apiV1AppointmentAppointmentByIdPost
   */
  static readonly ApiV1AppointmentAppointmentByIdPostPath = '/api/v1/Appointment/AppointmentById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentAppointmentByIdPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentAppointmentByIdPost$Plain$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentAppointmentByIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1AppointmentAppointmentByIdPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentAppointmentByIdPost$Plain(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointmentwithSlotsjoin> {

    return this.apiV1AppointmentAppointmentByIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentwithSlotsjoin>) => r.body as ApSystemModelsAppointmentAppointmentwithSlotsjoin)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentAppointmentByIdPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentAppointmentByIdPost$Json$Response(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointmentwithSlotsjoin>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentAppointmentByIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1AppointmentAppointmentByIdPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentAppointmentByIdPost$Json(params?: {
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointmentwithSlotsjoin> {

    return this.apiV1AppointmentAppointmentByIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointmentwithSlotsjoin>) => r.body as ApSystemModelsAppointmentAppointmentwithSlotsjoin)
    );
  }

  /**
   * Path part for operation apiV1AppointmentEditAppointmentPut
   */
  static readonly ApiV1AppointmentEditAppointmentPutPath = '/api/v1/Appointment/EditAppointment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentEditAppointmentPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentEditAppointmentPut$Plain$Response(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointments>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentEditAppointmentPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiV1AppointmentEditAppointmentPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentEditAppointmentPut$Plain(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointments> {

    return this.apiV1AppointmentEditAppointmentPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointments>) => r.body as ApSystemModelsAppointmentAppointments)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentEditAppointmentPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentEditAppointmentPut$Json$Response(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<StrictHttpResponse<ApSystemModelsAppointmentAppointments>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentEditAppointmentPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiV1AppointmentEditAppointmentPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1AppointmentEditAppointmentPut$Json(params?: {
    id?: number;
      body?: ApSystemModelsAppointmentAppointments
  }): Observable<ApSystemModelsAppointmentAppointments> {

    return this.apiV1AppointmentEditAppointmentPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsAppointmentAppointments>) => r.body as ApSystemModelsAppointmentAppointments)
    );
  }

  /**
   * Path part for operation apiV1AppointmentDeleteAppointmentDelete
   */
  static readonly ApiV1AppointmentDeleteAppointmentDeletePath = '/api/v1/Appointment/DeleteAppointment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1AppointmentDeleteAppointmentDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AppointmentDeleteAppointmentDelete$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentService.ApiV1AppointmentDeleteAppointmentDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiV1AppointmentDeleteAppointmentDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1AppointmentDeleteAppointmentDelete(params?: {
    id?: number;

  }): Observable<void> {

    return this.apiV1AppointmentDeleteAppointmentDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
