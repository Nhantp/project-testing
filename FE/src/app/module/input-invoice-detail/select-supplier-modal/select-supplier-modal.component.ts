import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Supplier} from '../../../model/supplier';
import {SupplierService} from '../../../service/supplier-service/supplier.service';

@Component({
  selector: 'app-select-supplier-modal',
  templateUrl: './select-supplier-modal.component.html',
  styleUrls: ['./select-supplier-modal.component.css']
})
export class SelectSupplierModalComponent implements OnInit {
  supplierList: Supplier[] = [];
  @Output() supplierEmitted = new EventEmitter<Supplier>();
  supplerToEmit: Supplier = null;

  constructor(private supplierService: SupplierService) {
    this.supplierService.getAllSuppliers(1, 8).subscribe(
      next => this.supplierList = next.content
    );
  }

  ngOnInit(): void {
  }
  chooseSupplier(id: number) {
     this.supplierService.getById(id).subscribe(
       next => this.supplerToEmit = next,
       error => console.log('Co loi khi lay supplier theo id'),
       () => this.supplierEmitted.emit(this.supplerToEmit)
     );

  }
}
