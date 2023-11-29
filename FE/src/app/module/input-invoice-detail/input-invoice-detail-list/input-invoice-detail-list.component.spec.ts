import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInvoiceDetailListComponent } from './input-invoice-detail-list.component';

describe('InputInvoiceDetailListComponent', () => {
  let component: InputInvoiceDetailListComponent;
  let fixture: ComponentFixture<InputInvoiceDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInvoiceDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInvoiceDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
