import { TestBed } from '@angular/core/testing';

import { ApsystemApiClientService } from './apsystem-api-client.service';

describe('ApsystemApiClientService', () => {
  let service: ApsystemApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApsystemApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
