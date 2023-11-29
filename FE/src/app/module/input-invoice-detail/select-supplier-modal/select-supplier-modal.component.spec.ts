import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSupplierModalComponent } from './select-supplier-modal.component';

describe('SelectSupplierModalComponent', () => {
  let component: SelectSupplierModalComponent;
  let fixture: ComponentFixture<SelectSupplierModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSupplierModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSupplierModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
