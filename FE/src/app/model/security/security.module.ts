import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {SecurityRoutingModule} from "./security-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

import { UserDetailComponent } from '../user-detail/user-detail/user-detail.component';
@NgModule({
  declarations: [LoginComponent, UserDetailComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
