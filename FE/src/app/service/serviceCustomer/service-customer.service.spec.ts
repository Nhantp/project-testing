import { TestBed } from '@angular/core/testing';

import { ServiceCustomerService } from './service-customer.service';

describe('ServiceCustomerService', () => {
  let service: ServiceCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
