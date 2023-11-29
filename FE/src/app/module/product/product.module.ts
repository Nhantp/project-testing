import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductRoutingModule} from './product-routing.module';
import {ProductSelectModalComponent} from './product-select-modal/product-select-modal.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductEditComponent} from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductSelectModalComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  exports: [
    ProductSelectModalComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule {
}

