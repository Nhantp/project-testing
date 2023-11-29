import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManagerPurchaseHistoryListComponent} from './manager-purchase-history-list/manager-purchase-history-list.component';


const routes: Routes = [
  {
  path: '',
  component: ManagerPurchaseHistoryListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerPurchaseHistoryRoutingModule { }
