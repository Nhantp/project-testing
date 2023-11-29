import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInvoicePreviewListComponent } from './input-invoice-preview-list.component';

describe('InputInvoicePreviewListComponent', () => {
  let component: InputInvoicePreviewListComponent;
  let fixture: ComponentFixture<InputInvoicePreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInvoicePreviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInvoicePreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
