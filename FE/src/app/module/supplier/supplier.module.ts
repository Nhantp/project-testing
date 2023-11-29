import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations:
      [
        SupplierListComponent
        ,CreateSupplierComponent
        ,UpdateSupplierComponent
      ],
    exports: [
        SupplierListComponent,
      CreateSupplierComponent,
      UpdateSupplierComponent
    ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SupplierModule{}
