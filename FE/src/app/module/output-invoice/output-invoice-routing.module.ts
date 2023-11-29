import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaleManagerComponent} from './sale-manager/sale-manager.component';
import {VNPayComponent} from './vnpay/vnpay.component';
import {VnpayInvoiceComponent} from './vnpay-invoice/vnpay-invoice.component';


const routes: Routes = [
  {
    path: '',
    component: SaleManagerComponent
  },
  {
    path: 'vnpay',
    component: VNPayComponent
  },
  {
    path: 'vnpay-payment',
    component: VnpayInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutputInvoiceRoutingModule { }
