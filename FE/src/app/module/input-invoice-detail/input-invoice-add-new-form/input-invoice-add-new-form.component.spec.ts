import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInvoiceAddNewFormComponent } from './input-invoice-add-new-form.component';

describe('InputInvoiceAddNewFormComponent', () => {
  let component: InputInvoiceAddNewFormComponent;
  let fixture: ComponentFixture<InputInvoiceAddNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInvoiceAddNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInvoiceAddNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
