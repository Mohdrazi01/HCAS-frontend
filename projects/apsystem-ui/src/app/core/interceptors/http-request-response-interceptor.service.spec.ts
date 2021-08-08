/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpRequestResponseInterceptorService } from './http-request-response-interceptor.service';

describe('Service: HttpRequestResponseInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestResponseInterceptorService]
    });
  });

  it('should ...', inject([HttpRequestResponseInterceptorService], (service: HttpRequestResponseInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
