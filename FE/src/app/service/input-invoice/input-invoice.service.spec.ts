import { TestBed } from '@angular/core/testing';

import { InputInvoiceService } from './input-invoice.service';

describe('InputInvoiceService', () => {
  let service: InputInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
