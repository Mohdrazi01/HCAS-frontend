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

}
