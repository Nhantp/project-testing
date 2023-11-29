import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InputInvoiceDetailListComponent} from './input-invoice-detail-list/input-invoice-detail-list.component';
import {InputInvoiceAddNewFormComponent} from './input-invoice-add-new-form/input-invoice-add-new-form.component';


const routes: Routes = [
  {
    path: '',
    component: InputInvoiceDetailListComponent
  },
  {
    path: 'new',
    component: InputInvoiceAddNewFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class InputInvoiceDetailRoutingModule { }
