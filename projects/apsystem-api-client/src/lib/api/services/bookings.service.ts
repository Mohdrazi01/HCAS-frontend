/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BookingAppointment as ApSystemModelsBookingsBookingAppointment } from '../models/APSystem/Models.Bookings/booking-appointment';

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

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingGetAllBookingsGetPath, 'get');
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

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingGetAllBookingsGetPath, 'get');
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

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingCreateBookingPostPath, 'post');
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

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingCreateBookingPostPath, 'post');
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
   * Path part for operation apiV1BookingGetBookingsbyUserIdPost
   */
  static readonly ApiV1BookingGetBookingsbyUserIdPostPath = '/api/v1/Booking/GetBookingsbyUserId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyUserIdPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyUserIdPost$Plain$Response(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>> {

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingGetBookingsbyUserIdPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyUserIdPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyUserIdPost$Plain(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<Array<ApSystemModelsBookingsBookingAppointment>> {

    return this.apiV1BookingGetBookingsbyUserIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>) => r.body as Array<ApSystemModelsBookingsBookingAppointment>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyUserIdPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyUserIdPost$Json$Response(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>> {

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingGetBookingsbyUserIdPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyUserIdPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyUserIdPost$Json(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<Array<ApSystemModelsBookingsBookingAppointment>> {

    return this.apiV1BookingGetBookingsbyUserIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>) => r.body as Array<ApSystemModelsBookingsBookingAppointment>)
    );
  }

  /**
   * Path part for operation apiV1BookingGetBookingsbyDoctorIdPost
   */
  static readonly ApiV1BookingGetBookingsbyDoctorIdPostPath = '/api/v1/Booking/GetBookingsbyDoctorId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyDoctorIdPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyDoctorIdPost$Plain$Response(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>> {

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingGetBookingsbyDoctorIdPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyDoctorIdPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyDoctorIdPost$Plain(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<Array<ApSystemModelsBookingsBookingAppointment>> {

    return this.apiV1BookingGetBookingsbyDoctorIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>) => r.body as Array<ApSystemModelsBookingsBookingAppointment>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyDoctorIdPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyDoctorIdPost$Json$Response(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>> {

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingGetBookingsbyDoctorIdPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyDoctorIdPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyDoctorIdPost$Json(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<Array<ApSystemModelsBookingsBookingAppointment>> {

    return this.apiV1BookingGetBookingsbyDoctorIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ApSystemModelsBookingsBookingAppointment>>) => r.body as Array<ApSystemModelsBookingsBookingAppointment>)
    );
  }

  /**
   * Path part for operation apiV1BookingGetBookingsbyIdPost
   */
  static readonly ApiV1BookingGetBookingsbyIdPostPath = '/api/v1/Booking/GetBookingsbyId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyIdPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyIdPost$Plain$Response(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>> {

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingGetBookingsbyIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyIdPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyIdPost$Plain(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<ApSystemModelsBookingsBookingAppointment> {

    return this.apiV1BookingGetBookingsbyIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>) => r.body as ApSystemModelsBookingsBookingAppointment)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1BookingGetBookingsbyIdPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyIdPost$Json$Response(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<StrictHttpResponse<ApSystemModelsBookingsBookingAppointment>> {

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingGetBookingsbyIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1BookingGetBookingsbyIdPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1BookingGetBookingsbyIdPost$Json(params?: {
      body?: ApSystemModelsBookingsBookingAppointment
  }): Observable<ApSystemModelsBookingsBookingAppointment> {

    return this.apiV1BookingGetBookingsbyIdPost$Json$Response(params).pipe(
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

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingUpdateBookingPutPath, 'put');
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

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingUpdateBookingPutPath, 'put');
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

    const rb = new RequestBuilder(this.rootUrl, BookingsService.ApiV1BookingDeleteBookingDeletePath, 'delete');
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

}
