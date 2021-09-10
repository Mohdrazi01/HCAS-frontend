/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { StrictHttpResponse } from '../../shared/layout/strict-http-response';
import { RequestBuilder } from '../../shared/layout/request-builder';
import { BaseService } from '../../shared/layout/base-service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ApiConfiguration } from '../../shared/layout/api-configuration';

import { AppointmentStatusRequest as ApSystemModelsBookingsAppointmentStatusRequest } from './Service1Models/appointment-status-request';
import { AppointmentTypes as ApSystemModelsBookingsAppointmentTypes } from './Service1Models/appointment-types';
import { BookingAppointment as ApSystemModelsBookingsBookingAppointment } from './Service1Models/booking-appointment';
import { environment } from './../../../../../apsystem-ui/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }
  baseUrl = environment.apiBaseUrl;
  /**
   * Path part for operation apiV1BookingGetAllBookingsGet
   */
  static readonly ApiV1BookingGetAllBookingsGetPath = '/api/v1/Booking/GetAllBookings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetAllBookingsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAllBookingsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetAllBookingsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetAllBookingsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAllBookingsGet$Plain(params?: {

  }): Observable<Array<ApSystemModelsBookingsBookingAppointment>> {

    return this.apiV1BookingGetAllBookingsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>) => r.body as Array<ApSystemModelsBookingsBookingAppointment>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetAllBookingsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAllBookingsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetAllBookingsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetAllBookingsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAllBookingsGet$Json(params?: {

  }): Observable<Array<ApSystemModelsBookingsBookingAppointment>> {

    return this.apiV1BookingGetAllBookingsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>) => r.body as Array<ApSystemModelsBookingsBookingAppointment>)
    );
  }

  /**
   * Path part for operation apiV1BookingCreateBookingPost
   */
  static readonly ApiV1BookingCreateBookingPostPath = '/api/v1/Booking/CreateBooking';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingCreateBookingPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingCreateBookingPost$Plain$Response(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingCreateBookingPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingCreateBookingPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingCreateBookingPost$Plain(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<ApSystemModelsBookingsBookingAppointment> {

    return this.apiV1BookingCreateBookingPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>) => r.body as ApSystemModelsBookingsBookingAppointment)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingCreateBookingPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingCreateBookingPost$Json$Response(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingCreateBookingPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingCreateBookingPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingCreateBookingPost$Json(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<ApSystemModelsBookingsBookingAppointment> {

    return this.apiV1BookingCreateBookingPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>) => r.body as ApSystemModelsBookingsBookingAppointment)
    );
  }

  /**
   * Path part for operation apiV1BookingGetBookingsbyUserIdGet
   */
  static readonly ApiV1BookingGetBookingsbyUserIdGetPath = '/api/v1/Booking/GetBookingsbyUserId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyUserIdGet$Plain$Response(params?: {
    bookingbyUserid?: number;

  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetBookingsbyUserIdGetPath, 'get');
    if (params) {

      rb.query('bookingbyUserid', params.bookingbyUserid, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyUserIdGet$Plain(params?: {
    bookingbyUserid?: number;

  }): Observable<Array<ApSystemModelsBookingsBookingAppointment>> {

    return this.apiV1BookingGetBookingsbyUserIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>) => r.body as Array<ApSystemModelsBookingsBookingAppointment>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyUserIdGet$Json$Response(params?: {
    bookingbyUserid?: number;

  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetBookingsbyUserIdGetPath, 'get');
    if (params) {

      rb.query('bookingbyUserid', params.bookingbyUserid, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyUserIdGet$Json(params?: {
    bookingbyUserid?: number;

  }): Observable<Array<ApSystemModelsBookingsBookingAppointment>> {

    return this.apiV1BookingGetBookingsbyUserIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>) => r.body as Array<ApSystemModelsBookingsBookingAppointment>)
    );
  }

  /**
   * Path part for operation apiV1BookingGetBookingsbyDoctorIdGet
   */
  static readonly ApiV1BookingGetBookingsbyDoctorIdGetPath = '/api/v1/Booking/GetBookingsbyDoctorId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyDoctorIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyDoctorIdGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetBookingsbyDoctorIdGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyDoctorIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyDoctorIdGet$Plain(params?: {
    id?: number;

  }): Observable<Array<ApSystemModelsBookingsBookingAppointment>> {

    return this.apiV1BookingGetBookingsbyDoctorIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>) => r.body as Array<ApSystemModelsBookingsBookingAppointment>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyDoctorIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyDoctorIdGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetBookingsbyDoctorIdGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyDoctorIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyDoctorIdGet$Json(params?: {
    id?: number;

  }): Observable<Array<ApSystemModelsBookingsBookingAppointment>> {

    return this.apiV1BookingGetBookingsbyDoctorIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>) => r.body as Array<ApSystemModelsBookingsBookingAppointment>)
    );
  }

  /**
   * Path part for operation apiV1BookingGetBookingsbyIdGet
   */
  static readonly ApiV1BookingGetBookingsbyIdGetPath = '/api/v1/Booking/GetBookingsbyId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyIdGet$Plain$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetBookingsbyIdGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyIdGet$Plain(params?: {
    id?: number;

  }): Observable<ApSystemModelsBookingsBookingAppointment> {

    return this.apiV1BookingGetBookingsbyIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>) => r.body as ApSystemModelsBookingsBookingAppointment)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyIdGet$Json$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetBookingsbyIdGetPath, 'get');
    if (params) {

      rb.query('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetBookingsbyIdGet$Json(params?: {
    id?: number;

  }): Observable<ApSystemModelsBookingsBookingAppointment> {

    return this.apiV1BookingGetBookingsbyIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>) => r.body as ApSystemModelsBookingsBookingAppointment)
    );
  }

  /**
   * Path part for operation apiV1BookingUpdateBookingPut
   */
  static readonly ApiV1BookingUpdateBookingPutPath = '/api/v1/Booking/UpdateBooking';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingUpdateBookingPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingUpdateBookingPut$Plain$Response(params?: {
    id?: number;
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingUpdateBookingPutPath, 'put');
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
        return r as StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingUpdateBookingPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingUpdateBookingPut$Plain(params?: {
    id?: number;
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<ApSystemModelsBookingsBookingAppointment> {

    return this.apiV1BookingUpdateBookingPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>) => r.body as ApSystemModelsBookingsBookingAppointment)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingUpdateBookingPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingUpdateBookingPut$Json$Response(params?: {
    id?: number;
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingUpdateBookingPutPath, 'put');
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
        return r as StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingUpdateBookingPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingUpdateBookingPut$Json(params?: {
    id?: number;
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<ApSystemModelsBookingsBookingAppointment> {

    return this.apiV1BookingUpdateBookingPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>) => r.body as ApSystemModelsBookingsBookingAppointment)
    );
  }

  /**
   * Path part for operation apiV1BookingDeleteBookingDelete
   */
  static readonly ApiV1BookingDeleteBookingDeletePath = '/api/v1/Booking/DeleteBooking';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingDeleteBookingDelete()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingDeleteBookingDelete$Response(params?: {
      body?: number
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingDeleteBookingDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiV1BookingDeleteBookingDelete$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingDeleteBookingDelete(params?: {
      body?: number
  }): Observable<void> {

    return this.apiV1BookingDeleteBookingDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiV1BookingGetAppointmentTypesGet
   */
  static readonly ApiV1BookingGetAppointmentTypesGetPath = '/api/v1/Booking/GetAppointmentTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetAppointmentTypesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAppointmentTypesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentTypes>>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetAppointmentTypesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentTypes>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetAppointmentTypesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAppointmentTypesGet$Plain(params?: {

  }): Observable<Array<ApSystemModelsBookingsAppointmentTypes>> {

    return this.apiV1BookingGetAppointmentTypesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentTypes>>) => r.body as Array<ApSystemModelsBookingsAppointmentTypes>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetAppointmentTypesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAppointmentTypesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentTypes>>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetAppointmentTypesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentTypes>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetAppointmentTypesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAppointmentTypesGet$Json(params?: {

  }): Observable<Array<ApSystemModelsBookingsAppointmentTypes>> {

    return this.apiV1BookingGetAppointmentTypesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentTypes>>) => r.body as Array<ApSystemModelsBookingsAppointmentTypes>)
    );
  }

  /**
   * Path part for operation apiV1BookingGetAppointmentStatusGet
   */
  static readonly ApiV1BookingGetAppointmentStatusGetPath = '/api/v1/Booking/GetAppointmentStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetAppointmentStatusGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAppointmentStatusGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentStatusRequest>>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetAppointmentStatusGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentStatusRequest>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetAppointmentStatusGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAppointmentStatusGet$Plain(params?: {

  }): Observable<Array<ApSystemModelsBookingsAppointmentStatusRequest>> {

    return this.apiV1BookingGetAppointmentStatusGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentStatusRequest>>) => r.body as Array<ApSystemModelsBookingsAppointmentStatusRequest>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetAppointmentStatusGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAppointmentStatusGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentStatusRequest>>> {

    const rb = new RequestBuilder(this.baseUrl, BookingsService.ApiV1BookingGetAppointmentStatusGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentStatusRequest>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiV1BookingGetAppointmentStatusGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1BookingGetAppointmentStatusGet$Json(params?: {

  }): Observable<Array<ApSystemModelsBookingsAppointmentStatusRequest>> {

    return this.apiV1BookingGetAppointmentStatusGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsAppointmentStatusRequest>>) => r.body as Array<ApSystemModelsBookingsAppointmentStatusRequest>)
    );
  }

}
