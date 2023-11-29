import { TestBed } from '@angular/core/testing';

import { InputInvoiceDetailService } from './input-invoice-detail.service';

describe('InputInvoiceDetailService', () => {
  let service: InputInvoiceDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputInvoiceDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
