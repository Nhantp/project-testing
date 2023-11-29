import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProductInputDto} from '../../../dto/ProductInputDto';
import {Supplier} from '../../../model/supplier';
import {InputInvoiceService} from '../../../service/input-invoice/input-invoice.service';
import {InputInvoiceDetailService} from '../../../service/input-invoice/input-invoice-detail.service';
import {InputInvoiceDto} from '../../../dto/InputInvoiceDto';
import Swal from "sweetalert2";

@Component({
  selector: 'app-input-invoice-preview-list',
  templateUrl: './input-invoice-preview-list.component.html',
  styleUrls: ['./input-invoice-preview-list.component.css']
})
export class InputInvoicePreviewListComponent implements OnInit, OnChanges {
  @Input() item: ProductInputDto;
  @Output() reloadProductListModalSignal = new EventEmitter<boolean>();
  previewListInputItem: ProductInputDto[] = [];
  supplier: Supplier = null;
  supplierName = '';
  inputInvoiceDto: InputInvoiceDto;
  totalCostOfInvoice = 0;
  isSupplierSelected = false;
  haveItemInList = false;
  productToDeleteId:number;
  productToDeleteName:string;
  constructor(private inputInvoiceService: InputInvoiceService,
              private inputInvoiceDetailService: InputInvoiceDetailService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item && this.item) {
      this.previewListInputItem.push(this.item);
      this.totalCostOfInvoice = 0;
      this.haveItemInList = true;
      for (const product of this.previewListInputItem) {
        this.totalCostOfInvoice += (product.quantity * product.costPrice);
      }
    }
  }

  dropItem(itemIndex: number) {
    // for (const item of this.previewListInputItem) {
    //   if (item.productId === itemIndex) {
    //     this.totalCostOfInvoice -= (item.costPrice * item.quantity);
    //   }
    // }
    this.previewListInputItem.splice(itemIndex, 1);
    this.totalCostOfInvoice = 0;
    for (const product of this.previewListInputItem) {
        this.totalCostOfInvoice += (product.quantity * product.costPrice);
      }
    if (this.previewListInputItem.length === 0 ) {
      this.haveItemInList = false;
    }
    }
  chooseSupplier(emittedSupplier: Supplier) {
    this.supplier = emittedSupplier;
    this.supplierName = this.supplier.supplierName;
    if (!this.isSupplierSelected) {
      this.isSupplierSelected = !this.isSupplierSelected;
    }
  }

  addInputInvoice() {
    console.log(this.supplier);
    console.log(this.previewListInputItem);
    this.inputInvoiceDto = new InputInvoiceDto(this.previewListInputItem, this.supplier);
    this.inputInvoiceService.addInputInvoiceList(this.inputInvoiceDto).subscribe(
      next => {console.log('ok');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Đã nhập kho thành công',
          showConfirmButton: false,
          timer: 1500,
        });
        this.previewListInputItem = [];
               this.totalCostOfInvoice = 0;
               this.supplierName = '';
               this.isSupplierSelected = false;
               this.haveItemInList = false;
               this.reloadProductListModalSignal.emit(true);
      }
    );
    // this.inputInvoiceService.addInputInvoiceList(this.supplier).subscribe(
    //   next => this.inputInvoiceDetailService.addInputInvoiceDetail(this.previewListInputItem).
    // )
  }

  getProductDelete(i:number,name:string){
    this.productToDeleteId = i;
    this.productToDeleteName = name;
  }
}
