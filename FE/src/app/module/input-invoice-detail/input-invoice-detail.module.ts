import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputInvoiceDetailRoutingModule} from './input-invoice-detail-routing.module';
import {InputInvoiceDetailListComponent} from './input-invoice-detail-list/input-invoice-detail-list.component';
import {InputInvoicePreviewListComponent} from './input-invoice-preview-list/input-invoice-preview-list.component';
import {InputInvoiceAddNewFormComponent} from './input-invoice-add-new-form/input-invoice-add-new-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectSupplierModalComponent} from './select-supplier-modal/select-supplier-modal.component';
import {AppModule} from '../../app.module';
import {ProductModule} from '../product/product.module';
import {ProductSelectModalComponent} from '../product/product-select-modal/product-select-modal.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations:
    [InputInvoiceDetailListComponent,
      InputInvoicePreviewListComponent,
      InputInvoiceAddNewFormComponent,
      SelectSupplierModalComponent],
  imports: [
    CommonModule,
    InputInvoiceDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    RouterModule
  ]
})
export class InputInvoiceDetailModule {
}
