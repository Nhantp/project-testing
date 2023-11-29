import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerPurchaseHistoryRoutingModule } from './manager-purchase-history-routing.module';
import { ManagerPurchaseHistoryListComponent } from './manager-purchase-history-list/manager-purchase-history-list.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [ManagerPurchaseHistoryListComponent],
  imports: [
    CommonModule,
    ManagerPurchaseHistoryRoutingModule
  ]
})
export class ManagerPurchaseHistoryModule { }
