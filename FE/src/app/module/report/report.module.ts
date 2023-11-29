import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ReportCreateComponent} from "./report-create/report-create.component";
import {ProductModule} from "../product/product.module";


@NgModule({
  declarations: [
    ReportCreateComponent
  ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        ReactiveFormsModule,
        ProductModule,
    ]
})
export class ReportModule { }
