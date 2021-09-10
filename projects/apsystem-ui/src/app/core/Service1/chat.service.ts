import { environment } from './../../../../../apsystem-ui/src/environments/environment';
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { StrictHttpResponse } from '../../shared/layout/strict-http-response';
import { ApiConfiguration } from '../../shared/layout/api-configuration';
import { RequestBuilder } from '../../shared/layout/request-builder';
import { BaseService } from '../../shared/layout/base-service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { MessageDto as ApSystemCoreControllersChatReqDtoMessageDto } from './Service1Models/message-dto';

@Injectable({
  providedIn: 'root',
})
export class ChatService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }
  baseUrl = environment.apiBaseUrl;
  /**
   * Path part for operation apiV1ChatSendPost
   */
  static readonly ApiV1ChatSendPostPath = '/api/v1/Chat/send';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ChatSendPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ChatSendPost$Response(params?: {
      body?: ApSystemCoreControllersChatReqDtoMessageDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.baseUrl, ChatService.ApiV1ChatSendPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiV1ChatSendPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ChatSendPost(params?: {
      body?: ApSystemCoreControllersChatReqDtoMessageDto
  }): Observable<void> {

    return this.apiV1ChatSendPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
