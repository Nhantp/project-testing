import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InforUserRoutingModule } from './infor-user-routing.module';
import {BrowserModule} from "@angular/platform-browser";
import { ChangePasswordComponent } from './change-password/change-password.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    BrowserModule,
    InforUserRoutingModule,
    ReactiveFormsModule
  ]
})
export class InforUserModule {}
