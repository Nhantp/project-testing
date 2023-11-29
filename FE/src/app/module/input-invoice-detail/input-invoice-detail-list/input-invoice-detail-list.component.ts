import {Component, Input, OnInit} from '@angular/core';
import {InputInvoiceDetailService} from '../../../service/input-invoice/input-invoice-detail.service';
import {InputInvoiceDetail} from '../../../model/input-invoice-detail';
import {Page} from '../../../model/page';

@Component({
  selector: 'app-input-invoice-detail-list',
  templateUrl: './input-invoice-detail-list.component.html',
  styleUrls: ['./input-invoice-detail-list.component.css']
})
export class InputInvoiceDetailListComponent implements OnInit {
// hien thi list va phan trang
  page: Page<InputInvoiceDetail>;
  inputInvoiceList: InputInvoiceDetail[];

  //Lưu giá trị search từ input để gởi về server
  supplierName='';
  productName='';
  startDate='';
  endDate='';
  isSearch=false;

  constructor(private inputInvoiceService: InputInvoiceDetailService) {
    // this.inputInvoiceService.getInputInvoiceList(this.supplierName, this.productName, this.startDate, this.endDate,0).subscribe(
    //   next => {
    //    this.inputInvoiceList = next.content;
    //    this.page = next;
    // }
    // );
      this.getInputDetail(0);
  }

  ngOnInit(): void {
  }

  getInputDetail(pageNo: number) {
    this.inputInvoiceService.getInputInvoiceList(this.supplierName,this.productName,this.startDate,this.endDate,pageNo).subscribe(
      next => {
        this.inputInvoiceList = next.content;
        this.page = next;
      }
    );
    console.log(this.isSearch);
  }
  cancelSearch(pageNo: number){
    this.supplierName='';
    this.productName='';
    this.startDate='';
    this.endDate='';
    this.inputInvoiceService.getInputInvoiceList(this.supplierName,this.productName,this.startDate,this.endDate,pageNo).subscribe(
      next => {
        this.inputInvoiceList = next.content;
        this.page = next;
        this.isSearch=false;
      }
    );
  }
  search(pageNo:number){
    this.inputInvoiceService.search(this.supplierName, this.productName, this.startDate, this.endDate,pageNo).subscribe(
      next => {
        this.inputInvoiceList = next.content;
        this.page = next
        if (this.supplierName!=''||this.productName!=''||this.startDate!=''||this.endDate!=''){
          this.isSearch=true;
        }
      }
    )
  }


}
