import {NgModule, Pipe} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OutputInvoiceRoutingModule} from './output-invoice-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppRoutingModule} from '../../app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {VnpayInvoiceComponent} from './vnpay-invoice/vnpay-invoice.component';
import {SaleManagerComponent} from "./sale-manager/sale-manager.component";
import {VNPayComponent} from "./vnpay/vnpay.component";
import {CustomerListComponent} from "../customer/customer-list/customer-list.component";
import {ProductListComponent} from "../product/product-list/product-list.component";
import {CustomerModule} from "../customer/customer.module";
import {ProductModule} from "../product/product.module";
import {ProductSelectModalComponent} from "../product/product-select-modal/product-select-modal.component";


@NgModule({
  declarations: [SaleManagerComponent, VNPayComponent, VnpayInvoiceComponent, CustomerListComponent],
  imports: [
    OutputInvoiceRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CustomerModule,
    ProductModule,
    CommonModule
  ],
})
export class OutputInvoiceModule {
}
