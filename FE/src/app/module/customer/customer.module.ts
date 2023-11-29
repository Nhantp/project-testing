
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerListComponent} from "./customer-list/customer-list.component";


// @ts-ignore
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
