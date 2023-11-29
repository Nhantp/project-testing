import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectModalComponent } from './product-select-modal.component';

describe('ProductListComponent', () => {
  let component: ProductSelectModalComponent;
  let fixture: ComponentFixture<ProductSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSelectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
