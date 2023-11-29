import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddUserComponent } from './add-user/add-user.component';
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [AddUserComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        AppModule
    ]
})
export class UserModule { }
