import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportCreateComponent} from './report-create/report-create.component';


const routes: Routes = [
  {
    path: '',
    component: ReportCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
